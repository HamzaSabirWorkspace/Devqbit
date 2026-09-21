"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const projectTypes = [
    "Software Development",
    "Web Application",
    "AI Automation",
    "AI Solution",
    "SaaS Development",
    "Game Development",
    "Other"
  ];

  return (
    <section id="contact" className="py-24 relative bg-black/50 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Something Great</h2>
            <p className="text-gray-400 text-lg mb-10 max-w-md leading-relaxed">
              Tell us about your project, goals, and technical requirements. Our team will get back to you with a proposal and strategy.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2">Email</h4>
                <a href="mailto:devqbit.tech@gmail.com" className="text-xl font-medium text-accent-cyan hover:text-white transition-colors">
                  devqbit.tech@gmail.com
                </a>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2">Location</h4>
                <p className="text-lg text-white">
                  Pakistan / Working With Clients Worldwide
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 glass-panel"
          >
            <form action="https://formsubmit.co/devqbit.tech@gmail.com" method="POST" className="space-y-6">
              <input type="hidden" name="_subject" value="New submission from DevqBit Website" />
              <input type="hidden" name="_template" value="table" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Name</label>
                  <input type="text" name="name" required className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-cyan transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Email</label>
                  <input type="email" name="email" required className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-cyan transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Company (Optional)</label>
                  <input type="text" name="company" className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-cyan transition-colors" placeholder="Your Company" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Project Type</label>
                  <select name="project_type" required defaultValue="" className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-cyan transition-colors appearance-none">
                    <option value="" disabled>Select an option</option>
                    {projectTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Estimated Budget</label>
                <input type="text" name="budget" className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-cyan transition-colors" placeholder="e.g. $10k - $25k" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Message</label>
                <textarea rows={4} name="message" required className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-cyan transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
              </div>

              <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-blue text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-shadow">
                Send Project Request
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
