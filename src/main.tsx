import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// Import wagmi config FIRST to ensure Web3Modal is initialized before any components
// This side-effect import ensures the module code runs before App renders
import { web3ModalInitialized } from './config/wagmi'
import App from './App.tsx'

// Ensure initialization happened
if (!web3ModalInitialized) {
  console.error('Web3Modal initialization failed!');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
