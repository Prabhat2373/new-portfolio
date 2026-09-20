import React from 'react';
import { portfolioData } from '@/data/portfolio';

export const TechStack = () => {
  return (
    <section id="skills" className="section-deferred py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-slate-200/80 dark:border-white/10">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-xs font-medium mb-4">
          Capabilities &amp; Craft
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white">
          Tools honed for perfection.
        </h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mt-4 leading-relaxed font-normal">
          Every tool is mastered with depth, applied with discipline, and engineered for resilience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolioData.skills.map((group, idx) => (
          <div
            key={idx}
            className="p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-white/10 backdrop-blur-xl shadow-xs hover:shadow-xl transition-all"
          >
            <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-600 dark:text-slate-400 mb-6">
              {group.category}
            </h3>

            <div className="space-y-3">
              {group.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/15 transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    {skill.highlight && (
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-950 dark:bg-cyan-400" />
                    )}
                    <span className="text-sm font-semibold text-slate-950 dark:text-white tracking-tight">
                      {skill.name}
                    </span>
                  </div>

                  <span className="text-xs font-medium text-slate-700 dark:text-slate-400 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
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
