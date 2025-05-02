import React from 'react';
import { ChevronUp } from 'lucide-react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'Contact', to: 'contact' },
    { name: 'Education', to: 'education'},
  ];
  
  return (
    <footer className="py-12 bg-dark-900 border-t border-dark-700 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-primary-500">H</span>ari Om 
            </h3>
           
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-400 hover:text-primary-500 transition-colors duration-300 cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-dark-700 border border-dark-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white"
              />
              <button className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-r-lg transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-dark-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 flex items-center mb-4 md:mb-0">
            &copy; {currentYear} HariOm.
            All rights reserved.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center"
          >
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="p-2 bg-primary-500 hover:bg-primary-600 rounded-full cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-500/30"
            >
              <ChevronUp size={24} className="text-white" />
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;