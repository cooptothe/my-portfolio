import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Navigation from './nav/Navigation.js';
import About from "./about/About";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import "./styles/app.css";
import Background from './background/Background.js';

const App = () => {
  return  <Router>
  <Navigation />
  <Background />
  <Routes>
    <Route path="/" element={<About />} />
    <Route path="/skills" element={<Skills />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
    </Router>;
}

export default App;
