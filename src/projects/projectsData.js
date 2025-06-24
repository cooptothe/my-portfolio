import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "The Spot",
    image: projectTwo,
    description: (
      <>
        <p>
          an app that makes it easier to find friends on a night out, by
          displaying a map filled with users, live events, and venues
        </p>
      </>
    ),
    github: "https://github.com/TechTitansGeaux/TheSpot",
  },
  2: {
    title: "Des Decpr Party Bundles",
    image: projectOne,
    description: (
      <>
        <p>
        An ecommerce app for party decor rental supplies, built with React Native and Shopify's Storefront API. This app allows users to browse a wide selection of party supplies, 
        create bundles, and customize their options before making a purchase.
        </p>
      </>
    ),
    github: "https://github.com/cooptothe/Des-Decor-Shopify-Storefront",
  },
  3: {
    title: "Galore Wayz",
    image: projectThree,
    description: (
      <>
        <p>
          a modern clothing store app that leverages cutting-edge
          technologies to provide users with an unparalleled shopping
          experience.
        </p>
      </>
    ),
    github: "https://apps.apple.com/us/app/galore-wayz/id6477831289",
  },
};

export default projects;
