"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Laptop, Zap, Settings, Handshake } from 'lucide-react';

const reasons = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Scalable Architecture",
    description: "Products designed to grow with your business, handling increased loads seamlessly."
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "AI-First Thinking",
    description: "We identify opportunities where AI and automation can improve efficiency."
  },
  {
    icon: <Laptop className="w-6 h-6" />,
    title: "Modern Technologies",
    description: "We work with modern frameworks, APIs, cloud platforms, and development tools."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Performance Focused",
    description: "Fast, responsive, optimized digital products that users love."
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Custom Solutions",
    description: "Every project is designed according to the client's unique business requirements."
  },
  {
    icon: <Handshake className="w-6 h-6" />,
    title: "Long-Term Partnership",
    description: "We aim to become a technology partner rather than simply delivering a project."
  }
];

export default function WhyChoose() {
  return (
    <section id="why-us" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Businesses Choose Devqbit</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-6 text-accent-cyan group-hover:scale-110 group-hover:bg-accent-cyan group-hover:text-black transition-all duration-300">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-gray-400 text-sm">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
