import React from 'react';
import { ReactTyped } from "react-typed";
import pic2 from "../assets/pics/pic2.jpg";

const Hero = () => {
  return (
    <div className="text-black">
      {/* Hero Section - Full viewport height */}
      <div className="h-screen flex items-center justify-center">
        <div className="max-w-[800px] w-full mx-auto text-center px-4">
          <div className="flex justify-center items-center">
            <div className="text-center">
            <p className="md:text-7xl sm:text-6xl text-3xl font-bold py-4">
                GEREMY TAN
            </p>

              <div className="flex justify-center">
                <ReactTyped
                  strings={[
                    
                    "Software Engineer",
                    "Mobile Developer",
                    "Web Developer",
                  ]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                >
                  <input
                    type="text"
                    className="md:text-5xl sm:text-4xl text-xl font-bold bg-transparent border-none outline-none text-center w-full"
                    readOnly
                  />
                </ReactTyped>
              </div>
            </div>
          </div>
          <br />
          <h2 className="text-black italic p-2 text-xl md:text-2xl">
            I am a fresh graduate software engineer with a passion in full-stack development. 
            I am excited to embrace new challenges and contribute to innovative solutions in the tech industry.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;