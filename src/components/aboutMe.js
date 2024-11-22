import React from "react";
import pic2 from "../assets/pics/pic8.jpg";
import Footer from "../components/footer";

const AboutMe = () => {
  return (
    <div className="bg-[#151414] text-white p-6">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto mt-10">
        
        <div className="text-center mb-8">
          <h1 className="text-[80px] md:text-[200px] font-bold tracking-wider">
            ABOUT
          </h1>
          <div className="h-[2px] bg-white w-full max-w-7xl mx-auto"></div>
        </div>

        {/* Profile Content */}
        <div className="mt-8">
          {/* Wrapping Image */}
          <div className="flex justify-center bg-[#151414] text-white">
            <div className="relative max-w-[80%]">
              <img
                src={pic2}
                alt="Profile"
                className="float-left mr-6 mb-6 max-h-[300px] rounded-lg bg-orange-200"
              />
              <p className="text-lg">
                I am a fresh graduate software engineer with a passion in
                full-stack development. I am excited to embrace new challenges
                and contribute to innovative solutions in the tech industry.
              </p>
              <p className="text-lg mt-4">
                Throughout my life, I've learned the importance of setting personal goals and focusing on consistent progress rather than comparing myself to others. I believe that growth is a personal journey, and success comes from embracing challenges at your own pace. This mindset has helped me stay motivated, whether in college, exploring new technologies, or navigating life outside of work. I strive to create a balance between ambition and self-compassion, constantly reminding myself that every step forward, no matter how small, is a step toward achieving my dreams.
              </p>

               {/* Quote */}
              <blockquote className="text-lg italic text-gray-400 mt-8 border-l-4 border-gray-600 pl-4">
                "Set goals and work towards achieving them at your own pace, you're not in competition with anyone."
              </blockquote>

              <p className="text-lg mt-4">
                Outside of work, I love playing and watching sports, with football
                holding a special place in my heart. As a die-hard Manchester
                United fan, I've had my fair share of highs and lows—more lows
                recently, but I'm loyal to the end! One of my most memorable
                experiences was definitely visiting Old Trafford and watching a
                match live last November.
              </p>
              <p className="text-lg mt-4">
                I also love exploring new places, experiencing different cultures,
                and finding inspiration in the world around me. These experiences
                fuel my creativity and bring balance to my life.
              </p>
            </div>
          </div>
        </div>
        <div className="h-[2px] bg-white w-full max-w-7xl mx-auto mt-10"></div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutMe;
