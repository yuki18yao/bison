
import React, { useState, useEffect } from 'react';
import { motion } from '@/components/ui/motion';
import ConnectWalletButton from './ConnectWalletButton';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-white bg-opacity-80 backdrop-blur-md shadow-subtle'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <span className="text-trustone-900 font-semibold text-xl">MediaTrust</span>
            <span className="ml-2 text-xs bg-trustaccent-100 text-trustaccent-800 px-2 py-0.5 rounded-full">Beta</span>
          </motion.div>

          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex space-x-8"
          >
            <a href="#how-it-works" className="text-trustone-700 hover:text-trustone-900 transition-colors">
              How It Works
            </a>
            <a href="#authenticate" className="text-trustone-700 hover:text-trustone-900 transition-colors">
              Authenticate
            </a>
            <a href="#verify" className="text-trustone-700 hover:text-trustone-900 transition-colors">
              Verify
            </a>
          </motion.nav>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ConnectWalletButton />
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
