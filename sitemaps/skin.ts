//
// ======== FINAL, COMPLETE, AND UNTRUNCATED SCRIPT (v2) ========
// This version fixes the duplicate product issue.
//

// These interfaces are assumed to exist in your SFMC environment
interface CampaignComponentContext {
  services: {
    catalog: {
      findItem: (type: string, sku: string) => any;
    };
  };
  user?: {
    attributes?: {
      [key: string]: { value: string };
    };
  };
}

interface CampaignTemplateComponent {
    run(context: any): object;
}

// This class contains all the data and logic for getting recommendations.
export class SurveyResults {

  // This simplified function directly looks up recommendations without complex overrides.
  getProductRecommendations(
    gender: string,
    ageRange: string,
    primarySkinConcern: string,
    secondarySkinConcern: string
  ) {
    const productMatrix = {
      "\"FEMALE\" or \"SKIP\" and  age is <24": {
        "Dry skin": { heroProducts: [{ name: "YOUTH® Moisture Activating Serum", sku: "32583", rank: 1 },{ name: "Pomifera™ Rose: Anti-Aging Serum and Complete Moisturizer", sku: "33034", rank: 2 }], regimens: [{ name: "Pomifera™ Glow Up Bundle", sku: "89717", rank: 1 },{ name: "YOUTH® Advanced Hydration Regimen", sku: "89504", rank: 2 }], nutrition: [{ name: "Electrolyte+ Hydration & Focus Drink Blood Orange", sku: "21525", rank: 1 },{ name: "Collagen-9™ 40 servings (pouch)", sku: "21409", rank: 2 }] },
        "Dull Skin": { heroProducts: [{ name: "YOUTH® Superoxidant Boost C Serum™ 1 oz.", sku: "32640", rank: 1 },{ name: "YOUTH® Radiance C+E", sku: "32580", rank: 2 }], regimens: [{ name: "Pomifera™ Glow Up Bundle", sku: "89717", rank: 1 },{ name: "YOUTH® Advanced Hydration Regimen", sku: "89504", rank: 2 }], nutrition: [{ name: "Collagen-9™ 40 servings (pouch)", sku: "21409", rank: 1 },{ name: "Dream Serene™", sku: "21400", rank: 2 }] },
        "Oily skin or clogged pores": { heroProducts: [{ name: "YOUTH® Superoxidant Boost C Serum™ 1 oz.", sku: "32640", rank: 1 },{ name: "YOUTH® Luminous Gel Oil Cleanser", sku: "32566", rank: 2 }], regimens: [{ name: "Pomifera™ Glow Up Bundle", sku: "89717", rank: 1 },{ name: "YOUTH® Advanced Hydration Regimen", sku: "89504", rank: 2 }], nutrition: [{ name: "Optiflora® DI", sku: "21320", rank: 1 },{ name: "Electrolyte+ Hydration & Focus Drink Blood Orange", sku: "21525", rank: 2 }] },
        "Crow's feet and smile lines": { heroProducts: [{ name: "YOUTH Ageless™ Smoothing Wand for Eyes", sku: "32632", rank: 1 },{ name: "YOUTH Ageless™ Sculpting Wand for Face & Neck", sku: "32635", rank: 2 }], regimens: [{ name: "YOUTH® Anti-Aging Regimen", sku: "89454", rank: 1 },{ name: "Pomifera™ Glow Up Bundle", sku: "89717", rank: 2 }], nutrition: [{ name: "Vivix® Liquid Gel", sku: "21501", rank: 1 },{ name: "Collagen-9™ 40 servings (pouch)", sku: "21409", rank: 2 }] },
        "Fine lines and wrinkles": { heroProducts: [{ name: "Pomifera™ Rose: Anti-Aging Serum and Complete Moisturizer", sku: "33034", rank: 1 },{ name: "YOUTH® Activating Serum", sku: "32568", rank: 2 }], regimens: [{ name: "YOUTH® Anti-Aging Regimen", sku: "89454", rank: 1 },{ name: "YOUTH® Advanced Anti-Aging Regimen", sku: "89453", rank: 2 }], nutrition: [{ name: "Collagen-9™ 40 servings (pouch)", sku: "21409", rank: 1 },{ name: "Vivix® Liquid Gel", sku: "21501", rank: 2 }] },
        "Uneven tone or age spots": { heroProducts: [{ name: "YOUTH® Superoxidant Boost C Serum™ 1 oz.", sku: "32640", rank: 1 },{ name: "YOUTH® Radiance C+E", sku: "32580", rank: 2 }], regimens: [{ name: "Pomifera™ Glow Up Bundle", sku: "89717", rank: 1 },{ name: "YOUTH® Anti-Aging Regimen", sku: "89454", rank: 2 }], nutrition: [{ name: "Collagen-9™ 40 servings (pouch)", sku: "21409", rank: 1 },{ name: "Vivix® Liquid Gel", sku: "21501", rank: 2 }] },
        "Loss of firmness": { heroProducts: [{ name: "YOUTH Ageless™ Sculpting Wand for Face & Neck", sku: "32635", rank: 1 },{ name: "YOUTH® Activating Serum", sku: "32568", rank: 2 }], regimens: [{ name: "YOUTH® Anti-Aging Regimen", sku: "89454", rank: 1 },{ name: "YOUTH® Advanced Anti-Aging Regimen", sku: "89453", rank: 2 }], nutrition: [{ name: "Collagen-9™ 40 servings (pouch)", sku: "21409", rank: 1 },{ name: "Vivix® Liquid Gel", sku: "21501", rank: 2 }] },
        "Maintaining healthy-looking skin": { heroProducts: [{ name: "YOUTH® Superoxidant Boost C Serum™ 1 oz.", sku: "32640", rank: 1 },{ name: "YOUTH® Luminous Gel Oil Cleanser", sku: "32566", rank: 2 }], regimens: [{ name: "YOUTH® Advanced Hydration Regimen", sku: "89504", rank: 1 },{ name: "Pomifera™ Glow Up Bundle", sku: "89717", rank: 2 }], nutrition: [{ name: "Collagen-9™ 40 servings (pouch)", sku: "21409", rank: 1 },{ name: "Electrolyte+ Hydration & Focus Drink Blood Orange", sku: "21525", rank: 2 }] },
        "Dark circles under eyes": { heroProducts: [{ name: "YOUTH® Restoring Eye Treatment", sku: "32579", rank: 1 },{ name: "YOUTH Ageless™ Smoothing Wand for Eyes", sku: "32632", rank: 2 }], regimens: [{ name: "YOUTH® Anti-Aging Regimen", sku: "89454", rank: 1 },{ name: "YOUTH® Advanced Anti-Aging Regimen", sku: "89453", rank: 2 }], nutrition: [{ name: "Dream Serene™", sku: "21400", rank: 1 },{ name: "Electrolyte+ Hydration & Focus Drink Blood Orange", sku: "21525", rank: 2 }] },
      },
      "\"FEMALE\" or \"SKIP\" and age range is 25-34": {
        "Dry skin": { heroProducts: [{ name: "YOUTH® Moisture Activating Serum", sku: "32583", rank: 1 },{ name: "Pomifera™ Rose: Anti-Aging Serum and Complete Moisturizer", sku: "33034", rank: 2 }], regimens: [{ name: "YOUTH® Advanced Hydration Regimen", sku: "89504", rank: 1 },{ name: "Pomifera™ Glow Up Bundle", sku: "89717", rank: 2 }], nutrition: [{ name: "Electrolyte+ Hydration & Focus Drink Blood Orange", sku: "21525", rank: 1 },{ name: "Collagen-9™ 40 servings (pouch)", sku: "21409", rank: 2 }] },
        "Dull Skin": { heroProducts: [{ name: "YOUTH® Superoxidant Boost C Serum™ 1 oz.", sku: "32640", rank: 1 },{ name: "YOUTH® Radiance C+E", sku: "32580", rank: 2 }], regimens: [{ name: "YOUTH® Anti-Aging Regimen", sku: "89454", rank: 1 },{ name: "Pomifera™ Glow Up Bundle", sku: "89717", rank: 2 }], nutrition: [{ name: "Collagen-9™ 40 servings (pouch)", sku: "21409", rank: 1 },{ name: "Dream Serene™", sku: "21400", rank: 2 }] },
        "Oily skin or clogged pores": { heroProducts: [{ name: "YOUTH® Superoxidant Boost C Serum™ 1 oz.", sku: "32640", rank: 1 },{ name: "YOUTH® Luminous Gel Oil Cleanser", sku: "32566", rank: 2 }], regimens: [{ name: "Pomifera™ Glow Up Bundle", sku: "89717", rank: 1 },{ name: "YOUTH® Advanced Hydration Regimen", sku: "89504", rank: 2 }], nutrition: [{ name: "Optiflora® DI", sku: "21320", rank: 1 },{ name: "Electrolyte+ Hydration & Focus Drink Blood Orange", sku: "21525", rank: 2 }] },
        "Crow's feet and smile lines": { heroProducts: [{ name: "YOUTH Ageless™ Sculpting Wand for Face & Neck", sku: "32635", rank: 1 },{ name: "YOUTH Ageless™ Smoothing Wand for Eyes", sku: "32632", rank: 2 }], regimens: [{ name: "YOUTH® Anti-Aging Regimen", sku: "89454", rank: 1 },{ name: "Pomifera™ Glow Up Bundle", sku: "89717", rank: 2 }], nutrition: [{ name: "Vivix® Liquid Gel", sku: "21501", rank: 1 },{ name: "Collagen-9™ 40 servings (pouch)", sku: "21409", rank: 2 }] },
        "Fine lines and wrinkles": { heroProducts: [{ name: "YOUTH® Activating Serum", sku: "32568", rank: 1 },{ name: "YOUTH Ageless™ Sculpting Wand for Face & Neck", sku: "32635", rank: 2 }], regimens: [{ name: "YOUTH® Anti-Aging Regimen", sku: "89454", rank: 1 },{ name: "YOUTH® Advanced Anti-Aging Regimen", sku: "89453", rank: 2 }], nutrition: [{ name: "Collagen-9™ 40 servings (pouch)", sku: "21409", rank: 1 },{ name: "Vivix® Liquid Gel", sku: "21501", rank: 2 }] },
        "Uneven tone or age spots": { heroProducts: [{ name: "YOUTH® Superoxidant Boost C Serum™ 1 oz.", sku: "32640", rank: 1 },{ name: "Pomifera™ Rose: Anti-Aging Serum and Complete Moisturizer", sku: "33034", rank: 2 }], regimens: [{ name: "YOUTH® Anti-Aging Regimen", sku: "89454", rank: 1 },{ name: "YOUTH® Advanced Anti-Aging Regimen", sku: "89453", rank: 2 }], nutrition: [{ name: "Collagen-9™ 40 servings (pouch)", sku: "21409", rank: 1 },{ name: "Vivix® Liquid Gel", sku: "21501", rank: 2 }] },
        "Loss of firmness": { heroProducts: [{ name: "YOUTH Ageless™ Sculpting Wand for Face & Neck", sku: "32635", rank: 1 },{ name: "YOUTH® Activating Serum", sku: "32568", rank: 2 }], regimens: [{ name: "YOUTH® Anti-Aging Regimen", sku: "89454", rank: 1 },{ name: "YOUTH® Advanced Anti-Aging Regimen", sku: "89453", rank: 2 }], nutrition: [{ name: "Collagen-9™ 40 servings (pouch)", sku: "21409", rank: 1 },{ name: "Vivix® Liquid Gel", sku: "21501", rank: 2 }] },
        "Maintaining healthy-looking skin": { heroProducts: [{ name: "YOUTH® Superoxidant Boost C Serum™ 1 oz.", sku: "32640", rank: 1 },{ name: "Pomifera™ Rose: Anti-Aging Serum and Complete Moisturizer", sku: "33034", rank: 2 }], regimens: [{ name: "YOUTH® Advanced Anti-Aging Regimen", sku: "89453", rank: 1 },{ name: "YOUTH® Anti-Aging Regimen", sku: "89454", rank: 2 }], nutrition: [{ name: "Collagen-9™ 40 servings (pouch)", sku: "21409", rank: 1 },{ name: "Vivix™ Liquid Gel", sku: "21501", rank: 2 }] },
        "Dark circles under eyes": { heroProducts: [{ name: "YOUTH Ageless™ Smoothing Wand for Eyes", sku: "32632", rank: 1 },{ name: "YOUTH® Restoring Eye Treatment", sku: "32579", rank: 2 }], regimens: [{ name: "YOUTH® Anti-Aging Regimen", sku: "89454", rank: 1 },{ name: "YOUTH® Advanced Anti-Aging Regimen", sku: "89453", rank: 2 }], nutrition: [{ name: "Dream Serene™", sku: "21400", rank: 1 },{ name: "Electrolyte+ Hydration & Focus Drink Blood Orange", sku: "21525", rank: 2 }] },
        "Grooming": { heroProducts: [{ name: "Pomifera™ Beard Oil Spiced Leather", sku: "33040", rank: 1 },{ name: "Pomifera™ Rose: Anti-Aging Serum and Complete Moisturizer", sku: "33034", rank: 2 }], regimens: [{ name: "Pomifera™ Men's Grooming Collection", sku: "89747", rank: 1 },{ name: "Pomifera™ Glow Up Bundle", sku: "89717", rank: 2 }], nutrition: [{ name: "Collagen-9™ 40 servings (pouch)", sku: "21409", rank: 1 },{ name: "Electrolyte+ Hydration & Focus Drink Blood Orange", sku: "21525", rank: 2 }] },
      },
      "\"FEMALE\" or \"SKIP\" and age range is 35-49 or 50plus": {
        "Dry skin": { heroProducts: [{ name: "YOUTH® Moisture Activating Serum", sku: "32583", rank: 1 },{ name: "Pomifera™ Rose: Anti-Aging Serum and Complete Moisturizer", sku: "33034", rank: 2 }], regimens: [{ name: "YOUTH® Advanced Hydration Regimen", sku: "89504", rank: 1 },{ name: "YOUTH® Advanced Anti-Aging Regimen", sku: "89453", rank: 2 }], nutrition: [{ name: "Electrolyte+ Hydration & Focus Drink Blood Orange", sku: "21525", rank: 1 },{ name: "Collagen-9™ 40 servings (pouch)", sku: "21409", rank: 2 }] },
        "Dull Skin": { heroProducts: [{ name: "YOUTH® Superoxidant Boost C Serum™ 1 oz.", sku: "32640", rank: 1 },{ name: "YOUTH® Radiance C+E", sku: "32580", rank: 2 }], regimens: [{ name: "YOUTH® Advanced Anti-Aging Regimen", sku: "89453", rank: 1 },{ name: "YOUTH® Anti-Aging Regimen", sku: "89454", rank: 2 }], nutrition: [{ name: "Collagen-9™ 40 servings (pouch)", sku: "21409", rank: 1 },{ name: "Dream Serene™", sku: "21400", rank: 2 }] },
        "Oily skin or clogged pores": { heroProducts: [{ name: "YOUTH® Superoxidant Boost C Serum™ 1 oz.", sku: "32640", rank: 1 },{ name: "YOUTH® Luminous Gel Oil Cleanser", sku: "32566", rank: 2 }], regimens: [{ name: "YOUTH® Advanced Anti-Aging Regimen", sku: "89453", rank: 1 },{ name: "YOUTH® Anti-Aging Regimen", sku: "89454", rank: 2 }], nutrition: [{ name: "Optiflora® DI", sku: "21320", rank: 1 },{ name: "Electrolyte+ Hydration & Focus Drink Blood Orange", sku: "21525", rank: 2 }] },
        "Crow's feet and smile lines": { heroProducts: [{ name: "YOUTH Ageless™ Sculpting Wand for Face & Neck", sku: "32635", rank: 1 },{ name: "YOUTH Ageless™ Smoothing Wand for Eyes", sku: "32632", rank: 2 }], regimens: [{ name: "YOUTH® Advanced Anti-Aging Regimen", sku: "89453", rank: 1 },{ name: "YOUTH® Anti-Aging Regimen", sku: "89454", rank: 2 }], nutrition: [{ name: "Vivix® Liquid Gel", sku: "21501", rank: 1 },{ name: "Collagen-9™ 40 servings (pouch)", sku: "21409", rank: 2 }] },
        "Fine lines and wrinkles": { heroProducts: [{ name: "YOUTH® Activating Serum", sku: "32568", rank: 1 },{ name: "YOUTH Ageless™ Sculpting Wand for Face & Neck", sku: "32635", rank: 2 }], regimens: [{ name: "YOUTH® Advanced Anti-Aging Regimen", sku: "89453", rank: 1 },{ name: "YOUTH® Anti-Aging Regimen", sku: "89454", rank: 2 }], nutrition: [{ name: "Vivix® Liquid Gel", sku: "21501", rank: 1 },{ name: "Collagen-9™ 40 servings (pouch)", sku: "21409", rank: 2 }] },
        "Uneven tone or age spots": { heroProducts: [{ name: "YOUTH® Superoxidant Boost C Serum™ 1 oz.", sku: "32640", rank: 1 },{ name: "YOUTH® Radiance C+E", sku: "32580", rank: 2 }], regimens: [{ name: "YOUTH® Anti-Aging Regimen", sku: "89454", rank: 1 },{ name: "YOUTH® Advanced Anti-Aging Regimen", sku: "89453", rank: 2 }], nutrition: [{ name: "Vivix® Liquid Gel", sku: "21501", rank: 1 },{ name: "Collagen-9™ 40 servings (pouch)", sku: "21409", rank: 2 }] },
        "Loss of firmness": { heroProducts: [{ name: "YOUTH Ageless™ Sculpting Wand for Face & Neck", sku: "32635", rank: 1 },{ name: "YOUTH® Activating Serum", sku: "32568", rank: 2 }], regimens: [{ name: "YOUTH® Advanced Anti-Aging Regimen", sku: "89453", rank: 1 },{ name: "YOUTH® Anti-Aging Regimen", sku: "89454", rank: 2 }], nutrition: [{ name: "Collagen-9™ 40 servings (pouch)", sku: "21409", rank: 1 },{ name: "Vivix® Liquid Gel", sku: "21501", rank: 2 }] },
        "Maintaining healthy-looking skin": { heroProducts: [{ name: "YOUTH® Superoxidant Boost C Serum™ 1 oz.", sku: "32640", rank: 1 },{ name: "Pomifera™ Rose: Anti-Aging Serum and Complete Moisturizer", sku: "33034", rank: 2 }], regimens: [{ name: "YOUTH® Advanced Anti-Aging Regimen", sku: "89453", rank: 1 },{ name: "YOUTH® Anti-Aging Regimen", sku: "89454", rank: 2 }], nutrition: [{ name: "Collagen-9™ 40 servings (pouch)", sku: "21409", rank: 1 },{ name: "Vivix™ Liquid Gel", sku: "21501", rank: 2 }] },
        "Dark circles under eyes": { heroProducts: [{ name: "YOUTH Ageless™ Smoothing Wand for Eyes", sku: "32632", rank: 1 },{ name: "YOUTH® Restoring Eye Treatment", sku: "32579", rank: 2 }], regimens: [{ name: "YOUTH® Anti-Aging Regimen", sku: "89454", rank: 1 },{ name: "YOUTH® Advanced Anti-Aging Regimen", sku: "89453", rank: 2 }], nutrition: [{ name: "Dream Serene™", sku: "21400", rank: 1 },{ name: "Electrolyte+ Hydration & Focus Drink Blood Orange", sku: "21525", rank: 2 }] },
        "Grooming": { heroProducts: [{ name: "Pomifera™ Beard Oil Spiced Leather", sku: "33040", rank: 1 },{ name: "Pomifera™ Rose: Anti-Aging Serum and Complete Moisturizer", sku: "33034", rank: 2 }], regimens: [{ name: "Pomifera™ Men's Grooming Collection", sku: "89747", rank: 1 },{ name: "Pomifera™ Glow Up Bundle", sku: "89717", rank: 2 }], nutrition: [{ name: "Collagen-9™ 40 servings (pouch)", sku: "21409", rank: 1 },{ name: "Electrolyte+ Hydration & Focus Drink Blood Orange", sku: "21525", rank: 2 }] },
      },
      "\"MALE\" and age is <24 or age range is 25-34": {
        "Dry skin": { heroProducts: [{ name: "Pomifera™ Pure: Anti-Aging Serum and Complete Moisturizer", sku: "33081", rank: 1 },{ name: "YOUTH® Moisture Activating Serum", sku: "32583", rank: 2 }], regimens: [{ name: "YOUTH® Advanced Hydration Regimen", sku: "89504", rank: 1 },{ name: "YOUTH® Anti-Aging Regimen", sku: "89454", rank: 2 }], nutrition: [{ name: "Electrolyte+ Hydration & Focus Drink Blood Orange", sku: "21525", rank: 1 },{ name: "Collagen-9™ 40 servings (pouch)", sku: "21409", rank: 2 }] },
        "Dull Skin": { heroProducts: [{ name: "YOUTH® Superoxidant Boost C Serum™ 1 oz.", sku: "32640", rank: 1 },{ name: "YOUTH® Radiance C+E", sku: "32580", rank: 2 }], regimens: [{ name: "Pomifera™ Glow Up Bundle", sku: "89717", rank: 1 },{ name: "YOUTH® Advanced Hydration Regimen", sku: "89504", rank: 2 }], nutrition: [{ name: "Collagen-9™ 40 servings (pouch)", sku: "21409", rank: 1 },{ name: "Dream Serene™", sku: "21400", rank: 2 }] },
        "Oily skin or clogged pores": { heroProducts: [{ name: "YOUTH® Superoxidant Boost C Serum™ 1 oz.", sku: "32640", rank: 1 },{ name: "YOUTH® Luminous Gel Oil Cleanser", sku: "32566", rank: 2 }], regimens: [{ name: "Pomifera™ Glow Up Bundle", sku: "89717", rank: 1 },{ name: "YOUTH® Advanced Hydration Regimen", sku: "89504", rank: 2 }], nutrition: [{ name: "Optiflora® DI", sku: "21320", rank: 1 },{ name: "Electrolyte+ Hydration & Focus Drink Blood Orange", sku: "21525", rank: 2 }] },
        "Crow's feet and smile lines": { heroProducts: [{ name: "YOUTH Ageless™ Sculpting Wand for Face & Neck", sku: "32635", rank: 1 },{ name: "YOUTH Ageless™ Smoothing Wand for Eyes", sku: "32632", rank: 2 }], regimens: [{ name: "YOUTH® Anti-Aging Regimen", sku: "89454", rank: 1 },{ name: "Pomifera™ Glow Up Bundle", sku: "89717", rank: 2 }], nutrition: [{ name: "Vivix® Liquid Gel", sku: "21501", rank: 1 },{ name: "Collagen-9™ 40 servings (pouch)", sku: "21409", rank: 2 }] },
        "Fine lines and wrinkles": { heroProducts: [{ name: "YOUTH® Activating Serum", sku: "32568", rank: 1 },{ name: "YOUTH Ageless™ Sculpting Wand for Face & Neck", sku: "32635", rank: 2 }], regimens: [{ name: "YOUTH® Anti-Aging Regimen", sku: "89454", rank: 1 },{ name: "YOUTH® Advanced Anti-Aging Regimen", sku: "89453", rank: 2 }], nutrition: [{ name: "Collagen-9™ 40 servings (pouch)", sku: "21409", rank: 1 },{ name: "Vivix® Liquid Gel", sku: "21501", rank: 2 }] },
        "Uneven tone or age spots": { heroProducts: [{ name: "YOUTH® Superoxidant Boost C Serum™ 1 oz.", sku: "32640", rank: 1 },{ name: "YOUTH® Radiance C+E", sku: "32580", rank: 2 }], regimens: [{ name: "YOUTH® Anti-Aging Regimen", sku: "89454", rank: 1 },{ name: "YOUTH® Advanced Anti-Aging Regimen", sku: "89453", rank: 2 }], nutrition: [{ name: "Collagen-9™ 40 servings (pouch)", sku: "21409", rank: 1 },{ name: "Vivix® Liquid Gel", sku: "21501", rank: 2 }] },
        "Loss of firmness": { heroProducts: [{ name: "YOUTH Ageless™ Sculpting Wand for Face & Neck", sku: "32635", rank: 1 },{ name: "YOUTH® Activating Serum", sku: "32568", rank: 2 }], regimens: [{ name: "YOUTH® Anti-Aging Regimen", sku: "89454", rank: 1 },{ name: "YOUTH® Advanced Anti-Aging Regimen", sku: "89453", rank: 2 }], nutrition: [{ name: "Collagen-9™ 40 servings (pouch)", sku: "21409", rank: 1 },{ name: "Vivix® Liquid Gel", sku: "21501", rank: 2 }] },
        "Maintaining healthy-looking skin": { heroProducts: [{ name: "YOUTH® Superoxidant Boost C Serum™ 1 oz.", sku: "32640", rank: 1 },{ name: "Pomifera™ Rose: Anti-Aging Serum and Complete Moisturizer", sku: "33034", rank: 2 }], regimens: [{ name: "YOUTH® Advanced Anti-Aging Regimen", sku: "89453", rank: 1 },{ name: "YOUTH® Anti-Aging Regimen", sku: "89454", rank: 2 }], nutrition: [{ name: "Collagen-9™ 40 servings (pouch)", sku: "21409", rank: 1 },{ name: "Vivix™ Liquid Gel", sku: "21501", rank: 2 }] },
        "Dark circles under eyes": { heroProducts: [{ name: "YOUTH Ageless™ Smoothing Wand for Eyes", sku: "32632", rank: 1 },{ name: "YOUTH® Restoring Eye Treatment", sku: "32579", rank: 2 }], regimens: [{ name: "YOUTH® Anti-Aging Regimen", sku: "89454", rank: 1 },{ name: "YOUTH® Advanced Anti-Aging Regimen", sku: "89453", rank: 2 }], nutrition: [{ name: "Dream Serene™", sku: "21400", rank: 1 },{ name: "Electrolyte+ Hydration & Focus Drink Blood Orange", sku: "21525", rank: 2 }] },
        "Grooming": { heroProducts: [{ name: "Pomifera™ Beard Oil Spiced Leather", sku: "33040", rank: 1 },{ name: "Pomifera™ Rose: Anti-Aging Serum and Complete Moisturizer", sku: "33034", rank: 2 }], regimens: [{ name: "Pomifera™ Men's Grooming Collection", sku: "89747", rank: 1 },{ name: "Pomifera™ Glow Up Bundle", sku: "89717", rank: 2 }], nutrition: [{ name: "Collagen-9™ 40 servings (pouch)", sku: "21409", rank: 1 },{ name: "Electrolyte+ Hydration & Focus Drink Blood Orange", sku: "21525", rank: 2 }] },
      },
      "\"MALE\" and age range is 35-49 or 50plus": {
        "Dry skin": { heroProducts: [{ name: "Pomifera™ Pure: Anti-Aging Serum and Complete Moisturizer", sku: "33081", rank: 1 },{ name: "YOUTH® Moisture Activating Serum", sku: "32583", rank: 2 }], regimens: [{ name: "YOUTH® Advanced Hydration Regimen", sku: "89504", rank: 1 },{ name: "YOUTH® Anti-Aging Regimen", sku: "89454", rank: 2 }], nutrition: [{ name: "Electrolyte+ Hydration & Focus Drink Blood Orange", sku: "21525", rank: 1 },{ name: "Collagen-9™ 40 servings (pouch)", sku: "21409", rank: 2 }] },
        "Dull Skin": { heroProducts: [{ name: "YOUTH® Superoxidant Boost C Serum™ 1 oz.", sku: "32640", rank: 1 },{ name: "YOUTH® Radiance C+E", sku: "32580", rank: 2 }], regimens: [{ name: "Pomifera™ Glow Up Bundle", sku: "89717", rank: 1 },{ name: "YOUTH® Advanced Hydration Regimen", sku: "89504", rank: 2 }], nutrition: [{ name: "Collagen-9™ 40 servings (pouch)", sku: "21409", rank: 1 },{ name: "Dream Serene™", sku: "21400", rank: 2 }] },
        "Oily skin or clogged pores": { heroProducts: [{ name: "YOUTH® Superoxidant Boost C Serum™ 1 oz.", sku: "32640", rank: 1 },{ name: "YOUTH® Luminous Gel Oil Cleanser", sku: "32566", rank: 2 }], regimens: [{ name: "Pomifera™ Glow Up Bundle", sku: "89717", rank: 1 },{ name: "YOUTH® Advanced Hydration Regimen", sku: "89504", rank: 2 }], nutrition: [{ name: "Optiflora® DI", sku: "21320", rank: 1 },{ name: "Electrolyte+ Hydration & Focus Drink Blood Orange", sku: "21525", rank: 2 }] },
        "Crow's feet and smile lines": { heroProducts: [{ name: "YOUTH Ageless™ Sculpting Wand for Face & Neck", sku: "32635", rank: 1 },{ name: "YOUTH Ageless™ Smoothing Wand for Eyes", sku: "32632", rank: 2 }], regimens: [{ name: "YOUTH® Anti-Aging Regimen", sku: "89454", rank: 1 },{ name: "Pomifera™ Glow Up Bundle", sku: "89717", rank: 2 }], nutrition: [{ name: "Vivix® Liquid Gel", sku: "21501", rank: 1 },{ name: "Collagen-9™ 40 servings (pouch)", sku: "21409", rank: 2 }] },
        "Fine lines and wrinkles": { heroProducts: [{ name: "YOUTH® Activating Serum", sku: "32568", rank: 1 },{ name: "YOUTH Ageless™ Sculpting Wand for Face & Neck", sku: "32635", rank: 2 }], regimens: [{ name: "YOUTH® Anti-Aging Regimen", sku: "89454", rank: 1 },{ name: "YOUTH® Advanced Anti-Aging Regimen", sku: "89453", rank: 2 }], nutrition: [{ name: "Collagen-9™ 40 servings (pouch)", sku: "21409", rank: 1 },{ name: "Vivix® Liquid Gel", sku: "21501", rank: 2 }] },
        "Uneven tone or age spots": { heroProducts: [{ name: "YOUTH® Superoxidant Boost C Serum™ 1 oz.", sku: "32640", rank: 1 },{ name: "YOUTH® Radiance C+E", sku: "32580", rank: 2 }], regimens: [{ name: "YOUTH® Anti-Aging Regimen", sku: "89454", rank: 1 },{ name: "YOUTH® Advanced Anti-Aging Regimen", sku: "89453", rank: 2 }], nutrition: [{ name: "Collagen-9™ 40 servings (pouch)", sku: "21409", rank: 1 },{ name: "Vivix® Liquid Gel", sku: "21501", rank: 2 }] },
        "Loss of firmness": { heroProducts: [{ name: "YOUTH Ageless™ Sculpting Wand for Face & Neck", sku: "32635", rank: 1 },{ name: "YOUTH® Activating Serum", sku: "32568", rank: 2 }], regimens: [{ name: "YOUTH® Anti-Aging Regimen", sku: "89454", rank: 1 },{ name: "YOUTH® Advanced Anti-Aging Regimen", sku: "89453", rank: 2 }], nutrition: [{ name: "Collagen-9™ 40 servings (pouch)", sku: "21409", rank: 1 },{ name: "Vivix® Liquid Gel", sku: "21501", rank: 2 }] },
        "Maintaining healthy-looking skin": { heroProducts: [{ name: "YOUTH® Superoxidant Boost C Serum™ 1 oz.", sku: "32640", rank: 1 },{ name: "Pomifera™ Rose: Anti-Aging Serum and Complete Moisturizer", sku: "33034", rank: 2 }], regimens: [{ name: "YOUTH® Advanced Anti-Aging Regimen", sku: "89453", rank: 1 },{ name: "YOUTH® Anti-Aging Regimen", sku: "89454", rank: 2 }], nutrition: [{ name: "Collagen-9™ 40 servings (pouch)", sku: "21409", rank: 1 },{ name: "Vivix™ Liquid Gel", sku: "21501", rank: 2 }] },
        "Dark circles under eyes": { heroProducts: [{ name: "YOUTH Ageless™ Smoothing Wand for Eyes", sku: "32632", rank: 1 },{ name: "YOUTH® Restoring Eye Treatment", sku: "32579", rank: 2 }], regimens: [{ name: "YOUTH® Anti-Aging Regimen", sku: "89454", rank: 1 },{ name: "YOUTH® Advanced Anti-Aging Regimen", sku: "89453", rank: 2 }], nutrition: [{ name: "Dream Serene™", sku: "21400", rank: 1 },{ name: "Electrolyte+ Hydration & Focus Drink Blood Orange", sku: "21525", rank: 2 }] },
        "Grooming": { heroProducts: [{ name: "Pomifera™ Beard Oil Spiced Leather", sku: "33040", rank: 1 },{ name: "Pomifera™ Rose: Anti-Aging Serum and Complete Moisturizer", sku: "33034", rank: 2 }], regimens: [{ name: "Pomifera™ Men's Grooming Collection", sku: "89747", rank: 1 },{ name: "Pomifera™ Glow Up Bundle", sku: "89717", rank: 2 }], nutrition: [{ name: "Collagen-9™ 40 servings (pouch)", sku: "21409", rank: 1 },{ name: "Electrolyte+ Hydration & Focus Drink Blood Orange", sku: "21525", rank: 2 }] },
      }
    };

    const normalize = (str: string) => String(str || "").toLowerCase().replace(/\\"/g, '"').replace(/["']/g, "").replace(/\s+/g, " ").trim();

