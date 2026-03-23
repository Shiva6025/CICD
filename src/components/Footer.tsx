"use client";

const currentYear = new Date().getFullYear();

const links = [
  { label: "Pipeline", href: "#pipeline" },
  { label: "Stats", href: "#stats" },
  { label: "Features", href: "#features" },
  { label: "Terminal", href: "#terminal" },
];

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto">
        {/* CTA Banner */}
        <div className="glass-card rounded-3xl p-10 mb-16 text-center neon-border">
          <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to Automate Your Pipeline?
          </h3>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Push to main and watch your code go live in under 60 seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pipeline"
              className="px-8 py-3.5 rounded-2xl gradient-bg text-white font-bold shadow-lg shadow-indigo-500/30 hover:scale-105 transition-all duration-300"
            >
              🚀 Start Deploying
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-2xl bg-slate-800 text-white font-bold border border-slate-700 hover:border-indigo-500/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              View on GitHub
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl gradient-bg flex items-center justify-center text-white text-xs font-bold">
              DF
            </div>
            <span className="text-slate-400 font-medium">
              Deploy<span className="text-indigo-400">Flow</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 text-slate-600 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 status-pulse" />
              <span className="text-emerald-400 text-xs">All systems operational</span>
            </div>
            <span>·</span>
            <span>© {currentYear} DeployFlow</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
