console.log("V3.36");

const checkCookie = () => {
    let cookieExist = document.cookie.split("; ").find((row) => row.startsWith("cmapi_cookie_privacy"));
    if (cookieExist && cookieExist.split("permit")[1].includes("2")) {
        const trueConsent = [{
            provider: "TrustArc",
            purpose: SalesforceInteractions.mcis.ConsentPurpose.Personalization,
            status: SalesforceInteractions.ConsentStatus.OptIn,
        }, ];
        return trueConsent;
    } else {
        document.dispatchEvent(new CustomEvent(SalesforceInteractions.CustomEvents.OnClearCookie));
        const falseConsent = [{
            provider: "TrustArc",
            purpose: SalesforceInteractions.mcis.ConsentPurpose.Personalization,
            status: SalesforceInteractions.ConsentStatus.OptOut,
        }, ];
        return falseConsent;
    }
};

const getDomain = () => {
    let currentDomain = window.location.hostname;
    console.log(currentDomain);
    let _cookieDomain;
    if (currentDomain === "www.beckman.com") {
        _cookieDomain = "beckman.com";
    } else if (currentDomain === "bls-sc-u1-cd.dataweavers.io") {
        _cookieDomain = "bls-sc-u1-cd.dataweavers.io";
    } else _cookieDomain = "FALSE";
    return _cookieDomain;
};