    const findDemographicKey = (gender: string, ageRange: string) => {
        const gKey = normalize(gender);
        const aKey = normalize(ageRange);
        for (const fullKey of Object.keys(productMatrix)) {
            const normalizedFullKey = normalize(fullKey);
            if (normalizedFullKey.includes(gKey) && normalizedFullKey.includes(aKey)) {
                return fullKey;
            }
        }
        return null;
    };

    const findConcernKey = (bucket: object, concern: string) => {
        const want = normalize(concern);
        for (const k of Object.keys(bucket)) {
            if (normalize(k) === want) return k;
        }
        for (const k of Object.keys(bucket)) {
            const n = normalize(k);
            if (n.includes(want) || want.includes(n)) return k;
        }
        return null;
    };

    const demoKey = findDemographicKey(gender, ageRange);

    if (!demoKey) {
        return { recommendations: { heroProducts: {}, regimen: {}, nutrition: {} }, chosenPrimaryConcern: primarySkinConcern };
    }

    const bucket = productMatrix[demoKey as keyof typeof productMatrix];
    const resultObj: any = { heroProducts: {}, regimen: {}, nutrition: {} };
    const concernsToProcess = [primarySkinConcern, secondarySkinConcern];

    concernsToProcess.forEach((rawConcern) => {
        if (!rawConcern) return;

        const concernKey = findConcernKey(bucket, rawConcern);
        const slice = concernKey ? bucket[concernKey as keyof typeof bucket] : { heroProducts: [], regimens: [], nutrition: [] };
        
        const pickTwo = (arr: any[]) => {
            if (!arr) return { rank1: null, rank2: null };
            const sorted = arr.slice().sort((a, b) => a.rank - b.rank);
            return {
                rank1: sorted[0] ? { name: sorted[0].name, sku: sorted[0].sku, tag: rawConcern } : null,
                rank2: sorted[1] ? { name: sorted[1].name, sku: sorted[1].sku, tag: rawConcern } : null,
            };
        };

        resultObj.heroProducts[rawConcern] = pickTwo(slice.heroProducts);
        resultObj.regimen[rawConcern] = pickTwo(slice.regimens);
        resultObj.nutrition[rawConcern] = pickTwo(slice.nutrition);
    });

