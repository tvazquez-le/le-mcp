window._sf = SalesforceInteractions;

const domIsInteractive = () => {
    return new Promise((resolve) => {
        _sf.cashDom(() => {
            resolve(true);
        });
    });
};

const allowedHosts = {
    peripay: ["www.peripay.com", "peri2.wpenginepowered.com"],
    identifix: ["www.identifix.com", "store.identifix.com"],
    hollander: ["www.hollandersolutions.com", "hollandersostg.wpengine.com"]
};

const getCurrentHost = () => {
    const hostname = window.location.hostname;
    return (
        Object.keys(allowedHosts).find((key) =>
            allowedHosts[key].includes(hostname)
        ) || false
    );
};

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const getElementByXpath = (path) => {
    return document.evaluate(
        path,
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
    ).singleNodeValue;
};

const globalOnAction = (actionEvent) => {

    let subKey = _sf.mcis.getParameterByName("subKey");
    let businessType = window.localStorage.getItem("businessType");
    let business = window.localStorage.getItem("business");
    let firstName = window.localStorage.getItem("firstName");
    let lastName = window.localStorage.getItem("lastName");
    let country = window.localStorage.getItem("country");
    let productInterest = window.localStorage.getItem("productInterest");
    let productBundle = window.localStorage.getItem("productBundle");
    let additionalProducts = window.localStorage?.getItem("additionalProducts");

    actionEvent.user = actionEvent.user || {};
    actionEvent.user.identities = actionEvent.user.identities || {};
    actionEvent.user.identities.subKey = subKey;

    actionEvent.user.attributes = {
        utmCampaign: _sf.mcis.getParameterByName("utm_campaign"),
        utmSource: _sf.mcis.getParameterByName("utm_source"),
        utmMedium: _sf.mcis.getParameterByName("utm_medium"),
        utmContent: _sf.mcis.getParameterByName("utm_content"),
        leadSource: _sf.mcis.getParameterByName("lead_source"),
        leadSourceDetail: _sf.mcis.getParameterByName("lead_source_detail"),
        gclid: _sf.mcis.getParameterByName("gclid"),
        utmTerm: _sf.mcis.getParameterByName("utm_term"),
        businessType: businessType,
        business: business,
        firstName: firstName,
        lastName: lastName,
        country: country,
        productInterest: productInterest,
        productBundle: productBundle,
        additionalProducts: [additionalProducts]
    };

    return actionEvent;
};

const checkoutSpaListener = () => {
    // Only run this logic on the one-page checkout URL
    if (!/^\/onepagecheckout/.test(window.location.pathname)) {
        return;
    }

    let checkoutFormFound = false;
    
    // Poll the document until the main checkout container '#checkout-steps' exists.
    const setupObserverInterval = setInterval(() => {
        const targetNode = document.getElementById('checkout-steps');

        if (targetNode) {
            checkoutFormFound = true;
            clearInterval(setupObserverInterval);

            let paymentInfoFired = false;
            let purchaseListenerAttached = false; // Use a new flag for the click listener

            const observer = new MutationObserver(() => {
                window.requestAnimationFrame(() => {
                    // Track when the Payment Info step becomes visible
                    const paymentStep = document.getElementById('checkout-step-payment-info');
                    if (!paymentInfoFired && paymentStep && window.getComputedStyle(paymentStep).display !== 'none') {
                        paymentInfoFired = true;
                        _sf.sendEvent({
                            interaction: {
                                name: "IDX Checkout Page - Payment Info"
                            }
                        });
                    }

                    // Track when the final Confirm Order step becomes visible
                    const confirmStep = document.getElementById('checkout-step-confirm-order');
                    if (!purchaseListenerAttached && confirmStep && window.getComputedStyle(confirmStep).display !== 'none') {
                        // Set flag to true immediately to ensure this block only runs once
                        purchaseListenerAttached = true; 

                        // Fire the "view" event for reaching this step
                        _sf.sendEvent({
                            interaction: {
                                name: "IDX Purchase Page"
                            }
                        });

                        // Now that the step is visible, poll for the #btnConfirmOrder button
                        const buttonInterval = setInterval(() => {
                            const confirmButton = document.getElementById('btnConfirmOrder');
                            if (confirmButton) {
                                clearInterval(buttonInterval); // Button found, stop polling

                                // Attach the final "Purchase" click listener
                                confirmButton.addEventListener('click', () => {
                                    _sf.sendEvent({
                                        interaction: {
                                            name: "IDX Purchase Submit"
                                        }
                                    });
                                    // NOTE: We do NOT call event.preventDefault().
                                    // This allows the website's original purchase submission to proceed normally.
                                });
                            }
                        }, 500);

                        // Failsafe for the button polling
                        setTimeout(() => clearInterval(buttonInterval), 10000);
                    }

                    // Once both listeners are set up, we can stop observing
                    if (paymentInfoFired && purchaseListenerAttached) {
                        observer.disconnect();
                    }
                });
            });

            // Start observing the target node.
            observer.observe(targetNode, {
                attributes: true,
                childList: true,
                subtree: true,
                attributeFilter: ['style', 'class']
            });
        }
    }, 500);

    // Failsafe to stop polling for the main container.
    setTimeout(() => {
        if (!checkoutFormFound) {
            clearInterval(setupObserverInterval);
        }
    }, 10000);
};

