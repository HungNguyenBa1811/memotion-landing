import React from 'react';
import { Header, Footer } from './components/layout';
import {
  Hero,
  TrustIndicators,
  CoreTechnology,
  Mission,
  Team,
  CallToAction,
  Testimonials
} from './components/sections';

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustIndicators />
        <CoreTechnology />
        <Mission />
        <Testimonials />
        <Team />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
