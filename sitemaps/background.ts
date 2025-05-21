chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      (function () {
        const existing = document.getElementById('sitemapPanel');
        if (existing) return;

        const panel = document.createElement('div');
        panel.id = 'sitemapPanel';
        panel.style.position = 'fixed';
        panel.style.bottom = '20px';
        panel.style.right = '20px';
        panel.style.width = '400px';
        panel.style.maxHeight = '50vh';
        panel.style.overflowY = 'auto';
        panel.style.padding = '10px';
        panel.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
        panel.style.color = 'white';
        panel.style.fontSize = '12px';
        panel.style.zIndex = 9999;
        panel.style.borderRadius = '8px';
        panel.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
        panel.innerText = 'Loading sitemap data...';

        document.body.appendChild(panel);

        try {
          const result = window.SalesforceInteractions.getSitemapResult();
          panel.innerText = JSON.stringify(result, null, 2);
        } catch (e) {
          panel.innerText = 'Failed to load sitemap result: ' + e.message;
        }
      })();
    }
  });
});
