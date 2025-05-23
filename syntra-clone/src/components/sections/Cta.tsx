'use client';

import Image from 'next/image';

export default function Cta() {
  return (
    <section className="py-20 md:py-28 flex justify-center items-center bg-syntra-bg">
      <div className="w-full max-w-6xl mx-auto">
        <div className="bg-[#1a2956] rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between px-12 py-12 md:py-16">
          {/* Left: Text and Button */}
          <div className="flex-1 flex flex-col justify-center items-start text-left">
            <h2 className="text-4xl md:text-5xl font-serif font-normal text-white mb-6 leading-tight">
              Ready to simplify your practice?
            </h2>
            <p className="text-blue-100 text-xl leading-relaxed mb-8 max-w-xl">
              Streamline your medical administrative tasks with Syntra. Free up valuable time for patient care.
            </p>
            <a
              href="https://calendly.com/ayush-syntra/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2563eb] hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors shadow"
            >
              Book a demo
            </a>
          </div>
          {/* Right: Logo */}
          <div className="flex-shrink-0 flex items-center justify-center mt-10 md:mt-0 md:ml-12">
            <div className="bg-white rounded-2xl p-6 flex items-center justify-center shadow-md" style={{ width: 120, height: 120 }}>
              <img
                src="https://ext.same-assets.com/2225457239/2256820530.png"
                alt="Syntra logo"
                className="w-20 h-20 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
