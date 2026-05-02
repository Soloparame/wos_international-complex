import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { WOS_LOGO_SRC, WOS_SITE_NAME } from '../constants/branding';

const Footer = () => {
  return (
    <footer className="bg-teal-950 text-slate-300 pt-24 pb-12 border-t border-teal-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3 group min-w-0">
              <div className="bg-teal-900/80 border border-teal-600/50 p-1.5 rounded-xl shadow-lg group-hover:bg-teal-800 transition-all shrink-0">
                <img src={WOS_LOGO_SRC} alt={WOS_SITE_NAME} className="w-10 h-10 sm:w-11 sm:h-11 object-contain rounded-lg" width={44} height={44} />
              </div>
              <div className="flex flex-col leading-tight min-w-0">
                <span className="font-serif font-bold text-white text-sm sm:text-lg tracking-wide truncate">WOS Medical</span>
                <span className="font-sans font-bold text-teal-300 text-[10px] sm:text-xs tracking-[0.2em] uppercase">Complex</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed font-light text-teal-100/80">
              A 185,090 m² world-class integrated healthcare ecosystem dedicated to providing holistic care through innovation, research, and a highly advanced patient-centric environment.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-teal-900 border border-teal-800 flex items-center justify-center hover:bg-white hover:text-teal-950 transition-all"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-teal-900 border border-teal-800 flex items-center justify-center hover:bg-white hover:text-teal-950 transition-all"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-teal-900 border border-teal-800 flex items-center justify-center hover:bg-white hover:text-teal-950 transition-all"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-teal-900 border border-teal-800 flex items-center justify-center hover:bg-white hover:text-teal-950 transition-all"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Network Links</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="/" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>Home Node</a></li>
              <li><a href="/facilities" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>Sectors Directory</a></li>
              <li><a href="/about" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>Facility Intel</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>Support Terminal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Key Sectors</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">General Hospital</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Oncology Wing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Research Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Staff Residential</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Communications</h4>
            <ul className="space-y-4 text-sm font-medium text-teal-100/90">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-400 shrink-0" />
                <span>WOS Medical Complex, Medical District</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-400 shrink-0" />
                <span>+1 (555) 000-WOS</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-400 shrink-0" />
                <span>contact@wos-medical.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-teal-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold text-teal-200/60">
          <p>© 2026 WOS Medical Complex. All systems nominal.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Data Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;