import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export const Specials = () => {
  return (
    <section id="pricing" className="py-24 bg-luxury-foam overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Winter Care Banner */}
        <div className="max-w-6xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-luxury-navy text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-luxury-premier opacity-20 -mr-20 -mt-20 rounded-full blur-3xl" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-serif text-3xl md:text-4xl mb-4">Winter Is Coming — Is Your Pool Ready?</h3>
                <p className="text-gray-300 text-lg">
                  Don't let your pool turn green over winter. Our seasonal maintenance plans protect your investment and ensure a crystal-clear pool when summer returns. Book your winter care package today.
                </p>
              </div>
              <div className="flex-shrink-0 w-full md:w-auto">
                <button className="w-full md:w-auto bg-luxury-aquamarine text-luxury-navy px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white transition-colors shadow-lg min-h-[44px]">
                  GET WINTER PROTECTION
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pricing Section Header */}
        <div className="text-center mb-16">
          <p className="text-luxury-premier font-bold tracking-[0.2em] uppercase text-sm mb-2">TRANSPARENT PRICING</p>
          <h2 className="font-serif text-4xl md:text-5xl text-luxury-navy">SERVICE PLANS</h2>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tier 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 flex flex-col"
          >
            <h3 className="font-bold text-xl text-luxury-navy mb-2 uppercase tracking-wide">Basic Weekly</h3>
            <div className="mb-6 border-b border-gray-100 pb-6">
              <span className="text-4xl font-serif text-luxury-navy font-bold">R800</span>
              <span className="text-gray-500"> / month</span>
              <p className="text-sm text-gray-400 mt-2 italic">Billed weekly</p>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              {['1 scheduled visit per week', 'Surface skimming and vacuuming', 'Water chemistry testing', 'Basic chemical adjustment', 'Basket and filter cleaning'].map((feature, i) => (
                <li key={i} className="flex items-start space-x-3 text-gray-600">
                  <Check size={18} className="text-luxury-aquamarine flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full border-2 border-luxury-navy text-luxury-navy py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-luxury-navy hover:text-white transition-colors min-h-[44px]">
              GET STARTED
            </button>
          </motion.div>

          {/* Tier 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-luxury-navy text-white rounded-2xl p-8 shadow-2xl relative transform md:-translate-y-4 flex flex-col"
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-luxury-aquamarine text-luxury-navy px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase shadow-md whitespace-nowrap">
              MOST POPULAR
            </div>
            <h3 className="font-bold text-xl mb-2 uppercase tracking-wide mt-4">Premium Monthly</h3>
            <div className="mb-6 border-b border-white/20 pb-6">
              <span className="text-4xl font-serif font-bold">R2 500</span>
              <span className="text-white/70"> / month</span>
              <p className="text-sm text-white/50 mt-2 italic">Best value - Billed monthly</p>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              {['1 visit per week (4 per month)', 'Full chemical balancing and treatment', 'Filter and pump inspection', 'Equipment health check', 'Priority scheduling for repairs', '10% discount on all repair work'].map((feature, i) => (
                <li key={i} className="flex items-start space-x-3 text-white/90">
                  <Check size={18} className="text-luxury-aquamarine flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-luxury-aquamarine text-luxury-navy py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors shadow-lg min-h-[44px]">
              GET STARTED
            </button>
          </motion.div>

          {/* Tier 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 flex flex-col"
          >
            <h3 className="font-bold text-xl text-luxury-navy mb-2 uppercase tracking-wide">Seasonal Pool Care</h3>
            <div className="mb-6 border-b border-gray-100 pb-6">
              <span className="text-4xl font-serif text-luxury-navy font-bold">R1 200</span>
              <span className="text-gray-500"> once-off</span>
              <p className="text-sm text-gray-400 mt-2 italic">Winter preparation or summer opening</p>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              {['Full pool clean and inspection', 'Chemical shock treatment', 'Equipment winterisation (or summer activation)', 'Cover fitting and removal', 'Detailed condition report'].map((feature, i) => (
                <li key={i} className="flex items-start space-x-3 text-gray-600">
                  <Check size={18} className="text-luxury-aquamarine flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full border-2 border-luxury-navy text-luxury-navy py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-luxury-navy hover:text-white transition-colors min-h-[44px]">
              BOOK NOW
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
