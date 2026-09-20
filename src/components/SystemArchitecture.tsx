'use client';

import React from 'react';
import { Network, Database, Cpu, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export const SystemArchitecture = () => {
  return (
    <section id="architecture" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
          Core Engineering Philosophy
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          How I Design For Resilience & Scale
        </h2>
        <p className="text-sm text-slate-400 mt-3 leading-relaxed">
          Big Tech systems require more than writing code—they demand thoughtful tradeoffs between consistency, availability, latency, and operational simplicity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Edge & Concurrency */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/40 backdrop-blur-md transition-all">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-5">
            <Network className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white mb-2">
            1. Edge Routing & Smart Caching
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Offload repetitive reads via multi-layer caching (CDN edge, regional Redis clusters, local in-memory L1). Mitigate cache thundering herds using singleflight deduping and probabilistic early expiration.
          </p>
          <div className="mt-4 pt-4 border-t border-white/5 text-[11px] font-mono text-cyan-400">
            Target: &lt;10ms Edge Hits
          </div>
        </div>

        {/* Card 2: Event-Driven Decoupling */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-indigo-500/40 backdrop-blur-md transition-all">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-5">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white mb-2">
            2. Asynchronous Event-Driven Core
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Decouple write paths with Apache Kafka and partitioned consumers. Protect upstream services with backpressure management, exponential backoff with jitter, and robust dead-letter queue (DLQ) retry patterns.
          </p>
          <div className="mt-4 pt-4 border-t border-white/5 text-[11px] font-mono text-indigo-400">
            Guarantees: At-Least-Once Delivery
          </div>
        </div>

        {/* Card 3: Observability & Resilience */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-emerald-500/40 backdrop-blur-md transition-all">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white mb-2">
            3. Deep Observability & Chaos Readiness
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Telemetry built into every request cycle: distributed tracing (OpenTelemetry), RED metrics (Rate, Errors, Duration) in Prometheus/Grafana, and automated circuit breakers (Hystrix pattern) to prevent cascading outages.
          </p>
          <div className="mt-4 pt-4 border-t border-white/5 text-[11px] font-mono text-emerald-400">
            Standard: 99.99% Production SLO
          </div>
        </div>
      </div>
    </section>
  );
};
