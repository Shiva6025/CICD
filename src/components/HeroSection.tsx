"use client";

import { useEffect, useState } from "react";

const roles = ["CI/CD Pipeline", "DevOps Automation", "Zero-Downtime Deploys", "Continuous Delivery"];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const currentRole = roles[roleIndex];

    if (typing) {
      if (displayed.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayed(currentRole.slice(0, displayed.length + 1));
        }, 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 30);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6">
      {/* Animated rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full border border-indigo-500/10 animate-pulse-slow" />
        <div className="absolute w-[800px] h-[800px] rounded-full border border-violet-500/5 animate-spin-slow" />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          <span className="text-indigo-300 text-sm font-medium">Next.js 15 · TypeScript · Tailwind CSS</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
          Ship Faster with{" "}
          <span className="bg-clip-text text-white gradient-bg inline-block glow-text px-3">
            Modern 
          </span>
          <br />
          <span className="typewriter text-indigo-400 font-mono text-4xl md:text-5xl">
            {displayed}
          </span>
        </h1>

        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          A stunning Next.js static site demonstrating CI/CD pipeline capabilities — 
          automated builds, seamless deployments, and beautiful developer experience.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="#pipeline"
            className="group px-8 py-4 rounded-2xl gradient-bg text-white font-bold text-lg shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              View Pipeline
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
          <a
            href="#terminal"
            className="px-8 py-4 rounded-2xl bg-slate-800/80 text-white font-bold text-lg border border-slate-700 hover:border-indigo-500/50 hover:bg-slate-800 transition-all duration-300 flex items-center gap-2"
          >
            <span className="font-mono text-indigo-400">$</span> npm run deploy
          </a>
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { label: "Next.js 15", color: "bg-white/5 border-white/10 text-slate-300" },
            { label: "TypeScript", color: "bg-blue-500/10 border-blue-500/30 text-blue-300" },
            { label: "Tailwind CSS", color: "bg-cyan-500/10 border-cyan-500/30 text-cyan-300" },
            { label: "GitHub Actions", color: "bg-purple-500/10 border-purple-500/30 text-purple-300" },
            { label: "Auto Deploy", color: "bg-emerald-500/10 border-emerald-500/30 text-emerald-300" },
          ].map((badge) => (
            <span
              key={badge.label}
              className={`px-4 py-1.5 rounded-full border text-sm font-medium ${badge.color}`}
            >
              {badge.label}
            </span>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-slate-600 text-xs">Scroll to explore</span>
          <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
