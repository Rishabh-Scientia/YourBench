'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, GraduationCap, UserPlus } from 'lucide-react';
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

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function TeamPage() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen py-16">

      {/* Top Navbar Back Action */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 hover:text-brand-green transition-colors">
          <ArrowLeft size={16} />
          Back to YourBench
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">The Team Behind YourBench</h1>
          <p className="text-neutral-600 max-w-lg mx-auto text-sm sm:text-base">
            We are a small, focused team building practical, production-ready software solutions for India&apos;s schools and businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">

          {/* Card 1 - Rishabh Yadav (Co-Founder & Developer) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white border-l-4 border-brand-green border-y border-r border-neutral-200/80 shadow-lg rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row gap-8"
          >
            {/* Left Column - Avatar & Social Links */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-4 flex-shrink-0">
              <div className="w-28 h-28 rounded-full overflow-hidden border border-neutral-200 shadow-sm relative bg-neutral-100 flex items-center justify-center">
                <SmartImage
                  src="/founder.jpeg"
                  fallbackSrc="/logo-yourbench.svg"
                  alt="Rishabh Yadav"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-extrabold text-neutral-900">Rishabh Yadav</h3>
                <p className="text-xs font-mono text-neutral-500">@Rishabh Scientia</p>
                <p className="text-sm font-bold text-brand-green mt-1">Co-Founder &amp; Developer</p>
              </div>
              <div className="flex gap-2">
                <a
                  href="https://www.linkedin.com/in/rishabh-scientia"
                  target="_blank"
                  rel="noopener noreferrer"
                  suppressHydrationWarning
                  className="p-1.5 rounded bg-neutral-100 text-neutral-600 hover:text-brand-green transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/Rishabh-Scientia"
                  target="_blank"
                  rel="noopener noreferrer"
                  suppressHydrationWarning
                  className="p-1.5 rounded bg-neutral-100 text-neutral-600 hover:text-brand-green transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com/RishabhScientia"
                  target="_blank"
                  rel="noopener noreferrer"
                  suppressHydrationWarning
                  className="p-1.5 rounded bg-neutral-100 text-neutral-600 hover:text-brand-green transition-colors"
                  aria-label="Twitter/X"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/rishabhscientia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  suppressHydrationWarning
                  className="p-1.5 rounded bg-neutral-100 text-neutral-600 hover:text-brand-green transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column - Bio & Expertise */}
            <div className="flex-grow space-y-4">
              <div className="flex gap-2 items-start text-xs text-neutral-500">
                <GraduationCap size={16} className="text-neutral-400 flex-shrink-0 mt-0.5" />
                <span>
                  B.Tech, ECE — Indian Institute of Information Technology, Kota (2023–2027)
                </span>
              </div>

              <p className="text-neutral-650 text-sm sm:text-base leading-relaxed">
                Rishabh is the founder of YourBench and the developer behind FeeMaster. He specializes in AI/ML systems, agentic workflows, data analysis, and desktop application development. He has trained 200+ students in Generative AI fundamentals and advanced through the college-level round of Smart India Hackathon 2025. His work focuses on building practical, production-ready software for India&apos;s schools and businesses.
              </p>

              <div className="space-y-1.5">
                <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Expertise Tags</h4>
                <div className="flex flex-wrap gap-1.5">
                  {['Python', 'FastAPI', 'LangChain', 'LangGraph', 'PySide6', 'SQL', 'Next.js', 'Power BI'].map((tag) => (
                    <span key={tag} className="text-[10px] font-mono bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded border border-neutral-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Co-Founder (Hiring Placeholder) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white border-l-4 border-brand-green border-y border-r border-neutral-200/80 shadow-lg rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row gap-8"
          >
            {/* Left Column - Placeholder Avatar */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-4 flex-shrink-0">
              <div className="w-28 h-28 rounded-full border-2 border-dashed border-neutral-300 bg-neutral-50 flex items-center justify-center text-neutral-400 text-4xl font-extrabold shadow-inner">
                ?
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-extrabold text-neutral-900">Co-Founder</h3>
                <p className="text-xs font-mono text-neutral-400">Position Open</p>
                <p className="text-sm font-bold text-neutral-400 mt-1">Co-Founder</p>
              </div>
              <div className="pt-2">
                <Link
                  href="/careers"
                  target="_blank"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 text-neutral-600 hover:text-brand-green text-xs font-bold border border-neutral-200 transition-colors"
                >
                  <UserPlus size={12} />
                  <span>Apply Now</span>
                </Link>
              </div>
            </div>

            {/* Right Column - Hiring Message */}
            <div className="flex-grow space-y-4 flex flex-col justify-center">
              <h4 className="text-lg font-bold text-brand-green">Hiring</h4>
              <p className="text-neutral-500 text-sm sm:text-base leading-relaxed italic">
                &quot;We are looking for a passionate Co-Founder to help expand operations, scale onboarding, and drive business development. You will meet them soon.&quot;
              </p>

              <div className="space-y-1.5 pt-2">
                <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Target Skills</h4>
                <div className="flex flex-wrap gap-1.5">
                  {['Business Development', 'Operations Management', 'Sales & Marketing', 'School Onboarding', 'Strategy'].map((tag) => (
                    <span key={tag} className="text-[10px] font-mono bg-neutral-100 text-neutral-600 px-2.5 py-1 rounded border border-neutral-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
