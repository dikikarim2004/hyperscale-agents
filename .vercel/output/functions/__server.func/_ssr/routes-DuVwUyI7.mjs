import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Sparkles, c as Radar, d as Gauge, f as Crown, g as Bot, h as Brain, i as TrendingUp, l as Network, m as ChartLine, n as Wallet, o as ShieldCheck, p as Coins, r as Vote, s as Repeat, t as Zap, u as Image } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DuVwUyI7.js
var import_jsx_runtime = require_jsx_runtime();
var products = [
	{
		name: "AI Auto Trader",
		icon: Bot,
		status: "live",
		tint: "from-violet-400 to-fuchsia-400",
		desc: "Autonomous trader on Solana",
		url: "https://app.hyperscaleagent.xyz"
	},
	{
		name: "ChessFi",
		icon: Crown,
		status: "live",
		tint: "from-amber-400 to-orange-400",
		desc: "P2P & bot chess wagers on Base",
		url: "https://game.hyperscaleagent.xyz"
	},
	{
		name: "Sniper Agent",
		icon: Zap,
		status: "soon",
		tint: "from-yellow-400 to-amber-500",
		desc: "New launch sniping"
	},
	{
		name: "Yield Optimizer",
		icon: TrendingUp,
		status: "soon",
		tint: "from-emerald-400 to-teal-400",
		desc: "Auto-compound LPs"
	},
	{
		name: "Arbitrage Bot",
		icon: Repeat,
		status: "soon",
		tint: "from-sky-400 to-cyan-400",
		desc: "Cross-DEX arbitrage"
	},
	{
		name: "Portfolio AI",
		icon: Wallet,
		status: "soon",
		tint: "from-indigo-400 to-violet-400",
		desc: "Self-managed wallets"
	},
	{
		name: "MEV Guard",
		icon: ShieldCheck,
		status: "soon",
		tint: "from-rose-400 to-pink-400",
		desc: "Anti-MEV protection"
	},
	{
		name: "Signal Scanner",
		icon: Radar,
		status: "soon",
		tint: "from-cyan-400 to-blue-400",
		desc: "On-chain alpha radar"
	},
	{
		name: "Liquidity Hunter",
		icon: Coins,
		status: "soon",
		tint: "from-amber-400 to-yellow-500",
		desc: "Deep-pool discovery"
	},
	{
		name: "Copy Trade AI",
		icon: Network,
		status: "soon",
		tint: "from-fuchsia-400 to-purple-400",
		desc: "Mirror smart wallets"
	},
	{
		name: "Sentiment Engine",
		icon: Brain,
		status: "soon",
		tint: "from-pink-400 to-rose-400",
		desc: "Social alpha NLP"
	},
	{
		name: "Risk Manager",
		icon: Gauge,
		status: "soon",
		tint: "from-red-400 to-orange-500",
		desc: "Auto stop-loss agent"
	},
	{
		name: "NFT Sweeper",
		icon: Image,
		status: "soon",
		tint: "from-purple-400 to-indigo-400",
		desc: "Floor-sweep agent"
	},
	{
		name: "Airdrop Hunter",
		icon: Sparkles,
		status: "soon",
		tint: "from-lime-400 to-emerald-400",
		desc: "Farm qualifying actions"
	},
	{
		name: "DAO Voter",
		icon: Vote,
		status: "soon",
		tint: "from-blue-400 to-indigo-400",
		desc: "Auto-governance"
	},
	{
		name: "Strategy Studio",
		icon: ChartLine,
		status: "soon",
		tint: "from-teal-400 to-cyan-400",
		desc: "Build your own agent"
	}
];
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventStrip, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Nav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-6 h-16 flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#",
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-fuchsia-500 grid place-items-center text-primary-foreground font-bold",
					children: "H"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-hand text-2xl text-ink leading-none mt-1",
					children: "hyperscale"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#agents",
						className: "hover:text-foreground",
						children: "Agents"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#ecosystem",
						className: "hover:text-foreground",
						children: "Ecosystem"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#stats",
						className: "hover:text-foreground",
						children: "Network"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "hover:text-foreground",
						children: "Docs"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "hover:text-foreground",
						children: "Community"
					})
				]
			})]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative pt-20 pb-10 px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-5xl mx-auto text-center relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "font-hand text-ink leading-[0.95] text-5xl sm:text-6xl md:text-7xl lg:text-8xl",
					children: [
						"All your AI agents in",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hl-yellow",
							children: "one app."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "block mt-4",
							children: ["Autonomous, multichain, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "underline-scribble",
								children: "unstoppable!"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto",
					children: "Hyperscale is the agentic layer for crypto — deploy AI that trades across chains 24/7, plays on-chain chess on Base for stakes, and runs strategies while you sleep."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-wrap items-center justify-center gap-4 relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#agents",
						className: "rounded-lg bg-primary px-7 py-3.5 text-primary-foreground font-semibold hover:bg-primary/90 transition shadow-lg shadow-primary/20",
						children: "Explore Agents"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden lg:block absolute -right-8 top-0 translate-x-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							width: "90",
							height: "70",
							viewBox: "0 0 90 70",
							fill: "none",
							className: "text-primary/70",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M5 60 Q 30 30, 70 15 M 70 15 L 60 22 M 70 15 L 68 5",
								stroke: "currentColor",
								strokeWidth: "2",
								strokeLinecap: "round",
								fill: "none"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-scribble text-primary text-base leading-tight -mt-2 ml-8 w-44",
							children: [
								"0% fees",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"for early agents"
							]
						})]
					})]
				})
			]
		})
	});
}
function EventStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-6 pb-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-2xl mx-auto rounded-full border border-border bg-card shadow-sm px-5 py-3 flex items-center gap-3 text-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-flex w-2 h-2 rounded-full bg-emerald-500 animate-pulse" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold text-foreground",
					children: "Hyperscale Mainnet"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted-foreground",
					children: "— Live across Solana & Base"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#",
					className: "ml-auto text-primary font-semibold hover:underline",
					children: "Join →"
				})
			]
		})
	});
}
function ProductGrid() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "agents",
		className: "px-6 py-16 bg-gradient-to-b from-transparent to-secondary/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center mb-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-hand text-4xl sm:text-5xl text-ink",
					children: ["One platform. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hl-yellow",
						children: "Many agents."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted-foreground",
					children: "Two live products today. A whole agentic stack coming soon."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-5",
				children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { p }, p.name))
			})]
		})
	});
}
function ProductCard({ p }) {
	const Icon = p.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(p.url ? "a" : "div", {
		...p.url ? {
			href: p.url,
			target: "_blank",
			rel: "noopener noreferrer"
		} : {},
		className: "group relative bg-card rounded-2xl border border-border p-5 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${p.status === "live" ? "bg-emerald-100 text-emerald-700" : "bg-muted text-muted-foreground"}`,
				children: p.status === "live" ? "● Live" : "Soon"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `w-16 h-16 rounded-2xl bg-gradient-to-br ${p.tint} grid place-items-center mb-4 shadow-md`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "w-8 h-8 text-white",
					strokeWidth: 2.2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-semibold text-foreground text-sm",
				children: p.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground mt-1",
				children: p.desc
			})
		]
	});
}
function Stats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "stats",
		className: "px-6 py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-5xl mx-auto text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "font-hand text-4xl sm:text-5xl text-ink",
				children: ["Built for the ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "underline-scribble",
					children: "speed of crypto."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid grid-cols-2 md:grid-cols-4 gap-6",
				children: [
					{
						v: "24/7",
						l: "Autonomous uptime"
					},
					{
						v: "<400ms",
						l: "Multichain execution"
					},
					{
						v: "16+",
						l: "Agents in pipeline"
					},
					{
						v: "0%",
						l: "Idle capital"
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-card border border-border rounded-2xl p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-hand text-5xl text-primary",
						children: s.v
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 text-sm text-muted-foreground",
						children: s.l
					})]
				}, s.l))
			})]
		})
	});
}
function CTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-6 pb-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-primary via-fuchsia-700 to-violet-900 text-primary-foreground p-12 sm:p-16 text-center relative overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_30%,white,transparent_40%),radial-gradient(circle_at_80%_70%,#fde047,transparent_40%)]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "relative font-hand text-5xl sm:text-6xl",
					children: ["Ready to ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hl-yellow text-ink",
						children: "hyperscale?"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "relative mt-4 text-primary-foreground/80 max-w-xl mx-auto",
					children: "Deploy autonomous agents across Solana and Base in under 60 seconds. No code. Non-custodial. Multichain by default."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-8 flex flex-wrap justify-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#agents",
						className: "rounded-lg bg-background text-foreground px-7 py-3.5 font-semibold hover:bg-secondary transition",
						children: "Explore Agents"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "rounded-lg border border-white/30 px-7 py-3.5 font-semibold hover:bg-white/10 transition",
						children: "Read the docs"
					})]
				})
			]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border px-6 py-10 text-sm text-muted-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-7 h-7 rounded-md bg-gradient-to-br from-primary to-fuchsia-500 grid place-items-center text-primary-foreground font-bold text-xs",
						children: "H"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-hand text-xl text-ink leading-none mt-1",
						children: "hyperscale"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-2",
						children: "© 2026 · hyperscaleagent.xyz"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "hover:text-foreground",
						children: "Twitter"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "hover:text-foreground",
						children: "Discord"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "hover:text-foreground",
						children: "Docs"
					})
				]
			})]
		})
	});
}
//#endregion
export { Index as component };
