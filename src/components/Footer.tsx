import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-luxury-navy text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-3xl font-bold tracking-widest uppercase">AZURE</h2>
              <p className="text-[10px] tracking-[0.3em] text-luxury-aquamarine font-bold">POOLS & SPAS</p>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed italic">
              Crafting South Africa&apos;s most exquisite water experiences since 2005. Master builders of luxury lifestyles.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-luxury-premier hover:border-luxury-premier transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:ml-auto">
            <h4 className="font-bold tracking-widest text-xs uppercase mb-8 border-b border-luxury-aquamarine/30 pb-2 inline-block">Explore</h4>
            <nav className="flex flex-col space-y-4 text-sm font-medium">
              <a href="#" className="hover:text-luxury-aquamarine transition-colors">Home</a>
              <a href="#services" className="hover:text-luxury-aquamarine transition-colors">Services</a>
              <a href="#products" className="hover:text-luxury-aquamarine transition-colors">Products</a>
              <a href="#contact" className="hover:text-luxury-aquamarine transition-colors">Contact</a>
            </nav>
          </div>

          {/* Contact Support */}
          <div>
            <h4 className="font-bold tracking-widest text-xs uppercase mb-8 border-b border-luxury-aquamarine/30 pb-2 inline-block">Support</h4>
            <nav className="flex flex-col space-y-4 text-sm font-medium">
              <a href="#faq" className="hover:text-luxury-aquamarine transition-colors italic leading-relaxed">Frequently Asked Questions</a>
              <p className="text-gray-400 flex items-start space-x-3">
                <MapPin size={16} className="text-luxury-aquamarine flex-shrink-0" />
                <span>42 Sandton Drive, JHB</span>
              </p>
              <p className="text-gray-400 flex items-start space-x-3">
                <Mail size={16} className="text-luxury-aquamarine flex-shrink-0" />
                <span>YOUR DETAILS HERE</span>
              </p>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="font-bold tracking-widest text-xs uppercase mb-2">Join Our Newsletter</h4>
            <div className="relative group">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-luxury-premier transition-all"
              />
              <button className="absolute right-2 top-1.5 bottom-1.5 aspect-square rounded-full bg-luxury-premier flex items-center justify-center hover:bg-luxury-aquamarine hover:text-luxury-navy transition-all">
                <Instagram size={16} />
              </button>
            </div>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-loose">
              Receive curated design inspiration and exclusive seasonal offers.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[9px] text-white/40 space-y-4 md:space-y-0 uppercase tracking-[0.3em] font-bold">
          <p>© 2025 AZUREPOOLS.CO.ZA | CRAFTED BY YOUR DETAILS HERE</p>
          <div className="flex space-x-8">
            <span>WHATSAPP: YOUR DETAILS HERE</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
