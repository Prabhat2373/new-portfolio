'use client';

import React, { useState } from 'react';
import { portfolioData } from '@/data/portfolio';
import { ArrowUpRight, Copy, Check, ShieldCheck, Sparkles, ChevronRight } from 'lucide-react';

export const Hero = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'cloud' | 'iot'>('cloud');

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const cloudCode = `// Edge Network Router & Multi-Tenant Reseller Middleware
import { NextRequest, NextResponse } from "next/server";
import { resolveTenantVPC, verifyAffiliateToken } from "@/lib/edge-network";

export async function middleware(req: NextRequest) {
  const host = req.headers.get("x-forwarded-host") || req.nextUrl.hostname;
  
  // 1. Edge-level tenant resolution & network routing (<15ms)
  const tenant = await resolveTenantVPC(host);
  if (!tenant) return NextResponse.redirect(new URL("/login", req.url));

  // 2. Validate multi-tier RBAC (Reseller -> Admin -> Sub-User)
  const auth = await verifyAffiliateToken(req, tenant.id);
  
  // 3. Inject isolated VPC configuration and design tokens to headers
  const response = NextResponse.next();
  response.headers.set("x-tenant-id", tenant.id);
  response.headers.set("x-network-zone", tenant.vpcRegion);
  response.headers.set("x-reseller-theme", tenant.themeTokensHash);
  
  return response;
}`;

  const iotCode = `// ESP32 / Arduino IoT Sensor Stream -> Next.js Real-time Dashboard
#include <WiFi.h>
#include <PubSubClient.h>

const char* mqtt_server = "broker.iot.local";
WiFiClient espClient;
PubSubClient client(espClient);

void setup() {
  Serial.begin(115200);
  setup_wifi();
  client.setServer(mqtt_server, 1883);
}

void loop() {
  // Read physical analog sensor & publish telemetry JSON
  float temp = readBME280Temperature();
  String payload = "{\\"node\\":\\"esp32-alpha\\",\\"temp\\":" + String(temp) + "}";
  client.publish("telemetry/sensors", payload.c_str());
  delay(1000); // 1-second pulse to web dashboard
}`;

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Apple-style eyebrow status pill */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-xs font-medium mb-6 backdrop-blur-md shadow-xs">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>{portfolioData.status}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Apple-inspired Headline & Copy */}
        <div className="lg:col-span-7 flex flex-col space-y-4">
          <div className="text-xs font-semibold tracking-wider uppercase text-cyan-600 dark:text-cyan-400">
            Frontend • Cloud Applications • System Architecture
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.08]">
            Profoundly responsive.<br />
            <span className="text-slate-950 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:via-slate-200 dark:to-slate-400">
              Intelligently engineered.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-200 font-normal leading-relaxed">
            I&apos;m <span className="font-semibold text-slate-950 dark:text-white">{portfolioData.name}</span>. A frontend developer crafting cloud applications with the finesse, fluid performance, and architectural rigor of an operating system.
          </p>

          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Specializing in high-performance cloud consoles (VMs, networking, caching, and multi-tenant reseller modules), zero-maintenance design systems, AI-accelerated cross-platform development, and hands-on Arduino IoT hardware.
          </p>

          {/* Action CTAs: Apple-style pill button & subtle ghost link */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-semibold text-sm hover:opacity-90 transition-all shadow-md"
            >
              Discover the Work
              <ChevronRight className="w-4 h-4" />
            </a>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/15 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 text-sm font-medium transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400">Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                  <span>Get in Touch</span>
                </>
              )}
            </button>
          </div>

          {/* Key Metric Highlights Ticker with Apple-clean typography */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200 dark:border-white/10">
            {portfolioData.metrics.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
                  {item.value}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Clean, Frameless Precision Code Window */}
        <div className="lg:col-span-5">
          <div className="rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-slate-950/80 backdrop-blur-2xl shadow-xl overflow-hidden">
            {/* Terminal Top Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-100/80 dark:bg-slate-900/80 border-b border-slate-200/80 dark:border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>

              {/* Code Language Switcher */}
              <div className="flex items-center bg-slate-200/70 dark:bg-slate-950 rounded-full p-0.5 border border-slate-300/60 dark:border-white/10">
                <button
                  onClick={() => setActiveTab('cloud')}
                  className={`px-3 py-1 text-xs font-mono rounded-full transition-all ${
                    activeTab === 'cloud'
                      ? 'bg-white dark:bg-white/15 text-slate-950 dark:text-white font-semibold shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                  }`}
                >
                  edge-network.ts
                </button>
                <button
                  onClick={() => setActiveTab('iot')}
                  className={`px-3 py-1 text-xs font-mono rounded-full transition-all ${
                    activeTab === 'iot'
                      ? 'bg-white dark:bg-white/15 text-slate-950 dark:text-white font-semibold shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                  }`}
                >
                  esp32-sensor.ino
                </button>
              </div>
            </div>

            {/* Code Body with crisp typography */}
            <div className="p-4 overflow-x-auto text-[11px] font-mono text-slate-800 dark:text-slate-300 leading-relaxed bg-slate-50/50 dark:bg-[#070b14]">
              <pre className="selection:bg-cyan-500/20">
                <code>{activeTab === 'cloud' ? cloudCode : iotCode}</code>
              </pre>
            </div>

            {/* Precision status bar */}
            <div className="px-4 py-2 bg-slate-100/80 dark:bg-slate-900/60 border-t border-slate-200/80 dark:border-white/5 flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                Zero-Maintenance Core
              </span>
              <span className="text-slate-900 dark:text-slate-200 font-medium flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                Apple-Level Polish
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
