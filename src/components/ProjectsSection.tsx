'use client';

import React, { useState } from 'react';
import { ProjectCard } from '@/components/ProjectCard';
import { ProjectModal } from '@/components/ProjectModal';
import { portfolioData } from '@/data/portfolio';
import { Project } from '@/types';

export const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    'All',
    'Design Systems & UI',
    'AI & Cross-Platform',
    'IoT & Hardware'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto border-t border-slate-200/80 dark:border-white/10">
      {/* Section Header with Apple-grade headline */}
      <div className="mb-10 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-xs font-medium mb-4">
          Crafted Work
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white">
          Extraordinary engineering.<br />
          <span className="text-slate-950 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:via-slate-200 dark:to-slate-400">
            Down to the finest detail.
          </span>
        </h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mt-4 leading-relaxed font-normal">
          Cloud management consoles, resilient design systems, AI-accelerated cross-platform apps, and physical IoT hardware.
        </p>
      </div>

      {/* Full-width Category Filter Bar placed directly below heading/subtitle */}
      <div className="w-full mb-12 p-1.5 rounded-full bg-slate-100/90 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 shadow-xs flex flex-wrap items-center gap-2 backdrop-blur-xl">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-full text-xs font-semibold transition-all text-center ${
              selectedCategory === cat
                ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950 shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards Grid: 3 cards per row on large/desktop screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenCaseStudy={(proj) => setActiveModalProject(proj)}
          />
        ))}
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
