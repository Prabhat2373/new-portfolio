'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/10">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
          Track Record
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Work Experience & Impact
        </h2>
        <p className="text-sm text-slate-400 mt-3 leading-relaxed">
          High-velocity engineering teams solving hard problems in distributed infrastructure and web systems.
        </p>
      </div>

      <div className="relative border-l border-white/15 ml-4 sm:ml-32 space-y-12">
        {portfolioData.experience.map((exp, idx) => (
          <div key={idx} className="relative pl-6 sm:pl-8 group">
            {/* Timeline Dot Indicator */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors" />

            {/* Left badge for year on desktop */}
            <div className="hidden sm:block absolute -left-32 top-1 w-24 text-right">
              <span className="text-xs font-mono text-cyan-400 font-semibold">{exp.period}</span>
            </div>

            {/* Experience Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 group-hover:border-cyan-500/40 backdrop-blur-md transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-sm text-cyan-400 font-medium">
                    {exp.company}
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                  <span className="sm:hidden flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Accomplishments */}
              <ul className="space-y-2 mt-4 text-xs text-slate-300 leading-relaxed">
                {exp.description.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Stack Used */}
              <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-white/5">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 text-slate-300 border border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
