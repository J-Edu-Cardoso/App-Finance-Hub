import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Globe, Newspaper, Coffee, Factory, Wheat, DollarSign, BarChart3, Activity, Calendar, Clock, RefreshCw, Menu, X, Bitcoin, Zap, ChevronLeft, ChevronRight, PieChart, LineChart, Target, AlertCircle } from 'lucide-react';

const FinancialDashboard = () => {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [currentNewsSlide, setCurrentNewsSlide] = useState(0);

  // Dados de criptomoedas
  const cryptoData = [
    { name: 'Bitcoin', symbol: 'BTC', price: 43250.67, change: 1234.56, changePercent: 2.94, marketCap: 845.2, volume: 28.5 },
    { name: 'Ethereum', symbol: 'ETH', price: 2567.89, change: -89.34, changePercent: -3.36, marketCap: 308.7, volume: 15.2 },
    { name: 'Binance Coin', symbol: 'BNB', price: 312.45, change: 8.90, changePercent: 2.93, marketCap: 46.8, volume: 2.1 },
    { name: 'Solana', symbol: 'SOL', price: 89.76, change: -2.34, changePercent: -2.54, marketCap: 38.9, volume: 1.8 },
    { name: 'Cardano', symbol: 'ADA', price: 0.4567, change: 0.0123, changePercent: 2.77, marketCap: 16.2, volume: 0.9 },
    { name: 'Polygon', symbol: 'MATIC', price: 0.8234, change: 0.0456, changePercent: 5.87, marketCap: 7.8, volume: 0.5 }
  ];

  // Insights de criptomoedas
  const cryptoInsights = [
    { type: 'bullish', title: 'Bitcoin rompe resistência', description: 'BTC quebrou importante resistência de $42K com volume alto', impact: 'high' },
    { type: 'bearish', title: 'Ethereum sob pressão', description: 'ETH perdeu suporte de $2600, próximo alvo $2400', impact: 'medium' },
    { type: 'neutral', title: 'Altcoins em consolidação', description: 'Maioria das altcoins em movimento lateral', impact: 'low' },
    { type: 'bullish', title: 'DeFi em recuperação', description: 'Tokens DeFi mostram sinais de recuperação', impact: 'medium' }
  ];

  // Dados expandidos de moedas
  const currencies = [
    { pair: 'USD/BRL', price: 5.1234, change: 0.0145, changePercent: 0.28, volume: 8.5, high: 5.1456, low: 5.0987 },
    { pair: 'EUR/BRL', price: 5.5678, change: -0.0234, changePercent: -0.42, volume: 4.2, high: 5.5912, low: 5.5234 },
    { pair: 'GBP/BRL', price: 6.4321, change: 0.0567, changePercent: 0.89, volume: 2.1, high: 6.4567, low: 6.3987 },
    { pair: 'JPY/BRL', price: 0.0345, change: -0.0012, changePercent: -3.36, volume: 1.8, high: 0.0356, low: 0.0334 },
    { pair: 'CAD/BRL', price: 3.7890, change: 0.0123, changePercent: 0.33, volume: 1.2, high: 3.8012, low: 3.7645 },
    { pair: 'AUD/BRL', price: 3.4567, change: 0.0089, changePercent: 0.26, volume: 0.9, high: 3.4678, low: 3.4234 }
  ];

  // Dados expandidos de bolsas
  const stockMarkets = [
    { name: 'IBOVESPA', country: 'Brasil', price: 128456.78, change: 1234.56, changePercent: 0.97, volume: 12.8, high: 129123.45, low: 127234.56 },
    { name: 'S&P 500', country: 'EUA', price: 4567.89, change: -23.45, changePercent: -0.51, volume: 89.2, high: 4589.34, low: 4534.56 },
    { name: 'NASDAQ', country: 'EUA', price: 14321.12, change: 89.34, changePercent: 0.63, volume: 67.5, high: 14456.78, low: 14187.90 },
    { name: 'DAX', country: 'Alemanha', price: 16789.45, change: -156.78, changePercent: -0.92, volume: 23.4, high: 16934.56, low: 16654.23 },
    { name: 'FTSE 100', country: 'Reino Unido', price: 7654.32, change: 45.67, changePercent: 0.60, volume: 18.9, high: 7689.45, low: 7612.34 },
    { name: 'Nikkei 225', country: 'Japão', price: 32456.78, change: 234.56, changePercent: 0.73, volume: 45.6, high: 32678.90, low: 32234.56 }
  ];

  // Slides de notícias
  const newsSlides = [
    {
      title: 'Mercado Brasileiro',
      news: [
        { title: 'Banco Central mantém Selic em 13,75% e sinaliza pausa no ciclo', source: 'Valor Econômico', time: '1h', category: 'Economia' },
        { title: 'Petrobras anuncia dividendos extraordinários de R$ 15 bilhões', source: 'InfoMoney', time: '2h', category: 'Empresas' },
        { title: 'Dólar fecha em alta com tensões sobre política fiscal', source: 'Reuters Brasil', time: '3h', category: 'Câmbio' },
        { title: 'Ibovespa renova máxima histórica aos 128 mil pontos', source: 'Investing.com', time: '1h', category: 'Bolsa' }
      ]
    },
    {
      title: 'Mercado Global',
      news: [
        { title: 'Fed mantém juros mas sinaliza cortes em 2025', source: 'Bloomberg', time: '4h', category: 'Política Monetária' },
        { title: 'Bitcoin supera US$ 43 mil com entrada de ETFs', source: 'CoinDesk', time: '2h', category: 'Crypto' },
        { title: 'Petróleo Brent sobe 3% com tensões no Oriente Médio', source: 'Financial Times', time: '5h', category: 'Commodities' },
        { title: 'Tesla reporta vendas recordes no Q4 de 2024', source: 'Forbes', time: '6h', category: 'Tecnologia' }
      ]
    },
    {
      title: 'Análise e Insights',
      news: [
        { title: 'Goldman Sachs eleva projeção para Ibovespa em 2025', source: 'The Economist', time: '3h', category: 'Análise' },
        { title: 'Setor de tecnologia brasileiro atrai US$ 2,3 bi em investimentos', source: 'Exame', time: '4h', category: 'Investimentos' },
        { title: 'Commodities agrícolas podem ter ano forte com La Niña', source: 'Agência Estado', time: '5h', category: 'Agronegócio' },
        { title: 'Mercado imobiliário mostra sinais de recuperação', source: 'Folha de S.Paulo', time: '7h', category: 'Imóveis' }
      ]
    }
  ];

  // Dados de commodities expandidos
  const commodities = [
    { name: 'Café Arábica', unit: 'cents/lb', price: 234.56, change: 5.67, changePercent: 2.48, volume: 12.5, high: 237.89, low: 231.23 },
    { name: 'Café Robusta', unit: 'USD/t', price: 2456.78, change: -34.56, changePercent: -1.39, volume: 8.9, high: 2489.34, low: 2423.45 },
    { name: 'Aço HRC', unit: 'USD/t', price: 678.90, change: 12.34, changePercent: 1.85, volume: 5.2, high: 682.45, low: 665.78 },
    { name: 'Minério de Ferro', unit: 'USD/t', price: 123.45, change: -2.34, changePercent: -1.86, volume: 15.6, high: 125.67, low: 121.89 },
    { name: 'Boi Gordo', unit: 'R$/arroba', price: 289.50, change: 4.50, changePercent: 1.58, volume: 2.3, high: 291.78, low: 287.34 },
    { name: 'Soja', unit: 'cents/bushel', price: 1456.78, change: 23.45, changePercent: 1.64, volume: 45.2, high: 1467.89, low: 1445.67 }
  ];

  const formatNumber = (num) => {
    return new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(num);
  };

  const formatCurrency = (num, currency = 'BRL') => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: currency
    }).format(num);
  };

  const formatLargeNumber = (num) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}T`;
    }
    return `${num.toFixed(1)}B`;
  };

  const getChangeColor = (change) => {
    return change >= 0 ? 'text-green-400' : 'text-red-400';
  };

  const getChangeIcon = (change) => {
    return change >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />;
  };

  const getInsightColor = (type) => {
    switch (type) {
      case 'bullish': return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'bearish': return 'text-red-400 bg-red-400/10 border-red-400/20';
      default: return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
    }
  };

  const getInsightIcon = (type) => {
    switch (type) {
      case 'bullish': return <TrendingUp className="w-4 h-4" />;
      case 'bearish': return <TrendingDown className="w-4 h-4" />;
      default: return <Target className="w-4 h-4" />;
    }
  };

  const TabButton = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => setSelectedTab(id)}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
        selectedTab === id
          ? 'bg-gradient-to-r from-gray-600 to-gray-700 text-white shadow-lg'
          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
      }`}
    >
      <Icon className="w-4 h-4" />
      <span className="hidden sm:inline">{label}</span>
    </button>
  );

  const DataCard = ({ title, children, className = '' }) => (
    <div className={`bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-6 shadow-xl border border-gray-700 ${className}`}>
      <h3 className="text-lg font-semibold text-gray-200 mb-4 flex items-center">
        {title}
      </h3>
      {children}
    </div>
  );

  const PriceRow = ({ item, showUnit = false, showVolume = false }) => (
    <div className="flex justify-between items-center py-3 border-b border-gray-700 last:border-0">
      <div>
        <span className="text-white font-medium">{item.name || item.pair}</span>
        {item.country && <span className="text-gray-400 text-sm ml-2">({item.country})</span>}
        {showUnit && <span className="text-gray-400 text-sm ml-2">({item.unit})</span>}
        {showVolume && item.volume && (
          <div className="text-xs text-gray-500 mt-1">
            Vol: {formatLargeNumber(item.volume)}
          </div>
        )}
      </div>
      <div className="text-right">
        <div className="text-white font-mono">
          {showUnit ? formatNumber(item.price) : formatCurrency(item.price)}
        </div>
        <div className={`text-sm flex items-center justify-end space-x-1 ${getChangeColor(item.change)}`}>
          {getChangeIcon(item.change)}
          <span>{item.change >= 0 ? '+' : ''}{formatNumber(item.change)}</span>
          <span>({item.changePercent >= 0 ? '+' : ''}{item.changePercent}%)</span>
        </div>
        {(item.high || item.low) && (
          <div className="text-xs text-gray-500 mt-1">
            H: {formatNumber(item.high)} L: {formatNumber(item.low)}
          </div>
        )}
      </div>
    </div>
  );

  const CryptoCard = ({ crypto }) => (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 border border-gray-700">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-white">{crypto.symbol.charAt(0)}</span>
          </div>
          <div>
            <h4 className="text-white font-medium">{crypto.name}</h4>
            <span className="text-gray-400 text-sm">{crypto.symbol}</span>
          </div>
        </div>
        <div className={`flex items-center space-x-1 ${getChangeColor(crypto.change)}`}>
          {getChangeIcon(crypto.change)}
          <span className="text-sm font-medium">{crypto.changePercent >= 0 ? '+' : ''}{crypto.changePercent}%</span>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm">Preço</span>
          <span className="text-white font-mono">${formatNumber(crypto.price)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm">Market Cap</span>
          <span className="text-white text-sm">${formatLargeNumber(crypto.marketCap)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm">Volume 24h</span>
          <span className="text-white text-sm">${formatLargeNumber(crypto.volume)}</span>
        </div>
      </div>
    </div>
  );

  const InsightCard = ({ insight }) => (
    <div className={`rounded-lg p-4 border ${getInsightColor(insight.type)}`}>
      <div className="flex items-start space-x-3">
        <div className="mt-1">
          {getInsightIcon(insight.type)}
        </div>
        <div>
          <h4 className="font-medium mb-1">{insight.title}</h4>
          <p className="text-sm opacity-80">{insight.description}</p>
          <div className="flex items-center space-x-2 mt-2">
            <span className={`text-xs px-2 py-1 rounded ${
              insight.impact === 'high' ? 'bg-red-600' : 
              insight.impact === 'medium' ? 'bg-yellow-600' : 'bg-blue-600'
            }`}>
              {insight.impact === 'high' ? 'Alto Impacto' : 
               insight.impact === 'medium' ? 'Médio Impacto' : 'Baixo Impacto'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  const NewsSlider = () => (
    <div className="relative">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-200">
          {newsSlides[currentNewsSlide].title}
        </h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setCurrentNewsSlide((prev) => (prev === 0 ? newsSlides.length - 1 : prev - 1))}
            className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-gray-300" />
          </button>
          <span className="text-sm text-gray-400">
            {currentNewsSlide + 1} / {newsSlides.length}
          </span>
          <button
            onClick={() => setCurrentNewsSlide((prev) => (prev === newsSlides.length - 1 ? 0 : prev + 1))}
            className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            <ChevronRight className="w-4 h-4 text-gray-300" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {newsSlides[currentNewsSlide].news.map((news, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-4 border border-gray-600 hover:bg-gray-750 transition-colors cursor-pointer">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">
                {news.category}
              </span>
              <span className="text-xs text-gray-400">{news.time}</span>
            </div>
            <h4 className="text-sm font-medium text-white mb-2 line-clamp-2">
              {news.title}
            </h4>
            <p className="text-xs text-gray-400">{news.source}</p>
          </div>
        ))}
      </div>
    </div>
  );

  // Auto-rotate news slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsSlide((prev) => (prev === newsSlides.length - 1 ? 0 : prev + 1));
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdate(new Date());
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-900 to-gray-800 border-b border-gray-700 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-8 h-8 text-blue-400" />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  FinanceHub Pro
                </h1>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-400">
                <Clock className="w-4 h-4" />
                <span>Última atualização: {lastUpdate.toLocaleTimeString('pt-BR')}</span>
              </div>
              <button className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                <RefreshCw className="w-5 h-5 text-gray-300" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-2 py-4 overflow-x-auto">
            <TabButton id="overview" label="Visão Geral" icon={Activity} />
            <TabButton id="crypto" label="Crypto" icon={Bitcoin} />
            <TabButton id="currencies" label="Moedas" icon={DollarSign} />
            <TabButton id="stocks" label="Bolsas" icon={TrendingUp} />
            <TabButton id="commodities" label="Commodities" icon={Factory} />
            <TabButton id="news" label="Notícias" icon={Newspaper} />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {selectedTab === 'overview' && (
          <div className="space-y-6">
            {/* News Slider */}
            <DataCard title="Principais Notícias do Mercado" className="mb-6">
              <NewsSlider />
            </DataCard>

            {/* Market Overview Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <DataCard title="Top Cryptos" className="lg:col-span-1">
                <div className="space-y-4">
                  {cryptoData.slice(0, 3).map((crypto, index) => (
                    <CryptoCard key={index} crypto={crypto} />
                  ))}
                </div>
              </DataCard>

              <DataCard title="Principais Moedas" className="lg:col-span-1">
                <div className="space-y-0">
                  {currencies.slice(0, 4).map((currency, index) => (
                    <PriceRow key={index} item={currency} showVolume />
                  ))}
                </div>
              </DataCard>

              <DataCard title="Principais Bolsas" className="lg:col-span-1">
                <div className="space-y-0">
                  {stockMarkets.slice(0, 4).map((market, index) => (
                    <PriceRow key={index} item={market} showVolume />
                  ))}
                </div>
              </DataCard>

              <DataCard title="Commodities Destaque" className="lg:col-span-1">
                <div className="space-y-0">
                  {commodities.slice(0, 4).map((commodity, index) => (
                    <PriceRow key={index} item={commodity} showUnit showVolume />
                  ))}
                </div>
              </DataCard>
            </div>

            {/* Crypto Insights */}
            <DataCard title="Insights do Mercado Crypto" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cryptoInsights.map((insight, index) => (
                  <InsightCard key={index} insight={insight} />
                ))}
              </div>
            </DataCard>
          </div>
        )}

        {selectedTab === 'crypto' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cryptoData.map((crypto, index) => (
                <CryptoCard key={index} crypto={crypto} />
              ))}
            </div>

            <DataCard title="Análise e Insights Crypto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cryptoInsights.map((insight, index) => (
                  <InsightCard key={index} insight={insight} />
                ))}
              </div>
            </DataCard>
          </div>
        )}

        {selectedTab === 'currencies' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <DataCard title="Cotações de Moedas" className="lg:col-span-2">
              <div className="space-y-0">
                {currencies.map((currency, index) => (
                  <PriceRow key={index} item={currency} showVolume />
                ))}
              </div>
            </DataCard>
          </div>
        )}

        {selectedTab === 'stocks' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <DataCard title="Principais Bolsas Mundiais" className="lg:col-span-2">
              <div className="space-y-0">
                {stockMarkets.map((market, index) => (
                  <PriceRow key={index} item={market} showVolume />
                ))}
              </div>
            </DataCard>
          </div>
        )}

        {selectedTab === 'commodities' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <DataCard title="Commodities Agrícolas" className="lg:col-span-1">
              <div className="space-y-0">
                {commodities.filter(c => ['Café Arábica', 'Café Robusta', 'Soja'].includes(c.name)).map((commodity, index) => (
                  <PriceRow key={index} item={commodity} showUnit showVolume />
                ))}
              </div>
            </DataCard>

            <DataCard title="Metais e Pecuária" className="lg:col-span-1">
              <div className="space-y-0">
                {commodities.filter(c => ['Aço HRC', 'Minério de Ferro', 'Boi Gordo'].includes(c.name)).map((commodity, index) => (
                  <PriceRow key={index} item={commodity} showUnit showVolume />
                ))}
              </div>
            </DataCard>
          </div>
        )}

        {selectedTab === 'news' && (
          <div className="space-y-6">
            <DataCard title="Feed de Notícias Completo">
              <NewsSlider />
            </DataCard>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsSlides.map((slide, slideIndex) => (
                <DataCard key={slideIndex} title={slide.title}>
                  <div className="space-y-4">
                    {slide.news.map((news, index) => (
                      <div key={index} className="bg-gray-800 rounded-lg p-4 border border-gray-600">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">
                            {news.category}
                          </span>
                          <span className="text-xs text-gray-400">{news.time}</span>
                        </div>
                        <h4 className="text-sm font-medium text-white mb-2">
                          {news.title}
                        </h4>
                        <p className="text-xs text-gray-400">{news.source}</p>
                      </div>
                    ))}
                  </div>
                </DataCard>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-700 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2025 FinanceHub Pro. Dados em tempo real para análise profissional de mercados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FinancialDashboard;