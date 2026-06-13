import { createFileRoute } from "@tanstack/react-router";
import {
  Bot, Crown, TrendingUp, Zap, Wallet, Radar, Coins, Network,
  ShieldCheck, LineChart, Brain, Image as ImageIcon, Vote, Repeat,
  Sparkles, Gauge,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hyperscale — Autonomous AI Agents for Crypto" },
      { name: "description", content: "All your autonomous AI agents in one app. Trade on Solana, play on-chain chess on Base, and scale with agentic crypto products built for speed." },
      { property: "og:title", content: "Hyperscale — Autonomous AI Agents for Crypto" },
      { property: "og:description", content: "All your autonomous AI agents in one app. Trade on Solana, play on-chain chess on Base, and scale with agentic crypto products." },
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
  { name: "AI Auto Trader", icon: Bot, status: "live", tint: "from-violet-400 to-fuchsia-400", desc: "Autonomous trader on Solana", url: "https://app.hyperscaleagent.xyz" },
  { name: "ChessFi", icon: Crown, status: "live", tint: "from-amber-400 to-orange-400", desc: "P2P & bot chess wagers on Base", url: "https://game.hyperscaleagent.xyz" },
  { name: "Sniper Agent", icon: Zap, status: "soon", tint: "from-yellow-400 to-amber-500", desc: "New launch sniping" },
  { name: "Yield Optimizer", icon: TrendingUp, status: "soon", tint: "from-emerald-400 to-teal-400", desc: "Auto-compound LPs" },
  { name: "Arbitrage Bot", icon: Repeat, status: "soon", tint: "from-sky-400 to-cyan-400", desc: "Cross-DEX arbitrage" },
  { name: "Portfolio AI", icon: Wallet, status: "soon", tint: "from-indigo-400 to-violet-400", desc: "Self-managed wallets" },
  { name: "MEV Guard", icon: ShieldCheck, status: "soon", tint: "from-rose-400 to-pink-400", desc: "Anti-MEV protection" },
  { name: "Signal Scanner", icon: Radar, status: "soon", tint: "from-cyan-400 to-blue-400", desc: "On-chain alpha radar" },
  { name: "Liquidity Hunter", icon: Coins, status: "soon", tint: "from-amber-400 to-yellow-500", desc: "Deep-pool discovery" },
  { name: "Copy Trade AI", icon: Network, status: "soon", tint: "from-fuchsia-400 to-purple-400", desc: "Mirror smart wallets" },
  { name: "Sentiment Engine", icon: Brain, status: "soon", tint: "from-pink-400 to-rose-400", desc: "Social alpha NLP" },
  { name: "Risk Manager", icon: Gauge, status: "soon", tint: "from-red-400 to-orange-500", desc: "Auto stop-loss agent" },
  { name: "NFT Sweeper", icon: ImageIcon, status: "soon", tint: "from-purple-400 to-indigo-400", desc: "Floor-sweep agent" },
  { name: "Airdrop Hunter", icon: Sparkles, status: "soon", tint: "from-lime-400 to-emerald-400", desc: "Farm qualifying actions" },
  { name: "DAO Voter", icon: Vote, status: "soon", tint: "from-blue-400 to-indigo-400", desc: "Auto-governance" },
  { name: "Strategy Studio", icon: LineChart, status: "soon", tint: "from-teal-400 to-cyan-400", desc: "Build your own agent" },
];

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <EventStrip />
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
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-fuchsia-500 grid place-items-center text-primary-foreground font-bold">H</div>
          <span className="font-hand text-2xl text-ink leading-none mt-1">hyperscale</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80">
          <a href="#agents" className="hover:text-foreground">Agents</a>
          <a href="#ecosystem" className="hover:text-foreground">Ecosystem</a>
          <a href="#stats" className="hover:text-foreground">Network</a>
          <a href="#" className="hover:text-foreground">Docs</a>
          <a href="#" className="hover:text-foreground">Community</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pt-20 pb-10 px-6">
      <div className="max-w-5xl mx-auto text-center relative">
        <h1 className="font-hand text-ink leading-[0.95] text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
          All your AI agents in{" "}
          <span className="hl-yellow">one app.</span>
          <br />
          <span className="block mt-4">
            Autonomous, multichain, <span className="underline-scribble">unstoppable!</span>
          </span>
        </h1>

        <p className="mt-8 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          Hyperscale is the agentic layer for crypto — deploy AI that trades across chains 24/7,
          plays on-chain chess on Base for stakes, and runs strategies while you sleep.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 relative">
          <a href="#agents" className="rounded-lg bg-primary px-7 py-3.5 text-primary-foreground font-semibold hover:bg-primary/90 transition shadow-lg shadow-primary/20">
            Explore Agents
          </a>

          {/* Handwritten annotation */}
          <div className="hidden lg:block absolute -right-8 top-0 translate-x-full">
            <svg width="90" height="70" viewBox="0 0 90 70" fill="none" className="text-primary/70">
              <path d="M5 60 Q 30 30, 70 15 M 70 15 L 60 22 M 70 15 L 68 5"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
            </svg>
            <p className="font-scribble text-primary text-base leading-tight -mt-2 ml-8 w-44">
              0% fees<br/>for early agents
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function EventStrip() {
  return (
    <section className="px-6 pb-10">
      <div className="max-w-2xl mx-auto rounded-full border border-border bg-card shadow-sm px-5 py-3 flex items-center gap-3 text-sm">
        <span className="inline-flex w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="font-semibold text-foreground">Hyperscale Mainnet</span>
        <span className="text-muted-foreground">— Live across Solana & Base</span>
        <a href="#" className="ml-auto text-primary font-semibold hover:underline">Join →</a>
      </div>
    </section>
  );
}

