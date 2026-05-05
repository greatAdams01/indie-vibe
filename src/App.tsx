import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-espresso font-sans selection:bg-ochre/30 selection:text-espresso flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <FAQ />
      <Footer />
    </div>
  );
}
