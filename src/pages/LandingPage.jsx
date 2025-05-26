import React from "react";
import { motion } from "framer-motion";
import Home from "./Home";
import Skillset from "./Skillset";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";
import "../App.css";

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const LandingPage = () => {
  return (
    <div>
      {/* Home - Animate on mount */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
      >
        <Home />
      </motion.div>

      {/* Skillset */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariant}
      >
        <Skillset />
      </motion.div>

      {/* Projects */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariant}
      >
        <Projects />
      </motion.div>

      {/* Resume */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariant}
      >
        <Resume />
      </motion.div>

      {/* Contact */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariant}
      >
        <Contact />
      </motion.div>
    </div>
  );
};

export default LandingPage;
