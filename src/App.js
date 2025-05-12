import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navigation from "./pages/navbar";
import Hero from "./pages/hero";
import AboutMe from "./pages/aboutMe";
import Footer from "./pages/footer";
import Skills from "./pages/skills";
import ResumeDownload from "./pages/resume";
import Project from "./pages/project";
import ScrollToTop from "./components/scrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resume" element={<ResumeDownload />} />
        <Route path="/project" element={<Project />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
