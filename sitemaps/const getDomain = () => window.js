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

function waitForElement(selector, timeout = 5000, interval = 100) {
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

window._sf = SalesforceInteractions;

_sf.init({
    cookieDomain: "stage10.phenomenex.com",

}).then(() => {
    const sitemapConfig = {
        global: {},
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
            },
            {
                name: "Dashboard Quotes Page",
                isMatch: () => /^\/dashboard\/quotes$/.test(window.location.pathname),
                interaction: {
                    name: "Dashboard Quotes Page"
                }
            },
            {
                name: "FAQ",
                isMatch: () => /^\/faq$/.test(window.location.pathname),
                interaction: {
                    name: "FAQ"
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
                isMatch: () => /^\/industries$/.test(window.location.pathname),
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
                isMatch: () => /^\/checkout\/confirmation$/.test(window.location.pathname),
                interaction: {
                    name: "Order Confirmation - Other Countries"
                }
            },
            {
                name: "Order Confirmation - US\/Canada",
                isMatch: () => /^\/us\/en\/receipt\.html$/.test(window.location.pathname),
                interaction: {
                    name: "Order Confirmation - US/Canada"
                }
            },
            {
                name: "Part Pages",
                isMatch: () => /^\/part$/.test(window.location.pathname),
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
                isMatch: () => /^\/discover\.phenomenex\.com\/online\-quote\-req\-en$/.test(window.location.pathname),
                interaction: {
                    name: "Request a Quote - General Form"
                }
            },
            {
                name: "Request a Quote - Quote Cart",
                isMatch: () => /^\/shop\.phenomenex\.com\/us\/en\/quote\-cart\.html$/.test(window.location.pathname),
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
                isMatch: () => /^(?:\/formats\-technology\/bulk\-spe|\/formats\-technology\/sample\-preparation\-kits|\/sample\-preparation\/formats|\/sample\-preparation\/formats\-technology|\/sample\-preparation\/techniques|\/sample\-preparations\/formats|\/sp\-formats\-96\-well|\/sp\-formats\-online\-cartridges|\/sp\-formats\-sle|\/sp\-formats\-tube|\/sp\-formats\-tubes|\/techniques\/phospholipid\-removal|\/techniques\/sample\-preparation|\/techniques\/solid\-phase\-extraction)$/.test(window.location.pathname),
                interaction: {
                    name: "Sample Prep Techniques & Formats"
                }
            },
            {
                name: "Seminars",
                isMatch: () => /^(?:\/Chromatography\-Training\-Courses|\/tools|\/application\-compound\-search|\/applications|\/documents\/library)$/.test(window.location.pathname),
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
                name: "Shopping Cart - US\/Canada",
                isMatch: () => /^\/us\/en\/cart\.html$/.test(window.location.pathname),
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
        ],
        pageTypeDefault: {
            name: "default",
            interaction: {
                name: "Default Page"
            }
        }
    };

    const handleSPAPageChange = () => {
        let currentPath = window.location.pathname;
        const urlChangeInterval = setInterval(() => {
            if (currentPath !== window.location.pathname) {
                currentPath = window.location.pathname;
                SalesforceInteractions.client.trackPageView({
                    is_spa: true
                });
                console.log("Salesforce Interactions: SPA page view tracked for:", currentPath);

                setupAddToCartListener(); 
            }
        }, 500);
    };

    handleSPAPageChange();
    _sf.initSitemap(sitemapConfig);

    function sendAddToCartSFICEvent() {
        const dataLayer = window.dataLayer || [];
        const lastAddToCartEvent = dataLayer.slice().reverse().find(event => event.event === "add_to_cart");

        if (lastAddToCartEvent && lastAddToCartEvent.dataLayer && lastAddToCartEvent.dataLayer.items && lastAddToCartEvent.dataLayer.items.length > 0) {
            const item = lastAddToCartEvent.dataLayer.items[0];

            const lineItem = {
                catalogObjectType: "Product",
                catalogObjectId: item.item_name || item.item_id, 
                price: item.price,
                quantity: 1 
            };

            const currency = lastAddToCartEvent.dataLayer.currency || "USD";

            SalesforceInteractions.sendEvent({
                interaction: {
                    name: SalesforceInteractions.CartInteractionName.AddToCart,
                    lineItem: lineItem,
                    currency: currency 
                },
            });
            console.log("Salesforce Interactions: AddToCart event sent via direct listener:", { lineItem, currency });

            setCookie("lastAddToCartProduct", lineItem.catalogObjectId, 365, _sf.cookieDomain);
        } else {
            console.warn("Salesforce Interactions: AddToCart button clicked, but dataLayer 'add_to_cart' event or item data not found synchronously. Check dataLayer.push timing.");
        }
    }

    const setupAddToCartListener = () => {

        const selector = "app-add-to-cart button.btn-blue";

        waitForElement(selector).then(addToCartButton => {

            if (!addToCartButton.dataset.sficListenerAttached) {
                addToCartButton.addEventListener("click", (event) => {
                    console.log("SFIC Listener: Add To Cart button clicked in capture phase. Attempting to send event.");

                    sendAddToCartSFICEvent();
                }, { capture: true }); 
                addToCartButton.dataset.sficListenerAttached = 'true'; 
                console.log(`SFIC: Custom Add To Cart listener attached to "${selector}" in capture phase.`);
            } else {
                console.log(`SFIC: Listener already attached to "${selector}" instance.`);
            }
        }).catch(error => {
            console.error("SFIC Error attaching Add To Cart listener:", error.message);
        });
    };

    setupAddToCartListener(); 

});