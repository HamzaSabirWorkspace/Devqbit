"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function AIHighlight() {
  const features = [
    "AI Customer Support Agents",
    "AI Sales Assistants",
    "Automated Lead Management",
    "Document Processing",
    "Intelligent Chatbots",
    "Workflow Automation",
    "API Automation",
    "AI-Powered Dashboards",
    "Internal Business Assistants"
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Automate More. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-cyan">
                Operate Smarter.
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-lg">
              Devqbit builds intelligent AI automation systems that connect your tools, process information, communicate with customers, generate content, manage workflows, and reduce repetitive manual work.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {features.map((feature, i) => (
                <div key={i} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300">
                  {feature}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] rounded-2xl border border-white/10 bg-black/50 glass-panel p-8 flex flex-col justify-center"
          >
            {/* Visual Workflow Diagram representation */}
            <div className="space-y-6">
              <div className="flex justify-between items-center text-sm font-semibold text-gray-400">
                <div className="px-4 py-2 border border-white/10 rounded bg-white/5">Input</div>
                <div className="h-px bg-gradient-to-r from-transparent via-accent-cyan to-transparent flex-1 mx-2" />
                <div className="px-4 py-2 border border-accent-cyan/50 rounded bg-accent-cyan/10 text-accent-cyan">AI Agent</div>
              </div>
              <div className="flex justify-between items-center text-sm font-semibold text-gray-400">
                <div className="px-4 py-2 border border-accent-cyan/50 rounded bg-accent-cyan/10 text-transparent opacity-0">Hidden</div>
                <div className="w-px h-12 bg-gradient-to-b from-accent-cyan via-accent-purple to-accent-purple mx-auto" />
                <div className="px-4 py-2 border border-accent-purple/50 rounded bg-accent-purple/10 text-transparent opacity-0">Hidden</div>
              </div>
              <div className="flex justify-between items-center text-sm font-semibold text-gray-400">
                <div className="px-4 py-2 border border-white/10 rounded bg-white/5">Applications</div>
                <div className="h-px bg-gradient-to-r from-transparent via-accent-purple to-transparent flex-1 mx-2" />
                <div className="px-4 py-2 border border-accent-purple/50 rounded bg-accent-purple/10 text-accent-purple">Business Logic</div>
              </div>
              <div className="flex justify-between items-center text-sm font-semibold text-gray-400 mt-6 pt-6 border-t border-white/10">
                <div className="text-center w-full text-white font-bold text-lg">
                  Automated Result
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
