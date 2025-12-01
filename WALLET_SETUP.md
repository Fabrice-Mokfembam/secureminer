# Wallet Connection Setup Guide

This project uses **Web3Modal v5** with **Wagmi v3** for wallet connections, similar to SafeMiner.cc.

## 📚 Documentation Links

### Main Documentation
1. **Web3Modal (Reown) Documentation**
   - Main Docs: https://web3modal.com/docs/wagmi/about
   - Installation: https://web3modal.com/docs/wagmi/installation
   - Quick Start: https://web3modal.com/docs/wagmi/quick-start
   - Configuration: https://web3modal.com/docs/wagmi/configuration

2. **Wagmi Documentation**
   - Main Docs: https://wagmi.sh
   - Getting Started: https://wagmi.sh/react/getting-started
   - Connect Wallet Guide: https://wagmi.sh/react/guides/connect-wallet
   - API Reference: https://wagmi.sh/react/api

3. **Viem Documentation**
   - Main Docs: https://viem.sh
   - Getting Started: https://viem.sh/docs/getting-started

### Getting Your Project ID
- **Reown Cloud Dashboard**: https://cloud.reown.com/
  - Create a new project
  - Copy your Project ID
  - Add it to your `.env` file

## 🚀 Setup Instructions

### Step 1: Get Your Project ID
1. Go to https://cloud.reown.com/
2. Sign up or log in
3. Create a new project
4. Copy your Project ID

### Step 2: Configure Environment Variables
1. Create a `.env` file in the root directory (if it doesn't exist)
2. Add your Project ID:
   ```
   VITE_WALLET_CONNECT_PROJECT_ID=your_project_id_here
   ```
3. Replace `your_project_id_here` with your actual Project ID

### Step 3: Restart Development Server
After adding the Project ID, restart your dev server:
```bash
npm run dev
```

## 🔧 How It Works

### Architecture
- **Wagmi**: Provides React hooks for Ethereum interactions
- **Web3Modal**: Provides the wallet connection UI modal
- **Viem**: Low-level Ethereum library used by Wagmi

### File Structure
```
src/
├── config/
│   └── wagmi.ts          # Wagmi and Web3Modal configuration
├── Contexts/
│   └── ConnectWalletContext.tsx  # Context for opening/closing modal
├── Components/
│   └── Layout.tsx        # Contains "Connect Wallet" button
└── App.tsx               # Main app with providers
```

### How to Use

1. **Opening the Modal**: Click the "Connect Wallet" button in the header
2. **Connecting**: Select a wallet from the modal (MetaMask, WalletConnect, etc.)
3. **Using Wallet State**: Use Wagmi hooks in your components:
   ```tsx
   import { useAccount, useDisconnect } from 'wagmi';
   
   function MyComponent() {
     const { address, isConnected } = useAccount();
     const { disconnect } = useDisconnect();
     
     if (isConnected) {
       return <div>Connected: {address}</div>;
     }
     return <div>Not connected</div>;
   }
   ```

## 🎨 Customization

The Web3Modal theme is configured in `src/App.tsx`. You can customize:
- Colors (`--w3m-accent`)
- Border radius (`--w3m-border-radius-master`)
- Font size (`--w3m-font-size-master`)
- Theme mode (dark/light)

See: https://web3modal.com/docs/wagmi/configuration#theme

## 🔗 Supported Chains

Currently configured chains:
- Ethereum Mainnet
- Sepolia (Testnet)
- Polygon
- BSC (Binance Smart Chain)

To add more chains, edit `src/config/wagmi.ts`.

## 📖 Additional Resources

- **Wagmi Examples**: https://wagmi.sh/react/examples
- **Web3Modal Examples**: https://web3modal.com/examples
- **WalletConnect Docs**: https://docs.walletconnect.com/

## ⚠️ Important Notes

1. **Project ID Required**: The app won't work without a valid Project ID
2. **Environment Variables**: Use `VITE_` prefix for Vite projects
3. **Auto-connect**: Wagmi will automatically reconnect to previously connected wallets

