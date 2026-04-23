import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Handshake, LandPlot, FileCheck2, Building2, ArrowRight } from 'lucide-react';

export default function SupportWOS() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="pt-28 pb-16 px-6">
        <div className="max-w-7xl mx-auto rounded-[2rem] overflow-hidden border border-slate-200 shadow-2xl">
          <div className="relative min-h-[440px]">
            <img src="/image/general overview.png" alt="WOS project master plan in Ethiopia" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-teal-950/70 to-slate-900/55" />

            <div className="relative z-10 p-8 md:p-12 lg:p-14 max-w-4xl">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/30 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                <Handshake className="w-4 h-4" />
                Support WOS International
              </p>
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-5">
                Join us to build WOS International Medical Complex
              </h1>
              <p className="text-white/90 text-lg leading-relaxed mb-8">
                We invite investors, Ethiopian diaspora, donors, business owners, and institutional partners to help bring this medical city to life.
                This is a long-term, high-impact project designed to transform healthcare and medical innovation in Ethiopia.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Investors', 'Diaspora', 'Donors', 'Business Owners', 'NGOs', 'Foundations'].map((item) => (
                  <span key={item} className="rounded-full bg-white/15 border border-white/30 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[
            {
              icon: LandPlot,
              title: 'Land Is Secured in Ethiopia',
              text: 'A dedicated site is available for full development of the WOS International Medical Complex.',
            },
            {
              icon: FileCheck2,
              title: 'Master Plan Is Ready',
              text: 'The complete master plan is prepared, including sectors, phased development, and functional zoning.',
            },
            {
              icon: Building2,
              title: 'Partnership Is Open',
              text: 'We are open to funding, construction, operations, and strategic implementation partnerships.',
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 16 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white border border-slate-200 p-7 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-teal-600" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-teal-950 mb-3">{item.title}</h2>
              <p className="text-slate-600 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto mt-10 rounded-3xl border border-slate-200 bg-white p-8 md:p-10 shadow-sm">
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-teal-950 mb-4">Request the Master Plan and Partnership Brief</h3>
          <p className="text-slate-600 text-lg leading-relaxed max-w-4xl mb-8">
            Contact the administration to review the master plan in detail, discuss collaboration models, and explore how your support can help accelerate project delivery.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:admin@wos-medical.com?subject=WOS%20Partnership%20and%20Master%20Plan%20Request"
              className="inline-flex items-center justify-center bg-teal-600 text-white px-7 py-3 rounded-full font-bold hover:bg-teal-700 transition-colors"
            >
              Contact Admin
            </a>
            <a
              href="tel:+251911000000"
              className="inline-flex items-center justify-center bg-white text-teal-800 border border-teal-200 px-7 py-3 rounded-full font-bold hover:bg-teal-50 transition-colors"
            >
              Call Admin Office
            </a>
            <a
              href="/facilities"
              className="inline-flex items-center justify-center text-teal-700 font-bold px-3 py-3 hover:text-teal-800 transition-colors"
            >
              Explore Project Sectors <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
