
import React from 'react';
import { Button } from "@/components/ui/button";
import { useAuth } from '@/context/AuthContext';
import { truncateAddress } from '@/utils/mediaUtils';

const ConnectWalletButton: React.FC = () => {
  const { isConnected, address, connectWallet, disconnectWallet } = useAuth();

  return (
    <div className="relative">
      {!isConnected ? (
        <Button
          onClick={connectWallet}
          className="bg-trustaccent-500 hover:bg-trustaccent-600 text-white focus-animation transition-all duration-300"
        >
          Connect Wallet
        </Button>
      ) : (
        <Button
          onClick={disconnectWallet}
          variant="outline"
          className="border-trustaccent-500 text-trustaccent-700 hover:bg-trustaccent-50 focus-animation group transition-all duration-300"
        >
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-trustaccent-500 group-hover:animate-bounce-subtle"></span>
            {truncateAddress(address || '')}
          </span>
        </Button>
      )}
    </div>
  );
};

export default ConnectWalletButton;
