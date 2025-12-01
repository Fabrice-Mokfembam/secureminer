import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { useWeb3Modal } from '@web3modal/wagmi/react';

interface ConnectWalletContextType {
  openModal: () => void;
  closeModal: () => void;
}

const ConnectWalletContext = createContext<ConnectWalletContextType | undefined>(undefined);

export function ConnectWalletProvider({ children }: { children: ReactNode }) {
  // This hook must be called unconditionally
  // Web3Modal should be initialized in wagmi.ts before this component renders
  const { open, close } = useWeb3Modal();

  const openModal = () => open();
  const closeModal = () => close();

  return (
    <ConnectWalletContext.Provider value={{ openModal, closeModal }}>
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