function ProductGrid() {
  return (
    <section id="agents" className="px-6 py-16 bg-gradient-to-b from-transparent to-secondary/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-hand text-4xl sm:text-5xl text-ink">
            One platform. <span className="hl-yellow">Many agents.</span>
          </h2>
          <p className="mt-3 text-muted-foreground">Two live products today. A whole agentic stack coming soon.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-5">
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
  const Wrapper = p.url ? "a" : "div";
  const wrapperProps = p.url
    ? { href: p.url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group relative bg-card rounded-2xl border border-border p-5 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer"
    >
      <span className={`absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
        p.status === "live"
          ? "bg-emerald-100 text-emerald-700"
          : "bg-muted text-muted-foreground"
      }`}>
        {p.status === "live" ? "● Live" : "Soon"}
      </span>
      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${p.tint} grid place-items-center mb-4 shadow-md`}>
        <Icon className="w-8 h-8 text-white" strokeWidth={2.2} />
      </div>
      <h3 className="font-semibold text-foreground text-sm">{p.name}</h3>
      <p className="text-xs text-muted-foreground mt-1">{p.desc}</p>
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
    <section id="stats" className="px-6 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-hand text-4xl sm:text-5xl text-ink">
          Built for the <span className="underline-scribble">speed of crypto.</span>
        </h2>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.l} className="bg-card border border-border rounded-2xl p-6">
              <div className="font-hand text-5xl text-primary">{s.v}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="px-6 pb-24">
      <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-primary via-fuchsia-700 to-violet-900 text-primary-foreground p-12 sm:p-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_30%,white,transparent_40%),radial-gradient(circle_at_80%_70%,#fde047,transparent_40%)]" />
        <h2 className="relative font-hand text-5xl sm:text-6xl">
          Ready to <span className="hl-yellow text-ink">hyperscale?</span>
        </h2>
        <p className="relative mt-4 text-primary-foreground/80 max-w-xl mx-auto">
          Deploy autonomous agents across Solana and Base in under 60 seconds. No code. Non-custodial. Multichain by default.
        </p>
        <div className="relative mt-8 flex flex-wrap justify-center gap-4">
          <a href="#agents" className="rounded-lg bg-background text-foreground px-7 py-3.5 font-semibold hover:bg-secondary transition">
            Explore Agents
          </a>
          <a href="#" className="rounded-lg border border-white/30 px-7 py-3.5 font-semibold hover:bg-white/10 transition">
            Read the docs
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10 text-sm text-muted-foreground">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-gradient-to-br from-primary to-fuchsia-500 grid place-items-center text-primary-foreground font-bold text-xs">H</div>
          <span className="font-hand text-xl text-ink leading-none mt-1">hyperscale</span>
          <span className="ml-2">© 2026 · hyperscaleagent.xyz</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground">Twitter</a>
          <a href="#" className="hover:text-foreground">Discord</a>
          <a href="#" className="hover:text-foreground">Docs</a>
        </div>
      </div>
    </footer>
  );
}
