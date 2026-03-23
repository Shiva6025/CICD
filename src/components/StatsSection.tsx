"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
  color: string;
  icon: string;
}

const stats: Stat[] = [
  {
    value: 99.9,
    suffix: "%",
    label: "Uptime SLA",
    description: "Across all deployments",
    color: "text-emerald-400",
    icon: "📈",
  },
  {
    value: 2.4,
    suffix: "s",
    label: "Avg Build Time",
    description: "Cached incremental builds",
    color: "text-cyan-400",
    icon: "⚡",
  },
  {
    value: 1200,
    suffix: "+",
    label: "Deployments",
    description: "Successful this month",
    color: "text-indigo-400",
    icon: "🚀",
  },
  {
    value: 0,
    suffix: "",
    label: "Rollback Events",
    description: "Zero-downtime guaranteed",
    color: "text-violet-400",
    icon: "🛡️",
  },
];

function Counter({ target, suffix, color }: { target: number; suffix: string; color: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(parseFloat(current.toFixed(1)));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, started]);

  return (
    <div ref={ref} className={`text-5xl md:text-6xl font-black ${color} font-mono`}>
      {count % 1 === 0 ? count : count.toFixed(1)}
      {suffix}
    </div>
  );
}

export default function StatsSection() {
  return (
    <section id="stats" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 section-enter">
          <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
            By the Numbers
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Pipeline Performance
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Real-time metrics from our CI/CD infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 section-enter">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card rounded-3xl p-8 text-center group"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <Counter target={stat.value} suffix={stat.suffix} color={stat.color} />
              <div className="text-white font-bold text-lg mt-3 mb-1">{stat.label}</div>
              <div className="text-slate-500 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
