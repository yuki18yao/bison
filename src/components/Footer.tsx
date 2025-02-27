
import React from 'react';
import { motion } from '@/components/ui/motion';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-trustone-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-2"
          >
            <div className="flex items-center mb-4">
              <span className="text-2xl font-semibold">MediaTrust</span>
              <span className="ml-2 text-xs bg-trustaccent-700 text-trustaccent-100 px-2 py-0.5 rounded-full">Beta</span>
            </div>
            <p className="text-trustone-300 mb-6 max-w-md">
              Authenticate and verify digital content using blockchain technology. 
              Protect your intellectual property and combat misinformation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-trustone-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-trustone-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-trustone-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-medium mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-trustone-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-trustone-400 hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="text-trustone-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-trustone-400 hover:text-white transition-colors">Documentation</a></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-trustone-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-trustone-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-trustone-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-trustone-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </motion.div>
        </div>
        
        <div className="border-t border-trustone-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-trustone-400 text-sm">
            &copy; {new Date().getFullYear()} MediaTrust. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-trustone-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-trustone-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
