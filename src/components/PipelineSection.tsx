"use client";

import { useState, useEffect, useRef } from "react";

type StepStatus = "success" | "running" | "pending" | "failed";

interface PipelineStep {
  id: number;
  name: string;
  icon: string;
  duration: string;
  status: StepStatus;
  details: string[];
}

const initialSteps: PipelineStep[] = [
  {
    id: 1,
    name: "Source",
    icon: "📦",
    duration: "0.3s",
    status: "success",
    details: ["Git clone", "Checkout branch", "Fetch submodules"],
  },
  {
    id: 2,
    name: "Install",
    icon: "📥",
    duration: "12.4s",
    status: "success",
    details: ["npm ci", "Cache node_modules", "Verify lockfile"],
  },
  {
    id: 3,
    name: "Lint",
    icon: "🔍",
    duration: "4.1s",
    status: "success",
    details: ["ESLint check", "TypeScript types", "Prettier format"],
  },
  {
    id: 4,
    name: "Test",
    icon: "🧪",
    duration: "18.7s",
    status: "running",
    details: ["Unit tests", "Component tests", "E2E (Playwright)"],
  },
  {
    id: 5,
    name: "Build",
    icon: "🏗️",
    duration: "—",
    status: "pending",
    details: ["next build", "Static export", "Asset optimization"],
  },
  {
    id: 6,
    name: "Deploy",
    icon: "🚀",
    duration: "—",
    status: "pending",
    details: ["Upload artifacts", "CDN invalidation", "Health check"],
  },
];

const statusColors: Record<StepStatus, string> = {
  success: "text-emerald-400 border-emerald-500/40 bg-emerald-500/10",
  running: "text-yellow-400 border-yellow-500/40 bg-yellow-500/10",
  pending: "text-slate-500 border-slate-600/40 bg-slate-800/30",
  failed: "text-red-400 border-red-500/40 bg-red-500/10",
};

const statusIcons: Record<StepStatus, string> = {
  success: "✓",
  running: "⟳",
  pending: "○",
  failed: "✗",
};

export default function PipelineSection() {
  const [steps, setSteps] = useState<PipelineStep[]>(initialSteps);
  const [running, setRunning] = useState(false);
  const timeoutRefs = useRef<ReturnType<typeof setTimeout>[]>([]);

  const runPipeline = () => {
    if (running) return;
    setRunning(true);

    // Reset
    setSteps(
      initialSteps.map((s) => ({ ...s, status: "pending" as StepStatus, duration: "—" }))
    );

    // Simulate each step
    const durations = [300, 1200, 800, 1800, 1500, 1000];
    const cumulativeTimes = durations.reduce<number[]>((acc, d, i) => {
      acc.push((acc[i - 1] ?? 0) + d);
      return acc;
    }, []);
    const actualDurations = ["0.3s", "12.4s", "4.1s", "18.7s", "32.1s", "8.4s"];

    steps.forEach((_, i) => {
      // Set to running
      const t1 = setTimeout(() => {
        setSteps((prev) =>
          prev.map((s, j) => (j === i ? { ...s, status: "running" } : s))
        );
      }, (cumulativeTimes[i - 1] ?? 0) + 50);

      // Set to success
      const t2 = setTimeout(() => {
        setSteps((prev) =>
          prev.map((s, j) =>
            j === i ? { ...s, status: "success", duration: actualDurations[i] } : s
          )
        );
        if (i === steps.length - 1) setRunning(false);
      }, cumulativeTimes[i]);

      timeoutRefs.current.push(t1, t2);
    });
  };

  useEffect(() => {
    return () => timeoutRefs.current.forEach(clearTimeout);
  }, []);

  return (
    <section id="pipeline" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 section-enter">
          <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
            Live Demo
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            CI/CD Pipeline Visualization
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Watch your code flow from commit to production in real-time.
            Click the button below to simulate the pipeline.
          </p>
        </div>

        {/* Pipeline steps */}
        <div className="glass-card rounded-3xl p-8 mb-8 section-enter">
          {/* Header */}
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div
                className={`w-3 h-3 rounded-full ${
                  running ? "bg-yellow-400 animate-pulse" : "bg-emerald-400"
                }`}
              />
              <span className="text-slate-300 font-medium">
                {running ? "Pipeline Running..." : "Pipeline Ready"}
              </span>
              <span className="text-slate-600 text-sm font-mono">
                #deploy-{Math.floor(Math.random() * 900) + 100}
              </span>
            </div>
            <button
              onClick={runPipeline}
              disabled={running}
              className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                running
                  ? "bg-slate-800 text-slate-500 cursor-not-allowed"
                  : "gradient-bg text-white hover:scale-105 shadow-lg shadow-indigo-500/20"
              }`}
            >
              {running ? "Running..." : "▶ Run Pipeline"}
            </button>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {steps.map((step, i) => (
              <div
                key={step.id}
                className={`relative rounded-2xl border p-4 transition-all duration-500 ${statusColors[step.status]} ${
                  step.status === "running" ? "scale-105 shadow-lg" : ""
                }`}
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-slate-700 z-10" />
                )}

                <div className="text-center">
                  <div className="text-2xl mb-2">
                    {step.status === "running" ? (
                      <span className="inline-block animate-spin">⟳</span>
                    ) : (
                      step.icon
                    )}
                  </div>
                  <div className="text-xs font-bold mb-1 text-current">{step.name}</div>
                  <div className="text-xs opacity-60 font-mono">{step.duration}</div>
                  <div
                    className={`mt-2 text-xs font-bold ${
                      step.status === "success"
                        ? "text-emerald-400"
                        : step.status === "running"
                        ? "text-yellow-400"
                        : "text-slate-500"
                    }`}
                  >
                    {statusIcons[step.status]}
                  </div>
                </div>

                {/* Details tooltip */}
                <div className="mt-3 space-y-1">
                  {step.details.map((d) => (
                    <div key={d} className="text-xs opacity-50 flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-current flex-shrink-0" />
                      {d}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-8">
            <div className="flex justify-between text-xs text-slate-500 mb-2">
              <span>Overall Progress</span>
              <span>
                {steps.filter((s) => s.status === "success").length}/{steps.length} steps
              </span>
            </div>
            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full gradient-bg rounded-full transition-all duration-700"
                style={{
                  width: `${
                    (steps.filter((s) => s.status === "success").length / steps.length) *
                    100
                  }%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
