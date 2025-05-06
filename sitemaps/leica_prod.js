const getDomain = () => window.location.hostname;

const domain = getDomain();

const checkCookie = (domain) => {
  if (domain === "www.leica-microsystems.com") {
    let cookieExist = document.cookie.split("; ").find((row) => row.startsWith("OptanonConsent"));
    if (cookieExist && cookieExist.split("groups=")[1].includes("C0004%3A1")) {
      return [
        {
          provider: "OneTrust",
          purpose: SalesforceInteractions.mcis.ConsentPurpose.Personalization,
          status: SalesforceInteractions.ConsentStatus.OptIn,
        },
      ];
    }
  }
  return [
    {
      provider: "OneTrust",
      purpose: SalesforceInteractions.mcis.ConsentPurpose.Personalization,
      status: SalesforceInteractions.ConsentStatus.OptOut,
    },
  ];
};
console.log("1.0.18");
SalesforceInteractions.init({
  cookieDomain: domain === "www.leica-microsystems.com" ? "leica-microsystems.com" : "false",
  consents: checkCookie(domain),
}).then(() => {
  const config = {
    global: {
      onActionEvent: (actionEvent) => {
        actionEvent.user = actionEvent.user || {};
        actionEvent.user.attributes = actionEvent.user.attributes || {};
        actionEvent.user.identities = actionEvent.user.identities || {};
        return actionEvent;
      },
      contentZones: [ { name: "global_popup"}], 
    },
    pageTypeDefault: {
      name: "default",
      interaction: {
        name: "Default Page",
      },
    },
    pageTypes: [
      {
        name: "Leica Homepage",
        isMatch: () => /^\/$/.test(window.location.pathname),
        interaction: {
          name: "Leica Homepage",
        },
      },
      {
        name: "Leica Shop All Page",
        isMatch: () => /^\/shop\/?$/.test(window.location.pathname),
        interaction: {
          name: "Leica Shop All Page",
        },
      },
      {
        name: "Leica Product Category",
        isMatch: () => /^\/products\/[^\/]+\/?$/.test(window.location.pathname) || /^\/products\/[^\/]+\/[^\/]+\/?$/.test(window.location.pathname),
        interaction: {
          name: "Leica Product Category",
        },
      },
      {
        name: "Leica Product Page",
        isMatch: () => /^\/products\/.*\/p\/[^\/]+\/?$/.test(window.location.pathname),
        interaction: {
          name: "Leica Product Page",
        },
        listeners: [
          // Product page actions
          SalesforceInteractions.listener("click", '[href*="quote_request_sales_contact"]', () => {
            console.log("Price Request");
            SalesforceInteractions.sendEvent({
              interaction: {
                name: "Leica Price Request",
              },
            });
          }),

          SalesforceInteractions.listener("click", '[href*="demo_request"]', () => {
            console.log("Demo Request");
            SalesforceInteractions.sendEvent({
              interaction: {
                name: "Leica Demo Request",
              },
            });
          }),
          SalesforceInteractions.listener("click", '[href*="service-support"]', () => {
            console.log("Service and Repair Request");
            SalesforceInteractions.sendEvent({
              interaction: {
                name: "Leica Service and Repair Request",
              },
            });
          }),

          SalesforceInteractions.listener("click", '[href*="application-support"]', () => {
            console.log("Application Support Request");
            SalesforceInteractions.sendEvent({
              interaction: {
                name: "Leica Application Support Request",
              },
            });
          }),
        ],
      },
      {
        name: "Leica Objective Finder",
        isMatch: () => /^\/objectivefinder\/?$/.test(window.location.pathname),
        interaction: {
          name: "Leica Objective Finder",
        },
      },
      {
        name: "Leica Product Technical Specification",
        isMatch: () => /^\/products\/.*\/p\/[^\/]+\/specification\/?$/.test(window.location.pathname),
        interaction: {
          name: "Leica Product Technical Specification",
        },
      },
      {
        name: "Leica Product Application",
        isMatch: () => /^\/products\/.*\/p\/[^\/]+\/app\/?$/.test(window.location.pathname),
        interaction: {
          name: "Leica Product Application",
        },
      },
      {
        name: "Leica Product Media",
        isMatch: () => /^\/products\/.*\/p\/[^\/]+\/media\/?$/.test(window.location.pathname),
        interaction: {
          name: "Leica Product Media",
        },
      },
      {
        name: "Leica Product Publications",
        isMatch: () => /^\/products\/.*\/p\/[^\/]+\/publications\/?$/.test(window.location.pathname),
        interaction: {
          name: "Leica Product Publications",
        },
      },
      {
        name: "Leica Product Downloads",
        isMatch: () => /^\/products\/.*\/p\/[^\/]+\/downloads\/?$/.test(window.location.pathname),
        interaction: {
          name: "Leica Product Downloads",
        },
      },
      {
        name: "Leica Applications Page",
        isMatch: () => /^\/applications\/?$/.test(window.location.pathname) || /^\/applications\/[^\/]+\/?$/.test(window.location.pathname),
        interaction: {
          name: "Leica Applications Page",
        },
      },
      {
        name: "Leica Application Category Page",
        isMatch: () => /^\/applications\/[^\/]+\/[^\/]+.*\/?$/.test(window.location.pathname),
        interaction: {
          name: "Leica Application Category Page",
        },
      },
      {
        name: "Leica Service Page",
        isMatch: () => /^\/service\/?$/.test(window.location.pathname),
        interaction: {
          name: "Leica Service Page",
        },
      },
      {
        name: "Leica Service Product",
        isMatch: () => /^\/service\/p\/[^\/]+\/?$/.test(window.location.pathname),
        interaction: {
          name: "Leica Service Product",
        },
      },
      {
        name: "Leica Science Lab Home",
        isMatch: () => /^\/science-lab\/science-lab-home\/?$/.test(window.location.pathname),
        interaction: {
          name: "Leica Science Lab Home",
        },
      },
      {
        name: "Leica Science Lab Page",
        isMatch: () => /^\/science-lab\/(?!science-lab-home).+/.test(window.location.pathname),
        interaction: {
          name: "Leica Science Lab Page",
        },
      },
      {
        name: "Leica Campaign Landing Page",
        isMatch: () => /^\/c\/.*$/.test(window.location.pathname),
        interaction: {
          name: "Leica Campaign Landing Page",
        },
      },
      {
        name: "Leica News",
        isMatch: () => /^\/company\/news\/?$/.test(window.location.pathname),
        interaction: {
          name: "Leica News",
        },
      },
      {
        name: "Leica Events",
        isMatch: () => /^\/company\/events\/?$/.test(window.location.pathname),
        interaction: {
          name: "Leica Events",
        },
      },
      {
        name: "Leica Cart Page",
        isMatch: () => window.location.hostname === "shop.leica-microsystems.com" && /^\/us\/en\/cart\.html$/.test(window.location.pathname),
        interaction: {
          name: "Leica Cart Page",
        },
      },
      {
        name: "Leica Profile Account Page",
        isMatch: () => window.location.hostname === "shop.leica-microsystems.com" && /^\/us\/en\/profile\.html$/.test(window.location.pathname),
        interaction: {
          name: "Leica Profile Account Page",
        },
      },
      {
        name: "Leica Request a Quote Account Page",
        isMatch: () => window.location.hostname === "shop.leica-microsystems.com" && /^\/us\/en\/quotes\.html$/.test(window.location.pathname),
        interaction: {
          name: "Leica Request a Quote Account Page",
        },
      },
      {
        name: "Leica Login Page",
        isMatch: () => window.location.hostname === "shop.leica-microsystems.com" && /^\/us\/en\/login\.html$/.test(window.location.pathname),
        interaction: {
          name: "Leica Login Page",
        },
      },
      {
        name: "Leica Create an Account",
        isMatch: () => window.location.hostname === "shop.leica-microsystems.com" && /^\/us\/en\/registration\.html$/.test(window.location.pathname),
        interaction: {
          name: "Leica Create an Account",
        },
      },
      {
        name: "Leica Set Password",
        isMatch: () =>
          window.location.hostname === "shop.leica-microsystems.com" && /^\/us\/en\/set-password\.html.*$/.test(window.location.pathname),
        interaction: {
          name: "Leica Set Password",
        },
      },
      {
        name: "Leica Contact Us Page",
        isMatch: () => /^\/contact\/contact-us-online\/$/.test(window.location.pathname),
        interaction: {
          name: "Leica Contact Us Page",
        },
      },
      {
        name: "Leica Contact Us Thank You Page",
        isMatch: () => /^\/contact\/thank-you-for-your-request-registration$/.test(window.location.pathname),
        interaction: {
          name: "Leica Contact Us Thank You Page",
        },
      },
      {
        name: "Leica Contact Us Form",
        isMatch: () => /^\/contact\/contact-us-online-product-information\/?$/.test(window.location.pathname),
        interaction: {
          name: "Leica Contact Us Form",
        },
        listeners: [
          SalesforceInteractions.listener("submit", "form", (event) => {
            const checkbox = document.querySelector("#contactusonlineproductinformation-522188-contact_in_future");
            if (checkbox && checkbox.checked) {
              const emailField = event.target.querySelector('input[type="email"]');
              if (emailField) {
                const email = emailField.value.trim();

                // Email validation regex
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                const firstName = document.querySelector('input[data-dashlane-classification="name,first"]').value;
                const lastName = document.querySelector('input[data-dashlane-classification="name,last"]').value;
                if (email && emailRegex.test(email)) {
                  console.log("Valid email captured");
                  SalesforceInteractions.sendEvent({
                    interaction: {
                      name: "Leica Contact Form Email Provided",
                    },
                    user: {
                      attributes: {
                        emailAddress: email,
                        firstName: firstName,
                        lastName: lastName
                      },
                    },
                  });
                }
              }
            }
          }),
        ],
      },
      {
        name: "Leica Contact Us Service Support",
        isMatch: () => /^\/contact\/contact-us-online-service-support\/?$/.test(window.location.pathname),
        interaction: {
          name: "Leica Contact Us Service Support",
        },
        listeners: [
          SalesforceInteractions.listener("submit", "form", (event) => {
            const checkbox = document.querySelector("#contactusonlineservicesupport-522202-contact_in_future");
            if (checkbox && checkbox.checked) {
              const emailField = event.target.querySelector('input[type="email"]');
              if (emailField) {
                const email = emailField.value.trim();

                // Email validation regex
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                const firstName = document.querySelector('input[data-dashlane-classification="name,first"]').value;
                const lastName = document.querySelector('input[data-dashlane-classification="name,last"]').value;
                if (email && emailRegex.test(email)) {
                  console.log("Valid email captured from Service Support");
                  SalesforceInteractions.sendEvent({
                    interaction: {
                      name: "Leica Service Support Email Provided",
                    },
                    user: {
                      attributes: {
                        emailAddress: email,
                        firstName: firstName,
                        lastName: lastName
                      },
                    },
                  });
                }
              }
            }
          }),
        ],
      },
      {
        name: "Leica Contact Us Application Support",
        isMatch: () => /^\/contact\/contact-us-online-application-support\/?$/.test(window.location.pathname),
        interaction: {
          name: "Leica Contact Us Application Support",
        },
        listeners: [
          SalesforceInteractions.listener("submit", "form", (event) => {
            const checkbox = document.querySelector("#contactusonlineapplicationsupport-522197-contact_in_future");
            if (checkbox && checkbox.checked) {
              const emailField = event.target.querySelector('input[type="email"]');
              if (emailField) {
                const email = emailField.value.trim();

                // Email validation regex
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                const firstName = document.querySelector('input[data-dashlane-classification="name,first"]').value;
                const lastName = document.querySelector('input[data-dashlane-classification="name,last"]').value;
                if (email && emailRegex.test(email)) {
                  console.log("Valid email captured from Application Support");
                  SalesforceInteractions.sendEvent({
                    interaction: {
                      name: "Leica Application Support Email Provided",
                    },
                    user: {
                      attributes: {
                        emailAddress: email,
                        firstName: firstName,
                        lastName: lastName
                      },
                    },
                  });
                }
              }
            }
          }),
        ],
      },
    ],
  };

  SalesforceInteractions.initSitemap(config);
});
