'use client';

import React, { useState } from 'react';
import { portfolioData } from '@/data/portfolio';
import { Mail, Send, Check, Copy, ArrowUpRight } from 'lucide-react';
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
    const subject = encodeURIComponent(`Inquiry from ${formState.name}`);
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
    <section id="contact" className="section-deferred py-24 px-4 sm:px-6 max-w-4xl mx-auto border-t border-slate-200/80 dark:border-white/10">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-xs font-medium mb-4">
          Direct Line
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white">
          Let&apos;s make something extraordinary.
        </h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mt-4 leading-relaxed font-normal">
          Available for Senior Frontend, Cloud Console, and System Architecture roles. Let&apos;s build software that sets a new standard.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Contact Links & Quick Copy */}
        <div className="md:col-span-2 space-y-4">
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-white/10 backdrop-blur-xl shadow-xs hover:shadow-xl transition-all">
            <h3 className="text-base font-bold text-slate-950 dark:text-white mb-2 tracking-tight">Direct Contact</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-5 leading-relaxed font-normal">
              Reach out directly to begin a conversation. I respond promptly.
            </p>

            <button
              onClick={copyEmail}
              className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/30 text-xs font-mono text-slate-900 dark:text-slate-200 transition-all group mb-5"
            >
              <div className="flex items-center gap-2 truncate">
                <Mail className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span className="truncate">{portfolioData.socials.email}</span>
              </div>
              {copied ? (
                <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              ) : (
                <Copy className="w-4 h-4 text-slate-500 group-hover:text-slate-950 dark:group-hover:text-white flex-shrink-0" />
              )}
            </button>

            <div className="space-y-2.5">
              <a
                href={portfolioData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-2xl bg-slate-100/90 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-900 dark:text-slate-200 text-xs font-medium border border-slate-200/80 dark:border-white/5 transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <GithubIcon className="w-4 h-4 text-slate-700 dark:text-slate-400" />
                  <span>GitHub Profile</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </a>
              <a
                href={portfolioData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-2xl bg-slate-100/90 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-900 dark:text-slate-200 text-xs font-medium border border-slate-200/80 dark:border-white/5 transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedinIcon className="w-4 h-4 text-slate-700 dark:text-slate-400" />
                  <span>LinkedIn Network</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Message Form */}
        <div className="md:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-white/10 backdrop-blur-xl shadow-xs hover:shadow-xl transition-all space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                Your Name &amp; Company
              </label>
              <input
                id="name"
                required
                type="text"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                placeholder="Engineering Leader / Team"
                className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-white/10 focus:border-slate-900 dark:focus:border-white text-xs text-slate-900 dark:text-white placeholder:text-slate-400 outline-none transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                Email Address
              </label>
              <input
                id="email"
                required
                type="email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                placeholder="name@company.com"
                className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-white/10 focus:border-slate-900 dark:focus:border-white text-xs text-slate-900 dark:text-white placeholder:text-slate-400 outline-none transition-all"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                Message / Opportunity
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Tell me about the engineering challenge..."
                className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-white/10 focus:border-slate-900 dark:focus:border-white text-xs text-slate-900 dark:text-white placeholder:text-slate-400 outline-none transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={formSent}
              className="w-full py-3 px-6 rounded-full bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-md disabled:opacity-70"
            >
              {formSent ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Preparing Email Client...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
