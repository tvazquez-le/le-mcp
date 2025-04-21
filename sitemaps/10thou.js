window._sf = SalesforceInteractions;

const domIsInteractive = () => new Promise(c => { _sf.cashDom(() => { c(!0); }); });

const titleCase = t => t.toLowerCase().split(" ").map(function (t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
}).join(" ");

const $cL = _sf.mcis.getParameterByName("category");

let store_url = "https://www.tenthousand.cc/";
let product_id = window.location.pathname.split('/')[2];
let full_url = store_url + "/products/" + product_id + ".json";

window.LevFunctions = {
    getCurrentShopifyProduct(callback) {
        let result;
        $.ajax({
            type: 'GET',
            url: full_url,
            dataType: 'json',
            async: false,
            success: function (data) {
                result = data;
            }
        })
        return result;
    },
    getShopifyProductVariant() {
        let selectedVariantId = window.location.href.split("variant=")[1];
        let selectedVariantProductInfo = LevFunctions.getCurrentShopifyProduct().product.variants.find(item => selectedVariantId == item.id);

        return selectedVariantProductInfo;
    },
    addToWishList() {
        let wish = document.querySelector("a.add-to-wishlist-btn");
        wish.addEventListener("click", () => {
            _sf.sendEvent({
                interaction: {
                    name: _sf.CatalogObjectInteractionName.FavoriteCatalogObject,
                    catalogObject: {
                        type: LevFunctions.getCurrentShopifyProduct().product.product_type,
                        id: LevFunctions.getShopifyProductVariant().id,
                        attributes: {
                            user: {
                                wishListIds: LevFunctions.getShopifyProductVariant().id
                            },
                            sku: {
                                id: LevFunctions.getShopifyProductVariant().sku
                            }
                        }
                    }
                }
            })
        }, true)
    },
    addToCart() {
        let add = document.querySelector("button#AddToCart");
        add.addEventListener("click", () => {
            _sf.sendEvent({
                interaction: {
                    name: _sf.CartInteractionName.AddToCart,
                    catalogObject: {
                        type: LevFunctions.getCurrentShopifyProduct().product.product_type,
                        id: LevFunctions.getShopifyProductVariant().id,
                        attributes: {
                            sku: {
                                id: LevFunctions.getShopifyProductVariant().sku
                            }
                        }
                    }
                }
            })
        }, true)
    }
}

