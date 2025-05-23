'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative py-28 md:py-40 bg-syntra-bg overflow-hidden">
      <div className="syntra-container mx-auto text-center max-w-3xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-syntra-navy mb-8 leading-tight">
          Practice <em className="font-serif not-italic text-gray-700">medicine</em> <br />
          Not paperwork
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
          Syntra automates your practice's administrative tasks, giving you more time for what matters most — your patients.
        </p>
        <div className="flex justify-center">
          <a
            href="https://calendly.com/ayush-syntra/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-syntra-blue hover:bg-blue-600 text-white px-8 py-4 rounded-md font-medium text-lg transition-colors shadow"
          >
            Book a demo
          </a>
        </div>
        <div className="flex justify-center mt-8 md:mt-16">
          <img
            src="/dashboard-screenshot.png"
            alt="Syntra dashboard screenshot"
            className="rounded-2xl shadow-xl w-full max-w-5xl border border-gray-200"
          />
        </div>
      </div>
    </section>
  );
}
