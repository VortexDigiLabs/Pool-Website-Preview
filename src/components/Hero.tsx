import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative h-[90vh] md:h-screen w-full overflow-hidden flex items-center justify-center hero-mask">
      {/* Background Video */}
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden transform-gpu"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ opacity: { duration: 1.2 } }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover high-def-video"
        >
          <source src="https://bxmgsjtsxygxfgvpnnjh.supabase.co/storage/v1/object/public/PoolWebsite%20Template/gentle-looping-animation-with-subtle-water-ripplin.mp4" type="video/mp4" />
        </video>
        {/* Overlay — slightly darker for mobile text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-navy/70 via-luxury-navy/40 to-transparent pointer-events-none" />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-16 relative z-10 text-white h-full flex flex-col justify-center items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.p
            initial={{ letterSpacing: "0.2em", opacity: 0 }}
            animate={{ letterSpacing: "0.4em", opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-luxury-aquamarine font-bold text-[10px] uppercase mb-6"
          >
            TRUSTED SINCE 2005
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl italic text-white leading-[1.1] mb-4 tracking-tighter overflow-wrap-anywhere"
          >
            Keep Your Pool{' '}
            <span className="relative inline-block">
              <span className="text-luxury-aquamarine italic">Crystal Clear</span>
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-px bg-luxury-aquamarine/50"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 1 }}
              />
            </span>{' '}
            — All Year Round
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white/80 text-sm md:text-base leading-relaxed mb-8 max-w-xl"
          >
            Reliable weekly cleaning, expert repairs, and winter maintenance packages for homeowners across South Africa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col xs:flex-row items-stretch xs:items-center justify-start gap-4"
            style={{ flexWrap: 'wrap' }}
          >
            <button className="group relative bg-luxury-premier text-white px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-2xl hover:scale-105 active:scale-95 overflow-hidden min-h-[44px]">
              <span className="relative z-10">OUR SERVICES</span>
              <div className="absolute inset-0 bg-luxury-navy translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <button className="border border-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all min-h-[44px]">
              SEE WHAT WE DO
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Quick Quote Card */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="hidden lg:block absolute bottom-24 right-16 z-20 w-80 glass p-8 rounded-2xl shadow-2xl"
      >
        <h3 className="font-serif text-xl text-luxury-navy mb-4 font-bold tracking-tight">Get a Free Quote</h3>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 bg-gray-100 rounded-lg text-xs focus:ring-1 focus:ring-luxury-premier outline-none transition-all placeholder:text-gray-400 min-h-[44px]"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-3 bg-gray-100 rounded-lg text-xs focus:ring-1 focus:ring-luxury-premier outline-none transition-all placeholder:text-gray-400 min-h-[44px]"
          />
          <button className="w-full bg-luxury-navy text-white py-3 rounded-lg font-bold text-[10px] uppercase tracking-widest hover:bg-luxury-premier transition-colors shadow-lg active:scale-95 min-h-[44px]">
            GET A FREE QUOTE
          </button>
        </form>
      </motion.div>
    </section>
  );
};
