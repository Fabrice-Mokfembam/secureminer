import { articleImages, exchangeLogos } from '../../../assets';

interface ArticleItem {
  id: number;
  image: string;
  title: string;
}

const articles: ArticleItem[] = [
  {
    id: 1,
    image: articleImages.buy,
    title: 'How to Buy Cryptocurrency via P2P Trading on Binance App',
  },
  {
    id: 2,
    image: articleImages.sell,
    title: 'How to Sell Cryptocurrency via P2P Trading on Binance App',
  },
  {
    id: 3,
    image: articleImages.participate,
    title: 'How to participate in mining',
  },
];

interface ExchangeItem {
  id: number;
  name: string;
  logo: string;
}

const exchanges: ExchangeItem[] = [
  { id: 1, name: 'Binance', logo: exchangeLogos.binance },
  { id: 2, name: 'Bitstamp', logo: exchangeLogos.bitstamp },
  { id: 3, name: 'Coinbase', logo: exchangeLogos.coinbase },
  { id: 4, name: 'Gate.io', logo: exchangeLogos.gate },
  { id: 5, name: 'Huobi', logo: exchangeLogos.huobi },
  { id: 6, name: 'Kraken', logo: exchangeLogos.kraken },
  { id: 7, name: 'KuCoin', logo: exchangeLogos.kucoin },
  { id: 8, name: 'OKEx', logo: exchangeLogos.okex },
  { id: 9, name: 'Upbit', logo: exchangeLogos.upbit },
  { id: 10, name: 'WazirX', logo: exchangeLogos.wazirx },
  { id: 11, name: 'Binfinex', logo: exchangeLogos.binfinex },
  { id: 12, name: 'Crypto', logo: exchangeLogos.crypto },
];

function AboutPage() {
  return (
    <div className="pb-4">
      {/* Articles/Guides Section */}
      <div className=" mb-4">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <div className="relative p-4">
            <div className="bg-gradient-to-r from-[var(--color-bg-secondary)] to-[var(--color-bg-tertiary)] rounded-xl p-4 border border-[var(--color-bg-border)]">
              <div className="space-y-0 divide-y divide-[var(--color-bg-border)]">
                {articles.map((article, index) => (
                  <button
                    key={article.id}
                    className={`w-full flex items-center gap-4 p-4 hover:bg-[var(--color-bg-main)] transition-colors ${
                      index === 0 ? '' : ''
                    }`}
                  >
                    <div className="flex-shrink-0">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="text-[var(--color-text-primary)] text-sm font-medium leading-tight">
                        {article.title}
                      </h3>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cooperation Platform Section */}
      <div className=" mb-4">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <div className="relative p-4">
            <div className="bg-gradient-to-r from-[var(--color-bg-secondary)] to-[var(--color-bg-tertiary)] rounded-xl p-4 border border-[var(--color-bg-border)]">
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold text-[var(--color-text-primary)] inline-block border-b-2 border-[var(--color-accent-orange)] pb-2">
                  Cooperation Platform
                </h2>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {exchanges.map((exchange) => (
                  <div
                    key={exchange.id}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="w-12 h-12 flex items-center justify-center">
                      <img
                        src={exchange.logo}
                        alt={exchange.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-[var(--color-text-primary)] text-xs text-center">
                      {exchange.name}
                    </span>
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

export default AboutPage;

