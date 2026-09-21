"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      text: "Devqbit transformed our concept into a polished digital product and helped us automate key parts of our workflow. Their technical expertise and understanding of our business goals were outstanding.",
      name: "Client Name",
      company: "Tech Startup",
      role: "Founder & CEO"
    }
    // More testimonials can be added here
  ];

  return (
    <section className="py-24 relative bg-black/60 border-y border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-4xl text-accent-cyan/50 font-serif mb-6">"</div>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 italic">
            {testimonials[0].text}
          </p>
          <div>
            <div className="font-bold text-white text-lg">{testimonials[0].name}</div>
            <div className="text-sm text-gray-500 mt-1">
              {testimonials[0].role}, <span className="text-accent-cyan">{testimonials[0].company}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
