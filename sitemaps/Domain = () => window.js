const getDomain = () => window.location.hostname;
const domain = getDomain();

function setCookie(name, value, days, domain) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/; domain=" + domain;
}

function waitForElement(selector, timeout = 15000, interval = 250) {
    return new Promise((resolve, reject) => {
        const startTime = Date.now();
        const checkElement = () => {
            const element = document.querySelector(selector);
            if (element) {
                resolve(element);
            } else if (Date.now() - startTime >= timeout) {
                reject(new Error(`Element not found: ${selector} within ${timeout}ms`));
            } else {
                setTimeout(checkElement, interval);
            }
        };
        checkElement();
    });
}

function waitForSficSdkReady(timeout = 10000, interval = 100) {
    return new Promise((resolve, reject) => {
        const startTime = Date.now();
        const checkReady = () => {
            if (window.SalesforceInteractions && typeof window.SalesforceInteractions.sendEvent === 'function') {
                resolve();
            } else if (Date.now() - startTime >= timeout) {
                reject(new Error(`SFIC SDK not fully ready after ${timeout}ms.`));
            } else {
                setTimeout(checkReady, interval);
            }
        };
        checkReady();
    });
}

window._sf = SalesforceInteractions;

_sf.init({
    cookieDomain: domain, 

}).then(() => {
    const sitemapConfig = {
        global: {},
        pageTypeDefault: {
            name: "default",
            interaction: {
                name: "Default Page"
            }
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
                name: "About Us",
                isMatch: () => /^\/our\-company\/about\-phenomenex$/.test(window.location.pathname),
                interaction: {
                    name: "About Us"
                }
            },
            {
                name: "Contact Us",
                isMatch: () => /^\/contact\-us$/.test(window.location.pathname),
                interaction: {
                    name: "Contact Us"
                }
            },
            {
                name: "Customer Support Portal",
                isMatch: () => /^\/discover\.phenomenex\.com\/customersupport$/.test(window.location.pathname),
                interaction: {
                    name: "Customer Support Portal"
                }
            },
            {
                name: "Technical Support",
                isMatch: () => /^\/discover\.phenomenex\.com\/technical-support$/.test(window.location.pathname),
                interaction: {
                    name: "Customer Support Portal"
                }
            },
            {
                name: "Dashboard Order History Page",
                isMatch: () => /^\/dashboard\/order\-history$/.test(window.location.pathname),
                interaction: {
                    name: "Dashboard Order History Page"
                }
            },
            {
                name: "Dashboard Profile Page",
                isMatch: () => /^\/dashboard\/profile$/.test(window.location.pathname),
                interaction: {
                    name: "Dashboard Profile Page"
                }
            },
            {
                name: "Dashboard Promotions Page",
                isMatch: () => /^\/dashboard\/promotions$/.test(window.location.pathname),
                interaction: {
                    name: "Dashboard Promotions Page"
                }
            }
            ,
            {
                name: "Dashboard Quotes Page",
                isMatch: () => /^\/dashboard\/quotes$/.test(window.location.pathname),
                interaction: {
                    name: "Dashboard Quotes Page"
                }
            },
            {
                name: "FAQ",
                isMatch: () => /^\/fag/.test(window.location.pathname),
                interaction: {
                    name: "FAQ"
                }
            },
            {
                name: "Applications",
                isMatch: () => /^\/applications/.test(window.location.pathname),
                interaction: {
                    name: "Applications"
                }
            },
            {
                name: "Tools",
                isMatch: () => /^\/tools/.test(window.location.pathname),
                interaction: {
                    name: "Tools"
                }
            },
            {
                name: "Application Compound Search",
                isMatch: () => /^\/application-compound-search/.test(window.location.pathname),
                interaction: {
                    name: "Application Compound Search"
                }
            },
            {
                name: "Documents",
                isMatch: () => /^\/documents/.test(window.location.pathname),
                interaction: {
                    name: "Documents"
                }
            },
            {
                name: "GC Accessories",
                isMatch: () => /^(?:\/products\/cool\-lock\-nut\-gc\-installation\-nut|\/easy\-seals\-gc\-inlet\-base\-seals|\/products\/zebron\-gas\-management\-products|\/products\/gc\-column\-unions\-and\-splitters|\/products\/gc\-ferrules|\/products\/zebron\-gc\-liners|\/products\/gc\-sealing\-o\-rings|\/products\/gc\-syringes|\/products\/verex\-vials)$/.test(window.location.pathname),
                interaction: {
                    name: "GC Accessories"
                }
            },
            {
                name: "GC Column Brands",
                isMatch: () => /^\/products\/zebron\-gc\-columns$/.test(window.location.pathname),
                interaction: {
                    name: "GC Column Brands"
                }
            },
            {
                name: "GC Knowledge Center",
                isMatch: () => /^\/knowledge\-center\/gc\-knowledge\-center$/.test(window.location.pathname),
                interaction: {
                    name: "GC Knowledge Center"
                }
            },
            {
                name: "GC Techniques & Formats",
                isMatch: () => /^(?:\/formats\-technology\/fused\-silica\-gc\-columns|\/formats\-technology\/gas\-chromatography|\/formats\-technology\/metal\-gc\-columns|\/gas\-chromatography\/formats|\/gas\-chromatography\/formats\-technology|\/techniques\/gc|\/techniques\/gc\-application\-specific|\/techniques\/gc\-high\-temperature|\/techniques\/gc\-improved\-performance|\/techniques\/gc\-standard)$/.test(window.location.pathname),
                interaction: {
                    name: "GC Techniques & Formats"
                }
            },
            {
                name: "Industry Application Page",
                isMatch: () => /^\/industries/.test(window.location.pathname),
                interaction: {
                    name: "Industry Application Page"
                }
            },
            {
                name: "LC Accessories",
                isMatch: () => /^(?:\/products\/phenova\-reference\-standards|\/products\/securitylink\-lc\-fittings|\/products\/securitycap\-solvent\-safety\-products|\/products\/securitylink\-lc\-fittings|\/products\/verex\-vials|\/products\/securitylink\-lc\-fittings)$/.test(window.location.pathname),
                interaction: {
                    name: "LC Accessories"
                }
            },
            {
                name: "LC Column Brands",
                isMatch: () => /^(?:\/products\/aqua\-hplc\-column|\/products\/axia\-preparative\-lc\-column|\/products\/biosep\-gfc\-column|\/products\/biozenlc\-hplc\-column|\/products\/bondclone\-hplc\-column|\/products\/capcellpak\-hplc\-column|\/products\/chiral\-cd\-ph\-chiral\-lc\-column|\/products\/chirex\-chiral\-lc\-column|\/products\/chrom\-clone\-hplc\-column|\/products\/chromolith\-hplc\-column|\/products\/claricep\-flash\-lc\-column|\/products\/clarity\-hplc\-column|\/products\/columbus\-hplc\-column|\/products\/cosmosil\-hplc\-column|\/products\/envirosep\-hplc\-column|\/products\/gemini\-hplc\-column|\/products\/hamilton\-hplc\-column|\/products\/hypercarb\-hplc\-column|\/products\/hyperclone\-hplc\-column|\/products\/ib\-sil\-hplc\-column|\/products\/inertclone\-hplc\-column|\/products\/jupiter\-hplc\-column|\/products\/kinetex\-hplc\-column|\/products\/lichrosorb\-hplc\-column|\/products\/lichrospher\-hplc\-column|\/products\/luna\-hplc\-colum|\/products\/luna\ omega\-hplc\-column|\/products\/lux\-chiral\-lc\-column|\/products\/nucleosil\-hplc\-column|\/products\/onyx\-hplc\-column|\/products\/phenosphere\-hplc\-column|\/products\/phenosphere\-next\-hplc\-column|\/products\/polymerx\-hplc\-column|\/products\/polysep\-gfc\-p\-hplc\-column|\/products\/prodigy\-hplc\-column|\/products\/shodex\-hplc\-column|\/products\/sphereclone\-hplc\-column|\/products\/spherex\-hplc\-column|\/products\/synergi\-hplc\-column|\/products\/ultracarb\-hplc\-column|\/products\/ultremex\-hplc\-column|\/products\/ultron\-es\-chiral\-chiral\-lc\-column|\/products\/yarra\-gfc\-columns)$/.test(window.location.pathname),
                interaction: {
                    name: "LC Column Brands"
                }
            },
            {
                name: "LC Knowledge Center",
                isMatch: () => /^\/knowledge\-center\/hplc\-knowledge\-center$/.test(window.location.pathname),
                interaction: {
                    name: "LC Knowledge Center"
                }
            },
            {
                name: "LC Techniques & Formats",
                isMatch: () => /^(?:\/lc\-formats\-analytical|\/lc\-formats\-micro|\/lc\-formats\-uhplc\-columns|\/liquid\-chromatography\/formats\-techniques|\/techniques\/guard\-column\-hplc|\/techniques\/hplc|\/techniques\/hplc\-chiral|\/techniques\/hplc\-chiralphe|\/techniques\/hplc\-column|\/techniques\/hplc\-gfc|\/techniques\/hplc\-gpc|\/techniques\/hplc\-guard\-column|\/techniques\/hplc\-hilic\-chromatography|\/techniques\/hplc\-ion\-exchange|\/techniques\/hplc\-ion\-exclusion|\/techniques\/hplc\-normal\-phase|\/techniques\/hplc\-reversed\-phase|\/techniques\/hplc\-sec|\/techniques\/lc|\/techniques\/preparative\-lc)$/.test(window.location.pathname),
                interaction: {
                    name: "LC Techniques & Formats"
                }
            },
            {
                name: "Order Confirmation - Other Countries",
                isMatch: () => /^\/checkout\/confirmation/.test(window.location.pathname),
                interaction: {
                    name: "Order Confirmation - Other Countries"
                }
            },
            {
                name: "Order Confirmation - US\/Canada",
                isMatch: () => /^\/us\/en\/receipt\.html/.test(window.location.pathname),
                interaction: {
                    name: "Order Confirmation - US/Canada"
                }
            },
            {
                name: "Part Pages",
                isMatch: () => /^\/part/.test(window.location.pathname),
                interaction: {
                    name: "Part Pages"
                }
            },
            {
                name: "Phenoacademy",
                isMatch: () => /^\/phenoacademy$/.test(window.location.pathname),
                interaction: {
                    name: "Phenoacademy"
                }
            },
            {
                name: "Quick Order",
                isMatch: () => /^\/quick\-order$/.test(window.location.pathname),
                interaction: {
                    name: "Quick Order"
                }
            },
            {
                name: "Registration Complete Page",
                isMatch: () => /^\/registrationComplete$/.test(window.location.pathname),
                interaction: {
                    name: "Registration Complete Page"
                }
            },
            {
                name: "Registration Page",
                isMatch: () => /^\/registration$/.test(window.location.pathname),
                interaction: {
                    name: "Registration Page"
                }
            },
            {
                name: "Request a Quote - General Form",
                isMatch: () => /\/discover\.phenomenex\.com\/online\-quote\-req\-en/.test(window.location.href),
                interaction: {
                    name: "Request a Quote - General Form"
                }
            },
            {
                name: "Request a Quote - Quote Cart",
                isMatch: () => /\/stage\-shop\.phenomenex\.com\/us\/en\/quote\-cart\.html/.test(window.location.href),
                interaction: {
                    name: "Request a Quote - Quote Cart"
                }
            },
            {
                name: "Sample Prep Accessories",
                isMatch: () => /^(?:\/products\/sample\-prep\-96\-collection\-plates|\/products\/sample\-prep\-96\-well\-plate\-vacuum\-manifold|\/products\/presston\-positive\-pressure\-manifold|\/products\/sample\-prep\-sealing\-mats|\/products\/sample\-prep\-spe\-tube\-vacuum\-manifold)$/.test(window.location.pathname),
                interaction: {
                    name: "Sample Prep Accessories"
                }
            },
            {
                name: "Sample Prep Brands",
                isMatch: () => /^(?:\/products\/beta\-gone\-beta\-glucuronidase\-removal\-products|\/products\/biozenspe\-sample\-preparation\-products|\/products\/clarityspe\-sample\-preparation\-products|\/products\/impact\-protein\-precipitation\-plates|\/products\/novum\-supported\-liquid\-extraction\-plates|\/products\/phenex\-syringe\-filters|\/products\/phree\-phospholipid\-removal\-products|\/products\/roq\-quechers\-kit|\/products\/strata\-solid\-phase\-extraction\-products|\/products\/strata\-x\-pro\-solid\-phase\-extraction\-products|\/products\/strata\-x\-solid\-phase\-extraction\-products|\/products\/verex\-filter\-vials)$/.test(window.location.pathname),
                interaction: {
                    name: "Sample Prep Brands"
                }
            },
            {
                name: "Sample Prep Knowledge Center",
                isMatch: () => /^\/knowledge\-center\/spe\-knowledge\-center$/.test(window.location.pathname),
                interaction: {
                    name: "Sample Prep Knowledge Center"
                }
            },
            {
                name: "Sample Prep Techniques & Formats",
                isMatch: () => /^\/(?:formats-technology\/(?:bulk-spe|sample-preparation-kits)|sample-preparation\/(?:formats(?:-technology)?|techniques)|sample-preparations\/formats|sp-formats?-(?:96-well|online-cartridges|sle|tubes?)|techniques\/(?:phospholipid-removal|sample-preparation|solid-phase-extraction))\/?$/.test(window.location.pathname),
                interaction: {
                    name: "Sample Prep Techniques & Formats"
                }
            },
            {
                name: "Seminars",
                isMatch: () => /^(?:\/Chromatography\-Training\-Courses|\/tools|\/application\-compound\-search|\/documents\/library)$/.test(window.location.pathname),
                interaction: {
                    name: "Seminars"
                }
            },
            {
                name: "Shopping Cart - Other Countries",
                isMatch: () => /^\/cart$/.test(window.location.pathname),
                interaction: {
                    name: "Shopping Cart - Other Countries"
                }
            },
            {
                name: "Search Results",
                isMatch: () => waitForElement("span.font-27").then(() => { return !SalesforceInteractions.cashDom("span.font-27")[0]?.textContent.includes(" 0 Results ") }),
                interaction: {
                    name: "Search Results"
                }
            },
            {
                name: "No Search Results",
                isMatch: () => waitForElement("span.font-27").then(() => { return SalesforceInteractions.cashDom("span.font-27")[0]?.textContent.includes(" 0 Results ") }),
                interaction: {
                    name: "No Search Results"
                }
            },
            {
                name: "Shopping Cart - US\/Canada",
                isMatch: () => waitForElement(".col-span-2.pl-4.lg\\:col-span-1").then(() => { return /^\/us\/en\/cart\.html$/.test(window.location.pathname) }),
                interaction: {
                    name: "Shopping Cart - US/Canada"
                }
            },
            {
                name: "Sign In",
                isMatch: () => /^\/login$/.test(window.location.pathname),
                interaction: {
                    name: "Sign In"
                }
            },
            {
                name: "Technical Support",
                isMatch: () => /^\/technical\-support$/.test(window.location.pathname),
                interaction: {
                    name: "Technical Support"
                }
            },
            {
                name: "Webinars - On Demand",
                isMatch: () => /^\/webinars$/.test(window.location.pathname),
                interaction: {
                    name: "Webinars - On Demand"
                }
            },
            {
                name: "Webinars - Upcoming",
                isMatch: () => /^\/upcoming\-webinars$/.test(window.location.pathname),
                interaction: {
                    name: "Webinars - Upcoming"
                }
            }
        ]
    };

    const originalDataLayerPush = window.dataLayer.push;

    window.dataLayer.push = function () {

        originalDataLayerPush.apply(this, arguments);

        for (let i = 0; i < arguments.length; i++) {
            const eventData = arguments[i];

            if (eventData && eventData.event === "add_to_cart" && eventData.dataLayer && eventData.dataLayer.items && eventData.dataLayer.items.length > 0) {
                const item = eventData.dataLayer.items[0];

                const lineItem = {
                    catalogObjectType: "Product",
                    catalogObjectId: item.item_id || item.item_name,
                    price: item.price,
                    quantity: 1
                };
                const currency = eventData.dataLayer.currency || "USD";

                waitForSficSdkReady().then(() => {
                    SalesforceInteractions.sendEvent({
                        interaction: {
                            name: SalesforceInteractions.CartInteractionName.AddToCart,
                            lineItem: lineItem,
                            currency: currency
                        },
                    });
                    console.log("Salesforce Interactions: AddToCart event sent via dataLayer.push override (Success):", { lineItem, currency });
                    setCookie("lastAddToCartProduct", lineItem.catalogObjectId, 365, _sf.cookieDomain);
                }).catch(error => {

                });
            }

            if (eventData && eventData.event === "add_to_quote" && eventData.dataLayer && eventData.dataLayer.items && eventData.dataLayer.items.length > 0) {
                const item = eventData.dataLayer.items[0]; 

                const catalogObject = {
                    type: "Product", 
                    id: item.item_name || item.item_id 
                };

                const currency = eventData.dataLayer.currency || "USD";

                waitForSficSdkReady().then(() => {
                    SalesforceInteractions.sendEvent({
                        interaction: {

                            name: SalesforceInteractions.CatalogObjectInteractionName.QuickViewCatalogObject,
                            catalogObject: catalogObject,

                        },
                    });
                    console.log("Salesforce Interactions: AddToQuote event sent via dataLayer.push override (Success):", { catalogObject, currency });
                    setCookie("lastAddToQuoteProduct", catalogObject.id, 365, _sf.cookieDomain); 
                }).catch(error => {

                });
            }
        }
    };

    const handleSPAPageChange = () => {
        let currentPath = window.location.pathname;
        const urlChangeInterval = setInterval(() => {
            const newPath = window.location.pathname;
            if (currentPath !== newPath) {
                currentPath = newPath;

                if (typeof window._sf.reinit === 'function') {
                    window._sf.reinit();
                    console.log("Salesforce Interactions: _sf.reinit() called for SPA navigation to:", currentPath);
                } else {
                    console.warn("Salesforce Interactions: _sf.reinit() not available. Cannot force re-evaluation for SPA navigation.");
                }

                setupAllButtonListeners();
            }
        }, 200); 
    };

    handleSPAPageChange();
    _sf.initSitemap(sitemapConfig);

    const setupAllButtonListeners = () => {
        const addToCartSelector = "app-add-to-cart button.btn-blue";
        const addToQuoteSelector = "app-add-to-quote button.btn-primary"; 

        const addToCartButtons = document.querySelectorAll(addToCartSelector);
        if (addToCartButtons.length > 0) {
            addToCartButtons.forEach(button => {
                if (!button.dataset.sficListenerAttached) {
                    button.addEventListener("click", (event) => {
                        console.log("SFIC Listener: Add To Cart button clicked in capture phase. (DataLayer override will handle sending event).");

                    }, { capture: true });
                    button.dataset.sficListenerAttached = 'true';
                    console.log(`SFIC: Custom Add To Cart listener attached to "${addToCartSelector}" instance.`);
                }
            });
        } else {

        }

        const addToQuoteButtons = document.querySelectorAll(addToQuoteSelector);
        if (addToQuoteButtons.length > 0) {
            addToQuoteButtons.forEach(button => {
                if (!button.dataset.sficListenerAttached) {
                    button.addEventListener("click", (event) => {
                        console.log("SFIC Listener: Add To Quote button clicked in capture phase. (DataLayer override will handle sending event).");

                    }, { capture: true });
                    button.dataset.sficListenerAttached = 'true';
                    console.log(`SFIC: Custom Add To Quote listener attached to "${addToQuoteSelector}" instance.`);
                }
            });
        } else {

        }
    };

    const observeDomForDynamicButtons = () => {
        const targetNode = document.body; 
        const config = { childList: true, subtree: true };

        const callback = (mutationsList, observer) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    if (mutation.addedNodes.length > 0) {

                        setupAllButtonListeners();
                    }
                }
            }
        };

        const observer = new MutationObserver(callback);
        observer.observe(targetNode, config);

    };

    setupAllButtonListeners(); 
    observeDomForDynamicButtons(); 

}).catch(error => { 

});