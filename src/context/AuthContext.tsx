import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from "sonner";
import { ethers } from 'ethers';

type WalletType = 'metamask' | 'walletconnect';

type AuthContextType = {
  isConnected: boolean;
  address: string | null;
  connectWallet: (walletType: WalletType) => Promise<void>;
  disconnectWallet: () => void;
  chainId: number | null;
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

  const [chainId, setChainId] = useState<number | null>(null);

  // Handle account changes
  const handleAccountsChanged = (accounts: string[]) => {
    if (accounts.length === 0) {
      disconnectWallet();
    } else {
      setAddress(accounts[0]);
      setIsConnected(true);
      localStorage.setItem('walletAddress', accounts[0]);
    }
  };

  // Handle chain changes
  const handleChainChanged = (chainId: string) => {
    setChainId(parseInt(chainId));
    window.location.reload();
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
      window.ethereum.on('chainChanged', handleChainChanged);
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        window.ethereum.removeListener('chainChanged', handleChainChanged);
      }
    };
  }, []);

  const connectWallet = async (walletType: WalletType) => {
    try {
      let provider;
      
      if (walletType === 'metamask') {
        if (!window.ethereum) {
          throw new Error('MetaMask is not installed');
        }
        provider = new ethers.BrowserProvider(window.ethereum);
      } else if (walletType === 'walletconnect') {
        // Add WalletConnect implementation here
        throw new Error('WalletConnect implementation pending');
      }

      if (!provider) {
        throw new Error('No provider available');
      }

      const accounts = await provider.send('eth_requestAccounts', []);
      const network = await provider.getNetwork();
      
      setChainId(Number(network.chainId));
      setAddress(accounts[0]);
      setIsConnected(true);
      localStorage.setItem('walletAddress', accounts[0]);
      
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
    <AuthContext.Provider value={{ isConnected, address, connectWallet, disconnectWallet, chainId }}>
      {children}
    </AuthContext.Provider>
  );
};
