import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="section-deferred py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-slate-200/80 dark:border-white/10">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-xs font-medium mb-4">
          Track Record
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white">
          Experience crafted over time.
        </h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mt-4 leading-relaxed font-normal">
          Building production cloud software, mentoring engineering teams, and solving challenging architectural problems.
        </p>
      </div>

      <div className="relative border-l border-slate-200 dark:border-white/15 ml-4 sm:ml-36 space-y-12">
        {portfolioData.experience.map((exp, idx) => (
          <div key={idx} className="relative pl-6 sm:pl-10 group">
            {/* Minimal Timeline indicator */}
            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-2 border-slate-900 dark:border-white transition-transform group-hover:scale-110" />

            {/* Date pill on left */}
            <div className="hidden sm:block absolute -left-36 top-1.5 w-28 text-right">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{exp.period}</span>
            </div>

            {/* Experience Card */}
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/30 backdrop-blur-xl transition-all shadow-xs hover:shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-slate-950 dark:text-white">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 mt-0.5">
                    {exp.company}
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                  <span className="sm:hidden flex items-center gap-1 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1 font-medium">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Accomplishments */}
              <ul className="space-y-2.5 mt-5 text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                {exp.description.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-slate-950 dark:text-white flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Stack Used */}
              <div className="flex flex-wrap gap-1.5 mt-6 pt-5 border-t border-slate-200/80 dark:border-white/10">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-0.5 text-xs rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-400 border border-slate-200 dark:border-white/5 font-medium"
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
