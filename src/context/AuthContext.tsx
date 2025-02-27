
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from "sonner";

type AuthContextType = {
  isConnected: boolean;
  address: string | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);

  useEffect(() => {
    // Check if the user was previously connected
    const savedAddress = localStorage.getItem('walletAddress');
    if (savedAddress) {
      setAddress(savedAddress);
      setIsConnected(true);
    }
  }, []);

  const connectWallet = async () => {
    try {
      // Simulating connection to wallet
      // In a real app, this would interact with MetaMask or another wallet provider
      
      // Fake delay to simulate connection
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Generate a random address for demo purposes
      const demoAddress = '0x' + Array(40).fill(0).map(() => 
        Math.floor(Math.random() * 16).toString(16)
      ).join('');
      
      setAddress(demoAddress);
      setIsConnected(true);
      localStorage.setItem('walletAddress', demoAddress);
      
      toast.success("Wallet connected successfully!");
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      toast.error("Failed to connect wallet. Please try again.");
    }
  };

  const disconnectWallet = () => {
    setAddress(null);
    setIsConnected(false);
    localStorage.removeItem('walletAddress');
    toast.info("Wallet disconnected");
  };

  return (
    <AuthContext.Provider value={{ isConnected, address, connectWallet, disconnectWallet }}>
      {children}
    </AuthContext.Provider>
  );
};
