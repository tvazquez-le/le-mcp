const getDomain = () => window.location.hostname;

const checkCookie = (domain) => {
    if (domain === "www.abcam.com" || domain === "stage.abcam.com") {
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

const captureFullName = () => {
    SalesforceInteractions.DisplayUtils.bind().pageElementLoaded('[data-cy="customer-name-input"]').then(() => {

        let fname = SalesforceInteractions.cashDom('[data-cy="customer-name-input"]')[0]?.innerText.split(" ")[0];
        let lname = SalesforceInteractions.cashDom('[data-cy="customer-name-input"]')[0]?.innerText.split(" ")[1];

        if (fname && lname) {
            SalesforceInteractions.sendEvent({
                interaction: {
                    name: "Full Name Captured",
                },
                user: {
                    attributes: {
                        firstName: fname,
                        lastName: lname
                    }
                }
            })
        }

    })
};
captureFullName();

const domain = getDomain();
const consent = checkCookie(domain);
console.log("v1.0.58");

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
                //console.log("evg-interaction-name: ", actionEvent.interaction.name);
                return actionEvent;
            },
            contentZones: [{
                name: "global_popup"
            }],
            listeners: [
                SalesforceInteractions.listener("click", "body", (event) => {
                    if (event.target.textContent.trim().includes("Learn more") && (event.target.classList.contains("button_container__bCop1") || event.target.closest(".button_container__bCop1"))) {
                        //console.log("Button clicked:", event.target.textContent.trim());
                        SalesforceInteractions.sendEvent({
                            interaction: {
                                name: event.target.textContent.trim() + " CTA Clicked",
                            },
                        });
                    }
                }), SalesforceInteractions.listener("click", "body", (event) => {
                    if (event.target.textContent.trim().includes("Browse now") && (event.target.classList.contains("button_container__bCop1") || event.target.closest(".button_container__bCop1"))) {
                        //console.log("Button clicked:", event.target.textContent.trim());
                        SalesforceInteractions.sendEvent({
                            interaction: {
                                name: event.target.textContent.trim() + " CTA Clicked",
                            },
                        });
                    }
                }), SalesforceInteractions.listener("click", '[data-cy="account-dropdown"]', (event) => {
                    //console.log("Button clicked:", event.target.textContent.trim());

                    // Create a function to check for the email element
                    const checkForEmailElement = () => {
                        // Try a more generic selector first
                        const emailElement = document.querySelector('[data-testid="userEmail"]');

                        if (emailElement) {
                            const email = emailElement.textContent.trim();
                            //console.log("Email found:", email);

                            if (email) {
                                SalesforceInteractions.sendEvent({
                                    interaction: {
                                        name: "Global Email Capture - Navbar",
                                    },
                                    user: {
                                        attributes: {
                                            emailAddress: email,
                                        },
                                    },
                                });
                            }
                            return true;
                            // Found the element
                        }
                        return false;
                        // Didn't find the element
                    };

                    // Try immediately first
                    if (!checkForEmailElement()) {
                        // If not found, set up a polling mechanism
                        let attempts = 0;
                        const maxAttempts = 10;
                        const interval = setInterval(() => {
                            attempts++;
                            if (checkForEmailElement() || attempts >= maxAttempts) {
                                clearInterval(interval);
                                if (attempts >= maxAttempts) { //console.log("Failed to find email element after maximum attempts");
                                }
                            }
                        }, 300);
                        // Check every 300ms
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
                name: "Abcam Homepage",
                isMatch: () => /^\/en-us\/?$/.test(window.location.pathname),
                interaction: {
                    name: "Abcam Homepage",
                },
            }, {
                name: "Abcam Product Listing Page",
                isMatch: () => /^\/en-us\/products\/?$/.test(window.location.pathname),
                interaction: {
                    name: "Abcam Product Listing Page",
                },
            }, {
                name: "Abcam Product Category Page",
                isMatch: () => /^\/en-us\/products\/[^/]+\/?$/.test(window.location.pathname) && !/^\/en-us\/products\/(selection-guides|product-recommendations)/.test(window.location.pathname),
                interaction: {
                    name: "Abcam Product Category Page",
                },
            }, {
                name: "Abcam Selection Guides",
                isMatch: () => /^\/en-us\/products\/selection-guides\/?$/.test(window.location.pathname),
                interaction: {
                    name: "Abcam Selection Guides",
                },
            }, {
                name: "Abcam Product Detail Page",
                isMatch: () => /^\/en-us\/products\/[^/]+\/[^/]+\/?$/.test(window.location.pathname) && !/^\/en-us\/products\/product-recommendations\//.test(window.location.pathname),
                interaction: {
                    name: "Abcam Product Detail Page",
                },
                listeners: [SalesforceInteractions.listener("click", "#__next > div:nth-child(2) > div > div.relative.bg-white.text-black-0 > div > div.bg-white.z-50.sticky > div > div > div > div > div.flex.flex-col.mr-4 > div > div > div > button", (event) => {
                    SalesforceInteractions.sendEvent({
                        interaction: {
                            name: "Product ID Clicked",
                        },
                    });
                }), SalesforceInteractions.listener("click", "#__next > div:nth-child(2) > div > div.relative.bg-white.text-black-0 > div > div.bg-white.z-50.sticky > div > div > div > div > div.flex.flex-col.mr-4 > button", (event) => {
                    SalesforceInteractions.sendEvent({
                        interaction: {
                            name: "Product Name Clicked",
                        },
                    });
                }), SalesforceInteractions.listener("click", "#tabs--panel--0 > div > div > div > div.relative.z-pdpTabs.mdu\\:top-0.mdu\\:relative.mdu\\:w-72.mdu\\:z-0.lgu\\:w-84.sr-only.mdu\\:not-sr-only.mdu\\:min-h-\\[320px\\] > div > div.font-semibold.rounded.bg-blue-5.text-grey-dark > div > div.size_box > button", (event) => {
                    SalesforceInteractions.sendEvent({
                        interaction: {
                            name: "Add to Basket Clicked",
                        },
                    });
                }), ],
            }, {
                name: "Abcam Product Recommendation Listing Page",
                isMatch: () => /^\/en-us\/products\/product-recommendations\/?$/.test(window.location.pathname),
                interaction: {
                    name: "Abcam Product Recommendation Listing Page",
                },
            }, {
                name: "Abcam Product Recommendation Page",
                isMatch: () => /^\/en-us\/products\/product-recommendations\/[^/]+\/?$/.test(window.location.pathname),
                interaction: {
                    name: "Abcam Product Recommendation Page",
                },
            }, {
                name: "Abcam Search Results Page",
                isMatch: () => /^\/en-us\/search\/?$/.test(window.location.pathname),
                interaction: {
                    name: "Abcam Search Results Page",
                },
            }, {
                name: "Abcam Cart Page",
                isMatch: () => /^\/en-us\/shopping-basket\/.+$/.test(window.location.pathname),
                interaction: {
                    name: "Abcam Cart Page",
                },
            }, {
                name: "Abcam Order Confirmation Page",
                isMatch: () => /^\/en-us\/confirmation/.test(window.location.pathname) || /^\/en-us\/confirmation\?orderId=/.test(window.location.pathname + window.location.search),
                interaction: {
                    name: "Abcam Order Confirmation Page",
                },
            }, {
                name: "Abcam Register for an account",
                isMatch: () => /^\/auth\/register\/?$/.test(window.location.pathname),
                interaction: {
                    name: "Abcam Register for an account",
                },
                listeners: [SalesforceInteractions.listener("submit", "form", (event) => {
                    let email = event.target.email.value;
                    let fname = event.target.firstName.value;
                    let lname = event.target.lastName.value;
                    SalesforceInteractions.sendEvent({
                        interaction: {
                            name: "Register for an account CTA Clicked",
                        },
                        user: {
                            attributes: {
                                emailAddress: email,
                                firstName: fname,
                                lastName: lname
                            },
                        },
                    });
                }), ],
            }, {
                name: "Abcam My Account Page",
                isMatch: () => /^\/my-account\/?/.test(window.location.pathname),
                onActionEvent: (actionEvent) => {
                    //console.log("Abcam My Account Page detected - checking for email");

                    // Create a function to find email with debugging
                    const findEmailWithSelector = (selector) => {
                        try {
                            const element = SalesforceInteractions.cashDom(selector);
                            if (element.length > 0) {
                                const text = element.text().trim();
                                // Simple email validation (check for @ symbol)
                                if (text && text.includes('@')) {
                                    //console.log(`Found valid email: ${text}`);
                                    return text;
                                }
                            }
                        } catch (e) { //console.log(`Error checking selector: ${e.message}`);
                        }
                        return null;
                    };

                    // Try multiple selectors for email
                    const possibleSelectors = [ // More generic selectors first
                        '[data-testid="userEmail"]', '.text-sm.text-gray-400', '.pt-2.font-semibold.text-left.text-gray-400.truncate', // Original selectors
                        "#__next > div.flex.flex-col.min-h-screen.antialiased.text-black-0 > div.flex.flex-col.pt-2.pb-4.pl-4.border-b-2.border-grey-10 > div.text-sm", "#__next > div.flex.flex-col.min-h-screen.antialiased.text-black-0 > div.layout_pageWrapper__MiUPC > main > section > section:nth-child(4) > div.card_wrapper__sphHM > div.card_content__9r5ov > div > div > div.flex.flex-col.gap-2 > p > span"
                    ];

                    // Set up a retry mechanism
                    const maxAttempts = 10;
                    let currentAttempt = 0;

                    // Create a flag to avoid multiple updates
                    window.abcamEmailCaptureActive = window.abcamEmailCaptureActive || false;

                    // Function to try finding email with all selectors
                    const attemptToFindEmail = () => {
                        // Check if we should stop trying
                        if (window.abcamEmailFound) {
                            //console.log("Email already found, skipping retry");
                            return;
                        }

                        currentAttempt++;

                        // Try each selector in order
                        let email = null;
                        for (let i = 0; i < possibleSelectors.length && !email; i++) {
                            email = findEmailWithSelector(possibleSelectors[i]);
                        }

                        // If email found, send an explicit event with the email
                        if (email) {
                            //console.log(`Success on attempt ${currentAttempt}! Found email address`);
                            window.abcamEmailFound = true;

                            // Send an explicit event with the email
                            // This ensures the email gets back to the server even if found after 
                            // the original actionEvent has been processed
                            SalesforceInteractions.sendEvent({
                                interaction: {
                                    name: "Email Captured",
                                },
                                user: {
                                    attributes: {
                                        emailAddress: email,
                                    }
                                }
                            });

                            window.abcamEmailCaptureActive = false;
                        } else if (currentAttempt < maxAttempts) {
                            // Try again after a delay
                            setTimeout(attemptToFindEmail, 500);
                        } else {
                            //console.log(`Failed to find email after ${maxAttempts} attempts`);
                            window.abcamEmailCaptureActive = false;
                        }
                    };

                    // Start the retry process if not already in progress
                    if (!window.abcamEmailCaptureActive) {
                        window.abcamEmailCaptureActive = true;
                        window.abcamEmailFound = window.abcamEmailFound || false;

                        // Start immediately, then will retry if needed
                        attemptToFindEmail();
                    }

                    return actionEvent;
                },
                interaction: {
                    name: "Abcam My Account Page",
                },
            }, {
                name: "Abcam Contact Us Page",
                isMatch: () => /^\/en-us\/contact-us\/?/.test(window.location.pathname),
                interaction: {
                    name: "Abcam Contact Us Page",
                },
                listeners: [SalesforceInteractions.listener("click", "body", (event) => {
                    let idList = ["emailUs", "callUs", "findDistributors", "findUs"];

                    // Get the complete event path
                    const eventPath = event.composedPath ? event.composedPath() : event.path || [];
                    let targetFound = false;
                    let elementId = null;

                    // Examine each element in the path
                    for (let i = 0; i < eventPath.length; i++) {
                        const elem = eventPath[i];
                        if (elem.id && idList.includes(elem.id)) {
                            targetFound = true;
                            elementId = elem.id;
                            break;
                        }
                    }

                    if (targetFound && elementId) {
                        // Send event to Interaction Studio with the element name
                        SalesforceInteractions.sendEvent({
                            interaction: {
                                name: `${elementId} clicked`,
                            },
                        });
                    }
                }), ],
            }, {
                name: "Abcam Stories Page",
                isMatch: () => /^\/en-us\/stories\/?$/.test(window.location.pathname),
                interaction: {
                    name: "Abcam Stories Page",
                },
            }, {
                name: "Abcam Content Listing Page",
                isMatch: () => /^\/en-us\/technical-resources\/?$/.test(window.location.pathname),
                interaction: {
                    name: "Abcam Content Listing Page",
                },
            }, // {
            //   name: "Abcam Content Hub Page",
            //   isMatch: () =>
            //     /^\/en-us\/technical-resources\/(guides|marker-guides|pathways|protocols|troubleshooting|target-tips|product-overview)\/?$/.test(
            //       window.location.pathname
            //     ),
            //   interaction: {
            //     name: "Abcam Content Hub Page",
            //   },
            // },
            {
                name: "Abcam Content Hub Guides Page",
                isMatch: () => /^\/en-us\/technical-resources\/guides\/?$/.test(window.location.pathname),
                interaction: {
                    name: "Abcam Content Hub Guides Page",
                },
            }, {
                name: "Abcam Content Details Guides Page",
                isMatch: () => /^\/en-us\/technical-resources\/guides\/[^/]+\/?$/.test(window.location.pathname),
                interaction: {
                    name: "Abcam Content Details Guides Page",
                },
            }, {
                name: "Abcam Content Hub Marker Guides Page",
                isMatch: () => /^\/en-us\/technical-resources\/marker-guides\/?$/.test(window.location.pathname),
                interaction: {
                    name: "Abcam Content Hub Marker Guides Page",
                },
            }, {
                name: "Abcam Content Details Marker Guides Page",
                isMatch: () => /^\/en-us\/technical-resources\/marker-guides\/[^/]+\/?$/.test(window.location.pathname),
                interaction: {
                    name: "Abcam Content Details Marker Guides Page",
                },
            }, // {
            //   name: "Abcam Content Details Page",
            //   isMatch: () =>
            //     /^\/en-us\/technical-resources\/(guides|marker-guides|pathways|protocols|troubleshooting|target-tips|product-overview)\/[^/]+\/?$/.test(
            //       window.location.pathname
            //     ),
            //   interaction: {
            //     name: "Abcam Content Details Page",
            //   },
            // },
            {
                name: "Abcam Content Hub Pathways Page",
                isMatch: () => /^\/en-us\/technical-resources\/pathways\/?$/.test(window.location.pathname),
                interaction: {
                    name: "Abcam Content Hub Pathways Page",
                },
            }, {
                name: "Abcam Content Details Pathways Page",
                isMatch: () => /^\/en-us\/technical-resources\/pathways\/[^/]+\/?$/.test(window.location.pathname),
                interaction: {
                    name: "Abcam Content Details Pathways Page",
                },
            }, {
                name: "Abcam Content Hub Protocols Page",
                isMatch: () => {
                    const fullUrl = window.location.origin + window.location.pathname;
                    return fullUrl === 'https://www.abcam.com/en-us/technical-resources/protocols' || fullUrl === 'https://www.abcam.com/en-us/technical-resources/protocols/';
                },
                interaction: {
                    name: "Abcam Content Hub Protocols Page",
                },
            }, {
                name: "Abcam Content Details Protocols Page",
                isMatch: () => /protocols/.test(window.location.pathname),
                interaction: {
                    name: "Abcam Content Details Protocols Page",
                },
            }, {
                name: "Abcam Content Hub Research Area Page",
                isMatch: () => /^\/en-us\/technical-resources\/research-areas\/?$/.test(window.location.pathname),
                interaction: {
                    name: "Abcam Content Hub Research Area Page",
                },
            }, {
                name: "Abcam Research Area Content Details Page",
                isMatch: () => /^\/en-us\/technical-resources\/research-areas\/[^/]+\/?$/.test(window.location.pathname),
                interaction: {
                    name: "Abcam Research Area Content Details Page",
                },
            }, {
                name: "Abcam Webinars Listing Page",
                isMatch: () => /^\/en-us\/webinars\/?$/.test(window.location.pathname),
                interaction: {
                    name: "Abcam Webinars Listing Page",
                },
            }, {
                name: "Abcam Webinars Page",
                isMatch: () => /^\/en-us\/webinars\/[^/]+\/?$/.test(window.location.pathname),
                interaction: {
                    name: "Abcam Webinars Page",
                },
            }, {
                name: "Abcam Support Listing Page",
                isMatch: () => /^\/en-us\/support\/?$/.test(window.location.pathname),
                interaction: {
                    name: "Abcam Support Listing Page",
                },
                listeners: [SalesforceInteractions.listener("click", ".button_container__bCop1", (event) => {
                    // Get the button element (either the target or closest parent with the class)
                    const buttonElement = event.target.classList.contains("button_container__bCop1") ? event.target : event.target.closest(".button_container__bCop1");

                    // If we found a button element, get and clean its text content
                    if (buttonElement) {
                        // Get the text
                        const buttonText = buttonElement.innerText || buttonElement.textContent;
                        // Remove duplicate lines and trim whitespace
                        const cleanText = buttonText.split("\n")[0].trim();
                        SalesforceInteractions.sendEvent({
                            interaction: {
                                name: cleanText + " CTA Clicked",
                            },
                        });
                    }
                }), ],
            }, {
                name: "Abcam Support Page",
                isMatch: () => /^\/en-us\/support\/[^/]+\/?$/.test(window.location.pathname),
                interaction: {
                    name: "Abcam Support Page",
                },
            }, {
                name: "Abcam Offers and Initiatives Page",
                isMatch: () => /^\/en-us\/offers-and-initiatives\/?$/.test(window.location.pathname),
                interaction: {
                    name: "Abcam Offers and Initiatives Page",
                },
            }, {
                name: "Abcam Knowledge Center Listing Page",
                isMatch: () => /^\/en-us\/knowledge-center\/?$/.test(window.location.pathname),
                interaction: {
                    name: "Abcam Knowledge Center Listing Page",
                },
            }, {
                name: "Abcam Knowledge Center Page",
                isMatch: () => /^\/en-us\/knowledge-center\/[^/]+\/?$/.test(window.location.pathname),
                interaction: {
                    name: "Abcam Knowledge Center Page",
                },
            }, {
                name: "Abcam Content Hub Troubleshooting Page",
                isMatch: () => {
                    const fullUrl = window.location.origin + window.location.pathname;
                    return fullUrl === 'https://www.abcam.com/en-us/technical-resources/troubleshooting' || fullUrl === 'https://www.abcam.com/en-us/technical-resources/troubleshooting/';
                },
                interaction: {
                    name: "Abcam Content Hub Troubleshooting Page",
                },
            }, {
                name: "Abcam Content Details Troubleshooting Page",
                isMatch: () => /troubleshooting/.test(window.location.pathname),
                interaction: {
                    name: "Abcam Content Details Troubleshooting Page",
                },
            }, {
                name: "Abcam Content Hub Application Page",
                isMatch: () => /^\/en-us\/technical-resources\/applications\/?$/.test(window.location.pathname),
                interaction: {
                    name: "Abcam Content Hub Application Page",
                },
            }, {
                name: "Abcam Application Content Details Page",
                isMatch: () => /^\/en-us\/technical-resources\/applications\/.+\/?$/.test(window.location.pathname),
                interaction: {
                    name: "Abcam Application Content Details Page",
                },
            }, {
                name: "Abcam Content Hub Target Tips Page",
                isMatch: () => {
                    const fullUrl = window.location.origin + window.location.pathname;
                    return fullUrl === 'https://www.abcam.com/en-us/technical-resources/target-tips' || fullUrl === 'https://www.abcam.com/en-us/technical-resources/target-tips/';
                },
                interaction: {
                    name: "Abcam Content Hub Target Tips Page",
                },
            }, {
                name: "Abcam Content Details Target Tips Page",
                isMatch: () => /^\/en-us\/technical-resources\/target-tips\/[^/]+\/?$/.test(window.location.pathname),
                interaction: {
                    name: "Abcam Content Details Target Tips Page",
                },
            }, {
                name: "Abcam Content Hub Overview Page",
                isMatch: () => {
                    const fullUrl = window.location.origin + window.location.pathname;
                    return fullUrl === 'https://www.abcam.com/en-us/technical-resources/product-overview' || fullUrl === 'https://www.abcam.com/en-us/technical-resources/product-overview/';
                },
                interaction: {
                    name: "Abcam Content Hub Overview Page",
                },
            }, {
                name: "Abcam Content Details Product Overview Page",
                isMatch: () => /^\/en-us\/technical-resources\/product-overview\/[^/]+\/?$/.test(window.location.pathname),
                interaction: {
                    name: "Abcam Content Details Product Overview Page",
                },
            },
        ],
    };
    SalesforceInteractions.initSitemap(config);

    // SPA URL change monitoring
    let lastUrl = window.location.href;

    // Function to reinitialize the sitemap when URL changes
    const reinitializeSitemap = () => {
        const currentUrl = window.location.href;
        if (currentUrl !== lastUrl) {
            //console.log("URL changed from", lastUrl, "to", currentUrl);
            lastUrl = currentUrl;
            SalesforceInteractions.initSitemap(config);
        }
    };

    // Listen for history changes (back/forward navigation)
    window.addEventListener('popstate', reinitializeSitemap);

    // Listen for pushState/replaceState calls
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function () {
        originalPushState.apply(this, arguments);
        reinitializeSitemap();
    };

    history.replaceState = function () {
        originalReplaceState.apply(this, arguments);
        reinitializeSitemap();
    };

    // Backup polling mechanism to catch any other URL changes
    setInterval(reinitializeSitemap, 500);
});