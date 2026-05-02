import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import {
  Activity, Baby, Bed, Briefcase, Building, FlaskConical, GraduationCap, HeartPulse,
  Home, Hotel, Leaf, Library, Microscope, Pill, ShoppingBag, Store, Stethoscope,
  UserCheck, UserCircle,
} from 'lucide-react';
import { facilitiesData } from '../data/facilitiesData';
import { getFacilityImage } from '../utils/facilityImages';

const iconByName: Record<string, LucideIcon> = {
  Stethoscope, Pill, Activity, HeartPulse, Leaf, Microscope, Baby, FlaskConical,
  GraduationCap, Library, Home, Building, UserCheck, UserCircle, Bed, Hotel,
  ShoppingBag, Store, Briefcase,
};

const categories = ['All', 'Medical', 'Residential', 'Commercial', 'Academic', 'Operations'] as const;

const FacilityGrid = () => {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('All');

  const filtered = useMemo(
    () =>
      activeCategory === 'All'
        ? facilitiesData
        : facilitiesData.filter((f) => f.category === activeCategory),
    [activeCategory]
  );

  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden" id="facilities">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        aria-hidden
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(20 184 166 / 0.2) 1px, transparent 0)`,
          backgroundSize: '48px 48px',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-teal-600 mb-4 drop-shadow-sm">System Architecture</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-teal-950 mb-5 tracking-tight">
            Twenty-four sectors, one network
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-light">
            Explore every building block of WOS Medical Complex — medical, academic, residential,
            commercial, and operations — completely interconnected for advanced patient care.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-teal-600 text-white border-teal-500 shadow-lg shadow-teal-600/25 scale-[1.05]'
                  : 'bg-white backdrop-blur-md text-slate-600 border-slate-200 hover:border-teal-300 hover:bg-teal-50 hover:text-teal-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((facility, index) => {
            const Icon = iconByName[facility.icon] ?? Building;
            return (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(index * 0.05, 0.4) }}
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

                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center shadow-inner border border-teal-100 group-hover:bg-teal-600 transition-colors duration-300 relative overflow-hidden">
                      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <Icon className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors duration-300 relative z-10" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-teal-600 transition-colors bg-slate-50 px-2.5 py-1 rounded-full border border-slate-100 group-hover:border-teal-200 group-hover:bg-teal-50">
                      {facility.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-teal-950 mb-2 group-hover:text-teal-700 transition-colors leading-snug font-serif">
                    {facility.name}
                  </h3>
                  <p className="text-sm text-slate-500 mb-6 leading-relaxed line-clamp-2">{facility.description}</p>
                  
                  <div className="flex items-center gap-2 mt-auto">
                    <span className="inline-flex items-center text-xs font-bold text-teal-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                      View details
                    </span>
                    <span className="text-teal-600 font-bold opacity-0 group-hover:opacity-100 transition-all duration-300">
                      →
                    </span>
                  </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FacilityGrid;
