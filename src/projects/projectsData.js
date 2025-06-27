import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";
import projectFour from "../assets/project-4.png";
import projectFive from "../assets/project-5.png";

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
    github: "https://github.com/cooptothe/galorewayz",
  },
  4: {
    title: "Thriller",
    image: projectFour,
    description: (
      <>
        <p>
        Thriller is a fully functional mobile application for Horror Movie enthusiasts built with React Native + Moviedb API that allows users to discover trending, 
        upcoming, top-rated, and classic horror movies. Users can also search for movies and explore details about specific movies and their cast.
        </p>
      </>
    ),
    github: "https://github.com/cooptothe/Thriller"
  },
  5: {
    title: "MLB Data Pipeline",
    image: projectFive,
    description: (
      <>
        <p>
        This tool scrapes MLB pregame odds from DraftKings and Pinnacle sportsbooks, processes the data to calculate Expected Value percentages (EV%) for each betting market, and identifies value bets based on Pinnacle’s no-vig implied probabilities. 
        By comparing Pinnacle’s market maker odds with DraftKings' lines, it highlights profitable betting opportunities.
        </p>
      </>
    ),
    github: "https://github.com/cooptothe/mlb_data_pipeline"
  },
};

export default projects;
