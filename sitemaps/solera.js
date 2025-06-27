/**
 * @file Corrected version of solera.js, refactored to use Cookies.
 * @summary This script handles event tracking and sitemap initialization for Solera properties.
 * It has been modified to use Cookies instead of localStorage for attribute persistence,
 * primarily to enable tracking across different subdomains. It also now persists
 * key URL parameters (like UTM tags and GCLID) in cookies to enable attribution
 * across sessions and subdomains.
 *
 * @changeLog
 * - Replaced all localStorage.setItem/getItem calls with setCookie/getCookie helpers.
 * - Cookies are set on the parent domain (e.g., ".identifix.com") to persist attributes across subdomains.
 * - Added `persistUrlParams` function to capture specified URL parameters and store them in cookies.
 * - Updated `globalOnAction` to read attribution parameters from cookies, ensuring they are sent with every event.
 * - All other optimizations and corrections from previous versions are retained.
 */

window._sf = SalesforceInteractions;

// =================================================================
// HELPER FUNCTIONS
// =================================================================

/**
 * Sets a cookie.
 * @param {string} name - The name of the cookie.
 * @param {string} value - The value of the cookie.
 * @param {number} days - The number of days until the cookie expires.
 * @param {string} domain - The domain to set the cookie on for cross-subdomain access.
 */
function setCookie(name, value, days, domain) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    const domainString = domain ? `; domain=${domain}` : "";
    document.cookie = `${name}=${encodeURIComponent(value || "")}${expires}; path=/${domainString}`;
}

/**
 * Gets a cookie by name.
 * @param {string} name - The name of the cookie to retrieve.
 * @returns {string|null} The value of the cookie or null if not found.
 */
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) {
            return decodeURIComponent(c.substring(nameEQ.length, c.length));
        }
    }
    return null;
}

/**
 * Finds specific query parameters in the URL and stores them in cookies
 * for persistence across sessions and subdomains.
 */
const persistUrlParams = () => {
    const paramsToPersist = [
        "utm_campaign",
        "utm_source",
        "utm_medium",
        "utm_content",
        "lead_source",
        "lead_source_detail",
        "gclid",
        "utm_term"
    ];

    paramsToPersist.forEach(paramName => {
        const value = _sf.mcis.getParameterByName(paramName);
        if (value) {
            // The cookieDomain variable is globally available in this scope.
            setCookie(paramName, value, 365, cookieDomain);
        }
    });
};


const allowedHosts = {
    peripay: ["www.peripay.com", "peri2.wpenginepowered.com"],
    identifix: ["www.identifix.com", "store.identifix.com"],
    hollander: ["www.hollandersolutions.com", "hollandersostg.wpengine.com"]
};

const getCurrentHost = () => {
    const hostname = window.location.hostname;
    return Object.keys(allowedHosts).find(key => allowedHosts[key].includes(hostname)) || false;
};

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const getElementByXpath = (path) => {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
};

const dropDownPicker = (dropdownElement) => {
    const element = _sf.cashDom(dropdownElement)[0];
    if (element && element.options && element.selectedIndex > -1) {
        return element.options[element.selectedIndex].text;
    }
    return "";
};

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


// =================================================================
// GLOBAL EVENT HANDLER
// =================================================================