const addToCartListener1 = () => {
    const selector = "a.woo-button[href*='/cart/addproduct/1009']";
    let elementFound = false;

    const interval = setInterval(() => {
        const addToCartButton = document.querySelector(selector);

        if (addToCartButton) {
            elementFound = true;
            clearInterval(interval);

            addToCartButton.addEventListener("click", (event) => {

                event.preventDefault();

                _sf.sendEvent({
                    interaction: {
                        name: _sf.CartInteractionName.AddToCart,
                        lineItem: {
                            catalogObjectType: "Product",
                            catalogObjectId: "Direct Hit Pro Academy",
                            price: 219,
                            quantity: 1
                        }
                    }
                });

                const destinationUrl = addToCartButton.href;
                setTimeout(() => {
                    window.location.href = destinationUrl;
                }, 500);
            });
        }
    }, 500);

    setTimeout(() => {
        if (!elementFound) {
            clearInterval(interval);
        }
    }, 10000);
};

const addToCartListener2 = () => {
    const selector = "a.woo-button[href*='/cart/addproduct/1008']";
    let elementFound = false;

    const interval = setInterval(() => {
        const addToCartButton = document.querySelector(selector);

        if (addToCartButton) {
            elementFound = true;
            clearInterval(interval);

            addToCartButton.addEventListener("click", (event) => {

                event.preventDefault();

                _sf.sendEvent({
                    interaction: {
                        name: _sf.CartInteractionName.AddToCart,
                        lineItem: {
                            catalogObjectType: "Product",
                            catalogObjectId: "Direct Hit Pro",
                            price: 219,
                            quantity: 1
                        }
                    }
                });

                const destinationUrl = addToCartButton.href;
                setTimeout(() => {
                    window.location.href = destinationUrl;
                }, 500);
            });
        }
    }, 500);

    setTimeout(() => {
        if (!elementFound) {
            clearInterval(interval);
        }
    }, 10000);
};

const addToCartListener3 = () => {
    const selector = "button.button.ymm-submit-any-selection";
    let elementFound = false;

    const interval = setInterval(() => {
        const addToCartButton = document.querySelector(selector);

        if (addToCartButton) {
            elementFound = true;
            clearInterval(interval);

            addToCartButton.addEventListener("click", (event) => {

                event.preventDefault();

                _sf.sendEvent({
                    interaction: {
                        name: _sf.CartInteractionName.AddToCart,
                        lineItem: {
                            catalogObjectType: "Product",
                            catalogObjectId: "Direct Hit DIY",
                            price: 219,
                            quantity: 1
                        }
                    }
                });

                const destinationUrl = addToCartButton.href;
                setTimeout(() => {
                    window.location.href = destinationUrl;
                }, 500);
            });
        }
    }, 500);

    setTimeout(() => {
        if (!elementFound) {
            clearInterval(interval);
        }
    }, 10000);
};

