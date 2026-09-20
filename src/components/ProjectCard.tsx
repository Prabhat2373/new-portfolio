'use client';

import React from 'react';
import { Project } from '@/types';
import { ArrowUpRight, Activity, BookOpen, Star } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy }) => {
  return (
    <div className="group relative flex flex-col justify-between rounded-2xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/40 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10">
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="px-2.5 py-1 text-[11px] font-mono rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            {project.category}
          </span>
          <div className="flex items-center gap-2">
            {project.stars && (
              <span className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                {project.stars}
              </span>
            )}
            <span className="text-[11px] font-mono text-slate-500">
              {project.readTime}
            </span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
          {project.tagline}
        </p>

        {/* Quantified Impact Metrics Pills */}
        <div className="grid grid-cols-3 gap-2 my-5 p-2.5 rounded-xl bg-slate-950/70 border border-white/5">
          {project.metrics.map((metric, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-[10px] text-slate-400 font-mono truncate">{metric.label}</span>
              <span className="text-sm font-bold font-mono text-cyan-300 mt-0.5">{metric.value}</span>
            </div>
          ))}
        </div>

        <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-4">
          {project.summary}
        </p>
      </div>

      {/* Footer / Action row */}
      <div>
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1 mb-5">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 text-slate-400 border border-white/5"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-500">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <button
            onClick={() => onOpenCaseStudy(project)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5" />
            Case Study
          </button>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
                className="text-slate-400 hover:text-white transition-colors"
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
                className="text-slate-400 hover:text-cyan-400 transition-colors"
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
