"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function GameDev() {
  const types = ["2D Games", "3D Games", "Mobile Games", "PC Games", "Multiplayer Experiences", "Game Prototypes", "Gameplay Systems", "Backend Game Systems"];

  return (
    <section className="py-24 relative overflow-hidden bg-black/40 border-t border-white/5">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative h-[400px] rounded-2xl border border-white/10 bg-gradient-to-tr from-accent-blue/10 to-black glass-panel flex items-center justify-center overflow-hidden group"
          >
            {/* Geometric abstract visual */}
            <div className="w-48 h-48 border-[1px] border-accent-blue/30 rotate-45 flex items-center justify-center group-hover:rotate-90 transition-all duration-1000 ease-in-out">
              <div className="w-32 h-32 border-[1px] border-accent-cyan/30 -rotate-12 flex items-center justify-center">
                <div className="w-16 h-16 bg-accent-cyan/20 blur-xl rounded-full" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Building Interactive <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-cyan">
                Worlds
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-lg">
              From concept to launch, Devqbit develops engaging gaming experiences using modern game engines and development technologies.
            </p>
            
            <ul className="grid grid-cols-2 gap-4">
              {types.map((type, i) => (
                <li key={i} className="flex items-center text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-blue mr-3" />
                  {type}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
