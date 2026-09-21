import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-primary py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <div className="text-2xl font-bold tracking-tighter mb-4">
            Dev<span className="text-accent-cyan">qbit</span>
          </div>
          <p className="text-gray-400 max-w-sm">
            Building Software. Automating Businesses. Creating Digital Worlds.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">Company</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-white mb-4">Social Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="https://www.linkedin.com/company/devqbit/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
            <li><a href="https://x.com/devqbit" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">X / Twitter</a></li>
            <li><a href="https://www.instagram.com/devqbit/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/10 text-sm text-gray-500 text-center">
        © 2026 Devqbit. All rights reserved.
      </div>
    </footer>
  );
}
