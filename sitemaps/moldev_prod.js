const getDomain = () => window.location.hostname;

const checkCookie = (domain) => {
    if (domain === "www.moleculardevices.com" || domain === "1412-mcp--moleculardevices--hlxsites.hlx.page") {
        let cookieExist = document.cookie.split("; ").find((row) => row.startsWith("OptanonConsent"));
        if (cookieExist && cookieExist.split("groups=")[1].includes("C0004%3A1")) {
            return [{
                provider: "OneTrust",
                purpose: SalesforceInteractions.mcis.ConsentPurpose.Personalization,
                status: SalesforceInteractions.ConsentStatus.OptIn,
            }, ];
        } else {
            document.dispatchEvent(new CustomEvent(SalesforceInteractions.CustomEvents.OnClearCookie));
            return [{
                provider: "OneTrust",
                purpose: SalesforceInteractions.mcis.ConsentPurpose.Personalization,
                status: SalesforceInteractions.ConsentStatus.OptOut,
            }, ];
        }
    }
    return [];
};

const domain = getDomain();
const consent = checkCookie(domain);
console.log("prod-ver: 1.0.25");
SalesforceInteractions.init({
    cookieDomain: domain,
    consents: consent,
}).then(() => {
    const config = {
        global: {
            onActionEvent: (actionEvent) => {
                actionEvent.user = actionEvent.user || {};
                actionEvent.user.attributes = actionEvent.user.attributes || {};
                actionEvent.user.identities = actionEvent.user.identities || {};
                return actionEvent;
            },
            contentZones: [{
                name: "global_popup"
            }],
            listeners: [
                SalesforceInteractions.listener("click", "[title='Register now']", () => {
                    SalesforceInteractions.sendEvent({
                        interaction: {
                            name: "Moldev Register Now",
                        },
                    });
                }),

                SalesforceInteractions.listener("click", "[title='Speak to an expert']", () => {
                    SalesforceInteractions.sendEvent({
                        interaction: {
                            name: "Moldev Speak to an Expert",
                        },
                    });
                }),

                SalesforceInteractions.listener("click", "[title='Talk to an expert']", () => {
                    SalesforceInteractions.sendEvent({
                        interaction: {
                            name: "Moldev Talk an Expert",
                        },
                    });
                }),

                SalesforceInteractions.listener("click", "[title='Download brochure']", () => {
                    SalesforceInteractions.sendEvent({
                        interaction: {
                            name: "Moldev Download Brochure",
                        },
                    });
                }),

                SalesforceInteractions.listener("click", ".drift-widget-avatar", () => {
                    SalesforceInteractions.sendEvent({
                        interaction: {
                            name: "Moldev Click on Chatbot",
                        },
                    });
                }),

                SalesforceInteractions.listener("click", '[title="Let\'s get in touch"]', () => {
                    SalesforceInteractions.sendEvent({
                        interaction: {
                            name: "Moldev Let's Get in Touch",
                        },
                    });
                }),

                SalesforceInteractions.listener("click", "[title='Download eBook']", () => {
                    SalesforceInteractions.sendEvent({
                        interaction: {
                            name: "Moldev Download eBook",
                        },
                    });
                }),

                SalesforceInteractions.listener("click", "[title='Speak to a specialist']", () => {
                    SalesforceInteractions.sendEvent({
                        interaction: {
                            name: "Moldev Speak to a Specialist",
                        },
                    });
                }),

                SalesforceInteractions.listener("click", "[title='Request a Demo']", () => {
                    SalesforceInteractions.sendEvent({
                        interaction: {
                            name: "Moldev Request a demo",
                        },
                    });
                }),

                SalesforceInteractions.listener("click", "[title='Request quote']", () => {
                    SalesforceInteractions.sendEvent({
                        interaction: {
                            name: "Moldev Request quote",
                        },
                    });
                }),

                SalesforceInteractions.listener("click", "#hsForm_398c18e5-06f2-427b-afe3-d69d0bdddb8a > div > div.actions > input", () => {
                    SalesforceInteractions.sendEvent({
                        interaction: {
                            name: "Moldev Submit",
                        },
                    });
                }),

                SalesforceInteractions.listener(
                    "click",
                    "#hsForm_9530db8b-2803-469c-a178-9b74f9cb504a > div.hs_submit.hs-submit > div.actions > button",
                    () => {
                        SalesforceInteractions.sendEvent({
                            interaction: {
                                name: "Moldev Subscribe",
                            },
                        });
                    }
                ),

                SalesforceInteractions.listener("click", "[title='Watch video']", () => {
                    SalesforceInteractions.sendEvent({
                        interaction: {
                            name: "Moldev Watch video",
                        },
                    });
                }),

                SalesforceInteractions.listener("click", "[title='Download eBook now']", () => {
                    SalesforceInteractions.sendEvent({
                        interaction: {
                            name: "Moldev Download eBook now",
                        },
                    });
                }),

                SalesforceInteractions.listener("click", "[title='Download ELISA 101 eBook']", () => {
                    SalesforceInteractions.sendEvent({
                        interaction: {
                            name: "Moldev Download ELISA 101 eBook",
                        },
                    });
                }),

                SalesforceInteractions.listener("click", "[title='Download application note']", () => {
                    SalesforceInteractions.sendEvent({
                        interaction: {
                            name: "Moldev Download Application Note",
                        },
                    });
                }),

                SalesforceInteractions.listener("click", "[title='Download poster']", () => {
                    SalesforceInteractions.sendEvent({
                        interaction: {
                            name: "Moldev Download Poster",
                        },
                    });
                }),

                SalesforceInteractions.listener("click", "[title='Contact GxP specialist']", () => {
                    SalesforceInteractions.sendEvent({
                        interaction: {
                            name: "Moldev Contact GxP Specialist",
                        },
                    });
                }),

                SalesforceInteractions.listener("click", "[title='Download PDF']", () => {
                    SalesforceInteractions.sendEvent({
                        interaction: {
                            name: "Moldev Download PDF",
                        },
                    });
                }),

                SalesforceInteractions.listener("click", "[title='Explore imaging solutions']", () => {
                    SalesforceInteractions.sendEvent({
                        interaction: {
                            name: "Moldev Explore Imaging Solutions",
                        },
                    });
                }),

                SalesforceInteractions.listener("click", "[title='View Cell Gallery']", () => {
                    SalesforceInteractions.sendEvent({
                        interaction: {
                            name: "Moldev View Cell Gallery",
                        },
                    });
                }),
                SalesforceInteractions.listener("blur", 'input[name="email"]', (event) => {
                    const email = document.querySelector('input[name="email"]');
                    const firstName = document.querySelector("#firstname-09ad331d-27c6-470a-86d4-7d6c4b141bc8");
                    const lastName = document.querySelector("#lastname-09ad331d-27c6-470a-86d4-7d6c4b141bc8");
                    if (email) {
                        SalesforceInteractions.sendEvent({
                            interaction: {
                                name: "Moldev Email Address Identification",
                            },
                            user: {
                                attributes: {
                                    emailAddress: email.value,
                                    firstName: firstName?.value,
                                    lastName: lastName?.value
                                },
                            },
                        });
                    }
                }),
            ],
        },
        pageTypeDefault: {
            name: "default",
            interaction: {
                name: "Default Page",
            },
        },
        pageTypes: [{
                name: "Moldev Homepage",
                isMatch: () => /^\/$/.test(window.location.pathname),
                interaction: {
                    name: "Moldev Homepage View",
                },
            },
            {
                name: "Moldev All Product Page",
                isMatch: () => /^\/products\/?$/.test(window.location.pathname),
                interaction: {
                    name: "Moldev All Product Page View",
                },
            },
            {
                name: "Moldev Product Category Page",
                isMatch: () => /^\/products\/[^\/]+\/?$/.test(window.location.pathname),
                interaction: {
                    name: "Moldev Product Category Page View",
                },
            },
            {
                name: "Moldev Product Category Sub Page",
                isMatch: () => /^\/products\/[^\/]+\/[^\/]+\/?$/.test(window.location.pathname),
                interaction: {
                    name: "Moldev Product Category Sub Page View",
                },
            },
            {
                name: "Moldev Product Detail Page",
                isMatch: () => /^\/products\/[^\/]+\/[^\/]+\/[^\/]+\/?$/.test(window.location.pathname),
                interaction: {
                    name: "Moldev Product Detail Page View",
                },
            },
            {
                name: "Moldev Service and Support Page",
                isMatch: () => /^\/service-support\/?$/.test(window.location.pathname),
                interaction: {
                    name: "Moldev Service and Support Page View",
                },
            },
            {
                name: "Moldev Service and Support Category Page",
                isMatch: () => /^\/service-support\/[^\/]+\/?$/.test(window.location.pathname),
                interaction: {
                    name: "Moldev Service and Support Category Page View",
                },
            },
            {
                name: "Moldev Service and Support Product Detail Page",
                isMatch: () => /^\/service-support\/[^\/]+\/[^\/]+\/?$/.test(window.location.pathname),
                interaction: {
                    name: "Moldev Service and Support Product Detail Page View",
                },
            },
            {
                name: "Moldev Application Landing Page",
                isMatch: () => {
                    return window.location.pathname === "/applications" && !window.location.search && !window.location.hash;
                },
                interaction: {
                    name: "Moldev Application Landing Page View",
                },
            },
            {
                name: "Moldev Application Category Page Type",
                isMatch: () => {
                    return window.location.pathname === "/applications" && window.location.hash && window.location.hash.length > 1;
                },
                interaction: {
                    name: "Moldev Application Category Page Type View",
                },
            },
            {
                name: "Moldev Application Product Detail Page",
                isMatch: () => /^\/applications\/[^\/]+(\/[^\/]+)?\/?$/.test(window.location.pathname),
                interaction: {
                    name: "Moldev Application Product Detail Page View",
                },
            },
            {
                name: "Moldev Application Detail Page",
                isMatch: () => /^\/applications\/[^\/]+\/[^\/]+\/?$/.test(window.location.pathname),
                interaction: {
                    name: "Moldev Application Detail Page View",
                },
            },
            {
                name: "Moldev Resources Landing Page",
                isMatch: () => /^\/search-results\/?$/.test(window.location.pathname),
                interaction: {
                    name: "Moldev Resources Landing Page View",
                },
            },
            {
                name: "Moldev Resources Type",
                isMatch: () => /^\/(citations|lab-notes|customer-breakthroughs|technology)(\/[^\/]+)*\/?$/.test(window.location.pathname),
                interaction: {
                    name: "Moldev Resources Type View",
                },
            },
            {
                name: "Moldev Videos and Webinars",
                isMatch: () => /^\/video-gallery(\/[^\/]+)?\/?$/.test(window.location.pathname),
                interaction: {
                    name: "Moldev Videos and Webinars View",
                },
            },
            {
                name: "Moldev Videos and Webinars Type",
                isMatch: () => /^\/en\/assets\/tutorials-videos\/(dd|bpd|br)\/.*$/.test(window.location.pathname),
                interaction: {
                    name: "Moldev Videos and Webinars Type View",
                },
            },
            {
                name: "Moldev Customer Care Portal Main",
                isMatch: () => {
                    return window.location.hostname === "support.moleculardevices.com" && /^\/s\/?$/.test(window.location.pathname);
                },
                interaction: {
                    name: "Moldev Customer Care Portal Main View",
                },
            },
            {
                name: "Moldev Support Article Page",
                isMatch: () => {
                    return window.location.hostname === "support.moleculardevices.com" && /^\/s\/article\/.+$/.test(window.location.pathname);
                },
                interaction: {
                    name: "Moldev Support Article Page View",
                },
            },
            {
                name: "Moldev Asset Type",
                isMatch: () =>
                    /^\/sites\/default\/files\/en\/assets\/(user-guide|flyer|brochures|customer-breakthrough|data-sheets|declaration-of-conformity|ebook|infographics|presentations|scientific-posters|tutorials-videos)\/.*\.(pdf|PDF)$/.test(
                        window.location.pathname
                    ),
                interaction: {
                    name: "Moldev Asset Type View",
                },
            },
            {
                name: "Moldev Asset Type",
                isMatch: () =>
                    /^\/en\/assets\/(ebook|app-note|scientific-posters|infographics|customer-breakthrough)\/.*(\?page=thankyou.*)?$/.test(
                        window.location.pathname + window.location.search
                    ),
                interaction: {
                    name: "Moldev Asset Type View",
                },
            },
            {
                name: "Moldev Preference Center Subdomain",
                isMatch: () => {
                    return window.location.hostname === "info.moleculardevices.com" && /^\/preference-center\/?$/.test(window.location.pathname);
                },
                interaction: {
                    name: "Moldev Preference Center Subdomain View",
                },
            },
            {
                name: "Moldev Specific Product Request",
                isMatch: () => {
                    return window.location.hostname === "info.moleculardevices.com" && /^\/(br|dd|bpd|ts)\/.+$/.test(window.location.pathname);
                },
                interaction: {
                    name: "Moldev Specific Product Request View",
                },
            },
            {
                name: "Moldev Contact US",
                isMatch: () => /^\/contact\/?/.test(window.location.pathname),
                interaction: {
                    name: "Moldev Contact US View",
                },
            },
            {
                name: "Moldev Request a Quote Page",
                isMatch: () => /^\/quote-request\/?$/.test(window.location.pathname),
                interaction: {
                    name: "Moldev Request a Quote Page View",
                },
                listeners: [
                    SalesforceInteractions.listener("click", "body", () => {
                        // Only set up once
                        if (window.formListenersInitialized) return;
                        window.formListenersInitialized = true;

                        console.log("Setting up form listeners...");

                        const setupEventListeners = () => {
                            console.log("Running setupEventListeners...");
                            const emailField = document.querySelector("#email-09ad331d-27c6-470a-86d4-7d6c4b141bc8");
                            const form = document.querySelector("#hsForm_09ad331d-27c6-470a-86d4-7d6c4b141bc8");
                            const emailOptin = document.querySelector("#subscribe-09ad331d-27c6-470a-86d4-7d6c4b141bc8").checked;
                            const firstName = document.querySelector("#firstname-09ad331d-27c6-470a-86d4-7d6c4b141bc8");
                            const lastName = document.querySelector("#lastname-09ad331d-27c6-470a-86d4-7d6c4b141bc8");

                            if (emailField && !emailField.hasListener && emailOptin) {
                                console.log("Email field found in DOM:", emailField);
                                emailField.hasListener = true;
                                emailField.addEventListener("blur", () => {
                                    SalesforceInteractions.sendEvent({
                                        interaction: {
                                            name: "Moldev Email Address Identification",
                                        },
                                        user: {
                                            attributes: {
                                                emailAddress: emailField.value,
                                                firstName: firstName.value,
                                                lastName: lastName.value
                                            },
                                        },
                                    });
                                });
                            }

                            if (form && !form.hasListener) {
                                console.log("Form found in DOM:", form);
                                form.hasListener = true;
                                form.addEventListener("submit", () => {
                                    SalesforceInteractions.sendEvent({
                                        interaction: {
                                            name: "Moldev Let's Get in Touch",
                                        },
                                    });
                                });
                            }

                            if (emailField?.hasListener && form?.hasListener) {
                                console.log("Both elements found and listeners attached - disconnecting observer");
                                observer.disconnect();
                            }
                        };

                        const observer = new MutationObserver((mutations) => {
                            console.log("DOM mutation detected");
                            setupEventListeners();
                        });

                        observer.observe(document.body, {
                            childList: true,
                            subtree: true,
                        });

                        // Initial check
                        setupEventListeners();
                    }),
                ],
            },
            {
                name: "Moldev Quote Request Confirmation",
                isMatch: () => /^\/quote-request-success\/?$/.test(window.location.pathname),
                interaction: {
                    name: "Moldev Quote Request Confirmation View",
                },
            },
        ],
    };

    SalesforceInteractions.initSitemap(config);
});