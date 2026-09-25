import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  BrainCircuit,
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
  X,
  Maximize2,
  Minimize2,
} from "lucide-react";
import logoUrl from "../../WhatsApp Image 2026-09-24 at 2.06.05 PM.jpeg";

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

type AppTab = {
  id: string;
  name: string;
  desc: string;
  url?: string;
};

const dashboardUrl = "https://webapp-lp-dlmm.vercel.app/dashboard";

const products: Product[] = [
  {
    name: "AI Auto LP DLMM",
    icon: BrainCircuit,
    status: "live",
    tint: "from-orange-400 to-amber-500",
    desc: "Autonomous LP DLMM on Solana",
    url: dashboardUrl,
  },
  {
    name: "Memecoin Signal + Trade",
    icon: Crosshair,
    status: "live",
    tint: "from-amber-400 to-orange-500",
    desc: "Signals and trading tools for memecoins",
  },
  {
    name: "Sniper Agent",
    icon: Crosshair,
    status: "soon",
    tint: "from-orange-400 to-red-500",
    desc: "New launch sniping",
  },
  {
    name: "Yield Optimizer",
    icon: Rocket,
    status: "soon",
    tint: "from-amber-400 to-orange-400",
    desc: "Auto-compound LPs",
  },
  {
    name: "Arbitrage Bot",
    icon: Binary,
    status: "soon",
    tint: "from-orange-400 to-red-400",
    desc: "Cross-DEX arbitrage",
  },
  {
    name: "Portfolio AI",
    icon: Fingerprint,
    status: "soon",
    tint: "from-orange-400 to-amber-600",
    desc: "Self-managed wallets",
  },
  {
    name: "MEV Guard",
    icon: Skull,
    status: "soon",
    tint: "from-amber-400 to-orange-500",
    desc: "Anti-MEV protection",
  },
  {
    name: "Signal Scanner",
    icon: Eye,
    status: "soon",
    tint: "from-orange-300 to-amber-400",
    desc: "On-chain alpha radar",
  },
  {
    name: "Liquidity Hunter",
    icon: Bitcoin,
    status: "soon",
    tint: "from-orange-400 to-amber-500",
    desc: "Deep-pool discovery",
  },
  {
    name: "Copy Trade AI",
    icon: Ghost,
    status: "soon",
    tint: "from-orange-400 to-red-400",
    desc: "Mirror smart wallets",
  },
  {
    name: "Sentiment Engine",
    icon: Brain,
    status: "soon",
    tint: "from-amber-400 to-orange-500",
    desc: "Social alpha NLP",
  },
  {
    name: "Risk Manager",
    icon: Lock,
    status: "soon",
    tint: "from-orange-500 to-red-500",
    desc: "Auto stop-loss agent",
  },
  {
    name: "NFT Sweeper",
    icon: ScanFace,
    status: "soon",
    tint: "from-amber-400 to-orange-500",
    desc: "Floor-sweep agent",
  },
  {
    name: "Airdrop Hunter",
    icon: Zap,
    status: "soon",
    tint: "from-orange-400 to-amber-400",
    desc: "Farm qualifying actions",
  },
  {
    name: "DAO Voter",
    icon: Vote,
    status: "soon",
    tint: "from-orange-400 to-red-400",
    desc: "Auto-governance",
  },
  {
    name: "Strategy Studio",
    icon: Terminal,
    status: "soon",
    tint: "from-orange-400 to-amber-500",
    desc: "Build your own agent",
  },
];

