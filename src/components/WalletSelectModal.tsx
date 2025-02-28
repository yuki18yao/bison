
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion } from '@/components/ui/motion';

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
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="8" fill="#AB9FF2"/>
        <path d="M17.91 11.08C17.77 11.01 17.62 10.97 17.46 10.97H8.45C8.27 10.95 8.09 11.01 7.96 11.13C7.82 11.25 7.75 11.42 7.75 11.6V12.68C7.75 12.91 7.94 13.1 8.17 13.1H10.24C10.47 13.1 10.66 13.29 10.66 13.52V13.76C10.66 13.99 10.85 14.18 11.08 14.18H13.15C13.37 14.18 13.56 14.37 13.57 14.59V14.6C13.57 14.82 13.76 15.01 13.99 15.01H16.06C16.29 15.01 16.48 15.2 16.48 15.43V15.85C16.48 16.07 16.67 16.26 16.9 16.27H17.45C17.62 16.27 17.77 16.22 17.91 16.15C18.04 16.07 18.15 15.96 18.22 15.82C18.29 15.68 18.33 15.53 18.33 15.37V11.85C18.33 11.69 18.29 11.54 18.22 11.4C18.15 11.26 18.04 11.15 17.91 11.08Z" fill="white"/>
        <path d="M7.68 10.11H5.54C5.31 10.11 5.12 9.92 5.12 9.69V9.26C5.12 9.03 4.93 8.84 4.7 8.84H4.15C3.98 8.84 3.83 8.89 3.69 8.96C3.56 9.04 3.45 9.15 3.37 9.29C3.3 9.43 3.26 9.58 3.26 9.74V16.26C3.26 16.43 3.3 16.58 3.37 16.71C3.45 16.85 3.56 16.96 3.69 17.04C3.83 17.11 3.98 17.15 4.15 17.15H4.74C4.91 17.15 5.06 17.11 5.19 17.04C5.33 16.96 5.44 16.85 5.51 16.71C5.58 16.57 5.62 16.43 5.62 16.26V15.01C5.62 14.78 5.81 14.59 6.04 14.59H7.68C7.85 14.59 8.01 14.55 8.14 14.48C8.27 14.4 8.38 14.29 8.46 14.15C8.53 14.01 8.57 13.87 8.57 13.71V10.97C8.57 10.8 8.53 10.66 8.46 10.52C8.38 10.39 8.27 10.28 8.14 10.2C8.01 10.12 7.85 10.11 7.68 10.11Z" fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M16.48 7.33H14.9C14.71 7.33 14.54 7.43 14.44 7.59L13.07 9.74C13.01 9.83 12.92 9.89 12.82 9.9C12.71 9.91 12.61 9.87 12.54 9.79C12.47 9.71 12.44 9.6 12.47 9.49L12.9 8.01C12.95 7.85 12.94 7.68 12.87 7.53C12.8 7.38 12.66 7.26 12.5 7.21C12.34 7.16 12.18 7.17 12.03 7.25C11.89 7.32 11.78 7.45 11.73 7.61L11.3 9.49C11.3 9.54 11.28 9.58 11.26 9.62C11.23 9.65 11.19 9.68 11.15 9.7C11.1 9.71 11.06 9.72 11.01 9.71C10.96 9.71 10.92 9.68 10.88 9.65C10.84 9.61 10.81 9.56 10.8 9.51C10.79 9.46 10.79 9.41 10.81 9.36L11.67 7.02C11.72 6.87 11.72 6.7 11.65 6.55C11.58 6.4 11.44 6.28 11.28 6.23C11.12 6.18 10.96 6.19 10.81 6.27C10.66 6.35 10.55 6.47 10.5 6.64L9.63 9.41C9.62 9.45 9.6 9.49 9.57 9.52C9.54 9.55 9.5 9.58 9.46 9.59C9.42 9.6 9.37 9.6 9.33 9.59C9.29 9.58 9.24 9.56 9.21 9.53C9.17 9.49 9.15 9.45 9.14 9.4C9.13 9.36 9.13 9.31 9.14 9.27L10.01 6.73C10.06 6.58 10.05 6.41 9.98 6.26C9.91 6.11 9.78 5.99 9.61 5.94C9.45 5.89 9.28 5.91 9.14 5.98C8.99 6.06 8.88 6.19 8.83 6.35L7.96 9.31C7.91 9.47 7.82 9.61 7.69 9.72C7.57 9.82 7.42 9.88 7.26 9.88H5.41C5.22 9.88 5.05 9.97 4.94 10.13C4.84 10.28 4.83 10.47 4.9 10.64L8.06 17.92C8.12 18.05 8.21 18.17 8.33 18.25C8.46 18.32 8.61 18.35 8.76 18.32C8.91 18.29 9.04 18.21 9.14 18.08C9.23 17.96 9.28 17.81 9.27 17.65L9.2 16.83C9.19 16.72 9.22 16.61 9.29 16.53C9.37 16.44 9.47 16.39 9.58 16.39C9.69 16.4 9.78 16.44 9.85 16.52C9.92 16.6 9.96 16.71 9.96 16.82L10.04 17.79C10.05 17.94 10.12 18.09 10.23 18.19C10.34 18.3 10.48 18.35 10.63 18.35C10.79 18.34 10.93 18.28 11.03 18.17C11.13 18.06 11.18 17.91 11.17 17.75L11.1 16.68C11.09 16.57 11.12 16.46 11.2 16.38C11.28 16.29 11.38 16.25 11.49 16.25C11.6 16.25 11.7 16.3 11.77 16.38C11.84 16.46 11.87 16.56 11.87 16.67L11.94 17.66C11.95 17.82 12.01 17.96 12.11 18.07C12.22 18.17 12.36 18.22 12.51 18.22C12.67 18.21 12.81 18.15 12.91 18.04C13 17.93 13.06 17.78 13.05 17.63L12.98 16.7C12.98 16.6 13.01 16.5 13.07 16.43C13.14 16.35 13.23 16.31 13.33 16.31C13.44 16.31 13.53 16.36 13.6 16.43C13.67 16.51 13.7 16.61 13.7 16.72L13.77 17.53C13.78 17.69 13.84 17.83 13.94 17.93C14.05 18.03 14.19 18.08 14.34 18.08C14.49 18.07 14.63 18.01 14.73 17.9C14.83 17.79 14.88 17.64 14.88 17.49L14.8 16.66C14.79 16.55 14.83 16.44 14.9 16.37C14.97 16.29 15.07 16.25 15.17 16.25C15.28 16.25 15.38 16.3 15.45 16.38C15.52 16.45 15.55 16.56 15.55 16.66L15.63 17.42C15.64 17.58 15.7 17.72 15.8 17.82C15.9 17.93 16.04 17.98 16.19 17.98C16.34 17.97 16.48 17.92 16.59 17.81C16.69 17.7 16.74 17.55 16.73 17.4L15.8 10.69C15.78 10.48 15.68 10.28 15.51 10.14C15.34 10.01 15.13 9.94 14.92 9.96L14.22 9.89C14.08 9.88 13.95 9.82 13.85 9.72C13.75 9.62 13.7 9.49 13.7 9.35C13.72 9.21 13.77 9.08 13.87 8.99C13.97 8.89 14.09 8.84 14.23 8.84L15.67 8.7C15.92 8.68 16.15 8.56 16.32 8.36C16.48 8.17 16.56 7.92 16.54 7.67C16.53 7.57 16.51 7.46 16.48 7.33Z" fill="white"/>
      </svg>
    ),
    description: 'Connect to your Phantom wallet'
  },
  {
    id: 'coinbase',
    name: 'Coinbase Wallet',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#0052FF"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 5.04004C8.14 5.04004 5 8.18004 5 12.04C5 15.9 8.14 19.04 12 19.04C15.86 19.04 19 15.9 19 12.04C19 8.18004 15.86 5.04004 12 5.04004ZM9.47 10.98H8.06V13.1H9.47C10.33 13.1 10.65 12.58 10.65 12.04C10.65 11.51 10.33 10.98 9.47 10.98ZM13.53 13.1H14.94V10.98H13.53C12.67 10.98 12.35 11.51 12.35 12.04C12.35 12.58 12.67 13.1 13.53 13.1ZM12 7.84004C13.83 7.84004 15.5 8.65004 16.62 9.97004L14.71 11.33C14.14 10.59 13.16 10.14 12 10.14C10.84 10.14 9.86 10.59 9.29 11.33L7.38 9.97004C8.5 8.65004 10.17 7.84004 12 7.84004ZM12 16.24C10.17 16.24 8.5 15.43 7.38 14.11L9.29 12.75C9.86 13.49 10.84 13.94 12 13.94C13.16 13.94 14.14 13.49 14.71 12.75L16.62 14.11C15.5 15.43 13.83 16.24 12 16.24Z" fill="white"/>
      </svg>
    ),
    description: 'Connect to Coinbase Wallet'
  },
  {
    id: 'walletconnect',
    name: 'WalletConnect',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 24C18.6275 24 24 18.6275 24 12C24 5.37259 18.6275 0 12 0C5.37259 0 0 5.37259 0 12C0 18.6275 5.37259 24 12 24Z" fill="#3B99FC"/>
        <path d="M8.2896 10.9463C10.1616 9.10821 13.1664 9.10821 15.0384 10.9463L15.3201 11.2214C15.4358 11.3343 15.4358 11.5186 15.3201 11.6314L14.5073 12.4279C14.4494 12.4844 14.356 12.4844 14.2981 12.4279L13.9031 12.0422C12.6461 10.8114 10.6819 10.8114 9.42488 12.0422L8.99819 12.4592C8.94025 12.5156 8.84681 12.5156 8.78887 12.4592L7.976 11.6627C7.86031 11.5498 7.86031 11.3656 7.976 11.2527L8.2896 10.9463ZM16.9385 12.8042L17.6693 13.5192C17.785 13.6321 17.785 13.8164 17.6693 13.9293L14.6665 16.8733C14.5508 16.9862 14.3639 16.9862 14.2482 16.8733L12.1678 14.8394C12.1389 14.8112 12.0925 14.8112 12.0635 14.8394L9.9831 16.8733C9.86741 16.9862 9.68053 16.9862 9.56484 16.8733L6.55998 13.9293C6.44429 13.8164 6.44429 13.6321 6.55998 13.5192L7.29072 12.8042C7.40641 12.6914 7.59329 12.6914 7.70897 12.8042L9.78941 14.8382C9.81836 14.8664 9.8648 14.8664 9.89375 14.8382L11.9742 12.8042C12.0899 12.6914 12.2768 12.6914 12.3925 12.8042L14.473 14.8382C14.5019 14.8664 14.5483 14.8664 14.5773 14.8382L16.6577 12.8042C16.7734 12.6914 16.9603 12.6914 17.076 12.8042H16.9385Z" fill="white"/>
      </svg>
    ),
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
