'use client';

import React from 'react';
import { Project } from '@/types';
import { ArrowUpRight, BookOpen, Star, ChevronRight } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy }) => {
  return (
    <div className="group relative flex flex-col justify-between rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/30 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-xl hover:shadow-slate-900/5 dark:hover:shadow-cyan-500/5">
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="px-3 py-1 text-[11px] font-medium rounded-full bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-slate-300 border border-slate-200 dark:border-white/10">
            {project.category}
          </span>
          <div className="flex items-center gap-2">
            {project.stars && (
              <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-mono">
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                {project.stars}
              </span>
            )}
            <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
              {project.readTime}
            </span>
          </div>
        </div>

        <h3 className="text-xl font-bold tracking-tight text-slate-950 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed font-normal">
          {project.tagline}
        </p>

        {/* Apple-style Quantified Metrics Strip */}
        <div className="grid grid-cols-3 gap-2 my-5 p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-white/5">
          {project.metrics.map((metric, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-[10px] uppercase tracking-wider text-slate-600 dark:text-slate-400 font-semibold truncate">{metric.label}</span>
              <span className="text-sm font-bold text-slate-950 dark:text-white mt-0.5 tracking-tight">{metric.value}</span>
            </div>
          ))}
        </div>

        <p className="text-xs text-slate-700 dark:text-slate-300 line-clamp-3 leading-relaxed mb-4 font-normal">
          {project.summary}
        </p>
      </div>

      {/* Footer / Action row */}
      <div>
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 text-[11px] rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-400 border border-slate-200 dark:border-white/5 font-medium"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-0.5 text-[11px] rounded-full text-slate-400 dark:text-slate-500 font-medium">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-200/70 dark:border-white/10">
          <button
            onClick={() => onOpenCaseStudy(project)}
            className="inline-flex items-center gap-1 text-xs font-semibold text-slate-950 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors group/btn"
          >
            <span>Read Architecture</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
                className="text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live Demo"
                className="text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
