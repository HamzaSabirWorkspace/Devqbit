"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/20 rounded-full blur-[120px] -z-10 animate-blob" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-accent-purple/20 rounded-full blur-[100px] -z-10 animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-accent-cyan/20 rounded-full blur-[100px] -z-10 animate-blob animation-delay-4000" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-4 py-1.5 rounded-full border border-white/10 glass-panel text-sm text-gray-300 mb-8"
        >
          Software • AI • Automation • Games
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
        >
          Building Intelligent <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-blue">
            Digital Experiences
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10"
        >
          Devqbit develops powerful software, AI automation systems, modern web applications, and immersive games that help businesses turn ambitious ideas into scalable digital products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contact" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform text-center inline-block cursor-pointer">
            Start Your Project
          </a>
          <a href="#services" className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors text-center inline-block cursor-pointer">
            Explore Our Services
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white/20 flex justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
        </div>
      </motion.div>
    </section>
  );
}
