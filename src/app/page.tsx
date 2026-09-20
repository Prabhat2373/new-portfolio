'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ProjectCard } from '@/components/ProjectCard';
import { ProjectModal } from '@/components/ProjectModal';
import { SystemArchitecture } from '@/components/SystemArchitecture';
import { ExperienceSection } from '@/components/ExperienceSection';
import { TechStack } from '@/components/TechStack';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { portfolioData } from '@/data/portfolio';
import { Project } from '@/types';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Distributed Systems', 'Fullstack', 'AI & ML', 'Frontend / UI'];

  const filteredProjects = selectedCategory === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Hero with interactive code terminal */}
        <Hero />

        {/* Featured Projects Section */}
        <section id="projects" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-white/10">
          {/* Section Header */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
              Flagship Implementations
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Engineered for Scale & High Concurrency
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-2xl leading-relaxed">
              Real-world distributed systems, real-time collaboration engines, and production-tested web applications with quantified architectural impact.
            </p>
          </div>

          {/* Full-width Category Filter Bar placed directly below heading/subtitle */}
          <div className="w-full mb-10 p-1.5 rounded-2xl bg-slate-900/80 border border-white/10 shadow-sm flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex-1 min-w-[120px] py-2.5 px-4 rounded-xl text-xs font-bold transition-all text-center ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
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
        </section>

        {/* System Architecture Deep-Dive Philosophy */}
        <SystemArchitecture />

        {/* Experience & Career Timeline */}
        <ExperienceSection />

        {/* Tech Stack & Competencies */}
        <TechStack />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Deep Dive Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />

      <Footer />
    </div>
  );
}
