import React from "react";
import { motion } from "framer-motion";
import heroPic from "../assets/pics/heroPic.jpeg";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="bg-[#151414] text-white min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        {/* Main Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-[10vw] leading-none font-extrabold tracking-tight mb-2">
            GEREMY TAN
          </h1>
        </motion.div>

        {/* Typing Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[5vw] leading-none font-medium tracking-tight"
        >
          <ReactTyped
            strings={[
              "Software Engineer",
              "Mobile Developer",
              "Web Developer",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
