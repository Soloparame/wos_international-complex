import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PhoneCall, Ambulance, Clock3, Siren } from 'lucide-react';

export default function Emergency() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <section className="pt-28 pb-20 px-6">
        <div className="max-w-6xl mx-auto rounded-[2rem] overflow-hidden border border-slate-200 shadow-2xl">
          <div className="relative min-h-[360px]">
            <img src="/image/hospital2.png" alt="Emergency Department" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-red-950/80 to-slate-900/50" />
            <div className="relative z-10 p-10 md:p-12 max-w-3xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-red-200/50 bg-red-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-red-100 mb-6">
                <Siren className="w-4 h-4" /> Emergency Response
              </p>
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-5">
                24/7 Emergency Support
              </h1>
              <p className="text-white/85 text-lg leading-relaxed mb-8">
                For urgent and life-threatening cases, contact our emergency line immediately.
              </p>
              <a href="tel:+251911000000" className="inline-flex items-center gap-2 bg-white text-red-700 px-7 py-3 rounded-full font-bold hover:bg-red-50 transition-colors">
                <PhoneCall className="w-4 h-4" /> Call Now: +251 911 000 000
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-3xl bg-white border border-slate-200 p-7 shadow-sm">
            <Ambulance className="w-8 h-8 text-red-600 mb-4" />
            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-2">Ambulance Dispatch</h2>
            <p className="text-slate-600">Rapid dispatch service connected to the emergency department.</p>
          </div>
          <div className="rounded-3xl bg-white border border-slate-200 p-7 shadow-sm">
            <Clock3 className="w-8 h-8 text-teal-600 mb-4" />
            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-2">Always Open</h2>
            <p className="text-slate-600">Our triage and critical care teams are available 24 hours daily.</p>
          </div>
          <div className="rounded-3xl bg-white border border-slate-200 p-7 shadow-sm">
            <PhoneCall className="w-8 h-8 text-emerald-600 mb-4" />
            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-2">Hotline</h2>
            <p className="text-slate-600">Emergency Desk: <a href="tel:+251911000000" className="text-teal-700 font-semibold">+251 911 000 000</a></p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
