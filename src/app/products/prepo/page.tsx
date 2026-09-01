'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ExternalLink, 
  Sparkles, 
  Brain, 
  BookOpen, 
  Trophy, 
  Share2, 
  History, 
  Zap, 
  ShieldCheck, 
  FileText
} from 'lucide-react';
import SmartImage from '@/components/SmartImage';

export default function PrepoPage() {
  const screenshots = [
    {
      id: 'generator',
      title: '1. AI Practice & Mock Test Generator',
      subtitle: 'Select Class Level, Subject, Chapter/Topic, or Upload Study Notes (PDF/Doc) with custom Difficulty & Language.',
      src: '/prepo-quiz-generator.png',
      alt: 'Prepo.ai Practice Test Generator Form'
    },
    {
      id: 'history',
      title: '2. User Attempt History & Score Badges',
      subtitle: 'Personal dashboard displaying mock tests attempted, score percentages, and 1-click response review.',
      src: '/prepo-quiz-history.png',
      alt: 'Prepo.ai Attempt History Dashboard'
    },
    {
      id: 'teacher',
      title: '3. Teacher Shared Tests & Student Submissions',
      subtitle: 'Track student responses, copy 1-click test links, and view live student submissions.',
      src: '/prepo-teacher-dashboard.png',
      alt: 'Prepo.ai Teacher Dashboard'
    },
    {
      id: 'leaderboard',
      title: '4. Real-Time Student Leaderboard',
      subtitle: 'Live ranking table showing student names, scores, percentages, and submission timestamps.',
      src: '/prepo-student-leaderboard.png',
      alt: 'Prepo.ai Student Leaderboard Modal'
    }
  ];

  return (
    <div className="bg-[#F8F9FA] min-h-screen py-10 md:py-16">
      
      {/* Top Navbar Back Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link 
          href="/#products" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to YourBench Products
        </Link>
      </div>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white rounded-3xl border border-neutral-200/80 shadow-xl p-6 sm:p-10 md:p-12 relative overflow-hidden">
          {/* Subtle Background Accent Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <div className="w-14 h-14 relative rounded-2xl bg-white p-1 flex items-center justify-center border border-neutral-200 shadow-sm overflow-hidden flex-shrink-0">
                  <SmartImage
                    src="/logo-prepo.jpg"
                    fallbackSrc="/logo-prepo-text.jpg"
                    alt="Prepo.ai Logo"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Available Now
                  </span>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight mt-1">
                    Prepo<span className="text-blue-600">.ai</span>
                  </h1>
                </div>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-blue-600">
                  AI Practice &amp; Mock Tests for Any Subject
                </h2>
                <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
                  Prepo.ai dynamically generates custom AI practice tests and mock assessments tailored to any academic level, subject, or chapter. Upload notes or choose topics for instant 0ms scoring, 4-part AI explanations, and teacher shareable test links with live response leaderboards.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="https://www.prepo.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all shadow-lg shadow-blue-500/20 text-base cursor-pointer"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Launch Prepo.ai Live</span>
                  <ExternalLink size={18} />
                </a>

                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-xl border-2 border-neutral-300 hover:bg-neutral-100 text-neutral-800 font-bold transition-all text-base cursor-pointer"
                >
                  <BookOpen size={18} />
                  <span>Platform Guide</span>
                </a>
              </div>

              {/* Quick Feature Chips */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-100">
                {[
                  'AI Practice & Mock Tests',
                  'Instant Scoring',
                  '4-Part AI Explanations',
                  '1-Click Teacher Links',
                  'Live Leaderboards',
                  '3 Free Test Credits'
                ].map((chip) => (
                  <span key={chip} className="text-xs bg-neutral-100 text-neutral-700 px-3 py-1.5 rounded-lg font-medium border border-neutral-200/60">
                    ✓ {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Graphic Preview Column */}
            <div className="lg:col-span-5">
              <div className="bg-neutral-900 rounded-2xl p-4 border border-neutral-800 shadow-2xl relative">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-neutral-400 bg-neutral-950 px-3 py-1 rounded border border-neutral-800">
                    https://www.prepo.co.in
                  </span>
                </div>

                <div className="rounded-xl overflow-hidden border border-neutral-800 aspect-[4/3] bg-neutral-950">
                  <SmartImage
                    src="/prepo-quiz-generator.png"
                    fallbackSrc="/logo-prepo-text.jpg"
                    alt="Prepo.ai Interface"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PLATFORM SCREENSHOT SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider border border-blue-100">
            <Sparkles size={12} />
            <span>Interface Preview</span>
          </div>
          <h2 className="text-3xl font-extrabold text-neutral-900">Experience Prepo.ai in Action</h2>
          <p className="text-neutral-600 max-w-xl mx-auto text-sm sm:text-base">
            AI-generated practice tests and mock assessments for students preparing for exams and teachers managing tests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {screenshots.map((shot) => (
            <motion.div
              key={shot.id}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl border border-neutral-200/80 shadow-lg overflow-hidden flex flex-col justify-between"
            >
              <div className="p-6 space-y-2 border-b border-neutral-100">
                <h3 className="text-lg font-extrabold text-neutral-900">{shot.title}</h3>
                <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">{shot.subtitle}</p>
              </div>

              <div className="bg-neutral-50 p-4 aspect-[16/10] flex items-center justify-center overflow-hidden">
                <SmartImage
                  src={shot.src}
                  fallbackSrc="/logo-prepo-text.jpg"
                  alt={shot.alt}
                  className="w-full h-full object-contain rounded-xl border border-neutral-200/80 shadow-md"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CORE FEATURES DEEP DIVE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-extrabold text-neutral-900">Key Features</h2>
          <p className="text-neutral-600 max-w-xl mx-auto text-sm sm:text-base">
            Everything you need for smart AI mock test generation and instant grading.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-2xl border border-neutral-200/80 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center">
              <Brain size={24} />
            </div>
            <h3 className="text-xl font-bold text-neutral-900">🎯 Custom AI Mock &amp; Practice Tests</h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Create tests by topic or upload study notes (PDF/Doc). Select Grade/Class (Class 1–12, NEET, JEE, B.Tech ECE, etc.), Subject (Physics, Chemistry, DBMS, Math), Chapter/Topic, Question Count (5-20), Difficulty (Easy/Medium/Hard/Mixed), and Language (English, Hindi, Hinglish).
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-2xl border border-neutral-200/80 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold text-neutral-900">⚡ Instant 0ms Scoring &amp; AI Explanations</h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Deterministic 0ms grading. Each question includes a 4-part AI explanation: Verdict, Core Concept, Step-by-Step Reasoning, and Misconception Analysis explaining why wrong options are incorrect.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-2xl border border-indigo-100/80 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center">
              <History size={24} />
            </div>
            <h3 className="text-xl font-bold text-neutral-900">📊 Attempt History &amp; Score Badges</h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Personal dashboard tracking mock tests attempted with color-coded score badges (Green 100%, Blue 80%, Yellow 40%, Red 0%) and 1-click full response review for past attempts.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-8 rounded-2xl border border-purple-100/80 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center">
              <Share2 size={24} />
            </div>
            <h3 className="text-xl font-bold text-neutral-900">🔗 Teacher Share &amp; Student Mode</h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Teachers can share any practice test via a 1-click link (<code className="bg-neutral-100 px-1 py-0.5 rounded text-xs font-mono">?quiz_id=UUID</code>). Pre-stored explanations allow 50+ students to submit concurrently with instant 0.1s grading and no signup needed for students.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white p-8 rounded-2xl border border-neutral-200/80 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 text-amber-600 flex items-center justify-center">
              <Trophy size={24} />
            </div>
            <h3 className="text-xl font-bold text-neutral-900">🏆 Live Teacher Leaderboard</h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Teachers can view real-time student submission counts, scores, percentage ranks, and timestamps in a clean leaderboard view.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white p-8 rounded-2xl border border-neutral-200/80 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 text-teal-600 flex items-center justify-center">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold text-neutral-900">🔑 Free Credits &amp; Secure Auth</h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Secure login with Google or Supabase Auth. Every user gets 3 free credits upon signup to generate custom AI practice tests immediately.
            </p>
          </div>

        </div>
      </section>

      {/* PLATFORM GUIDE / HOW TO USE (DOCS) */}
      <section id="how-it-works" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white rounded-3xl border border-neutral-200/80 shadow-xl p-8 sm:p-12 space-y-8">
          
          <div className="border-b border-neutral-200 pb-6 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider">
              <FileText size={12} />
              <span>Platform Documentation</span>
            </div>
            <h2 className="text-3xl font-extrabold text-neutral-900">How to Use Prepo.ai</h2>
            <p className="text-neutral-600 text-sm sm:text-base">
              Step-by-step guide to generating practice tests, taking mock assessments, and reviewing student leaderboards.
            </p>
          </div>

          <div className="space-y-8">
            
            {/* Step 1 */}
            <div className="flex gap-5 items-start">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-extrabold text-lg flex items-center justify-center flex-shrink-0 shadow-md">
                1
              </div>
              <div className="space-y-1.5 pt-1">
                <h3 className="text-lg font-bold text-neutral-900">Visit Platform &amp; Sign In</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Go to <a href="https://www.prepo.co.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">https://www.prepo.co.in/</a> (or search <em>"AI Practice Tests by Prepo"</em>). Sign in using Google or email with Supabase Auth to claim your <strong>3 Free Test Generation Credits</strong>.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-5 items-start">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-extrabold text-lg flex items-center justify-center flex-shrink-0 shadow-md">
                2
              </div>
              <div className="space-y-1.5 pt-1">
                <h3 className="text-lg font-bold text-neutral-900">Configure &amp; Generate Your Practice Test</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Click <strong>"Start Practice Test"</strong> and choose your topic or upload study notes (PDF/Doc):
                </p>
                <ul className="text-xs sm:text-sm text-neutral-600 space-y-1 list-disc pl-5 pt-1">
                  <li><strong>Class / Grade Level:</strong> e.g., Class 10 CBSE, Class 12, B.Tech 3rd Sem ECE, JEE / NEET Dropper.</li>
                  <li><strong>Subject:</strong> Physics, Chemistry, Math, Biology, Computer Science, DBMS, etc.</li>
                  <li><strong>Chapter / Topic or Notes:</strong> e.g., <em>Normalization in DBMS</em>, <em>Optical Fiber Attenuation</em>, or upload your lecture notes.</li>
                  <li><strong>Options:</strong> Select question count (5–20), difficulty (Easy/Medium/Hard/Mixed), and language (English, Hindi, Hinglish).</li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-5 items-start">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-extrabold text-lg flex items-center justify-center flex-shrink-0 shadow-md">
                3
              </div>
              <div className="space-y-1.5 pt-1">
                <h3 className="text-lg font-bold text-neutral-900">Attempt Test &amp; Get Instant AI Explanations</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Submit your answers to receive instant 0ms grading. Review comprehensive 4-part AI explanations (Verdict, Core Concept, Step-by-Step Reasoning, and Misconception Analysis) for every single question.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-5 items-start">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-extrabold text-lg flex items-center justify-center flex-shrink-0 shadow-md">
                4
              </div>
              <div className="space-y-1.5 pt-1">
                <h3 className="text-lg font-bold text-neutral-900">Track History &amp; Share With Students (Teacher Mode)</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Access <strong>"My Test History"</strong> anytime to review past performance badges. Teachers can switch to <strong>"Shared Tests (Teacher)"</strong>, click <strong>"Copy Link"</strong> to distribute to students without requiring student signups, and open the <strong>Live Leaderboard</strong> to view student submissions in real time.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden border border-neutral-800 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to Experience Prepo.ai?
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Start generating custom AI practice tests &amp; mock assessments in seconds with 3 free credits. No installation required.
            </p>
          </div>

          <div>
            <a
              href="https://www.prepo.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all shadow-xl shadow-blue-500/25 text-base cursor-pointer"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Visit Prepo.ai Live Now</span>
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