function Index() {
  const [tabs, setTabs] = useState<AppTab[]>([]);
  const [activeTabId, setActiveTabId] = useState<string | null>(null);
  const [isTabsExpanded, setIsTabsExpanded] = useState(false);
  const [loadingTabId, setLoadingTabId] = useState<string | null>(null);
  const [loadedTabIds, setLoadedTabIds] = useState<string[]>([]);

  const openProduct = (product: Product) => {
    const id = product.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    setTabs((currentTabs) =>
      currentTabs.some((tab) => tab.id === id)
        ? currentTabs
        : [...currentTabs, { id, name: product.name, desc: product.desc, url: product.url }],
    );
    setActiveTabId(id);
    setIsTabsExpanded(true);
    if (product.url && !loadedTabIds.includes(id)) setLoadingTabId(id);
  };

  const closeTab = (id: string) => {
    setTabs((currentTabs) => currentTabs.filter((tab) => tab.id !== id));
    setActiveTabId((currentId) => {
      if (currentId !== id) return currentId;
      return tabs.find((tab) => tab.id !== id)?.id ?? null;
    });
    setLoadedTabIds((currentIds) => currentIds.filter((tabId) => tabId !== id));
    setLoadingTabId((currentId) => (currentId === id ? null : currentId));
    setIsTabsExpanded((currentExpanded) => (tabs.length > 1 ? currentExpanded : false));
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />
      <AppTabs
        tabs={tabs}
        activeTabId={activeTabId}
        isExpanded={isTabsExpanded}
        loadingTabId={loadingTabId}
        onSelect={(id) => {
          setActiveTabId(id);
          setIsTabsExpanded(true);
        }}
        onClose={closeTab}
        onMinimize={() => setIsTabsExpanded(false)}
        onMaximize={() => setIsTabsExpanded(true)}
        onFrameLoad={(id) => {
          setLoadedTabIds((currentIds) =>
            currentIds.includes(id) ? currentIds : [...currentIds, id],
          );
          setLoadingTabId((currentId) => (currentId === id ? null : currentId));
        }}
      />
      <Hero />
      {/* <EventStrip /> */}
      <ProductGrid onOpen={openProduct} />
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
        <a href="#" className="flex items-center gap-2 shrink-0" aria-label="Hyperscale home">
          <img
            src={logoUrl}
            alt="Hyperscale Agent"
            className="h-11 w-auto max-w-[180px] object-contain sm:h-12"
          />
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

function AppTabs({
  tabs,
  activeTabId,
  isExpanded,
  loadingTabId,
  onSelect,
  onClose,
  onMinimize,
  onMaximize,
  onFrameLoad,
}: {
  tabs: AppTab[];
  activeTabId: string | null;
  isExpanded: boolean;
  loadingTabId: string | null;
  onSelect: (id: string) => void;
  onClose: (id: string) => void;
  onMinimize: () => void;
  onMaximize: () => void;
  onFrameLoad: (id: string) => void;
}) {
  if (!tabs.length) return null;

  const activeTab = tabs.find((tab) => tab.id === activeTabId) ?? tabs[0];
  const isLoading = activeTab ? loadingTabId === activeTab.id : false;

  return (
    <section
      className={
        isExpanded
          ? "fixed inset-0 z-50 flex min-h-0 flex-col bg-background/95 shadow-2xl backdrop-blur-xl"
          : "sticky top-16 z-30 border-b border-border bg-card/95 shadow-[0_10px_35px_oklch(0.7_0.18_55/0.08)]"
      }
    >
      <div className={isExpanded ? "flex min-h-0 flex-1 flex-col" : "mx-auto max-w-7xl"}>
        <div className="flex items-center gap-2 border-b border-border bg-card/95 px-3 sm:px-6">
          <div
            className="flex min-w-0 items-end gap-1 overflow-x-auto pt-2"
            role="tablist"
            aria-label="Open agent pages"
          >
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`group flex min-w-[170px] max-w-[260px] items-center gap-2 rounded-t-xl border border-b-0 px-3 py-2 text-xs sm:text-sm ${tab.id === activeTab?.id ? "border-border bg-background text-foreground" : "border-transparent text-muted-foreground hover:bg-secondary/70"}`}
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={tab.id === activeTab?.id}
                  onClick={() => onSelect(tab.id)}
                  className="min-w-0 flex-1 truncate text-left"
                >
                  {tab.name}
                </button>
                <button
                  type="button"
                  onClick={() => onClose(tab.id)}
                  className="grid h-5 w-5 shrink-0 place-items-center rounded-md text-muted-foreground hover:bg-secondary hover:text-foreground"
                  aria-label={`Close ${tab.name}`}
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={isExpanded ? onMinimize : onMaximize}
            className="ml-auto grid h-8 w-8 shrink-0 place-items-center rounded-lg text-muted-foreground transition hover:bg-secondary hover:text-foreground"
            title={isExpanded ? "Minimize embedded page" : "Maximize embedded page"}
            aria-label={isExpanded ? "Minimize embedded page" : "Maximize embedded page"}
          >
            {isExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </button>
        </div>
        {activeTab && (
          <div className={isExpanded ? "min-h-0 flex-1" : "hidden"}>
            {activeTab.url ? (
              <div className="relative h-full overflow-hidden border-border bg-background shadow-inner">
                {isLoading && (
                  <div className="absolute inset-0 z-10 grid place-items-center bg-background">
                    <div className="flex flex-col items-center gap-5 text-center">
                      <div className="grid h-28 w-28 place-items-center rounded-full border-2 border-primary/25 border-t-primary p-3 animate-spin">
                        <img
                          src={logoUrl}
                          alt="Loading Hyperscale Agent"
                          className="h-full w-full rounded-full object-cover"
                        />
                      </div>
                      <p className="text-xs uppercase tracking-[0.28em] text-primary">
                        Loading agent
                      </p>
                    </div>
                  </div>
                )}
                <iframe
                  title={activeTab.name}
                  src={activeTab.url}
                  onLoad={() => onFrameLoad(activeTab.id)}
                  className="h-full min-h-0 w-full border-0 bg-white"
                />
              </div>
            ) : (
              <div className="flex min-h-48 items-center justify-center rounded-xl border border-dashed border-primary/40 bg-primary/5 px-6 py-12 text-center">
                <div>
                  <p className="font-hand text-xl text-foreground">{activeTab.name}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{activeTab.desc}</p>
                  <p className="mt-4 text-xs uppercase tracking-[0.2em] text-primary">
                    URL coming soon
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
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
          <div className="rounded-3xl border border-border bg-card/80 p-3 text-left shadow-[0_0_40px_oklch(0.8_0.22_55/0.12)] backdrop-blur-md sm:p-4">
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
                  className="flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground shadow-[0_0_20px_oklch(0.8_0.22_55/0.35)] transition hover:bg-primary/90 sm:px-4 sm:text-sm"
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
        <span className="inline-flex w-2 h-2 rounded-full bg-orange-500 animate-pulse shrink-0" />
        <span className="font-semibold text-foreground">Hyperscale Mainnet</span>
        <span className="text-muted-foreground">— Live across Solana & Base</span>
        <a href="#" className="ml-auto text-primary font-semibold hover:underline shrink-0">
          Join →
        </a>
      </div>
    </section>
  );
}

function ProductGrid({ onOpen }: { onOpen: (product: Product) => void }) {
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
            <ProductCard key={p.name} p={p} onOpen={onOpen} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ p, onOpen }: { p: Product; onOpen: (product: Product) => void }) {
  const Icon = p.icon;
  const isSoon = p.status === "soon";

  return (
    <button
      type="button"
      onClick={() => onOpen(p)}
      disabled={isSoon}
      aria-label={isSoon ? `${p.name}, coming soon` : `Open ${p.name}`}
      className={`group relative flex flex-col items-center rounded-2xl border border-border bg-card p-4 text-center transition-all sm:p-5 ${
        isSoon
          ? "cursor-not-allowed opacity-45 saturate-50"
          : "cursor-pointer hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_30px_oklch(0.8_0.22_55/0.2)]"
      }`}
    >
      <span
        className={`absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
          p.status === "live"
            ? "bg-orange-500/15 text-orange-400"
            : "bg-muted text-muted-foreground/70"
        }`}
      >
        {p.status === "live" ? "● Live" : "Soon"}
      </span>
      <div
        className={`mb-3 grid h-12 w-12 place-items-center rounded-2xl bg-linear-to-br shadow-md sm:mb-4 sm:h-16 sm:w-16 ${p.tint} ${
          isSoon ? "blur-[5px]" : ""
        }`}
      >
        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-black" strokeWidth={2.2} />
      </div>
      <h3
        className={`text-xs font-semibold sm:text-sm ${isSoon ? "text-foreground/40 blur-[3px]" : "text-foreground"}`}
      >
        {p.name}
      </h3>
      <p
        className={`mt-1 text-[11px] sm:text-xs ${isSoon ? "text-muted-foreground/40 blur-[3px]" : "text-muted-foreground"}`}
      >
        {p.desc}
      </p>
    </button>
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
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-primary/30 bg-linear-to-br from-orange-600 via-red-900 to-black p-8 text-center text-white sm:p-12 md:p-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,white,transparent_40%),radial-gradient(circle_at_80%_70%,#fb923c,transparent_40%)] opacity-20" />
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
          <img
            src={logoUrl}
            alt="Hyperscale Agent"
            className="h-10 w-auto max-w-[150px] object-contain"
          />
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
