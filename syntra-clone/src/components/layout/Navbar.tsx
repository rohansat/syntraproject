'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={
        scrolled
          ? 'fixed top-6 left-1/2 transform -translate-x-1/2 max-w-3xl w-[95vw] bg-white z-50 rounded-2xl shadow-lg transition-all duration-300'
          : 'fixed top-0 left-0 w-full bg-white z-50 rounded-none shadow-none transition-all duration-300'
      }
      style={scrolled ? { borderRadius: '1.5rem' } : { borderRadius: 0 }}
    >
      <div className="flex items-center justify-between h-20 px-8">
        {/* Logo left */}
        <div className="flex items-center flex-1">
          <Link href="/" className="flex items-center">
            <Image
              src="https://ext.same-assets.com/2225457239/2256820530.png"
              alt="Syntra logo"
              width={40}
              height={22}
              className="h-auto w-10"
            />
            <span className="ml-2 font-serif font-normal text-syntra-navy text-2xl">Syntra</span>
          </Link>
        </div>
        {/* Links center */}
        <nav className="flex items-center space-x-8 flex-1 justify-center">
          <div className="relative">
            <button
              className="flex items-center space-x-1.5 text-gray-700 hover:text-syntra-navy font-medium text-base focus:outline-none"
              onClick={() => setIsProductsOpen(!isProductsOpen)}
              onBlur={() => setTimeout(() => setIsProductsOpen(false), 150)}
            >
              <span>Products</span>
              <ChevronDown size={16} />
            </button>
            {isProductsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-md shadow-xl p-3 z-10 min-w-max">
                <Link
                  href="/electronic-health-records"
                  className="block px-4 py-2.5 text-base hover:bg-gray-50 rounded-md"
                >
                  Electronic Health Records
                </Link>
                <Link
                  href="/ai-medical-coding"
                  className="block px-4 py-2.5 text-base hover:bg-gray-50 rounded-md"
                >
                  AI Medical Coding
                </Link>
                <Link
                  href="/prior-auth-automation"
                  className="block px-4 py-2.5 text-base hover:bg-gray-50 rounded-md"
                >
                  Prior Auth Automation
                </Link>
              </div>
            )}
          </div>
          <Link
            href="https://www.workatastartup.com/companies/syntra"
            className="text-gray-700 hover:text-syntra-navy font-medium text-base flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Careers <span className="ml-1">↗</span>
          </Link>
        </nav>
        {/* Button right */}
        <div className="flex-1 flex justify-end">
          <a
            href="https://calendly.com/ayush-syntra/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-syntra-blue hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium text-base transition-colors"
          >
            Book a demo
          </a>
        </div>
      </div>
    </header>
  );
}
