import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "The Spot",
    image: projectOne,
    description: (
      <>
        <p>
          an app that makes it easier to find friends on a night out, by
          displaying a map filled with users, live events, and venues •
          Developed a dynamic sign-up page using React and implemented a
          responsive image slider with auto-play functionality using Swiper
          library to showcase app features. • Integrated Google Maps API for
          location suggestions and utilized the Geolocation API for precise user
          positioning. • Implemented a user location pin using Google Maps API,
          and integrated socket.io for geolocation updates and real-time
          location tracking. • Developed a dynamic user profile set-up/settings
          page using Material-UI components and Redux for state management,
          enabling users to update profile information, select map icons,
          customize font sizes, and securely upload profile pictures. •
          Integrated speech-to-text functionality for improved accessibility.
        </p>
      </>
    ),
    github: "https://github.com/TechTitansGeaux/TheSpot",
  },
  2: {
    title: "Thriller",
    image: projectTwo,
    description: (
      <>
        <p>
          a mobile application for horror movie enthusiasts that allows users to
          discover trending, upcoming, top-rated, and classic horror movies •
          Implemented UI/UX design and integrated various functionalities using
          React Native. • Utilized Expo tools for seamless development and
          deployment of the mobile application. • Integrated Moviedb API to
          fetch and display movie information, enhancing user experience. •
          Developed features for viewing trending, upcoming, top-rated, and
          classic horror movies. • Implemented search functionality for users to
          search movies by title. • Designed and developed the movie details
          feature, providing in-depth information about specific movies,
          including cast and similar movies.
        </p>
      </>
    ),
    github: "https:/github.com/cooptothe/Thriller",
    demo: "https://expo.dev/@cooptothe/Thriller"
  },
  3: {
    title: "Resolution",
    image: projectThree,
    description: (
      <>
        <p>
          an innovative conflict resolution app designed to help users handle
          interpersonal conflicts effectively • Deployed the application to a
          production environment by setting up and configuring an Amazon EC2
          instance. • Implemented Google OAuth 2.0 authentication for the
          application using Passport.js and passport-google-oauth20, enhancing
          user security and enabling seamless sign-in with Google accounts. •
          Developed a user profile component in React using Bootstrap,
          efficiently managed state updates with Redux and facilitated API
          communication with Axios. • Implemented multer storage for seamless
          image uploads, enhancing the user experience and profile customization
          capabilities. • Designed a comprehensive schema for user data using
          MySQL in conjunction with Sequelize, ensuring efficient data
          management and database integrity.
        </p>
      </>
    ),
    github: "https://github.com/TechTitansGeaux/resolution",
  },
};

export default projects;