const globalOnAction = (actionEvent) => {
    /*let additionalProducts = [];
    try {
        const storedProducts = getCookie("additionalProducts");
        if (storedProducts) {
            additionalProducts = JSON.parse(storedProducts);
        }
    } catch (e) {
        console.error("Could not parse 'additionalProducts' from cookie.", e);
    }*/

    actionEvent.user = actionEvent.user || {};
    actionEvent.user.identities = actionEvent.user.identities || {};
    actionEvent.user.identities.subKey = _sf.mcis.getParameterByName("subKey");

    actionEvent.user.attributes = {
        utmCampaign: getCookie("utm_campaign"),
        utmSource: getCookie("utm_source"),
        utmMedium: getCookie("utm_medium"),
        utmContent: getCookie("utm_content"),
        leadSource: getCookie("lead_source"),
        leadSourceDetail: getCookie("lead_source_detail"),
        gclid: getCookie("gclid"),
        utmTerm: getCookie("utm_term"),
        businessType: getCookie("businessType"),
        business: getCookie("business"),
        firstName: getCookie("firstName"),
        lastName: getCookie("lastName"),
        productInterest: getCookie("productInterest"),
        productBundle: getCookie("productBundle"),
        //additionalProducts: additionalProducts,
        country: getCookie("country"),
        state: getCookie("state"),
        city: getCookie("city"),
        zipCode: getCookie("zipCode"),
        phone: getCookie("phoneNumber"),
        lastAddToCartProduct: getCookie("lastAddToCartProduct")
    };

    return actionEvent;
};

// =================================================================
// EVENT LISTENERS
// =================================================================

// This cookieDomain variable will be accessible to the listener functions.
let cookieDomain;

const checkoutSpaListener = () => {
    if (!/^\/onepagecheckout/.test(window.location.pathname)) {
        return;
    }
    waitForElement('#checkout-steps').then(targetNode => {
        let paymentInfoFired = false;
        let purchaseListenerAttached = false;
        const observer = new MutationObserver(() => {
            window.requestAnimationFrame(() => {
                const paymentStep = document.getElementById('checkout-step-payment-info');
                if (!paymentInfoFired && paymentStep && window.getComputedStyle(paymentStep).display !== 'none') {
                    paymentInfoFired = true;
                    try {
                        const emailAddress = _sf.cashDom('input[name="BillingNewAddress.Email"]').val();
                        const country = dropDownPicker("#BillingNewAddress_CountryId");
                        const state = dropDownPicker("#BillingNewAddress_StateProvinceId");
                        const city = _sf.cashDom("#BillingNewAddress_City").val();
                        const zipCode = _sf.cashDom("#BillingNewAddress_ZipPostalCode").val();
                        const phoneNumber = _sf.cashDom("#BillingNewAddress_PhoneNumber").val();
                        const firstName = _sf.cashDom("#BillingNewAddress_FirstName").val();
                        const lastName = _sf.cashDom("#BillingNewAddress_LastName").val();
                        const business = _sf.cashDom("#BillingNewAddress_Company").val();

                        setCookie("country", country, 365, cookieDomain);
                        setCookie("state", state, 365, cookieDomain);
                        setCookie("city", city, 365, cookieDomain);
                        setCookie("zipCode", zipCode, 365, cookieDomain);
                        setCookie("phoneNumber", phoneNumber, 365, cookieDomain);
                        setCookie("firstName", firstName, 365, cookieDomain);
                        setCookie("lastName", lastName, 365, cookieDomain);
                        setCookie("business", business, 365, cookieDomain);

                        const eventPayload = {
                            interaction: { name: "IDX Checkout Page - Payment Info" }
                        };
                        if (emailAddress) {
                            eventPayload.user = { identities: { emailAddress: emailAddress } };
                        }
                        _sf.sendEvent(eventPayload);
                    } catch (e) {
                        console.error("Error during billing step data collection:", e);
                    }
                }

                const confirmStep = document.getElementById('checkout-step-confirm-order');
                if (!purchaseListenerAttached && confirmStep && window.getComputedStyle(confirmStep).display !== 'none') {
                    purchaseListenerAttached = true;
                    _sf.sendEvent({ interaction: { name: "IDX Purchase Page" } });
                    waitForElement('#btnConfirmOrder').then(confirmButton => {
                        confirmButton.addEventListener('click', () => {
                            _sf.sendEvent({ interaction: { name: "IDX Purchase Submit" } });
                        });
                    });
                }

                if (paymentInfoFired && purchaseListenerAttached) {
                    observer.disconnect();
                }
            });
        });
        observer.observe(targetNode, {
            attributes: true,
            childList: true,
            subtree: true,
            attributeFilter: ['style', 'class']
        });
    });
};

