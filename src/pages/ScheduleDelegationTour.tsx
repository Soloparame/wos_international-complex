import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowLeft, CalendarCheck2, Send } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { facilitiesData } from '../data/facilitiesData';

export default function ScheduleDelegationTour() {
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
                <CalendarCheck2 className="w-4 h-4" />
                Delegation Tour
              </p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                Schedule Delegation Tour
              </h1>
              <p className="text-white/90 text-lg leading-relaxed max-w-3xl">
                Share your delegation details and preferred visit schedule. Our team will confirm logistics and arrange your guided tour.
              </p>
            </div>

            <div className="bg-white p-8 md:p-10">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-bold text-teal-950">Organization Name *</span>
                  <input required type="text" placeholder="Organization / Institution" className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500" />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-sm font-bold text-teal-950">Contact Person *</span>
                  <input required type="text" placeholder="Full name" className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500" />
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
                  <span className="text-sm font-bold text-teal-950">Delegation Size *</span>
                  <input required type="number" min={1} placeholder="Number of attendees" className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500" />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-sm font-bold text-teal-950">Preferred Visit Date *</span>
                  <input required type="date" className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500" />
                </label>

                <label className="flex flex-col gap-2 md:col-span-2">
                  <span className="text-sm font-bold text-teal-950">Priority Sector to Visit *</span>
                  <select
                    required
                    defaultValue={selectedFacility ? String(selectedFacility.id) : ''}
                    className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 bg-white"
                  >
                    <option value="" disabled>Select a sector</option>
                    {facilitiesData.map((facility) => (
                      <option key={facility.id} value={facility.id}>
                        Sector {facility.sector} - {facility.name}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="flex flex-col gap-2 md:col-span-2">
                  <span className="text-sm font-bold text-teal-950">Special Notes</span>
                  <textarea
                    rows={5}
                    placeholder="Share tour goals, key interests, and any protocol requirements."
                    className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 resize-y"
                  />
                </label>

                <div className="md:col-span-2 flex flex-wrap items-center gap-4 pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-teal-600 text-white px-7 py-3 rounded-full font-bold hover:bg-teal-700 transition-colors"
                  >
                    Submit Tour Request <Send className="w-4 h-4" />
                  </button>
                  <p className="text-sm text-slate-500">
                    Your request is collected for scheduling confirmation in the next step.
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
