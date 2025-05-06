const getAnchor = () => {
    return (window.location.href.split('#').length > 1) ? window.location.href.split('#')[1] : null;
};

const pageMatch = (pageType) => {
    let dataLayerEvent = window.dataLayer.find((event) => event.page);
    if (dataLayerEvent && (dataLayerEvent.page.type.toLowerCase() === pageType.toLowerCase())) {
        return true;
    }
    return false;
};

const dlPushHandler = {
    apply: function(target, thisArg, args) {
        if (args[0].event) {
            if (args[0].event === "formSubmit") {
            }
            if (args[0].event === "quoteSubmit") {
              let email = SalesforceInteractions.cashDom("form#marketing-cloud-form-id input#Email_Address").val()?.trim();
              let optin = SalesforceInteractions.cashDom("form#marketing-cloud-form-id input[name=Email_Opt_In]")[0]?.checked;
              let firstName = SalesforceInteractions.cashDom("form#marketing-cloud-form-id input#First_Name").val()?.trim();
              let lastName = SalesforceInteractions.cashDom("form#marketing-cloud-form-id input#Last_Name").val()?.trim();

              if (optin && isValidEmail(email)){
                SalesforceInteractions.sendEvent({
                  interaction: {
                    name: "LSIG Quote Cart Form Submission"
                  },
                  user: {
                    attributes: {
                      emailAddress: email,
                      firstName: firstName,
                      lastName: lastName
                    }
                  }
                });
              }
            }
            if (args[0].event === "addToQuote") {
                SalesforceInteractions.sendEvent({
                    interaction: {
                        name: "LSIG Request for a Quote"
                    }
                });
            }
            if (args[0].event === "download") {
                SalesforceInteractions.sendEvent({
                    interaction: {
                        name: "LSIG Case Study Download"
                    }
                });
            }
        }
        return Reflect.apply(target, thisArg, args);
    }
};

const checkCookie = (domain) => {
    if (domain === "lifesciences.danaher.com" || domain === "stage.lifesciences.danaher.com") {
        let cookieExist = document.cookie.split('; ').find((row) => row.startsWith('OptanonConsent'));
        if (cookieExist && cookieExist.split("groups=")[1].includes('C0004%3A1')) {
            return [{
                provider: "OneTrust",
                purpose: SalesforceInteractions.mcis.ConsentPurpose.Personalization,
                status: SalesforceInteractions.ConsentStatus.OptIn
            }];
        }
    }
    return [{
        provider: "OneTrust",
        purpose: SalesforceInteractions.mcis.ConsentPurpose.Personalization,
        status: SalesforceInteractions.ConsentStatus.OptOut
    }];
};

const getDomain = () => window.location.hostname;

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function isValidEmail(email) {
    return emailRegex.test(email);
}

