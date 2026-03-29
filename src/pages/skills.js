import React, { useState, useEffect } from "react";
import { Globe, Server, Wrench } from "lucide-react";
import Footer from "./footer";
import { List, ListItem } from "@mui/material";

const Skills = () => {
  const [visibleCards, setVisibleCards] = useState([false, false, false]);

  const skills = [
    {
      title: "Frontend",
      skills: [
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "React.js",
        "Flutter",
        "Tailwind CSS",
        "Redux",
        "Next.js",
      ],
    },
    {
      title: "Backend",
      skills: ["Python", "Java", "C#", "PHP", "C", "SQL", "Node.js"],
    },
    {
      title: "Frameworks & Tools",
      skills: [
        ".NET Framework",
        "Firebase",
        "AWS",
        "Google Cloud Platform",
        "GitLab",
        "FlutterFlow",
        "MongoDB",
        "DBeaver",
        "GraphQL",
        "AI Tools",
      ],
    },
  ];

  useEffect(() => {
    const timers = visibleCards.map((_, index) =>
      setTimeout(() => {
        setVisibleCards((prev) => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, 500 * (index + 1))
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  const renderSkills = (list) => {
    return (
      <>
        {list.map((x, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-bold text-center py-8">{x.title}</h2>
            <div className="text-center font-medium flex-1">
              {x.skills.map((skill, i) => (
                <p key={i} className="py-2 border-b mx-8">
                  {skill}
                </p>
              ))}
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="bg-[#151414]">
      <div className="max-w-6xl mx-auto mt-10">
        <div className="text-center mb-8 text-white p-6">
          <h1 className="text-[65px] md:text-[200px] font-bold tracking-wider">
            SKILLS
          </h1>
          <div className="h-[2px] bg-white w-full max-w-7xl mx-auto"></div>
        </div>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 px-10">
          {/* Frontend Skills Card */}
          <div
            className={`w-full shadow-xl bg-gray-200 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 
            ${
              visibleCards[0]
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-full"
            } transition-all ease-out`}
          >
            <Globe className="w-20 h-20 mx-auto bg-gray-200 " />
            {renderSkills([skills[0]])}
          </div>

          {/* Backend Skills Card */}
          <div
            className={`w-full shadow-xl bg-gray-200 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 
            ${
              visibleCards[1]
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-full"
            } transition-all ease-out`}
          >
            <Server className="w-20 h-20 mx-auto bg-gray-200 p-4" />
            {renderSkills([skills[1]])}
          </div>

          {/* Frameworks & Tools Card */}
          <div
            className={`w-full shadow-xl bg-gray-200 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 
            ${
              visibleCards[2]
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-full"
            } transition-all ease-out`}
          >
            <Wrench className="w-20 h-20 mx-auto bg-gray-200 " />
            {renderSkills([skills[2]])}
          </div>
        </div>
        <div className="h-[2px] bg-white w-full max-w-7xl mx-auto mt-10"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Skills;
