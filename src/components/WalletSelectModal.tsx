
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
      <svg width="24" height="24" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="64" fill="#551BF9"/>
        <path d="M110.584 64.9142H99.142C99.142 41.7651 80.368 23 57.208 23C36.784 23 19.888 37.2032 16.0893 56.468C15.4661 59.2757 15.1392 62.1578 15.1392 65.1475C15.1392 78.4196 20.9687 90.0644 30.1953 97.6075C38.4075 104.414 48.6923 108.183 59.9441 108.183C81.318 108.183 98.9089 94.2163 102.869 75.6263H114.292C110.074 100.708 87.0883 120.009 59.9441 120.009C49.4543 120.009 39.6367 117.274 31.3512 112.538C19.7946 105.977 11.097 95.1267 7.16009 82.1262C5.70412 77.0673 4.93292 71.724 4.93292 66.1553C4.93292 64.5454 5.00131 62.945 5.14679 61.3636C6.64344 35.7577 28.0318 15.3509 54.3835 13.6055L54.3835 13.6055C55.3201 13.5325 56.2567 13.5325 57.208 13.5325C87.4152 13.5325 112 38.1097 112 68.3079C112 68.31 110.584 64.9142 110.584 64.9142Z" fill="white"/>
        <path d="M110.584 64.9142H99.142C99.142 41.7651 80.368 23 57.208 23C36.784 23 19.888 37.2032 16.0893 56.468C15.4661 59.2757 15.1392 62.1578 15.1392 65.1475C15.1392 78.4196 20.9687 90.0644 30.1953 97.6075C38.4075 104.414 48.6923 108.183 59.9441 108.183C81.318 108.183 98.9089 94.2163 102.869 75.6263H114.292C110.074 100.708 87.0883 120.009 59.9441 120.009C49.4543 120.009 39.6367 117.274 31.3512 112.538C19.7946 105.977 11.097 95.1267 7.16009 82.1262C5.70412 77.0673 4.93292 71.724 4.93292 66.1553C4.93292 64.5454 5.00131 62.945 5.14679 61.3636C6.64344 35.7577 28.0318 15.3509 54.3835 13.6055L54.3835 13.6055C55.3201 13.5325 56.2567 13.5325 57.208 13.5325C87.4152 13.5325 112 38.1097 112 68.3079C112 68.31 110.584 64.9142 110.584 64.9142Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M85.8742 46.947H68.1198C67.7373 46.947 67.4088 47.2753 67.4088 47.6576V62.4564C67.4088 62.8386 67.7373 63.167 68.1198 63.167H76.8423V70.4637C76.8423 70.7085 76.7122 70.9315 76.5 71.0412C68.3359 75.5032 54.7528 66.4764 54.4994 66.3099C54.246 66.1434 54.1251 65.8646 54.1251 65.5199V47.6576C54.1251 47.2753 53.792 46.947 53.4141 46.947H35.6643C35.2819 46.947 34.9531 47.2753 34.9531 47.6576V77.7144C34.9531 77.9547 35.0603 78.1731 35.25 78.3097C38.3038 80.4453 44.0585 83.7287 51.2421 86.0181C58.4257 88.307 67.0343 89.636 74.9114 88.5641C81.8241 87.6328 88.5045 83.8182 92.1146 80.3639C94.1596 78.3936 95.2607 76.1289 95.7809 74.7823C95.8937 74.5103 96 74.0701 96 73.8967V47.6576C96 47.2753 95.672 46.947 95.2842 46.947H85.8742Z" fill="white"/>
      </svg>
    ),
    description: 'Connect to your Phantom wallet'
  },
  {
    id: 'coinbase',
    name: 'Coinbase Wallet',
    icon: (
      <svg width="24" height="24" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="1024" height="1024" fill="#0052FF"/>
        <path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0 -1024 0Z" fill="#0052FF"/>
        <path d="M516.11 787C671.4 787 797.89 663.25 797.89 511.5C797.89 359.75 671.4 236 516.11 236C360.82 236 234.33 359.75 234.33 511.5C234.33 663.25 360.82 787 516.11 787Z" fill="white"/>
        <path d="M516.11 598.59C565.27 598.59 605.22 558.91 605.22 510.09C605.22 461.27 565.27 421.59 516.11 421.59C466.95 421.59 427 461.27 427 510.09C427 558.91 466.95 598.59 516.11 598.59Z" fill="#0052FF"/>
      </svg>
    ),
    description: 'Connect to Coinbase Wallet'
  },
  {
    id: 'walletconnect',
    name: 'WalletConnect',
    icon: (
      <svg width="24" height="24" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="256" cy="256" r="256" fill="#3B99FC"/>
        <path d="M169.209 197.075C211.72 156.149 279.795 156.149 322.305 197.075L326.540 201.165C328.047 202.621 328.047 205.016 326.540 206.472L303.049 229.078C302.296 229.806 301.084 229.806 300.331 229.078L294.767 223.704C266.139 195.981 225.375 195.981 196.748 223.704L190.657 229.533C189.904 230.261 188.692 230.261 187.939 229.533L164.447 206.927C162.941 205.471 162.941 203.076 164.447 201.62L169.209 197.075ZM362.249 235.677L383.302 256.017C384.808 257.472 384.808 259.868 383.302 261.324L307.186 334.697C305.68 336.153 303.237 336.153 301.758 334.697L247.973 282.645C247.596 282.281 246.984 282.281 246.607 282.645L192.822 334.697C191.316 336.153 188.873 336.153 187.394 334.697L111.209 261.324C109.702 259.868 109.702 257.472 111.209 256.017L132.262 235.677C133.768 234.222 136.211 234.222 137.691 235.677L191.504 287.729C191.881 288.093 192.493 288.093 192.87 287.729L246.655 235.677C248.161 234.222 250.604 234.222 252.083 235.677L305.896 287.729C306.273 288.093 306.885 288.093 307.262 287.729L361.047 235.677C362.553 234.222 364.969 234.222 366.475 235.677H362.249Z" fill="white"/>
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
