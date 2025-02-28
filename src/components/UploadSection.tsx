
import React, { useState, useRef } from 'react';
import { motion } from '@/components/ui/motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Upload, Check, AlertCircle } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { registerMediaOnBlockchain, VerifiedMedia } from '@/utils/mediaUtils';
import WalletSelectModal from './WalletSelectModal';

const UploadSection: React.FC = () => {
  const { isConnected, address, connectWallet } = useAuth();
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [verifiedMedia, setVerifiedMedia] = useState<VerifiedMedia | null>(null);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
      setVerifiedMedia(null);
      setUploadProgress(0);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isConnected) {
      toast.error("Please connect your wallet first");
      return;
    }
    
    if (!file) {
      toast.error("Please select a file to upload");
      return;
    }
    
    if (!title.trim()) {
      toast.error("Please provide a title");
      return;
    }
    
    try {
      setIsUploading(true);
      
      // Simulate progress
      const interval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 90) {
            clearInterval(interval);
            return prev;
          }
          return prev + 10;
        });
      }, 300);
      
      // Register the media
      const media = await registerMediaOnBlockchain(
        file,
        title,
        description,
        address || '0x0000000000000000000000000000000000000000'
      );
      
      clearInterval(interval);
      setUploadProgress(100);
      
      setTimeout(() => {
        setVerifiedMedia(media);
        setIsUploading(false);
        toast.success("Media authenticated successfully!");
      }, 500);
      
    } catch (error) {
      console.error("Authentication failed:", error);
      toast.error("Authentication failed. Please try again.");
      setIsUploading(false);
    }
  };

  const resetForm = () => {
    setFile(null);
    setTitle('');
    setDescription('');
    setVerifiedMedia(null);
    setUploadProgress(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleOpenWalletModal = () => {
    setIsWalletModalOpen(true);
  };

  const handleCloseWalletModal = () => {
    setIsWalletModalOpen(false);
  };

  const handleSelectWallet = (walletId: string) => {
    connectWallet();
    setIsWalletModalOpen(false);
  };

  return (
    <section id="authenticate" className="py-20 bg-trustone-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-trustaccent-100 text-trustaccent-800 text-sm px-3 py-1 rounded-full mb-3">
            Authentication
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-trustone-900 mb-4">Authenticate Your Content</h2>
          <p className="text-lg text-trustone-600 max-w-3xl mx-auto">
            Upload your media to generate a cryptographic signature and register it on the blockchain, proving you're the original creator.
          </p>
        </div>
        
        {!verifiedMedia ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-subtle p-6 md:p-8"
          >
            {!isConnected ? (
              <div className="text-center py-10">
                <AlertCircle className="h-12 w-12 text-trustone-400 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-trustone-800 mb-2">Wallet Connection Required</h3>
                <p className="text-trustone-600 mb-6">
                  You need to connect your wallet to authenticate content on the blockchain.
                </p>
                <Button 
                  onClick={handleOpenWalletModal} 
                  className="bg-trustaccent-500 hover:bg-trustaccent-600 text-white"
                >
                  Connect Wallet
                </Button>
                <WalletSelectModal 
                  isOpen={isWalletModalOpen} 
                  onClose={handleCloseWalletModal} 
                  onSelectWallet={handleSelectWallet} 
                />
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="bg-trustone-50 border-2 border-dashed border-trustone-200 rounded-lg p-6 text-center">
                  {file ? (
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-trustaccent-100 rounded-full flex items-center justify-center mb-3">
                        <Check className="h-8 w-8 text-trustaccent-600" />
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
                        Drag and drop your file here or{" "}
                        <span className="text-trustaccent-600 hover:text-trustaccent-700 transition-colors">
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

                <div className="space-y-4">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-trustone-700 mb-1">
                      Title <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Enter a title for your content"
                      className="focus-animation"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-trustone-700 mb-1">
                      Description
                    </label>
                    <Textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Add a description for your content (optional)"
                      className="focus-animation min-h-[100px]"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isUploading || !file || !title.trim()}
                  className="w-full bg-trustaccent-500 hover:bg-trustaccent-600 text-white py-6 text-lg disabled:opacity-50"
                >
                  {isUploading ? (
                    <div className="flex items-center">
                      <span className="mr-2">Authenticating...</span>
                      <span>{uploadProgress}%</span>
                    </div>
                  ) : (
                    "Authenticate Content"
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-subtle overflow-hidden"
          >
            <div className="bg-trustaccent-600 py-6 px-8 text-white text-center">
              <Check className="h-12 w-12 mx-auto mb-2" />
              <h3 className="text-2xl font-semibold">Authentication Successful</h3>
            </div>
            
            <div className="p-8">
              <div className="mb-6 bg-trustone-50 rounded-lg p-4 border border-trustone-100">
                <p className="text-sm text-trustone-600 mb-1">Content Hash</p>
                <p className="font-mono text-trustone-800 text-sm break-all">{verifiedMedia.hash}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-trustone-600 mb-1">Title</p>
                  <p className="font-medium text-trustone-800">{verifiedMedia.title}</p>
                </div>
                <div>
                  <p className="text-sm text-trustone-600 mb-1">Creator</p>
                  <p className="font-mono text-trustone-800 text-sm">{verifiedMedia.creator}</p>
                </div>
                <div>
                  <p className="text-sm text-trustone-600 mb-1">Timestamp</p>
                  <p className="font-medium text-trustone-800">{new Date(verifiedMedia.timestamp).toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-trustone-600 mb-1">Status</p>
                  <p className="font-medium text-trustaccent-700 flex items-center">
                    <Check className="h-4 w-4 mr-1" /> Verified
                  </p>
                </div>
              </div>
              
              {verifiedMedia.description && (
                <div className="mb-6">
                  <p className="text-sm text-trustone-600 mb-1">Description</p>
                  <p className="text-trustone-800">{verifiedMedia.description}</p>
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => {
                    // In a real app, this would download the watermarked file
                    // For demo, we'll just open the URL
                    window.open(verifiedMedia.mediaUrl, '_blank');
                    toast.success("Verified content downloaded successfully");
                  }}
                  className="bg-trustaccent-500 hover:bg-trustaccent-600 text-white flex-1"
                >
                  Download Verified Content
                </Button>
                <Button
                  onClick={resetForm}
                  variant="outline"
                  className="border-trustone-300 text-trustone-700 hover:bg-trustone-50"
                >
                  Authenticate Another
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default UploadSection;
