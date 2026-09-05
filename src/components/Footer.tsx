'use client';

import Link from 'next/link';
import { Sparkles, Mail } from 'lucide-react';
import SmartImage from './SmartImage';

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-neutral-800 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo & Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-8 h-8 overflow-hidden rounded bg-white p-0.5 flex items-center justify-center">
                <SmartImage
                  src="/logo-yourbench.png"
                  fallbackSrc="/logo-yourbench.svg"
                  alt="YourBench Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-lg tracking-tight">
                <span className="font-extrabold text-white">Your</span>
                <span className="font-extrabold text-brand-green">Bench</span>
              </span>
            </Link>
            <p className="text-neutral-400 text-sm max-w-sm">
              Build Smarter. Grow Faster. Built specifically for the needs of Indian MSMEs, educational institutes, startups, and growing businesses.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-semibold text-neutral-200 text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/team" target="_blank" className="hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/careers" target="_blank" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/products/prepo" className="hover:text-white transition-colors">
                  Prepo.ai Overview &amp; Docs
                </Link>
              </li>
              <li>
                <Link href="/products/feemaster#docs" className="hover:text-white transition-colors">
                  FeeMaster Docs
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links Column */}
          <div>
            <h4 className="font-semibold text-neutral-200 text-sm uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.linkedin.com/company/yourbench/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-neutral-900 border border-neutral-800 hover:border-brand-green text-neutral-400 hover:text-brand-green transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-[18px] h-[18px]" />
              </a>
              <a
                href="mailto:yoursbench@gmail.com"
                className="p-2 rounded-full bg-neutral-900 border border-neutral-800 hover:border-brand-green text-neutral-400 hover:text-brand-green transition-colors"
                aria-label="Email"
              >
                <Mail className="w-[18px] h-[18px]" />
              </a>
              <a
                href="https://www.instagram.com/your.bench"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-neutral-900 border border-neutral-800 hover:border-brand-green text-neutral-400 hover:text-brand-green transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-[18px] h-[18px]" />
              </a>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-brand-green font-medium">
              <Sparkles size={12} />
              <span>Independent Software Company</span>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} YourBench. All rights reserved. | Made with ❤️ in India
          </div>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-neutral-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-neutral-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
