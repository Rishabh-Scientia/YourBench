'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  ExternalLink,
  Mail, 
  Phone, 
  MapPin, 
  Terminal, 
  Globe, 
  Cpu,
  Brain,
  ArrowRightLeft,
  ChevronRight,
  ChevronLeft,
  User,
  GraduationCap,
  Search,
  Code2,
  Rocket,
  Check,
  Clock,
  ShoppingBag,
  Package,
  Layers
} from 'lucide-react';
import SmartImage from '@/components/SmartImage';
import ContactForm from '@/components/ContactForm';

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
  const [activeStep, setActiveStep] = useState(0);
  const [selectedInterest, setSelectedInterest] = useState('Business Website');

  const handleSelectSolution = (solutionName: string) => {
    setSelectedInterest(solutionName);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const businessSolutions = [
    {
      id: 'website',
      title: 'Modern Business Website',
      badge: 'High Performance',
      badgeColor: 'bg-emerald-100 text-emerald-800',
      icon: Globe,
      iconBg: 'bg-emerald-50 border border-emerald-200/60',
      iconColor: 'text-emerald-600',
      tagline: 'Custom corporate, brand, and portfolio websites designed to convert visitors into paying clients.',
      features: ['Lightning-Fast Next.js & React', 'Mobile-First Responsive UI', 'SEO & Lead Capture Integration', 'Speed & Performance Optimized'],
      selectorValue: 'Business Website',
      ctaText: 'Get a Website Quote'
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce Online Store',
      badge: 'Scalable Sales',
      badgeColor: 'bg-blue-100 text-blue-800',
      icon: ShoppingBag,
      iconBg: 'bg-blue-50 border border-blue-200/60',
      iconColor: 'text-blue-600',
      tagline: 'Full-featured online stores with smooth checkout, product catalogs, and automated order flows.',
      features: ['Modern Product Catalog', 'Razorpay & UPI Payments Integration', 'Order Management Flow', 'Customer Accounts & History'],
      selectorValue: 'E-Commerce Store',
      ctaText: 'Build Your Store'
    },
    {
      id: 'inventory',
      title: 'Inventory & Order Management',
      badge: 'Stock & Tracking',
      badgeColor: 'bg-amber-100 text-amber-800',
      icon: Package,
      iconBg: 'bg-amber-50 border border-amber-200/60',
      iconColor: 'text-amber-600',
      tagline: 'Centralized stock control and sales management software to eliminate stock-outs and track orders.',
      features: ['Real-Time Stock & Warehouse Tracking', 'Purchase & Supplier Records', 'Order Dispatch & Fulfillment Flow', 'Sales Reports & Analytics'],
      selectorValue: 'Inventory & Order Management',
      ctaText: 'Streamline Inventory'
    },
    {
      id: 'feemanagement',
      title: 'School Fee Management System',
      badge: 'Offline Desktop',
      badgeColor: 'bg-brand-green/20 text-brand-green',
      icon: GraduationCap,
      iconBg: 'bg-green-50 border border-green-200/60',
      iconColor: 'text-brand-green',
      tagline: 'Complete desktop fee management system with receipt printing, student records, and staff payroll.',
      features: ['Instant Receipt Generation & Printing', '100% Offline Desktop Operation', 'Staff Payroll & Attendance Tracking', 'Student Dues & Ledgers Management'],
      selectorValue: 'School / Institute Fee Management',
      ctaText: 'Inquire for Fee System'
    },
    {
      id: 'ai-automation',
      title: 'Custom AI & Workflow Automation',
      badge: 'Intelligent Systems',
      badgeColor: 'bg-purple-100 text-purple-800',
      icon: Brain,
      iconBg: 'bg-purple-50 border border-purple-200/60',
      iconColor: 'text-purple-600',
      tagline: 'Smart AI assistants, document processors, and automated pipelines that save hundreds of staff hours.',
      features: ['Intelligent AI Assistants & Chatbots', 'Automated Data Extraction', 'CRM & Webhook Pipelines', 'Custom LLM & Agent Workflows'],
      selectorValue: 'Custom AI & Automation',
      ctaText: 'Automate with AI'
    },
    {
      id: 'custom-saas',
      title: 'Custom Web Apps & Portals',
      badge: 'Enterprise SaaS',
      badgeColor: 'bg-indigo-100 text-indigo-800',
      icon: Layers,
      iconBg: 'bg-indigo-50 border border-indigo-200/60',
      iconColor: 'text-indigo-600',
      tagline: 'Bespoke web applications, secure client dashboards, internal employee portals, and cloud backends.',
      features: ['Role-Based Authentication & Security', 'Interactive Admin Dashboards', 'Scalable Cloud Database Architecture', 'Tailored Business Logic'],
      selectorValue: 'Custom SaaS / Web Portal',
      ctaText: 'Build Custom Portal'
    }
  ];

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'FeeMaster',
    message: ''
  });

  const workSteps = [
    {
      id: "01",
      title: "Understand & Scope",
      icon: Search,
      tagline: "Discovery & Blueprint Phase",
      description: "We listen first. We analyze your institution or business workflow, identify operational bottlenecks, outline offline/online requirements, and craft a clear engineering specification.",
      duration: "Days 1 – 3",
      deliverables: [
        "Workflow & Operational Needs Analysis",
        "Technical Architecture & Security Blueprint",
        "Transparent Fixed Pricing & Milestone Timeline"
      ]
    },
    {
      id: "02",
      title: "Iterative Build & Demo",
      icon: Code2,
      tagline: "Agile Development Sprints",
      description: "We design and develop clean code with robust database architecture. You receive regular interactive milestone demos to ensure your continuous feedback is baked directly into the software.",
      duration: "Weeks 1 – 3",
      deliverables: [
        "Custom Desktop / Web Application Core Build",
        "Weekly Interactive Progress & Feedback Demos",
        "Rigorous Automated Testing & Security Audit"
      ]
    },
    {
      id: "03",
      title: "Deploy & Support",
      icon: Rocket,
      tagline: "Production Launch & Support",
      description: "We deploy the production-ready software (local desktop installation or cloud web app), handle initial data migration, train your administration team, and provide continuous technical maintenance.",
      duration: "Continuous Handoff",
      deliverables: [
        "Production System Setup & Data Migration",
        "Staff & Admin Training Sessions",
        "Ongoing Technical Maintenance & Software Updates"
      ]
    }
  ];

  const [dashoffset, setDashoffset] = useState(500);
  const [growthVal, setGrowthVal] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  const terminalLines = [
    "📡 Establishing link to prepo.co.in & yoursbench.in...",
    "🤖 Syncing Prepo.ai assessment engine (LangGraph + Groq)",
    "💾 Local DB loaded: %LOCALAPPDATA%/feemaster.db",
    "⚡ FeeMaster Cloud Node synced in 14ms",
    "📊 Compiled school collection payout: OK",
    "🟢 Cloud API webhook cluster: ONLINE",
    "🧠 Prepo.ai adaptive mock test generated: Class 10 CBSE Science",
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
                  We Build Software That Works for <span className="text-brand-green">India&apos;s</span>{" "}Businesses
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="text-lg text-neutral-600 max-w-xl leading-relaxed"
              >
                YourBench is an Indian software company crafting powerful web apps, desktop tools, and custom AI solutions — built specifically for the needs of Indian MSMEs, startups, educational institutes, and growing businesses.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4 pt-2"
              >
                <Link
                  href="/products"
                  className="px-8 py-4 bg-brand-green hover:bg-brand-green-hover text-white font-bold rounded-lg transition-all duration-200 shadow-xl shadow-brand-green/20 text-center cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  <span>See Our Products</span>
                  <ArrowRight size={18} />
                </Link>
                <button
                  onClick={() => handleScrollTo('solutions')}
                  suppressHydrationWarning
                  className="px-8 py-4 border-2 border-brand-black hover:bg-brand-black/5 text-brand-black font-bold rounded-lg transition-all duration-200 text-center cursor-pointer"
                >
                  Custom Solutions
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
              <span className="text-2xl">🏢</span>
              <span className="text-sm font-semibold tracking-wide">Built for Indian Businesses</span>
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

      {/* SECTION 4 — BUSINESS SOFTWARE & DIGITAL SOLUTIONS */}
      <section id="solutions" className="py-20 md:py-28 bg-[#F8F9FA] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-xs font-semibold uppercase tracking-wider">
              <Sparkles size={13} className="animate-pulse" />
              <span>Tailored Solutions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Software Built for Every Business Need
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Whether you need a high-converting website, an automated inventory workflow, or custom desktop tools — select your business need below for a rapid turnaround and transparent delivery.
            </p>
          </div>

          {/* 6 High-Converting Solution Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessSolutions.map((solution) => {
              const IconComp = solution.icon;
              return (
                <motion.div
                  key={solution.id}
                  whileHover={{ y: -6, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.03)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-white rounded-2xl border border-neutral-200/80 shadow-md p-6 sm:p-8 flex flex-col justify-between relative group hover:border-brand-green/50 transition-colors"
                >
                  <div className="space-y-5">
                    {/* Top Row: Icon + Badge */}
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${solution.iconBg} ${solution.iconColor}`}>
                        <IconComp size={24} />
                      </div>
                      <span className={`text-[11px] font-bold px-3 py-1 rounded-full ${solution.badgeColor}`}>
                        {solution.badge}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900 group-hover:text-brand-green transition-colors">
                        {solution.title}
                      </h3>
                      <p className="text-neutral-500 text-xs sm:text-sm mt-2 leading-relaxed">
                        {solution.tagline}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-2 pt-2 border-t border-neutral-100">
                      {solution.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-xs font-medium text-neutral-700">
                          <Check size={14} className="text-brand-green flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Button */}
                  <div className="pt-6 mt-6 border-t border-neutral-100">
                    <button
                      type="button"
                      onClick={() => handleSelectSolution(solution.selectorValue)}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-neutral-900 hover:bg-brand-green text-white font-bold text-sm transition-all duration-200 cursor-pointer shadow-sm group-hover:shadow-md"
                    >
                      <span>{solution.ctaText}</span>
                      <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Banner: Explore Flagship Products */}
          <div className="mt-16 bg-white rounded-2xl border border-neutral-200/90 shadow-sm p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-green uppercase tracking-wider">
                <span>Featured Software Products</span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-neutral-900">
                Looking for our ready-to-deploy software products?
              </h4>
              <p className="text-neutral-500 text-xs sm:text-sm">
                Explore FeeMaster (Offline School Fee Suite) and Prepo.ai (AI Assessment Engine) on our dedicated products page.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-green hover:bg-brand-green-hover text-white font-bold text-sm transition-colors shadow-lg shadow-brand-green/20 whitespace-nowrap cursor-pointer flex-shrink-0"
            >
              <span>Explore Products</span>
              <ArrowRight size={16} />
            </Link>
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
                Don&apos;t see exactly what you need? We build custom software solutions for MSMEs, businesses, educational institutes, and startups — from desktop tools to scalable web applications. If you can describe it, we can build it.
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

      {/* SECTION 6 — HOW WE WORK (Interactive Engineering Pipeline) */}
      <section id="about" className="py-20 md:py-28 bg-[#F8F9FA] border-y border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-xs font-semibold uppercase tracking-wider">
              <Sparkles size={13} className="animate-pulse" />
              <span>Our Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
              How We Work
            </h2>
            <p className="text-neutral-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              Explore our 3-phase engineering pipeline. Click any step to inspect deliverables, timelines, and execution strategies.
            </p>
          </div>

          {/* Interactive Step Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative mb-8">
            
            {/* Desktop Connecting Beam Line */}
            <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-neutral-200 -translate-y-6 z-0" />
            
            {workSteps.map((stepItem, index) => {
              const IconComp = stepItem.icon;
              const isActive = activeStep === index;
              return (
                <motion.div
                  key={stepItem.id}
                  onClick={() => setActiveStep(index)}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative z-10 p-6 sm:p-7 rounded-2xl cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                    isActive
                      ? 'bg-white border-2 border-brand-green shadow-xl ring-4 ring-brand-green/10'
                      : 'bg-white/90 border border-neutral-200 hover:border-neutral-300 shadow-sm hover:shadow-md'
                  }`}
                >
                  {/* Top Badge & Step Number */}
                  <div className="flex items-center justify-between mb-5">
                    <span className={`text-xs font-mono font-extrabold px-3 py-1 rounded-full border ${
                      isActive 
                        ? 'bg-brand-green text-white border-brand-green' 
                        : 'bg-neutral-100 text-neutral-500 border-neutral-200'
                    }`}>
                      PHASE {stepItem.id}
                    </span>
                    
                    <div className={`p-2.5 rounded-xl transition-colors ${
                      isActive 
                        ? 'bg-brand-green/10 text-brand-green' 
                        : 'bg-neutral-100 text-neutral-500'
                    }`}>
                      <IconComp size={22} />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1.5 mb-4">
                    <h3 className="text-xl font-extrabold text-neutral-900">
                      {stepItem.title}
                    </h3>
                    <p className="text-xs font-semibold text-brand-green uppercase tracking-wider">
                      {stepItem.tagline}
                    </p>
                  </div>

                  {/* Short Summary */}
                  <p className="text-neutral-500 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
                    {stepItem.description}
                  </p>

                  {/* Active indicator bar */}
                  <div className="flex items-center justify-between pt-2 border-t border-neutral-100 text-xs font-semibold">
                    <span className={isActive ? 'text-brand-green' : 'text-neutral-400'}>
                      {isActive ? '● Currently Active' : 'Click to inspect'}
                    </span>
                    <ChevronRight size={16} className={`transition-transform duration-200 ${isActive ? 'translate-x-1 text-brand-green' : 'text-neutral-300'}`} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Interactive Expanded Detail Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-neutral-900 text-white rounded-2xl p-6 sm:p-10 border border-neutral-800 shadow-2xl relative overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-brand-green/10 rounded-full filter blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                
                {/* Left Column — Phase Overview */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-2xl font-black text-brand-green font-mono">
                      Phase {workSteps[activeStep].id}
                    </span>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-800 text-neutral-300 text-xs font-mono font-medium border border-neutral-700">
                      <Clock size={13} className="text-brand-green" />
                      <span>Est. Duration: {workSteps[activeStep].duration}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {workSteps[activeStep].title}
                  </h3>

                  <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                    {workSteps[activeStep].description}
                  </p>
                </div>

                {/* Right Column — Key Deliverables */}
                <div className="lg:col-span-6 bg-neutral-950/80 p-5 sm:p-6 rounded-xl border border-neutral-800 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    🎯 Key Phase Deliverables
                  </h4>

                  <div className="space-y-3">
                    {workSteps[activeStep].deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-neutral-900 border border-neutral-800/80 text-sm text-neutral-200">
                        <div className="p-1 rounded bg-brand-green/20 text-brand-green flex-shrink-0 mt-0.5">
                          <Check size={14} />
                        </div>
                        <span className="font-medium leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom Navigation Buttons */}
              <div className="mt-8 pt-6 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
                  <span>Step {activeStep + 1} of {workSteps.length}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : workSteps.length - 1))}
                    type="button"
                    suppressHydrationWarning
                    className="px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <ChevronLeft size={14} /> Previous Phase
                  </button>

                  <button
                    onClick={() => setActiveStep((prev) => (prev < workSteps.length - 1 ? prev + 1 : 0))}
                    type="button"
                    suppressHydrationWarning
                    className="px-4 py-2 rounded-lg bg-brand-green hover:bg-brand-green-hover text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5 shadow-md shadow-brand-green/20 cursor-pointer"
                  >
                    Next Phase <ChevronRight size={14} />
                  </button>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

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

            {/* Right Column Form (Supabase Connected) */}
            <div className="lg:col-span-7">
              <ContactForm selectedInterest={selectedInterest} />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
