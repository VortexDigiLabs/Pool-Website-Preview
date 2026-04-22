import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Crystal Clear has been maintaining our pool for over 2 years now. They have never missed a weekly visit. The water is always perfect and the kids can swim any time. I would not use anyone else.",
    name: "Sarah M.",
    location: "Sandton",
  },
  {
    quote: "Our pool turned green overnight and we had no idea what to do. I called Crystal Clear at 7am and they were at our house by 10am. Within 3 days the pool was perfect again. Absolute lifesavers.",
    name: "James K.",
    location: "Fourways",
  },
  {
    quote: "We switched from another pool company and the difference is night and day. Crystal Clear actually shows up when they say they will, and they always send a message after each visit with a summary of what they did. Professional operation.",
    name: "Priya N.",
    location: "Midrand",
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-luxury-premier font-bold tracking-[0.2em] uppercase text-sm mb-2">Trusted by homeowners across Gauteng</p>
          <h2 className="font-serif text-4xl md:text-5xl text-luxury-navy">WHAT OUR CLIENTS SAY</h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-luxury-foam rounded-2xl p-8 flex flex-col shadow-sm"
            >
              <div className="flex space-x-1 mb-6 text-luxury-aquamarine">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 italic leading-relaxed mb-8 flex-grow">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-luxury-navy">{testimonial.name}</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-luxury-navy rounded-2xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row justify-around items-center gap-8 text-center"
        >
          <div>
            <p className="text-4xl font-serif font-bold text-white mb-2">500+</p>
            <p className="text-luxury-aquamarine text-sm font-bold tracking-widest uppercase">Pools Maintained</p>
          </div>
          <div className="hidden md:block w-px h-16 bg-white/20"></div>
          <div>
            <p className="text-4xl font-serif font-bold text-white mb-2">4.9 Stars</p>
            <p className="text-luxury-aquamarine text-sm font-bold tracking-widest uppercase">Google Rating</p>
          </div>
          <div className="hidden md:block w-px h-16 bg-white/20"></div>
          <div>
            <p className="text-4xl font-serif font-bold text-white mb-2">12+</p>
            <p className="text-luxury-aquamarine text-sm font-bold tracking-widest uppercase">Years Experience</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
