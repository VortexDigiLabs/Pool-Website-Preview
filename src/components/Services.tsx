import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, FlaskConical, Settings, Wrench, CalendarClock, Leaf } from 'lucide-react';

const services = [
  {
    icon: Droplets,
    title: 'Weekly Pool Cleaning',
    description:
      'Consistent weekly visits to keep your pool crystal clear. We skim, vacuum, brush walls, and test water chemistry so you never have to worry about maintenance.',
  },
  {
    icon: FlaskConical,
    title: 'Chemical Balancing',
    description:
      'Professional water treatment to maintain perfect pH, chlorine, and alkalinity levels. Prevent algae growth, skin irritation, and equipment damage with expert chemical management.',
  },
  {
    icon: Settings,
    title: 'Filter & Pump Maintenance',
    description:
      'Regular filter cleaning, pump inspections, and system checks to keep your equipment running efficiently and extend its lifespan. We catch problems before they become expensive repairs.',
  },
  {
    icon: Wrench,
    title: 'Equipment Repair',
    description:
      'From broken pumps to leaky pipes, our technicians diagnose and fix pool equipment issues fast. Most repairs completed on the first visit. No surprises, no hidden costs.',
  },
  {
    icon: CalendarClock,
    title: 'Pool Opening & Closing',
    description:
      'Professional seasonal transitions. We prepare your pool for summer with a full clean and chemical balance, and winterise it properly to prevent damage during the cold months.',
  },
  {
    icon: Leaf,
    title: 'Green-to-Clean Recovery',
    description:
      'Turned green overnight? No problem. Our emergency restoration service brings neglected pools back to swimmable condition, usually within 48 to 72 hours depending on severity.',
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <p className="text-luxury-premier font-bold tracking-[0.2em] uppercase text-sm mb-2">What We Offer</p>
        <h2 className="font-serif text-4xl md:text-5xl text-luxury-navy mb-16">OUR POOL SERVICES</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-3xl p-10 text-left transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,229,255,0.15)] border border-gray-100 hover:border-luxury-aquamarine/30"
              >
                {/* Interactive Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-luxury-premier/5 to-luxury-aquamarine/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                
                {/* Floating Icon Container */}
                <div className="relative w-16 h-16 rounded-2xl bg-luxury-foam flex items-center justify-center mb-8 group-hover:bg-luxury-premier group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm group-hover:shadow-luxury-premier/30">
                  <Icon size={28} className="text-luxury-premier group-hover:text-white transition-all duration-500" />
                  
                  {/* Subtle Glow Behind Icon */}
                  <div className="absolute inset-0 rounded-2xl bg-luxury-premier/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </div>

                <div className="relative z-10">
                  <h3 className="font-serif text-xl tracking-tight text-luxury-navy mb-4 group-hover:text-luxury-premier transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  {/* Decorative Bottom Bar */}
                  <div className="mt-8 w-8 h-1 bg-luxury-foam group-hover:w-full group-hover:bg-luxury-aquamarine/30 transition-all duration-500 rounded-full" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
