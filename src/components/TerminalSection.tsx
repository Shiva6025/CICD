"use client";

import { useState } from "react";

interface Tab {
  id: string;
  label: string;
  lines: { text: string; color?: string }[];
}

const tabs: Tab[] = [
  {
    id: "install",
    label: "Install & Setup",
    lines: [
      { text: "$ git clone https://github.com/org/deployflow.git", color: "text-slate-400" },
      { text: "$ cd deployflow", color: "text-slate-400" },
      { text: "$ npm install", color: "text-slate-400" },
      { text: "" },
      { text: "✔ Resolved 1,247 packages in 2.3s", color: "text-emerald-400" },
      { text: "✔ Frozen lockfile — no changes", color: "text-emerald-400" },
      { text: "" },
      { text: "$ npm run dev", color: "text-slate-400" },
      { text: "" },
      { text: "  ▲ Next.js 15.2.3", color: "text-indigo-400" },
      { text: "  - Local:        http://localhost:3000", color: "text-cyan-400" },
      { text: "  - Network:      http://192.168.1.1:3000", color: "text-cyan-400" },
      { text: "" },
      { text: "  ✓ Starting...", color: "text-emerald-400" },
      { text: "  ✓ Ready in 842ms", color: "text-emerald-400" },
    ],
  },
  {
    id: "build",
    label: "Build & Export",
    lines: [
      { text: "$ npm run build", color: "text-slate-400" },
      { text: "" },
      { text: "  ▲ Next.js 15.2.3", color: "text-indigo-400" },
      { text: "" },
      { text: "   Creating an optimized production build ...", color: "text-slate-400" },
      { text: " ✓ Compiled successfully", color: "text-emerald-400" },
      { text: " ✓ Linting and checking validity of types", color: "text-emerald-400" },
      { text: " ✓ Collecting page data", color: "text-emerald-400" },
      { text: " ✓ Generating static pages (6/6)", color: "text-emerald-400" },
      { text: " ✓ Finalizing page optimization", color: "text-emerald-400" },
      { text: "" },
      { text: "Route (app)                Size     First Load JS", color: "text-slate-500" },
      { text: "┌ ○ /                      4.2 kB       98.4 kB", color: "text-slate-300" },
      { text: "└ ○ /_not-found            872 B        94.1 kB", color: "text-slate-300" },
      { text: "" },
      { text: "○  (Static)  prerendered as static HTML", color: "text-cyan-400" },
    ],
  },
  {
    id: "deploy",
    label: "Deploy",
    lines: [
      { text: "$ gh workflow run deploy.yml --ref main", color: "text-slate-400" },
      { text: "" },
      { text: "✔ Created workflow_dispatch event for deploy.yml", color: "text-emerald-400" },
      { text: "" },
      { text: "[CI/CD] 🔵 Checkout code", color: "text-slate-400" },
      { text: "[CI/CD] ✓ Checkout complete (0.4s)", color: "text-emerald-400" },
      { text: "[CI/CD] 🔵 Install dependencies", color: "text-slate-400" },
      { text: "[CI/CD] ✓ Install complete (11.2s)", color: "text-emerald-400" },
      { text: "[CI/CD] 🔵 Build application", color: "text-slate-400" },
      { text: "[CI/CD] ✓ Build complete (28.4s)", color: "text-emerald-400" },
      { text: "[CI/CD] 🔵 Deploy to CDN", color: "text-slate-400" },
      { text: "[CI/CD] ✓ Deployed 247 assets to edge", color: "text-emerald-400" },
      { text: "" },
      { text: "🚀 Deployment live at https://deployflow.vercel.app", color: "text-indigo-400" },
      { text: "⚡ TTFB: 48ms (Global CDN)", color: "text-cyan-400" },
    ],
  },
];

export default function TerminalSection() {
  const [activeTab, setActiveTab] = useState("install");
  const current = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="terminal" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 section-enter">
          <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
            Developer Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            From Code to Production
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Three commands. That&apos;s all it takes to develop, build, and ship to the world.
          </p>
        </div>

        <div className="terminal section-enter neon-border">
          {/* Terminal bar */}
          <div className="terminal-bar">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="flex-1 text-center text-slate-500 text-xs font-mono">
              bash — deployflow
            </span>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 px-4 pt-3 border-b border-slate-800">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-xs font-medium rounded-t-lg transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-[#0f172a] text-indigo-400 border-t border-l border-r border-slate-700"
                    : "text-slate-500 hover:text-slate-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Terminal output */}
          <div className="p-6 min-h-80 overflow-y-auto">
            {current.lines.map((line, i) => (
              <div
                key={i}
                className={`font-mono text-sm leading-7 ${
                  line.color ?? "text-slate-300"
                }`}
              >
                {line.text || "\u00A0"}
              </div>
            ))}
            <div className="font-mono text-sm text-indigo-400 mt-1 typewriter">&nbsp;</div>
          </div>
        </div>
      </div>
    </section>
  );
}
