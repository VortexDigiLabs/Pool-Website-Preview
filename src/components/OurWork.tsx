import React from 'react';
import { motion } from 'framer-motion';

const works = [
  {
    before: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&q=80&w=800",
    after: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=800",
    beforeCaption: "Neglected for 3 months",
    afterCaption: "Crystal clear after 2 visits",
  },
  {
    before: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800",
    after: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
    beforeCaption: "Green algae takeover",
    afterCaption: "Swimmable in 72 hours",
  },
  {
    before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
    after: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800",
    beforeCaption: "Before winter preparation",
    afterCaption: "Protected and ready for summer",
  }
];

export const OurWork = () => {
  return (
    <section className="py-20 bg-luxury-navy relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-luxury-premier/10 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[0%] w-[40%] h-[60%] rounded-full bg-luxury-aquamarine/5 blur-[150px]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-luxury-aquamarine font-bold tracking-[0.2em] uppercase text-xs mb-3">Real results from real pools we maintain</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">OUR WORK</h2>
          <div className="w-24 h-1 bg-luxury-aquamarine mx-auto rounded-full opacity-50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {works.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4 group relative"
            >
              {/* Card Background Glow */}
              <div className="absolute inset-0 bg-luxury-premier/20 rounded-2xl blur-xl group-hover:bg-luxury-aquamarine/20 transition-colors duration-500 -z-10" />
              
              {/* Before */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group-hover:border-white/20 transition-colors duration-500">
                <img
                  src={index === 2 ? "/dirty-pool-before.png" : work.before}
                  alt="Before"
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* After */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-luxury-aquamarine/40 group-hover:border-luxury-aquamarine transition-colors duration-500">
                <img
                  src={work.after}
                  alt="After"
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
