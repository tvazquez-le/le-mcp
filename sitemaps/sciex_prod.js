const checkCookie = (domain) => {
    if (domain === "sciex.com") {
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

const sciexSitemapConfig = {
    global: {
        onActionEvent: (actionEvent) => {
            actionEvent.user = actionEvent.user || {};
            actionEvent.user.attributes = actionEvent.user.attributes || {};
            actionEvent.user.identities = actionEvent.user.identities || {};
            return actionEvent;
        },
        contentZones: [{ name: "global_popup"}],
        listeners: []
    },
    pageTypeDefault: {
        name: "default",
        interaction: {
            name: "Default Page"
        }
    },
     pageTypes: [
        {
                name: "Homepage",
                isMatch: () => /^\/$/.test(window.location.pathname),
                interaction: {
                  name: "SCIEX Homepage",
                },
                contentZones: [
                  { name: "HomePage_popup"}
                ],
            },
      {
        name: "SCIEX Products",
        isMatch: () => {
          let regex = new RegExp("\/products$");
          return regex.test(window.location.href.split('?')[0].split('#')[0]);
        },
        interaction: {
          name: "SCIEX Products"
        }
      },
      {
        name: "SCIEX Category Page",
        isMatch: () => {
          let regex = new RegExp("\/products\/[a-z0-9-]+$");
          return regex.test(window.location.href.split('?')[0].split('#')[0]);
        },
        interaction: {
          name: "SCIEX Category Page"
        }
      },
      {
        name: "SCIEX OS Software Landing Page",
        isMatch: () => {
          let regex = new RegExp("/products\/software\/sciex-os-software");
          return regex.test(window.location.href.split('?')[0].split('#')[0]);
        },
        interaction: {
          name: "SCIEX OS Software Landing Page"
        }
      },
      {
        name: "SCIEX Sub Category Page",
        isMatch: () => {
          let regex = new RegExp("\/products\/[a-z0-9-]+\/[a-z0-9-]+\/?$");
          let osSoftwareRegex = new RegExp("\/products\/software\/os-software-roi-calculator");
          return regex.test(window.location.href.split('?')[0].split('#')[0]) && !osSoftwareRegex.test(window.location.href.split('?')[0].split('#')[0]);
        },
        interaction: {
          name: "SCIEX Sub Category Page"
        }
      },
      {
        name: "SCIEX Product Detail Page",
        isMatch: () => {
          let regex = new RegExp("/products\/+[a-z0-9-]+\/[a-z0-9-]+\/[a-z0-9-]+");
          return regex.test(window.location.href.split('?')[0].split('#')[0]);
        },
        interaction: {
          name: "SCIEX Product Detail Page"
        }
      },
      {
        name: "SCIEX Applications Landing Page",
        isMatch: () => {
          let regex = new RegExp("/applications");
          return regex.test(window.location.href.split('?')[0].split('#')[0]);
        },
        interaction: {
          name: "SCIEX Applications Landing Page"
        }
      },

      {
        name: "SCIEX OS Software Access Form",
        isMatch: () => {
          let regex = new RegExp("\/Hidden\/landing-pages\/sciex-os-software-cloudshare");
          return regex.test(window.location.href.split('?')[0].split('#')[0]);
        },
        interaction: {
          name: "SCIEX OS Software Access Form"
        }
      },
      {
        name: "SCIEX Software ROI Calculator",
        isMatch: () => {
          let regex = new RegExp("\/products\/software\/os-software-roi-calculator");
          return regex.test(window.location.href.split('?')[0].split('#')[0]);
        },
        interaction: {
          name: "SCIEX Software ROI Calculator"
        }
      },
      {
        name: "SCIEX Request Information",
        isMatch: () => {
          let regex = new RegExp("\/form-pages\/request-information");
          return regex.test(window.location.href.split('?')[0].split('#')[0]);
        },
        interaction: {
          name: "SCIEX Request Information"
        },
        listeners: []
      },
      {
        name: "SCIEX Product Request Form",
        isMatch: () => {
          let regex = new RegExp("\/form-pages\/product-request");
          return regex.test(window.location.href.split('?')[0].split('#')[0]);
        },
        interaction: {
          name: "SCIEX Product Request Form"
        },
        listeners: []
      },
      {
        name: "SCIEX Create an Account",
        isMatch: () => {
          let regex = new RegExp("\/support\/create-account");
          return regex.test(window.location.href.split('?')[0].split('#')[0]);
        },
        interaction: {
          name: "SCIEX Create an Account"
        },
        listeners: [
          SalesforceInteractions.listener("click", "input[type=button].next_btn", async() => {
            let email = SalesforceInteractions.cashDom("form.regform input#accountEmail").val();
            let firstName = SalesforceInteractions.cashDom('input[name="firstName"]').val();
            let lastName = SalesforceInteractions.cashDom('input[name="lastName"]').val();

            if (isValidEmail(email)) {
              SalesforceInteractions.sendEvent({
                interaction: {
                  name: "SCIEX Create Account Form Submission"
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
        name: "SCIEX Now Support Page",
        isMatch: () => {
          let regex = new RegExp("/support$");
          return regex.test(window.location.href.split('?')[0].split('#')[0]);
        },
        interaction: {
          name: "SCIEX Now Support Page"
        }
      },
      {
        name: "SCIEX Now Support Cases",
        isMatch: () => {
          let regex = new RegExp("\/support\/support-cases");
          return regex.test(window.location.href.split('?')[0].split('#')[0]);
        },
        interaction: {
          name: "SCIEX Now Support Cases"
        }
      },
      {
        name: "SCIEX Training Learning Hub Page",
        isMatch: () => {
          let regex = new RegExp("\/support\/training$");
          return regex.test(window.location.href.split('?')[0].split('#')[0]);
        },
        interaction: {
          name: "SCIEX Training Learning Hub Page"
        }
      },
      {
        name: "SCIEX Training Course Catalog All",
        isMatch: () => {
          let regex = new RegExp("\/support\/training\/course-catalog");
          let urlParams = new URLSearchParams(window.location.search);
          let isViewAll = (urlParams.get('view') == 'all' ? true : false);

          return regex.test(window.location.href.split('?')[0].split('#')[0]) && isViewAll;
        },
        interaction: {
          name: "SCIEX Training Course Catalog All"
        }
      },
      {
        name: "SCIEX Virtual Training Programs",
        isMatch: () => {
          let regex = new RegExp("/support/training/success-programs/success-virtual-training-program");
          return regex.test(window.location.href.split('?')[0].split('#')[0]);
        },
        interaction: {
          name: "SCIEX Virtual Training Programs"
        }
      },
      {
        name: "SCIEX Training Course Catalog",
        isMatch: () => {
          let regex = new RegExp("\/support\/training\/course-catalog");
          let urlParams = new URLSearchParams(window.location.search);
          let isViewCustomer = (urlParams.get('view') == 'atcustomer' ? true : false);

          return regex.test(window.location.href.split('?')[0].split('#')[0]) && isViewCustomer;
        },
        interaction: {
          name: "SCIEX Training Course Catalog"
        }
      },
      {
        name: "SCIEX Learning Manager Overview",
        isMatch: () => {
          let regex = new RegExp("/support/training/learning-manager-overview");
          return regex.test(window.location.href.split('?')[0].split('#')[0]);
        },
        interaction: {
          name: "SCIEX Learning Manager Overview"
        }
      },
      {
        name: "SCIEX My Account Profile",
        isMatch: () => {

          let regex = new RegExp("\/support\/profile\/account-information$");
          return regex.test(window.location.href.split('?')[0].split('#')[0]);
        },
        interaction: {
          name: "SCIEX My Account Profile"
        }
      },
      {
        name: "SCIEX Knowledge Base Articles",
        isMatch: () => {
          let regex = new RegExp("\/support\/knowledge-base-articles");
          return regex.test(window.location.href.split('?')[0].split('#')[0]);
        },
        interaction: {
          name: "SCIEX Knowledge Base Articles"
        }
      },
      {
        name: "SCIEX Service Landing Page",
        isMatch: () => {
          let regex = new RegExp("\/support\/professional-lab-services");
          return regex.test(window.location.href.split('?')[0].split('#')[0]);
        },
        interaction: {
          name: "SCIEX Service Landing Page"
        }
      },
      {
        name: "SCIEX Request Support Form Page",
        isMatch: () => {
          let regex = new RegExp("\/support\/request-support");
          return regex.test(window.location.href.split('?')[0].split('#')[0]);
        },
        interaction: {
          name: "SCIEX Request Support Form Page"
        }
      },
      {
        name: "SCIEX Contact Us",
        isMatch: () => {
          let regex = new RegExp("\/about-us\/contact-us");
          return regex.test(window.location.href.split('?')[0].split('#')[0]);
        },
        interaction: {
          name: "SCIEX Contact Us"
        }
      }
    ]
};

const initializeMCP = () => {
    const domain = getDomain();
    const consent = checkCookie(domain);

    SalesforceInteractions.init({
        cookieDomain: domain,
        consents: consent
    }).then(() => {
        SalesforceInteractions.initSitemap(sciexSitemapConfig);
    });
};

initializeMCP();
