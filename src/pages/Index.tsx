
import React, { useEffect } from 'react';
import { motion } from '@/components/ui/motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import InfoCard from '@/components/InfoCard';
import UploadSection from '@/components/UploadSection';
import VerificationSection from '@/components/VerificationSection';
import Footer from '@/components/Footer';
import { AuthProvider } from '@/context/AuthContext';
import { 
  Upload, 
  Shield, 
  Download, 
  Share2, 
  CheckCircle2, 
  Database,
  FileText
} from 'lucide-react';

const Index = () => {
  // Smooth scroll implementation
  useEffect(() => {
    document.documentElement.classList.add('smooth-scroll');
    
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    
    document.addEventListener('click', handleLinkClick);
    
    return () => {
      document.documentElement.classList.remove('smooth-scroll');
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <Hero />
          
          <section id="how-it-works" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <span className="inline-block bg-trustone-100 text-trustone-800 text-sm px-3 py-1 rounded-full mb-3">
                  How It Works
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-trustone-900 mb-4">Blockchain Powered Authentication</h2>
                <p className="text-lg text-trustone-600 max-w-3xl mx-auto">
                  Our platform uses blockchain technology to create tamper-proof, verifiable records 
                  of digital content. Here's how the process works:
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <InfoCard
                  icon={Upload}
                  title="Upload & Watermark"
                  description="Upload your media file. We'll apply an invisible cryptographic watermark and generate metadata."
                  delay={0.1}
                />
                <InfoCard
                  icon={Database}
                  title="Blockchain Registration"
                  description="Your content is hashed and stored on the Story Protocol blockchain as immutable proof of authenticity."
                  delay={0.2}
                />
                <InfoCard
                  icon={Download}
                  title="Download Verified Media"
                  description="Download your watermarked content with embedded blockchain verification for sharing anywhere."
                  delay={0.3}
                />
                <InfoCard
                  icon={Share2}
                  title="Share on Social Media"
                  description="Post your verified content on social platforms with blockchain verification intact."
                  delay={0.4}
                />
                <InfoCard
                  icon={CheckCircle2}
                  title="Public Verification"
                  description="Anyone can verify the authenticity of your content by checking it against the blockchain record."
                  delay={0.5}
                />
                <InfoCard
                  icon={Shield}
                  title="Tamper Protection"
                  description="Any modification to the content will break the verification, ensuring integrity."
                  delay={0.6}
                />
              </div>
            </div>
          </section>
          
          <section className="py-20 bg-trustone-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <span className="inline-block bg-trustaccent-900 text-trustaccent-200 text-sm px-3 py-1 rounded-full mb-3">
                    Use Case Example
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">How Public Figures Can Benefit</h2>
                  <p className="text-lg text-trustone-300 mb-6">
                    Imagine a public figure recording an important announcement. Before social media distribution:
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                    <motion.li 
                      className="flex items-start" 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <span className="flex-shrink-0 w-6 h-6 bg-trustaccent-700 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm">1</span>
                      </span>
                      <p className="text-trustone-300">They upload the video to our platform for authentication.</p>
                    </motion.li>
                    <motion.li 
                      className="flex items-start" 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <span className="flex-shrink-0 w-6 h-6 bg-trustaccent-700 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm">2</span>
                      </span>
                      <p className="text-trustone-300">We generate a cryptographic watermark and register the content on blockchain.</p>
                    </motion.li>
                    <motion.li 
                      className="flex items-start" 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <span className="flex-shrink-0 w-6 h-6 bg-trustaccent-700 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm">3</span>
                      </span>
                      <p className="text-trustone-300">They download and share the authenticated video on social media.</p>
                    </motion.li>
                    <motion.li 
                      className="flex items-start" 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <span className="flex-shrink-0 w-6 h-6 bg-trustaccent-700 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm">4</span>
                      </span>
                      <p className="text-trustone-300">Viewers can verify the content's authenticity by checking it against the blockchain.</p>
                    </motion.li>
                  </ul>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="relative"
                >
                  <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden bg-trustone-800">
                    <img 
                      src="https://picsum.photos/seed/trustexample/800/450" 
                      alt="Public Figure Example" 
                      className="object-cover w-full h-full rounded-2xl"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-40 rounded-2xl"></div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center space-x-2 bg-black bg-opacity-70 backdrop-blur-sm p-3 rounded-lg">
                      <FileText className="h-5 w-5 text-trustaccent-400" />
                      <span className="text-sm font-medium text-white">Official Statement - Verified on Blockchain</span>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-trustaccent-900 rounded-full opacity-30 blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-trustaccent-800 rounded-full opacity-30 blur-xl"></div>
                </motion.div>
              </div>
            </div>
          </section>
          
          <UploadSection />
          <VerificationSection />
        </main>
        
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default Index;
