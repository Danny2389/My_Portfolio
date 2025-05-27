import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
       <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: 1 }}
>
  <div style={{ fontSize: "14px" }}>
    <Typewriter
      options={{
        strings: [
          "1.5 Year + Experience",
          "Data Scientist",
          "Passionate Machine Learner",
          "Committed Open Source Contributor",
          "Effective Problem Solver"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  </div>
</motion.div>

    )
}

export default Type;
