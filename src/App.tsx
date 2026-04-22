import { useEffect } from 'react';
import Lenis from 'lenis';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Specials } from './components/Specials'; // Pricing
import { Testimonials } from './components/Testimonials';
import { OurWork } from './components/OurWork';
import { LeadCapture } from './components/LeadCapture';
import { WinterCTA } from './components/WinterCTA';
import { Footer } from './components/Footer';
import { ChatBot } from './components/ChatBot';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-luxury-white font-sans text-luxury-navy selection:bg-luxury-premier selection:text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Specials />
        <Testimonials />
        <OurWork />
        <LeadCapture />
        <WinterCTA />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}
