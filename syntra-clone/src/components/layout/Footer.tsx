'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white py-16 border-t border-gray-200">
      <div className="syntra-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <Image
                src="https://ext.same-assets.com/2225457239/2256820530.png"
                alt="Syntra logo"
                width={50}
                height={28}
                className="h-7 w-auto"
              />
              <span className="ml-2 text-2xl font-serif font-normal text-syntra-navy">Syntra</span>
            </Link>
            <p className="text-gray-600 text-base mb-4">
              Automating administrative tasks so you can focus on what matters most — your patients.
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="text-base font-semibold uppercase tracking-wider text-gray-500 mb-4">
              Products
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/electronic-health-records" className="text-gray-600 hover:text-gray-900 text-base">
                  Electronic Health Records
                </Link>
              </li>
              <li>
                <Link href="/ai-medical-coding" className="text-gray-600 hover:text-gray-900 text-base">
                  AI Medical Coding
                </Link>
              </li>
              <li>
                <Link href="/prior-auth-automation" className="text-gray-600 hover:text-gray-900 text-base">
                  Prior Auth Automation
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-base font-semibold uppercase tracking-wider text-gray-500 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.ycombinator.com/companies/syntra"
                  className="text-gray-600 hover:text-gray-900 flex items-center text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About Us <span className="ml-1">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.workatastartup.com/companies/syntra"
                  className="text-gray-600 hover:text-gray-900 flex items-center text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Careers <span className="ml-1">↗</span>
                </a>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-gray-900 text-base">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-base font-semibold uppercase tracking-wider text-gray-500 mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-gray-900 text-base">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-gray-900 text-base">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-base text-center">
            © 2025 Syntra Health Technologies, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
