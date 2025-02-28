
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion } from '@/components/ui/motion';
import { Wallet, CreditCard } from 'lucide-react';

interface WalletOption {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
}

interface WalletSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectWallet: (walletId: string) => void;
}

const walletOptions: WalletOption[] = [
  {
    id: 'metamask',
    name: 'MetaMask',
    icon: <img src="/metamask.svg" alt="MetaMask" className="h-6 w-6" onError={(e) => {
      e.currentTarget.onerror = null;
      e.currentTarget.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTYuODQ1NCAyLjUyNDQxTDEzLjAwMDQgOC4yMzQ0MUwxNC40MDA0IDUuMTc0NDFMMTYuODQ1NCAyLjUyNDQxWiIgZmlsbD0iI0UxNzcyNiIgc3Ryb2tlPSIjRTE3NzI2IiBzdHJva2Utd2lkdGg9IjAuMTI1Ii8+PHBhdGggZD0iTTcuMTQ1MzYgMi41MjQ0MUw5LjU1NTM2IDUuMjE0NDFMOC4yOTUzNiA3LjEwNDQxTDEwLjkzNTQgOC4yMzQ0MUw2Ljk5NTM2IDguMjc0NDFMMy44MjUzNiA4LjA3NDQxTDcuMTQ1MzYgMi41MjQ0MVoiIGZpbGw9IiNFMjc2MjUiIHN0cm9rZT0iI0UyNzYyNSIgc3Ryb2tlLXdpZHRoPSIwLjEyNSIvPjxwYXRoIGQ9Ik0xNS42MDUzIDEzLjU4NDRMMTQuMjE1MyAxNi4zMjQ0TDE3Ljk4NTMgMTcuNDI0NEwxOS4xNTUzIDE0LjgzNDRMMTYuODQ1MyAxNi4wODQ0TDE1LjYwNTMgMTMuNTg0NFoiIGZpbGw9IiNFMjc2MjUiIHN0cm9rZT0iI0UyNzYyNSIgc3Ryb2tlLXdpZHRoPSIwLjEyNSIvPjxwYXRoIGQ9Ik0zLjgyNTI0IDE0LjgzNDRMNC45OTUyNCAxNy40MjQ0TDguNzY1MjQgMTYuMzI0NEw3LjM3NTI0IDEzLjU4NDRMNi4xMzUyNCAxNi4wODQ0TDMuODI1MjQgMTQuODM0NFoiIGZpbGw9IiNFMjc2MjUiIHN0cm9rZT0iI0UyNzYyNSIgc3Ryb2tlLXdpZHRoPSIwLjEyNSIvPjxwYXRoIGQ9Ik04LjY0NTI0IDkuOTA0NDFMMy44MjUyNCAxMS45ODQ0TDUuMDY1MjQgMTQuMzI0NEw3LjM3NTI0IDExLjgyNDRMOC42NDUyNCA5LjkwNDQxWiIgZmlsbD0iI0UyNzYyNSIgc3Ryb2tlPSIjRTI3NjI1IiBzdHJva2Utd2lkdGg9IjAuMTI1Ii8+PHBhdGggZD0iTTE1LjM0NTQgOS45MDQ0MUwxNi42MTU0IDExLjgyNDRMMTguOTI1NCAxNC4zMjQ0TDIwLjE2NTQgMTEuOTg0NEwxNS4zNDU0IDkuOTA0NDFaIiBmaWxsPSIjRTI3NjI1IiBzdHJva2U9IiNFMjc2MjUiIHN0cm9rZS13aWR0aD0iMC4xMjUiLz48cGF0aCBkPSJNOC43NjU0OCAxNi4zMjQ0TDcuMzc1NDggMTMuNTg0NEw4LjY0NTQ4IDExLjgyNDRMMTUuMzQ1NSAxMS44MjQ0TDE2LjYxNTUgMTMuNTg0NEwxNC4yMTU1IDE2LjMyNDRMOC43NjU0OCAxNi4zMjQ0WiIgZmlsbD0iI0QwQzBCMCIgc3Ryb2tlPSIjRDBDMEIwIiBzdHJva2Utd2lkdGg9IjAuMTI1Ii8+PC9zdmc+";
    }} />,
    description: 'Connect to your MetaMask wallet'
  },
  {
    id: 'phantom',
    name: 'Phantom',
    icon: <img src="/phantom.svg" alt="Phantom" className="h-6 w-6" onError={(e) => {
      e.currentTarget.onerror = null;
      e.currentTarget.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJ4PSI4IiBmaWxsPSIjYjA1MGZmIi8+PHBhdGggZD0iTTEzLjA0MSA1SDcuNTY0QzYuODk5IDUgNi4zNDYgNS40NDggNi4xNTUgNi4wNjJMNCA5Ljc3N0M0IDEwLjI0MiA0LjQzIDEwLjYyMiA0Ljk2MiAxMC42MjJINi4zNTJDNi42OTQgMTAuNjIyIDYuOTcyIDEwLjg2MiA2Ljk3MiAxMS4xNTVDNi45NzIgMTEuNDQ4IDYuNjk0IDExLjY4OCA2LjM1MiAxMS42ODhINC43MkM0LjMyMiAxMS42ODggNCA1Ljc0NiA0IDEyLjEzN0M0IDEyLjQzIDQuMTg2IDEyLjczNCA0LjU0OCAxMi43MzRINS45MzhDNi4yOCAxMi43MzQgNi41NTggMTIuOTczIDYuNTU4IDEzLjI2N0M2LjU1OCAxMy41NiA2LjI4IDEzLjggNS45MzggMTMuOEg0LjkwMUw0LjkgMTMuOEg0Ljg5OEM0LjQwMiAxMy44IDQgMTQuMTggNCAuMTQ2NzFDNCAxNC43MzcgNC40OTEgMTUuMjA1IDUuMDg0IDE1LjIwNUg2LjYxNEM2Ljk1NiAxNS4yMDUgNy4yMzQgMTUuNDQ1IDcuMjM0IDE1LjczOEM3LjIzNCAxNi4wMzEgNi45NTYgMTYuMjcxIDYuNjE0IDE2LjI3MUg1LjIyNEM0LjU0NyAxNi4yNzEgNCA4LjQ0MyA0IDE2LjgyMUw0IDE2LjgyMkM0IDE3LjQ3MiA0LjU4MyAxOCA1LjMwMiAxOEgxNS4yOEMxNi4yNzEgMTggMTcuNTM5IDE3LjA5OSAxNy44ODEgMTYuMkgyMFYxNS4xMzRIMTguNDEzQzE4LjUwNiAxNC45MTUgMTguNTYxIDE0LjY4IDE4LjU2MSAxNC40NDdWMTQuMDc5QzE4LjU2MSAxMy4yMTMgMTkuMzM4IDEyLjUgMjAgMTIuNVYxMS40MzRDMTkuMzM4IDExLjQzNCAxNy45NzYgMTAuODY0IDE4LjA0NSA5LjU3NEMxOC4wNzUgOS4wMzQgMTkuMTkgOC42NTEgMjAgOC42NTFWNy41ODVDMTguODU2IDcuNTg1IDE4LjE3NCA3LjIwMiAxOC4wNDUgNi42OThDMTggNi41MjkgMTggNi4zNTkgMTggNi4xOTVWNi4wMjFDMTggNS4wMjYgMTguODU2IDUgMTkuMDk3IDVIMG9WNi4wNjZIMTguNDEzQzE4LjI1NSA2LjI0MyAxOC4wNzUgNi41MjggMTguMDIgNi44MzJIMjBWNy44OThIMTcuODg1QzE3LjI3IDkuMzg3IDE1LjU2NSAxMC42MTYgMTMuMzY0IDEwLjYxNkgxMC41MzJDMTAuMTkgMTAuNjE2IDkuOTEyIDEwLjM3NiA5LjkxMiAxMC4wODNDOS45MTIgOS43OSAxMC4xOSA5LjU1IDEwLjUzMiA5LjU1SDEzLjI3NUMxNC44NCA5LjU1IDE2LjEyOCA4LjY0NSAxNi40NzMgNy41MzJIMTMuMzY0QzEzLjAyMiA3LjUzMiAxMi43NDQgNy4yOTIgMTIuNzQ0IDYuOTk5QzEyLjc0NCA2LjcwNiAxMy4wMjIgNi40NjYgMTMuMzY0IDYuNDY2SDE2LjM0NEMxNS44NjUgNS41NjIgMTQuNTUyIDUgMTMuMDQxIDVaIiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==";
    }} />,
    description: 'Connect to your Phantom wallet'
  },
  {
    id: 'coinbase',
    name: 'Coinbase Wallet',
    icon: <CreditCard className="h-6 w-6 text-blue-500" />,
    description: 'Connect to Coinbase Wallet'
  },
  {
    id: 'walletconnect',
    name: 'WalletConnect',
    icon: <Wallet className="h-6 w-6 text-blue-600" />,
    description: 'Connect using WalletConnect'
  }
];

