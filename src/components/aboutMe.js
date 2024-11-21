import React, { useState, useEffect } from 'react';
import pic2 from "../assets/pics/pic2.jpg";

const AboutMe = () => {
    return(
        <div className="min-h-screen flex items-center bg-white">
        <div className="max-w-[1200px] mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image Column */}
            <div className="w-full aspect-square overflow-hidden rounded-lg shadow-lg">
              <img 
                src={pic2}
                alt="Profile picture"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Text Column */}
            <div className="flex flex-col">
              <p className="md:text-5xl sm:text-4xl text-xl font-bold mb-6">About Me</p>
              <h2 className="text-black text-lg md:text-xl leading-relaxed">
                Outside of work, I love playing and watching sports, with football holding a special place in my heart. 
                As a die-hard Manchester United fan, I've had my fair share of highs and lows—more lows recently, but I'm loyal to the end! 
                One of my most memorable experiences was definitely visiting Old Trafford and watching a match live last November.        
                <br /><br />
                I also love exploring new places, experiencing different cultures, and finding inspiration in the world around me. 
                These experiences fuel my creativity and bring balance to my life.
              </h2>
            </div>
          </div>
        </div>
      </div>

    );
};

export default AboutMe;