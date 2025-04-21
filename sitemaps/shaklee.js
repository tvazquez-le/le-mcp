const processedCampaigns = [];

const getDomain = () => {
    let currentDomain = window.location.hostname;
    let _cookieDomain;
    if (currentDomain === 'us.shaklee.com') {
        _cookieDomain = 'shaklee.com';
    }
    return _cookieDomain; 
};

const isMobile = () => {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
};

const StgCheckout = () => {
    let currentDomain = window.location.hostname;
    if (currentDomain === 'us.shakleeuat.com')
        return '/site/testminal';
    else
        return '';
};

const getRating = () => {
    try {
        const ratingDiv = document.querySelector('.rating-stars.js-ratingCalc');
        const ratingData = JSON.parse(ratingDiv.getAttribute('data-rating').replace(/&quot;/g, '"'));
        return ratingData.rating;    
    } catch (e) {
        return '0';
    }        
};

const getRatingUrl= (rating) => {
    let retUrl = 'https://image.mail.shaklee.com/lib/fe3c157075640474771477/m/1/1e54a534-4772-4bf5-8cfb-08f4b2f36625.png';
    try {
        // blank image if the rating is less than 3
        if (rating == '0')
            retUrl = 'https://image.mail.shaklee.com/lib/fe3c157075640474771477/m/1/1e54a534-4772-4bf5-8cfb-08f4b2f36625.png';
        else if (rating == '.5')
            retUrl = 'https://image.mail.shaklee.com/lib/fe3c157075640474771477/m/1/1e54a534-4772-4bf5-8cfb-08f4b2f36625.png';
        else if (rating == '1')
            retUrl = 'https://image.mail.shaklee.com/lib/fe3c157075640474771477/m/1/1e54a534-4772-4bf5-8cfb-08f4b2f36625.png';
        else if (rating == '1.5')
            retUrl = 'https://image.mail.shaklee.com/lib/fe3c157075640474771477/m/1/1e54a534-4772-4bf5-8cfb-08f4b2f36625.png';
        else if (rating == '2')
            retUrl = 'https://image.mail.shaklee.com/lib/fe3c157075640474771477/m/1/1e54a534-4772-4bf5-8cfb-08f4b2f36625.png';
        else if (rating == '2.5')
            retUrl = 'https://image.mail.shaklee.com/lib/fe3c157075640474771477/m/1/1e54a534-4772-4bf5-8cfb-08f4b2f36625.png';
        else if (rating == '3')
            retUrl = 'https://image.mail.shaklee.com/lib/fe3c157075640474771477/m/1/6ede9b6e-e86e-468b-b080-153f1855a688.png';
        else if (rating == '3.5')
            retUrl = 'https://image.mail.shaklee.com/lib/fe3c157075640474771477/m/1/2f3e6de9-0044-4e5f-b9c9-e85dd7d59895.png';
        else if (rating == '4')
            retUrl = 'https://image.mail.shaklee.com/lib/fe3c157075640474771477/m/1/e9ebe381-bcc6-48fe-b2f8-03901a4d383a.png';
        else if (rating == '4.5')
            retUrl = 'https://image.mail.shaklee.com/lib/fe3c157075640474771477/m/1/4be1080d-4081-4eb3-9073-42a32e4b1a59.png';
        else if (rating == '5')
            retUrl = 'https://image.mail.shaklee.com/lib/fe3c157075640474771477/m/1/96a3274a-5cad-41cd-902d-0fbcd5880387.png';
            
    } catch (e) {}   
    return retUrl;
};

const IsES = () => {
    try {
        let locale = getLocaleFromPathname(window.location.pathname);
        //const locale = SalesforceInteractions.cashDom(".lang-selector-btn-group")[0].innerText;
        if (locale) {
            if (locale.toUpperCase() === "ES_US")
                return true;
            else
                return false;
        }
    } catch (e) {
        return false;
    }
};

const processedEvents = [];
if (!Array.prototype.findLast) {
    Array.prototype.findLast = function(callback) {
        if (this == null) {
            throw new TypeError('this is null or not defined');
        }
        const arr = Object(this);
        const len = arr.length >>> 0;
        for (let i = len - 1; i >= 0; i--) {
            if (callback(arr[i], i, arr)) {
                return arr[i];
            }
        }
        return undefined;
    };
}