const WalletSelectModal: React.FC<WalletSelectModalProps> = ({
  isOpen,
  onClose,
  onSelectWallet
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md bg-white rounded-xl shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-semibold text-trustone-900">
            Connect your wallet
          </DialogTitle>
          <p className="text-center text-trustone-600 mt-2">
            Select a wallet to connect to this application
          </p>
        </DialogHeader>

        <div className="mt-6 space-y-3">
          {walletOptions.map((wallet) => (
            <motion.div
              key={wallet.id}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="group cursor-pointer"
              onClick={() => onSelectWallet(wallet.id)}
            >
              <div className="flex items-center p-4 rounded-lg border border-trustone-200 hover:border-trustaccent-400 hover:bg-trustaccent-50 transition-all duration-200">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-trustone-100 group-hover:bg-white transition-colors">
                  {wallet.icon}
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="font-medium text-trustone-900 group-hover:text-trustaccent-700 transition-colors">
                    {wallet.name}
                  </h3>
                  <p className="text-sm text-trustone-500">{wallet.description}</p>
                </div>
                <div className="h-8 w-8 flex items-center justify-center rounded-full bg-trustaccent-100 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-trustaccent-500">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-trustone-200">
          <p className="text-xs text-center text-trustone-500">
            By connecting your wallet, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WalletSelectModal;
