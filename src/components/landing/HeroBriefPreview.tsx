import { useState, type CSSProperties } from "react";

interface AuditCase {
  id: string;
  tabLabel: string;
  tabLabelShort: string;
  orderCount: string;
  adReadiness: number;
  gatewayProduct: string;
  firstTimeBuyerRate: string;
  aov: string;
  roas: string;
  hooks: [string, string, string];
  campaign: string;
  event: string;
  budget: string;
}

const AUDIT_CASES: AuditCase[] = [
  {
    id: "apparel",
    tabLabel: "Case 01 · Apparel (1.4k Orders)",
    tabLabelShort: "Apparel (1.4k)",
    orderCount: "1,420 Shopify Orders",
    adReadiness: 94,
    gatewayProduct: "Heavyweight Essential Tee",
    firstTimeBuyerRate: "68% First-Time Buyers",
    aov: "$44 AOV",
    roas: "2.4x ROAS",
    hooks: [
      "The one piece that quietly outsells everything else in our store.",
      "Why 1,400+ first-time buyers picked this on their very first visit.",
      "Stop scrolling if you’re tired of tees that lose their collar after 2 washes.",
    ],
    campaign: "Manual Sales",
    event: "Add to Cart · 7d",
    budget: "$42 / day",
  },
  {
    id: "skincare",
    tabLabel: "Case 02 · Skincare (2.8k Orders)",
    tabLabelShort: "Skincare (2.8k)",
    orderCount: "2,840 Shopify Orders",
    adReadiness: 96,
    gatewayProduct: "Barrier Repair Hydration Serum",
    firstTimeBuyerRate: "74% First-Time Buyers",
    aov: "$38 AOV",
    roas: "2.9x ROAS",
    hooks: [
      "If your skin barrier feels tight by 2 PM, your moisturizer isn't the problem.",
      "The exact formula our dermatologists recommended after 2,800 customer trials.",
      "Stop layering 5 serums—you only need this one active barrier repair.",
    ],
    campaign: "Manual Sales (Adv+)",
    event: "Add to Cart · 7d",
    budget: "$35 / day",
  },
  {
    id: "jewelry",
    tabLabel: "Case 03 · Jewelry (950 Orders)",
    tabLabelShort: "Jewelry (950)",
    orderCount: "950 Shopify Orders",
    adReadiness: 98,
    gatewayProduct: "Waterproof Daily Chain Necklace",
    firstTimeBuyerRate: "81% First-Time Buyers",
    aov: "$32 AOV",
    roas: "3.2x ROAS",
    hooks: [
      "The shower-proof chain you literally never have to take off.",
      "Why 900+ customers bought this as their very first piece from us.",
      "Real 18k gold PVD coating that doesn't turn your skin green. Period.",
    ],
    campaign: "Manual Sales (Adv+)",
    event: "Purchase · 7d",
    budget: "$28 / day",
  },
];

export function HeroBriefPreview({ style, className = "" }: { style?: CSSProperties; className?: string }) {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const activeCase = AUDIT_CASES[activeCaseIndex];

  return (
    <div className="w-full max-w-[540px] space-y-2.5 text-left">
      {/* Interactive Niche Switcher Tabs */}
      <div className="flex items-center justify-between p-1 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/10 backdrop-blur-md">
        {AUDIT_CASES.map((item, idx) => {
          const isActive = idx === activeCaseIndex;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveCaseIndex(idx)}
              className={`flex-1 py-1.5 px-2 sm:px-3 rounded-lg text-[11px] sm:text-[12px] font-medium transition-all duration-200 cursor-pointer text-center ${
                isActive
                  ? "bg-[#0d0d16] text-white shadow-md border border-white/10 font-semibold"
                  : "text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
              }`}
            >
              <span className="hidden sm:inline">{item.tabLabel}</span>
              <span className="inline sm:hidden">{item.tabLabelShort}</span>
            </button>
          );
        })}
      </div>

      {/* Main Deliverable Card */}
      <div
        className={`w-full rounded-2xl border border-white/15 bg-[#0d0d16]/95 p-4 sm:p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 ${className}`}
        style={{
          boxShadow: "0 24px 60px -12px rgba(99, 102, 241, 0.18), 0 0 1px 1px rgba(255, 255, 255, 0.1)",
          ...style,
        }}
      >
        {/* Card Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3.5">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
            <span className="font-mono text-[11.5px] sm:text-[12px] font-medium tracking-wide text-white/90">
              Generated Meta Brief · 60s Audit
            </span>
          </div>
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10.5px] sm:text-[11px] font-semibold text-emerald-400">
            Ad Readiness: {activeCase.adReadiness}/100
          </span>
        </div>

        {/* Gateway Product Spotlight */}
        <div className="mt-3.5 rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-3 sm:p-3.5">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] sm:text-[10.5px] uppercase tracking-wider text-indigo-400">
              Top Gateway Product
            </span>
            <span className="font-mono text-[10.5px] font-medium text-emerald-400">
              {activeCase.firstTimeBuyerRate}
            </span>
          </div>
          <div className="mt-1 flex items-baseline justify-between gap-2">
            <span className="font-serif text-[16px] sm:text-[17px] font-bold text-white truncate">
              {activeCase.gatewayProduct}
            </span>
            <span className="font-mono text-[11.5px] sm:text-[12px] text-white/50 shrink-0">
              {activeCase.aov} · {activeCase.roas}
            </span>
          </div>
        </div>

        {/* 3 AI Video Hooks */}
        <div className="mt-3.5 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] sm:text-[10.5px] uppercase tracking-wider text-white/40">
              3 Tailored Creative Hooks
            </span>
            <span className="font-mono text-[9.5px] text-white/30">
              {activeCase.orderCount}
            </span>
          </div>
          <div className="space-y-1.5 font-sans text-[12px] sm:text-[12.5px] text-white/80">
            {activeCase.hooks.map((hook, i) => (
              <div
                key={hook}
                className="flex items-start gap-2 rounded-lg bg-white/[0.03] p-2 border border-white/5 transition-opacity duration-200"
              >
                <span className="font-mono text-[10px] font-bold text-indigo-400 mt-0.5 shrink-0">
                  0{i + 1}
                </span>
                <span>&ldquo;{hook}&rdquo;</span>
              </div>
            ))}
          </div>
        </div>

        {/* Campaign Setup Blueprint */}
        <div className="mt-3.5 grid grid-cols-3 gap-2 border-t border-white/10 pt-3 text-center">
          <div className="rounded-lg bg-white/[0.02] p-2 border border-white/5">
            <div className="font-mono text-[9.5px] sm:text-[10px] uppercase text-white/40">Campaign</div>
            <div className="mt-0.5 text-[10.5px] sm:text-[11px] font-semibold text-white/90 truncate">
              {activeCase.campaign}
            </div>
          </div>
          <div className="rounded-lg bg-white/[0.02] p-2 border border-white/5">
            <div className="font-mono text-[9.5px] sm:text-[10px] uppercase text-white/40">Event</div>
            <div className="mt-0.5 text-[10.5px] sm:text-[11px] font-semibold text-emerald-400 truncate">
              {activeCase.event}
            </div>
          </div>
          <div className="rounded-lg bg-white/[0.02] p-2 border border-white/5">
            <div className="font-mono text-[9.5px] sm:text-[10px] uppercase text-white/40">Test Budget</div>
            <div className="mt-0.5 text-[10.5px] sm:text-[11px] font-semibold text-indigo-300 truncate">
              {activeCase.budget}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