const createAddToCartListener = (selector, productName, price, preventDefault = false) => {
    waitForElement(selector).then(addToCartButton => {
        addToCartButton.addEventListener("click", (event) => {
            setCookie("lastAddToCartProduct", productName, 365, cookieDomain);
            if (preventDefault) {
                event.preventDefault();
            }
            _sf.sendEvent({
                interaction: {
                    name: _sf.CartInteractionName.AddToCart,
                    lineItem: {
                        catalogObjectType: "Product",
                        catalogObjectId: productName,
                        price: price,
                        quantity: 1
                    }
                }
            });
            if (preventDefault) {
                setTimeout(() => { window.location.href = addToCartButton.href; }, 500);
            }
        }, { capture: true });
    });
};

const formSubmitListener = () => {
    waitForElement("#gform_submit_button_2").then(submitButton => {
        submitButton.addEventListener("click", () => {
            const businessType = _sf.cashDom("#input_2_9")?.val();
            const business = _sf.cashDom("#input_2_4")?.val();
            const firstName = _sf.cashDom("#input_2_1")?.val();
            const lastName = _sf.cashDom("#input_2_3")?.val();
            const country = _sf.cashDom("#input_2_7")?.val();
            const productInterest = _sf.cashDom("#input_2_47")?.val();
            const productBundle = _sf.cashDom("#input_2_86")?.val();
            const checkedBoxes = document.querySelectorAll('#input_2_90 input[type="checkbox"]:checked');
            //const additionalProducts = Array.from(checkedBoxes).map(checkbox => checkbox.value);

            setCookie("businessType", businessType, 365, cookieDomain);
            setCookie("business", business, 365, cookieDomain);
            setCookie("firstName", firstName, 365, cookieDomain);
            setCookie("lastName", lastName, 365, cookieDomain);
            setCookie("country", country, 365, cookieDomain);
            setCookie("productInterest", productInterest, 365, cookieDomain);
            setCookie("productBundle", productBundle, 365, cookieDomain);
            //setCookie("additionalProducts", JSON.stringify(additionalProducts), 365, cookieDomain);

            const emailAddress = _sf.cashDom("#input_2_67")?.val();
            if (emailAddress) {
                _sf.sendEvent({
                    interaction: { name: "IDX Form Submit" },
                    user: { identities: { emailAddress: emailAddress } }
                });
            }
        });
    });
};

const storePageDiyButtonListener = () => {
    if (!/^\/store\/$/.test(window.location.pathname)) {
        return;
    }
    const diyButtonXPath = "/html/body/div[4]/div[1]/div[3]/div[1]/a";
    waitForElement(diyButtonXPath, true).then(buttonElement => {
        buttonElement.addEventListener("click", () => {
            _sf.sendEvent({
                interaction: {
                    name: "Direct-Hit DIY - Choose your Vehicle"
                }
            });
        });
    });
};


// =================================================================
// SITEMAP INITIALIZATION
// =================================================================

const host = getCurrentHost();

// Set the cookie domain based on the host. This will be used by all `setCookie` calls.
const hostToDomainMap = {
    peripay: "peripay.com",
    identifix: "identifix.com",
    hollander: "hollandersolutions.com"
};
cookieDomain = hostToDomainMap[host];


