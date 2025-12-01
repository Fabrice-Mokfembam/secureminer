import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// Import wagmi config - this will initialize Web3Modal before any components render
import { wagmiConfig } from './config/wagmi';
import Layout from './Components/Layout';
import HomePage from './Features/Home/pages/HomePage';
import RewardCenterPage from './Features/Reward Center/pages/RewardCenterPage';
import AboutPage from './Features/About/pages/AboutPage';
import TeamPage from './Features/Team/Pages/TeamPage';
import ProfilePage from './Features/Profile/Pages/ProfilePage';
import { ConnectWalletProvider } from './Contexts/ConnectWalletContext';

// Create a react-query client
const queryClient = new QueryClient();

function AppContent() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: '/reward-center',
          element: <RewardCenterPage />,
        },
        {
          path: '/about',
          element: <AboutPage />,
        },
        {
          path: '/team',
          element: <TeamPage />,
        },
        {
          path: '/profile',
          element: <ProfilePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

function App() {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <ConnectWalletProvider>
          <AppContent />
        </ConnectWalletProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
