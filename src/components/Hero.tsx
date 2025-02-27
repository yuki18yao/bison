
import React from 'react';
import { motion } from '@/components/ui/motion';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAuthenticate = () => {
    const element = document.getElementById('authenticate');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center md:text-left"
          >
            <span className="inline-block bg-trustaccent-100 text-trustaccent-800 text-sm px-3 py-1 rounded-full mb-4">
              Blockchain Authentication
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-trustone-900">
              Authenticate Your Media with Blockchain
            </h1>
            <p className="text-lg md:text-xl text-trustone-600 mb-8 max-w-lg mx-auto md:mx-0">
              Prevent misinformation and verify content authenticity using our blockchain-powered authentication platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                onClick={scrollToAuthenticate}
                className="bg-trustaccent-500 hover:bg-trustaccent-600 text-white px-8 py-6 text-lg"
              >
                Authenticate Content
              </Button>
              <Button 
                variant="outline" 
                className="border-trustone-300 text-trustone-700 hover:bg-trustone-50 px-8 py-6 text-lg"
                onClick={() => document.getElementById('verify')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Verify Media
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-medium bg-trustone-100">
              <img 
                src="https://picsum.photos/seed/mediaauthentication/800/450" 
                alt="Media Authentication" 
                className="object-cover w-full h-full rounded-2xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-20 rounded-2xl"></div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center space-x-2 bg-white bg-opacity-90 backdrop-blur-sm p-2 rounded-lg">
                <div className="h-3 w-3 bg-trustaccent-500 rounded-full animate-bounce-subtle"></div>
                <span className="text-sm font-medium text-trustone-900">Authenticated with blockchain</span>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-trustaccent-100 rounded-full opacity-70 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-trustaccent-200 rounded-full opacity-70 blur-xl"></div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center mt-16"
        >
          <Button 
            variant="ghost" 
            className="text-trustone-500 hover:text-trustone-700 hover:bg-transparent group"
            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="mr-2">Learn more</span>
            <ChevronDown className="h-4 w-4 group-hover:animate-bounce-subtle" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
