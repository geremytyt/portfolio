import React from 'react';
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <>
      
      {/* Footer Content */}
      <div className='max-w-[1240px] mx-auto py-16 px-4 text-gray-300'>
        <div className='flex flex-col items-center space-y-12'>
          
          {/* Contact Section */}
          <div className='flex flex-col items-center'>
            <div className='space-y-4 flex flex-col items-center'>
              <div className='flex items-center gap-3 hover:text-black transition-colors'>
                <Mail className='w-5 h-5' />
                <a href='mailto:geremytanyentsen@gmail.com'>
                  geremytanyentsen@gmail.com
                </a>
              </div>
              <div className='flex items-center gap-3 hover:text-black transition-colors'>
                <Phone className='w-5 h-5' />
                <a href='tel:+1234567890'>
                  (+60) 184706811
                </a>
              </div>
              <div className='flex items-center gap-3 hover:text-black transition-colors'>
                <MapPin className='w-5 h-5' />
                <span>
                  Penang, Malaysia
                </span>
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className='flex flex-col items-center'>
            <div className='flex justify-center gap-8'>
              <a href="https://www.facebook.com/geremy.tanyentsen" target="_blank" rel="noopener noreferrer">
                <FaFacebookSquare size={30} className='hover:text-blue-500 cursor-pointer transition-colors' />
              </a>
              <a href="https://www.instagram.com/germy_tyt" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} className='hover:text-pink-500 cursor-pointer transition-colors' />
              </a>
              <a href="https://github.com/geremytyt" target="_blank" rel="noopener noreferrer">
                <FaGithubSquare size={30} className='hover:text-blue-700 cursor-pointer transition-colors' />
              </a>
              <a href="https://www.linkedin.com/in/geremy-tan-yen-tsen/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} className='hover:text-blue-700 cursor-pointer transition-colors' />
              </a>
            </div>
          </div>
          
          {/* Copyright */}
          <div className='text-center mt-8'>
            <p className='text-sm'>© {new Date().getFullYear()} Geremy Tan. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
