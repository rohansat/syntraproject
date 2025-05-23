'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const services = [
  {
    title: 'Electronic Health Records',
    description: 'Modern cloud-based EHR system that simplifies patient record management. Reduce documentation time by 40%.',
    icon: '/ehr.png',
    link: '/electronic-health-records',
  },
  {
    title: 'AI Medical Coding',
    description: 'Automatically assign CPT and ICD codes. Our AI analyzes patient encounters and assigns appropriate billing codes.',
    icon: '/coding.png',
    link: '/ai-medical-coding',
  },
  {
    title: 'Prior Auth Automation',
    description: 'Cut prior authorization time from days to minutes. Our platform automates insurance approvals for medications and procedures.',
    icon: '/auth.png',
    link: '/prior-auth-automation',
  },
];

export default function Services() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="syntra-container">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-blue-100 text-syntra-blue rounded-md text-sm font-medium mb-6">
            PRODUCTS
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-syntra-navy mb-6">
            Our services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your practice with our AI-powered healthcare technology suite.
            From an intelligent EHR and scribe to fully automated prior authorizations and RCM.
            <br className="hidden md:block" />
            Syntra eliminates administrative burdens so you can focus on what matters—patient care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden transition-shadow border border-gray-100"
              style={{ minHeight: 520, width: 400 }}
            >
              {/* Top half: grid background with large icon */}
              <div className="flex items-center justify-center w-full" style={{ height: 300 }}>
                <div
                  className={`w-full h-full flex items-center justify-center bg-white`}
                >
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="!static w-full h-full"
                  />
                </div>
              </div>
              {/* Bottom half: text and arrow */}
              <div className="flex-1 flex flex-col justify-between p-8">
                <div>
                  <h3 className="text-2xl font-serif font-normal text-syntra-navy mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-base">
                    {service.description}
                  </p>
                </div>
                <div className="flex justify-end">
                  <Link
                    href={service.link}
                    className="flex items-center text-syntra-navy hover:text-syntra-blue font-medium text-xl"
                  >
                    <ChevronRight size={28} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
