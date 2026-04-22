/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import Lenis from 'lenis';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { LeadCapture } from './components/LeadCapture';
import { Specials } from './components/Specials';
import { ContactMap } from './components/ContactMap';
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
        <LeadCapture />
        <Specials />
        <ContactMap />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}

