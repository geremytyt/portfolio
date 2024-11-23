import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const isActive = (path) => location.pathname === path;

  const linkStyle = (path) =>
    `transition-colors duration-300 pb-1 ${
      isScrolled ? "hover:text-gray-500 text-black" : "hover:text-gray-300 text-white"
    } ${
      isActive(path) ? (isScrolled ? "border-b-2 border-gray-500" : "border-b-2 border-gray-300") : ""
    }`;

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-white shadow-lg h-16 backdrop-blur-sm bg-opacity-90"
          : "bg-transparent h-24"
      } w-full`}
    >
      <div className="flex justify-between items-center h-full px-4 w-full">
        {/* GT Container */}
        <h1
          className={`font-bold ${
            isScrolled ? "text-black" : "text-white"
          } hover:text-gray-600 transition-all duration-300 ${
            isScrolled ? "text-3xl sm:text-4xl" : "text-4xl sm:text-5xl"
          }`}
        >
          <Link to="/">GT</Link>
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex">
          <li className="p-4">
            <Link to="/about" className={`${linkStyle("/about")} text-lg sm:text-xl`}>
              About
            </Link>
          </li>
          <li className="p-4">
            <Link to="/skills" className={`${linkStyle("/skills")} text-lg sm:text-xl`}>
              Skills
            </Link>
          </li>
          <li className="p-4">
            <Link to="/resume" className={`${linkStyle("/resume")} text-lg sm:text-xl`}>
              Work
            </Link>
          </li>
          <li className="p-4">
            <Link to="/project" className={`${linkStyle("/project")} text-lg sm:text-xl`}>
              Projects
            </Link>
          </li>
        </ul>

        {/* Menu Icon */}
        <div onClick={handleNav} className="block md:hidden">
          <AiOutlineMenu
            size={24}
            className={`transition-colors duration-300 ${
              isScrolled ? "text-black" : "text-white"
            } hover:text-gray-500`}
          />
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 transition-transform duration-500 ease-in-out transform ${
            nav ? "translate-x-0" : "-translate-x-full"
          } md:hidden ${
            isScrolled ? "bg-white bg-opacity-90 backdrop-blur-sm" : "bg-white"
          }`}
        >
          <div
            className={`flex items-center justify-between px-4 py-6 ${
              isScrolled ? "h-16" : "h-24"
            } transition-all duration-300`}
          >
            <h1
              className={`font-bold ${
                isScrolled ? "text-black" : "text-black"
              } ${isScrolled ? "text-3xl" : "text-4xl"} transition-all duration-300`}
            >
              <Link to="/" onClick={handleNav}>
                GT
              </Link>
            </h1>
            <button
              onClick={handleNav}
              className="hover:text-gray-700 transition-colors duration-300 bg-transparent border-none p-0"
            >
              <AiOutlineMenu
                size={28}
                className={`${isScrolled ? "text-black" : "text-black"}`}
              />
            </button>
          </div>
          <ul className="flex flex-col">
            <li className="p-4">
              <Link
                to="/about"
                onClick={handleNav}
                className="text-black font-bold text-xl hover:text-gray-700"
              >
                About
              </Link>
            </li>
            <li className="p-4">
              <Link
                to="/skills"
                onClick={handleNav}
                className="text-black font-bold text-xl hover:text-gray-700"
              >
                Skills
              </Link>
            </li>
            <li className="p-4">
              <Link
                to="/resume"
                onClick={handleNav}
                className="text-black font-bold text-xl hover:text-gray-700"
              >
                Work
              </Link>
            </li>
            <li className="p-4">
              <Link
                to="/project"
                onClick={handleNav}
                className="text-black font-bold text-xl hover:text-gray-700"
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
