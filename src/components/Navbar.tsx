'use client';

import React, { useState, useEffect } from 'react';
import { portfolioData } from '@/data/portfolio';
import { Terminal, Mail, FileText, Menu, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '@/context/ThemeContext';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? theme === 'light'
            ? 'py-3 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-md shadow-slate-900/5'
            : 'py-3 bg-[#090d16]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20'
          : theme === 'light'
            ? 'py-5 bg-transparent'
            : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo / Brand */}
        <a href="#" className="flex items-center gap-2 group text-decoration-none">
          <div
            className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
              theme === 'light'
                ? 'bg-cyan-100 border border-cyan-300 text-cyan-700 group-hover:bg-cyan-200'
                : 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:border-cyan-400'
            }`}
          >
            <Terminal className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span
              className={`text-sm font-bold tracking-wide transition-colors ${
                theme === 'light'
                  ? 'text-slate-900 group-hover:text-cyan-700'
                  : 'text-white group-hover:text-cyan-400'
              }`}
            >
              {portfolioData.name}
            </span>
            <span
              className={`text-[10px] uppercase tracking-wider font-mono font-semibold ${
                theme === 'light' ? 'text-slate-600' : 'text-slate-400'
              }`}
            >
              Systems & Full-Stack
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav
          className={`hidden md:flex items-center gap-1 rounded-full p-1 backdrop-blur-md transition-colors ${
            theme === 'light'
              ? 'bg-slate-100/90 border border-slate-300 shadow-sm'
              : 'bg-slate-900/60 border border-white/10'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all ${
                theme === 'light'
                  ? 'text-slate-700 hover:text-slate-950 hover:bg-white shadow-none hover:shadow-xs'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href={portfolioData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className={`p-2 rounded-lg border transition-colors ${
              theme === 'light'
                ? 'text-slate-700 hover:text-slate-950 hover:bg-slate-100 border-slate-200'
                : 'text-slate-400 hover:text-white hover:bg-white/5 border-transparent hover:border-white/10'
            }`}
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className={`p-2 rounded-lg border transition-colors ${
              theme === 'light'
                ? 'text-slate-700 hover:text-cyan-700 hover:bg-slate-100 border-slate-200'
                : 'text-slate-400 hover:text-white hover:bg-white/5 border-transparent hover:border-white/10'
            }`}
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded-lg bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors shadow-sm shadow-cyan-500/25"
          >
            <Mail className="w-3.5 h-3.5" />
            Get in Touch
          </a>
        </div>

        {/* Mobile menu and theme toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 focus:outline-none ${
              theme === 'light' ? 'text-slate-800 hover:text-slate-950' : 'text-slate-300 hover:text-white'
            }`}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden px-4 pt-3 pb-6 border-b backdrop-blur-xl transition-colors ${
            theme === 'light'
              ? 'bg-white/95 border-slate-200 shadow-lg'
              : 'bg-[#090d16]/95 border-white/10'
          }`}
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-sm font-medium rounded-md ${
                  theme === 'light'
                    ? 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
                    : 'text-slate-200 hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div
              className={`pt-2 border-t flex items-center gap-3 ${
                theme === 'light' ? 'border-slate-200' : 'border-white/10'
              }`}
            >
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 py-2 text-center text-xs font-bold rounded-lg bg-cyan-500 text-slate-950 hover:bg-cyan-400 shadow-sm"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
