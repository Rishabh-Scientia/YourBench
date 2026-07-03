'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SmartImage from './SmartImage';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === '/';

  const navItems = [
    { name: 'Products', href: isHome ? '#products' : '/#products', external: false },
    { name: 'Custom Solutions', href: isHome ? '#solutions' : '/#solutions', external: false },
    { name: 'About', href: isHome ? '#about' : '/#about', external: false },
    { name: 'Team', href: '/team', external: true },
    { name: 'Careers', href: '/careers', external: true },
    { name: 'Contact', href: isHome ? '#contact' : '/#contact', external: false },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#') || href.includes('#')) {
      const targetId = href.split('#')[1];
      const element = document.getElementById(targetId);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#0A0A0A] border-b border-neutral-800 text-white backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 overflow-hidden rounded bg-white p-0.5 flex items-center justify-center">
                <SmartImage
                  src="/logo-yourbench.png"
                  fallbackSrc="/logo-yourbench.svg"
                  alt="YourBench Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl tracking-tight">
                <span className="font-extrabold text-white">Your</span>
                <span className="font-extrabold text-brand-green">Bench</span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.external ? (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-neutral-300 hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="text-sm font-medium text-neutral-300 hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </a>
              )
            ))}
            <a
              href={isHome ? '#contact' : '/#contact'}
              onClick={(e) => handleScroll(e, isHome ? '#contact' : '/#contact')}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-md text-sm font-semibold bg-brand-green hover:bg-brand-green-hover text-white transition-all duration-200 shadow-lg shadow-brand-green/20"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              suppressHydrationWarning
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-900 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-neutral-800 bg-[#0A0A0A]"
            id="mobile-menu"
          >
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              {navItems.map((item) => (
                item.external ? (
                  <Link
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-3 rounded-md text-base font-medium text-neutral-300 hover:text-white hover:bg-neutral-900 transition-colors"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="block px-3 py-3 rounded-md text-base font-medium text-neutral-300 hover:text-white hover:bg-neutral-900 transition-colors"
                  >
                    {item.name}
                  </a>
                )
              ))}
              <div className="px-3 pt-3">
                <a
                  href={isHome ? '#contact' : '/#contact'}
                  onClick={(e) => handleScroll(e, isHome ? '#contact' : '/#contact')}
                  className="block w-full text-center px-4 py-3 rounded-md text-base font-semibold bg-brand-green hover:bg-brand-green-hover text-white transition-all shadow-md"
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
