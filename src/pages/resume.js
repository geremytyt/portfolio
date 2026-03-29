import React, { useState, useEffect } from "react";
import { FileDown } from "lucide-react";
import resume from "../assets/resume/Geremy Tan_Resume.jpg";
import Footer from "./footer";
import WorkList from "../components/workList";

const ResumePreview = () => {
  const work = [
    {
      title: "IFCA MSC Sdn Bhd",
      role: "Software Engineer",
      date: "DEC 2024 - Current",
      desc: [
        "Developed and maintained web applications using React.js, Node.js, JavaScript/TypeScript.",
        "Utilized SQL and DBeaver for database design and querying",
        "Designed and implemented GraphQL APIs for data fetching",
        "Identified, debugged, and resolved application issue",
        "Developed new features and modules for applications",
      ],
    },
    {
      title: "WhatIf Solutions Sdn Bhd",
      role: "Software Development Intern",
      date: "FEB 2024 - AUG 2024",
      desc: [
        "Collaborated with cross-functional mobile and web development teams to design, develop, and implement applications.",
        "Developed dynamic and responsive web applications using React.js, SQL, HTML, CSS.",
        "Built cross-platform mobile applications using Dart, Flutter, Firebase, and FlutterFlow.",
        "Integrated APIs and third-party services into mobile and web applications to extend functionality.",
        "Performed quality assurance testing and debugging to ensure application reliability and adherence to client requirements.",
      ],
    },
    {
      title: "Sophic Automation Sdn Bhd",
      role: "Software Engineer Intern",
      date: "OCT 2021 - JAN 2022",
      desc: [
        "Worked under the Research & Development Department, experimenting with ideas and technologies, developing new solutions for specific problems.",
        "Developed WPF applications utilizing C#, SQL, WPF, and XAML.",
        "Tested, debugged, and added new features to applications.",
      ],
    },
  ];

  const [visibleItems, setVisibleItems] = useState(
    new Array(work.length).fill(false)
  );

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Geremy Tan_Resume.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const timers = work.map((_, index) =>
      setTimeout(() => {
        setVisibleItems((prev) => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, 500 * (index + 1))
    );

    return () => timers.forEach(clearTimeout);
  }, [work.length]);

  return (
    <div className="text-white">
      {/* Timeline */}
      <div className="max-w-6xl mx-auto mt-10 px-4 md:px-0">
        <div className="text-center mb-8 text-white p-6">
          <h1 className="text-[65px] md:text-[200px] font-bold tracking-wider">
            WORK
          </h1>
          <div className="h-[2px] bg-white w-full max-w-7xl mx-auto"></div>
        </div>
        <div className="relative border-l-2 border-gray-300">
          {work.map((job, index) => (
            <WorkList
              key={index}
              visibleItems={visibleItems[index]}
              title={job.title}
              role={job.role}
              date={job.date}
              desc={job.desc}
            />
          ))}
        </div>

        {/* Download Button */}
        <div className="flex justify-center mt-10 mb-10">
          <button
            onClick={handleDownload}
            className="bg-white hover:bg-gray-300 text-gray-800 font-bold py-4 px-4 rounded inline-flex items-center transition-colors hover:text-white border-none shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <FileDown className="w-4 h-4 mr-2" />
            <span>Download Resume</span>
          </button>
        </div>

        <div className="h-[2px] bg-white w-full max-w-7xl mx-auto mt-10"></div>
      </div>
      <Footer />
    </div>
  );
};

export default ResumePreview;
