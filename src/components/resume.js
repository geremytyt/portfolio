import React, { useState, useEffect } from 'react';
import { FileDown } from "lucide-react";
import resume from '../assets/resume/Geremy Tan_Resume.jpg';
import Footer from "../components/footer";

const ResumePreview = () => {
  const [visibleItems, setVisibleItems] = useState([false, false]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Geremy Tan_Resume.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const timers = [0, 1].map((index) => 
      setTimeout(() => {
        setVisibleItems(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, 500 * (index + 1))
    );

    return () => timers.forEach(clearTimeout);
  }, []);

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
          {/* Timeline Item 1 */}
          <div className="absolute w-4 h-4 bg-gray-300 rounded-full -left-2"></div>
          <div className={`mb-10 ml-6 
            ${visibleItems[0] 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-full'
            } transition-all ease-out duration-700`}>
            <h3 className="text-xl font-semibold">
              WhatIf Solutions Sdn Bhd ○ Software Development Intern
            </h3>
            <p className="text-gray-600">FEB 2024 - AUG 2024</p>
            <ul className="list-disc list-inside mt-4 space-y-1 text-white">
              <li>
                Collaborated with cross-functional mobile and web development teams to
                design, develop, and implement applications.
              </li>
              <li>
                Developed dynamic and responsive web applications using React.js, SQL,
                HTML, CSS.
              </li>
              <li>
                Built cross-platform mobile applications using Dart, Flutter, Firebase,
                and FlutterFlow.
              </li>
              <li>
                Integrated APIs and third-party services into mobile and web applications
                to extend functionality.
              </li>
              <li>
                Performed quality assurance testing and debugging to ensure application
                reliability and adherence to client requirements.
              </li>
            </ul>
          </div>

          {/* Timeline Item 2 */}
          <div className="absolute w-4 h-4 bg-gray-300 rounded-full -left-2"></div>
          <div className={`mb-10 ml-6 
            ${visibleItems[1] 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-full'
            } transition-all ease-out duration-700`}>
            <h3 className="text-xl font-semibold">Sophic Automation Sdn Bhd ○ Software Engineer Intern</h3>
            <p className="text-gray-600">OCT 2021 - JAN 2022</p>
            <ul className="list-disc list-inside mt-4 space-y-1 text-white">
              <li>
                Worked under the Research & Development Department, experimenting with ideas and technologies, developing new solutions for specific problems.
              </li>
              <li>
                Developed WPF applications utilizing C#, SQL, WPF, and XAML.
              </li>
              <li>
                Tested, debugged, and added new features to applications.
              </li>
            </ul>
          </div>
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