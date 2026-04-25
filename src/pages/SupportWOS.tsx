import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Handshake, LandPlot, FileCheck2, Building2, ArrowRight } from 'lucide-react';
import { facilitiesData } from '../data/facilitiesData';
import { getFacilityImage } from '../utils/facilityImages';

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
                Choose Your Investment Impact at WOS International
              </h1>
              <p className="text-white/90 text-lg leading-relaxed mb-8">
                Invest in one priority department or support the entire WOS International Medical Complex.
                Your partnership helps us deliver world-class healthcare, education, and innovation for Ethiopia and the region.
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
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-teal-950 mb-4">Select How You Want to Invest</h3>
          <p className="text-slate-600 text-lg leading-relaxed max-w-4xl mb-8">
            Choose one of the 24 sectors and open its detail page to continue your investment process.
            For full-complex investment, open any sector and proceed using the databank button.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/facilities"
              className="inline-flex items-center justify-center text-teal-700 font-bold px-3 py-3 hover:text-teal-800 transition-colors"
            >
              Explore Project Sectors <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-8 rounded-3xl border border-slate-200 bg-white p-8 md:p-10 shadow-sm">
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-teal-950 mb-4">Choose a Sector to Invest In</h3>
          <p className="text-slate-600 text-lg leading-relaxed max-w-4xl mb-8">
            Select one of the 24 sectors below and continue to its detail page to invest on this.
          </p>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {facilitiesData.map((facility, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(index * 0.03, 0.35) }}
                key={facility.id}
              >
                <Link
                  to={`/facility/${facility.id}`}
                  className="group block h-full rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-2xl hover:shadow-teal-900/10 hover:-translate-y-2 hover:border-teal-300 transition-all duration-500 relative overflow-hidden"
                >
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={getFacilityImage(facility)}
                      alt={facility.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/15 to-transparent" />
                    <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white bg-black/30 px-2.5 py-1 rounded-full border border-white/30">
                      Sector {facility.sector}
                    </span>
                  </div>

                  <div className="p-7">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-emerald-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-teal-600 transition-colors bg-slate-50 px-2.5 py-1 rounded-full border border-slate-100 group-hover:border-teal-200 group-hover:bg-teal-50">
                        {facility.category}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-teal-950 mb-2 group-hover:text-teal-700 transition-colors leading-snug font-serif">
                      {facility.name}
                    </h4>
                    <p className="text-sm text-slate-500 mb-6 leading-relaxed line-clamp-2">{facility.description}</p>

                    <div className="inline-flex items-center text-teal-700 font-bold group-hover:text-teal-800 transition-colors">
                      Invest on This Sector <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
