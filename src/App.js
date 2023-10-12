import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Navigation from './nav/Navigation.js';
import About from "./about/About";

const App = () => {
  return  <Router>
  <Navigation />
  <Routes>
    <Route path="/" element={About} />
  </Routes>
    </Router>;
}

export default App;
