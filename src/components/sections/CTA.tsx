"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Dramatic glowing background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[800px] h-[300px] bg-gradient-to-r from-accent-blue/30 via-accent-purple/30 to-accent-cyan/30 rounded-full blur-[100px] animate-blob" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
            Have an Idea? <br />
            Let's Build It.
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Whether you're launching a startup, automating your business, developing an AI product, or creating a game, Devqbit can help turn your idea into reality.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-10 py-4 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              Start Your Project
            </button>
            <button className="w-full sm:w-auto px-10 py-4 rounded-full border border-white/20 text-white font-bold text-lg hover:bg-white/5 transition-colors">
              Contact Devqbit
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
