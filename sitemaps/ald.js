window._sf = SalesforceInteractions;

const waitForElement = (selector, isXpath = false) => {
    const query = isXpath
        ? () => document.evaluate(selector, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
        : () => document.querySelector(selector);

    return new Promise((resolve) => {
        if (!document.body) {
            window.addEventListener('DOMContentLoaded', () => resolve(waitForElement(selector, isXpath)));
            return;
        }
        const element = query();
        if (element) {
            return resolve(element);
        }
        const observer = new MutationObserver(() => {
            const targetElement = query();
            if (targetElement) {
                observer.disconnect();
                resolve(targetElement);
            }
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
};

const createGlobalContactUsListener = () => {
    waitForElement("form:has(input[name='areas_of_interest']) input[type='submit']").then(submitButton => {
        submitButton.addEventListener("click", () => {
            const fname = _sf.cashDom("input[name='firstname']").val();
            const lname = _sf.cashDom("input[name='lastname']").val();
            const email = _sf.cashDom("input[name='email']").val();
            const phone = _sf.cashDom("input[name='phone']").val();
            const selectJobType = document.querySelector("select[name='job_type']");
            const selectedJobType = selectJobType.options[selectJobType.selectedIndex].text;
            const company = _sf.cashDom("input[name='company']").val();
            const selectedModalities = Array.from(
                document.querySelectorAll('input[name="modalities"]:checked')
            ).map((input) => input.value);
            const selectedAreasOfInterest = Array.from(
                document.querySelectorAll('input[name="areas_of_interest"]:checked')
            ).map((input) => input.value);
            const selectedEmailOptIn = document.querySelector('input[name="opt_in__email_"]:checked').value || null;
            const selectedPhoneOptIn = document.querySelector('input[name="opt_in__phone_"]:checked').value || null;

            if (email) {
                SalesforceInteractions.sendEvent({
                    interaction: { name: "Contact Us Form Submit" },
                    user: {
                        identities: { emailAddress: email },
                        attributes: {
                            fname: fname,
                            lname: lname,
                            phone: phone,
                            jobType: selectedJobType,
                            company: company,
                            interestModalities: selectedModalities,
                            areasOfInterest: selectedAreasOfInterest,
                            emailOptIn: selectedEmailOptIn,
                            phoneOptIn: selectedPhoneOptIn,
                        }
                    }
                });
            }
        });
    });
};

const createPdpContactUsListener = () => {
    waitForElement("form:has(select[name='timeline']) input[type='submit']").then(submitButton => {
        submitButton.addEventListener("click", () => {
            const fname = _sf.cashDom("input[name='firstname']").val();
            const lname = _sf.cashDom("input[name='lastname']").val();
            const email = _sf.cashDom("input[name='email']").val();
            const phone = _sf.cashDom("input[name='phone']").val();
            const selectJobType = document.querySelector("select[name='job_type']");
            const selectedJobType = selectJobType.options[selectJobType.selectedIndex].text;
            const company = _sf.cashDom("input[name='company']").val();
            const selectedModalities = Array.from(
                document.querySelectorAll('input[name="modalities"]:checked')
            ).map((input) => input.value);
            const timeline = _sf.cashDom("select[name='timeline']").val();
            const selectedEmailOptIn = document.querySelector('input[name="opt_in__email_"]:checked').value || null;
            const selectedPhoneOptIn = document.querySelector('input[name="opt_in__phone_"]:checked').value || null;

            if (email) {
                SalesforceInteractions.sendEvent({
                    interaction: { name: "Contact Us to Discuss Your Project" },
                    user: {
                        identities: { emailAddress: email },
                        attributes: {
                            fname: fname,
                            lname: lname,
                            phone: phone,
                            jobType: selectedJobType,
                            company: company,
                            interestModalities: selectedModalities,
                            timeline: timeline,
                            emailOptIn: selectedEmailOptIn,
                            phoneOptIn: selectedPhoneOptIn,
                        },
                    },
                });
            }
        });
    });
};

_sf.init({
    cookieDomain: "aldevron.com"
}).then(() => {
    const sitemapConfig = {
        global: {
            listeners: []
        },
        pageTypes: [
            {
                name: "ALD - Home",
                isMatch: () => /^\/$/.test(window.location.pathname),
                interaction: {
                    name: "ALD - Home"
                }
            },
            {
                name: "ALD - Blog & News",
                isMatch: () =>
                    /^\/(?:blog|about-us\/news)\/?$/.test(
                        window.location.pathname
                    ),
                interaction: {
                    name: "ALD - Blog & News",
                },
            },
            {
                name: "ALD - Landing Page",
                isMatch: () =>
                    /^\/download\-whitepaper\-crispr\-approach\/?$/.test(
                        window.location.pathname
                    ),
                interaction: {
                    name: "ALD - Landing Page",
                },
            },
            {
                name: "ALD - Thank You",
                isMatch: () =>
                    /^\/about-us\/contact-us-thank-you/.test(window.location.pathname),
                interaction: {
                    name: "ALD - Thank You",
                },
            },
            {
                name: "ALD - Info Pages",
                isMatch: () =>
                    /^\/(?:about-us|terms-and-conditions|aldevron-privacy-policy|cookie-policy|ad-blocking-policy)\/?$/.test(
                        window.location.pathname
                    ),
                interaction: {
                    name: "ALD - Info Pages",
                },
            },
            {
                name: "ALD - Contact Us",
                isMatch: () =>
                    /^\/about-us\/contact-us\/?$/.test(
                        window.location.pathname
                    ),
                interaction: {
                    name: "ALD - Contact Us",
                },
            },
            {
                name: "ALD - Events",
                isMatch: () =>
                    /^\/about-us\/events\/?$/.test(window.location.pathname),
                interaction: {
                    name: "ALD - Events",
                },
            },
            {
                name: "ALD - Events Details",
                isMatch: () =>
                    /^\/about-us\/events\/?/.test(window.location.pathname),
                interaction: {
                    name: "ALD - Events Details",
                },
            },
            {
                name: "ALD - Facilities",
                isMatch: () =>
                    /^\/facilities\/.+/.test(window.location.pathname),
                interaction: {
                    name: "ALD - Facilities",
                },
            },
            {
                name: "ALD - Order Catalog Products Now",
                isMatch: () =>
                    /^\/catalog-products\/order-now/.test(
                        window.location.pathname
                    ),
                interaction: {
                    name: "ALD - Order Catalog Products Now",
                },
            },
            {
                name: `ALD - Modalities - ${document.title}`,
                isMatch: () =>
                    new Promise((resolve) => {
                        const timeout = setTimeout(() => resolve(false), 100);

                        _sf.DisplayUtils.pageElementLoaded(
                            "#main > div > div.breadcrumbs-wrapper > div > ul > li:nth-child(2) > a > span",
                            "html"
                        ).then(() => {
                            clearTimeout(timeout);

                            const breadcrumb = _sf.cashDom(
                                "#main > div > div.breadcrumbs-wrapper > div > ul > li:nth-child(2) > a > span"
                            )[0];

                            if (
                                breadcrumb &&
                                breadcrumb.textContent.trim().toLowerCase() ===
                                    "modalities" &&
                                /^\/modalities\//.test(window.location.pathname)
                            ) {
                                resolve(true);
                            } else {
                                resolve(false);
                            }
                        });
                    }),
                interaction: {
                    name: `ALD - Modalities - ${document.title}`,
                },
            },
            {
                name: `ALD - Custom Manufacturing - ${document.title}`,
                isMatch: () =>
                    new Promise((resolve) => {
                        const timeout = setTimeout(() => resolve(false), 100);

                        _sf.DisplayUtils.pageElementLoaded(
                            "#main > div > div.breadcrumbs-wrapper > div > ul > li:nth-child(2) > a > span",
                            "html"
                        ).then(() => {
                            clearTimeout(timeout);

                            const breadcrumb = _sf.cashDom(
                                "#main > div > div.breadcrumbs-wrapper > div > ul > li:nth-child(2) > a > span"
                            )[0];

                            if (
                                breadcrumb &&
                                breadcrumb.textContent.trim().toLowerCase() ===
                                    "custom-manufacturing" &&
                                /^\/custom-manufacturing\//.test(
                                    window.location.pathname
                                )
                            ) {
                                resolve(true);
                            } else {
                                resolve(false);
                            }
                        });
                    }),
                interaction: {
                    name: `ALD - Custom Manufacturing - ${document.title}`,
                },
            },
            {
                name: `ALD - Quality Grades - ${document.title}`,
                isMatch: () =>
                    new Promise((resolve) => {
                        const timeout = setTimeout(() => resolve(false), 100);

                        _sf.DisplayUtils.pageElementLoaded(
                            "#main > div > div.breadcrumbs-wrapper > div > ul > li:nth-child(2) > a > span",
                            "html"
                        ).then(() => {
                            clearTimeout(timeout);

                            const breadcrumb = _sf.cashDom(
                                "#main > div > div.breadcrumbs-wrapper > div > ul > li:nth-child(2) > a > span"
                            )[0];

                            if (
                                breadcrumb &&
                                breadcrumb.textContent.trim().toLowerCase() ===
                                    "quality-grades" &&
                                /^\/quality\-grades\//.test(
                                    window.location.pathname
                                )
                            ) {
                                resolve(true);
                            } else {
                                resolve(false);
                            }
                        });
                    }),
                interaction: {
                    name: `ALD - Quality Grades - ${document.title}`,
                },
            },
            {
                name: "ALD - Product Category Landing Page",
                isMatch: () =>
                    new Promise((resolve) => {
                        const timeout = setTimeout(() => resolve(false), 50);

                        _sf.DisplayUtils.pageElementLoaded("html", "html").then(
                            () => {
                                clearTimeout(timeout);

                                const path = window.location.pathname;

                                if (
                                    /^\/catalog-products\//.test(path) &&
                                    path.split("/").filter(Boolean).length === 2
                                ) {
                                    resolve(true);
                                } else {
                                    resolve(false);
                                }
                            }
                        );
                    }),
                interaction: {
                    name: "ALD - Product Category Landing Page",
                },
            },
            {
                name: "ALD - Product Detail Page",
                isMatch: () =>
                    new Promise((resolve) => {
                        const timeout = setTimeout(() => resolve(false), 50);

                        _sf.DisplayUtils.pageElementLoaded("html", "html").then(
                            () => {
                                clearTimeout(timeout);

                                const path = window.location.pathname;

                                if (
                                    /^\/catalog-products\//.test(path) &&
                                    path.split("/").filter(Boolean).length === 3
                                ) {
                                    resolve(true);
                                } else {
                                    resolve(false);
                                }
                            }
                        );
                    }),
                interaction: {
                    name: "ALD - Product Detail Page",
                },
                listeners: [
                    _sf.listener(
                        "click",
                        "a[href^='https://store.aldevron.com/']",
                        () => {
                            _sf.sendEvent({
                                interaction: { name: "ALD - Buy Now" },
                            });
                        }
                    ),
                    _sf.listener(
                        "click",
                        "a[href='https://www.aldevron.com/about-us/contact-us']",
                        () => {
                            _sf.sendEvent({
                                interaction: { name: "ALD - Inquire" },
                            });
                        }
                    ),
                ],
            },
            {
                name: "ALD - All Product Catalog Page",
                isMatch: () =>
                    /^\/catalog-products\/?$/.test(window.location.pathname),
                interaction: {
                    name: "ALD - All Product Catalog Page",
                },
            },
        ],
        pageTypeDefault: {
            name: "ALD - default",
            interaction: {
                name: "ALD - Default Page",
            },
        }
    };
    _sf.initSitemap(sitemapConfig);

    const pdpMatcher = sitemapConfig.pageTypes.find(pt => pt.name === "Product Detail Page");
    const contactUsMatcher = sitemapConfig.pageTypes.find(pt => pt.name === "Contact Us");

    pdpMatcher.isMatch().then(isPdp => {
        if (isPdp) {
            createPdpContactUsListener();
        } else if (contactUsMatcher.isMatch()) {
            createGlobalContactUsListener();
        }
    });
});
