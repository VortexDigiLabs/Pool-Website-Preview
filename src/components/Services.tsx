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
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-luxury-foam rounded-2xl p-8 text-left hover:shadow-xl transition-all duration-300 border border-transparent hover:border-luxury-aquamarine/20"
              >
                <div className="w-14 h-14 rounded-xl bg-luxury-premier/10 flex items-center justify-center mb-6 group-hover:bg-luxury-premier group-hover:scale-110 transition-all duration-300">
                  <Icon size={26} className="text-luxury-premier group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-base tracking-wide text-luxury-navy mb-3 uppercase">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
