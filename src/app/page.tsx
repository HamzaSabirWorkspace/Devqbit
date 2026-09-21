import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import WhyChoose from '@/components/sections/WhyChoose';
import Process from '@/components/sections/Process';
import TechStack from '@/components/sections/TechStack';
import Projects from '@/components/sections/Projects';
import AIHighlight from '@/components/sections/AIHighlight';
import GameDev from '@/components/sections/GameDev';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col w-full">
        <Hero />
        <Services />
        <About />
        <WhyChoose />
        <Process />
        <TechStack />
        <Projects />
        <AIHighlight />
        <GameDev />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
