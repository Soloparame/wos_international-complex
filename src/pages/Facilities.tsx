import React from 'react';
import { motion } from 'framer-motion';
import { Building2, MapPinned } from 'lucide-react';
import Navbar from '../components/Navbar';
import FacilityGrid from '../components/FacilityGrid';
import Footer from '../components/Footer';

export default function Facilities() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <header className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
        <img src="/image/general overview.png" alt="Facilities overview" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/75 via-slate-900/45 to-slate-900/30" />
        <div
          className="absolute inset-0 opacity-[0.15]"
          aria-hidden
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.4) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 text-white border border-white/30 px-4 py-1.5 text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-sm">
                <Building2 className="w-4 h-4" />
                Facility directory
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 text-teal-100 border border-white/20 px-4 py-1.5 text-xs font-semibold backdrop-blur-sm">
                <MapPinned className="w-4 h-4" />
                24 sectors · 185,090 m²
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-4xl leading-[1.05] tracking-tight">
              Every building, one medical city
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed border-l-4 border-teal-300 pl-6">
              Browse all specialized sectors of WOS International Medical Complex — from flagship hospitals and research
              labs to residences, hospitality, and campus operations.
            </p>
          </motion.div>
        </div>
      </header>

      <FacilityGrid />
      <Footer />
    </div>
  );
}
