import React, { useState, useEffect } from 'react';
import { Globe, Server, Wrench } from 'lucide-react';
import Footer from "../components/footer";

const Cards = () => {
  const [visibleCards, setVisibleCards] = useState([false, false, false]);

  useEffect(() => {
    const timers = visibleCards.map((_, index) => 
      setTimeout(() => {
        setVisibleCards(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, 500 * (index + 1))
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="bg-[#151414]">
      <div className="max-w-6xl mx-auto mt-10">
        <div className="text-center mb-8 text-white p-6">
          <h1 className="text-[70px] md:text-[200px] font-bold tracking-wider">
            SKILLS
          </h1>
          <div className="h-[2px] bg-white w-full max-w-7xl mx-auto"></div>
        </div>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 px-10">
          {/* Frontend Skills Card */}
          <div className={`w-full shadow-xl bg-gray-200 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 
            ${visibleCards[0] 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-full'
            } transition-all ease-out`}>
            <Globe className="w-20 h-20 mx-auto bg-gray-200 " />
            <h2 className="text-2xl font-bold text-center py-8">Frontend</h2>
            <div className="text-center font-medium flex-1">
              <p className="py-2 border-b mx-8 mt-8">React.js</p>
              <p className="py-2 border-b mx-8">JavaScript</p>
              <p className="py-2 border-b mx-8">HTML</p>
              <p className="py-2 border-b mx-8">CSS</p>
              <p className="py-2 border-b mx-8">Flutter</p>
              <p className="py-2 border-b mx-8">Tailwind</p>
            </div>
          </div>

          {/* Backend Skills Card */}
          <div className={`w-full shadow-xl bg-gray-200 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 
            ${visibleCards[1] 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-full'
            } transition-all ease-out`}>
            <Server className="w-20 h-20 mx-auto bg-gray-200 p-4" />
            <h2 className="text-2xl font-bold text-center py-8">Backend</h2>
            <div className="text-center font-medium flex-1">
              <p className="py-2 border-b mx-8 mt-8">Python</p>
              <p className="py-2 border-b mx-8">Java</p>
              <p className="py-2 border-b mx-8">C#</p>
              <p className="py-2 border-b mx-8">PHP</p>
              <p className="py-2 border-b mx-8">C</p>
              <p className="py-2 border-b mx-8">SQL</p>
              <p className="py-2 border-b mx-8">Node.js</p>
            </div>
          </div>

          {/* Frameworks & Tools Card */}
          <div className={`w-full shadow-xl bg-gray-200 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 
            ${visibleCards[2] 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-full'
            } transition-all ease-out`}>
            <Wrench className="w-20 h-20 mx-auto bg-gray-200 " />
            <h2 className="text-2xl font-bold text-center py-8">Frameworks & Tools</h2>
            <div className="text-center font-medium flex-1">
              <p className="py-2 border-b mx-8 mt-8">.NET Framework</p>
              <p className="py-2 border-b mx-8">Firebase</p>
              <p className="py-2 border-b mx-8">AWS</p>
              <p className="py-2 border-b mx-8">Google Cloud Platform</p>
              <p className="py-2 border-b mx-8">GitLab</p>
              <p className="py-2 border-b mx-8">FlutterFlow</p>
              <p className="py-2 border-b mx-8">MongoDB</p>
            </div>
          </div>
        </div>
        <div className="h-[2px] bg-white w-full max-w-7xl mx-auto mt-10"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Cards;