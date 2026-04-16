import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal, 
  Cpu, 
  Wallet, 
  TrendingUp, 
  DollarSign, 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react';

type AppState = 'idle' | 'scrapping' | 'results' | 'withdrawing' | 'final';

const LOG_MESSAGES = [
  "INITIALIZING SCRAPE ENGINE v4.2.0...",
  "CONNECTING TO GLOBAL NODE NETWORK...",
  "BYPASSING FIREWALLS: 12.PX.90.1",
  "ENCRYPTING TRAFFIC (AES-256)...",
  "SCANNING UNUSED AD REVENUE BUFFER...",
  "FRAGMENTING PACKETS...",
  "EXTRACTING UNALLOCATED CURRENCY...",
  "RE-ROUTING THROUGH SECURE PROXY...",
  "CLEANING TRANSACTION TRACE...",
  "VERIFYING BLOCK INTERGRITY...",
  "UPDATING LOCAL WALLET CACHE...",
  "COLLECTING MICROLINK REWARDS...",
  "HARVESTING CLOUD COMPUTE RESIDUALS...",
  "DECRYPTING SECURE LEDGERS...",
  "OPTIMIZING DATA THROUGHPUT...",
  "PINGING SECURE ENDPOINTS...",
];

export default function App() {
  const [appState, setAppState] = useState<AppState>('idle');
  const [progress, setProgress] = useState(0);
  const [balance, setBalance] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [formValues, setFormValues] = useState({ wallet: '', method: 'BTC' });
  const logContainerRef = useRef<HTMLDivElement>(null);

  // Scrapping simulation logic
  useEffect(() => {
    if (appState === 'scrapping') {
      const duration = 10000; // 10 seconds
      const interval = 50;
      const steps = duration / interval;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const newProgress = (currentStep / steps) * 100;
        setProgress(newProgress);

        // Add logs randomly
        if (Math.random() > 0.8) {
          const msg = LOG_MESSAGES[Math.floor(Math.random() * LOG_MESSAGES.length)];
          setLogs(prev => [...prev.slice(-15), `${new Date().toLocaleTimeString()} > ${msg}`]);
        }

        // Increase balance rapidly
        setBalance(prev => prev + (Math.random() * 85));

        if (currentStep >= steps) {
          clearInterval(timer);
          setAppState('results');
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [appState]);

  // Scroll logs to bottom
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  const handleStart = () => {
    setAppState('scrapping');
    setProgress(0);
    setBalance(0);
    setLogs(["[SYSTEM] INITIALIZING..."]);
  };

  const handleWithdraw = () => {
    setAppState('withdrawing');
  };

  const handleSubmitWithdrawal = (e: React.FormEvent) => {
    e.preventDefault();
    setAppState('final');
  };

  return (
    <div className="min-h-screen bg-hacker-black flex flex-col items-center justify-center p-4">
      {/* Background Matrix-like Overlay (Static) */}
      <div className="absolute inset-0 pointer-events-none opacity-5 overflow-hidden">
        <div className="grid grid-cols-10 gap-2 p-4 terminal-text text-[8px] break-all leading-none">
          {Array.from({ length: 40 }).map((_, i) => (
            <div key={i}>{LOG_MESSAGES.join('')}</div>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {appState === 'idle' && (
          <motion.div 
            key="idle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="z-10 text-center max-w-2xl"
          >
            <div className="mb-6 flex justify-center">
              <div className="p-4 border border-neon-green/30 bg-neon-green/5 shadow-[0_0_30px_rgba(0,255,65,0.1)]">
                <Terminal className="w-16 h-16 text-neon-green" strokeWidth={1} />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-mono terminal-text mb-4 uppercase tracking-tighter italic">
              CyberScraper v4.2
            </h1>
            <p className="text-gray-400 mb-10 font-mono text-sm uppercase tracking-widest max-w-lg mx-auto">
              Automated digital currency harvesting protocol. Secure. Untraceable. Instant.
            </p>
            
            <button 
              onClick={handleStart}
              className="glow-btn group"
            >
              <span className="flex items-center gap-2">
                Init Scrape Sequence <Zap className="w-4 h-4 fill-neon-green group-hover:fill-hacker-black" />
              </span>
            </button>

            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-8 opacity-50">
              <div className="text-center">
                <div className="text-neon-green font-mono text-xl">12.4K</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500">Active Nodes</div>
              </div>
              <div className="text-center">
                <div className="text-neon-green font-mono text-xl">$4.2M</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500">Total Scraped</div>
              </div>
              <div className="text-center">
                <div className="text-neon-green font-mono text-xl">99.9%</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500">Success Rate</div>
              </div>
            </div>
          </motion.div>
        )}

        {appState === 'scrapping' && (
          <motion.div 
            key="scrapping"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="z-10 w-full max-w-3xl"
          >
            <div className="border border-neon-green/30 bg-black/80 backdrop-blur-md p-6 md:p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
                <div>
                  <h2 className="text-xs uppercase tracking-[0.2em] text-neon-green mb-1 font-mono">Operations in Progress</h2>
                  <div className="flex items-center gap-3">
                    <Cpu className="w-8 h-8 text-neon-green animate-pulse" />
                    <span className="text-3xl font-mono text-white">SYSTEM_SCRAPE</span>
                  </div>
                </div>
                <div className="text-right w-full md:w-auto overflow-hidden">
                  <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-1 font-mono">Current Yield</div>
                  <div className="text-4xl font-mono text-neon-green tracking-tighter">
                    ${balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex justify-between text-[10px] font-mono text-neon-green mb-2 uppercase tracking-widest">
                  <span>Harvesting Buffer</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="progress-bar-glow">
                  <motion.div 
                    className="progress-fill" 
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                  {/* Digital scanner line effect */}
                  <motion.div 
                    className="absolute top-0 right-0 h-full w-4 bg-white/20 blur-sm"
                    animate={{ left: ['-10%', '110%'] }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  />
                </div>
              </div>

              <div 
                ref={logContainerRef}
                className="h-64 bg-hacker-black/50 border border-white/10 p-4 font-mono text-[11px] overflow-y-auto scrolling-touch"
              >
                {logs.map((log, i) => (
                  <div key={i} className="mb-1">
                    <span className="text-neon-green opacity-80">{log}</span>
                  </div>
                ))}
                <div className="animate-pulse">_</div>
              </div>

              <div className="mt-6 flex items-center justify-between text-[10px] uppercase font-mono text-gray-500">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-3 h-3 text-red-500" />
                  <span>Encrypted Channel Active</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-3 h-3 text-neon-green" />
                  <span>Scrape Rate: +$142.2/sec</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {appState === 'results' && (
          <motion.div 
            key="results"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="z-10 text-center"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', damping: 12 }}
              className="w-24 h-24 bg-neon-green rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_50px_rgba(0,255,65,0.4)]"
            >
              <DollarSign className="w-12 h-12 text-hacker-black" strokeWidth={3} />
            </motion.div>

            <h2 className="text-2xl font-mono terminal-text mb-2 uppercase italic tracking-tighter">
              Scraping Complete
            </h2>
            <div className="text-6xl font-mono text-white mb-4 tracking-tighter">
              ${balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <p className="text-gray-400 font-mono text-sm mb-10 uppercase tracking-widest bg-white/5 py-2 px-4 rounded">
              Funds Allocated to Temporary Buffer #8821
            </p>

            <div className="flex flex-col gap-4 max-w-xs mx-auto">
              <button 
                onClick={handleWithdraw}
                className="glow-btn flex items-center justify-center gap-2"
              >
                Transfer to Wallet <Wallet className="w-4 h-4" />
              </button>
              <button 
                onClick={handleStart}
                className="text-gray-500 font-mono text-[10px] uppercase tracking-widest hover:text-white transition-colors"
              >
                Initialize New Scrape
              </button>
            </div>
          </motion.div>
        )}

        {appState === 'withdrawing' && (
          <motion.div 
            key="withdrawing"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="z-10 w-full max-w-md bg-white/5 border border-white/10 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-neon-green/10 border border-neon-green/30">
                <Wallet className="w-5 h-5 text-neon-green" />
              </div>
              <h2 className="text-xl font-mono uppercase tracking-widest text-white">Transfer Funds</h2>
            </div>
            
            <form onSubmit={handleSubmitWithdrawal} className="space-y-6">
              <div>
                <label className="block text-[10px] font-mono uppercase text-gray-500 mb-2 tracking-widest">Withdrawal Method</label>
                <div className="grid grid-cols-3 gap-2">
                  {['BTC', 'ETH', 'USD'].map(method => (
                    <button
                      key={method}
                      type="button"
                      onClick={() => setFormValues({ ...formValues, method })}
                      className={`py-2 text-xs font-mono border ${formValues.method === method ? 'bg-neon-green text-hacker-black border-neon-green' : 'border-white/20 text-gray-400 hover:border-neon-green/50'}`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase text-gray-500 mb-2 tracking-widest">
                  {formValues.method} Wallet / Address
                </label>
                <input 
                  required
                  type="text"
                  placeholder="Ox..."
                  className="w-full bg-hacker-black border border-white/20 p-3 font-mono text-xs focus:border-neon-green outline-none transition-colors text-neon-green"
                  value={formValues.wallet}
                  onChange={e => setFormValues({ ...formValues, wallet: e.target.value })}
                />
              </div>

              <div className="p-4 bg-orange-500/10 border border-orange-500/30">
                <div className="flex gap-3">
                  <ShieldAlert className="w-4 h-4 text-orange-500 shrink-0" />
                  <p className="text-[10px] font-mono text-orange-200/80 leading-relaxed uppercase">
                    One-time transaction limit: $10,000. Larger amounts require tiered account verification. Processing time: 2-4 minutes.
                  </p>
                </div>
              </div>

              <button type="submit" className="w-full glow-btn flex items-center justify-center gap-2">
                Execute Transfer <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}

        {appState === 'final' && (
          <motion.div 
            key="final"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="z-10 text-center max-w-md p-8 border border-neon-green/30 bg-black"
          >
            <div className="flex justify-center mb-6">
              <div className="relative">
                <CheckCircle2 className="w-20 h-20 text-neon-green" strokeWidth={1} />
                <motion.div 
                  className="absolute inset-0 rounded-full border-2 border-neon-green"
                  initial={{ scale: 1, opacity: 1 }}
                  animate={{ scale: 1.5, opacity: 0 }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </div>
            <h2 className="text-2xl font-mono terminal-text mb-4 uppercase italic tracking-tighter">
              Transfer Initialized
            </h2>
            <div className="font-mono text-xs text-gray-400 space-y-4 uppercase tracking-widest leading-loose">
              <p>Sequence ID: <span className="text-white">TX-9102-SCRP</span></p>
              <p>Amount: <span className="text-neon-green">${balance.toLocaleString()}</span></p>
              <p>Destination: <span className="text-white truncate block max-w-xs mx-auto">{formValues.wallet}</span></p>
              
              <div className="h-px bg-white/10 my-6" />
              
              <p className="text-xs">
                Status: <span className="text-orange-500 animate-pulse">Pending Confirmation</span>
              </p>
              <p className="text-[9px] lowercase normal-case text-gray-600">
                Verification required for final disbursement. Please wait 24-48 hours for blockchain sync.
              </p>
            </div>

            <button 
              onClick={() => setAppState('idle')}
              className="mt-10 text-neon-green font-mono text-[10px] uppercase tracking-[0.2em] border-b border-neon-green/30 pb-1 hover:border-neon-green transition-all"
            >
              Back to Dashboard
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Status Bar */}
      <footer className="fixed bottom-0 left-0 w-full p-2 bg-black/50 border-t border-white/5 flex justify-between items-center z-50">
        <div className="flex items-center gap-4 text-[9px] font-mono uppercase tracking-widest">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
            <span className="text-neon-green">Engine Online</span>
          </div>
          <span className="hidden md:inline text-gray-600">Session: {Math.random().toString(36).substring(7).toUpperCase()}</span>
          <span className="hidden md:inline text-gray-600">IP: 104.28.12.91</span>
        </div>
        <div className="flex items-center gap-4 text-[9px] font-mono text-gray-600 uppercase tracking-widest">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3 h-3" /> System Secure
          </span>
          <span className="text-neon-green/50">CyberScraper v4.2.0</span>
        </div>
      </footer>
    </div>
  );
}