const getPageType = () => {
    const bodyClassList = document.body.classList;
    if (bodyClassList.contains("page-homepage")) {
        return "Home";
    } else if (bodyClassList[0].includes("page-about-us")) {
        return "About Us";
    } else if (bodyClassList[0].includes("CategoryPage")) {
        return "Category";
    } else if (bodyClassList.contains("page-shopLandingPage")) {
        return "Shop";
    } else if (bodyClassList.contains("page-productDetails")) {
        return "PDP";
    } else if (bodyClassList.contains("page-search")) {
        return "Search";
    } else if (bodyClassList.contains("page-searchEmpty")) {
        return "Null Search";
    } else if (bodyClassList.contains("page-cartPage")) {
        return "Cart";
    } else if (window.location.pathname === StgCheckout() + "/checkout/multi/delivery-address/add") {
        return "Checkout Page Delivery Address Add Step";
    } else if (window.location.pathname === StgCheckout() + "/checkout/multi/personal-information/add") {
        return "Checkout Page Guest Account Info Step";
    } else if (window.location.pathname === StgCheckout() + "/checkout/multi/delivery-method/choose") {
        return "Checkout Page Delivery Method Choose Step";
    } else if (window.location.pathname === StgCheckout() + "/checkout/multi/payment-method/add") {
        return "Checkout Page Payment Method Add Step";
    } else if (window.location.pathname === StgCheckout() + "/checkout/multi/health-advisor/choose") {
        return "Checkout Page Your Ambassador Step";
    } else if (window.location.pathname === StgCheckout() + "/checkout/multi/summary/view") {
        return "Checkout Page Final Review Step";
    } else if (bodyClassList.contains("page-orderConfirmationPage")) {
        return "Checkout Page Order Confirm Step";
    } else if (bodyClassList.contains("page-loyaltyrewards")) {
        return "Loyalty Rewards";
    } else if (bodyClassList.contains("page-memberJoinOptions")) {
        return "Become a Member";
    } else if (bodyClassList.contains("page-CustomizeWellnessKitStepPage")) {
        return "Ready Set Wellness Kit Landing";
    } else if (bodyClassList.contains("page-RSWChoosePlansPage")) {
        return "Choose Your Plan Landing";
    } else if (bodyClassList.contains("page-account")) {
        return "My Account Landing";
    } else if (bodyClassList.contains("page-autoship")) {
        return "My Account Manage Autoship";
    } else if (bodyClassList.contains("page-orders")) {
        return "My Account Orders";
    } else if (bodyClassList.contains("page-my-rewards")) {
        return "My Account Rewards";
    } else if (bodyClassList.contains("page-distributor-benefits")) {
        return "Become an Ambassador";
    } else if (bodyClassList.contains("page-PWSCreatePage")) {
        return "Ambassador Subcribe Storefront";
    }
    return "Default";
};
//ga stats
const triggerGoogleAnalyticsAsynch = (context) => {
    return new Promise((resolve, reject) => {
        let maxChecks = 300;
        let currentChecks = 0;
        let tagCheckInterval = window.setInterval(function() {
            if (currentChecks === maxChecks) {
                window.clearInterval(tagCheckInterval);
                reject(new Error("No google tag, waited max amount of time"));
            }
            currentChecks++;
            if (window.ga !== undefined) {
                window.clearInterval(tagCheckInterval);
                resolve(triggerGoogleAnalytics(context));
            }
        }, 50);
    });
};

const triggerGoogleAnalytics = (context) => {
    var isCampaignVars = ["MCP", context.campaignId, context.experienceId, context.isControl, context.statType];
    var isCampaignVarsString = "[" + isCampaignVars.toString() + "]";

    if (isCampaignVarsString && !processedCampaigns.includes(isCampaignVarsString)) {
        processedCampaigns.push(isCampaignVarsString);
        window.ga("send", {
            hitType: "event",
            eventCategory: "MCP",
            eventAction: isCampaignVarsString,
            nonInteraction: true
        });
        
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'MCP Campaign Stat',
            'campaign': context.campaignName,
            'experience': context.experienceId,
            'stat-type': context.statType,
            'control': context.isControl
        });           
    }
}

document.addEventListener(SalesforceInteractions.mcis.CustomEvents.OnStatSend, (event) => {

    var dataContext = {};
    dataContext.statType = event.detail.campaignStat.stat;
    dataContext.campaignName = event.detail.campaignResponse.campaignName;
    dataContext.isControl = event.detail.campaignStat.control;
    dataContext.campaignId = event.detail.campaignResponse.campaignId + ":" + event.detail.campaignResponse.campaignName;
    dataContext.experienceId = event.detail.campaignResponse.experienceId + ":" + event.detail.campaignResponse.experienceName;

    triggerGoogleAnalyticsAsynch(dataContext);

});


