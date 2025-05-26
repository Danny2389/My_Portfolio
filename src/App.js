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
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/PreLoader";
import ScrollToTop from "./components/ScrollToTop";

import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Footersocial from "./components/Footer/Footersocial";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    const disableContext = (e) => e.preventDefault();

    const disableKeys = (e) => {
      const key = e.key.toLowerCase();
      if (
        (e.ctrlKey && ['u', 's'].includes(key)) ||
        (e.ctrlKey && e.shiftKey && ['i', 'j'].includes(key)) ||
        key === 'f12'
      ) {
        e.preventDefault();
      }
    };

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
          <Route path="/certificates" element={<Certificates />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
