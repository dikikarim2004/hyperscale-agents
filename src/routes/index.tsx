import { createFileRoute } from "@tanstack/react-router";
import {
  BrainCircuit,
  Swords,
  Crosshair,
  Rocket,
  Binary,
  Fingerprint,
  Skull,
  Eye,
  Bitcoin,
  Ghost,
  Brain,
  Lock,
  ScanFace,
  Zap,
  Vote,
  Terminal,
  Cpu,
  Plus,
  ChevronDown,
  Blocks,
  Mic,
  AudioLines,
  Bot,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hyperscale — Autonomous AI Agents for Crypto" },
      {
        name: "description",
        content:
          "All your autonomous AI agents in one app. Trade on Solana, play on-chain chess on Base, and scale with agentic crypto products built for speed.",
      },
      { property: "og:title", content: "Hyperscale — Autonomous AI Agents for Crypto" },
      {
        property: "og:description",
        content:
          "All your autonomous AI agents in one app. Trade on Solana, play on-chain chess on Base, and scale with agentic crypto products.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

type Product = {
  name: string;
  icon: typeof Bot;
  status: "live" | "soon";
  tint: string;
  desc: string;
  url?: string;
};

const products: Product[] = [
  {
    name: "AI Auto LP DLMM",
    icon: BrainCircuit,
    status: "live",
    tint: "from-green-400 to-emerald-500",
    desc: "Autonomous LP DLMM on Solana",
    url: "https://app.hyperscaleagent.xyz",
  },
  {
    name: "ChessFi",
    icon: Swords,
    status: "live",
    tint: "from-lime-400 to-green-500",
    desc: "P2P & bot chess wagers on Base",
    url: "https://game.hyperscaleagent.xyz",
  },
  {
    name: "Sniper Agent",
    icon: Crosshair,
    status: "soon",
    tint: "from-emerald-400 to-teal-500",
    desc: "New launch sniping",
  },
  {
    name: "Yield Optimizer",
    icon: Rocket,
    status: "soon",
    tint: "from-green-400 to-teal-400",
    desc: "Auto-compound LPs",
  },
  {
    name: "Arbitrage Bot",
    icon: Binary,
    status: "soon",
    tint: "from-teal-400 to-cyan-500",
    desc: "Cross-DEX arbitrage",
  },
  {
    name: "Portfolio AI",
    icon: Fingerprint,
    status: "soon",
    tint: "from-emerald-400 to-green-600",
    desc: "Self-managed wallets",
  },
  {
    name: "MEV Guard",
    icon: Skull,
    status: "soon",
    tint: "from-lime-400 to-emerald-500",
    desc: "Anti-MEV protection",
  },
  {
    name: "Signal Scanner",
    icon: Eye,
    status: "soon",
    tint: "from-cyan-400 to-emerald-400",
    desc: "On-chain alpha radar",
  },
  {
    name: "Liquidity Hunter",
    icon: Bitcoin,
    status: "soon",
    tint: "from-green-400 to-lime-500",
    desc: "Deep-pool discovery",
  },
  {
    name: "Copy Trade AI",
    icon: Ghost,
    status: "soon",
    tint: "from-emerald-400 to-cyan-500",
    desc: "Mirror smart wallets",
  },
  {
    name: "Sentiment Engine",
    icon: Brain,
    status: "soon",
    tint: "from-teal-400 to-green-500",
    desc: "Social alpha NLP",
  },
  {
    name: "Risk Manager",
    icon: Lock,
    status: "soon",
    tint: "from-green-500 to-emerald-600",
    desc: "Auto stop-loss agent",
  },
  {
    name: "NFT Sweeper",
    icon: ScanFace,
    status: "soon",
    tint: "from-lime-400 to-teal-500",
    desc: "Floor-sweep agent",
  },
  {
    name: "Airdrop Hunter",
    icon: Zap,
    status: "soon",
    tint: "from-green-400 to-emerald-400",
    desc: "Farm qualifying actions",
  },
  {
    name: "DAO Voter",
    icon: Vote,
    status: "soon",
    tint: "from-emerald-400 to-teal-400",
    desc: "Auto-governance",
  },
  {
    name: "Strategy Studio",
    icon: Terminal,
    status: "soon",
    tint: "from-cyan-400 to-green-500",
    desc: "Build your own agent",
  },
];

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      {/* <EventStrip /> */}
      <ProductGrid />
      <Stats />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        <a href="#" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-primary to-emerald-400 grid place-items-center text-primary-foreground font-bold shadow-[0_0_18px_oklch(0.8_0.22_145/0.5)]">
            H
          </div>
          <span className="font-hand text-xl sm:text-2xl text-ink leading-none mt-1">
            hyperscale
          </span>
        </a>
        <nav className="flex items-center gap-4 md:gap-8 text-xs sm:text-sm font-medium text-foreground/80 overflow-x-auto whitespace-nowrap">
          <a href="#agents" className="hover:text-foreground">
            Agents
          </a>
          <a href="#ecosystem" className="hidden sm:inline hover:text-foreground">
            Ecosystem
          </a>
          <a href="#stats" className="hover:text-foreground">
            Network
          </a>
          <a href="#" className="hover:text-foreground">
            Docs
          </a>
          <a href="#" className="hidden sm:inline hover:text-foreground">
            Community
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pt-14 sm:pt-20 pb-10 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto text-center relative">
        <h1 className="font-hand text-ink leading-tight text-3xl sm:text-4xl md:text-5xl">
          AI agents. <span className="hl-yellow">One app.</span>{" "}
          <span className="underline-scribble">Unstoppable.</span>
        </h1>

        <p className="mt-5 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
          Hyperscale is the agentic layer for crypto — deploy AI that trades across chains 24/7,
          plays on-chain chess on Base for stakes, and runs strategies while you sleep.
        </p>

        {/* Genspark-style central prompt box */}
        <div className="mt-8 sm:mt-10 max-w-2xl mx-auto">
          <div className="rounded-3xl border border-border bg-card/80 backdrop-blur-md shadow-[0_0_40px_oklch(0.8_0.22_145/0.12)] p-3 sm:p-4 text-left">
            <input
              type="text"
              placeholder="Ask anything, deploy any agent"
              className="w-full bg-transparent outline-none text-foreground placeholder:text-muted-foreground text-sm sm:text-base px-2 py-2"
            />
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <button
                type="button"
                className="w-9 h-9 grid place-items-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition shrink-0"
              >
                <Plus className="w-4 h-4" />
              </button>
              <button
                type="button"
                className="flex items-center gap-1.5 rounded-full border border-border px-3 sm:px-3.5 py-2 text-xs sm:text-sm text-foreground/80 hover:border-primary/50 transition"
              >
                <Cpu className="w-4 h-4" /> Standard <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                className="hidden sm:flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-sm text-foreground/80 hover:border-primary/50 transition"
              >
                <Blocks className="w-4 h-4" /> Connectors
              </button>
              <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
                <button
                  type="button"
                  className="w-9 h-9 grid place-items-center rounded-full text-muted-foreground hover:text-foreground transition"
                >
                  <Mic className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  className="flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold hover:bg-primary/90 transition shadow-[0_0_20px_oklch(0.8_0.22_145/0.35)]"
                >
                  <AudioLines className="w-4 h-4" /> Speak
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EventStrip() {
  return (
    <section className="px-4 sm:px-6 pb-10">
      <div className="max-w-2xl mx-auto rounded-2xl sm:rounded-full border border-border bg-card shadow-sm px-4 sm:px-5 py-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm">
        <span className="inline-flex w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
        <span className="font-semibold text-foreground">Hyperscale Mainnet</span>
        <span className="text-muted-foreground">— Live across Solana & Base</span>
        <a href="#" className="ml-auto text-primary font-semibold hover:underline shrink-0">
          Join →
        </a>
      </div>
    </section>
  );
}

function ProductGrid() {
  return (
    <section
      id="agents"
      className="px-4 sm:px-6 py-12 sm:py-16 bg-linear-to-b from-transparent to-secondary/40"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-hand text-3xl sm:text-4xl md:text-5xl text-ink">
            One platform. <span className="hl-yellow">Many agents.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            Two live products today. A whole agentic stack coming soon.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-5">
          {products.map((p) => (
            <ProductCard key={p.name} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ p }: { p: Product }) {
  const Icon = p.icon;
  const isSoon = p.status === "soon";
  const Wrapper = p.url ? "a" : "div";
  const wrapperProps = p.url ? { href: p.url, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`group relative bg-card rounded-2xl border border-border p-4 sm:p-5 flex flex-col items-center text-center transition-all ${
        isSoon
          ? "opacity-50 saturate-50 pointer-events-none select-none"
          : "hover:border-primary/50 hover:shadow-[0_0_30px_oklch(0.8_0.22_145/0.2)] hover:-translate-y-1 cursor-pointer"
      }`}
      aria-disabled={isSoon || undefined}
    >
      <span
        className={`absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
          p.status === "live"
            ? "bg-emerald-500/15 text-emerald-400"
            : "bg-muted text-muted-foreground/70"
        }`}
      >
        {p.status === "live" ? "● Live" : "Soon"}
      </span>
      <div
        className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-linear-to-br ${p.tint} grid place-items-center mb-3 sm:mb-4 shadow-md ${
          isSoon ? "blur-[5px] opacity-60" : ""
        }`}
      >
        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-black" strokeWidth={2.2} />
      </div>
      <h3
        className={`font-semibold text-xs sm:text-sm ${isSoon ? "text-foreground/40 blur-[3px]" : "text-foreground"}`}
      >
        {p.name}
      </h3>
      <p
        className={`text-[11px] sm:text-xs mt-1 ${isSoon ? "text-muted-foreground/40 blur-[3px]" : "text-muted-foreground"}`}
      >
        {p.desc}
      </p>
    </Wrapper>
  );
}

function Stats() {
  const stats = [
    { v: "24/7", l: "Autonomous uptime" },
    { v: "<400ms", l: "Multichain execution" },
    { v: "16+", l: "Agents in pipeline" },
    { v: "0%", l: "Idle capital" },
  ];
  return (
    <section id="stats" className="px-4 sm:px-6 py-14 sm:py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-hand text-3xl sm:text-4xl md:text-5xl text-ink">
          Built for the <span className="underline-scribble">speed of crypto.</span>
        </h2>
        <div className="mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {stats.map((s) => (
            <div key={s.l} className="bg-card border border-border rounded-2xl p-4 sm:p-6">
              <div className="font-hand text-3xl sm:text-4xl md:text-5xl text-primary">{s.v}</div>
              <div className="mt-2 text-xs sm:text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="px-4 sm:px-6 pb-16 sm:pb-24">
      <div className="max-w-4xl mx-auto rounded-3xl bg-linear-to-br from-green-600 via-emerald-800 to-black text-white p-8 sm:p-12 md:p-16 text-center relative overflow-hidden border border-primary/30">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_30%,white,transparent_40%),radial-gradient(circle_at_80%_70%,#4ade80,transparent_40%)]" />
        <h2 className="relative font-hand text-3xl sm:text-5xl md:text-6xl">
          Ready to <span className="hl-yellow">hyperscale?</span>
        </h2>
        <p className="relative mt-4 text-sm sm:text-base text-white/80 max-w-xl mx-auto">
          Deploy autonomous agents across Solana and Base in under 60 seconds. No code.
          Non-custodial. Multichain by default.
        </p>
        <div className="relative mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
          <a
            href="#agents"
            className="rounded-lg bg-background text-foreground px-5 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold hover:bg-secondary transition border border-border"
          >
            Explore Agents
          </a>
          <a
            href="#"
            className="rounded-lg border border-white/30 px-5 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold hover:bg-white/10 transition"
          >
            Read the docs
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-4 sm:px-6 py-8 sm:py-10 text-xs sm:text-sm text-muted-foreground">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <div className="w-7 h-7 rounded-md bg-linear-to-br from-primary to-emerald-400 grid place-items-center text-primary-foreground font-bold text-xs">
            H
          </div>
          <span className="font-hand text-xl text-ink leading-none mt-1">hyperscale</span>
          <span className="ml-2">© 2026 · hyperscaleagent.xyz</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground">
            Twitter
          </a>
          <a href="#" className="hover:text-foreground">
            Discord
          </a>
          <a href="#" className="hover:text-foreground">
            Docs
          </a>
        </div>
      </div>
    </footer>
  );
}
