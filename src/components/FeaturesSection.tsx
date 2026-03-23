"use client";

interface Feature {
  icon: string;
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  glow: string;
}

const features: Feature[] = [
  {
    icon: "⚡",
    title: "Lightning Builds",
    description:
      "Incremental Next.js builds with aggressive caching. Only rebuild what changed — go from 30s to 2s build times.",
    tags: ["Turbopack", "Webpack Cache", "ISR"],
    gradient: "from-yellow-500/20 to-orange-500/10",
    glow: "hover:shadow-yellow-500/10",
  },
  {
    icon: "🔒",
    title: "Secure by Default",
    description:
      "Secret scanning, SAST analysis, and dependency audits run on every PR. No secrets ever reach production.",
    tags: ["Trivy", "Snyk", "SAST"],
    gradient: "from-emerald-500/20 to-teal-500/10",
    glow: "hover:shadow-emerald-500/10",
  },
  {
    icon: "🌍",
    title: "Global CDN Deploy",
    description:
      "Static export deployed to the edge in 200+ locations. Sub-100ms TTFB worldwide with zero cold starts.",
    tags: ["Vercel Edge", "Cloudflare", "AWS CDN"],
    gradient: "from-blue-500/20 to-cyan-500/10",
    glow: "hover:shadow-blue-500/10",
  },
  {
    icon: "🔄",
    title: "Instant Rollbacks",
    description:
      "Every deploy is immutable and versioned. One-click rollback to any previous deployment in under 10 seconds.",
    tags: ["Immutable", "Versioned", "Blue-Green"],
    gradient: "from-violet-500/20 to-purple-500/10",
    glow: "hover:shadow-violet-500/10",
  },
  {
    icon: "📊",
    title: "Build Analytics",
    description:
      "Real-time dashboards for pipeline health, test pass rate, bundle size trends, and deployment frequency.",
    tags: ["Grafana", "Prometheus", "DORA"],
    gradient: "from-indigo-500/20 to-blue-500/10",
    glow: "hover:shadow-indigo-500/10",
  },
  {
    icon: "🤖",
    title: "AI-Assisted Reviews",
    description:
      "Automated PR summaries, test suggestions, and performance regression detection powered by AI.",
    tags: ["LLM Review", "Auto-fix", "PR Bot"],
    gradient: "from-pink-500/20 to-rose-500/10",
    glow: "hover:shadow-pink-500/10",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 section-enter">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
            Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Everything You Need
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A production-grade CI/CD pipeline with all the features modern teams rely on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 section-enter">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`glass-card rounded-3xl p-7 group cursor-default shadow-lg ${feature.glow} transition-all duration-300`}
            >
              {/* Icon gradient bg */}
              <div
                className={`inline-flex w-14 h-14 rounded-2xl items-center justify-center text-2xl mb-5 bg-gradient-to-br ${feature.gradient} border border-white/5`}
              >
                {feature.icon}
              </div>

              <h3 className="text-white font-bold text-xl mb-3">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                {feature.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {feature.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
