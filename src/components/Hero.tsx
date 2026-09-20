'use client';

import React, { useState } from 'react';
import { portfolioData } from '@/data/portfolio';
import { ArrowUpRight, Copy, Check, Play, ShieldCheck, Sparkles } from 'lucide-react';

export const Hero = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'go' | 'typescript'>('go');

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const goCode = `// Distributed consensus benchmark - Hyperion engine
package main

import (
    "fmt"
    "time"
    "github.com/hyperion/raft"
)

func main() {
    cluster := raft.NewCluster(raft.Config{
        Nodes:         []string{"us-east-1a", "us-east-1b", "us-west-2a"},
        HeartbeatMs:   50,
        CommitTimeout: 200 * time.Millisecond,
    })
    
    // Process 240,000 req/sec with < 1.2ms p99 latency
    metrics := cluster.BenchmarkRun(time.Second * 10)
    fmt.Printf("p99 Latency: %s | Zero-Data-Drift: %t\\n", 
        metrics.P99, metrics.Consistent)
}`;

  const tsCode = `// OmniCanvas: Bidirectional CRDT streaming sync
import { WebSocketCRDTProvider } from '@omni/sync';
import { AgentGraphDAG } from '@omni/core';

const dag = new AgentGraphDAG({
  concurrency: 16,
  backpressureStrategy: 'drop-oldest-token',
});

// Stream topological reasoning graph with 60 FPS WebGL render
dag.onNodeComplete(async (node, delta) => {
  await WebSocketCRDTProvider.broadcast({
    origin: 'orchestrator-node-4',
    delta: delta.compress(),
    renderTarget: 'OffscreenCanvas'
  });
});`;

  return (
    <section className="pt-32 pb-16 md:pt-44 md:pb-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Availability Status Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-8 backdrop-blur-sm">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
        </span>
        {portfolioData.status}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Headline & Bio */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">scalable systems</span> & high-impact products.
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed">
            Hi, I&apos;m <span className="font-semibold text-white">{portfolioData.name}</span>. {portfolioData.tagline}
          </p>

          <p className="text-sm text-slate-400 leading-relaxed">
            {portfolioData.about}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-semibold text-sm hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/35"
            >
              Explore Flagship Systems
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-white/10 text-sm font-medium transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>Copy Contact Email</span>
                </>
              )}
            </button>
          </div>

          {/* Key Metric Highlights Ticker */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
            {portfolioData.metrics.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-2xl font-bold font-mono text-cyan-400">
                  {item.value}
                </span>
                <span className="text-xs text-slate-400 font-medium mt-0.5">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Interactive Code & Architecture Terminal */}
        <div className="lg:col-span-5">
          <div className="code-terminal-container rounded-2xl border border-white/15 bg-slate-950/80 backdrop-blur-xl shadow-2xl overflow-hidden">
            {/* Terminal Top Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>

              {/* Code Language Switcher */}
              <div className="flex items-center bg-slate-950 rounded-lg p-0.5 border border-white/10">
                <button
                  onClick={() => setActiveTab('go')}
                  className={`px-2.5 py-1 text-xs font-mono rounded ${
                    activeTab === 'go'
                      ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  raft.go
                </button>
                <button
                  onClick={() => setActiveTab('typescript')}
                  className={`px-2.5 py-1 text-xs font-mono rounded ${
                    activeTab === 'typescript'
                      ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  crdt-sync.ts
                </button>
              </div>
            </div>

            {/* Code Body */}
            <div className="p-4 overflow-x-auto text-xs font-mono text-slate-300 leading-relaxed bg-[#060911]">
              <pre className="selection:bg-cyan-500/30">
                <code>{activeTab === 'go' ? goCode : tsCode}</code>
              </pre>
            </div>

            {/* System Status Footer */}
            <div className="px-4 py-2.5 bg-slate-900/60 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Zero Unhandled Panics
              </span>
              <span className="text-cyan-400 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Production Benchmarked
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