SalesforceInteractions.init({
    cookieDomain: getDomain(),
    consents: checkCookie(),
}).then(() => {
    const sitemapConfig = {
        global: {
            onActionEvent: (actionEvent) => {
                actionEvent.user = actionEvent.user || {};
                actionEvent.user.attributes = actionEvent.user.attributes || {};
                actionEvent.user.identities = actionEvent.user.identities || {};

                const subId = SalesforceInteractions.mcis.getParameterByName("sfmc_id", window.location.href).replace(/\D+$/, "");
                const userId = SalesforceInteractions.resolvers.fromSelectorAttribute("#userId", "data-username")();

                if (subId !== null && subId !== "" && subId !== "null") {
                    actionEvent.user.identities.subscriberId = subId.toString();
                }
                if (userId) {
                    actionEvent.user.identities.BCLSUserId = userId;
                }
                return actionEvent;
            },
            listeners: [
                SalesforceInteractions.listener("click", "html", (e) => {
                    try {
                        if (!e || !e.target || typeof SalesforceInteractions.cashDom !== "function") {
                            return; // Exit early if cashDom is not available
                        }

                        if (
                            SalesforceInteractions.cashDom(e.target).hasClass("mktoButton") &&
                            SalesforceInteractions.cashDom("input[name='Communication_Consent_Email__c']:checked").val()
                        ) {
                            SalesforceInteractions.sendEvent({
                                action: "BCLS Newsletter Submit",
                                user: {
                                    attributes: {
                                        emailAddress: SalesforceInteractions.cashDom("#Email").val(),
                                    },
                                },
                            });
                        }
                    } catch (error) {
                        console.error("Error in newsletter submit listener:", error);
                    }
                }),
                SalesforceInteractions.listener("click", "html", (e) => {
                    try {
                        if (!e || !e.target || typeof SalesforceInteractions.cashDom !== "function") {
                            return; // Exit early if cashDom is not available
                        }

                        if (
                            SalesforceInteractions.cashDom(e.target).hasClass("CoveoResultLink") ||
                            SalesforceInteractions.cashDom(e.target).closest(".CoveoResultLink").length > 0
                        ) {
                            Evergage.sendEvent({
                                action: "Download Product Brochure",
                            });
                        }
                    } catch (error) {
                        console.error("Error in product brochure listener:", error);
                    }
                }),
                SalesforceInteractions.listener("click", "#RfqButton", (e) => {
                    Evergage.sendEvent({
                        action: "BCLS Global Request Quote Submit",
                    });
                }),
                SalesforceInteractions.listener("click", "#getInTouch > div > div > div > div:nth-child(3) > a", (e) => {
                    Evergage.sendEvent({
                        action: "Request for Quote",
                    });
                }),
                SalesforceInteractions.listener(
                    "click",
                    "#main > div.main-holder > div:nth-child(2) > div.bc-test-layout > div > div:nth-child(2) > div > div > div.Section__two-column-right > a",
                    (e) => {
                        Evergage.sendEvent({
                            action: "Request Service",
                        });
                    }
                ),
                SalesforceInteractions.listener("click", "#mktoForm_1026 > div.mktoButtonRow > span > button", (e) => {
                    Evergage.sendEvent({
                        action: "Install Now",
                    });
                }),
                SalesforceInteractions.listener("click", "#main > div.main-holder > div:nth-child(2) > div:nth-child(14) > div > p > a", (e) => {
                    Evergage.sendEvent({
                        action: "Contact Us",
                    });
                }),
                SalesforceInteractions.listener(
                    "click",
                    "#main > div.main-holder > div:nth-child(2) > div.bc-test-layout > div > div:nth-child(1) > div > div > div > a",
                    (e) => {
                        Evergage.sendEvent({
                            action: "Get Help Now",
                        });
                    }
                ),
                SalesforceInteractions.listener("click", "html", (e) => {
                    // Global event listener for tracking "Request a Quote" button clicks
                    const quoteButton = e.target.closest(".request-quote-link");

                    if (quoteButton) {
                        // const productNumber = quoteButton.getAttribute('data-productnumber');
                        // const productName = quoteButton.closest('.coveo-card-layout').querySelector('.product-card__title').textContent.trim() || 'Unknown Product';
                        Evergage.sendEvent({
                            action: "Request a Quote",
                        });
                    }
                }),
            ],
            contentZones: [{
                name: "global_popup"
            }],
        },
        pageTypeDefault: {
            name: "Default",
            interaction: {
                name: "Default Page",
            },
        },
        pageTypes: [{
                name: "Homepage",
                isMatch: () => /^\/$/.test(window.location.pathname),
                interaction: {
                    name: "BCLS Homepage",
                },
                contentZones: [{
                    name: "HomePage_popup"
                }],
            },
            {
                name: "Category Pages",
                isMatch: () =>
                    //return SalesforceInteractions.cashDom(".product-series-selector-wrapper").length > 0;
                    new Promise((resolve, reject) => {
                        let isMatchPDP = setTimeout(() => {
                            resolve(false);
                        }, 500);
                        return SalesforceInteractions.DisplayUtils.pageElementLoaded(".product-series-selector-wrapper", "html").then(() => {
                            clearTimeout(isMatchPDP);
                            resolve(true);
                        });
                    }),

                //},
                interaction: {
                    name: "BCLS Category Pages",
                },
            },
            {
                name: "Product Spotlight Page",
                isMatch: () =>
                    new Promise((resolve, reject) => {
                        let isMatchPDP = setTimeout(() => {
                            resolve(false);
                        }, 500);
                        return SalesforceInteractions.DisplayUtils.pageElementLoaded(".product-spotlight-wrapper", "html").then(() => {
                            clearTimeout(isMatchPDP);
                            resolve(true);
                        });
                    }),
                /*{
                          return SalesforceInteractions.cashDom(".product-spotlight-wrapper").length > 0;
                        },*/
                interaction: {
                    name: "BCLS Product Spotlight Page",
                },
            },
            {
                name: "Product Detail Page",
                isMatch: () =>
                    new Promise((resolve, reject) => {
                        let isMatchPDP = setTimeout(() => {
                            resolve(false);
                        }, 500);
                        return SalesforceInteractions.DisplayUtils.pageElementLoaded("div [data-page-name='product-detail-page']").then(() => {
                            clearTimeout(isMatchPDP);
                            resolve(true);
                        });
                    }),
                //{
                //  return SalesforceInteractions.cashDom("[data-page-name='product-detail-page']").length > 0;
                //},
                interaction: {
                    name: "BCLS Product Detail Page",
                },
            },
            {
                name: "Product Detail Page Bundle",
                isMatch: () => {
                    let re = new RegExp("^/resources/industries/[^/]+");
                    return re.test(window.location.pathname);
                },
                interaction: {
                    name: "BCLS Product Detail Page Bundle",
                },
            },
            {
                name: "Flow Cytometry Dura Innovations Calculator ",
                isMatch: () => {
                    let re = new RegExp("resources/technologies/dura-innovations/calculator");
                    return re.test(window.location.href);
                },
                interaction: {
                    name: "BCLS Flow Cytometry Dura Innovations Calculator ",
                },
            },
            {
                name: "Centrifuges Rotor Calculator",
                isMatch: () => {
                    let re = new RegExp("centrifuges/rotors/calculator");
                    return re.test(window.location.href);
                },
                interaction: {
                    name: "BCLS Centrifuges Rotor Calculator",
                },
            },
            {
                name: "Shop Conjugated Antibodies and Antibody Cocktails",
                /*isMatch: () => {
                          return SalesforceInteractions.cashDom(".antibody-search-page-wrapper").length > 0;
                        },*/
                isMatch: () =>
                    new Promise((resolve, reject) => {
                        let isMatchPDP = setTimeout(() => {
                            resolve(false);
                        }, 500);
                        return SalesforceInteractions.DisplayUtils.pageElementLoaded(".antibody-search-page-wrapper", "html").then(() => {
                            clearTimeout(isMatchPDP);
                            resolve(true);
                        });
                    }),
                interaction: {
                    name: "BCLS Shop Conjugated Antibodies and Antibody Cocktails",
                },
            },
            {
                name: "Search Page", // search page broken on prod?
                isMatch: () => {
                    let re = new RegExp("/search#");
                    return re.test(window.location.href);
                },
                interaction: {
                    name: "BCLS Search Page",
                },
            },
            {
                name: "Resources Landing Page",
                isMatch: () => {
                    let re = new RegExp("/resources/?$");
                    return re.test(window.location.href.split("?")[0].split("#")[0]);
                },
                interaction: {
                    name: "BCLS Resources Landing Page",
                },
            },
            {
                name: "Resources Type Landing Page",
                isMatch: () => {
                    let re = new RegExp("/resources/[^/]+/?$");
                    return re.test(window.location.href.split("?")[0].split("#")[0]);
                },
                interaction: {
                    name: "BCLS Resources Type Landing Page",
                },
            },
            {
                name: "Product Applications Page",
                isMatch: () => {
                    let re = new RegExp("/resources/product-applications/[a-z0-9-]+");
                    return re.test(window.location.href);
                },
                interaction: {
                    name: "BCLS Product Applications Page",
                },
            },
            {
                name: "Resources Reading Material Page",
                isMatch: () => {
                    let re = new RegExp("/resources/reading-material/[a-z0-9-]+");
                    return re.test(window.location.href);
                },
                interaction: {
                    name: "BCLS Resources Reading Material Page",
                },
            },
            {
                name: "Video Page",
                isMatch: () => {
                    let re = new RegExp("/resources/videos/[^/]+/[^/]+");
                    return re.test(window.location.href.split("?")[0].split("#")[0]);
                },
                interaction: {
                    name: "BCLS Video Page",
                },
            },
            {
                name: "Video Type",
                isMatch: () => {
                    let re = new RegExp("/resources/videos/[^/]+");
                    return re.test(window.location.href.split("?")[0].split("#")[0]);
                },
                interaction: {
                    name: "BCLS Video Type",
                },
            },

            {
                name: "Qualification and Calibration",
                isMatch: () => {
                    const urls = [
                        "/service/instrument-qualification-calibration",
                        "/support/tech-support",
                        "/service/instrument-qualification-calibration/particle-counting",
                    ];
                    const currentUrl = window.location.href.split("?")[0].split("#")[0];
                    return urls.some((url) => currentUrl.endsWith(url));
                },
                interaction: {
                    name: "BCLS Qualification and Calibration",
                },
            },

            {
                name: "Warrantys and Extended Warantys (Ongoing Support)",
                isMatch: () => {
                    const urls = [
                        "/service/plans",
                        "/service/instrument-optimization",
                        "/service/instrument-optimization/beckmanconnect-support-tools/remote-support",
                    ];
                    const currentUrl = window.location.href.split("?")[0].split("#")[0];
                    return urls.some((url) => currentUrl.endsWith(url));
                },
                interaction: {
                    name: "BCLS Warrantys and Extended Warantys",
                },
            },

            {
                name: "Tech Support and Repairs (One time)",
                isMatch: () => {
                    const urls = ["/service/tech-support", "/service/tech-support/repairs"];
                    const currentUrl = window.location.href.split("?")[0].split("#")[0];
                    return urls.some((url) => currentUrl.endsWith(url));
                },
                interaction: {
                    name: "BCLS Tech Support and Repairs",
                },
            },

            {
                name: "Centrifugation",
                isMatch: () => {
                    let re = new RegExp("/service/plans/centrifuge$");
                    return re.test(window.location.href.split("?")[0].split("#")[0]);
                },
                interaction: {
                    name: "BCLS Centrifugation",
                },
            },

            {
                name: "Flow Cytometry",
                isMatch: () => {
                    let re = new RegExp("/service/plans/flow-cytometry$");
                    return re.test(window.location.href.split("?")[0].split("#")[0]);
                },
                interaction: {
                    name: "BCLS Flow Cytometry",
                },
            },

            {
                name: "Particle Counting",
                isMatch: () => {
                    let re = new RegExp("/service/plans/particle-counting$");
                    return re.test(window.location.href.split("?")[0].split("#")[0]);
                },
                interaction: {
                    name: "BCLS Particle Counting",
                },
            },

            {
                name: "Liquid Handling",
                isMatch: () => {
                    let re = new RegExp("/service/plans/liquid-handling$");
                    return re.test(window.location.href.split("?")[0].split("#")[0]);
                },
                interaction: {
                    name: "BCLS Liquid Handling",
                },
            },

            {
                name: "Particle Analysis",
                isMatch: () => {
                    let re = new RegExp("/service/plans/particle-analysis$");
                    return re.test(window.location.href.split("?")[0].split("#")[0]);
                },
                interaction: {
                    name: "BCLS Particle Analysis",
                },
            },

            {
                name: "Services",
                isMatch: () => {
                    // Check if URL contains "service"
                    const url = window.location.href.split("?")[0].split("#")[0];

                    // Return true if URL contains "service"
                    return url.includes("/service");
                },
                interaction: {
                    name: "BCLS Services",
                },
            },

            {
                name: "Training Courses Landing Page",
                isMatch: () => {
                    let re = new RegExp("/service/training");
                    return re.test(window.location.href);
                },
                interaction: {
                    name: "BCLS Training Courses Landing Page",
                },
            },
            {
                name: "Instrument Qualifications Request a Service Form",
                isMatch: () => {
                    let re = new RegExp("/service/instrument-qualification-calibration/request");
                    return re.test(window.location.href);
                },
                listeners: [
                    SalesforceInteractions.listener("click", "html", (e) => {
                        if (
                            SalesforceInteractions.cashDom(e.target).attr("id") === "submit_button" ||
                            SalesforceInteractions.cashDom(e.target).closest("#submit_button").length > 0
                        ) {
                            // Check if consent checkbox is checked
                            const consentCheckbox = SalesforceInteractions.cashDom("#tfa_3750");
                            if (consentCheckbox.length > 0 && consentCheckbox.is(":checked")) {
                                Evergage.sendEvent({
                                    action: "BCLS Instrument Qualifications Request Submit",
                                    user: {
                                        attributes: {
                                            emailAddress: SalesforceInteractions.cashDom("#tfa_2273").val(),
                                            firstName: SalesforceInteractions.cashDom("#tfa_2267").val(),
                                        },
                                    },
                                });
                            }
                        }
                    }),
                ],
                interaction: {
                    name: "BCLS Instrument Qualifications Request a Service Form",
                },
            },
            {
                name: "General Request a Service Form",
                isMatch: () => {
                    let re = new RegExp("/service/plans/request");
                    return re.test(window.location.href);
                },
                listeners: [
                    SalesforceInteractions.listener("click", "html", (e) => {
                        if (SalesforceInteractions.cashDom(e.target).hasClass("mktoButton")) {
                            // Check if consent checkbox is checked
                            const consentCheckbox = SalesforceInteractions.cashDom("#mktoRadio_52108_0");
                            if (consentCheckbox.length > 0 && consentCheckbox.is(":checked")) {
                                Evergage.sendEvent({
                                    action: "BCLS General Request a Service Form Submit",
                                    user: {
                                        attributes: {
                                            emailAddress: SalesforceInteractions.cashDom("#Email").val(),
                                            firstName: SalesforceInteractions.cashDom("#FirstName").val(),
                                            lastName: SalesforceInteractions.cashDom("#LastName").val()
                                        },
                                    },
                                });
                            }
                        }
                    }),
                ],
                interaction: {
                    name: "BCLS General Request a Service Form",
                },
            },
            {
                name: "Service Detail Page",
                isMatch: () => {
                    let re = new RegExp("/service/instrument-optimization/beckmanconnect-support-tools/remote-support/certificate-updater");
                    return re.test(window.location.href);
                },
                interaction: {
                    name: "BCLS Service Detail Page",
                },
            },
            {
                name: "Service Types",
                isMatch: () => {
                    let re = new RegExp("/service/[^/]+");
                    return re.test(window.location.href.split("?")[0].split("#")[0]);
                },
                interaction: {
                    name: "BCLS Service Types",
                },
            },
            //   {
            //     name: "Request a Service Form",
            //     isMatch: () => {
            //       let re = new RegExp("wish-list");
            //       return re.test(window.location.href);
            //     },
            //     interaction: {
            //       name: "BCLS Request a Service Form",
            //     },
            //   },
            {
                name: "Support Landing Page",
                isMatch: () => {
                    let re = new RegExp("/support/?$");
                    return re.test(window.location.href.split("?")[0].split("#")[0]);
                },
                interaction: {
                    name: "BCLS Support Landing Page",
                },
            },
            {
                name: "Support Page Type",
                isMatch: () => {
                    let re = new RegExp("/support/ecommerce/?$");
                    return re.test(window.location.href.split("?")[0].split("#")[0]);
                },
                interaction: {
                    name: "BCLS Support Page Type",
                },
            },
            {
                name: "Tech Support Landing Page",
                isMatch: () => {
                    let re = new RegExp("/support/tech-support/?$");
                    return re.test(window.location.href.split("?")[0].split("#")[0]);
                },
                interaction: {
                    name: "BCLS Tech Support Landing Page",
                },
            },
            {
                name: "Support Request Assistance",
                isMatch: () => {
                    let re = new RegExp("/support/ecommerce/request-assistance/?$");
                    return re.test(window.location.href.split("?")[0].split("#")[0]);
                },
                listeners: [
                    SalesforceInteractions.listener("click", "html", (e) => {
                        if (SalesforceInteractions.cashDom(e.target).hasClass("submit_button")) {
                            Evergage.sendEvent({
                                action: "BCLS Support-Request-Assistance Submit",
                                user: {
                                    attributes: {
                                        emailAddress: SalesforceInteractions.cashDom("#tfa_5").val(),
                                    },
                                },
                            });
                        }
                    }),
                ],
                interaction: {
                    name: "BCLS Support Request Assistance",
                },
            },
            {
                name: "Quote Request Thank You Page",
                isMatch: () => {
                    let re = new RegExp("pages.beckman.com/index.php/email/emailWebview");
                    return re.test(window.location.href);
                },
                interaction: {
                    name: "BCLS Quote Request Thank You Page",
                },
            },
            {
                name: "Service Learning Sign Up Key Page",
                isMatch: () => {
                    let re = new RegExp("mybeckman.myabsorb.com/#/signup");
                    return re.test(window.location.href);
                },
                interaction: {
                    name: "BCLS Service Learning Sign Up Key Page",
                },
            },
            {
                name: "Service Learning Sign Up Page",
                isMatch: () => {
                    let re = new RegExp("/mybeckman.myabsorb.com/#/signup-form");
                    return re.test(window.location.href);
                },
                interaction: {
                    name: "BCLS Service Learning Sign Up Page",
                },
            },
            {
                name: "SSO Log in",
                isMatch: () => {
                    let re = new RegExp("sso.beckman.com/auth/realms/beckmancoulter/protocol/openid-connect/auth");
                    return re.test(window.location.href);
                },
                interaction: {
                    name: "BCLS SSO Log in",
                },
            },
            {
                name: "Registration Sign Up Page",
                isMatch: () => {
                    let re = new RegExp("/register/?$");
                    return re.test(window.location.href.split("?")[0].split("#")[0]);
                },
                listeners: [
                    SalesforceInteractions.listener("click", "html", (e) => {
                        const submitButton = SalesforceInteractions.cashDom("#createAccountForm > div.create-account-form__captcha-btn-wrap > button");
                        if (submitButton.length > 0 && (submitButton.is(e.target) || submitButton.has(e.target).length > 0)) {
                            // Check if consent checkbox is checked
                            const consentCheckbox = SalesforceInteractions.cashDom(
                                "#createAccountForm > div.create-account-form__consent-wrap > div.create-account-form__gdpr > div > div.create-account-form__gdpr-fields > div:nth-child(1) > label:nth-child(2) > input[type=radio]"
                            );
                            if (consentCheckbox.length > 0 && consentCheckbox.is(":checked")) {
                                Evergage.sendEvent({
                                    action: "BCLS Registration Sign Up Submit",
                                    user: {
                                        attributes: {
                                            emailAddress: SalesforceInteractions.cashDom("#ca_email").val(),
                                            firstName: SalesforceInteractions.cashDom("#ca_first_name").val(),
                                            lastName: SalesforceInteractions.cashDom("#ca_last_name").val()
                                        },
                                    },
                                });
                            }
                        }
                    }),
                ],
                interaction: {
                    name: "BCLS Registration Sign Up Page",
                },
            },
            {
                name: "Registration Thank You Page",
                isMatch: () => {
                    let re = new RegExp("/register/thank-you/?$");
                    return re.test(window.location.href.split("?")[0].split("#")[0]);
                },
                interaction: {
                    name: "BCLS Registration Thank You Page",
                },
            },
            {
                name: "My Account Dashboard",
                isMatch: () => {
                    let re = new RegExp("/my-account/dashboard/?$");
                    return re.test(window.location.href.split("?")[0].split("#")[0]);
                },
                interaction: {
                    name: "BCLS My Account Dashboard",
                },
            },
            {
                name: "My Account Settings",
                isMatch: () => {
                    let re = new RegExp("/my-account/account-settings/?$");
                    return re.test(window.location.href.split("?")[0].split("#")[0]);
                },
                interaction: {
                    name: "BCLS My Account Settings",
                },
            },
            {
                name: "Shopping Cart",
                isMatch: () => {
                    let re = new RegExp("/shopping/cart/?$");
                    return re.test(window.location.href.split("?")[0].split("#")[0]);
                },
                interaction: {
                    name: "BCLS Shopping Cart",
                },
            },
            {
                name: "Shopping Lists",
                isMatch: () => {
                    let re = new RegExp("/my-account/my-lists");
                    return re.test(window.location.href.split("?")[0].split("#")[0]);
                },
                interaction: {
                    name: "BCLS Shopping Lists",
                },
            },
            {
                name: "Pages Subdomain",
                isMatch: () => {
                    let re = new RegExp("pages.beckman.com");
                    return re.test(window.location.href);
                },
                interaction: {
                    name: "BCLS Pages Subdomain",
                },
            },
            {
                name: "PPC Landing Page Type",
                isMatch: () => {
                    let re = new RegExp("/landing/ppc/.+");
                    return re.test(window.location.href);
                },
                interaction: {
                    name: "BCLS PPC Landing Page Type",
                },
            },
            {
                name: "Shop Product Landing Page",
                isMatch: () => {
                    let re = new RegExp("/shop/?$");
                    return re.test(window.location.href.split("?")[0].split("#")[0]);
                },
                interaction: {
                    name: "BCLS Shop Product Landing Page",
                },
            },
            {
                name: "Shop Product Category Page",
                /*
                        isMatch: () => {
                          return SalesforceInteractions.cashDom(".coveo-product-search-hive-wrapper").length > 0;
                        },*/
                isMatch: () =>
                    new Promise((resolve, reject) => {
                        let isMatchPDP = setTimeout(() => {
                            resolve(false);
                        }, 500);
                        return SalesforceInteractions.DisplayUtils.pageElementLoaded(".coveo-product-search-hive-wrapper", "html").then(() => {
                            clearTimeout(isMatchPDP);
                            resolve(true);
                        });
                    }),
                interaction: {
                    name: "BCLS Shop Product Category Page",
                },
            },
            // {
            //     name: "Shop Product Bundle Detail Page",
            //     isMatch: () => {
            //         let re = new RegExp("TBD");
            //         return re.test(window.location.href);
            //     },
            //     interaction: {
            //         name: "BCLS Shop Product Bundle Detail Page"
            //     }
            // },
            // {
            //     name: "Shop Product Detail Page",
            //     isMatch: () => {
            //         let re = new RegExp("TBD");
            //         return re.test(window.location.href);
            //     },
            //     interaction: {
            //         name: "BCLS Shop Product Detail Page"
            //     }
            // },
            // {
            //     name: "Antibodies Search Results Page",
            //     isMatch: () => {
            //       return SalesforceInteractions.cashDom(".antibody-search-page-wrapper").length > 0;
            //     },
            //     interaction: {
            //         name: "BCLS Antibodies Search Results Page"
            //     }
            // }
            {
                name: "Request a Quote Thank You Landing Page",
                isMatch: () => {
                    let re = new RegExp("/request-quote/thank-you");
                    return re.test(window.location.href.split("?")[0].split("#")[0]);
                },
                interaction: {
                    name: "BCLS Request a Quote Thank You Landing Page",
                },
            },
            {
                name: "BCLS Request a Quote Landing Page",
                isMatch: () => {
                    let re = new RegExp("/request-quote");
                    return re.test(window.location.href.split("?")[0].split("#")[0]);
                },
                listeners: [
                    SalesforceInteractions.listener("click", "html", (e) => {
                        if (
                            SalesforceInteractions.cashDom(e.target).hasClass("mktoButton") &&
                            SalesforceInteractions.cashDom("#mktoRadio_56539_0").is(":checked")
                        ) {
                            Evergage.sendEvent({
                                action: "BCLS Request Quote Submit",
                                user: {
                                    attributes: {
                                        emailAddress: SalesforceInteractions.cashDom("#Email").val(),
                                        firstName: SalesforceInteractions.cashDom("#FirstName").val(),
                                        lastName: SalesforceInteractions.cashDom("#LastName").val()
                                    },
                                },
                            });
                        }
                    }),
                ],
                interaction: {
                    name: "BCLS Request a Quote Landing Page",
                },
            },
            {
                name: "Contact Us",
                isMatch: () => {
                    const url = window.location.href.split("?")[0].split("#")[0];
                    return url.includes("/contact-us") && !url.includes("/contact-us/thank-you");
                },
                listeners: [
                    SalesforceInteractions.listener("click", "html", (e) => {
                        if (
                            SalesforceInteractions.cashDom(e.target).hasClass("mktoButton") &&
                            SalesforceInteractions.cashDom("#mktoRadio_56604_0").is(":checked")
                        ) {
                            Evergage.sendEvent({
                                action: "BCLS contact-us Submit",
                                user: {
                                    attributes: {
                                        emailAddress: SalesforceInteractions.cashDom("#Email").val(),
                                        firstName: SalesforceInteractions.cashDom("#FirstName").val(),
                                        lastName: SalesforceInteractions.cashDom("#LastName").val()
                                    },
                                },
                            });
                        }
                    }),
                ],
                interaction: {
                    name: "BCLS Contact Us Page",
                },
            },
            {
                name: "Contact Us Thank You",
                isMatch: () => {
                    let re = new RegExp("/contact-us/thank-you");
                    return re.test(window.location.href.split("?")[0].split("#")[0]);
                },
                interaction: {
                    name: "BCLS Contact Us Thank You Page",
                },
            },
        ],
    };

    SalesforceInteractions.initSitemap(sitemapConfig);
});