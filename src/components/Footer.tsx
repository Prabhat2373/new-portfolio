import React from 'react';
import { portfolioData } from '@/data/portfolio';

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 text-center text-xs text-slate-500 font-mono">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          Designed & Built by <span className="text-slate-300 font-semibold">{portfolioData.name}</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={portfolioData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            GitHub
          </a>
          <span>•</span>
          <a
            href={portfolioData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            LinkedIn
          </a>
          <span>•</span>
          <a
            href={`mailto:${portfolioData.socials.email}`}
            className="hover:text-cyan-400 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};
