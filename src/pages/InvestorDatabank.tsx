import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Database, Send } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { facilitiesData } from '../data/facilitiesData';

export default function InvestorDatabank() {
  const [searchParams] = useSearchParams();
  const facilityId = Number(searchParams.get('facility'));
  const selectedFacility = facilitiesData.find((f) => f.id === facilityId);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="pt-28 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Link
            to={selectedFacility ? `/facility/${selectedFacility.id}` : '/support-wos'}
            className="inline-flex items-center gap-2 text-teal-700 font-bold hover:text-teal-800 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>

          <div className="rounded-[2rem] overflow-hidden border border-slate-200 shadow-2xl">
            <div className="relative p-8 md:p-12 bg-gradient-to-r from-slate-950 via-teal-950 to-slate-900">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/30 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                <Database className="w-4 h-4" />
                Investor Databank
              </p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                Invest on This
              </h1>
              <p className="text-white/90 text-lg leading-relaxed max-w-3xl">
                Share your investment profile so the WOS team can contact you with the right partnership model and next steps.
              </p>
            </div>

            <div className="bg-white p-8 md:p-10">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-bold text-teal-950">Full Name *</span>
                  <input required type="text" placeholder="Your full name" className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500" />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-sm font-bold text-teal-950">Email Address *</span>
                  <input required type="email" placeholder="you@example.com" className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500" />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-sm font-bold text-teal-950">Phone Number *</span>
                  <input required type="tel" placeholder="+251..." className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500" />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-sm font-bold text-teal-950">Country *</span>
                  <input required type="text" placeholder="Country of residence" className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500" />
                </label>

                <label className="flex flex-col gap-2 md:col-span-2">
                  <span className="text-sm font-bold text-teal-950">Investment Interest *</span>
                  <select
                    required
                    defaultValue={selectedFacility ? String(selectedFacility.id) : 'entire-complex'}
                    className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 bg-white"
                  >
                    <option value="entire-complex">Entire WOS Medical Complex</option>
                    {facilitiesData.map((facility) => (
                      <option key={facility.id} value={facility.id}>
                        Sector {facility.sector} - {facility.name}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-sm font-bold text-teal-950">Investment Range (USD)</span>
                  <select className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 bg-white">
                    <option>Below 100,000</option>
                    <option>100,000 - 500,000</option>
                    <option>500,000 - 1,000,000</option>
                    <option>Above 1,000,000</option>
                  </select>
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-sm font-bold text-teal-950">Investor Type *</span>
                  <select required className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 bg-white">
                    <option>Individual</option>
                    <option>Company</option>
                    <option>Foundation</option>
                    <option>Institution</option>
                  </select>
                </label>

                <label className="flex flex-col gap-2 md:col-span-2">
                  <span className="text-sm font-bold text-teal-950">Message</span>
                  <textarea
                    rows={5}
                    placeholder="Tell us your investment goals, timeline, and preferred sector."
                    className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 resize-y"
                  />
                </label>

                <div className="md:col-span-2 flex flex-wrap items-center gap-4 pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-teal-600 text-white px-7 py-3 rounded-full font-bold hover:bg-teal-700 transition-colors"
                  >
                    Submit Invest on This Form <Send className="w-4 h-4" />
                  </button>
                  <p className="text-sm text-slate-500">
                    This form currently collects your information for the next implementation step.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
