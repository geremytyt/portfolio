import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const linkStyle = (path) => {
    return `hover:text-gray-500 transition-colors duration-300 pb-1 ${
      isActive(path) ? 'border-b-2 border-gray-500' : ''
    }`;
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
        ${isScrolled 
        ? 'bg-white shadow-lg h-16 backdrop-blur-sm bg-opacity-90' 
        : 'bg-transparent h-24'
      } w-full`}
    >
      <div className="flex justify-between items-center h-full px-4 text-black w-full">
        
        {/* GT container */}
        <h1 className={`font-bold text-black hover:text-gray-600 transition-all duration-300
          ${isScrolled ? 'text-2xl' : 'text-3xl'} 
          bg-gray px-4 py-2 rounded-md inline-block`}>
          <Link to="/">GT</Link>
        </h1>
    
        <ul className="hidden md:flex">
          <li className="p-4">
            <Link to="/about" className={linkStyle('/')}>About</Link>
          </li>
          <li className="p-4">
            <Link to="/resume" className={linkStyle('/resume')}>Resume</Link>
          </li>
          <li className="p-4">
            <Link to="/skills" className={linkStyle('/skills')}>Skills</Link>
          </li>
          <li className="p-4">
            <Link to="/projects" className={linkStyle('/contact')}>Projects</Link>
          </li>
        </ul>
        
        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineClose size={20} className="text-black hover:text-gray-500 transition-colors duration-300" />
          ) : (
            <AiOutlineMenu size={20} className="text-black hover:text-gray-500 transition-colors duration-300" />
          )}
        </div>

        {/* Mobile Nav */}
        <ul className={nav 
          ? 'fixed left-0 top-0 w-full h-full border-r border-r-white bg-[#ffffff] ease-in-out duration-500' 
          : 'ease-in-out duration-500 fixed left-[-100%] w-full'}>
          {/* GT container */}
            <h1 className={`font-bold text-black hover:text-gray-600 transition-all duration-300
            ${isScrolled ? 'text-2xl' : 'text-3xl'} 
            bg-gray px-4 py-2 rounded-md inline-block`}>
            <Link to="/">GT</Link>
            </h1>   
          <li className="p-4 border-b border-gray-600">
            <Link to="/about" className={linkStyle('/')}>About</Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/resume" className={linkStyle('/resume')}>Resume</Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/skills" className={linkStyle('/skills')}>Skills</Link>
          </li>
          <li className="p-4">
            <Link to="/projects" className={linkStyle('/contact')}>Projects</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
