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
      className={`transition-all duration-300 z-50 shadow-lg ${!scrolled
        ? 'fixed top-0 left-0 w-full m-0 rounded-none bg-white'
        : 'relative mx-auto mt-6 max-w-6xl rounded-2xl bg-white'}
      `}
      style={{ borderRadius: !scrolled ? 0 : '1rem' }}
    >
      <div className={`flex items-center justify-between transition-all duration-300 ${!scrolled ? 'py-2' : 'py-6'} max-w-6xl mx-auto px-6`}>
        <Link href="/" className="flex items-center transition-all duration-300">
          <Image
            src="https://ext.same-assets.com/2225457239/2256820530.png"
            alt="Syntra logo"
            width={!scrolled ? 40 : 60}
            height={!scrolled ? 22 : 32}
            className={`h-auto transition-all duration-300 ${!scrolled ? 'w-10' : 'w-15'}`}
          />
          <span className={`ml-2 font-serif font-normal text-syntra-navy transition-all duration-300 ${!scrolled ? 'text-xl' : 'text-2xl'}`}>Syntra</span>
        </Link>
        <nav className="flex items-center space-x-8">
          <div className="relative">
            <button
              className="flex items-center space-x-1.5 text-gray-700 hover:text-syntra-navy font-medium text-base"
              onClick={() => setIsProductsOpen(!isProductsOpen)}
            >
              <span>Products</span>
              <ChevronDown size={16} />
            </button>
            {isProductsOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-xl p-3 z-10">
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
          <a
            href="https://calendly.com/ayush-syntra/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-syntra-blue hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium text-base transition-colors ml-2"
          >
            Book a demo
          </a>
        </nav>
      </div>
    </header>
  );
}
