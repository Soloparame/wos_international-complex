import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Hexagon, PhoneCall } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Facilities Directory', path: '/facilities' },
    { name: 'About WOS', path: '/about' },
    { name: 'Support WOS', path: '/support-wos' },
  ];

  const isTransparentHeroMode = location.pathname === '/' && !scrolled;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 border-b border-slate-100 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group min-w-0">
          <div className={`p-2.5 rounded-xl shadow-sm transition-all shrink-0 ${isTransparentHeroMode ? 'bg-white/20 border border-white/35 group-hover:bg-white/30' : 'bg-teal-50 border border-teal-100 group-hover:bg-teal-100'}`}>
            <Hexagon className={`w-6 h-6 group-hover:scale-110 transition-transform ${isTransparentHeroMode ? 'text-white' : 'text-teal-600'}`} />
          </div>
          <div className="flex flex-col leading-tight min-w-0">
            <span className={`font-serif font-bold text-sm sm:text-lg tracking-wide truncate ${isTransparentHeroMode ? 'text-white drop-shadow-md' : 'text-teal-950'}`}>
              WOS MEDICAL
            </span>
            <span className={`font-sans font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase ${isTransparentHeroMode ? 'text-teal-100 drop-shadow-md' : 'text-teal-600'}`}>
              International Complex
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-bold tracking-wide transition-all relative group py-2 ${
                location.pathname === link.path
                  ? isTransparentHeroMode
                    ? 'text-white'
                    : 'text-teal-700'
                  : isTransparentHeroMode
                    ? 'text-white/85 hover:text-white'
                    : 'text-slate-600 hover:text-teal-600'
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="nav-indicator"
                  className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${isTransparentHeroMode ? 'bg-white' : 'bg-teal-600'}`}
                />
              )}
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-center ${isTransparentHeroMode ? 'bg-white/70' : 'bg-teal-200'}`} />
            </Link>
          ))}
          <Link
            to="/emergency"
            className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-sm flex items-center gap-2 ${
              isTransparentHeroMode
                ? 'bg-white/20 text-white border border-white/40 hover:bg-white hover:text-teal-800'
                : 'bg-teal-50 text-teal-700 border border-teal-200 hover:bg-teal-600 hover:text-white'
            }`}
          >
            <PhoneCall className="w-4 h-4" />
            Emergency
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${isTransparentHeroMode ? 'text-white hover:bg-white/20' : 'text-teal-950 hover:bg-teal-50'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-bold tracking-wide ${location.pathname === link.path ? 'text-teal-600' : 'text-slate-600'}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/emergency"
                onClick={() => setIsOpen(false)}
                className="bg-teal-600 text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm shadow-md text-center"
              >
                Emergency
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;