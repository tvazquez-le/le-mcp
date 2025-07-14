import time
from collections import deque
from urllib.parse import urljoin, urlparse

import requests
from bs4 import BeautifulSoup
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

class UnlimitedCrawler:
    def __init__(self, base_url, delay=1.0, timeout=10,
                 max_retries=3, backoff_factor=1.0):
        self.base_url = base_url
        self.base_netloc = urlparse(base_url).netloc
        self.delay = delay
        self.timeout = timeout

        # Build a session with retry logic
        self.session = requests.Session()
        retry_strategy = Retry(
            total=max_retries,
            connect=max_retries,
            read=max_retries,
            status=max_retries,
            backoff_factor=backoff_factor,
            status_forcelist=[429, 500, 502, 503, 504],
            allowed_methods=["HEAD", "GET", "OPTIONS"],
            raise_on_status=False
        )
        adapter = HTTPAdapter(max_retries=retry_strategy)
        self.session.mount("https://", adapter)
        self.session.mount("http://", adapter)

        self.visited = set()
        # Will hold per-page data: { "url": ..., "meta": [...] }
        self.page_data = []

    def crawl(self):
        """
        Crawl all internal links (no depth limit), extract for each page:
          • all <meta> tags (attributes), filtering out default tags.
        Uses retries on timeouts/errors.
        """
        queue = deque([self.base_url])

        def is_excluded(attrs):
            # same as before...
            if attrs.get("charset", "").lower() == "utf-8":
                return True
            if attrs.get("name", "").lower() == "mobileoptimized" and attrs.get("content", "").lower() == "width":
                return True
            if attrs.get("name", "").lower() == "handheldfriendly" and attrs.get("content", "").lower() == "true":
                return True
            if attrs.get("name", "").lower() == "viewport" and "width=device-width" in attrs.get("content", "").lower():
                return True
            if attrs.get("name", "").lower() == "msapplication-config" and attrs.get("content", "").lower().endswith("/browserconfig.xml"):
                return True
            return False

        while queue:
            url = queue.popleft()
            if url in self.visited:
                continue
            self.visited.add(url)

            try:
                resp = self.session.get(url, timeout=self.timeout)
                resp.raise_for_status()
            except requests.exceptions.ReadTimeout:
                print(f"[!] Read timeout for {url}, skipping after retries")
                continue
            except requests.exceptions.RequestException as e:
                print(f"[!] Request failed for {url}: {e}")
                continue

            print(url)

            # Parse with 'lxml' first, fallback to 'html.parser'
            try:
                soup = BeautifulSoup(resp.text, "lxml")
            except Exception:
                try:
                    soup = BeautifulSoup(resp.text, "html.parser")
                except Exception as parse_err:
                    print(f"[!] Parser error at {url}: {parse_err}")
                    continue

            # Extract <meta> tags, filtering out excluded ones
            meta_tags = []
            for meta in soup.find_all("meta"):
                if not meta.attrs:
                    continue
                attrs = meta.attrs.copy()
                if not is_excluded(attrs):
                    meta_tags.append(attrs)

            # Save page data
            self.page_data.append({"url": url, "meta": meta_tags})

            for m in meta_tags:
                print(f"      • {m}")
            if not meta_tags:
                print("      (none)")

            # Enqueue new internal links
            for a in soup.find_all("a", href=True):
                href = a["href"].split("#")[0]
                next_url = urljoin(url, href)
                p = urlparse(next_url)
                if p.scheme in ("http", "https") and p.netloc == self.base_netloc and next_url not in self.visited:
                    queue.append(next_url)

            time.sleep(self.delay)

if __name__ == "__main__":
    crawler = UnlimitedCrawler(
        base_url="https://stage10.phenomenex.com/",
        delay=0.5,
        timeout=10,
        max_retries=3,
        backoff_factor=1.0
    )
    crawler.crawl()

    print(f"\nCrawled {len(crawler.page_data)} pages.")
    # Optionally dump to JSON:
    # import json
    # with open("meta_data.json", "w") as f:
    #     json.dump(crawler.page_data, f, indent=2)
