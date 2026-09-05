'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  ExternalLink, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Laptop, 
  Brain, 
  FileText,
  CheckCircle2
} from 'lucide-react';
import SmartImage from '@/components/SmartImage';

export default function ProductsPage() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen py-10 md:py-16">
      
      {/* Top Navigation Back */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 hover:text-brand-green transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-xs font-semibold uppercase tracking-wider">
            <Sparkles size={13} className="animate-pulse" />
            <span>Ready-to-Deploy Software</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
            Our Flagship Products
          </h1>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
            Engineered by YourBench. Each product is purpose-built to solve critical problems for Indian schools, educators, and businesses with unmatched speed, offline reliability, and AI intelligence.
          </p>
        </div>
      </section>

      {/* Products Showcase Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* PRODUCT 1: FeeMaster */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl border-l-8 border-brand-green border-y border-r border-neutral-200/80 shadow-lg p-6 sm:p-10 flex flex-col lg:flex-row gap-10 items-center justify-between relative overflow-hidden"
        >
          {/* Info Column */}
          <div className="flex-1 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <div className="w-14 h-14 relative rounded-xl bg-[#F8F9FA] p-1.5 flex items-center justify-center border border-neutral-200 shadow-sm">
                <SmartImage
                  src="/logo-feemaster.png"
                  fallbackSrc="/logo-feemaster.svg"
                  alt="FeeMaster Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available Now • Windows Desktop
                </span>
                <h2 className="text-3xl font-extrabold text-neutral-900 mt-1">FeeMaster</h2>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-brand-green">
                Complete Fee &amp; Administrative Management System
              </h3>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                A robust desktop application crafted specifically for Indian schools and educational institutes. Eliminates manual fee tracking, handles instant receipt printing, manages staff payroll, and tracks student attendance — completely offline with local encrypted storage.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {[
                'Instant Fee Receipt Printing',
                'Zero Cloud Dependency (100% Offline)',
                'Staff Payroll & Attendance Tracking',
                'Student Records & Dues Ledger',
                'Role-Based Admin & Cashier Security',
                'Fast 1-Click Excel Reports Export'
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700 font-medium">
                  <CheckCircle2 size={16} className="text-brand-green flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link 
                href="/products/feemaster" 
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-green hover:bg-brand-green-hover text-white font-bold transition-all duration-200 shadow-lg shadow-brand-green/20 text-sm cursor-pointer"
              >
                <span>View Full Features &amp; Docs</span>
                <ArrowRight size={16} />
              </Link>
              <Link 
                href="/#contact" 
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border-2 border-neutral-900 hover:bg-neutral-900 hover:text-white text-neutral-900 font-bold transition-all duration-200 text-sm cursor-pointer"
              >
                <span>Request Demo / Install</span>
              </Link>
            </div>
          </div>

          {/* Screenshot Column */}
          <div className="w-full lg:w-[480px] aspect-[4/3] bg-neutral-100 border border-neutral-200 rounded-2xl shadow-inner flex items-center justify-center p-3 relative overflow-hidden flex-shrink-0">
            <SmartImage
              src="/fee-master-dashboard.webp"
              fallbackSrc="/logo-feemaster.svg"
              alt="FeeMaster Desktop Dashboard"
              className="w-full h-full object-cover rounded-xl shadow-md border border-neutral-200/60"
            />
          </div>
        </motion.div>


        {/* PRODUCT 2: Prepo.ai */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-white rounded-3xl border-l-8 border-blue-600 border-y border-r border-neutral-200/80 shadow-lg p-6 sm:p-10 flex flex-col lg:flex-row gap-10 items-center justify-between relative overflow-hidden"
        >
          {/* Info Column */}
          <div className="flex-1 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <div className="w-14 h-14 relative rounded-xl bg-white p-1.5 flex items-center justify-center border border-neutral-200 shadow-sm overflow-hidden">
                <SmartImage
                  src="/logo-prepo.jpg"
                  fallbackSrc="/logo-prepo-text.jpg"
                  alt="Prepo.ai Logo"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live Platform • Web Application
                </span>
                <h2 className="text-3xl font-extrabold text-neutral-900 mt-1">
                  Prepo<span className="text-blue-600">.ai</span>
                </h2>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-blue-600">
                AI Practice &amp; Mock Assessment Engine for Any Subject
              </h3>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                An intelligent assessment platform that dynamically generates custom practice tests for any class level, subject, or chapter. Delivers instant score evaluation, 4-part AI explanations, 1-click teacher shareable links, and live competitive leaderboards.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {[
                'Dynamic AI Quiz & Mock Generator',
                'Instant Scoring & Performance Analytics',
                '4-Part Deep AI Explanations',
                '1-Click Teacher Test Links',
                'Real-Time Student Leaderboard',
                'Adaptive Difficulty (Easy, Med, Hard)'
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700 font-medium">
                  <CheckCircle2 size={16} className="text-blue-600 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link 
                href="/products/prepo" 
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all duration-200 shadow-lg shadow-blue-500/20 text-sm cursor-pointer"
              >
                <span>View Case Study &amp; Architecture</span>
                <ArrowRight size={16} />
              </Link>
              <a 
                href="https://www.prepo.co.in/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border-2 border-blue-600 hover:bg-blue-50 text-blue-600 font-bold transition-all duration-200 text-sm cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Launch Live App</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Screenshot Column */}
          <div className="w-full lg:w-[480px] aspect-[4/3] bg-neutral-100 border border-neutral-200 rounded-2xl shadow-inner flex items-center justify-center p-3 relative overflow-hidden flex-shrink-0">
            <SmartImage
              src="/prepo-quiz-generator.png"
              fallbackSrc="/logo-prepo.jpg"
              alt="Prepo.ai Quiz Generator"
              className="w-full h-full object-cover rounded-xl shadow-md border border-neutral-200/60"
            />
          </div>
        </motion.div>

      </div>

      {/* Bottom Custom Software CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-neutral-900 rounded-3xl p-8 sm:p-12 text-white text-center space-y-6 border border-neutral-800 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="px-3 py-1 rounded-full bg-brand-green/20 text-brand-green text-xs font-semibold uppercase tracking-wider">
              Need Something Custom?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Don&apos;t see the exact software you need?
            </h3>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              We engineer tailor-made software solutions — from custom web applications and business portals to desktop tools and automated workflows. If you can describe it, we can build it.
            </p>
          </div>
          <div>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-green hover:bg-brand-green-hover text-white font-bold transition-all duration-200 shadow-lg shadow-brand-green/30 text-base cursor-pointer"
            >
              <span>Talk to Our Engineering Team</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
