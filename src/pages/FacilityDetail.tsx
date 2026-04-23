import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ChevronRight,
  Layers,
  MapPin,
  Square,
  Activity,
  ExternalLink,
  ShieldCheck,
  Microscope,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { facilitiesData } from '../data/facilitiesData';
import { getFacilityImage } from '../utils/facilityImages';

export default function FacilityDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const facility = facilitiesData.find((f) => f.id === parseInt(id || '0', 10));

  useEffect(() => {
    if (facility) {
      document.title = `${facility.name} | WOS International Medical Complex`;
    }
  }, [facility]);

  if (!facility) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <Navbar />
        <div className="pt-40 pb-24 text-center px-6">
          <h1 className="text-4xl font-bold font-serif mb-6 text-teal-900">Sector Offline</h1>
          <button
            type="button"
            onClick={() => navigate('/facilities')}
            className="mt-8 bg-teal-50 text-teal-800 border border-teal-200 px-8 py-3 rounded-full font-bold hover:bg-teal-600 hover:text-white transition-all shadow-sm"
          >
            Return to Directory
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-teal-100 selection:text-teal-900">
      <Navbar />

      <header className="relative min-h-[80vh] flex flex-col pt-20 overflow-hidden">
        {/* Background Parallax Image with Light Gradients */}
        <div className="absolute inset-0 z-0">
          <motion.img
            src={getFacilityImage(facility)}
            alt={facility.name}
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
          <div className="absolute inset-0 bg-black/25 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/20 to-transparent" />
          
          {/* Tech Grid Pattern overlay */}
          <div 
            className="absolute inset-0 opacity-[0.2]"
            style={{ 
              backgroundImage: 'linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        <div className="relative z-10 flex-1 flex flex-col max-w-7xl mx-auto w-full px-6 pb-16">
          {/* Hero Content */}
          <div className="flex-1 flex w-full flex-col justify-end mt-auto max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/25 text-white border border-white/35 px-4 py-1.5 text-xs font-bold uppercase tracking-widest shadow-sm">
                  <Activity className="w-3.5 h-3.5" /> Sector {facility.sector}
                </span>
                <span className="inline-flex items-center rounded-full bg-white/20 text-white border border-white/30 px-4 py-1.5 text-xs font-bold tracking-wider">
                  {facility.category}
                </span>
              </div>
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.05] drop-shadow-[0_8px_22px_rgba(0,0,0,0.55)]">
                {facility.name}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mb-10 border-l-4 border-teal-300 pl-6 font-light">
                {facility.description}
              </p>
              
              {/* Quick High-tech Stats Container */}
              <div className="flex flex-wrap gap-4">
                {[
                  { label: "Levels", value: facility.stories, unit: "Stories" },
                  { label: "Plot Area", value: facility.plotArea.toLocaleString(), unit: "m²" },
                  { label: "Built-up", value: facility.builtUpArea.toLocaleString(), unit: "m²" }
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="relative overflow-hidden rounded-2xl bg-white backdrop-blur-xl border border-slate-200 px-6 py-5 min-w-[160px] shadow-sm group hover:shadow-md transition-shadow"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-emerald-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-1 font-bold">{stat.label}</p>
                    <p className="text-2xl font-bold text-teal-950 tabular-nums">
                      {stat.value} <span className="text-sm text-slate-500 font-medium">{stat.unit}</span>
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Main Content Body */}
      <div className="relative z-20 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 -mt-4 text-slate-700">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                className="bg-white backdrop-blur-xl border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center">
                    <Microscope className="w-6 h-6 text-teal-600" />
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-teal-950">Facility Overview</h2>
                </div>
                <p className="text-slate-600 text-lg leading-relaxed mb-12 font-light">
                  {facility.description} 
                  This state-of-the-art specialized sector forms a critical pillar of our 185K m² medical complex. Utilizing advanced environmental controls and interconnected architectural design, it integrates seamlessly with our network to provide holistic patient care and accelerate clinical research.
                </p>

                <h3 className="font-serif text-2xl font-bold text-teal-950 mb-8 border-b border-slate-100 pb-4">Key Capabilities & Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {facility.details.map((detail, idx) => (
                    <motion.div
                      key={detail}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + idx * 0.05 }}
                      className="group flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-teal-300 hover:bg-white transition-all shadow-sm hover:shadow-md"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-teal-100 text-teal-600 text-sm font-bold shadow-sm group-hover:scale-110 group-hover:bg-teal-50 transition-transform">
                        0{idx + 1}
                      </span>
                      <p className="text-slate-700 font-medium leading-snug pt-1">{detail}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Technical Specifications Specs */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-6"
              >
                <div className="p-8 rounded-3xl bg-white backdrop-blur-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Layers className="w-24 h-24 text-teal-500" />
                  </div>
                  <div className="relative z-10">
                    <Layers className="w-8 h-8 text-teal-500 mb-6" />
                    <p className="text-4xl font-bold text-teal-950 tabular-nums mb-2">{facility.stories}</p>
                    <p className="text-sm font-bold uppercase tracking-wider text-slate-500">Total Stories</p>
                  </div>
                </div>
                <div className="p-8 rounded-3xl bg-white backdrop-blur-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <MapPin className="w-24 h-24 text-emerald-500" />
                  </div>
                  <div className="relative z-10">
                    <MapPin className="w-8 h-8 text-emerald-500 mb-6" />
                    <p className="text-4xl font-bold text-teal-950 tabular-nums mb-2">{facility.plotArea.toLocaleString()}</p>
                    <p className="text-sm font-bold uppercase tracking-wider text-slate-500">Plot Area (m²)</p>
                  </div>
                </div>
                <div className="p-8 rounded-3xl bg-white backdrop-blur-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Square className="w-24 h-24 text-sky-500" />
                  </div>
                  <div className="relative z-10">
                    <Square className="w-8 h-8 text-sky-500 mb-6" />
                    <p className="text-4xl font-bold text-teal-950 tabular-nums mb-2">{facility.builtUpArea.toLocaleString()}</p>
                    <p className="text-sm font-bold uppercase tracking-wider text-slate-500">Built-up (m²)</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Sticky Sidebar */}
            <aside className="lg:col-span-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                className="sticky top-28 bg-white backdrop-blur-2xl border border-slate-200 p-8 rounded-3xl shadow-xl shadow-slate-200/50"
              >
                <div className="flex items-center gap-3 mb-8">
                  <ShieldCheck className="w-6 h-6 text-teal-600" />
                  <h4 className="font-serif text-2xl font-bold text-teal-950">Facility Intel</h4>
                </div>
                
                <dl className="space-y-6 text-sm mb-10">
                  {[
                    { label: "Designation", value: facility.category },
                    { label: "Network Sector", value: facility.sector },
                    { label: "Vertical Core", value: `${facility.stories} Levels` },
                    { label: "Footprint", value: `${facility.plotArea.toLocaleString()} m²` },
                    { label: "Gross Area", value: `${facility.builtUpArea.toLocaleString()} m²` }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                      <dt className="text-slate-500 font-medium uppercase tracking-wider text-xs">{item.label}</dt>
                      <dd className="text-teal-950 font-bold tracking-wide">{item.value}</dd>
                    </div>
                  ))}
                </dl>
                
                <div className="space-y-4">
                  <button className="w-full relative group overflow-hidden bg-teal-600 text-white py-4 rounded-xl font-bold hover:bg-teal-700 transition-colors shadow-lg shadow-teal-600/25">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Access Databank <ExternalLink className="w-4 h-4" />
                    </span>
                    <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </button>
                  <button className="w-full bg-slate-50 text-slate-700 border border-slate-200 py-4 rounded-xl font-bold hover:bg-white hover:border-slate-300 transition-colors shadow-sm">
                    Schedule Delegation Tour
                  </button>
                </div>
              </motion.div>
            </aside>

          </div>
        </div>
      </div>

      {/* Related Sectors Section */}
      <section className="py-24 border-t border-slate-200 bg-white relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-teal-200 to-transparent" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600 mb-2">Network Nodes</p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-teal-950">Related Sectors</h2>
            </div>
            <Link
              to="/facilities"
              className="group text-sm font-bold text-teal-600 hover:text-teal-700 inline-flex items-center gap-2 uppercase tracking-wide transition-colors"
            >
              View Full Directory
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilitiesData
              .filter((f) => f.category === facility.category && f.id !== facility.id)
              .slice(0, 3)
              .map((related) => (
                <motion.article
                  key={related.id}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-teal-300 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <Link to={`/facility/${related.id}`} className="block h-full flex flex-col">
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                      <img
                        src={getFacilityImage(related)}
                        alt={related.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-[10px] font-bold uppercase tracking-widest text-teal-700 mb-3 shadow-sm">
                          Sector {related.sector}
                        </span>
                        <h3 className="text-2xl font-bold text-white font-serif leading-snug drop-shadow-md">
                          {related.name}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed mb-6 flex-1">
                        {related.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm font-bold text-teal-600 group-hover:text-teal-700 transition-colors mt-auto">
                        View Node Data
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
