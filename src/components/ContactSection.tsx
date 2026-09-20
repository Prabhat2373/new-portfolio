'use client';

import React, { useState } from 'react';
import { portfolioData } from '@/data/portfolio';
import { Mail, Send, Check, Copy } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    
    // Trigger user's default email client prefilled to prabhattambe10@gmail.com
    window.location.href = `mailto:${portfolioData.socials.email}?subject=${subject}&body=${body}`;
    
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 max-w-4xl mx-auto border-t border-white/10">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
          Get in Touch
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Let&apos;s Build Something Resilient
        </h2>
        <p className="text-sm text-slate-400 mt-3 leading-relaxed">
          I am currently exploring Staff & Senior level Software Engineer roles in high-performance web systems, distributed infrastructure, and AI systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Contact Links & Quick Copy */}
        <div className="md:col-span-2 space-y-4">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
            <h3 className="text-sm font-semibold text-white mb-2">Direct Contact</h3>
            <p className="text-xs text-slate-400 mb-4">
              Feel free to reach out directly via email or connect on LinkedIn and GitHub.
            </p>

            <button
              onClick={copyEmail}
              className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-950/80 border border-white/10 hover:border-cyan-500/40 text-xs font-mono text-slate-200 transition-all group mb-4"
            >
              <div className="flex items-center gap-2 truncate">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span className="truncate">{portfolioData.socials.email}</span>
              </div>
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-slate-400 group-hover:text-white flex-shrink-0" />
              )}
            </button>

            <div className="space-y-2">
              <a
                href={portfolioData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-medium transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-slate-400" />
                <span>GitHub Profile</span>
              </a>
              <a
                href={portfolioData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-medium transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn Network</span>
              </a>
            </div>
          </div>
        </div>

        {/* Message Form */}
        <div className="md:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-md space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1.5">
                Your Name / Company
              </label>
              <input
                id="name"
                required
                type="text"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                placeholder="Engineering Manager / Recruiter"
                className="w-full px-3.5 py-2 rounded-xl bg-slate-950/80 border border-white/10 focus:border-cyan-400 text-xs text-white placeholder:text-slate-500 outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1.5">
                Email Address
              </label>
              <input
                id="email"
                required
                type="email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                placeholder="name@company.com"
                className="w-full px-3.5 py-2 rounded-xl bg-slate-950/80 border border-white/10 focus:border-cyan-400 text-xs text-white placeholder:text-slate-500 outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1.5">
                Message / Role Details
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Let's talk about our team's upcoming challenges..."
                className="w-full px-3.5 py-2 rounded-xl bg-slate-950/80 border border-white/10 focus:border-cyan-400 text-xs text-white placeholder:text-slate-500 outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={formSent}
              className="w-full py-2.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-md shadow-cyan-500/20 disabled:opacity-70"
            >
              {formSent ? (
                <>
                  <Check className="w-4 h-4 text-slate-950" />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
