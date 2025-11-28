import { X, HelpCircle } from 'lucide-react';
import { walletImages } from '../assets';

interface ConnectWalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface WalletOption {
  id: string;
  name: string;
  icon: string;
  badge?: string;
  badgeColor?: string;
}

const walletOptions: WalletOption[] = [
  {
    id: 'walletconnect',
    name: 'WalletConnect',
    icon: walletImages.walletconnect,
    badge: 'QR CODE',
    badgeColor: 'bg-blue-500',
  },
  {
    id: 'crypto-com',
    name: 'Crypto.com Onchain',
    icon: walletImages.cryptoComOnchain,
  },
  {
    id: 'bitget',
    name: 'Bitget Wallet',
    icon: walletImages.bitget,
  },
  {
    id: 'uniswap',
    name: 'Uniswap Wallet',
    icon: walletImages.uniswap,
  },
  {
    id: 'safepal',
    name: 'SafePal',
    icon: walletImages.safepal,
  },
  {
    id: 'trust',
    name: 'Trust Wallet',
    icon: walletImages.trust,
  },
  {
    id: 'all',
    name: 'All Wallets',
    icon: walletImages.allWallets,
    badge: '500+',
    badgeColor: 'bg-gray-500',
  },
];

function ConnectWalletModal({ isOpen, onClose }: ConnectWalletModalProps) {
  if (!isOpen) return null;

  const handleWalletClick = (walletId: string) => {
    // Handle wallet connection logic here
    console.log('Connecting to:', walletId);
    // You can add wallet connection logic here
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-[10000] bg-black/80 backdrop-blur-lg"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[450px] z-[10001] px-4">
        <div className="bg-gradient-to-r from-[var(--color-bg-secondary)] to-[var(--color-bg-tertiary)] rounded-2xl border border-[var(--color-bg-border)] shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-[var(--color-bg-border)]">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[var(--color-text-muted)]" />
              <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Connect Wallet</h2>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[var(--color-bg-main)] border border-[var(--color-bg-border)] flex items-center justify-center hover:bg-[var(--color-bg-tertiary)] transition-colors"
            >
              <X className="w-4 h-4 text-[var(--color-text-primary)]" />
            </button>
          </div>

          {/* Wallet Options List */}
          <div className="max-h-[60vh] overflow-y-scroll scrollbar-visible p-4">
            <div className="space-y-2">
              {walletOptions.map((wallet) => (
                <button
                  key={wallet.id}
                  onClick={() => handleWalletClick(wallet.id)}
                  className="w-full flex items-center gap-3 p-4 bg-white rounded-xl hover:bg-gray-50 transition-colors text-left"
                >
                  {/* Wallet Icon */}
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                    <img
                      src={wallet.icon}
                      alt={wallet.name}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  
                  {/* Wallet Name */}
                  <div className="flex-1 min-w-0">
                    <span className="text-base font-medium text-gray-900">{wallet.name}</span>
                  </div>
                  
                  {/* Badge */}
                  {wallet.badge && (
                    <div className={`flex-shrink-0 px-3 py-1 rounded-lg text-xs font-semibold text-white ${wallet.badgeColor || 'bg-blue-500'}`}>
                      {wallet.badge}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-[var(--color-bg-border)]">
            <div className="flex items-center justify-center gap-2 text-sm text-[var(--color-text-muted)]">
              <span>UX by</span>
              <button className="px-3 py-1.5 bg-[var(--color-bg-main)] rounded-lg border border-[var(--color-bg-border)] hover:bg-[var(--color-bg-tertiary)] transition-colors">
                <span className="text-[var(--color-text-primary)] text-xs">reown</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConnectWalletModal;

