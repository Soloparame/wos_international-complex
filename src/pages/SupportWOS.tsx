import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import {
  Handshake,
  LandPlot,
  FileCheck2,
  Building2,
  ArrowRight,
  Users,
  Stethoscope,
  GraduationCap,
  Microscope,
  AlertTriangle,
  Lightbulb,
  BarChart3,
  Wallet,
  Calendar,
  Shield,
  XCircle,
  CheckCircle2,
  Info,
} from 'lucide-react';
import { facilitiesData } from '../data/facilitiesData';
import { getFacilityImage } from '../utils/facilityImages';
import { WOS_LOGO_SRC, WOS_SITE_NAME } from '../constants/branding';

function SectionTitle({ icon: Icon, title, subtitle }: { icon: React.ElementType; title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 border border-teal-100 text-teal-800 px-3 py-1 text-xs font-bold uppercase tracking-wider mb-3">
        <Icon className="w-4 h-4" />
        {title}
      </div>
      {subtitle ? <p className="text-slate-600 leading-relaxed max-w-3xl">{subtitle}</p> : null}
    </div>
  );
}

export default function SupportWOS() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="pt-28 pb-16 px-6">
        <div className="max-w-7xl mx-auto rounded-[2rem] overflow-hidden border border-slate-200 shadow-2xl">
          <div className="relative min-h-[440px]">
            <img src="/image/general overview.png" alt="WOS project master plan in Ethiopia" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-teal-950/70 to-slate-900/55" />

            <div className="relative z-10 p-8 md:p-12 lg:p-14 max-w-4xl flex flex-col md:flex-row md:items-start gap-8">
              <img
                src={WOS_LOGO_SRC}
                alt={WOS_SITE_NAME}
                className="w-28 h-28 md:w-32 md:h-32 object-contain rounded-2xl ring-2 ring-white/25 shadow-xl shrink-0 bg-black/20"
                width={128}
                height={128}
              />
              <div>
                <p className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/30 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                  <Handshake className="w-4 h-4" />
                  Support {WOS_SITE_NAME}
                </p>
                <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-5">
                  Choose your investment impact at {WOS_SITE_NAME}
                </h1>
                <p className="text-white/90 text-lg leading-relaxed mb-8">
                  Invest in one priority department or support the entire {WOS_SITE_NAME}. Your partnership helps us deliver
                  world-class healthcare, education, and innovation for Ethiopia and the region.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Investors', 'Diaspora', 'Donors', 'Business Owners', 'NGOs', 'Foundations'].map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white/15 border border-white/30 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-200 bg-white p-8 md:p-10 shadow-sm"
          >
            <SectionTitle icon={Users} title="Regional reach & scale" />
            <ul className="list-disc pl-5 space-y-2 text-slate-700 leading-relaxed mb-8">
              <li>1–3 million people within its regional catchment area (typical for major hospitals in Ethiopia)</li>
              <li>5,000–15,000 patients per month (based on similar multi-specialty hospitals)</li>
            </ul>
            <h3 className="font-serif text-xl font-bold text-teal-950 mb-3">The project will include</h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-700 leading-relaxed">
              <li className="flex items-start gap-2 list-none -ml-0">
                <Stethoscope className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <span>Specialized hospital facilities</span>
              </li>
              <li className="flex items-start gap-2 list-none">
                <GraduationCap className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <span>Medical training centers</span>
              </li>
              <li className="flex items-start gap-2 list-none">
                <Microscope className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <span>Diagnostic and research units</span>
              </li>
            </ul>
          </motion.div>

          <div className="h-px bg-slate-200 max-w-7xl mx-auto" aria-hidden />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-amber-200 bg-amber-50/40 p-8 md:p-9 shadow-sm"
            >
              <SectionTitle icon={AlertTriangle} title="The problem (realistic data)" />
              <ul className="space-y-3 text-slate-800 leading-relaxed">
                <li>Over 70% of Ethiopia’s population lives in rural areas with limited access to advanced care</li>
                <li>Specialized healthcare services are concentrated in major cities</li>
                <li>Thousands of patients seek treatment abroad each year</li>
              </ul>
              <p className="mt-6 text-slate-800 font-medium flex items-start gap-2">
                <span className="text-lg" aria-hidden>
                  👉
                </span>
                <span>
                  <strong>Result:</strong> delayed treatment and preventable complications
                </span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-teal-200 bg-teal-50/50 p-8 md:p-9 shadow-sm"
            >
              <SectionTitle icon={Lightbulb} title="Solution (realistic range)" subtitle="Initial development plan:" />
              <ul className="space-y-3 text-slate-800 leading-relaxed">
                <li>
                  <span aria-hidden>🏥 </span>150–300 hospital beds (Phase 1)
                </li>
                <li>
                  <span aria-hidden>👨‍⚕️ </span>Capacity to support hundreds of healthcare workers
                </li>
                <li>
                  <span aria-hidden>📉 </span>Reduce need for foreign medical travel (long-term goal)
                </li>
                <li>
                  <span aria-hidden>⚕️ </span>Provide subsidized care programs for low-income patients
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-200 bg-white p-8 md:p-10 shadow-sm"
          >
            <SectionTitle icon={BarChart3} title="Impact (defensible estimates)" />
            <ul className="space-y-3 text-slate-700 leading-relaxed mb-4">
              <li>
                <span aria-hidden>🏥 </span>100,000–250,000 patients treated annually (depending on scale)
              </li>
              <li>
                <span aria-hidden>🎓 </span>Training support for hundreds of healthcare professionals
              </li>
              <li>
                <span aria-hidden>💼 </span>Creation of 500–1,500 jobs
              </li>
              <li>
                <span aria-hidden>❤️ </span>Contribution to reducing preventable deaths (impact depends on services provided)
              </li>
            </ul>
            <p className="text-sm text-slate-600 flex items-start gap-2">
              <span className="text-base" aria-hidden>
                👉
              </span>
              All figures are projected estimates based on comparable healthcare facilities in Ethiopia.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border-2 border-teal-300 bg-teal-950 text-teal-50 p-8 md:p-10 shadow-lg"
          >
            <div className="flex items-start gap-3">
              <Shield className="w-8 h-8 text-teal-300 shrink-0 mt-1" />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-300 mb-2">Very important — this builds trust</p>
                <p className="text-lg md:text-xl leading-relaxed font-medium">
                  “All projections are based on regional healthcare demand and comparable medical facilities. Detailed figures
                  will be refined as the project progresses.”
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-200 bg-white p-8 md:p-10 shadow-sm"
          >
            <SectionTitle icon={Wallet} title="Donation" subtitle="Logical tiers — adjust as your program evolves." />
            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                { amount: '$50', desc: 'basic patient support' },
                { amount: '$500', desc: 'equipment support' },
                { amount: '$5,000', desc: 'facility development contribution' },
                { amount: '$50,000+', desc: 'infrastructure investment' },
              ].map((row) => (
                <li key={row.amount} className="rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4">
                  <p className="font-serif text-2xl font-bold text-teal-900">{row.amount}</p>
                  <p className="text-slate-600 text-sm mt-1">→ {row.desc}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-200 bg-white p-8 md:p-10 shadow-sm"
          >
            <SectionTitle icon={Calendar} title="Timeline (more realistic)" />
            <ol className="space-y-4 list-decimal pl-5 text-slate-700 leading-relaxed">
              <li>
                <strong className="text-teal-950">Phase 1:</strong> Planning &amp; Approvals (6–18 months)
              </li>
              <li>
                <strong className="text-teal-950">Phase 2:</strong> Construction (2–4 years)
              </li>
              <li>
                <strong className="text-teal-950">Phase 3:</strong> Equipment &amp; Staffing (1 year)
              </li>
              <li>
                <strong className="text-teal-950">Phase 4:</strong> Operations &amp; Expansion
              </li>
            </ol>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-10 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-6">
              <Info className="w-5 h-5 text-teal-700" />
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-teal-950">Real talk (this is key)</h2>
            </div>
            <p className="text-slate-600 mb-6">There are 3 levels of numbers:</p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-red-200 bg-white p-6">
                <div className="flex items-center gap-2 text-red-700 font-bold text-sm uppercase tracking-wide mb-3">
                  <XCircle className="w-5 h-5" /> Dangerous (don’t use)
                </div>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li>“We will serve 5 million people”</li>
                  <li>“We will reduce deaths by 30%”</li>
                </ul>
                <p className="mt-4 text-sm text-slate-600 flex gap-2">
                  <span aria-hidden>
                    👉
                  </span>
                  Too big, no proof
                </p>
              </div>
              <div className="rounded-2xl border border-amber-200 bg-white p-6">
                <div className="flex items-center gap-2 text-amber-800 font-bold text-sm uppercase tracking-wide mb-3">
                  <AlertTriangle className="w-5 h-5" /> Okay (what we used now)
                </div>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li>Ranges (100,000–250,000 patients)</li>
                </ul>
                <p className="mt-4 text-sm text-slate-600 flex gap-2">
                  <span aria-hidden>
                    👉
                  </span>
                  Safe and believable
                </p>
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-white p-6">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm uppercase tracking-wide mb-3">
                  <CheckCircle2 className="w-5 h-5" /> Best (what to build next)
                </div>
                <p className="text-sm text-slate-700 mb-2">Exact numbers based on:</p>
                <ul className="text-sm text-slate-700 list-disc pl-5 space-y-1">
                  <li>Land size</li>
                  <li>Budget</li>
                  <li>Architectural plan</li>
                  <li>Bed count</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
          {[
            {
              icon: LandPlot,
              title: 'Land Is Secured in Ethiopia',
              text: `A dedicated site is available for full development of ${WOS_SITE_NAME}.`,
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
            Choose one of the 24 sectors and open its detail page to continue your investment process. For full-complex
            investment, open any sector and proceed using the databank button.
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
          <p className="text-slate-600 text-lg leading-relaxed max-w-4xl mb-8">Select one of the 24 sectors below and continue to its detail page to invest on this.</p>

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