    return {
        recommendations: resultObj,
        chosenPrimaryConcern: primarySkinConcern,
    };
  }

  getSurveyResultsPayload(context: CampaignComponentContext) {
    const normalizeAgeForMatrix = (gender: string, ageValue: string) => {
      const genderKey = gender.toUpperCase();
      if (genderKey === "MALE") {
        if (ageValue === "0-24" || ageValue === "25-34") return "\"MALE\" and age is <24 or age range is 25-34";
        if (ageValue === "35-49" || ageValue === "50+") return "\"MALE\" and age range is 35-49 or 50plus";
      } else {
        if (ageValue === "0-24") return "\"FEMALE\" or \"SKIP\" and  age is <24";
        if (ageValue === "25-34") return "\"FEMALE\" or \"SKIP\" and age range is 25-34";
        if (ageValue === "35-49" || ageValue === "50+") return "\"FEMALE\" or \"SKIP\" and age range is 35-49 or 50plus";
      }
      return null;
    }
    
    const gender = context?.user?.attributes?.["survey:KBaSb:TEeUZ"]?.value || "";
    const age_range = context?.user?.attributes?.["survey:KBaSb:EKcpH"]?.value || "";
    const primaryConcern = context?.user?.attributes?.["survey:KBaSb:Ze0OJ"]?.value || "";
    const secondary_concern = context?.user?.attributes?.["survey:KBaSb:0aGR3"]?.value || "";
    const multivitamin = context?.user?.attributes?.["survey:KBaSb:MLUE5"]?.value || "";
    const firstName = context?.user?.attributes?.["survey:KBaSb:DlHIM"]?.value || context?.user?.attributes?.firstName?.value;

    const normalizedAgeKey = normalizeAgeForMatrix(gender, age_range);
    if (!normalizedAgeKey) return { error: "Could not determine a valid age/gender key." };
    
    const recommendationsResult = this.getProductRecommendations(gender, normalizedAgeKey, primaryConcern, secondary_concern);
    const recommendations = recommendationsResult.recommendations;
    const chosenPrimaryConcern = recommendationsResult.chosenPrimaryConcern;

    let productMatches: any[] = [];
    try {
        ["heroProducts", "regimen", "nutrition"].forEach((category) => {
            const categoryData = recommendations[category as keyof typeof recommendations] || {};
            Object.keys(categoryData).forEach((concernKey) => {
                const ranks = categoryData[concernKey as keyof typeof categoryData];
                Object.keys(ranks).forEach((rankKey) => {
                    const productInfo = ranks[rankKey as keyof typeof ranks];
                    if (productInfo && productInfo.sku) {
                        const foundProduct = context.services.catalog.findItem("Product", productInfo.sku);
                        productMatches.push({ category: category, concern: concernKey, rank: rankKey, sku: productInfo.sku, name: productInfo.name, tag: productInfo.tag, product: foundProduct });
                    }
                });
            });
        });
    } catch (e) {
        return { error: "Failed during catalog lookup.", message: (e as Error).message };
    }
    
    const concernImageMap: Record<string, string> = { "Dry skin": "https://images.shaklee.com/smartskinquiz/skqi-dry.png", "Dull skin": "https://images.shaklee.com/smartskinquiz/skqi-dull.png", "Oily skin or clogged pores": "https://images.shaklee.com/smartskinquiz/skqi-oily.png", "Crow's feet and smile lines": "https://images.shaklee.com/smartskinquiz/skqi-crowsfeet.png", "Fine lines and wrinkles": "https://images.shaklee.com/smartskinquiz/skqi-wrinkles.png", "Uneven tone or age spots": "https://images.shaklee.com/smartskinquiz/skqi-uneven.png", "Loss of firmness": "https://images.shaklee.com/smartskinquiz/skqi-firmloss.png", "Maintaining healthy-looking skin": "https://images.shaklee.com/smartskinquiz/skqi-maintain.png", "Dark circles under eyes": "https://images.shaklee.com/smartskinquiz/skqi-darkcircles.png", Grooming: "https://images.shaklee.com/smartskinquiz/skqi-grooming.png" };

    const heroProductsArr: any[] = [];
    // The de-duplication logic has been removed from this section to fix the bug.
    [primaryConcern, secondary_concern].forEach((concernTag) => {
        if (!concernTag) return;
        
        const itemsForConcern = productMatches.filter((i) => i.category === "heroProducts" && i.tag === concernTag);
        
        const rank1Item = itemsForConcern.find((i) => i.rank === 'rank1');
        const rank2Item = itemsForConcern.find((i) => i.rank === 'rank2');
        
        const chosen = rank1Item || rank2Item;
        if (chosen) {
            chosen.iconUrl = concernImageMap[chosen.tag] || null;
            heroProductsArr.push(chosen);
        }
    });

    const regimenArr: any[] = [];
    const itemsForPrimaryRegimen = productMatches.filter((i) => i.category === "regimen" && i.tag === chosenPrimaryConcern);
    const chosenPrimaryRank1Regimen = itemsForPrimaryRegimen.find((i) => i.rank === "rank1");
    if (chosenPrimaryRank1Regimen) {
        chosenPrimaryRank1Regimen.iconUrl = concernImageMap[chosenPrimaryRank1Regimen.tag] || null;
        regimenArr.push(chosenPrimaryRank1Regimen);
    }
    
    let staticGummies: any = null;
    try {
        const rawStaticGummies = context.services.catalog.findItem("Product", "21514");
        if (rawStaticGummies) {
            staticGummies = {
                product: rawStaticGummies,
                tag: primaryConcern,
                iconUrl: concernImageMap[primaryConcern] || null
            };
        }
    } catch(e) {
        // Fail silently if gummies are not in catalog, do not crash.
    }

    const nutritionProducts = [primaryConcern, secondary_concern].map((concernTag) => {
        if (!concernTag) return null;
        const itemsForConcern = productMatches.filter((i) => i.category === "nutrition" && i.tag === concernTag);
        let chosen: any = null;
        if (multivitamin.trim().toUpperCase() === "YES") {
            chosen = itemsForConcern.find((i) => i.rank === "rank1");
        } else {
            chosen = itemsForConcern.find((i) => i.rank === "rank1") || itemsForConcern.find((i) => i.rank === "rank2");
        }
        if (!chosen) return null;
        chosen.iconUrl = concernImageMap[chosen.tag] || null;
        return chosen;
    }).filter(item => item !== null);

    const nutritionArr = staticGummies ? nutritionProducts.concat(staticGummies) : nutritionProducts;

    return { gender, age_range, primaryConcern, secondary_concern, multivitamin, firstName, heroProductsArr, regimenArr, nutritionArr, staticGummies };
  }
}

// This is the main entry point class that SFMC requires.
export class ServerSideMiscUserInfoTemplate implements CampaignTemplateComponent {
  run(context: CampaignComponentContext) { 
    const _userInfo = new SurveyResults();
    
    return {
      user: _userInfo.getSurveyResultsPayload(context),
    };
  }
}