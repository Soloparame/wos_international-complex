import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Microscope, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="pt-24 pb-24">
        <section className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-[2rem] overflow-hidden border border-slate-200 shadow-2xl">
            <div className="relative min-h-[420px]">
              <img src="/image/general overview.png" alt="WOS overview" className="w-full h-full absolute inset-0 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 to-slate-900/35" />
              <div className="relative z-10 p-10 md:p-14 max-w-3xl">
                <p className="inline-flex items-center rounded-full bg-white/20 border border-white/30 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                  About WOS
                </p>
                <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-5 leading-tight">
                  One campus. Full-spectrum healthcare.
                </h1>
                <p className="text-white/85 text-lg leading-relaxed mb-8">
                  WOS International Medical Complex is a master-planned medical city designed to integrate treatment, research, education, and residential life in one connected ecosystem.
                </p>
                <Link to="/facilities" className="inline-flex items-center gap-2 bg-white text-teal-900 px-6 py-3 rounded-full font-bold hover:bg-teal-50 transition-colors">
                  Explore all sectors <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="max-w-7xl mx-auto px-6 mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Microscope, title: 'Research Core', desc: '21,000 m² of labs and clinical innovation spaces.' },
            { icon: ShieldCheck, title: 'Patient-Centered Care', desc: 'Specialized departments from emergency to rehabilitation.' },
            { icon: Building2, title: 'Integrated Living', desc: 'Residences, hospitality, and support services within campus.' },
          ].map((item) => (
            <motion.div
              key={item.title}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 16 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-teal-950 mb-2">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </section>

        <section className="max-w-7xl mx-auto px-6 mt-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-white">
              <img src="/image/hospital1.png" alt="Medical buildings" className="w-full h-64 object-cover" />
              <div className="p-7">
                <h2 className="font-serif text-3xl font-bold text-teal-950 mb-4">Vision</h2>
                <p className="text-slate-600 leading-relaxed">
                  Build a global benchmark for integrated healthcare infrastructure where specialized treatment, education, and research evolve together.
                </p>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-white">
              <img src="/image/recreational area2.png" alt="Campus lifestyle" className="w-full h-64 object-cover" />
              <div className="p-7">
                <h2 className="font-serif text-3xl font-bold text-teal-950 mb-4">Future-ready Growth</h2>
                <p className="text-slate-600 leading-relaxed">
                  The master plan is built for long-term expansion with sustainable systems, smart circulation, and adaptable sectors.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}