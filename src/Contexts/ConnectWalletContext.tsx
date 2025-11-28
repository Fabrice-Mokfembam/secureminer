import { createContext, useContext, useState} from 'react';
import type { ReactNode } from 'react';

interface ConnectWalletContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ConnectWalletContext = createContext<ConnectWalletContextType | undefined>(undefined);

export function ConnectWalletProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ConnectWalletContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ConnectWalletContext.Provider>
  );
}

export function useConnectWallet() {
  const context = useContext(ConnectWalletContext);
  if (context === undefined) {
    throw new Error('useConnectWallet must be used within a ConnectWalletProvider');
  }
  return context;
}