_sf.init({
    cookieDomain: "tenthousand.cc"
}).then(() => {
    const sitemapConfig = {
        global: {
            onActionEvent: (actionEvent) => {
                const email = _sf.mcis.getValueFromNestedObject(
                    "window._etmc.user_info.email"
                );
                if (email) {
                    actionEvent.user = actionEvent.user || {};
                    actionEvent.user.identities = actionEvent.user.identities || {};
                    actionEvent.user.identities.emailAddress = email;
                }
                return actionEvent;
            },
            contentZones: [
                { name: "global_infobar_top_of_page", selector: "header.site-header" },
                { name: "global_infobar_bottom_of_page", selector: "footer.site-footer" }
            ],
            listeners: [
                _sf.listener("submit", ".email-signup", () => {
                    const email = _sf.cashDom("#dwfrm_mcsubscribe_email").val();
                    if (email) {
                        _sf.sendEvent({
                            interaction: { name: "Email Sign Up - Footer" },
                            user: {
                                identities: { 
                                    emailAddress: email 
                                } }
                        });
                    }
                })
            ]
        },
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
                    name: "Homepage"
                },
                contentZones: [
                    { name: "home_hero", selector: ".hero-slide-content" },
                    { name: "home_recommendations", selector: ".slider-section.hide-arrows" }
                ]
            },
            {
                name: "Login",
                isMatch: () => /^\/account\/login/.test(window.location.pathname),
                interaction: {
                    name: "Login"
                },
                listeners: [
                    _sf.listener("click", "input[type='submit']", () => {
                        const email = _sf.cashDom("input[id='CustomerEmail']").val();
                        if (email) {
                            _sf.sendEvent({
                                interaction: { name: "Logged In" },
                                user: { identities: { emailAddress: email } }
                            });
                        }
                    })
                ]
            },
            {
                name: "Collections",
                isMatch: () => /\/collections\?category/.test(window.location.href),
                interaction: {
                    name: "Viewed " + tC($cL) + "Collection"
                }
            },
            {
                name: "Product Detail",
                isMatch: () => {
                    return !/^\/products\/digital-gift-card$/.test(window.location.pathname)
                        .then(() => {
                            return /\/products/.test(window.location.pathname)
                        })
                },
                interaction: {
                    name: _sf.CatalogObjectInteractionName.ViewCatalogObject,
                    catalogObject: {
                        type: "Product",
                        id: LevFunctions.getCurrentShopifyProduct().product.id,
                        attributes: {
                            sku: {
                                id: LevFunctions.getCurrentShopifyProduct().product.variants[0].sku
                            },
                            name: LevFunctions.getCurrentShopifyProduct().product.title,
                            description: _sf.resolvers.fromMeta("og:description"),
                            url: _sf.resolvers.fromHref(),
                            imageUrl: LevFunctions.getCurrentShopifyProduct().product.images[0].src,
                            inventoryCount: LevFunctions.getCurrentShopifyProduct().product.variants[0].inventory_quantity,
                            price: LevFunctions.getCurrentShopifyProduct().product.variants[0].price,
                            rating: _sf.DisplayUtils.pageElementLoaded("div.yotpo-bottomline.pull-left.star-clickable", "html").then(
                                (ele) => {
                                    return _sf.cashDom("div.yotpo-bottomline.pull-left.star-clickable > span > span.sr-only")[0].innerText
                                }
                            ),
                        },
                        relatedCatalogObjects: {
                            Category: [LevFunctions.getCurrentShopifyProduct().product.handle],
                            Color: LevFunctions.getCurrentShopifyProduct().product.variants[0].option1,
                            Size: LevFunctions.getCurrentShopifyProduct().product.variants[0].option2,
                            Inseam: LevFunctions.getCurrentShopifyProduct().product.variants[0].option3
                        }
                    }
                }
            },
            {
                name: "Digital Gift Card",
                isMatch: () => /^\/products\/digital-gift-card$/.test(window.location.pathname),
                interaction: {
                    name: _sf.CatalogObjectInteractionName.ViewCatalogObject,
                    catalogObject: {
                        type: "Product",
                        id: LevFunctions.getCurrentShopifyProduct().product.id,
                        attributes: {
                            sku: {
                                id: LevFunctions.getCurrentShopifyProduct().product.variants[0].id
                            },
                            name: tC(LevFunctions.getCurrentShopifyProduct().product.title),
                            description: _sf.resolvers.fromMeta("og:description")(),
                            url: _sf.resolvers.fromHref(),
                            imageUrl: LevFunctions.getCurrentShopifyProduct().product.images[0].src,
                            price: LevFunctions.getCurrentShopifyProduct().product.variants[0].price
                        }
                    }
                }
            },
            {
                name: "Article",
                isMatch: () => /^\/blogs/.test(window.location.pathname),
                interaction: {
                    name: _sf.CatalogObjectInteractionName.ViewCatalogObject,
                    catalogObject: {
                        type: "Article",
                        id: () => ShopifyAnalytics.meta.page.resourceId,
                        attributes: {
                            name: () => _sf.resolvers.fromMeta("og:title")(),
                            url: _sf.resolvers.fromCanonical(),
                            imageUrl: _sf.resolvers.fromMeta("og:image")(),
                            description: _sf.resolvers.fromMeta("og:description")()
                        },
                        relatedCatalogObjects: {
                            Category: tC(_sf.resolvers.fromSelector("p.athlete-trainings")())
                        },
                    },
                },
            },
        ]
    };
    _sf.initSitemap(sitemapConfig);
});