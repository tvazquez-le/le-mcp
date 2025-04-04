const _ = SalesforceInteractions;

const allowedHosts = {
    peripay: "www.peripay.com",
    identifix: "www.identifix.com",
    hollander: "www.hollandersolutions.com" // check domians
};

// allowedDomains = ["www.peripay.com", "peri2.wpenginepowered.com", "hollandersostg.wpengine.com"];

const getCurrentHost = () => {
    return Object.keys(allowedHosts).find(key => allowedHosts[key] === window.location.hostname) || false;
};

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const globalOnAction = (actionEvent) => {

    let subKey = _.mcis.getParameterByName("subKey");
    actionEvent.user = actionEvent.user || {};
    actionEvent.user.identities = actionEvent.user.identities || {};
    actionEvent.user.identities.subKey = subKey

    actionEvent.user.attributes = {
        utmCampaign: _.mcis.getParameterByName("utm_campaign"),
        utmSource: _.mcis.getParameterByName("utm_source"),
        utmMedium: _.mcis.getParameterByName("utm_medium"),
        utmContent: _.mcis.getParameterByName("utm_content"),
        leadSource: _.mcis.getParameterByName("lead_source"),
        leadSourceDetail: _.mcis.getParameterByName("lead_source_detail"),
        gclid: _.mcis.getParameterByName("gclid"),
        utmTerm: _.mcis.getParameterByName("utm_term")
    };

    return actionEvent;
}

// --------------------------
// Peripay Sitemp
// --------------------------
(getCurrentHost() === "peripay" && _.init({
    cookieDomain: "peripay.com"
}).then(() => {
    const sitemapConfig = {
        global: {
            onActionEvent: (actionEvent) => {
                return globalOnAction(actionEvent);
            },
            contentZones: [
                { name: "global_popup" },
                { name: "global_exit_intent" }
            ]
        },
        pageTypes: [{
            name: "per - home",
            isMatch: () => /^\//.test(window.location.pathname),
            interaction: {
                name: "PER - Home Page"
            },
            listeners: [
                _.listener("click", "a[href='/#contact']", () => {
                    _.sendEvent({
                        interaction: {
                            name: "PER-Access Contact Us"
                        }
                    });
                }),
                _.listener("click", "a[href='https://www.ucp-inc.com/peristore']", () => {
                    _.sendEvent({
                        interaction: {
                            name: "PER-Click To Peri Store"
                        }
                    });
                }),
                _.listener("click", "rs-layer[data-type='button']", () => {
                    _.sendEvent({
                        interaction: {
                            name: "PER-Access Contact Us"
                        }
                    });
                }),
                _.listener("click", "a[href='tel:888-974-2952']", () => {
                    _.sendEvent({
                        interaction: {
                            name: "PER-Click To Call"
                        }
                    });
                }),
                _.listener("submit", "#gform_1", () => {
                    let email = _.cashDom("#input_1_2")?.val();
                    let firstName = _.cashDom("#input_1_1_3")?.val();
                    let lastName = _.cashDom("#input_1_1_6")?.val();
                    let business = _.cashDom("#input_1_4")?.val();
                    let phone = _.cashDom("#input_1_3")?.val();

                    if (validateEmail(email)) {
                        _.sendEvent({
                            interaction: {
                                name: "PER - Request an Analysis Submit"
                            },
                            user: {
                                identities: {
                                    emailAddress: email
                                },
                                attributes: {
                                    firstName: firstName,
                                    lastName: lastName,
                                    business: business,
                                    phone: phone
                                }
                            }
                        })
                    }
                }),
                _.listener("click", ".uagb-question", (event) => {
                    _.sendEvent({
                        interaction: {
                            name: "PER - FAQ Click: " + event?.currentTarget.textContent.replace('Question: ', '')
                        }
                    });
                }),
                _.listener("click", "a[href='#contact_us']", () => {
                    _.sendEvent({
                        interaction: {
                            name: "PER - Access Contact Us"
                        }
                    });
                })
            ]
        },
        {
            name: "per-contact-thanks",
            isMatch: () => /\/contact-thanks/.test(window.location.href),
            interaction: {
                name: "PER - Contact Thanks"
            }
        }
        ],
        pageTypeDefault: {
            name: "per - default",
            interaction: {
                name: "PER Default Page"
            }
        }
    };
    _.initSitemap(sitemapConfig);
})) ||
    // --------------------------
    // Identifix Sitemp
    // --------------------------
    (getCurrentHost() === "identifix" && _.init({
        cookieDomain: "identifix.com"
    }).then(() => {
        const sitemapConfig = {
            global: {
                onActionEvent: (actionEvent) => {
                    return globalOnAction(actionEvent);
                },
                contentZones: [
                    { name: "global_popup" },
                    { name: "global_exit_intent" }
                ]
            },
            pageTypes: [{
                name: "Test",
                isMatch: () => /^\//.test(window.location.pathname),
                interaction: {
                    name: "Test"
                }
            }],
            pageTypeDefault: {
                name: "idx - default",
                interaction: {
                    name: "IDX Default Page"
                }
            }
        };
        _.initSitemap(sitemapConfig);
    })) ||
    // --------------------------
    // Hollander Sitemp
    // --------------------------
    (getCurrentHost() === "hollander" && _.init({
        cookieDomain: "hollandersolutions.com"
    }).then(() => {
        const sitemapConfig = {
            global: {
                onActionEvent: (actionEvent) => {
                    return globalOnAction(actionEvent);
                },
                contentZones: [
                    { name: "global_popup" },
                    { name: "global_exit_intent" }
                ]
            },
            pageTypes: [{
                name: "hol - home",
                isMatch: () => /^\//.test(window.location.pathname),
                interaction: {
                    name: "HOL Home Page"
                },
                listeners: [
                    _.listener("click", "a[href='https://hollandersostg.wpengine.com/products/']", () => {
                        _.sendEvent({
                            interaction: {
                                name: "HOL - About Our Products"
                            }
                        });
                    })
                ]
            }],
            pageTypeDefault: {
                name: "hol - default",
                interaction: {
                    name: "HOL Default Page"
                }
            }
        };
        _.initSitemap(sitemapConfig);
    }))