"use client";
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "AI Customer Support Platform",
    category: "AI • Automation • SaaS",
    description: "AI-powered support system that automates customer conversations and internal workflows.",
    tags: ["Next.js", "OpenAI", "Node.js"],
    imageClass: "bg-gradient-to-br from-accent-purple/20 to-black"
  },
  {
    title: "Business Management Dashboard",
    category: "Web App • Dashboard",
    description: "Modern web application for managing operations, analytics, users, and business workflows.",
    tags: ["React", "Tailwind", "PostgreSQL"],
    imageClass: "bg-gradient-to-tr from-accent-blue/20 to-black"
  },
  {
    title: "Multiplayer Game Concept",
    category: "Game Development",
    description: "Interactive multiplayer gaming experience with scalable architecture and immersive design.",
    tags: ["Unity", "C#", "Multiplayer"],
    imageClass: "bg-gradient-to-br from-accent-cyan/20 to-black"
  },
  {
    title: "AI Workflow Automation",
    category: "AI Agents • API",
    description: "Automation solution connecting AI models with business applications and APIs.",
    tags: ["Python", "LangChain", "FastAPI"],
    imageClass: "bg-gradient-to-tl from-accent-violet/20 to-black"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-black/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected Work</h2>
            <p className="text-gray-400 max-w-xl">
              A showcase of our recent projects across software, AI, and gaming.
            </p>
          </div>
          <a href="https://github.com/HamzaSabirWorkspace/Devqbit" target="_blank" rel="noreferrer" className="px-6 py-2 rounded-full border border-white/20 text-white text-sm font-semibold hover:bg-white hover:text-black transition-colors self-start md:self-auto text-center">
            View All Projects
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className={`w-full h-[300px] md:h-[400px] rounded-2xl mb-6 overflow-hidden relative border border-white/10 ${project.imageClass}`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                {/* Placeholder for actual image */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700">
                  <div className="px-6 py-3 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white font-medium">
                    View Project
                  </div>
                </div>
              </div>
              <div>
                <div className="text-xs font-semibold text-accent-cyan mb-2 tracking-wider uppercase">
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed max-w-md">
                  {project.description}
                </p>
                <div className="flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs text-gray-500 border border-white/10 px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
