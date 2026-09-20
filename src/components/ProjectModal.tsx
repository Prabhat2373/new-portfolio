'use client';

import React from 'react';
import { Project } from '@/types';
import { X, ExternalLink, Layers, AlertCircle, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#0b101d] border border-slate-200 dark:border-white/15 p-6 sm:p-8 shadow-2xl text-slate-900 dark:text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white border border-slate-200 dark:border-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pr-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-cyan-500/10 border border-slate-200 dark:border-cyan-500/20 text-slate-800 dark:text-cyan-400 text-xs font-mono mb-3">
            {project.category}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white tracking-tight">
            {project.title}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 font-medium">
            {project.tagline}
          </p>
        </div>

        {/* Key Metrics Banner */}
        <div className="grid grid-cols-3 gap-3 my-6 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10">
          {project.metrics.map((metric, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">{metric.label}</span>
              <span className="text-xl font-bold font-mono text-slate-950 dark:text-cyan-400 mt-0.5">{metric.value}</span>
            </div>
          ))}
        </div>

        {/* Deep Dive Case Study Content */}
        <div className="space-y-6 text-sm text-slate-700 dark:text-slate-300">
          {/* Executive Summary */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mb-2">Overview</h3>
            <p className="leading-relaxed text-slate-800 dark:text-slate-200 font-normal">{project.summary}</p>
          </div>

          {/* Problem & Challenge */}
          <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-500/5 border border-rose-200 dark:border-rose-500/20">
            <h3 className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-rose-800 dark:text-rose-300 mb-2">
              <AlertCircle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
              The Architectural Challenge
            </h3>
            <p className="leading-relaxed text-rose-950 dark:text-slate-300 font-normal">{project.challenge}</p>
          </div>

          {/* Solution & Engineering Strategy */}
          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-500/5 border border-emerald-200 dark:border-emerald-500/20">
            <h3 className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-emerald-800 dark:text-emerald-300 mb-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              Engineering Solution &amp; Architecture
            </h3>
            <p className="leading-relaxed text-emerald-950 dark:text-slate-300 font-normal">{project.solution}</p>
          </div>

          {/* Step-by-Step Architecture Pipeline */}
          <div>
            <h3 className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-slate-700 dark:text-slate-300 mb-3">
              <Layers className="w-4 h-4 text-slate-900 dark:text-cyan-400" />
              System Breakdown &amp; Data Flow
            </h3>
            <div className="space-y-3">
              {project.architecture.map((step, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-200 dark:bg-cyan-500/20 border border-slate-300 dark:border-cyan-500/40 text-slate-900 dark:text-cyan-400 font-mono text-xs flex items-center justify-center font-bold">
                    {idx + 1}
                  </span>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-950 dark:text-white">{step.title}</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed font-normal">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mb-2">Technologies Used</h3>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-300 border border-slate-200 dark:border-white/10 font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Links Footer */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-200 dark:border-white/10">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-200 text-xs font-semibold border border-slate-200 dark:border-white/10 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                View Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 text-xs font-semibold transition-colors shadow-sm"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Live Demo
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-xs text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
