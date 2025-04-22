import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import CopyPopup from "./components/copypop/CopyPopup";
import Home from './pages/Home';
import Skill from './pages/Skillset';
import Project from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/PreLoader";
import ScrollToTop from "./components/ScrollToTop";

import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    // Disable right-click
    const disableContext = (e) => e.preventDefault();

    // Block key combinations
    const disableKeys = (e) => {
      if (
        (e.ctrlKey && ['u', 's'].includes(e.key.toLowerCase())) ||
        (e.ctrlKey && e.shiftKey && ['i', 'j'].includes(e.key.toLowerCase())) ||
        e.key === 'F12'
      ) {
        e.preventDefault();
      }
    };

    // Disable copy/cut/paste
    const disableClipboard = (e) => e.preventDefault();

    document.addEventListener('contextmenu', disableContext);
    document.addEventListener('keydown', disableKeys);
    document.addEventListener('cut', disableClipboard);
    document.addEventListener('paste', disableClipboard);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('contextmenu', disableContext);
      document.removeEventListener('keydown', disableKeys);
      document.removeEventListener('cut', disableClipboard);
      document.removeEventListener('paste', disableClipboard);
    };
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <CopyPopup />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skillset" element={<Skill />} />
          <Route path="/project" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
