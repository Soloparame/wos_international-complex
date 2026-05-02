import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useReducedMotion, useTransform } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 45, damping: 18, mass: 0.8 });
  const springY = useSpring(mouseY, { stiffness: 45, damping: 18, mass: 0.8 });
  const rotateX = useTransform(springY, (value) => value * -0.08);
  const rotateY = useTransform(springX, (value) => value * 0.08);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    if (shouldReduceMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const relativeX = (event.clientX - rect.left) / rect.width - 0.5;
    const relativeY = (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(relativeX * 22);
    mouseY.set(relativeY * 16);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 text-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src="/hero-3d-city.png"
          alt="WOS Medical Complex"
          className="w-full h-full object-cover"
          style={{
            x: springX,
            y: springY,
            rotateX: shouldReduceMotion ? 0 : rotateX,
            rotateY: shouldReduceMotion ? 0 : rotateY,
            transformPerspective: 1200,
          }}
          initial={{ scale: 1.06, filter: 'saturate(1.05)' }}
          animate={
            shouldReduceMotion
              ? { scale: 1.08 }
              : { scale: [1.08, 1.12, 1.08], y: [0, -6, 0] }
          }
          transition={{
            duration: shouldReduceMotion ? 0.8 : 18,
            repeat: shouldReduceMotion ? 0 : Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
        />
        {/* Keep image fully visible while giving text a little contrast */}
        <div className="absolute inset-0 bg-black/15 pointer-events-none" />
      </div>

      <div className="relative z-10 w-full px-6 pt-16 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 text-white text-xs font-bold uppercase tracking-widest mb-6 shadow-md">
            <span>WOS Medical Complex</span>
          </div>
          
          <h1 className="font-serif text-4xl sm:text-5xl border-transparent font-bold text-white leading-[1.2] mb-4 drop-shadow-[0_6px_18px_rgba(0,0,0,0.5)]">
            A city built for <span className="text-teal-200 italic">healing.</span>
          </h1>
          
          <p className="text-base text-white/90 mb-8 max-w-md font-medium drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)]">
            An integrated healthcare ecosystem blending world-class treatment and research in one unified space.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/facilities"
              className="group inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-teal-700 transition-all shadow-md"
            >
              Explore Facilities 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button
              type="button"
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white border border-white/40 px-6 py-3 rounded-full font-bold text-sm hover:bg-white/30 transition-all shadow-sm"
            >
              <Globe className="w-4 h-4 text-teal-200" />
              Virtual Tour
            </button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 sm:gap-12 pt-8">
            <motion.div whileHover={{ y: -3 }} className="transition-transform">
              <p className="text-3xl font-bold text-white font-serif drop-shadow-md">24</p>
              <p className="text-[10px] font-bold text-white/90 uppercase tracking-widest mt-1">Sectors</p>
            </motion.div>
            <motion.div whileHover={{ y: -3 }} className="transition-transform">
              <p className="text-3xl font-bold text-white font-serif drop-shadow-md">185<span className="text-xl">K</span></p>
              <p className="text-[10px] font-bold text-white/90 uppercase tracking-widest mt-1">m² Area</p>
            </motion.div>
            <motion.div whileHover={{ y: -3 }} className="transition-transform">
              <p className="text-3xl font-bold text-white font-serif drop-shadow-md">500<span className="text-teal-200">+</span></p>
              <p className="text-[10px] font-bold text-white/90 uppercase tracking-widest mt-1">Beds</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;