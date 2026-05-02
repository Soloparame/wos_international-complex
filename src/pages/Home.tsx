import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FacilityGrid from '../components/FacilityGrid';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Beaker, HeartPulse, House, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar />
      <Hero />
      
      <section className="py-24 bg-white relative border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600 mb-4">About the Complex</p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-teal-950 mb-6 leading-tight">
                Pioneering Holistic Healthcare and Global Research
              </h2>
              <p className="text-slate-600 leading-relaxed max-w-xl mb-8">
                WOS Medical Complex is a premier healthcare ecosystem. We combine advanced laboratories,
                comprehensive patient care from pharmacy to oncology, and integrated living to ensure absolute excellence in
                medical innovation.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-teal-700 font-bold hover:text-teal-800 transition-colors"
              >
                Learn more about WOS <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: 'Research', text: '21,000 m² of advanced laboratory space.', icon: Beaker },
                { title: 'Care', text: '360-degree patient wellness and recovery.', icon: HeartPulse },
                { title: 'Living', text: 'Dedicated staff and student residences.', icon: House },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <p className="text-xl font-bold text-teal-950 font-serif mb-2">{item.title}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-[2rem] overflow-hidden border border-slate-200 shadow-xl">
            <div className="relative h-56 md:h-72">
              <img src="/image/general overview.png" alt="Master plan overview" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-teal-950/75 to-slate-900/40" />
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">Master Plan Highlights</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3">
              {[
                { value: '185K', label: 'm² Plot', tint: 'text-teal-700' },
                { value: '~500K', label: 'm² Built', tint: 'text-emerald-700' },
                { value: '24', label: 'Sectors', tint: 'text-blue-700' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 14 }}
                  viewport={{ once: true }}
                  className="p-8 md:p-10 border-t md:border-t-0 md:border-l first:border-l-0 border-slate-200 bg-white"
                >
                  <p className={`text-4xl md:text-5xl font-serif font-bold ${stat.tint}`}>{stat.value}</p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FacilityGrid />

      {/* Call to Action */}
      <section className="py-32 relative overflow-hidden bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="rounded-[3rem] overflow-hidden bg-teal-900 border border-teal-800 py-24 px-10 text-center relative shadow-2xl">
            <div className="absolute inset-0 opacity-35">
              <img 
                src="/image/recreational area1.png" 
                alt="Medical Background" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-8 drop-shadow-md">
                Experience WOS Medical Complex
              </h2>
              <p className="text-teal-100 text-lg mb-12 font-light">
                Schedule a private tour or consult with our administration.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-teal-950 px-10 py-4 rounded-full font-bold hover:bg-teal-50 transition-all shadow-xl hover:scale-105">
                  Book a Visit
                </button>
                <button className="bg-teal-800 backdrop-blur-md border border-teal-700 text-white px-10 py-4 rounded-full font-bold hover:bg-teal-700 transition-all">
                  Contact Admin
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}