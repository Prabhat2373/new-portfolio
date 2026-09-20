import React from 'react';
import { Layers, Zap, Bot, ChevronRight } from 'lucide-react';

export const SystemArchitecture = () => {
  return (
    <section id="architecture" className="section-deferred py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-xs font-medium mb-4">
          Architectural Philosophy
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white">
          Simplicity is the ultimate sophistication.
        </h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mt-4 leading-relaxed font-normal">
          How I engineer cloud frontends that run effortlessly for years: zero maintenance, profound speed, and unyielding reliability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1: Cloud & Multi-Tenant Reseller Design Systems */}
        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/30 backdrop-blur-xl transition-all shadow-xs hover:shadow-xl">
          <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/10 flex items-center justify-center text-slate-950 dark:text-white mb-6">
            <Layers className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-950 dark:text-white mb-2 tracking-tight">
            1. Composable Cloud Design Systems
          </h3>
          <p className="text-sm text-slate-700 dark:text-slate-400 leading-relaxed font-normal">
            Decoupling component behavior from visual presentation. Token hierarchies inject dynamic branding for multi-tenant resellers and affiliates at runtime with zero JavaScript overhead.
          </p>
          <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-950 dark:text-slate-200">
            Guarantees: WCAG AAA • Complete Whitelabeling
          </div>
        </div>

        {/* Card 2: Edge Routing & Partial Hydration */}
        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/30 backdrop-blur-xl transition-all shadow-xs hover:shadow-xl">
          <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/10 flex items-center justify-center text-slate-950 dark:text-white mb-6">
            <Zap className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-950 dark:text-white mb-2 tracking-tight">
            2. Edge Routing &amp; Hybrid Streaming
          </h3>
          <p className="text-sm text-slate-700 dark:text-slate-400 leading-relaxed font-normal">
            React Server Components stream instant UI shells from the edge. Heavy data hydration is eliminated on the client, confining browser work exclusively to selective interactive islands.
          </p>
          <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-950 dark:text-slate-200">
            Speed: Sub-15ms TTFB • Sub-50ms INP
          </div>
        </div>

        {/* Card 3: AI Leverage & Hardware Interfacing */}
        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/30 backdrop-blur-xl transition-all shadow-xs hover:shadow-xl">
          <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/10 flex items-center justify-center text-slate-950 dark:text-white mb-6">
            <Bot className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-950 dark:text-white mb-2 tracking-tight">
            3. AI Speed &amp; IoT Physical Telemetry
          </h3>
          <p className="text-sm text-slate-700 dark:text-slate-400 leading-relaxed font-normal">
            Harnessing generative AI workflows to ship multi-platform code across Web, Mobile, and Desktop in days, complemented by maker curiosity in embedded Arduino, ESP32, and live sensor networks.
          </p>
          <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-950 dark:text-slate-200">
            Reach: Web • iOS • Desktop • Physical IoT
          </div>
        </div>
      </div>
    </section>
  );
};
