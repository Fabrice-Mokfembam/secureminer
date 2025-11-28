import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { 
  Info, 
  Home, 
  Gift, 
  Users, 
  User,
  Smartphone,
  Globe
} from 'lucide-react';
import { useConnectWallet } from '../Contexts/ConnectWalletContext';

function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { openModal } = useConnectWallet();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-[var(--color-bg-main)] text-[var(--color-text-primary)] flex flex-col items-center">
      {/* Container to maintain mobile width on larger screens */}
      <div className="w-full max-w-[450px] relative min-h-screen flex flex-col">
        {/* Fixed Header - Only Top Bar */}
        <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[450px] z-50 glass-strong border-b border-[var(--color-bg-border)] backdrop-blur-md">
          <div className="flex items-center justify-between px-4 py-3">
            <button 
              onClick={openModal}
              className="px-4 py-2 bg-[var(--color-accent-orange)] hover:bg-[var(--color-accent-orange-hover)] text-[var(--color-text-on-orange)] font-semibold rounded-lg text-sm transition-all hover:shadow-lg"
            >
              Connect Wallet
            </button>
            <div className="flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors cursor-pointer" />
              <Globe className="w-5 h-5 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors cursor-pointer" />
            </div>
          </div>
        </header>

        {/* Main Content - with padding for fixed header and bottom nav */}
        <main className="flex-1 pt-16 pb-20 overflow-y-auto w-full">
          <Outlet />
        </main>

        {/* Fixed Bottom Navigation */}
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[450px] z-50 glass-strong border-t border-[var(--color-bg-border)] backdrop-blur-md">
          <div className="flex items-center justify-around py-3">
          <button
            onClick={() => navigate('/')}
            className={`flex flex-col items-center gap-1 transition-colors ${
              isActive('/') ? 'text-[var(--color-accent-orange)]' : 'text-[var(--color-text-muted)]'
            }`}
          >
            <Home className="w-6 h-6" />
            <span className="text-xs">Home</span>
          </button>
          <button
            onClick={() => navigate('/reward-center')}
            className={`flex flex-col items-center gap-1 transition-colors ${
              isActive('/reward-center') ? 'text-[var(--color-accent-orange)]' : 'text-[var(--color-text-muted)]'
            }`}
          >
            <Gift className="w-6 h-6" />
            <span className="text-xs">Reward Center</span>
          </button>
          <button
            onClick={() => navigate('/about')}
            className={`flex flex-col items-center gap-1 transition-colors ${
              isActive('/about') ? 'text-[var(--color-accent-orange)]' : 'text-[var(--color-text-muted)]'
            }`}
          >
            <Info className="w-6 h-6" />
            <span className="text-xs">About</span>
          </button>
          <button
            onClick={() => navigate('/')}
            className="flex flex-col items-center gap-1 transition-colors text-[var(--color-text-muted)]"
          >
            <Users className="w-6 h-6" />
            <span className="text-xs">Team</span>
          </button>
          <button
            onClick={() => navigate('/profile')}
            className={`flex flex-col items-center gap-1 transition-colors ${
              isActive('/profile') ? 'text-[var(--color-accent-orange)]' : 'text-[var(--color-text-muted)]'
            }`}
          >
            <User className="w-6 h-6" />
            <span className="text-xs">Profile</span>
          </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Layout;

