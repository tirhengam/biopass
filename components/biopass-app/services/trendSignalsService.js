import { INITIAL_TREND_STUDIES, BREAKING_SIGNALS_FEED } from '../data/trendStudiesDatabase.js';

const STORAGE_KEY = 'biopass_trend_studies_v1';
const TICKER_KEY = 'biopass_trend_ticker_v1';

export const INITIAL_TICKER_SIGNALS = [
  { molecule: "Ectoin", change: "+340%", direction: "up", status: "Emerging Osmolyte Wave", tag: "Extreme Barrier" },
  { molecule: "PDRN Salmon DNA", change: "+280%", direction: "up", status: "K-Beauty Bio-Repair", tag: "Bioremodeling" },
  { molecule: "Hypochlorous Acid", change: "+195%", direction: "up", status: "Gym Bag Anti-Blemish", tag: "Microbiome Safe" },
  { molecule: "Spicule Liquid Needles", change: "+410%", direction: "up", status: "Topical Transdermal Wave", tag: "Delivery Tech" },
  { molecule: "Flaxseed Gel Botox", change: "-42%", direction: "down", status: "Viral Myth Debunked", tag: "Mechanical Film" },
  { molecule: "Mexoryl 400 UV Filter", change: "+175%", direction: "up", status: "Ultra-Long UVA Shield", tag: "Photoprotection" },
  { molecule: "Copper Tripeptide-1", change: "+145%", direction: "up", status: "Collagen Matrix Remodeling", tag: "Peptides" }
];

export function loadTrendStudies() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error("Error loading trend studies:", e);
    }
  }
  return INITIAL_TREND_STUDIES;
}

export function loadTickerSignals() {
  const saved = localStorage.getItem(TICKER_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error("Error loading ticker signals:", e);
    }
  }
  return INITIAL_TICKER_SIGNALS;
}

export function fetchLatestTrendSignals() {
  // Simulate live dynamic fetch that introduces breaking signals, adjusts percentages, and timestamps articles
  const currentStudies = loadTrendStudies();
  const currentTickers = loadTickerSignals();

  // Randomly adjust ticker percentages to simulate real-time market fluctuations
  const updatedTickers = currentTickers.map(t => {
    const delta = (Math.random() * 14 - 5).toFixed(0);
    const baseVal = parseInt(t.change.replace(/[^0-9]/g, '')) || 100;
    const newVal = Math.max(20, baseVal + parseInt(delta));
    return {
      ...t,
      change: t.direction === 'up' ? `+${newVal}%` : `-${Math.max(10, Math.min(80, baseVal + parseInt(delta)))}%`
    };
  });

  // Check if breaking signals are already added
  let updatedStudies = [...currentStudies];
  BREAKING_SIGNALS_FEED.forEach(feedItem => {
    if (!updatedStudies.some(s => s.id === feedItem.id)) {
      updatedStudies.unshift({
        ...feedItem,
        date: `Refreshed ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`
      });
    }
  });

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedStudies));
  localStorage.setItem(TICKER_KEY, JSON.stringify(updatedTickers));

  return {
    studies: updatedStudies,
    tickers: updatedTickers,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
  };
}