const formSubmitListener = () => {

    const submit = document.querySelector("#gform_submit_button_2");
    let firstName = _sf.cashDom("#input_2_1");
    let lastName = _sf.cashDom("#input_2_3");
    let emailAddress = _sf.cashDom("#input_2_67");
    let businessType = _sf.cashDom("#input_2_9");
    let business = _sf.cashDom("#input_2_4");
    let country = _sf.cashDom("#input_2_7");
    let productInterest = _sf.cashDom("#input_2_47");
    let productBundle = _sf.cashDom("#input_2_86");

    submit?.addEventListener("click", (event) => {
        window.localStorage.setItem("businessType", businessType?.val());
        window.localStorage.setItem("business", business?.val());
        window.localStorage.setItem("firstName", firstName?.val());
        window.localStorage.setItem("lastName", lastName?.val());
        window.localStorage.setItem("country", country?.val());
        window.localStorage.setItem("productInterest", productInterest?.val());
        window.localStorage.setItem("productBundle", productBundle?.val());
        let checkedBoxes = document.querySelectorAll('#input_2_90 input[type="checkbox"]:checked');
        let additionalProducts = Array.from(checkedBoxes)?.map((checkbox) => checkbox.value);

        if (emailAddress) {
            _sf.sendEvent({
                interaction: {
                    name: "IDX Form Submit"
                },
                user: {
                    identities: {
                        emailAddress: emailAddress?.val()
                    }
                }
            });
        }
        window.localStorage.setItem("additionalProducts", additionalProducts?.val());
    })
}

