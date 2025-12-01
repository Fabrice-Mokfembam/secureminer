import { createConfig, http } from 'wagmi';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { walletConnect, injected, safe } from '@wagmi/connectors';
import { mainnet, sepolia, polygon, bsc } from 'wagmi/chains';

// Get project ID from environment variables
const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID || '';

if (!projectId) {
  console.warn('VITE_WALLET_CONNECT_PROJECT_ID is not set. Please add it to your .env file');
}

// Define metadata for your app
const metadata = {
  name: 'SecureMiner',
  description: 'Secure Mining Platform',
  url: window.location.origin,
  icons: [`${window.location.origin}/vite.svg`],
};

// Create wagmi config
export const wagmiConfig = createConfig({
  chains: [mainnet, sepolia, polygon, bsc],
  connectors: [
    walletConnect({ projectId, metadata, showQrModal: false }),
    injected({ shimDisconnect: true }),
    safe(),
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [polygon.id]: http(),
    [bsc.id]: http(),
  },
});

// Initialize Web3Modal (must be called before any component uses useWeb3Modal)
// This MUST be called at module level to ensure it runs before any components render
if (projectId) {
  createWeb3Modal({
    wagmiConfig,
    projectId,
    enableAnalytics: true,
    enableOnramp: true,
    themeMode: 'dark',
    themeVariables: {
      '--w3m-accent': '#ff6b35',
      '--w3m-border-radius-master': '12px',
      '--w3m-font-size-master': '14px',
    },
  });
} else {
  console.error('⚠️ VITE_WALLET_CONNECT_PROJECT_ID is missing! Web3Modal will not work.');
  console.error('Please add your Project ID to the .env file. Get it from: https://cloud.reown.com/');
}

// Export to ensure this module is executed when imported
export const web3ModalInitialized = true;

