import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from "./components/navbar";
import Hero from "./components/hero";
import AboutMe from "./components/aboutMe";
import Footer from "./components/footer";
import Cards from "./components/card";
import ResumeDownload from "./components/resume";
import ScrollToTop from './components/scrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skills" element={<Cards />} />
        <Route path="/resume" element={<ResumeDownload />} />
        {/* Redirect all unknown paths to home page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;