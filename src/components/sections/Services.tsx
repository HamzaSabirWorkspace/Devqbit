"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, BrainCircuit, Network, Gamepad2, Cloud } from 'lucide-react';

const services = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Custom Software Development",
    description: "We build secure, scalable, and high-performance software tailored to unique business requirements.",
    color: "group-hover:border-accent-blue"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Web Application Development",
    description: "Modern, responsive, and scalable web applications designed for exceptional user experiences.",
    color: "group-hover:border-accent-cyan"
  },
  {
    icon: <BrainCircuit className="w-8 h-8" />,
    title: "AI Automation",
    description: "Automate repetitive workflows and business operations using intelligent AI-powered systems.",
    color: "group-hover:border-accent-violet"
  },
  {
    icon: <Network className="w-8 h-8" />,
    title: "AI Solutions",
    description: "Integrate artificial intelligence into products using intelligent agents, APIs, machine learning models, and LLMs.",
    color: "group-hover:border-accent-purple"
  },
  {
    icon: <Gamepad2 className="w-8 h-8" />,
    title: "Game Development",
    description: "Create engaging 2D, 3D, mobile, PC, and interactive gaming experiences with modern game technologies.",
    color: "group-hover:border-accent-blue"
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "SaaS Development",
    description: "Transform innovative ideas into scalable subscription-based digital products and platforms.",
    color: "group-hover:border-accent-cyan"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Build</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive technology solutions designed to solve complex business challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group p-8 rounded-2xl bg-white/5 border border-white/10 glass-panel hover:bg-white/10 transition-all duration-300 ${service.color} cursor-pointer relative overflow-hidden`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-white/5 to-transparent transition-opacity duration-300 pointer-events-none" />
              <div className="text-gray-300 mb-6 group-hover:text-white transition-colors group-hover:scale-110 transform duration-300 origin-left">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex items-center text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-blue opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                Learn More <span className="ml-2">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
