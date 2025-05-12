import React from "react";

interface workListProps {
  visibleItems: boolean;
  title: string;
  role: string;
  date: string;
  desc: string[];
}

const WorkList = ({ visibleItems, title, role, date, desc }: workListProps) => {
  return (
    <>
      <div className="absolute w-4 h-4 bg-gray-300 rounded-full -left-2"></div>
      <div
        className={`mb-10 ml-6 
        ${
          visibleItems
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full"
        } transition-all ease-out duration-700`}
      >
        <h3 className="text-xl font-semibold">
          {title} ○ {role}
        </h3>
        <p className="text-gray-600">{date}</p>
        <ul className="list-disc list-inside mt-4 space-y-1 text-white">
          {desc.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default WorkList;
