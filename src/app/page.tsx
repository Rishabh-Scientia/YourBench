'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Lock, 
  Sparkles, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Terminal, 
  Globe, 
  Cpu,
  Brain,
  MessageSquare,
  ArrowRightLeft,
  ChevronRight,
  User,
  GraduationCap
} from 'lucide-react';
import SmartImage from '@/components/SmartImage';

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'FeeMaster',
    message: ''
  });

  const [dashoffset, setDashoffset] = useState(500);
  const [growthVal, setGrowthVal] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  const terminalLines = [
    "📡 Establishing link to yoursbench.in...",
    "🤖 Init AI Prep Quiz Generator engine",
    "💾 Local DB loaded: %LOCALAPPDATA%/feemaster.db",
    "⚡ FeeMaster Cloud Node synced in 14ms",
    "📊 Compiled school collection payout: OK",
    "🟢 WhatsApp campaign server status: ONLINE",
    "🧠 RAG query parsed: CBSE class 10 science",
    "📈 Growth indicator shifted: +49.1%",
    "🚀 Vercel Edge Server response: 200 OK"
  ];

  useEffect(() => {
    // Fill first 3 lines
    setLogs([terminalLines[0], terminalLines[1], terminalLines[2]]);
    let logIndex = 3;
    const logInterval = setInterval(() => {
      setLogs(prev => {
        const nextLog = terminalLines[logIndex % terminalLines.length];
        logIndex++;
        return [...prev.slice(1), nextLog];
      });
    }, 2500);

    // Animate stroke dashoffset
    let currentOffset = 500;
    const interval = setInterval(() => {
      currentOffset -= 12;
      if (currentOffset <= 0) {
        currentOffset = 0;
        clearInterval(interval);
      }
      setDashoffset(currentOffset);
    }, 20);

    // Animate growth count up
    let startVal = 0;
    const targetVal = 48.2;
    const increment = 1.2;
    const growthInterval = setInterval(() => {
      startVal += increment;
      if (startVal >= targetVal) {
        startVal = targetVal;
        clearInterval(growthInterval);
      }
      setGrowthVal(parseFloat(startVal.toFixed(1)));
    }, 30);

    // Live fluctuation simulation after loading finishes
    const fluctuation = setInterval(() => {
      const delta = (Math.random() - 0.5) * 1.5;
      setGrowthVal(prev => {
        const next = parseFloat((prev + delta).toFixed(1));
        return Math.min(Math.max(next, 40), 55);
      });
    }, 4000);

    return () => {
      clearInterval(logInterval);
      clearInterval(interval);
      clearInterval(growthInterval);
      clearInterval(fluctuation);
    };
  }, []);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Wire up real email via Resend or Nodemailer in a Server Action or API route
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormState({
        name: '',
        email: '',
        phone: '',
        interest: 'FeeMaster',
        message: ''
      });
    }, 4000);
  };

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      
      {/* SECTION 2 — HERO (Full Viewport) */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center bg-white hero-gradient py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-xs font-semibold uppercase tracking-wider mb-4">
                  <Sparkles size={12} className="animate-pulse" />
                  <span>Build Smarter. Grow Faster.</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-tight">
                  We Build Software That Works for <span className="text-brand-green">India&apos;s</span>{" "}Schools &amp; Businesses
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="text-lg text-neutral-600 max-w-xl leading-relaxed"
              >
                YourBench is an Indian software company crafting powerful desktop tools, AI-powered automation, and custom digital solutions — built specifically for the needs of Indian schools, educators, and growing businesses.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4 pt-2"
              >
                <button
                  onClick={() => handleScrollTo('products')}
                  suppressHydrationWarning
                  className="px-8 py-4 bg-brand-green hover:bg-brand-green-hover text-white font-bold rounded-lg transition-all duration-200 shadow-xl shadow-brand-green/20 text-center cursor-pointer"
                >
                  See Our Products
                </button>
                <button
                  onClick={() => handleScrollTo('contact')}
                  suppressHydrationWarning
                  className="px-8 py-4 border-2 border-brand-black hover:bg-brand-black/5 text-brand-black font-bold rounded-lg transition-all duration-200 text-center cursor-pointer"
                >
                  Hire Us for Custom Software
                </button>
              </motion.div>
            </div>

            {/* Right Graphic Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="lg:col-span-5 flex justify-center items-center"
            >
              <div className="relative w-full max-w-[480px] aspect-square bg-[#0A0A0A] rounded-2xl shadow-2xl overflow-hidden border border-neutral-800 p-4">
                {/* Browser bar */}
                <div className="flex items-center gap-2 border-b border-neutral-800 pb-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <div className="ml-4 text-xs font-mono text-neutral-500 bg-neutral-900 px-3 py-1 rounded border border-neutral-800 flex-grow">
                    yourbench.in/analytics
                  </div>
                </div>

                {/* Dashboard layout simulator */}
                <div className="grid grid-cols-3 gap-3 h-[calc(100%-3rem)]">
                  {/* Left panel (terminal console) */}
                  <div className="bg-neutral-950 rounded-lg p-2.5 border border-neutral-800 flex flex-col justify-between overflow-hidden">
                    <div className="flex items-center justify-between border-b border-neutral-900 pb-1.5 mb-2">
                      <span className="text-[7px] text-neutral-500 uppercase tracking-widest font-bold">Terminal Console</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                    </div>
                    <div className="space-y-2 font-mono text-[6px] sm:text-[7px] leading-normal flex-grow flex flex-col justify-end text-neutral-400">
                      {logs.map((log, idx) => (
                        <div key={idx} className="truncate border-l border-brand-green/30 pl-1 text-neutral-300">
                          <span className="text-brand-green">&gt; </span>{log}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right panel (larger) */}
                  <div className="col-span-2 bg-neutral-900 rounded-lg p-3 border border-neutral-800 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <div className="h-4 w-24 bg-neutral-800 rounded animate-pulse" />
                      <div className="h-4 w-4 rounded bg-brand-green/20 flex items-center justify-center text-[10px] text-brand-green font-bold">
                        ₹
                      </div>
                    </div>
                    
                    {/* SVG Graphic (chart mockup) */}
                    <div className="w-full flex-grow flex items-end justify-center py-4 relative">
                      {/* Floating glowing circles (neural net nodes) */}
                      <div className="absolute top-2 left-6 w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping opacity-75" />
                      <div className="absolute top-2 left-6 w-2.5 h-2.5 rounded-full bg-blue-500" />
                      
                      <div className="absolute top-12 right-12 w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                      <div className="absolute top-12 right-12 w-2 h-2 rounded-full bg-indigo-500" />

                      <div className="absolute bottom-10 right-4 w-3 h-3 rounded-full bg-brand-green animate-ping opacity-60" />
                      <div className="absolute bottom-10 right-4 w-3 h-3 rounded-full bg-brand-green" />

                      <svg viewBox="0 0 200 100" className="w-full h-full overflow-visible">
                        <defs>
                          {/* Gradients */}
                          <linearGradient id="greenGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#1A8A1A" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#1A8A1A" stopOpacity="0.0" />
                          </linearGradient>
                          <linearGradient id="indigoGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#6366F1" stopOpacity="0.0" />
                          </linearGradient>
                          <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        {/* Grid lines */}
                        <line x1="0" y1="20" x2="200" y2="20" stroke="#1F1F1F" strokeWidth="1" />
                        <line x1="0" y1="50" x2="200" y2="50" stroke="#1F1F1F" strokeWidth="1" />
                        <line x1="0" y1="80" x2="200" y2="80" stroke="#1F1F1F" strokeWidth="1" />
                        
                        {/* Blue Area & Line */}
                        <path d="M 0 85 Q 40 75 80 65 T 160 55 T 200 45 L 200 100 L 0 100 Z" fill="url(#blueGrad)" />
                        <path d="M 0 85 Q 40 75 80 65 T 160 55 T 200 45" fill="none" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="500" strokeDashoffset={dashoffset * 1.2} />

                        {/* Indigo Area & Line */}
                        <path d="M 0 95 Q 30 85 70 70 T 140 50 T 200 35 L 200 100 L 0 100 Z" fill="url(#indigoGrad)" />
                        <path d="M 0 95 Q 30 85 70 70 T 140 50 T 200 35" fill="none" stroke="#6366F1" strokeWidth="1.5" strokeDasharray="500" strokeDashoffset={dashoffset * 1.1} />

                        {/* Green Area & Line (Featured) */}
                        <path d="M 0 90 Q 30 70 60 50 T 120 40 T 180 15 L 200 15 L 200 100 L 0 100 Z" fill="url(#greenGrad)" />
                        <path 
                          d="M 0 90 Q 30 70 60 50 T 120 40 T 180 15 L 200 15" 
                          fill="none" 
                          stroke="#1A8A1A" 
                          strokeWidth="3" 
                          strokeLinecap="round" 
                          strokeDasharray="500"
                          strokeDashoffset={dashoffset}
                        />
                        
                        {/* High-tech pulsing dot */}
                        <circle cx="180" cy="15" r="4" fill="#FFFFFF" stroke="#1A8A1A" strokeWidth="2" />
                      </svg>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-neutral-955 p-2 rounded border border-neutral-800" suppressHydrationWarning>
                        <div className="text-[10px] text-neutral-500 uppercase">Growth</div>
                        <div className="text-xs font-bold text-white">+{growthVal}%</div>
                      </div>
                      <div className="bg-neutral-950 p-2 rounded border border-neutral-800">
                        <div className="text-[10px] text-neutral-500 uppercase">Status</div>
                        <div className="text-xs font-bold text-brand-green">Active</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 3 — TRUST BAR */}
      <section className="bg-neutral-900 border-y border-neutral-800 text-neutral-300 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center lg:text-left divide-y lg:divide-y-0 lg:divide-x divide-neutral-800">
            <div className="flex items-center justify-center lg:justify-start gap-3 p-2 lg:pl-6">
              <span className="text-2xl">🏫</span>
              <span className="text-sm font-semibold tracking-wide">Built for Indian Schools</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3 p-2 pt-6 lg:pt-2 lg:pl-6">
              <span className="text-2xl">🧰</span>
              <span className="text-sm font-semibold tracking-wide">Production desktop apps</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3 p-2 pt-6 lg:pt-2 lg:pl-6">
              <span className="text-2xl">💬</span>
              <span className="text-sm font-semibold tracking-wide">Custom Solutions Available</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3 p-2 pt-6 lg:pt-2 lg:pl-6">
              <span className="text-2xl">🇮🇳</span>
              <span className="text-sm font-semibold tracking-wide">Made in India, by YourBench</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — PRODUCTS (Bento Grid) */}
      <section id="products" className="py-20 md:py-28 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900">Our Products</h2>
            <p className="text-neutral-600 max-w-lg mx-auto">
              Tools we&apos;ve built. Each designed to solve a real problem.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Card 1 — FeeMaster (Featured, Full Width or Large Position) */}
            <motion.div
              whileHover={{ y: -6, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="lg:col-span-2 bg-white rounded-2xl border-l-4 border-brand-green border-y border-r border-neutral-200/80 shadow-md p-6 sm:p-8 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden"
            >
              {/* Product Info left */}
              <div className="flex-1 space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="w-12 h-12 relative rounded bg-[#F8F9FA] p-1 flex items-center justify-center border border-neutral-200">
                    <SmartImage
                      src="/logo-feemaster.png"
                      fallbackSrc="/logo-feemaster.svg"
                      alt="FeeMaster Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Available Now
                    </span>
                    <h3 className="text-2xl font-bold text-neutral-900 mt-0.5">FeeMaster</h3>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-brand-green">Simplify Fees. Empower Schools.</h4>
                  <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                    A complete desktop fee management system for Indian schools — handles fee collection, student records, staff payroll, attendance, and multi-role access. Built for Windows, works fully offline.
                  </p>
                </div>

                {/* Feature Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {['Fee Collection', 'Staff Payroll', 'Attendance', 'Reports & Receipts', 'Role-Based Access'].map((tag) => (
                    <span key={tag} className="text-xs bg-neutral-100 text-neutral-700 px-3 py-1.5 rounded-md font-medium border border-neutral-200/50">
                      {tag}
                    </span>
                  ))}
                </div>

                <div>
                  <Link 
                    href="/products/feemaster" 
                    target="_blank"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-green hover:bg-brand-green-hover text-white font-bold transition-colors shadow-lg shadow-brand-green/20"
                  >
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
              
              {/* Product Mockup right */}
              <div className="w-full md:w-80 lg:w-96 aspect-[4/3] bg-neutral-50 border border-neutral-200/70 rounded-xl shadow-inner flex items-center justify-center p-2 relative overflow-hidden">
                <SmartImage
                  src="/fee-master-dashboard.webp"
                  fallbackSrc="/logo-feemaster.svg"
                  alt="FeeMaster Desktop Dashboard"
                  className="w-full h-full object-cover rounded-lg shadow border border-neutral-100"
                />
              </div>
            </motion.div>

            {/* Card 2 — Prep with AI (Coming Soon) */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl border border-neutral-200/80 shadow-md p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Lock Badge Top Right */}
              <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-500 text-[10px] font-bold border border-neutral-200">
                <Lock size={10} />
                <span>In Development</span>
              </div>

              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-indigo-50 border border-indigo-100 text-indigo-600">
                    <Brain size={24} />
                  </div>
                  <div>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-800 text-[10px] font-bold">
                      🔜 Coming Soon
                    </span>
                    <h3 className="text-xl font-bold text-neutral-900 mt-0.5">Prep with AI</h3>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-md font-semibold text-neutral-800">Study Smarter with AI-Generated Quizzes</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    AI-powered quiz and preparation tool — select class, subject, and chapter, get instant quizzes with auto-scoring, leaderboards, and performance analytics.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {['AI Quiz Generation', 'Class & Subject Filters', 'Score Tracking', 'Leaderboard'].map((tag) => (
                    <span key={tag} className="text-[10px] bg-neutral-100 text-neutral-600 px-2 py-1 rounded border border-neutral-200/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  disabled
                  suppressHydrationWarning
                  className="w-full text-center px-4 py-3 rounded-lg bg-neutral-100 text-neutral-400 font-semibold border border-neutral-200 pointer-events-none cursor-not-allowed text-sm"
                >
                  Coming Soon
                </button>
              </div>
            </motion.div>

            {/* Card 3 — WhatsApp Automation Engine (Coming Soon) */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl border border-neutral-200/80 shadow-md p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Lock Badge Top Right */}
              <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-500 text-[10px] font-bold border border-neutral-200">
                <Lock size={10} />
                <span>In Development</span>
              </div>

              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-green-50 border border-green-100 text-green-600">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-800 text-[10px] font-bold">
                      🔜 Coming Soon
                    </span>
                    <h3 className="text-xl font-bold text-neutral-900 mt-0.5">WhatsApp Automation</h3>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-md font-semibold text-neutral-800">Automate Your Business Communication</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    WhatsApp automation for Indian businesses — bulk messaging, automated replies, campaign management, and customer flow automation.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {['Bulk Messaging', 'Auto-Reply', 'Campaign Manager', 'Business Workflows'].map((tag) => (
                    <span key={tag} className="text-[10px] bg-neutral-100 text-neutral-600 px-2 py-1 rounded border border-neutral-200/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  disabled
                  suppressHydrationWarning
                  className="w-full text-center px-4 py-3 rounded-lg bg-neutral-100 text-neutral-400 font-semibold border border-neutral-200 pointer-events-none cursor-not-allowed text-sm"
                >
                  Coming Soon
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 5 — CUSTOM SOFTWARE SOLUTIONS */}
      <section id="solutions" className="py-20 md:py-28 custom-solutions-gradient border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Header Content */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 leading-tight">
                Need Something Custom?
              </h2>
              <p className="text-neutral-600 leading-relaxed text-base sm:text-lg">
                Don&apos;t see exactly what you need? We build custom software solutions for schools, businesses, and startups — from desktop tools to web applications. If you can describe it, we can build it.
              </p>
              <div>
                <button
                  onClick={() => handleScrollTo('contact')}
                  suppressHydrationWarning
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-black hover:bg-neutral-800 text-white font-bold rounded-lg transition-colors cursor-pointer"
                >
                  Let&apos;s Talk About Your Project <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Feature Blocks Right */}
            <div className="lg:col-span-7 space-y-6">
              {/* Block 1 */}
              <div className="flex gap-4 p-5 rounded-xl bg-white border border-neutral-200/60 shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-green">
                  <Terminal size={24} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-neutral-900">🖥️ Desktop Applications</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    Windows desktop tools built with Python and modern UI frameworks.
                  </p>
                </div>
              </div>

              {/* Block 2 */}
              <div className="flex gap-4 p-5 rounded-xl bg-white border border-neutral-200/60 shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-green">
                  <Globe size={24} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-neutral-900">🌐 Web Applications</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    Full-stack web apps with React, Next.js, FastAPI.
                  </p>
                </div>
              </div>

              {/* Block 3 */}
              <div className="flex gap-4 p-5 rounded-xl bg-white border border-neutral-200/60 shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-green">
                  <Cpu size={24} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-neutral-900">🤖 AI-Powered Tools</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    LLM integrations, RAG pipelines, agentic workflows using LangChain and Gemini.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6 — HOW WE WORK */}
      <section id="about" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900">How We Work</h2>
            <p className="text-neutral-600 max-w-lg mx-auto">
              Our simple 3-step pipeline to take your idea from concept to launch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center p-6 space-y-4 relative group">
              <div className="w-16 h-16 rounded-full bg-brand-green/10 border-2 border-brand-green/20 flex items-center justify-center text-brand-green font-extrabold text-xl shadow-lg">
                1
              </div>
              <h3 className="text-xl font-bold text-neutral-900">Understand</h3>
              <p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
                We listen first, ask the right questions, and learn your workflow.
              </p>
              {/* Connector arrow (desktop only) */}
              <div className="hidden md:block absolute top-14 -right-4 translate-x-1/2 text-neutral-300">
                <ChevronRight size={24} />
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center p-6 space-y-4 relative group">
              <div className="w-16 h-16 rounded-full bg-brand-green/10 border-2 border-brand-green/20 flex items-center justify-center text-brand-green font-extrabold text-xl shadow-lg">
                2
              </div>
              <h3 className="text-xl font-bold text-neutral-900">Build</h3>
              <p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
                We design and develop with regular updates and your feedback built in.
              </p>
              {/* Connector arrow (desktop only) */}
              <div className="hidden md:block absolute top-14 -right-4 translate-x-1/2 text-neutral-300">
                <ChevronRight size={24} />
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center p-6 space-y-4 relative group">
              <div className="w-16 h-16 rounded-full bg-brand-green/10 border-2 border-brand-green/20 flex items-center justify-center text-brand-green font-extrabold text-xl shadow-lg">
                3
              </div>
              <h3 className="text-xl font-bold text-neutral-900">Deliver</h3>
              <p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
                A fully tested, production-ready product — with ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* SECTION 8 — CONTACT */}
      <section id="contact" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900">Get In Touch</h2>
            <p className="text-neutral-600 max-w-lg mx-auto">
              Whether you want FeeMaster for your school or need a custom solution — we&apos;d love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            {/* Left Column Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-[#F8F9FA] rounded-2xl p-6 sm:p-8 border border-neutral-200/70 space-y-6">
                <h3 className="text-xl font-bold text-neutral-900">Contact Details</h3>
                
                <div className="space-y-5">
                  {/* Email */}
                  <a href="mailto:yoursbench@gmail.com" className="flex items-center gap-4 group p-1 hover:bg-neutral-100 rounded-lg transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-green flex-shrink-0 group-hover:scale-105 transition-transform">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-[10px] text-neutral-400 font-semibold uppercase tracking-wider">Email Us</div>
                      <div className="text-sm sm:text-base font-bold text-neutral-900 group-hover:text-brand-green transition-colors">yoursbench@gmail.com</div>
                    </div>
                  </a>

                  {/* Phone */}
                  <a href="tel:+917078268503" className="flex items-center gap-4 group p-1 hover:bg-neutral-100 rounded-lg transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-green flex-shrink-0 group-hover:scale-105 transition-transform">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="text-[10px] text-neutral-400 font-semibold uppercase tracking-wider">Call Us</div>
                      <div className="text-sm sm:text-base font-bold text-neutral-900 group-hover:text-brand-green transition-colors">+91 70782 68503</div>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4 p-1">
                    <div className="w-10 h-10 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-green flex-shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div className="text-[10px] text-neutral-400 font-semibold uppercase tracking-wider">Location</div>
                      <div className="text-sm sm:text-base font-bold text-neutral-900">Online Company — We serve clients across India</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column Form */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-neutral-200/80 shadow-lg p-6 sm:p-8 relative">
              
              <AnimatePresence>
                {formSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 bg-white rounded-2xl flex flex-col items-center justify-center p-6 text-center z-10"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4 animate-bounce">
                      <Sparkles size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900">Message Received!</h3>
                    <p className="text-neutral-500 text-sm max-w-sm mt-2">
                      Thanks for reaching out to YourBench. Rishabh or our team will get back to you soon.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      suppressHydrationWarning
                      value={formState.name}
                      onChange={handleFormChange}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green text-sm transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      suppressHydrationWarning
                      value={formState.email}
                      onChange={handleFormChange}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone (Optional) */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      suppressHydrationWarning
                      value={formState.phone}
                      onChange={handleFormChange}
                      placeholder="e.g. +91 99999 99999"
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green text-sm transition-all"
                    />
                  </div>

                  {/* Interest dropdown */}
                  <div className="space-y-1.5">
                    <label htmlFor="interest" className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">I&apos;m interested in</label>
                    <select
                      id="interest"
                      name="interest"
                      suppressHydrationWarning
                      value={formState.interest}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green text-sm bg-white transition-all"
                    >
                      <option value="FeeMaster">FeeMaster (School Fees Software)</option>
                      <option value="Custom Software">Custom Software Solutions</option>
                      <option value="Partnership">Partnership</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    suppressHydrationWarning
                    rows={4}
                    value={formState.message}
                    onChange={handleFormChange}
                    placeholder="Describe your school's requirements or custom project..."
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green text-sm transition-all resize-y"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    suppressHydrationWarning
                    className="inline-flex items-center gap-2 px-8 py-4 bg-brand-green hover:bg-brand-green-hover text-white font-bold rounded-lg transition-colors shadow-lg shadow-brand-green/20 text-sm cursor-pointer"
                  >
                    Send Message <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
