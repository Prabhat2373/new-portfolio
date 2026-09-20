'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { Check } from 'lucide-react';

export const TechStack = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/10">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
          Tooling & Competencies
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Technical Skills & Stack
        </h2>
        <p className="text-sm text-slate-400 mt-3 leading-relaxed">
          Technologies used extensively in high-concurrency production deployments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioData.skills.map((group, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-md"
          >
            <h3 className="text-sm font-semibold tracking-wider uppercase text-cyan-400 font-mono mb-4">
              {group.category}
            </h3>

            <div className="space-y-3">
              {group.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/60 border border-white/5 hover:border-white/10 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    {skill.highlight && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400" />
                    )}
                    <span className="text-xs font-medium text-white">
                      {skill.name}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-white/5 border border-white/5">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
