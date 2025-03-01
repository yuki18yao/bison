import React, { useState, useRef } from 'react';
import { motion } from '@/components/ui/motion';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Upload, Check, X } from 'lucide-react';
import { registerMediaOnBlockchain, VerifiedMedia, truncateAddress, formatTimestamp } from '@/utils/mediaUtils';

const VerificationSection: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<VerifiedMedia | null>(null);
  const [verificationFailed, setVerificationFailed] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [creator, setCreator] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      
      // Check file type
      const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'video/mp4'];
      if (!validTypes.includes(selectedFile.type)) {
        toast.error("Please select a valid image or video file");
        return;
      }
      
      // Check file size (10MB limit)
      if (selectedFile.size > 10 * 1024 * 1024) {
        toast.error("File size must be less than 10MB");
        return;
      }
      
      setFile(selectedFile);
      setVerificationResult(null);
      setVerificationFailed(false);
    }
  };

  const handleVerify = async () => {
    if (!file || !title || !description || !creator) {
      toast.error("Please complete all fields and select a file to verify");
      return;
    }
    
    try {
      setIsVerifying(true);
      
      // Register the media on blockchain
      const result = await registerMediaOnBlockchain(file, title, description, creator);
      
      setVerificationResult(result);
      setVerificationFailed(false);
      toast.success("Content successfully verified!");
      
    } catch (error) {
      console.error("Verification failed:", error);
      toast.error("Verification failed. Please try again.");
      setVerificationFailed(true);
    } finally {
      setIsVerifying(false);
    }
  };

  const resetVerification = () => {
    setFile(null);
    setVerificationResult(null);
    setVerificationFailed(false);
    setTitle('');
    setDescription('');
    setCreator('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <section id="verify" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-trustone-100 text-trustone-800 text-sm px-3 py-1 rounded-full mb-3">
            Verification
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-trustone-900 mb-4">Verify Content Authenticity</h2>
          <p className="text-lg text-trustone-600 max-w-3xl mx-auto">
            Upload content to check if it's been authenticated and verify who created it and when.
          </p>
        </div>

        {!verificationResult && !verificationFailed ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-subtle p-6 md:p-8 border border-trustone-100"
          >
            <div className="bg-trustone-50 border-2 border-dashed border-trustone-200 rounded-lg p-6 text-center mb-6">
              {file ? (
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-trustone-100 rounded-full flex items-center justify-center mb-3">
                    <Check className="h-8 w-8 text-trustone-600" />
                  </div>
                  <p className="text-trustone-800 font-medium">{file.name}</p>
                  <p className="text-trustone-500 text-sm mb-3">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="sm"
                    onClick={() => setFile(null)}
                    className="text-sm"
                  >
                    Change file
                  </Button>
                </div>
              ) : (
                <div
                  className="cursor-pointer"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <div className="w-16 h-16 bg-trustone-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Upload className="h-8 w-8 text-trustone-400" />
                  </div>
                  <p className="text-trustone-800 mb-1">
                    Drag and drop the file you want to verify or{" "}
                    <span className="text-trustone-600 hover:text-trustone-700 transition-colors">
                      browse files
                    </span>
                  </p>
                  <p className="text-trustone-500 text-sm">
                    Supports JPG, PNG, GIF, MP4 (Max 10MB)
                  </p>
                </div>
              )}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept="image/jpeg,image/png,image/gif,video/mp4"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-3 border border-trustone-200 rounded-lg mb-2"
              />
              <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-3 border border-trustone-200 rounded-lg mb-2"
              />
              <input
                type="text"
                placeholder="Creator"
                value={creator}
                onChange={(e) => setCreator(e.target.value)}
                className="w-full p-3 border border-trustone-200 rounded-lg mb-2"
              />
            </div>

            <Button
              onClick={handleVerify}
              disabled={isVerifying || !file}
              className="w-full bg-trustone-800 hover:bg-trustone-900 text-white py-6 text-lg disabled:opacity-50"
            >
              {isVerifying ? "Verifying..." : "Verify Content"}
            </Button>
          </motion.div>
        ) : verificationResult ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-subtle overflow-hidden border border-trustaccent-100"
          >
            <div className="bg-trustaccent-600 py-6 px-8 text-white text-center">
              <Check className="h-12 w-12 mx-auto mb-2" />
              <h3 className="text-2xl font-semibold">Content Verified</h3>
              <p className="text-trustaccent-50">This content is authentic and has been registered on the blockchain</p>
            </div>
            
            <div className="p-8">
              <div className="mb-6">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-trustone-100 mb-4">
                  <img 
                    src={verificationResult.mediaUrl} 
                    alt={verificationResult.title} 
                    className="object-contain w-full h-full rounded-lg"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-trustone-600 mb-1">Title</p>
                  <p className="font-medium text-trustone-800">{verificationResult.title}</p>
                </div>
                <div>
                  <p className="text-sm text-trustone-600 mb-1">Creator</p>
                  <p className="font-mono text-trustone-800 text-sm">{truncateAddress(verificationResult.creator)}</p>
                </div>
                <div>
                  <p className="text-sm text-trustone-600 mb-1">Registered on</p>
                  <p className="font-medium text-trustone-800">{formatTimestamp(verificationResult.timestamp)}</p>
                </div>
                <div>
                  <p className="text-sm text-trustone-600 mb-1">Status</p>
                  <p className="font-medium text-trustaccent-700 flex items-center">
                    <Check className="h-4 w-4 mr-1" /> Authentic
                  </p>
                </div>
              </div>
              
              <div className="mb-6 bg-trustone-50 rounded-lg p-4 border border-trustone-100">
                <p className="text-sm text-trustone-600 mb-1">Content Hash</p>
                <p className="font-mono text-trustone-800 text-sm break-all">{verificationResult.hash}</p>
              </div>
              
              {verificationResult.description && (
                <div className="mb-6">
                  <p className="text-sm text-trustone-600 mb-1">Description</p>
                  <p className="text-trustone-800">{verificationResult.description}</p>
                </div>
              )}
              
              <Button
                onClick={resetVerification}
                className="w-full bg-trustone-800 hover:bg-trustone-900 text-white"
              >
                Verify Another
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-subtle overflow-hidden border border-red-100"
          >
            <div className="bg-red-500 py-6 px-8 text-white text-center">
              <X className="h-12 w-12 mx-auto mb-2" />
              <h3 className="text-2xl font-semibold">Verification Failed</h3>
              <p className="text-red-50">This content could not be verified on the blockchain</p>
            </div>
            
            <div className="p-8 text-center">
              <p className="text-trustone-700 mb-6">
                The content you uploaded either hasn't been authenticated or may have been modified since it was registered.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={resetVerification}
                  className="bg-trustone-800 hover:bg-trustone-900 text-white"
                >
                  Try Again
                </Button>
                <Button
                  onClick={() => document.getElementById('authenticate')?.scrollIntoView({ behavior: 'smooth' })}
                  variant="outline"
                  className="border-trustone-300 text-trustone-700 hover:bg-trustone-50"
                >
                  Authenticate Content
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default VerificationSection;
