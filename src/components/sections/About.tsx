"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    { value: "10+", label: "Technologies" },
    { value: "3", label: "Core Divisions", sublabel: "Software • AI • Games" },
    { value: "100%", label: "Custom Development" },
    { value: "Global", label: "Client Focus" },
  ];

  return (
    <section id="about" className="py-24 relative bg-black/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Turning Ideas Into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-violet to-accent-cyan">
                Powerful Digital Products
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Devqbit is a modern technology company focused on developing intelligent digital products for startups and businesses.
            </p>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Our team combines software engineering, artificial intelligence, automation, and creative game development to transform complex ideas into reliable and scalable solutions.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              We focus on performance, usability, scalability, clean architecture, and long-term product growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 glass-panel text-center"
              >
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm font-semibold text-gray-300">{stat.label}</div>
                {stat.sublabel && (
                  <div className="text-xs text-gray-500 mt-1">{stat.sublabel}</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
