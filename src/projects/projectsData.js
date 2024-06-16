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
    title: "Thriller",
    image: projectOne,
    description: (
      <>
        <p>
          a mobile application for horror movie enthusiasts that allows users to
          discover trending, upcoming, top-rated, and classic horror movies
        </p>
      </>
    ),
    github: "https://github.com/cooptothe/Thriller",
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
