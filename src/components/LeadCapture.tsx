import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export const LeadCapture = () => {
  return (
    <section id="contact" className="relative py-24 min-h-[600px] flex items-center">
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=95&w=2560"
            alt="Pool Background"
            className="w-full h-full object-cover shadow-inner"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="absolute inset-0 bg-luxury-navy/80" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-stretch max-w-6xl mx-auto">
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 bg-white/10 backdrop-blur-md p-8 md:p-12 border border-white/20 rounded-lg shadow-2xl"
          >
            <h2 className="font-serif text-3xl text-white mb-8 border-b border-white/20 pb-4 tracking-wider uppercase">
              GET A FREE QUOTE
            </h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-white text-luxury-navy px-4 py-4 rounded-sm focus:ring-2 focus:ring-luxury-aquamarine outline-none transition-all placeholder:text-gray-400 min-h-[44px]"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-white text-luxury-navy px-4 py-4 rounded-sm focus:ring-2 focus:ring-luxury-aquamarine outline-none transition-all placeholder:text-gray-400 min-h-[44px]"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white text-luxury-navy px-4 py-4 rounded-sm focus:ring-2 focus:ring-luxury-aquamarine outline-none transition-all placeholder:text-gray-400 min-h-[44px]"
              />
              <select
                className="w-full bg-white text-luxury-navy px-4 py-4 rounded-sm focus:ring-2 focus:ring-luxury-aquamarine outline-none transition-all min-h-[44px] appearance-none"
                defaultValue=""
              >
                <option value="" disabled className="text-gray-400">Select Service Type</option>
                <option value="weekly">Weekly Cleaning</option>
                <option value="chemical">Chemical Balancing</option>
                <option value="repair">Equipment Repair</option>
                <option value="seasonal">Pool Opening/Closing</option>
                <option value="green">Green-to-Clean Recovery</option>
                <option value="other">Other</option>
              </select>
              <textarea
                placeholder="Tell us about your pool..."
                rows={4}
                className="w-full bg-white text-luxury-navy px-4 py-4 rounded-sm focus:ring-2 focus:ring-luxury-aquamarine outline-none transition-all placeholder:text-gray-400"
              />
              <button className="w-full bg-luxury-premier hover:bg-luxury-aquamarine hover:text-luxury-navy text-white py-4 rounded-sm font-bold flex items-center justify-center space-x-2 transition-all group shadow-xl sticky bottom-0 z-10 min-h-[44px]">
                <Check size={20} className="group-hover:scale-125 transition-transform" />
                <span>SEND REQUEST</span>
              </button>
            </form>
          </motion.div>

          {/* Info Side (About) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 bg-white p-8 md:p-12 shadow-2xl flex flex-col rounded-lg"
          >
            <h2 className="font-serif text-3xl text-luxury-navy mb-8 border-b border-gray-100 pb-4 tracking-wider uppercase">
              ABOUT US
            </h2>
            <div className="text-gray-600 space-y-4 flex-grow leading-relaxed">
              <p>
                Crystal Clear Pool Service provides reliable, professional pool maintenance to homeowners across Johannesburg and surrounding areas. Our team of trained technicians handles everything from weekly cleaning and chemical balancing to equipment repairs and seasonal pool care.
              </p>
              <p>
                We believe every homeowner deserves a clean, safe pool without the hassle of doing it themselves. That is why we show up on time, every time, and send you a detailed report after each visit.
              </p>
              
              <ul className="space-y-3 pt-6">
                {['Licensed & Insured', 'Same-Week Service', 'Satisfaction Guaranteed'].map((feature) => (
                  <li key={feature} className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-luxury-aquamarine flex items-center justify-center text-white flex-shrink-0">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className="font-medium text-luxury-navy">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button className="mt-8 bg-luxury-navy hover:bg-luxury-premier text-white py-4 px-8 self-start font-bold rounded-sm flex items-center space-x-2 transition-all shadow-md min-h-[44px]">
              <Check size={20} />
              <span>Learn More</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