const lsigSitemapConfig = {
    global: {
        onActionEvent: (actionEvent) => {
            actionEvent.user = actionEvent.user || {};
            actionEvent.user.attributes = actionEvent.user.attributes || {};
            actionEvent.user.identities = actionEvent.user.identities || {};
            return actionEvent;
        },
        contentZones: [ { name: "global_popup"}, {name: "header_banner", selector: ".header-wrapper"}],
        listeners: []
    },
    pageTypeDefault: {
        name: "default",
        interaction: {
            name: "Default Page"
        }
    },
     pageTypes: [{
        name: "home",
        isMatch: () => {
          return pageMatch("home");
        },
        interaction: {
          name: "LSIG Homepage"
        }
      },
      /*
      * Brand Pages
      */
      {
        name: "LSIG IDBS Brand Page",
        isMatch: () => {
          return pageMatch("home");
        },
        interaction: {
          name: "LSIG IDBS Brand Page"
        }
      },
      {
        name: "IDBS Product Page Brand Page",
        isMatch: () => {
          let regex = new RegExp("/brands/idbs.html");
          return pageMatch("products") && regex.test(window.location.href.split('?')[0].split('#')[0]);
        },
        interaction: {
          name: "LSIG IDBS Brand Page"
        }
      },
      {
        name: "LSIG Beckman Coulter LS Brand Page",
        isMatch: () => {
          let regex = new RegExp("/brands/beckman-coulter-life-sciences.html");
          return pageMatch("products") && regex.test(window.location.href.split('?')[0].split('#')[0]);
        },
        interaction: {
          name: "LSIG Beckman Coulter LS Brand Page"
        }
      },
      {
        name: "LSIG Phenomenex Brand Page",
        isMatch: () => {
          let regex = new RegExp("/brands/phenomenex.html");
          return pageMatch("products") && regex.test(window.location.href.split('?')[0].split('#')[0]);
        },
        interaction: {
          name: "LSIG Phenomenex Brand Page"
        }
      },
      {
        name: "LSIG Moldev Brand Page",
        isMatch: () => {
          let regex = new RegExp("/brands/molecular-devices.html");
          return pageMatch("products") && regex.test(window.location.href.split('?')[0].split('#')[0]);
        },
        interaction: {
          name: "LSIG Moldev Brand Page"
        }
      },
      {
        name: "LSIG Sciex Brand Page",
        isMatch: () => {
          let regex = new RegExp("/brands/sciex.html");
          return pageMatch("products") && regex.test(window.location.href.split('?')[0].split('#')[0]);
        },
        interaction: {
          name: "LSIG Sciex Brand Page"
        }
      },
      {
        name: "LSIG Leica Brand Page",
        isMatch: () => {
          let regex = new RegExp("/brands/leica.html");
          return pageMatch("products") && regex.test(window.location.href.split('?')[0].split('#')[0]);
        },
        interaction: {
          name: "LSIG Leica Brand Page"
        }
      },
      /*
      * Product Page Brand Filter Pages
      */
      {
        name: "LSIG Beckman Coulter Product Page Brand Filter",
        isMatch: () => {
          let regex = new RegExp("/products.html");
          let isProductPage = regex.test(window.location.href.split('?')[0].split('#')[0]);

          //?tag=beckman-coulter-life-sciences#categories
          let urlParams = new URLSearchParams(window.location.search);
          let isOppCo = (urlParams.get('tag') == 'beckman-coulter-life-sciences' ? true : false);
          let isFiltered = (getAnchor() == 'categories' ? true : false);
          return pageMatch("products") && isProductPage && isOppCo && isFiltered;
        },
        interaction: {
          name: "LSIG Beckman Coulter Product Page Brand Filter"
        }
      },
      {
        name: "LSIG IDBS Product Page Brand Filter",
        isMatch: () => {
          let regex = new RegExp("/products.html");
          let isProductPage = regex.test(window.location.href.split('?')[0].split('#')[0]);
          let urlParams = new URLSearchParams(window.location.search);
          let isOppCo = (urlParams.get('tag') == 'idbs' ? true : false);
          let isFiltered = (getAnchor() == 'categories' ? true : false);
          return pageMatch("products") && isProductPage && isOppCo && isFiltered;
        },
        interaction: {
          name: "LSIG IDBS Product Page Brand Filter"
        }
      },
      {
        name: "LSIG Leica Product Page Brand Filter",
        isMatch: () => {
          let regex = new RegExp("/products.html");
          let isProductPage = regex.test(window.location.href.split('?')[0].split('#')[0]);
          let urlParams = new URLSearchParams(window.location.search);
          let isOppCo = (urlParams.get('tag') == 'leica-microsystems' ? true : false);
          let isFiltered = (getAnchor() == 'categories' ? true : false);
          return pageMatch("products") && isProductPage && isOppCo && isFiltered;
        },
        interaction: {
          name: "LSIG Leica Product Page Brand Filter"
        }
      },
      {
        name: "LSIG Moldev Product Page Brand Filter",
        isMatch: () => {
          let regex = new RegExp("/products.html");
          let isProductPage = regex.test(window.location.href.split('?')[0].split('#')[0]);
          let urlParams = new URLSearchParams(window.location.search);
          let isOppCo = (urlParams.get('tag') == 'molecular-devices' ? true : false);
          let isFiltered = (getAnchor() == 'categories' ? true : false);
          return pageMatch("products") && isProductPage && isOppCo && isFiltered;
        },
        interaction: {
          name: "LSIG Moldev Product Page Brand Filter"
        }
      },
      {
        name: "LSIG Phenomenex Product Brand Filter",
        isMatch: () => {
          let regex = new RegExp("/products.html");
          let isProductPage = regex.test(window.location.href.split('?')[0].split('#')[0]);
          let urlParams = new URLSearchParams(window.location.search);
          let isOppCo = (urlParams.get('tag') == 'phenomenex' ? true : false);
          let isFiltered = (getAnchor() == 'categories' ? true : false);
          return pageMatch("products") && isProductPage && isOppCo && isFiltered;
        },
        interaction: {
          name: "LSIG Phenomenex Product Brand Filter"
        }
      },
      {
        name: "LSIG Sciex Product Brand Filter",
        isMatch: () => {
          let regex = new RegExp("/products.html");
          let isProductPage = regex.test(window.location.href.split('?')[0].split('#')[0]);
          let urlParams = new URLSearchParams(window.location.search);
          let isOppCo = (urlParams.get('tag') == 'sciex' ? true : false);
          let isFiltered = (getAnchor() == 'categories' ? true : false);
          return pageMatch("products") && isProductPage && isOppCo && isFiltered;
        },
        interaction: {
          name: "LSIG Sciex Product Brand Filter"
        }
      },
      /*
      * Product Pages
      */
      {
        name: "LSIG All Product Landing Page",
        isMatch: () => {
          let regex = new RegExp("/products.html");
          let isProductPage = regex.test(window.location.href.split('?')[0].split('#')[0]);
          return pageMatch("products") && isProductPage;
        },
        interaction: {
          name: "LSIG All Product Landing Page"
        }
      },
      {
        name: "LSIG Category Landing Page",
        isMatch: () => {
          let regex = new RegExp("/products/[a-z0-9-]+.html");
          let isCategoryPage = regex.test(window.location.href.split('?')[0].split('#')[0]);
          return pageMatch("products") && isCategoryPage;
        },
        interaction: {
          name: "LSIG Category Landing Page"
        }
      },
      {
        name: "LSIG Product Listing Page",
        isMatch: () => {
          let regex = new RegExp("products\/+[a-z0-9-]+\/[a-z0-9-]+.html");
          let isCategoryPage = regex.test(window.location.href.split('?')[0].split('#')[0]);
          return (pageMatch("products") || pageMatch("sku")) && isCategoryPage;
        },
        interaction: {
          name: "LSIG Product Listing Page"
        }
      },
      {
        name: "LSIG Product Detail Page",
        isMatch: () => {
          let regex = new RegExp("/products/family/[a-z0-9-]+.html");
          let isCategoryPage = regex.test(window.location.href.split('?')[0].split('#')[0]);
          return pageMatch("family") && isCategoryPage;
        },
        interaction: {
          name: "LSIG Product Detail Page"
        }
      },
      {
        name: "LSIG Product Bundle Detail Page",
        isMatch: () => {
          let regex = new RegExp("/products/bundles/[a-z0-9-]+.html");
          let isCategoryPage = regex.test(window.location.href.split('?')[0].split('#')[0]);
          return pageMatch("bundles") && isCategoryPage;
        },
        interaction: {
          name: "LSIG Product Bundle Detail Page"
        }
      },
      /*
      * Solution Pages
      */
      {
        name: "LSIG Solutions Landing Page",
        isMatch: () => {
          let regex = new RegExp("/solutions.html");
          let isCategoryPage = regex.test(window.location.href.split('?')[0].split('#')[0]);
          return pageMatch("solutions") && isCategoryPage;
        },
        interaction: {
          name: "LSIG Solutions Landing Page"
        }
      },
      {
        name: "LSIG Solutions Listing Page",
        isMatch: () => {
          let regex = new RegExp("/solutions/[a-z0-9-]+.html");
          let isCategoryPage = regex.test(window.location.href.split('?')[0].split('#')[0]);
          return pageMatch("solutions") && isCategoryPage;
        },
        interaction: {
          name: "LSIG Solutions Listing Page"
        }
      },
      {
        name: "LSIG Solutions Detail Page",
        isMatch: () => {
          let regex = new RegExp("/solutions\/+[a-z0-9-]+\/[a-z0-9-]+.html");
          let isCategoryPage = regex.test(window.location.href.split('?')[0].split('#')[0]);
          return pageMatch("solutions") && isCategoryPage;
        },
        interaction: {
          name: "LSIG Solutions Detail Page"
        }
      },
      {
        name: "LSIG Solutions Process Page",
        isMatch: () => {
          let regex = new RegExp("/solutions\/+[a-z0-9-]+\/[a-z0-9-]+\/process-steps.html");
          let isCategoryPage = regex.test(window.location.href.split('?')[0].split('#')[0]);
          return pageMatch("solutions") && isCategoryPage;
        },
        interaction: {
          name: "LSIG Solutions Process Page"
        }
      },
      {
        name: "LSIG Solutions Product Page",
        isMatch: () => {
          let regex = new RegExp("/solutions\/+[a-z0-9-]+\/[a-z0-9-]+\/products.html");
          let isCategoryPage = regex.test(window.location.href.split('?')[0].split('#')[0]);
          return pageMatch("solutions") && isCategoryPage;
        },
        interaction: {
          name: "LSIG Solutions Product Page"
        }
      },
      /*
      * Talk to an Expert Pages
      */
      {
        name: "LSIG Talk to an Expert Form Page",
        isMatch: () =>


          new Promise((resolve, reject) => {
            let isMatchDept = setTimeout(() => {
              resolve(false);
            }, 50);

                      let regex = new RegExp("/expert.html");
          let isCategoryPage = regex.test(window.location.href.split('?')[0].split('#')[0]);


          //return isCategoryPage;

            return isCategoryPage && SalesforceInteractions.DisplayUtils.pageElementLoaded(
              "form#TTAE",
              "html",
            ).then(() => {
              clearTimeout(isMatchDept);
              resolve(true);
            });
          }),
        interaction: {
          name: "LSIG Talk to an Expert Form Page"
        },
        listeners: [
          //SalesforceInteractions.listener("submit", "div#danaher form#TTAE", async() => {
          SalesforceInteractions.listener("click", "div#danaher form#TTAE input[type=submit]", async() => {
            let email = SalesforceInteractions.cashDom("form input[name=Email_Address]").val()?.trim();
            let optin = SalesforceInteractions.cashDom("form input[name=Email_Opt_In]")[0]?.checked;
            let firstName = SalesforceInteractions.cashDom("form input[name=First_Name]").val()?.trim();
            let lastName = SalesforceInteractions.cashDom("form input[name=Last_Name]").val()?.trim();

            if (optin && isValidEmail(email)) {
              SalesforceInteractions.sendEvent({
                interaction: {
                  name: "LSIG Talk to an Expert Form Submission"
                },
                user: {
                  attributes: {
                    emailAddress: email,
                    firstName: firstName,
                    lastName: lastName
                  }
                }
              });
            }
          })
        ]
      },
      {
        name: "LSIG Talk to an Expert/Newsletter Form Completion Page",
        isMatch: () => {
          let regex = new RegExp("/connect/thank-you.html");
          let isCategoryPage = regex.test(window.location.href.split('?')[0].split('#')[0]);
          return isCategoryPage;
        },
        interaction: {
          name: "LSIG Talk to an Expert Form Completion Page"
        }
      },
      {
        name: "LSIG Solutions Talk to an Expert",
        isMatch: () => {
          let regex = new RegExp("/solutions\/+[a-z0-9-]+\/[a-z0-9-]+\/+talk-to-expert+.html");
          let isCategoryPage = regex.test(window.location.href.split('?')[0].split('#')[0]);
          return isCategoryPage;
        },
        interaction: {
          name: "LSIG Solutions Talk to an Expert"
        },
        listeners: [
          SalesforceInteractions.listener("submit", "form#TTAE", async () => {
            let email = SalesforceInteractions.cashDom("form#TTAE input[name=Email_Address]").val()?.trim();
            let optin = SalesforceInteractions.cashDom("form#TTAE input[name=Email_Opt_In]")[0]?.checked;
            let firstName = SalesforceInteractions.cashDom("form input[name=First_Name]").val()?.trim();
            let lastName = SalesforceInteractions.cashDom("form input[name=Last_Name]").val()?.trim();

            if (optin && isValidEmail(email)) {
              SalesforceInteractions.sendEvent({
                interaction: {
                  name: "LSIG Talk to an Expert Form Submission"
                },
                user: {
                  attributes: {
                    emailAddress: email,
                    firstName: firstName,
                    lastName: lastName
                  }
                }
              });
            }
          })
        ]
      },


      {
        name: "LSIG DLS Subscribe to our Newsletter",
        isMatch: () => {
          let regex = new RegExp("/newsletter.html");
          let isCategoryPage = regex.test(window.location.href.split('?')[0].split('#')[0]);
          return isCategoryPage;
        },
        interaction: {
          name: "LSIG DLS Subscribe to our Newsletter"
        },
        listeners: [
          SalesforceInteractions.listener("submit", "form#newsLetter", async () => {
            let email = SalesforceInteractions.cashDom("form#newsLetter input#Email_Address").val()?.trim();
            let optin = SalesforceInteractions.cashDom("form#newsLetter input[name=Email_Opt_In]")[0]?.checked;
            let firstName = SalesforceInteractions.cashDom("form#newsLetter input[name=First_Name]").val()?.trim();
            let lastName = SalesforceInteractions.cashDom("form#newsLetter input[name=Last_Name]").val()?.trim();

            if (optin && isValidEmail(email)) {
              SalesforceInteractions.sendEvent({
                interaction: {
                  name: "LSIG Newsletter Form Submission"
                },
                user: {
                  attributes: {
                    emailAddress: email,
                    firstName: firstName,
                    lastName: lastName
                  }
                }
              });
            }
          })
        ]
      },
      {
        name: "LSIG Newsletter Form Completion Page",
        isMatch: () => {
          let regex = new RegExp("/connect/newsletter/newsletter-thankyou.html");
          let isCategoryPage = regex.test(window.location.href.split('?')[0].split('#')[0]);
          return isCategoryPage;
        },
        interaction: {
          name: "LSIG Newsletter Form Completion Page"
        }
      },

      {
        name: "LSIG Applications Landing Page",
        isMatch: () => {
          let regex = new RegExp("/application.html");
          let isCategoryPage = regex.test(window.location.href.split('?')[0].split('#')[0]);
          return isCategoryPage;
        },
        interaction: {
          name: "LSIG Applications Landing Page"
        }
      },
      {
        name: "LSIG Application Type Page",
        isMatch: () => {
          let regex = new RegExp("/application/[a-z0-9-]+.html");
          let isCategoryPage = regex.test(window.location.href.split('?')[0].split('#')[0]);
          return isCategoryPage;
        },
        interaction: {
          name: "LSIG Application Type Page"
        }
      },
      /*
      * Library Page Types
      */
      {
        name: "LSIG Library Landing Page",
        isMatch: () => {
          let regex = new RegExp("/library.html");
          let isCategoryPage = regex.test(window.location.href.split('?')[0].split('#')[0]);
          return isCategoryPage;
        },
        interaction: {
          name: "LSIG Library Landing Page"
        }
      },
      {
        name: "LSIG Library Category Page",
        isMatch: () => {
          let regex = new RegExp("/library/[a-z0-9-]+.html");
          let isCategoryPage = regex.test(window.location.href.split('?')[0].split('#')[0]);
          return isCategoryPage;
        },
        interaction: {
          name: "LSIG Library Category Page"
        }
      },
      {
        name: "LSIG Library Topics Page",
        isMatch: () => {
          let regex = new RegExp("/library/topics+\/[a-z0-9-]+.html");
          let isCategoryPage = regex.test(window.location.href.split('?')[0].split('#')[0]);
          return isCategoryPage;
        },
        interaction: {
          name: "LSIG Library Topics Page"
        }
      },

      {
        name: "LSIG Event Registration Page",
        isMatch: () => {
          let regex = new RegExp("/events/[a-z0-9-]+.html");
          let regex2 = new RegExp("/events\/+[a-z0-9-]+\/[a-z0-9-]+.html");
          let isCategoryPage = regex.test(window.location.href.split('?')[0].split('#')[0]);
          let isCategoryPage2 = regex2.test(window.location.href.split('?')[0].split('#')[0]);
          return (isCategoryPage || isCategoryPage2);
        },
        interaction: {
          name: "LSIG Event Registration Page"
        },
        listeners: [
          SalesforceInteractions.listener("click", "form#eventTest, form#mktoForm_1523", () => {
            let email = SalesforceInteractions.cashDom("form#mktoForm_1523 input[name=Email]").val()?.trim();
            let optin = SalesforceInteractions.cashDom("form#mktoForm_1523 input[name=globalSingleOptIn]")[0]?.checked;
            let firstName = SalesforceInteractions.cashDom("form#mktoForm_1523 input[name=FirstName]").val()?.trim();
            let lastName = SalesforceInteractions.cashDom("form#mktoForm_1523 input[name=LastName]").val()?.trim();

            if (optin && isValidEmail(email)) {
              SalesforceInteractions.sendEvent({
                interaction: {
                  name: "LSIG Event Registration Form Submission"
                },
                user: {
                  attributes: {
                    emailAddress: email,
                    firstName: firstName,
                    lastName: lastName
                  }
                }
              });
            }
          })
        ]
      },
      {
        name: "LSIG Events Assets Page",
        isMatch: () => {
          let regex = new RegExp("/events\/+[a-z0-9-]+\/+([a-z0-9-]?)+assets.html");
          let isCategoryPage = regex.test(window.location.href.split('?')[0].split('#')[0]);
          return isCategoryPage;
        },
        interaction: {
          name: "LSIG Events Assets Page"
        }
      },
      {
        name: "LSIG Danaher Unified Search",
        isMatch: () => {
          let regex = new RegExp("danahersearch.html");
          let isPage = regex.test(window.location.href.split('?')[0].split('#')[0]);
          return isPage;
        },
        interaction: {
          name: "LSIG Danaher Unified Search"
        }
      },

      {
        name: "LSIG Search",
        isMatch: () => {
          let regex = new RegExp("search.html");
          let isPage = regex.test(window.location.href.split('?')[0].split('#')[0]);
          return isPage;
        },
        interaction: {
          name: "LSIG Search"
        },
      },

      {
        name: "LSIG Sign In Landing Page",
        isMatch: () => {
          let regex = new RegExp("/signin.html");
          let isSignin = regex.test(window.location.href.split('?')[0].split('#')[0]);
          return pageMatch("webpage") && isSignin;
        },
        interaction: {
          name: "LSIG Sign In Landing Page"
        },
        listeners: []
      },
      {
        name: "LSIG Sign In Registration Page",
        isMatch: () => {
          let regex = new RegExp("/signin/register.html");
          let isRegistration = regex.test(window.location.href.split('?')[0].split('#')[0]);
          return pageMatch("webpage") && isRegistration;
        },
        interaction: {
          name: "LSIG Sign In Registration Page"
        },
        listeners: [
          SalesforceInteractions.listener("submit", "div.login form", async () => {
            let email = SalesforceInteractions.cashDom("form #Email").val()?.trim();
            let optin = SalesforceInteractions.cashDom("form input[name='globalSingleOptIn']")[0]?.checked;
            let firstName = SalesforceInteractions.cashDom("form #FirstName").val()?.trim();
            let lastName = SalesforceInteractions.cashDom("form #LastName").val()?.trim();

            if (optin && isValidEmail(email)) {
              SalesforceInteractions.sendEvent({
                interaction: {
                  name: "LSIG Waitlist Form Submission"
                },
                user: {
                  identities: {
                    emailAddress: email,
                  },
                  attributes: {
                    firstName: firstName,
                    lastName: lastName
                  }
                }
              });
            }
          })

        ]
      },
      {
        name: "LSIG Research Areas",
        isMatch: () => {
          let regex = new RegExp("/research-areas/");
          let isResearchArea = regex.test(window.location.href.split('?')[0].split('#')[0]);
          return pageMatch("webpage") && isResearchArea;
        },
        interaction: {
          name: "LSIG Research Areas"
        }
      },
      {
        name: "LSIG Quote Cart",
        isMatch: () => {
          let regex = new RegExp("/quote-cart.html");
          let isResearchArea = regex.test(window.location.href.split('?')[0].split('#')[0]);
          return pageMatch("webpage") && isResearchArea;
        },
        interaction: {
          name: "LSIG Quote Cart"
        },
        listeners: [
          SalesforceInteractions.listener("submit", "form#marketing-cloud-form-id", async () => {
            let email = SalesforceInteractions.cashDom("form#marketing-cloud-form-id input#Email_Address").val()?.trim();
            let optin = SalesforceInteractions.cashDom("form#marketing-cloud-form-id input[name=Email_Opt_In]")[0]?.checked;
            let firstName = SalesforceInteractions.cashDom("form#marketing-cloud-form-id input#First_Name").val()?.trim();
            let lastName = SalesforceInteractions.cashDom("form#marketing-cloud-form-id input#Last_Name").val()?.trim();

            if (optin && isValidEmail(email)) {
              SalesforceInteractions.sendEvent({
                interaction: {
                  name: "LSIG Quote Cart Form Submission"
                },
                user: {
                  attributes: {
                    emailAddress: email,
                    firstName: firstName,
                    lastName: lastName
                  }
                }
              });
            }
          })
        ]
      },
      {
        name: "LSIG Request a Quote Form Submit Page",
        isMatch: () => {
          let regex = new RegExp("/submit-quote.html");
          let isResearchArea = regex.test(window.location.href.split('?')[0].split('#')[0]);
          return pageMatch("webpage") && isResearchArea;
        },
        interaction: {
          name: "LSIG Request a Quote Form Submit Page"
        }
      },
      {
        name: "LSIG About Us",
        isMatch: () => {
          return pageMatch("about-us");
        },
        interaction: {
          name: "LSIG About Us"
        }
      },
      {
        name: "LSIG Blog Page",
        isMatch: () => {
          return pageMatch("blog");
        },
        interaction: {
          name: "LSIG Blog Page"
        }
      },
      {
        name: "LSIG News Landing Page",
        isMatch: () => {
          let regex = new RegExp("/news.html");
          let isNews = regex.test(window.location.href.split('?')[0].split('#')[0]);
          return pageMatch("news") && isNews;
        },
        interaction: {
          name: "LSIG News Landing Page"
        }
      },
      {
        name: "LSIG News Topic Page",
        isMatch: () => {
          let regex = new RegExp("/news/topics/[a-z0-9-]+.html");
          let isNews = regex.test(window.location.href.split('?')[0].split('#')[0]);
          return pageMatch("news") && isNews;
        },
        interaction: {
          name: "LSIG News Topic Page"
        }
      },
      {
        name: "LSIG News Article Page",
        isMatch: () => {
          let regex = new RegExp("\/news\/[a-z0-9-]+.html");
          let isNews = regex.test(window.location.href.split('?')[0].split('#')[0]);
          return pageMatch("news") && isNews;
        },
        interaction: {
          name: "LSIG News Article Page"
        }
      },
      {
        name: "LSIG Landing Page",
        isMatch: () => {
          let regex = new RegExp("/landing/(?!asset-library)");
          let isLanding = regex.test(window.location.pathname);
          return pageMatch("webpage") && isLanding;
        },
        interaction: {
          name: "LSIG Landing Page"
        },
        listeners: [
          SalesforceInteractions.listener("submit", "form#mktoForm_1080", async() => {
            let email = SalesforceInteractions.cashDom("form#mktoForm_1080 input#Email").val().trim();
            let optin = SalesforceInteractions.cashDom("form#mktoForm_1080 input[name='globalSingleOptIn']")[0]?.checked;
            let firstName = SalesforceInteractions.cashDom("form#mktoForm_1080 input#FirstName").val().trim();
            let lastName = SalesforceInteractions.cashDom("form#mktoForm_1080 input#LastName").val().trim();

            if (optin && isValidEmail(email)) {
              SalesforceInteractions.sendEvent({
                interaction: {
                  name: "LSIG Talk to an Expert Form Submission"
                },
                user: {
                  attributes: {
                    emailAddress: email,
                    firstName: firstName,
                    lastName: lastName
                  }
                }
              });
            }
          })
        ]
      },
      {
        name: "LSIG Asset Library",
        isMatch: () => {
          let regex = new RegExp("/landing/asset-library/");
          let regex2 = new RegExp("/asset-library.html");
          let isAssetLibrary = regex.test(window.location.pathname) || regex2.test(window.location.pathname);
          return pageMatch("webpage") && isAssetLibrary;
        },
        interaction: {
          name: "LSIG Asset Library"
        },
        listeners: [
          SalesforceInteractions.listener("submit", "form#mktoForm_1467", async() => {
            let email = SalesforceInteractions.cashDom("form#mktoForm_1467 input[name=Email]").val().trim();
            let optin = SalesforceInteractions.cashDom("form#mktoForm_1467 input[name=globalSingleOptIn]")[0]?.checked;

            if (optin && isValidEmail(email)) {
              SalesforceInteractions.sendEvent({
                interaction: {
                  name: "LSIG Asset Library Access Form Submission"
                },
                user: {
                  attributes: {
                    emailAddress: email
                  }
                }
              });
            }
          })
        ]
      },
    ]
};

const sitemaps = {
    "lifesciences.danaher.com": lsigSitemapConfig
};

const initializeMCP = () => {
    const domain = getDomain();
    const consent = checkCookie(domain);
    const sitemapConfig = sitemaps[domain];

    if (!sitemapConfig) {
        console.warn(`No sitemap configuration found for domain: ${domain}`);
        return;
    }

    SalesforceInteractions.init({
        cookieDomain: domain,
        consents: consent
    }).then(() => {
        if (window.dataLayer) {
            window.dataLayer.push = new Proxy(window.dataLayer.push, dlPushHandler);
        } else {
            window.dataLayer = [];
            window.dataLayer.push = new Proxy(window.dataLayer.push, dlPushHandler);
        }
        SalesforceInteractions.initSitemap(sitemapConfig);
    });
};

initializeMCP();