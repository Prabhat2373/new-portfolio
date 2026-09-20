export type ProjectCategory = 'Design Systems & UI' | 'Next.js & Hybrid Apps' | 'AI & Cross-Platform' | 'IoT & Hardware';

export interface ArchitectureStep {
  title: string;
  description: string;
}

export interface Metric {
  label: string;
  value: string;
  change?: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  featured: boolean;
  metrics: Metric[];
  summary: string;
  challenge: string;
  solution: string;
  architecture: ArchitectureStep[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  readTime: string;
  stars?: number;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
}

export interface TechSkillGroup {
  category: string;
  skills: {
    name: string;
    level: string; // e.g. "Production Grade", "Proficient", "Hobbyist"
    highlight?: boolean;
  }[];
}

export interface PortfolioData {
  name: string;
  title: string;
  tagline: string;
  location: string;
  about: string;
  status: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
    twitter?: string;
  };
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  projects: Project[];
  experience: Experience[];
  skills: TechSkillGroup[];
}
