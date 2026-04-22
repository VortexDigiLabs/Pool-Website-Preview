import React from 'react';
import { motion } from 'framer-motion';

export const WinterCTA = () => {
  return (
    <section className="py-24 bg-luxury-navy text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-luxury-premier rounded-full mix-blend-screen filter blur-[100px] opacity-20" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-luxury-aquamarine rounded-full mix-blend-screen filter blur-[100px] opacity-10" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-serif text-4xl md:text-6xl mb-6 tracking-tight">
            Prepare Your Pool for Winter
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Winter in South Africa means fewer swimmers and more risk of algae, equipment damage, and green water. Our winter pool care package includes a full chemical treatment, equipment inspection, cover fitting, and monthly check-ups to ensure your pool stays protected until summer.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="w-full sm:w-auto bg-luxury-aquamarine hover:bg-white text-luxury-navy px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-colors shadow-xl min-h-[44px]">
              GET A WINTER QUOTE
            </button>
            <button className="w-full sm:w-auto border-2 border-white/30 hover:border-white hover:bg-white/10 text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-colors min-h-[44px]">
              LEARN MORE
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
