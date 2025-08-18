import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";
import projectFour from "../assets/project-4.png";
import projectFive from "../assets/project-5.png";
import projectSix from "../assets/project-6.png";
import projectSeven from "../assets/project-7.png";

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
    title: "ODDS Data Pipeline",
    image: projectFive,
    description: (
      <>
        <p>
        A real-time betting odds data pipeline built in Python that analyzes sharp vs recreational 
        sportsbook lines across major sports and surfaces high-EV betting opportunities. Alerts are sent to Discord with context, 
        Kelly staking suggestions, and bookmaker links.
        </p>
      </>
    ),
    github: "https://github.com/cooptothe/mlb_data_pipeline"
  },
  6: {
    title: "Matchup Analyzer",
    image: projectSix,
    description: (
      <>
        <p>
          An interactive baseball web app that visualizes batter vs. pitcher outcomes using historical MLB data.
          Built with Next.js (TypeScript), Tailwind CSS, and PapaParse for CSV parsing.
        </p>
      </>
    ),
    github: "https://github.com/cooptothe/matchup-analyzer"
},
  7: {
    title: "Smart Contracts",
    image: projectSeven,
    description: (
      <>
        <p>
          This repository contains a collection of Solidity smart contracts for various use cases. These contracts are written in Solidity, 
          a popular programming language for developing smart contracts on the Ethereum blockchain.
        </p>
      </>
    ),
    github: "https://github.com/cooptothe/myContracts"
  },
};

export default projects;
