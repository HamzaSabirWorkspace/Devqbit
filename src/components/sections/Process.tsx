"use client";
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { num: "01", title: "Discovery", desc: "Understand the business, goals, users, and product requirements." },
  { num: "02", title: "Strategy", desc: "Define architecture, features, technology stack, timeline, and development roadmap." },
  { num: "03", title: "UI/UX Design", desc: "Design modern interfaces and exceptional user experiences." },
  { num: "04", title: "Development", desc: "Build the product using scalable architecture and clean code." },
  { num: "05", title: "Testing", desc: "Test functionality, performance, responsiveness, and reliability." },
  { num: "06", title: "Launch", desc: "Deploy the final product to production." },
  { num: "07", title: "Support & Growth", desc: "Improve, maintain, and scale the product after launch." }
];

export default function Process() {
  return (
    <section id="process" className="py-24 relative bg-black/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">From Idea to Launch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">A structured and transparent development process.</p>
        </motion.div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          
          <div className="space-y-12 relative">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={step.num} className="relative flex items-center justify-center md:justify-between flex-col md:flex-row">
                  
                  {/* Left content */}
                  <div className={`md:w-5/12 ${isEven ? 'md:text-right' : 'md:order-3 md:text-left'} text-center mb-6 md:mb-0`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className="p-6 rounded-2xl bg-white/5 border border-white/10 glass-panel hover:border-accent-cyan/50 transition-colors"
                    >
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-400">{step.desc}</p>
                    </motion.div>
                  </div>

                  {/* Center Node */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="md:order-2 w-12 h-12 rounded-full bg-primary border-4 border-white/20 flex items-center justify-center z-10 my-4 md:my-0 shadow-[0_0_15px_rgba(0,229,255,0.2)] text-accent-cyan font-bold text-sm"
                  >
                    {step.num}
                  </motion.div>

                  {/* Empty spacer for alignment */}
                  <div className={`md:w-5/12 ${isEven ? 'md:order-3' : 'md:order-1'}`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