switch (host) {
    case "peripay":
        _sf.init({
            cookieDomain: cookieDomain,
        }).then(() => {
            persistUrlParams();
            const sitemapConfig = {
                global: {
                    onActionEvent: globalOnAction,
                    contentZones: [{ name: "global_popup" }, { name: "global_exit_intent" }],
                },
                pageTypes: [{
                    name: "per - home",
                    isMatch: () => /^\/$/.test(window.location.pathname),
                    interaction: { name: "PER - Home Page" },
                    listeners: [
                        _sf.listener("click", "a[href='/#contact']", () => _sf.sendEvent({ interaction: { name: "PER - Access Contact Us" } })),
                        _sf.listener("click", "a[href='https://www.ucp-inc.com/peristore']", () => _sf.sendEvent({ interaction: { name: "PER - Click To Peri Store" } })),
                        _sf.listener("click", "rs-layer[data-type='button']", () => _sf.sendEvent({ interaction: { name: "PER - Access Contact Us" } })),
                        _sf.listener("click", "a[href='tel:888-974-2952']", () => _sf.sendEvent({ interaction: { name: "PER-Click To Call" } })),
                        _sf.listener("submit", "#gform_1", () => {
                            let email = _sf.cashDom("#input_1_2")?.val();
                            if (validateEmail(email)) {
                                _sf.sendEvent({
                                    interaction: { name: "PER - Request an Analysis Submit" },
                                    user: {
                                        identities: { emailAddress: email },
                                        attributes: {
                                            firstName: _sf.cashDom("#input_1_1_3")?.val(),
                                            lastName: _sf.cashDom("#input_1_1_6")?.val(),
                                            business: _sf.cashDom("#input_1_4")?.val(),
                                            phone: _sf.cashDom("#input_1_3")?.val()
                                        },
                                    },
                                });
                            }
                        }),
                        _sf.listener("click", ".uagb-question", (e) => _sf.sendEvent({ interaction: { name: "PER - FAQ Click: " + e?.currentTarget.textContent.replace("Question: ", "") } })),
                        _sf.listener("click", "a[href='#contact_us']", () => _sf.sendEvent({ interaction: { name: "PER - Access Contact Us" } })),
                    ],
                }, {
                    name: "per-contact-thanks",
                    isMatch: () => /\/contact-thanks/.test(window.location.href),
                    interaction: { name: "PER - Contact Thanks" },
                }],
                pageTypeDefault: {
                    name: "per - default",
                    interaction: { name: "PER Default Page" },
                },
            };
            _sf.initSitemap(sitemapConfig);
        });
        break;

    case "identifix":
        _sf.init({
            cookieDomain: cookieDomain,
        }).then(() => {
            persistUrlParams();
            const sitemapConfig = {
                global: {
                    onActionEvent: globalOnAction,
                    listeners: [
                        _sf.listener("click", "#main > div.double-sticky-quickbar > a", () => _sf.sendEvent({ interaction: { name: "Clicked on Buy Direct Hit Infobar" } })),
                        _sf.listener("click", "button#messenger_btn", () => _sf.sendEvent({ interaction: { name: "Clicked on Talk to an Agent" } })),
                        _sf.listener("click", "a[href='https://www.identifix.com/store']", () => _sf.sendEvent({ interaction: { name: "Clicked on Buy Now" } })),
                        _sf.listener("click", "a[href='https://www.identifix.com/contact-us']", () => _sf.sendEvent({ interaction: { name: "Clicked on Contact Us" } })),
                        _sf.listener("click", "#menu-item-246 > a", () => _sf.sendEvent({ interaction: { name: "Clicked on Login" } })),
                    ],
                    contentZones: [{ name: "global_popup" }, { name: "global_exit_intent" }],
                },
                pageTypes: [
                    { name: "idx - home", isMatch: () => /^\/$/.test(window.location.pathname), interaction: { name: "IDX Home Page" } },
                    { name: "idx - all products", isMatch: () => /^\/all-products\/$/.test(window.location.pathname), interaction: { name: "IDX All Products" } },
                    { name: "idx - product bundles", isMatch: () => /^\/all-products\/product-bundles\/$/.test(window.location.pathname), interaction: { name: "IDX Product Bundles" } },
                    { name: "idx - direct hit overview", isMatch: () => /^\/direct-hit\/$/.test(window.location.pathname), interaction: { name: "IDX Direct Hit Overview" } },
                    { name: "idx - direct hit pro academy", isMatch: () => /^\/direct-hit\/pro-academy\/$/.test(window.location.pathname), interaction: { name: _sf.CatalogObjectInteractionName.ViewCatalogObject, catalogObject: { type: "Product", id: "Direct Hit Pro Academy", attributes: { sku: { id: "Direct Hit Pro Academy" } } } } },
                    { name: "idx - direct hit pro", isMatch: () => /^\/direct-hit\/directhitpro\/$/.test(window.location.pathname), interaction: { name: _sf.CatalogObjectInteractionName.ViewCatalogObject, catalogObject: { type: "Product", id: "Direct Hit Pro", attributes: { sku: { id: "Direct Hit Pro" } } } } },
                    { name: "idx - direct hit diy", isMatch: () => /^\/direct-hit\/direct-hit-diy\/$/.test(window.location.pathname), interaction: { name: _sf.CatalogObjectInteractionName.ViewCatalogObject, catalogObject: { type: "Product", id: "Direct Hit DIY", attributes: { sku: { id: "Direct Hit DIY" } } } } },
                    { name: "idx - direct hit mobile", isMatch: () => /^\/direct-hit\/mobile\/$/.test(window.location.pathname), interaction: { name: "IDX Direct Hit Mobile" } },
                    { name: "idx - on demand", isMatch: () => /^\/on-demand\/$/.test(window.location.pathname), interaction: { name: "IDX On Demand" } },
                    { name: "idx - stealthid", isMatch: () => /^\/stealthid\/$/.test(window.location.pathname), interaction: { name: "IDX StealthID" } },
                    { name: "idx - direct target", isMatch: () => /^\/direct-target\/$/.test(window.location.pathname), interaction: { name: "IDX Direct Target" } },
                    { name: "idx - xpertcx", isMatch: () => /^\/xpertcx\/$/.test(window.location.pathname), interaction: { name: "IDX XpertCX" } },
                    { name: "idx - service suite", isMatch: () => /^\/service-suite\/$/.test(window.location.pathname), interaction: { name: "IDX Service Suite" } },
                    { name: "idx - shop manager", isMatch: () => /^\/shop-manager\/$/.test(window.location.pathname), interaction: { name: "IDX Shop Manager" } },
                    { name: "idx - direct help", isMatch: () => /^\/direct-help\/$/.test(window.location.pathname), interaction: { name: "IDX Direct Help" } },
                    { name: "idx - autodata training", isMatch: () => /^\/autodata-training\/$/.test(window.location.pathname), interaction: { name: "IDX Autodata Training" } },
                    { name: "idx - all-solutions", isMatch: () => /^\/all-solutions\/$/.test(window.location.pathname), interaction: { name: "IDX All Solutions" } },
                    { name: "idx - diagnostics and repair", isMatch: () => /^\/diagnostics-and-repair\/$/.test(window.location.pathname), interaction: { name: "IDX Diagnostics and Repair" } },
                    { name: "idx - shop management", isMatch: () => /^\/shop-management\/$/.test(window.location.pathname), interaction: { name: "IDX Shop Management" } },
                    { name: "idx - digital marketing", isMatch: () => /^\/digital-marketing\/$/.test(window.location.pathname), interaction: { name: "IDX Digital Marketing" } },
                    { name: "idx - technicians training", isMatch: () => /^\/technicians-training\/$/.test(window.location.pathname), interaction: { name: "IDX Technicians Training" } },
                    { name: "idx - solera merchant services", isMatch: () => /^\/solera-merchant-services\/$/.test(window.location.pathname), interaction: { name: "IDX Solera Merchant Services" } },
                    { name: "idx - call center services", isMatch: () => /^\/call-center-services\/$/.test(window.location.pathname), interaction: { name: "IDX Call Center Services" } },
                    { name: "idx - shuttle services", isMatch: () => /^\/shuttle-services\/$/.test(window.location.pathname), interaction: { name: "IDX Shuttle Services" } },
                    { name: "idx - common car problems", isMatch: () => /^\/common-car-problems\/$/.test(window.location.pathname), interaction: { name: "IDX Common Car Problems" } },
                    { name: "idx - blogs", isMatch: () => /^\/blogs\/$/.test(window.location.pathname), interaction: { name: "IDX Blogs" } },
                    { name: "idx - testimonials", isMatch: () => /^\/testimonials\/$/.test(window.location.pathname), interaction: { name: "IDX Testimonials" } },
                    { name: "idx - news", isMatch: () => /^\/news\/$/.test(window.location.pathname), interaction: { name: "IDX News" } },
                    { name: "idx - videos", isMatch: () => /^\/videos\/$/.test(window.location.pathname), interaction: { name: "IDX Videos" } },
                    { name: "idx - affiliate program", isMatch: () => /^\/affiliate-program\/$/.test(window.location.pathname), interaction: { name: "IDX Affiliate Program" } },
                    { name: "idx - our story", isMatch: () => /^\/our-story\/$/.test(window.location.pathname), interaction: { name: "IDX Our Story" } },
                    { name: "idx - faqs", isMatch: () => /^\/faqs\/$/.test(window.location.pathname), interaction: { name: "IDX FAQs" } },
                    { name: "idx - contact us", isMatch: () => /^\/contact-us\/$/.test(window.location.pathname), interaction: { name: "IDX Contact Us" } },
                    { name: "idx - purchase complete", isMatch: () => /^\/checkout\/completed\//.test(window.location.pathname), interaction: { name: "Purchase Complete" } },
                    {
                        name: "idx - store",
                        isMatch: () => /^\/store\/$/.test(window.location.pathname),
                        interaction: {
                            name: "IDX Store",
                        },
                        listeners: []
                    },
                    { name: "idx - direct hit diy auto repair software", isMatch: () => /^\/direct-hit-diy-auto-repair-software\/$/.test(window.location.pathname), interaction: { name: "IDX Direct Hit DIY Auto Repair Software" } },
                    { name: "idx - cart page", isMatch: () => _sf.DisplayUtils.bind().pageElementLoaded(".shoppinCartDesk").then(() => /^\/cart/.test(window.location.pathname)), interaction: { name: "IDX Cart Page" } },
                    { name: "idx - checkout", isMatch: () => /^\/onepagecheckout/.test(window.location.pathname), interaction: { name: "IDX Checkout Page - Billing Address" } }
                ],
                pageTypeDefault: {
                    name: "idx - default",
                    interaction: { name: "IDX Default Page" },
                },
            };
            _sf.initSitemap(sitemapConfig);

            createAddToCartListener("a.woo-button[href*='/cart/addproduct/1009']", "Direct Hit Pro Academy", 219, true);
            createAddToCartListener("a.woo-button[href*='/cart/addproduct/1008']", "Direct Hit Pro", 219, true);
            createAddToCartListener("button.button.ymm-submit-any-selection", "Direct Hit DIY", 219, false);
            formSubmitListener();
            checkoutSpaListener();
            storePageDiyButtonListener();
        });
        break;

    case "hollander":
        _sf.init({
            cookieDomain: cookieDomain,
        }).then(() => {
            persistUrlParams();
            const sitemapConfig = {
                global: {
                    onActionEvent: globalOnAction,
                    contentZones: [{ name: "global_popup" }, { name: "global_exit_intent" }],
                },
                pageTypes: [{
                    name: "hol - home",
                    isMatch: () => /^\/$/.test(window.location.pathname),
                    interaction: { name: "HOL Home Page" },
                    listeners: [
                        _sf.listener("click", "a[href='https://hollandersostg.wpengine.com/products/']", () => _sf.sendEvent({ interaction: { name: "HOL - About Our Products" } })),
                    ],
                }],
                pageTypeDefault: {
                    name: "hol - default",
                    interaction: { name: "HOL Default Page" },
                },
            };
            _sf.initSitemap(sitemapConfig);
        });
        break;
}