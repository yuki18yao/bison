
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
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.3622 3L13.0497 8.43981L14.5299 5.15143L21.3622 3Z" fill="#E17726" stroke="#E17726" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2.63782 3L10.8755 8.50181L9.47016 5.15138L2.63782 3Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.4159 17.3893L16.3359 20.9623L20.9995 22.297L22.2889 17.4705L18.4159 17.3893Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1.72205 17.4705L3.00019 22.297L7.65258 20.9623L5.58494 17.3893L1.72205 17.4705Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.3825 11.3856L6.12573 13.4621L10.7264 13.6815L10.5891 8.69354L7.3825 11.3856Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.6175 11.3855L13.359 8.63159L13.2736 13.6815L17.8743 13.4621L16.6175 11.3855Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.65259 20.9623L10.4522 19.5487L8.02974 17.5068L7.65259 20.9623Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.5479 19.5487L16.3359 20.9623L15.9704 17.5068L13.5479 19.5487Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.3359 20.9623L13.5479 19.5487L13.7791 21.4718L13.7576 22.2159L16.3359 20.9623Z" fill="#D5BFB2" stroke="#D5BFB2" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.65259 20.9623L10.2426 22.2159L10.2318 21.4718L10.4522 19.5487L7.65259 20.9623Z" fill="#D5BFB2" stroke="#D5BFB2" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.2962 16.1068L7.96545 15.3815L9.65444 14.5564L10.2962 16.1068Z" fill="#233447" stroke="#233447" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.7038 16.1068L14.3455 14.5564L16.0454 15.3815L13.7038 16.1068Z" fill="#233447" stroke="#233447" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.65259 20.9623L8.04941 17.3893L5.58496 17.4705L7.65259 20.9623Z" fill="#CC6228" stroke="#CC6228" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15.9506 17.3893L16.3359 20.9623L18.4159 17.4705L15.9506 17.3893Z" fill="#CC6228" stroke="#CC6228" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.8743 13.4621L13.2736 13.6815L13.7039 16.1068L14.3456 14.5564L16.0454 15.3815L17.8743 13.4621Z" fill="#CC6228" stroke="#CC6228" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.96545 15.3815L9.6544 14.5564L10.2962 16.1068L10.7264 13.6815L6.12573 13.4621L7.96545 15.3815Z" fill="#CC6228" stroke="#CC6228" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.12573 13.4621L8.02972 17.5068L7.96545 15.3815L6.12573 13.4621Z" fill="#E27525" stroke="#E27525" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.0454 15.3815L15.9704 17.5068L17.8743 13.4621L16.0454 15.3815Z" fill="#E27525" stroke="#E27525" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.7264 13.6815L10.2961 16.1068L10.8504 19.1868L10.9466 15.2627L10.7264 13.6815Z" fill="#E27525" stroke="#E27525" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.2736 13.6815L13.0642 15.2535L13.1496 19.1868L13.7039 16.1068L13.2736 13.6815Z" fill="#E27525" stroke="#E27525" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.7039 16.1068L13.1496 19.1868L13.5479 19.5487L15.9704 17.5068L16.0454 15.3815L13.7039 16.1068Z" fill="#F5841F" stroke="#F5841F" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.96545 15.3815L8.02973 17.5068L10.4522 19.5487L10.8504 19.1868L10.2962 16.1068L7.96545 15.3815Z" fill="#F5841F" stroke="#F5841F" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.7576 22.2159L13.7791 21.4718L13.5695 21.2931H10.4306L10.2318 21.4718L10.2426 22.2159L7.65259 20.9623L8.56998 21.7159L10.3974 22.9999H13.5911L15.4293 21.7159L16.3359 20.9623L13.7576 22.2159Z" fill="#C0AC9D" stroke="#C0AC9D" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.5479 19.5487L13.1496 19.1868H10.8504L10.4522 19.5487L10.2318 21.4718L10.4306 21.2931H13.5695L13.7791 21.4718L13.5479 19.5487Z" fill="#161616" stroke="#161616" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21.754 8.36366L22.4514 5.21919L21.3622 3L13.5479 7.84547L16.6175 11.3855L20.8837 12.7867L21.8012 11.6933L21.3729 11.3856L22.0056 10.77L21.4728 10.3715L22.1055 9.85582L21.754 8.36366Z" fill="#763E1A" stroke="#763E1A" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1.54865 5.21919L2.25681 8.36366L1.89381 9.85582L2.52722 10.3715L1.99437 10.77L2.6279 11.3856L2.19872 11.6933L3.11627 12.7867L7.3825 11.3855L10.4522 7.84547L2.63782 3L1.54865 5.21919Z" fill="#763E1A" stroke="#763E1A" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20.8837 12.7867L16.6175 11.3855L17.8743 13.4621L15.9704 17.5068L18.4158 17.4705H22.2887L20.8837 12.7867Z" fill="#F5841F" stroke="#F5841F" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.3825 11.3855L3.11627 12.7867L1.72205 17.4705H5.58494L8.02972 17.5068L6.12573 13.4621L7.3825 11.3855Z" fill="#F5841F" stroke="#F5841F" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.2736 13.6815L13.5479 7.84548L14.5299 5.15137H9.47014L10.4522 7.84548L10.7264 13.6815L10.8397 15.2719L10.8505 19.1868H13.1496L13.1603 15.2719L13.2736 13.6815Z" fill="#F5841F" stroke="#F5841F" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
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