SalesforceInteractions.init({
    cookieDomain: getDomain(),
}).then(() => {
    console.log("v 3.29");

    //**** datalayer.push handler ****//
    const dlPushHandler = {
        apply: function(target, thisArg, args) {
            try {
                //console.log(args[0].event);
                if (args[0].event && args[0].event === "add-to-cart") {
                    let lineItem = {
                        catalogObjectType: "Product",
                        catalogObjectId: args[0].productId,
                        price: parseFloat(args[0].ecommerce.add.products[0].price) / args[0].ecommerce.add.products[0].quantity,
                        quantity: args[0].ecommerce.add.products[0].quantity
                    };
                    SalesforceInteractions.sendEvent({
                        interaction: {
                            name: SalesforceInteractions.CartInteractionName.AddToCart,
                            lineItem: lineItem
                        }
                    });
                }
                else if (args[0].event && args[0].event === "product-detail") {  
                    try {
                        if (args[0].location === "Quick Shop") {
                            let pid = args[0].ecommerce.detail.products[0].id;
                            SalesforceInteractions.sendEvent({
                                interaction: {
                                    name: SalesforceInteractions.CatalogObjectInteractionName.QuickViewCatalogObject,
                                    catalogObject: {
                                        type: "Product",
                                        id: pid
                                    }
                                }
                            }); 
                        }
                    } catch (e) {} 
                }
                else if (args[0].event && args[0].event === "navigation") {                   
                    try {
                        if (args[0].user.id) {
                            SalesforceInteractions.sendEvent({
                                user: {
                                    identities: {
                                        shakleeContactId: args[0].user.id
                                    },
                                    attributes: {
                                        priceTier: args[0].user.priceTier
                                    }
                                },                                 
                                interaction: {
                                    name: "Set Shaklee Contact ID"
                                }                                
                            });                            
                        } 
                        if (args[0].user.type) {
                            SalesforceInteractions.sendEvent({
                                user: {
                                    attributes: {
                                        dlAccountType: args[0].user.type
                                    }
                                },                                 
                                interaction: {
                                    name: "Set Shaklee Account Type"
                                }                                
                            });                            
                        }
                        if (args[0].page.category) {
                            SalesforceInteractions.sendEvent({
                                user: {
                                    attributes: {
                                        lastCategory: args[0].page.category,
                                        lastCategoryUrl: window.location.href.split('?')[0]
                                    }
                                },                                 
                                interaction: {
                                    name: "Set Last Category"
                                }                                
                            });                            
                        } 
                            SalesforceInteractions.reinit();            
                    } catch (e) {}                    ;                    
                }  
                else if (args[0].event && args[0].event === "search-results") {                   
                    try {
                        if (args[0]['search-term']) {
                            SalesforceInteractions.sendEvent({
                                user: {
                                    attributes: {
                                        lastSearch: args[0]['search-term']
                                    }  
                                },                                                                
                                interaction: {
                                    name: "Set Search Term"                    
                                }                                
                            });                            
                        } 
                    } catch (e) {}                    
                }    
                else if (args[0].event && args[0].event === "product-impressions") {                   
                    try {
                        if (args[0].list === "Search Results") {
                            SalesforceInteractions.sendEvent({
                                user: {
                                    attributes: {
                                        searchResults: JSON.stringify(args[0].ecommerce.impressions.slice(0, 5))
                                    }
                                },                                 
                                interaction: {
                                    name: "Set Seach Results"
                                }                                
                            }); 
                        }
                    } catch (e) {}                    
                }      
                else if (args[0].event && args[0].event === "gtm.load11111") {
                    try {
                        if (SalesforceInteractions.cashDom(".ship-data-section").length > 0 && getPageType() === "PDP") {
                            // set stock to 0
                            let pid = window.location.pathname.split("/").pop();
                            SalesforceInteractions.sendEvent({
                                interaction: {
                                    name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                                    catalogObject: {
                                        type: "Product",
                                        id: pid,
                                        attributes: {
                                            inventoryCount: 0
                                        }
                                    },
                                },
                            });                            
                        }
                    } catch (e) {}                    
                }                
                else if (args[0].event && args[0].event === "ecommEvent" && args[0].event_name === "begin_checkout") {
                    SalesforceInteractions.sendEvent({
                        interaction: {
                            name: "Begin Checkout"     
                        }
                    });

                }
                else if (args[0].event && args[0].event === "ecommEvent" && args[0].event_name === "add_shipping_info") {
                    SalesforceInteractions.sendEvent({
                        interaction: {
                            name: "Checkout Add Shipping Info"
                        }
                    });

                }
                else if (args[0].event && args[0].event === "ecommEvent" && args[0].event_name === "add_payment_info") {
                    SalesforceInteractions.sendEvent({
                        interaction: {
                            name: "Checkout Add Payment Info"
                        }
                    });

                }
            } catch (e) {}
            return Reflect.apply(target, thisArg, args);
        }
    };
    //**** end datalayer.push handler ****//
    
    function getLocaleFromPathname(pathname) {
        try {
            const pathSegments = pathname.split('/');
            return pathSegments[1] || '';            
        } catch (e) {
            return '';
        }
    }    
    
    function getCookieValue(name) {
        const cookieArray = document.cookie.split('; ');
        for (let cookie of cookieArray) {
            const [cookieName, cookieValue] = cookie.split('=');
            if (cookieName === name) {
                return decodeURIComponent(cookieValue);
            }
        }
        return null; // Return null if the cookie is not found
    }    

    const sitemapConfig = {
        global: {
            onActionEvent: (actionEvent) => {
                actionEvent.user = actionEvent.user || {};
                actionEvent.user.attributes = actionEvent.user.attributes || {};
                actionEvent.user.identities = actionEvent.user.identities || {};                      
                
                if (window.dataLayer) {
                    let dataLayerEvent = window.dataLayer.filter(e => e.event === "navigation")[0];
                    if (dataLayerEvent) {
                        if (dataLayerEvent.user.id)
                            actionEvent.user.identities.shakleeContactId = dataLayerEvent.user.id;
                        
                        if(dataLayerEvent.user.priceTier){
                            actionEvent.user.attributes.priceTier = dataLayerEvent.user.priceTier;
                        }
                        
                        if(dataLayerEvent.user.type){
                            actionEvent.user.attributes.shakleeAcountType = dataLayerEvent.user.type;
                        }
                    } 
                }
                try {
                    let locale = getLocaleFromPathname(window.location.pathname);
                    if (locale) {
                        actionEvent.user.attributes.locale = locale;
                    }
                } catch (e) {}

                if (window.location.pathname.includes("checkout")) {
                    actionEvent.user.attributes.mcpEvent = "Begin Checkout";
                }
                if (getPageType() === "Checkout Page Order Confirm Step") {
                    actionEvent.user.attributes.mcpEvent = "Purchase";
                }

                const ckId = SalesforceInteractions.mcis.getParameterByName("ckid", window.location.href);
                if (ckId)
                    actionEvent.user.identities.ckid = ckId;
        
                if (getPageType() === "PDP") {
                    let pId = window.location.pathname.split("/").pop();
                    if (pId) {
                        actionEvent.user.attributes.lastPDP = pId;
                        //actionEvent.user.attributes.mcpEvent = "PDP View";
                    }
                }

                if (getPageType() === "Search") {
                    //actionEvent.user.attributes.mcpEvent = "Search";
                }

                if (getPageType() === "Null Search") {
                    //actionEvent.user.attributes.mcpEvent = "Null Search";
                }

                if (window.location.pathname.includes("checkout")) {
                    const checkForCheckoutEventsInDataLayer = setInterval(() => {
                        if (window.dataLayer) {
                            let checkoutStep = window.dataLayer.filter(x => x.event == 'checkout-step')[0];
                            if (checkoutStep && !processedEvents.includes(checkoutStep)) {
                                processedEvents.push(checkoutStep);
                                let step = checkoutStep.ecommerce.checkout.actionField.step;
                                let actionName = "Checkout Step - " + step;
                                SalesforceInteractions.sendEvent({
                                    interaction: {
                                        name: actionName
                                    }
                                });

                            }

                        }
                    }, 500);
                }
                
                if(isMobile()) {
                    actionEvent.user.attributes.deviceType = "mobile";
                } else {
                    actionEvent.user.attributes.deviceType = "desktop";
                }

                console.log("evg: ", actionEvent);

                return actionEvent;
            },
            contentZones: [
                { name: "global_popup" },     
                { name: "global_exit_intent"},
                { name: "global_skinny_banner", selector: '.promo-header-nav'}
            ],             
        },
        pageTypes: [

            {
                name: "home",
                isMatch: () => new Promise((resolve, reject) => {
                    return SalesforceInteractions.DisplayUtils.pageElementLoaded(
                        "body",
                        "html",
                    ).then(() => {
                        if (getPageType() === "Home") {
                            resolve(true);
                        } else {
                            resolve(false);
                        }
                    });
                }),
                interaction: {
                    name: "Home"
                },
                contentZones: [
                    { name: "product_recs2", selector: '.hp-bluecore-products-2'},
                    { name: "product_recs1", selector: '.hp-bluecore-products-1'},
                    { name: "home_placeholder"}
                ]
                
            },
            {
                name: "category",
                isMatch: () => new Promise((resolve, reject) => {
                    return SalesforceInteractions.DisplayUtils.pageElementLoaded(
                        "body",
                        "html",
                    ).then(() => {
                        if (getPageType() === "Category") {
                            resolve(true);
                        } else {
                            resolve(false);
                        }
                    });
                }),
                interaction: {
                    name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                    catalogObject: {
                        type: "Category",
                        id: SalesforceInteractions.DisplayUtils.pageElementLoaded(
                            ".breadcrumb-section .breadcrumb li",
                            "html",
                        ).then((ele) => {
                            return SalesforceInteractions.resolvers.buildCategoryId(
                                ".breadcrumb-section .breadcrumb li",
                                1,
                                null,
                                (categoryId) => categoryId.toUpperCase(),
                            );
                        }),
                        url: window.location.href.split('?')[0]
                    }
                }
            },
            {
                name: "shop",
                isMatch: () => new Promise((resolve, reject) => {
                    return SalesforceInteractions.DisplayUtils.pageElementLoaded(
                        "body",
                        "html",
                    ).then(() => {
                        if (getPageType() === "Shop") {
                            resolve(true);
                        } else {
                            resolve(false);
                        }
                    });
                }),
                interaction: {
                    name: "Shop"
                }
            },
            {
                name: "pdp",
                isMatch: () => new Promise((resolve, reject) => {
                    return SalesforceInteractions.DisplayUtils.pageElementLoaded(
                        ".pdp-add-cust-btn",
                        "html",
                    ).then(() => {
                        if (getPageType() === "PDP") {
                            resolve(true);
                        } else {
                            resolve(false);
                        }
                    });
                }),
                contentZones: [
                    { name: "pdp_banner", selector: '#bluecore-pdp-banner' },
                    { name: "pdp_frequently_bought_together", selector: '.pdp-reco-wrapper' },
                    { name: "pdp_notifybackinstock" }
                    
                ],                
                interaction: {
                    name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                    catalogObject: {
                        type: "Product",
                        id: () => {
                            return SalesforceInteractions.util.resolveWhenTrue.bind(() => {
                                return window.location.pathname.split("/").pop();
                            });
                        },
                        relatedCatalogObjects: {
                            Category: SalesforceInteractions.DisplayUtils.pageElementLoaded(
                                ".breadcrumb-section .breadcrumb-container .breadcrumb a",
                                "html",
                            ).then((ele) => {
                                return SalesforceInteractions.resolvers.buildCategoryId(
                                    ".breadcrumb-section .breadcrumb-container .breadcrumb a",
                                    1,
                                    null,
                                    (categoryId) => [categoryId.toUpperCase()],
                                );
                            }),
                            Style: SalesforceInteractions.DisplayUtils.pageElementLoaded(
                                ".variant-section",
                                "html",
                            ).then((ele) => {
                                return SalesforceInteractions.resolvers.fromSelectorMultiple(
                                    ".variant-section .flavor-container .flavor-container-item.selected span",
                                    (styles) => {
                                        return styles.map((style) => {
                                            return style.trim().toUpperCase();
                                        });
                                    },
                                );
                            })

                        }
                    }
                }
            },
            {
                name: "search",
                isMatch: () => new Promise((resolve, reject) => {
                    return SalesforceInteractions.DisplayUtils.pageElementLoaded(
                        "body",
                        "html",
                    ).then(() => {
                        if (getPageType() === "Search") {
                            resolve(true);
                        } else {
                            resolve(false);
                        }
                    });
                }),
                interaction: {
                    name: "Search"
                }
            },
            {
                name: "null-search",
                isMatch: () => new Promise((resolve, reject) => {
                    return SalesforceInteractions.DisplayUtils.pageElementLoaded(
                        "body",
                        "html",
                    ).then(() => {
                        if (getPageType() === "Null Search") {
                            resolve(true);
                        } else {
                            resolve(false);
                        }
                    });
                }),
                contentZones: [
                    { name: "null_search_product_recos", selector: '.yCmsContentSlot.searchEmptyPageMiddle' },
                    { name: "null_search_placeholder" }                    
                ],
                interaction: {
                    name: "Null Search"
                }                 
            },
            {
                name: "cart",
                isMatch: () => new Promise((resolve, reject) => {
                    return SalesforceInteractions.DisplayUtils.pageElementLoaded(
                        "body",
                        "html",
                    ).then(() => {
                        if (getPageType() === "Cart") {
                            resolve(true);
                        } else {
                            resolve(false);
                        }
                    });
                }),
                onActionEvent: (actionEvent) => {
                    const checkForCartEventsInDataLayer = setInterval(() => {
                        if (window.dataLayer) {
                            let cartUpdate = window.dataLayer.findLast?.(x => x?.event == 'cartUpdate');
                            if (cartUpdate && !processedEvents.includes(cartUpdate)) {
                                processedEvents.push(cartUpdate);
                                let cartLineItems = [];
                                for (let i = 0; i < cartUpdate.cart.products.length; i++) {
                                    let lineItem = {
                                        catalogObjectType: "Product",
                                        catalogObjectId: cartUpdate.cart.products[i].id,
                                        price: parseFloat(cartUpdate.cart.products[i].price) / cartUpdate.cart.products[i].quantity,
                                        quantity: cartUpdate.cart.products[i].quantity
                                    };
                                    cartLineItems.push(lineItem);
                                }

                                const cartEvent = {
                                    interaction: {
                                        name: SalesforceInteractions.CartInteractionName.ReplaceCart,
                                        lineItems: cartLineItems
                                    }
                                };
                                SalesforceInteractions.sendEvent(cartEvent);
                            }

                        }
                    }, 500);
                    return actionEvent;
                },
                interaction: {
                    name: "Cart"
                }, 
                contentZones: [
                    { name: "cart_recommendations", selector: '.cart-entry-reco-wrapper' }
                ]                   
            },
            {
                name: "checkout-page-delivery-address-add-step",
                isMatch: () => new Promise((resolve, reject) => {
                    return SalesforceInteractions.DisplayUtils.pageElementLoaded(
                        "body",
                        "html",
                    ).then(() => {
                        if (getPageType() === "Checkout Page Delivery Address Add Step") {
                            resolve(true);
                        } else {
                            resolve(false);
                        }
                    });
                }),
                interaction: {
                    name: "Checkout Page Delivery Address Add"
                }
            },
            {
                name: "checkout-page-guest-info-account-step",
                isMatch: () => new Promise((resolve, reject) => {
                    return SalesforceInteractions.DisplayUtils.pageElementLoaded(
                        "body",
                        "html",
                    ).then(() => {
                        if (getPageType() === "Checkout Page Guest Account Info Step") {
                            resolve(true);
                        } else {
                            resolve(false);
                        }
                    });
                }),
                interaction: {
                    name: "Checkout Page Guest Account Info"
                }
            },
            {
                name: "checkout-page-delivery-method-choose-step",
                isMatch: () => new Promise((resolve, reject) => {
                    return SalesforceInteractions.DisplayUtils.pageElementLoaded(
                        "body",
                        "html",
                    ).then(() => {
                        if (getPageType() === "Checkout Page Delivery Method Choose Step") {
                            resolve(true);
                        } else {
                            resolve(false);
                        }
                    });
                }),
                interaction: {
                    name: "Checkout Page Delivery Method Choose"
                }
            },
            {
                name: "checkout-page-payment-method-add-step",
                isMatch: () => new Promise((resolve, reject) => {
                    return SalesforceInteractions.DisplayUtils.pageElementLoaded(
                        "body",
                        "html",
                    ).then(() => {
                        if (getPageType() === "Checkout Page Payment Method Add Step") {
                            resolve(true);
                        } else {
                            resolve(false);
                        }
                    });
                }),
                interaction: {
                    name: "Checkout Page Payment Method Add"
                }
            },
            {
                name: "checkout-page-your-ambassador-step",
                isMatch: () => new Promise((resolve, reject) => {
                    return SalesforceInteractions.DisplayUtils.pageElementLoaded(
                        "body",
                        "html",
                    ).then(() => {
                        if (getPageType() === "Checkout Page Your Ambassador Step") {
                            resolve(true);
                        } else {
                            resolve(false);
                        }
                    });
                }),
                interaction: {
                    name: "Checkout Page Your Ambassador"
                }
            },
            {
                name: "checkout-page-final-review-step",
                isMatch: () => new Promise((resolve, reject) => {
                    return SalesforceInteractions.DisplayUtils.pageElementLoaded(
                        "body",
                        "html",
                    ).then(() => {
                        if (getPageType() === "Checkout Page Final Review Step") {
                            resolve(true);
                        } else {
                            resolve(false);
                        }
                    });
                }),
                interaction: {
                    name: "Checkout Page Final Review"
                }
            },
            {
                name: "order-confirmation",
                isMatch: () => new Promise((resolve, reject) => {
                    return SalesforceInteractions.DisplayUtils.pageElementLoaded(
                        "body",
                        "html",
                    ).then(() => {
                        if (getPageType() === "Checkout Page Order Confirm Step") {
                            resolve(true);
                        } else {
                            resolve(false);
                        }
                    });
                }),
                onActionEvent: (actionEvent) => {
                    const checkForPurchaseEventsInDataLayer = setInterval(() => {
                        if (window.dataLayer) {
                            let purchase = window.dataLayer.findLast?.(x => x?.event == 'purchase');
                            if (purchase && !processedEvents.includes(purchase)) {
                                processedEvents.push(purchase);
                                let purchaseLineItems = [];
                                for (let i = 0; i < purchase.ecommerce.purchase.products.length; i++) {
                                    let lineItem = {
                                        catalogObjectType: "Product",
                                        catalogObjectId: purchase.ecommerce.purchase.products[i].id,
                                        price: parseFloat(purchase.ecommerce.purchase.products[i].price) / purchase.ecommerce.purchase.products[i].quantity,
                                        quantity: purchase.ecommerce.purchase.products[i].quantity
                                    };
                                    purchaseLineItems.push(lineItem);
                                }
                                const purchaseEvent = {
                                    interaction: {
                                        name: SalesforceInteractions.OrderInteractionName.Purchase,
                                        order: {
                                            id: purchase.ecommerce.purchase.actionField.id,
                                            totalValue: parseFloat(purchase.ecommerce.purchase.actionField.revenue),
                                            lineItems: purchaseLineItems
                                        }
                                    }
                                };
                                SalesforceInteractions.sendEvent(purchaseEvent);
                                SalesforceInteractions.sendEvent({
                                    user: {
                                        attributes: {
                                            mcpEvent: ""
                                        }   
                                    },                                     
                                    interaction: {
                                        name: "Clear MCP Event"      
                                    }
                                });                                
                            }

                        }
                    }, 500);
                    return actionEvent;
                },
                interaction: {
                    name: "OrderConfirmation"
                }
            },
            {
                name: "loyalty-rewards",
                isMatch: () => new Promise((resolve, reject) => {
                    return SalesforceInteractions.DisplayUtils.pageElementLoaded(
                        "body",
                        "html",
                    ).then(() => {
                        if (getPageType() === "Loyalty Rewards") {
                            resolve(true);
                        } else {
                            resolve(false);
                        }
                    });
                }),
                interaction: {
                    name: "Loyalty Rewards"
                }
            },
            {
                name: "become-member",
                isMatch: () => new Promise((resolve, reject) => {
                    return SalesforceInteractions.DisplayUtils.pageElementLoaded(
                        "body",
                        "html",
                    ).then(() => {
                        if (getPageType() === "Become a Member") {
                            resolve(true);
                        } else {
                            resolve(false);
                        }
                    });
                }),
                interaction: {
                    name: "Become a Member"
                }
            },
            {
                name: "ready-set-wellness-kit",
                isMatch: () => new Promise((resolve, reject) => {
                    return SalesforceInteractions.DisplayUtils.pageElementLoaded(
                        "body",
                        "html",
                    ).then(() => {
                        if (getPageType() === "Ready Set Wellness Kit Landing") {
                            resolve(true);
                        } else {
                            resolve(false);
                        }
                    });
                }),
                interaction: {
                    name: "Ready Set Wellness Kit"
                }
            },
            {
                name: "choose-your-plan",
                isMatch: () => new Promise((resolve, reject) => {
                    return SalesforceInteractions.DisplayUtils.pageElementLoaded(
                        "body",
                        "html",
                    ).then(() => {
                        if (getPageType() === "Choose Your Plan Landing") {
                            resolve(true);
                        } else {
                            resolve(false);
                        }
                    });
                }),
                interaction: {
                    name: "Choose Your Plan"
                }
            },
            {
                name: "my-account",
                isMatch: () => new Promise((resolve, reject) => {
                    return SalesforceInteractions.DisplayUtils.pageElementLoaded(
                        "body",
                        "html",
                    ).then(() => {
                        if (getPageType() === "My Account Landing") {
                            resolve(true);
                        } else {
                            resolve(false);
                        }
                    });
                }),
                interaction: {
                    name: "My Account"
                }
            },
            {
                name: "my-account-manage-autoship",
                isMatch: () => new Promise((resolve, reject) => {
                    return SalesforceInteractions.DisplayUtils.pageElementLoaded(
                        "body",
                        "html",
                    ).then(() => {
                        if (getPageType() === "My Account Manage Autoship") {
                            resolve(true);
                        } else {
                            resolve(false);
                        }
                    });
                }),
                interaction: {
                    name: "My Account Manage Autoship"
                }
            },
            {
                name: "my-account-orders",
                isMatch: () => new Promise((resolve, reject) => {
                    return SalesforceInteractions.DisplayUtils.pageElementLoaded(
                        "body",
                        "html",
                    ).then(() => {
                        if (getPageType() === "My Account Orders") {
                            resolve(true);
                        } else {
                            resolve(false);
                        }
                    });
                }),
                interaction: {
                    name: "My Account Orders"
                }
            },
            {
                name: "my-account-rewards",
                isMatch: () => new Promise((resolve, reject) => {
                    return SalesforceInteractions.DisplayUtils.pageElementLoaded(
                        "body",
                        "html",
                    ).then(() => {
                        if (getPageType() === "My Account Rewards") {
                            resolve(true);
                        } else {
                            resolve(false);
                        }
                    });
                }),
                interaction: {
                    name: "My Account Rewards"
                }
            },
            {
                name: "become-ambassador",
                isMatch: () => new Promise((resolve, reject) => {
                    return SalesforceInteractions.DisplayUtils.pageElementLoaded(
                        "body",
                        "html",
                    ).then(() => {
                        if (getPageType() === "Become an Ambassador") {
                            resolve(true);
                        } else {
                            resolve(false);
                        }
                    });
                }),
                interaction: {
                    name: "Become an Ambassador"
                }
            },
            {
                name: "ambassador-subscribe-storefront",
                isMatch: () => new Promise((resolve, reject) => {
                    return SalesforceInteractions.DisplayUtils.pageElementLoaded(
                        "body",
                        "html",
                    ).then(() => {
                        if (getPageType() === "Ambassador Subcribe Storefront") {
                            resolve(true);
                        } else {
                            resolve(false);
                        }
                    });
                }),
                interaction: {
                    name: "Ambassador Subcribe Storefront"
                }
            },
            {
                name: "about-us",
                isMatch: () => new Promise((resolve, reject) => {
                    return SalesforceInteractions.DisplayUtils.pageElementLoaded(
                        "body",
                        "html",
                    ).then(() => {
                        if (getPageType() === "About Us") {
                            resolve(true);
                        } else {
                            resolve(false);
                        }
                    });
                }),
                interaction: {
                    name: "About Us"
                }
            },
            {
                name: "default",
                isMatch: () => new Promise((resolve, reject) => {
                    return SalesforceInteractions.DisplayUtils.pageElementLoaded(
                        "body",
                        "html",
                    ).then(() => {
                        if (getPageType() === "Default") {
                            resolve(true);
                        } else {
                            resolve(false);
                        }
                    });
                }),
                interaction: {
                    name: "Default"
                }
            },
        ]
    };


    if (window.dataLayer)
        window.dataLayer.push = new Proxy(window.dataLayer.push, dlPushHandler); 
    else {
         window.dataLayer = window.dataLayer || [];
         window.dataLayer.push = new Proxy(window.dataLayer.push, dlPushHandler);
    }    

    const handleSPAPageChange = () => {
        if (window.location.pathname.includes('/p/')) {
            let product_id = window.location.pathname.split('/p/')[1];
            const urlChangeInterval = setInterval(() => {
                if (product_id !== window.location.pathname.split('/p/')[1]) {
                    product_id = window.location.pathname.split('/p/')[1];
                    SalesforceInteractions.reinit();
                }
            }, 250);

        }
    }
    handleSPAPageChange();
    SalesforceInteractions.initSitemap(sitemapConfig);
});