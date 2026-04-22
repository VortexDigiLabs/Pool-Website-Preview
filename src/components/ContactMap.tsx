import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const locations = [
  {
    city: 'YOUR INFO HERE',
    address: 'YOUR INFO HERE',
    phone: 'YOUR INFO HERE',
    email: 'YOUR INFO HERE',
    hours: 'YOUR INFO HERE'
  },
  {
    city: 'YOUR INFO HERE',
    address: 'YOUR INFO HERE',
    phone: 'YOUR INFO HERE',
    email: 'YOUR INFO HERE',
    hours: 'YOUR INFO HERE'
  }
];

export const ContactMap = () => {
  return (
    <section id="company" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-stretch max-w-7xl mx-auto">
          {/* Map Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-[1.5] relative rounded-3xl overflow-hidden min-h-[400px] shadow-2xl group border-[12px] border-luxury-foam"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 high-def-video"
            >
              <source src="https://bxmgsjtsxygxfgvpnnjh.supabase.co/storage/v1/object/public/PoolWebsite%20Template/Video%20Project%2016.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-transparent" />
          </motion.div>

          {/* Info Side */}
          <div className="flex-1 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h2 className="font-serif text-4xl text-luxury-navy mb-4 border-b border-luxury-foam pb-4 uppercase tracking-tighter">Your Presence</h2>
              
              <div className="grid grid-cols-1 gap-8">
                {locations.map((loc, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-3 p-6 rounded-2xl bg-luxury-foam hover:shadow-lg transition-shadow"
                  >
                    <h4 className="font-bold text-luxury-premier tracking-[0.2em] uppercase text-xs">{loc.city}</h4>
                    <div className="flex items-start space-x-3 text-sm">
                      <MapPin size={16} className="text-luxury-aquamarine mt-1 flex-shrink-0" />
                      <span className="text-gray-600 font-medium">{loc.address}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <Phone size={16} className="text-luxury-aquamarine flex-shrink-0" />
                      <span className="text-gray-700 font-bold">{loc.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <Clock size={16} className="text-luxury-aquamarine flex-shrink-0" />
                      <span className="text-gray-600 italic">{loc.hours}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-luxury-navy p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-premier opacity-20 -mr-10 -mt-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <h5 className="font-serif text-xl mb-1 tracking-tight">YOUR INFO HERE</h5>
                  <p className="text-luxury-aquamarine text-xs font-bold uppercase tracking-widest">YOUR INFO HERE</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-luxury-navy transition-all duration-300">
                  <Phone size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
