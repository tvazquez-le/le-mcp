window._sf = SalesforceInteractions;

_sf.init({
    cookieDomain: "aldevron.com"
}).then(() => {
    const sitemapConfig = {
        global: {
            listeners: [
                _sf.bind().listener("submit", "input[type='submit']", () => {
                    const fname = _sf.cashDom("input[name='firstname']").val();
                    const lname = _sf.cashDom("input[name='lastname']").val();
                    const email = _sf.cashDom("input[name='email']").val();
                    const phone = _sf.cashDom("input[name='phone']").val();
                    const selectJobType = document.querySelector(
                        "select[name='job_type']"
                    );
                    const selectedJobType =
                        selectJobType.options[selectJobType.selectedIndex].text;
                    const company = _sf.cashDom("input[name='company']").val();
                    const selectedModalities = Array.from(
                        document.querySelectorAll(
                            'input[name="modalities"]:checked'
                        )
                    ).map((input) => input.value);

                    const selectedAreasOfInterest = Array.from(
                        document.querySelectorAll(
                            'input[name="areas_of_interest"]:checked'
                        )
                    ).map((input) => input.value);
                    const selectedEmailOptIn =
                        document.querySelector(
                            'input[name="opt_in__email_"]:checked'
                        ).value || null;

                    const selectedPhoneOptIn =
                        document.querySelector(
                            'input[name="opt_in__phone_"]:checked'
                        ).value || null;
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
                })
            ]
        },
        pageTypes: [
            {
                name: "Home",
                isMatch: () => /^\/$/.test(window.location.pathname),
                interaction: {
                    name: "Home"
                }
            },
            {
                name: "Blog & News",
                isMatch: () =>
                    /^\/(?:blog|about-us\/news)\/?$/.test(
                        window.location.pathname
                    ),
                interaction: {
                    name: "Listing - Blog & News",
                },
            },
            {
                name: "Landing Page",
                isMatch: () =>
                    /^\/download\-whitepaper\-crispr\-approach\/?$/.test(
                        window.location.pathname
                    ),
                interaction: {
                    name: "Landing Page",
                },
            },
            {
                name: "Thank You",
                isMatch: () =>
                    /^\/about-us\/contact-us-thank-you/.test(window.location.pathname),
                interaction: {
                    name: "Thank You",
                },
            },
            {
                name: "Info Pages",
                isMatch: () =>
                    /^\/(?:about-us|terms-and-conditions|aldevron-privacy-policy|cookie-policy|ad-blocking-policy)\/?$/.test(
                        window.location.pathname
                    ),
                interaction: {
                    name: "Info Pages",
                },
            },
            {
                name: "Contact Us",
                isMatch: () =>
                    /^\/about-us\/contact-us\/?$/.test(
                        window.location.pathname
                    ),
                interaction: {
                    name: "Contact Us",
                },
            },
            {
                name: "Events", // add to bp
                isMatch: () =>
                    /^\/about-us\/events\/?$/.test(window.location.pathname),
                interaction: {
                    name: "Events",
                },
            },
            {
                name: "Events Details", // add to bp
                isMatch: () =>
                    /^\/about-us\/events\/?/.test(window.location.pathname),
                interaction: {
                    name: "Events Details",
                },
            },
            {
                name: "Facilities",
                isMatch: () =>
                    /^\/facilities\/.+/.test(window.location.pathname),
                interaction: {
                    name: "Facilities",
                },
            },
            {
                name: "Order Catalog Products Now",
                isMatch: () =>
                    /^\/catalog-products\/order-now/.test(
                        window.location.pathname
                    ),
                interaction: {
                    name: "Order Catalog Products Now",
                },
            },
            {
                name: `Modalities - ${document.title}`,
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
                    name: `Modalities - ${document.title}`,
                },
            },
            {
                name: `Custom Manufacturing - ${document.title}`,
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
                    name: `Custom Manufacturing - ${document.title}`,
                },
            },
            {
                name: `Quality Grades - ${document.title}`,
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
                    name: `Quality Grades - ${document.title}`,
                },
            },
            {
                name: "Product Category Landing Page",
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
                    name: "Product Category Landing Page",
                },
            },
            {
                name: "Product Detail Page",
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
                    name: "Product Detail Page",
                },
                listeners: [
                    _sf.listener(
                        "click",
                        "a[href^='https://store.aldevron.com/']",
                        () => {
                            _sf.sendEvent({
                                interaction: { name: "Buy Now" },
                            });
                        }
                    ),
                    _sf.listener(
                        "click",
                        "a[href='https://www.aldevron.com/about-us/contact-us']",
                        () => {
                            _sf.sendEvent({
                                interaction: { name: "Inquire" },
                            });
                        }
                    ),
                    _sf.listener("submit", "input[type='submit']", () => {
                        const fname = _sf
                            .cashDom("input[name='firstname']")
                            .val();
                        const lname = _sf
                            .cashDom("input[name='lastname']")
                            .val();
                        const email = _sf.cashDom("input[name='email']").val();
                        const phone = _sf.cashDom("input[name='phone']").val();
                        const selectJobType = document.querySelector(
                            "select[name='job_type']"
                        );
                        const selectedJobType =
                            selectJobType.options[selectJobType.selectedIndex]
                                .text;
                        const company = _sf
                            .cashDom("input[name='company']")
                            .val();
                        const selectedModalities = Array.from(
                            document.querySelectorAll(
                                'input[name="modalities"]:checked'
                            )
                        ).map((input) => input.value);

                        const timeline = _sf
                            .cashDom("select[name='timeline']")
                            .val();
                        const selectedEmailOptIn =
                            document.querySelector(
                                'input[name="opt_in__email_"]:checked'
                            ).value || null;

                        const selectedPhoneOptIn =
                            document.querySelector(
                                'input[name="opt_in__phone_"]:checked'
                            ).value || null;
                        if (email ) {
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
                    }),
                ],
            },
            {
                name: "All Product Catalog Page",
                isMatch: () =>
                    /^\/catalog-products\/?$/.test(window.location.pathname),
                interaction: {
                    name: "All Product Catalog Page",
                },
            },
        ],
        pageTypeDefault: {
            name: "default",
            interaction: {
                name: "Default Page",
            },
        }
    };
    _sf.initSitemap(sitemapConfig);
});