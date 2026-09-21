"use client";
import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "FastAPI", "Django", "Express"]
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis"]
  },
  {
    title: "AI & ML",
    skills: ["OpenAI APIs", "LLMs", "AI Agents", "LangChain", "Vector Databases", "Machine Learning"]
  },
  {
    title: "Cloud / DevOps",
    skills: ["Docker", "AWS", "Vercel", "Firebase", "GitHub Actions"]
  },
  {
    title: "Game Development",
    skills: ["Unity", "Unreal Engine", "C#", "C++", "Blender Integration"]
  }
];

export default function TechStack() {
  return (
    <section id="technologies" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technologies We Work With</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 glass-panel"
            >
              <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-white inline-block">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 text-xs font-medium bg-white/10 text-gray-300 rounded-full border border-white/5 hover:bg-white/20 hover:text-white transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
