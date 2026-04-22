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
    before: "https://images.unsplash.com/photo-1519642571242-b91b5c464c51?auto=format&fit=crop&q=80&w=800",
    after: "https://images.unsplash.com/photo-1563245450-4286121b65e9?auto=format&fit=crop&q=80&w=800",
    beforeCaption: "Before winter preparation",
    afterCaption: "Protected and ready for summer",
  }
];

export const OurWork = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-luxury-premier font-bold tracking-[0.2em] uppercase text-sm mb-2">Real results from real pools we maintain</p>
          <h2 className="font-serif text-4xl md:text-5xl text-luxury-navy">OUR WORK</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {works.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Before */}
              <div className="relative group rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <img
                  src={work.before}
                  alt="Before"
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-red-500/90 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                  BEFORE
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white text-sm font-medium">{work.beforeCaption}</p>
                </div>
              </div>

              {/* After */}
              <div className="relative group rounded-2xl overflow-hidden shadow-lg border-4 border-luxury-aquamarine/20">
                <img
                  src={work.after}
                  alt="After"
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-luxury-aquamarine text-luxury-navy px-3 py-1 rounded text-xs font-bold uppercase tracking-widest shadow-md">
                  AFTER
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white text-sm font-medium">{work.afterCaption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
