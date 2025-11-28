import { Wallet, ChevronRight, Bell, Headphones, Info, Share2, Shield, Users, TrendingUp, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { carouselImages } from '../../../assets';
import { faqData } from '../Utils/faqData';

function HomePage() {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [usdBalance, setUsdBalance] = useState(100);
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);

  // Calculate earnings based on USD balance
  // Assuming: Hourly rate is 0.283333% of balance, Daily is 6.8% of balance
  const hourlyEarnings = (usdBalance * 0.00283333).toFixed(6);
  const dailyIncome = (usdBalance * 0.068).toFixed(2);
  
  // Determine level based on balance
  const getLevel = (balance: number) => {
    if (balance >= 1000) return 'Miner-3';
    if (balance >= 100) return 'Miner-2';
    return 'Miner-1';
  };

  // Auto-rotate carousel every 5 seconds with slide transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleIndicatorClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="pb-4">
      {/* Carousel Section */}
      <div className="px-4 py-2 mb-4">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <div className="relative">
            <div className="relative h-48 overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
              >
                {carouselImages.map((image, index) => (
                  <div key={index} className="min-w-full h-48">
                    <img
                      src={image}
                      alt={`Carousel ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              {/* Overlay gradient for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none"></div>
            </div>
          
          {/* Carousel Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => handleIndicatorClick(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? 'bg-[var(--color-accent-orange)] w-6'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-4">
        <div className="relative p-4">
          <nav className="bg-gradient-to-r from-[var(--color-bg-secondary)] to-[var(--color-bg-tertiary)] rounded-xl p-3 flex items-center justify-around border border-[var(--color-bg-border)]">
            <button className="flex flex-col items-center gap-2 text-[var(--color-text-primary)] transition-colors">
              <Bell className="w-6 h-6 text-[var(--color-accent-orange)]" strokeWidth={2.5} />
              <span className="text-xs text-[var(--color-text-primary)]">Notification</span>
            </button>
            <button className="flex flex-col items-center gap-2 text-[var(--color-text-primary)] transition-colors">
              <Headphones className="w-6 h-6 text-[var(--color-accent-orange)]" strokeWidth={2.5} />
              <span className="text-xs text-[var(--color-text-primary)]">Online Service</span>
            </button>
            <button 
              onClick={() => navigate('/about')}
              className="flex flex-col items-center gap-2 text-[var(--color-text-primary)] transition-colors"
            >
              <Info className="w-6 h-6 text-[var(--color-accent-orange)]" strokeWidth={2.5} />
              <span className="text-xs text-[var(--color-text-primary)]">About</span>
            </button>
            <button className="flex flex-col items-center gap-2 text-[var(--color-text-primary)] transition-colors">
              <Share2 className="w-6 h-6 text-[var(--color-accent-orange)]" strokeWidth={2.5} />
              <span className="text-xs text-[var(--color-text-primary)]">Invite</span>
            </button>
          </nav>
        </div>
      </div>

      <div className=" pb-4">
        {/* Combined Section: Miner Status, Connect Wallet, and Stats */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-8 ">
          <div className="relative p-4">
            <div className="bg-gradient-to-r border border-[var(--color-bg-border)] from-[var(--color-bg-secondary)] to-[var(--color-bg-tertiary)] rounded-xl p-4 space-y-4">
              {/* Miner Status Section */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-[var(--color-accent-orange)] text-black rounded-lg text-sm font-semibold">
                    Miner-1
                  </span>
                  <span className="text-[var(--color-accent-orange)] font-semibold">+5.80%</span>
                </div>
                <button className="text-[var(--color-text-primary)] text-sm flex items-center gap-1 hover:opacity-80 transition-opacity">
                  More
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Connect Wallet Button */}
              <button className="w-full py-3 bg-[var(--color-accent-orange)] hover:bg-[var(--color-accent-orange-hover)] text-black font-semibold text-base rounded-lg flex items-center justify-center gap-2 transition-all">
                <Wallet className="w-5 h-5" />
                Connect Wallet
              </button>

              {/* Stats Section */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[var(--color-bg-main)] rounded-lg p-3 border border-[var(--color-bg-border)]">
                  <p className="text-[var(--color-text-primary)] text-sm mb-2">USD Amount</p>
                  <p className="text-2xl font-bold text-[var(--color-text-primary)]">0</p>
                </div>
                <div className="bg-[var(--color-bg-main)] rounded-lg p-3 border border-[var(--color-bg-border)]">
                  <p className="text-[var(--color-text-primary)] text-sm mb-2">Today Output(USD)</p>
                  <p className="text-2xl font-bold text-[var(--color-accent-orange)]">0.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Process Section */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-8">
          <div className="relative p-4">
            <div className="bg-gradient-to-r from-[var(--color-bg-secondary)] to-[var(--color-bg-tertiary)] rounded-xl p-4 border border-[var(--color-bg-border)]">
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold text-[var(--color-text-primary)] inline-block border-b-2 border-[var(--color-accent-orange)] pb-2">
                  Usage process
                </h2>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {/* Step 1 */}
                <div className="bg-[var(--color-bg-main)] rounded-lg p-3 flex flex-col items-center text-center border border-[var(--color-bg-border)]">
                  <div className="w-10 h-10 bg-[var(--color-accent-orange)] text-black rounded-full flex items-center justify-center font-bold mb-2">
                    1
                  </div>
                  <p className="text-[var(--color-text-primary)] text-sm font-medium">1. Connect wallet</p>
                </div>
                {/* Step 2 */}
                <div className="bg-[var(--color-bg-main)] rounded-lg p-3 flex flex-col items-center text-center border border-[var(--color-bg-border)]">
                  <div className="w-10 h-10 bg-[var(--color-accent-orange)] text-black rounded-full flex items-center justify-center font-bold mb-2">
                    2
                  </div>
                  <p className="text-[var(--color-text-primary)] text-sm font-medium">2. No transfer required</p>
                </div>
                {/* Step 3 */}
                <div className="bg-[var(--color-bg-main)] rounded-lg p-3 flex flex-col items-center text-center border border-[var(--color-bg-border)]">
                  <div className="w-10 h-10 bg-[var(--color-accent-orange)] text-black rounded-full flex items-center justify-center font-bold mb-2">
                    3
                  </div>
                  <p className="text-[var(--color-text-primary)] text-sm font-medium">3.Deposit USDT into Wallet</p>
                </div>
                {/* Step 4 */}
                <div className="bg-[var(--color-bg-main)] rounded-lg p-3 flex flex-col items-center text-center border border-[var(--color-bg-border)]">
                  <div className="w-10 h-10 bg-[var(--color-accent-orange)] text-black rounded-full flex items-center justify-center font-bold mb-2">
                    4
                  </div>
                  <p className="text-[var(--color-text-primary)] text-sm font-medium">4.Click "Start Mining"</p>
                </div>
                {/* Step 5 */}
                <div className="bg-[var(--color-bg-main)] rounded-lg p-3 flex flex-col items-center text-center border border-[var(--color-bg-border)]">
                  <div className="w-10 h-10 bg-[var(--color-accent-orange)] text-black rounded-full flex items-center justify-center font-bold mb-2">
                    5
                  </div>
                  <p className="text-[var(--color-text-primary)] text-sm font-medium">5、Auto distribute earnings</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Income Calculator Section */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-8">
          <div className="relative p-4">
            <div className="bg-gradient-to-r from-[var(--color-bg-secondary)] to-[var(--color-bg-tertiary)] rounded-xl p-4 border border-[var(--color-bg-border)]">
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold text-[var(--color-text-primary)] inline-block border-b-2 border-[var(--color-accent-orange)] pb-2">
                  Income Calculator
                </h2>
              </div>
              
              <div className="bg-[var(--color-bg-main)] rounded-lg p-4 border border-[var(--color-bg-border)] space-y-4">
                {/* Input Field */}
                <div>
                  <label className="block text-[var(--color-text-primary)] text-sm mb-2">
                    Address USD balance
                  </label>
                  <input
                    type="number"
                    value={usdBalance}
                    onChange={(e) => setUsdBalance(Number(e.target.value) || 0)}
                    className="w-full bg-[var(--color-bg-secondary)] border border-[var(--color-bg-border)] rounded-lg px-4 py-2 text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent-orange)]"
                    placeholder="100"
                  />
                </div>

                {/* Output Section */}
                <div className="space-y-3 pt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[var(--color-text-primary)] text-sm">Level</span>
                    <span className="text-[var(--color-text-primary)] text-sm font-semibold">{getLevel(usdBalance)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[var(--color-text-primary)] text-sm">Hourly Earnings(USD)</span>
                    <span className="text-[var(--color-text-primary)] text-sm font-semibold">{hourlyEarnings}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[var(--color-text-primary)] text-sm">Daily Income(USD)</span>
                    <span className="text-[var(--color-text-primary)] text-sm font-semibold">{dailyIncome}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Total Output Section */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-8">
          <div className="relative p-4">
            <div className="bg-gradient-to-r from-[var(--color-bg-secondary)] to-[var(--color-bg-tertiary)] rounded-xl p-4 border border-[var(--color-bg-border)]">
              <h2 className="text-xl font-bold text-center mb-4 text-[var(--color-text-primary)]">
                Total Output(USD)
              </h2>
              
              {/* Large Total Amount */}
              <div className="text-center mb-6">
                <p className="text-3xl md:text-4xl font-bold text-[var(--color-accent-orange)]">
                  $4,540,602,758
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3">
                {/* Yesterday Output */}
                <div className="bg-[var(--color-bg-main)] rounded-lg p-3 border border-[var(--color-bg-border)]">
                  <p className="text-[var(--color-text-primary)] text-xs mb-1">Yesterday Output</p>
                  <p className="text-[var(--color-text-primary)] text-base font-bold">$3,346,888</p>
                </div>
                
                {/* Current Hash rate */}
                <div className="bg-[var(--color-bg-main)] rounded-lg p-3 border border-[var(--color-bg-border)]">
                  <p className="text-[var(--color-text-primary)] text-xs mb-1">Current Hash rate</p>
                  <p className="text-[var(--color-text-primary)] text-base font-bold">273(PH/s)</p>
                </div>
                
                {/* Participants */}
                <div className="bg-[var(--color-bg-main)] rounded-lg p-3 border border-[var(--color-bg-border)]">
                  <p className="text-[var(--color-text-primary)] text-xs mb-1">Participants(unit)</p>
                  <p className="text-[var(--color-text-primary)] text-base font-bold">2,014,002</p>
                </div>
                
                {/* Countries Covered */}
                <div className="bg-[var(--color-bg-main)] rounded-lg p-3 border border-[var(--color-bg-border)]">
                  <p className="text-[var(--color-text-primary)] text-xs mb-1">Countries Covered</p>
                  <p className="text-[var(--color-text-primary)] text-base font-bold">135+</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Features Section */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-8">
          <div className="relative p-4">
            <div className="bg-gradient-to-r from-[var(--color-bg-secondary)] to-[var(--color-bg-tertiary)] rounded-xl p-4 border border-[var(--color-bg-border)]">
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold text-[var(--color-text-primary)] inline-block border-b-2 border-[var(--color-accent-orange)] pb-2">
                  Project Features
                </h2>
              </div>

              <div className="space-y-6">
                {/* Feature 1: Safe and secure */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full border-2 border-[var(--color-accent-orange)] flex items-center justify-center">
                      <Shield className="w-6 h-6 text-[var(--color-accent-orange)]" strokeWidth={2.5} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">
                      Safe and secure
                    </h3>
                    <p className="text-[var(--color-text-muted)] text-sm">
                      No need to transfer currency, deposit USDT or USDC into your own wallet with zero risk
                    </p>
                  </div>
                </div>

                {/* Feature 2: Professional stability */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full border-2 border-[var(--color-accent-orange)] flex items-center justify-center">
                      <Users className="w-6 h-6 text-[var(--color-accent-orange)]" strokeWidth={2.5} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">
                      Professional stability
                    </h3>
                    <p className="text-[var(--color-text-muted)] text-sm">
                      Professional team, stable operation throughout the year
                    </p>
                  </div>
                </div>

                {/* Feature 3: Low entry barrier */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full border-2 border-[var(--color-accent-orange)] flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-[var(--color-accent-orange)]" strokeWidth={2.5} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">
                      Low entry barrier
                    </h3>
                    <p className="text-[var(--color-text-muted)] text-sm">
                      Sharing node mining revenue
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* User Benefits Section */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-8">
          <div className="relative p-4">
            <div className="bg-gradient-to-r from-[var(--color-bg-secondary)] to-[var(--color-bg-tertiary)] rounded-xl p-4 border border-[var(--color-bg-border)]">
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold text-[var(--color-text-primary)] inline-block border-b-2 border-[var(--color-accent-orange)] pb-2">
                  User Benefits
                </h2>
              </div>

              <div className="bg-[var(--color-bg-main)] rounded-lg p-4 border border-[var(--color-bg-border)]">
                {/* Table Headers */}
                <div className="grid grid-cols-2 gap-4 mb-3 pb-2 border-b border-[var(--color-bg-border)]">
                  <div className="text-[var(--color-text-muted)] text-sm font-medium">Address</div>
                  <div className="text-[var(--color-text-muted)] text-sm font-medium text-right">Quantity</div>
                </div>

                {/* Table Rows */}
                <div className="space-y-2">
                  <div className="bg-[var(--color-bg-secondary)] rounded-lg px-4 py-3 grid grid-cols-2 gap-4 items-center">
                    <div className="text-[var(--color-text-primary)] text-sm">0X4C***4810A</div>
                    <div className="text-[var(--color-accent-orange)] text-sm font-semibold text-right">1915.82</div>
                  </div>
                  <div className="bg-[var(--color-bg-secondary)] rounded-lg px-4 py-3 grid grid-cols-2 gap-4 items-center">
                    <div className="text-[var(--color-text-primary)] text-sm">0X43***7E8B7</div>
                    <div className="text-[var(--color-accent-orange)] text-sm font-semibold text-right">8414.48</div>
                  </div>
                  <div className="bg-[var(--color-bg-secondary)] rounded-lg px-4 py-3 grid grid-cols-2 gap-4 items-center">
                    <div className="text-[var(--color-text-primary)] text-sm">0X62***AFA8C</div>
                    <div className="text-[var(--color-accent-orange)] text-sm font-semibold text-right">11467.03</div>
                  </div>
                  <div className="bg-[var(--color-bg-secondary)] rounded-lg px-4 py-3 grid grid-cols-2 gap-4 items-center">
                    <div className="text-[var(--color-text-primary)] text-sm">0X9F***F40FB</div>
                    <div className="text-[var(--color-accent-orange)] text-sm font-semibold text-right">25522.86</div>
                  </div>
                  <div className="bg-[var(--color-bg-secondary)] rounded-lg px-4 py-3 grid grid-cols-2 gap-4 items-center">
                    <div className="text-[var(--color-text-primary)] text-sm">0X92***FQFQ2</div>
                    <div className="text-[var(--color-accent-orange)] text-sm font-semibold text-right">7961.27</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-8">
          <div className="relative p-4">
            <div className="bg-gradient-to-r from-[var(--color-bg-secondary)] to-[var(--color-bg-tertiary)] rounded-xl p-4 border border-[var(--color-bg-border)]">
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold text-[var(--color-text-primary)] inline-block border-b-2 border-[var(--color-accent-orange)] pb-2">
                  FAQ
                </h2>
              </div>

              <div className="space-y-3">
                {faqData.map((faq) => (
                  <div
                    key={faq.id}
                    className="bg-[var(--color-bg-main)] rounded-lg border border-[var(--color-bg-border)] overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => setOpenFaqId(openFaqId === faq.id ? null : faq.id)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-[var(--color-bg-secondary)] transition-colors duration-200"
                    >
                      <span className="text-[var(--color-text-primary)] text-sm font-medium pr-4">
                        {faq.question}
                      </span>
                      <div className="flex-shrink-0">
                        <div className={`w-8 h-8 rounded-full bg-[var(--color-accent-orange)] flex items-center justify-center transition-transform duration-300 ${openFaqId === faq.id ? 'rotate-90' : ''}`}>
                          <ChevronLeft className="w-4 h-4 text-black" strokeWidth={2.5} />
                        </div>
                      </div>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openFaqId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-4 pb-4 pt-0">
                        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
