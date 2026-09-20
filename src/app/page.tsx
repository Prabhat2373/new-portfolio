import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ProjectsSection } from '@/components/ProjectsSection';
import { SystemArchitecture } from '@/components/SystemArchitecture';
import { ExperienceSection } from '@/components/ExperienceSection';
import { TechStack } from '@/components/TechStack';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Hero with interactive code terminal */}
        <Hero />

        {/* Featured Projects Section (Client Island) */}
        <ProjectsSection />

        {/* System Architecture Deep-Dive Philosophy */}
        <SystemArchitecture />

        {/* Experience & Career Timeline */}
        <ExperienceSection />

        {/* Tech Stack & Competencies */}
        <TechStack />

        {/* Contact Section */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
