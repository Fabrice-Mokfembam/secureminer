import { Wallet, ArrowDownToLine, TrendingUp, Share2 } from 'lucide-react';
import { profileImages } from '../../../assets';

function ProfilePage() {
  return (
    <div className="pb-4">
      {/* Current Balance Section */}
      <div className=" mb-4">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <div className="relative p-4">
            <div className="bg-gradient-to-r from-[var(--color-bg-secondary)] to-[var(--color-bg-tertiary)] rounded-xl p-4 border border-[var(--color-bg-border)]">
              {/* Profile Picture/Illustration */}
              <div className="flex justify-center mb-4">
                <img
                  src={profileImages.profilePicture}
                  alt="Profile"
                  className="w-48 h-48 object-contain"
                />
              </div>

              {/* Current Balance Display */}
              <div className="text-center mb-4">
                <p className="text-[var(--color-text-primary)] text-sm mb-2">
                  Current Balance (USD)
                </p>
                <p className="text-[var(--color-text-primary)] text-3xl font-bold mb-2">
                  0.00
                </p>
                <p className="text-[var(--color-text-primary)] text-sm">
                  No Connect
                </p>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-4 gap-3 mt-6">
                <button className="flex flex-col items-center gap-2 p-3 bg-[var(--color-bg-main)] rounded-lg border border-[var(--color-bg-border)] hover:bg-[var(--color-bg-secondary)] transition-colors">
                  <div className="w-10 h-10 bg-[var(--color-accent-orange)] rounded-lg flex items-center justify-center">
                    <Wallet className="w-5 h-5 text-black" strokeWidth={2.5} />
                  </div>
                  <span className="text-[var(--color-text-primary)] text-xs">Recharge</span>
                </button>
                <button className="flex flex-col items-center gap-2 p-3 bg-[var(--color-bg-main)] rounded-lg border border-[var(--color-bg-border)] hover:bg-[var(--color-bg-secondary)] transition-colors">
                  <div className="w-10 h-10 bg-[var(--color-accent-orange)] rounded-lg flex items-center justify-center">
                    <ArrowDownToLine className="w-5 h-5 text-black" strokeWidth={2.5} />
                  </div>
                  <span className="text-[var(--color-text-primary)] text-xs">Withdraw</span>
                </button>
                <button className="flex flex-col items-center gap-2 p-3 bg-[var(--color-bg-main)] rounded-lg border border-[var(--color-bg-border)] hover:bg-[var(--color-bg-secondary)] transition-colors">
                  <div className="w-10 h-10 bg-[var(--color-accent-orange)] rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-black" strokeWidth={2.5} />
                  </div>
                  <span className="text-[var(--color-text-primary)] text-xs">Record</span>
                </button>
                <button className="flex flex-col items-center gap-2 p-3 bg-[var(--color-bg-main)] rounded-lg border border-[var(--color-bg-border)] hover:bg-[var(--color-bg-secondary)] transition-colors">
                  <div className="w-10 h-10 bg-[var(--color-accent-orange)] rounded-lg flex items-center justify-center">
                    <Share2 className="w-5 h-5 text-black" strokeWidth={2.5} />
                  </div>
                  <span className="text-[var(--color-text-primary)] text-xs">Invite</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* My Income Section */}
      <div className=" mb-4">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <div className="relative p-4">
            <div className="bg-gradient-to-r from-[var(--color-bg-secondary)] to-[var(--color-bg-tertiary)] rounded-xl p-4 border border-[var(--color-bg-border)]">
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold text-[var(--color-text-primary)] inline-block border-b-2 border-[var(--color-accent-orange)] pb-2">
                  My Income(USD)
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[var(--color-bg-main)] rounded-lg p-4 border border-[var(--color-bg-border)] text-center">
                  <p className="text-[var(--color-text-primary)] text-sm mb-2">Mining Profit</p>
                  <p className="text-[var(--color-text-primary)] text-xl font-bold">0.00</p>
                </div>
                <div className="bg-[var(--color-bg-main)] rounded-lg p-4 border border-[var(--color-bg-border)] text-center">
                  <p className="text-[var(--color-text-primary)] text-sm mb-2">Team Income</p>
                  <p className="text-[var(--color-text-primary)] text-xl font-bold">0.00</p>
                </div>
                <div className="bg-[var(--color-bg-main)] rounded-lg p-4 border border-[var(--color-bg-border)] text-center">
                  <p className="text-[var(--color-text-primary)] text-sm mb-2">Activity Income</p>
                  <p className="text-[var(--color-text-primary)] text-xl font-bold">0.00</p>
                </div>
                <div className="bg-[var(--color-bg-main)] rounded-lg p-4 border border-[var(--color-bg-border)] text-center">
                  <p className="text-[var(--color-text-primary)] text-sm mb-2">Total Income</p>
                  <p className="text-[var(--color-text-primary)] text-xl font-bold">0.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;

