import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Navigation from './nav/Navigation.js';
import About from "./about/About";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";

const App = () => {
  return  <Router>
  <Navigation />
  <Routes>
    <Route path="/" element={About} />
    <Route path="/skills" element={Skills} />
    <Route path="/projects" element={Projects} />
    <Route path="/contact" element={Contact} />
  </Routes>
    </Router>;
}

export default App;