// --------------------------
// Peripay Sitemp
// --------------------------
(getCurrentHost() === "peripay" &&
    _sf.init({
        cookieDomain: "peripay.com",
    }).then(() => {
        const sitemapConfig = {
            global: {
                onActionEvent: (actionEvent) => globalOnAction(actionEvent),
                contentZones: [{
                    name: "global_popup"
                },
                {
                    name: "global_exit_intent"
                },
                ],
            },
            pageTypes: [{
                name: "per - home",
                isMatch: () => /^\//.test(window.location.pathname),
                interaction: {
                    name: "PER - Home Page",
                },
                listeners: [
                    _sf.listener("click", "a[href='/#contact']", () => {
                        _sf.sendEvent({
                            interaction: {
                                name: "PER - Access Contact Us"
                            },
                        });
                    }),
                    _sf.listener(
                        "click",
                        "a[href='https://www.ucp-inc.com/peristore']",
                        () => {
                            _sf.sendEvent({
                                interaction: {
                                    name: "PER - Click To Peri Store"
                                },
                            });
                        }
                    ),
                    _sf.listener("click", "rs-layer[data-type='button']", () => {
                        _sf.sendEvent({
                            interaction: {
                                name: "PER - Access Contact Us"
                            },
                        });
                    }),
                    _sf.listener("click", "a[href='tel:888-974-2952']", () => {
                        _sf.sendEvent({
                            interaction: {
                                name: "PER-Click To Call"
                            },
                        });
                    }),
                    _sf.listener("submit", "#gform_1", () => {
                        let email = _sf.cashDom("#input_1_2")?.val();
                        let firstName = _sf.cashDom("#input_1_1_3")?.val();
                        let lastName = _sf.cashDom("#input_1_1_6")?.val();
                        let business = _sf.cashDom("#input_1_4")?.val();
                        let phone = _sf.cashDom("#input_1_3")?.val();

                        if (validateEmail(email)) {
                            _sf.sendEvent({
                                interaction: {
                                    name: "PER - Request an Analysis Submit",
                                },
                                user: {
                                    identities: {
                                        emailAddress: email,
                                    },
                                    attributes: {
                                        firstName: firstName,
                                        lastName: lastName,
                                        business: business,
                                        phone: phone
                                    },
                                },
                            });
                        }
                    }),
                    _sf.listener("click", ".uagb-question", (event) => {
                        _sf.sendEvent({
                            interaction: {
                                name: "PER - FAQ Click: " +
                                    event?.currentTarget.textContent.replace("Question: ", ""),
                            },
                        });
                    }),
                    _sf.listener("click", "a[href='#contact_us']", () => {
                        _sf.sendEvent({
                            interaction: {
                                name: "PER - Access Contact Us"
                            },
                        });
                    }),
                ],
            },
            {
                name: "per-contact-thanks",
                isMatch: () => /\/contact-thanks/.test(window.location.href),
                interaction: {
                    name: "PER - Contact Thanks"
                },
            },
            ],
            pageTypeDefault: {
                name: "per - default",
                interaction: {
                    name: "PER Default Page"
                },
            },
        };
        _sf.initSitemap(sitemapConfig);
    })) ||
    // --------------------------
    // Identifix Sitemp
    // --------------------------
    (getCurrentHost() === "identifix" &&
        _sf.init({
            cookieDomain: "identifix.com",
        }).then(() => {
            const sitemapConfig = {
                global: {
                    onActionEvent: (actionEvent) => globalOnAction(actionEvent),
                    listeners: [
                        _sf.listener(
                            "click",
                            "#main > div.double-sticky-quickbar > a",
                            () => {
                                _sf.sendEvent({
                                    interaction: {
                                        name: "Clicked on Buy Direct Hit Infobar"
                                    },
                                });
                            }
                        ),
                        _sf.listener("click", "button#messenger_btn", () => {
                            _sf.sendEvent({
                                interaction: {
                                    name: "Clicked on Talk to an Agent"
                                },
                            });
                        }),
                        _sf.listener(
                            "click",
                            "a[href='https://www.identifix.com/store']",
                            () => {
                                _sf.sendEvent({
                                    interaction: {
                                        name: "Clicked on Buy Now"
                                    },
                                });
                            }
                        ),
                        _sf.listener(
                            "click",
                            "a[href='https://www.identifix.com/contact-us']",
                            () => {
                                _sf.sendEvent({
                                    interaction: {
                                        name: "Clicked on Contact Us"
                                    },
                                });
                            }
                        ),
                        _sf.listener("click", "#menu-item-246 > a", () => {
                            _sf.sendEvent({
                                interaction: {
                                    name: "Clicked on Login"
                                },
                            });
                        }),
                    ],
                    contentZones: [{
                        name: "global_popup"
                    },
                    {
                        name: "global_exit_intent"
                    },
                    ],
                },
                pageTypes: [{
                    name: "idx - home",
                    isMatch: () => /^\/$/.test(window.location.pathname),
                    interaction: {
                        name: "IDX Home Page"
                    },
                },
                {
                    name: "idx - all products",
                    isMatch: () => /^\/all-products\/$/.test(window.location.pathname),
                    interaction: {
                        name: "IDX All Products"
                    },
                },
                {
                    name: "idx - product bundles",
                    isMatch: () =>
                        /^\/all-products\/product-bundles\/$/.test(
                            window.location.pathname
                        ),
                    interaction: {
                        name: "IDX Product Bundles"
                    },
                },
                {
                    name: "idx - direct hit overview",
                    isMatch: () => /^\/direct-hit\/$/.test(window.location.pathname),
                    interaction: {
                        name: "IDX Direct Hit Overview"
                    },
                },
                {
                    name: "idx - direct hit pro academy",
                    isMatch: () =>
                        /^\/direct-hit\/pro-academy\/$/.test(window.location.pathname),
                    interaction: {
                        name: _sf.CatalogObjectInteractionName.ViewCatalogObject,
                        catalogObject: {
                            type: "Product",
                            id: () => { return "Direct Hit Pro Academy" },
                            attributes: {
                                sku: {
                                    id: () => { return "Direct Hit Pro Academy" }
                                }
                            }
                        }
                    }
                },
                {
                    name: "idx - direct hit pro",
                    isMatch: () =>
                        /^\/direct-hit\/directhitpro\/$/.test(window.location.pathname),
                    interaction: {
                        name: _sf.CatalogObjectInteractionName.ViewCatalogObject,
                        catalogObject: {
                            type: "Product",
                            id: () => { return "Direct Hit Pro" },
                            attributes: {
                                sku: {
                                    id: () => { return "Direct Hit Pro" }
                                }
                            }
                        }
                    }
                },
                {
                    name: "idx - direct hit diy",
                    isMatch: () =>
                        /^\/direct-hit\/direct-hit-diy\/$/.test(window.location.pathname),
                    interaction: {
                        name: _sf.CatalogObjectInteractionName.ViewCatalogObject,
                        catalogObject: {
                            type: "Product",
                            id: () => { return "Direct Hit DIY" },
                            attributes: {
                                sku: {
                                    id: () => { return "Direct Hit DIY" }
                                }
                            }
                        }
                    }
                },
                {
                    name: "idx - direct hit mobile",
                    isMatch: () =>
                        /^\/direct-hit\/mobile\/$/.test(window.location.pathname),
                    interaction: {
                        name: "IDX Direct Hit Mobile"
                    }
                },
                {
                    name: "idx - on demand",
                    isMatch: () => /^\/on-demand\/$/.test(window.location.pathname),
                    interaction: {
                        name: "IDX On Demand"
                    }
                },
                {
                    name: "idx - stealthid",
                    isMatch: () => /^\/stealthid\/$/.test(window.location.pathname),
                    interaction: {
                        name: "IDX StealthID"
                    }
                },
                {
                    name: "idx - direct target",
                    isMatch: () => /^\/direct-target\/$/.test(window.location.pathname),
                    interaction: {
                        name: "IDX Direct Target"
                    }
                },
                {
                    name: "idx - xpertcx",
                    isMatch: () => /^\/xpertcx\/$/.test(window.location.pathname),
                    interaction: {
                        name: "IDX XpertCX"
                    }
                },
                {
                    name: "idx - service suite",
                    isMatch: () => /^\/service-suite\/$/.test(window.location.pathname),
                    interaction: {
                        name: "IDX Service Suite"
                    }
                },
                {
                    name: "idx - shop manager",
                    isMatch: () => /^\/shop-manager\/$/.test(window.location.pathname),
                    interaction: {
                        name: "IDX Shop Manager"
                    }
                },
                {
                    name: "idx - direct help",
                    isMatch: () => /^\/direct-help\/$/.test(window.location.pathname),
                    interaction: {
                        name: "IDX Direct Help"
                    }
                },
                {
                    name: "idx - autodata training",
                    isMatch: () =>
                        /^\/autodata-training\/$/.test(window.location.pathname),
                    interaction: {
                        name: "IDX Autodata Training"
                    }
                },
                {
                    name: "idx - autodata training",
                    isMatch: () =>
                        /^\/autodata-training\/$/.test(window.location.pathname),
                    interaction: {
                        name: "IDX Autodata Training"
                    }
                },
                {
                    name: "idx - all-solutions",
                    isMatch: () => /^\/all-solutions\/$/.test(window.location.pathname),
                    interaction: {
                        name: "IDX All Solutions"
                    }
                },
                {
                    name: "idx - diagnostics and repair",
                    isMatch: () =>
                        /^\/diagnostics-and-repair\/$/.test(window.location.pathname),
                    interaction: {
                        name: "IDX Diagnostics and Repair"
                    }
                },
                {
                    name: "idx - shop management",
                    isMatch: () =>
                        /^\/shop-management\/$/.test(window.location.pathname),
                    interaction: {
                        name: "IDX Shop Management"
                    }
                },
                {
                    name: "idx - digital marketing",
                    isMatch: () =>
                        /^\/digital-marketing\/$/.test(window.location.pathname),
                    interaction: {
                        name: "IDX Digital Marketing"
                    }
                },
                {
                    name: "idx - technicians training",
                    isMatch: () =>
                        /^\/technicians-training\/$/.test(window.location.pathname),
                    interaction: {
                        name: "IDX Technicians Training"
                    }
                },
                {
                    name: "idx - solera merchant services",
                    isMatch: () =>
                        /^\/solera-merchant-services\/$/.test(window.location.pathname),
                    interaction: {
                        name: "IDX Solera Merchant Services"
                    }
                },
                {
                    name: "idx - call center services",
                    isMatch: () =>
                        /^\/call-center-services\/$/.test(window.location.pathname),
                    interaction: {
                        name: "IDX Call Center Services"
                    }
                },
                {
                    name: "idx - shuttle services",
                    isMatch: () =>
                        /^\/shuttle-services\/$/.test(window.location.pathname),
                    interaction: {
                        name: "IDX Shuttle Services"
                    }
                },
                {
                    name: "idx - common car problems",
                    isMatch: () =>
                        /^\/common-car-problems\/$/.test(window.location.pathname),
                    interaction: {
                        name: "IDX Common Car Problems"
                    }
                },
                {
                    name: "idx - blogs",
                    isMatch: () => /^\/blogs\/$/.test(window.location.pathname),
                    interaction: {
                        name: "IDX Blogs"
                    }
                },
                {
                    name: "idx - testimonials",
                    isMatch: () => /^\/testimonials\/$/.test(window.location.pathname),
                    interaction: {
                        name: "IDX Testimonials"
                    }
                },
                {
                    name: "idx - news",
                    isMatch: () => /^\/news\/$/.test(window.location.pathname),
                    interaction: {
                        name: "IDX News"
                    }
                },
                {
                    name: "idx - videos",
                    isMatch: () => /^\/videos\/$/.test(window.location.pathname),
                    interaction: {
                        name: "IDX Videos"
                    }
                },
                {
                    name: "idx - affiliate program",
                    isMatch: () =>
                        /^\/affiliate-program\/$/.test(window.location.pathname),
                    interaction: {
                        name: "IDX Affiliate Program"
                    }
                },
                {
                    name: "idx - our story",
                    isMatch: () => /^\/our-story\/$/.test(window.location.pathname),
                    interaction: {
                        name: "IDX Our Story"
                    }
                },
                {
                    name: "idx - faqs",
                    isMatch: () => /^\/faqs\/$/.test(window.location.pathname),
                    interaction: {
                        name: "IDX FAQs"
                    }
                },
                {
                    name: "idx - contact us",
                    isMatch: () => /^\/contact-us\/$/.test(window.location.pathname),
                    interaction: {
                        name: "IDX Contact Us"
                    }
                },
                {
                    name: "idx - store",
                    isMatch: () => /^\/store\/$/.test(window.location.pathname),
                    interaction: {
                        name: "IDX Store",
                    },
                    listeners: [
                        _sf.listener("click", getElementByXpath("/html/body/div[4]/div[1]/div[3]/div[1]/a"), () => {
                            _sf.sendEvent({
                                interaction: {
                                    name: "Direct-Hit DIY - Choose your Vehicle"
                                }
                            });
                        })
                    ]
                },
                {
                    name: "idx - direct hit diy auto repair software",
                    isMatch: () =>
                        /^\/direct-hit-diy-auto-repair-software\/$/.test(
                            window.location.pathname
                        ),
                    interaction: {
                        name: "IDX Direct Hit DIY Auto Repair Software"
                    }
                },
                {
                    name: "idx - cart page",
                    isMatch: () => _sf.DisplayUtils.bind().pageElementLoaded(".shoppinCartDesk").then(() => {
                        return /^\/cart/.test(window.location.pathname)
                    }),
                    interaction: {
                        name: "IDX Cart Page"
                    }
                },
                {
                    name: "idx - checkout",
                    isMatch: () => /^\/onepagecheckout/.test(window.location.pathname),
                    interaction: {
                        name: "IDX Checkout Page - Billing Address" // Fires the first event on page load
                    },
                    listeners: [
                        // The listener for the email submit on the billing address form
                        _sf.listener("click", "#btnBillingAddressContinue", () => {
                            let emailAddress = _sf.cashDom('input[name="BillingNewAddress.Email"]').val();
                             if (emailAddress) {
                                _sf.sendEvent({
                                    interaction: {
                                        name: "IDX Checkout Page - Email Submit"
                                    },
                                    user: {
                                        identities: {
                                            emailAddress: emailAddress
                                        }
                                    }
                                });
                            }
                        })
                    ]
                }
                ],
                pageTypeDefault: {
                    name: "idx - default",
                    interaction: {
                        name: "IDX Default Page"
                    },
                },
            };
            _sf.initSitemap(sitemapConfig);
            addToCartListener1();
            addToCartListener2();
            addToCartListener3();
            formSubmitListener();
            checkoutSpaListener();
        })) ||
    // --------------------------
    // Hollander Sitemp
    // --------------------------
    (getCurrentHost() === "hollander" &&
        _sf.init({
            cookieDomain: "hollandersolutions.com",
        }).then(() => {
            const sitemapConfig = {
                global: {
                    onActionEvent: (actionEvent) => globalOnAction(actionEvent),
                    contentZones: [{
                        name: "global_popup"
                    },
                    {
                        name: "global_exit_intent"
                    },
                    ],
                },
                pageTypes: [{
                    name: "hol - home",
                    isMatch: () => /^\//.test(window.location.pathname),
                    interaction: {
                        name: "HOL Home Page",
                    },
                    listeners: [
                        _sf.listener(
                            "click",
                            "a[href='https://hollandersostg.wpengine.com/products/']",
                            () => {
                                _sf.sendEvent({
                                    interaction: {
                                        name: "HOL - About Our Products"
                                    },
                                });
                            }
                        ),
                    ],
                },],
                pageTypeDefault: {
                    name: "hol - default",
                    interaction: {
                        name: "HOL Default Page"
                    },
                },
            };
            _sf.initSitemap(sitemapConfig);
        }));