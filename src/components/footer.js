import React from 'react';
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaLinkedin,
  FaEnvelope
} from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className="bg-[#151414] text-gray-300">
        <div className="max-w-[1240px] mx-auto py-8 px-4">
          
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://www.facebook.com/geremy.tanyentsen" target="_blank" rel="noopener noreferrer">
              <FaFacebookSquare size={30} className="hover:text-blue-500 transition-colors" />
            </a>
            <a href="https://www.instagram.com/germy_tyt" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} className="hover:text-pink-500 transition-colors" />
            </a>
            <a href="https://github.com/geremytyt" target="_blank" rel="noopener noreferrer">
              <FaGithubSquare size={30} className="hover:text-gray-400 transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/geremy-tan-yen-tsen/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} className="hover:text-blue-700 transition-colors" />
            </a>
            {/* Email Icon */}
            <a href="mailto:geremytanyentsen@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope size={30} className="hover:text-gray-400 transition-colors" />
            </a>
          </div>

          {/* Footer Note */}
          <p className="text-center text-sm">© {new Date().getFullYear()} Geremy Tan. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
