import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { cn } from '../utils/cn';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#' },
    { name: 'SERVICES', href: '#services' },
    { name: 'PRICING', href: '#pricing' },
    { name: 'ABOUT', href: '#company' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 px-6 md:px-10',
        isScrolled
          ? 'bg-white h-20 shadow-lg'
          : 'bg-transparent h-20'
      )}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-luxury-premier rounded-full flex items-center justify-center text-white font-bold text-lg">
            C
          </div>
          <div>
            <h1 className={cn(
              "font-serif text-xl font-bold tracking-tight transition-colors",
              isScrolled ? "text-luxury-navy" : "text-white"
            )}>
              CRYSTAL CLEAR
            </h1>
            <p className={cn(
              "text-[8px] tracking-[0.3em] font-bold uppercase -mt-1",
              isScrolled ? "text-luxury-premier" : "text-luxury-aquamarine"
            )}>
              POOL SERVICE
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-10 text-xs font-semibold tracking-widest">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "hover:text-luxury-aquamarine transition-colors uppercase",
                isScrolled ? "text-luxury-navy/80" : "text-white/90"
              )}
            >
              {link.name}
            </a>
          ))}
          <div className={cn("h-8 w-px transition-colors", isScrolled ? "bg-luxury-navy/10" : "bg-white/20")}></div>
          <div className={cn(
            "flex items-center space-x-2 font-bold",
            isScrolled ? "text-luxury-navy" : "text-white"
          )}>
            <Phone size={14} className="text-luxury-aquamarine" />
            <a
              href="tel:+27821234567"
              className="hover:text-luxury-aquamarine transition-colors text-[11px] tracking-wider"
            >
              082 123 4567
            </a>
          </div>
        </nav>

        {/* Mobile: Phone + Hamburger */}
        <div className="flex lg:hidden items-center space-x-3">
          <a
            href="tel:+27821234567"
            className="flex items-center space-x-2 font-bold text-xs bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg transition-colors min-h-[44px]"
          >
            <Phone size={14} />
            <span>CALL NOW</span>
          </a>
          <button
            className="p-2 rounded-md min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X size={28} className={isScrolled ? "text-luxury-navy" : "text-white"} />
            ) : (
              <Menu size={28} className={isScrolled ? "text-luxury-navy" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 bg-luxury-navy z-[999] lg:hidden transition-transform duration-500 flex flex-col items-center justify-center space-y-8",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-serif text-white hover:text-luxury-aquamarine min-h-[44px] flex items-center"
          >
            {link.name}
          </a>
        ))}
        <div className="pt-8 flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2 text-white text-xl font-bold">
            <Phone size={24} className="text-luxury-aquamarine" />
            <a href="tel:+27821234567" className="hover:text-luxury-aquamarine transition-colors">
              Call Now: 082 123 4567
            </a>
          </div>
          <button className="bg-luxury-aquamarine text-luxury-navy px-8 py-3 rounded-full font-bold text-lg min-h-[44px]">
            GET A FREE QUOTE
          </button>
        </div>
      </div>
    </header>
  );
};
