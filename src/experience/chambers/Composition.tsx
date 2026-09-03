import { ChamberSection } from "../ui/placards/ChamberSection";
import { WallText } from "../ui/placards/WallText";
import { Reveal } from "../ui/placards/Reveal";
import { COPY } from "../config/copy";

/**
 * Chamber 4 — the Composition Hall. Understanding. The brief assembles
 * piece by visible piece; step 03 + "what you get" + the brief rows,
 * all verbatim. Full-width editorial split: the argument on the left,
 * the artifact on the right. Text always wins (no rings behind it).
 */
export function Composition() {
  return (
    <ChamberSection id="composition" justify="stretch">
      <div className="lx-bleed lx-split lx-split-top">
        <div style={{ display: "grid", gap: 26, alignContent: "center", height: "100%" }}>
          <div>
            <Reveal>
              <span className="lx-mono">{COPY.whatYouGet.eyebrow}</span>
            </Reveal>
            <WallText
              lines={[
                { text: COPY.whatYouGet.titleA },
                { text: COPY.whatYouGet.titleB, accent: true },
              ]}
            />
            <Reveal delay={0.2}>
              <p className="lx-lede" style={{ marginTop: 14 }}>
                {COPY.whatYouGet.body}
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <ul className="lx-checks">
              {COPY.whatYouGet.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div style={{ display: "grid", gap: 20, alignContent: "center", height: "100%", width: "100%" }}>
          <Reveal delay={0.2}>
            {/* Authentic Omni Target Brief Document (matching actual PDF output) */}
            <div className="rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#12131d] text-slate-900 dark:text-slate-100 p-5 sm:p-7 shadow-2xl text-left font-sans w-full max-w-xl mx-auto space-y-4">
              {/* Document Header */}
              <div className="flex items-start justify-between pb-3 border-b border-slate-100 dark:border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="h-7 w-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-[13px] shadow-sm">
                    Ω
                  </div>
                  <span className="font-extrabold text-[17px] tracking-tight text-indigo-600 dark:text-indigo-400">
                    Omni Target
                  </span>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2.5 py-0.5 rounded-full border border-indigo-200 dark:border-indigo-800/60 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-300 font-mono text-[9.5px] font-bold uppercase tracking-wider">
                    Advantage+ Brief
                  </span>
                  <div className="text-[10px] font-mono text-slate-400 mt-0.5">3 September 2026</div>
                </div>
              </div>

              {/* Title & Product Classification */}
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400 font-semibold block mb-0.5">
                  Meta Advantage+ AI Brief
                </span>
                <h4 className="text-[22px] sm:text-[25px] font-extrabold text-indigo-600 dark:text-indigo-400 tracking-tight leading-tight">
                  The Essential Gateway Set
                </h4>
                <p className="text-[12px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  by Anonymized Shopify Store
                </p>
                <div className="flex flex-wrap items-center gap-2 mt-2.5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-indigo-600 text-white text-[11px] font-semibold">
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                    Drive Website Sales
                  </span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-[11px] font-semibold">
                    Manual Sales with Advantage+ Audience
                  </span>
                </div>
              </div>

              {/* Launch Control Panel Frame */}
              <div className="rounded-xl border border-indigo-100 dark:border-white/10 bg-[#f8faff] dark:bg-white/[0.02] p-3.5 sm:p-4 space-y-3">
                <div className="flex items-center justify-between pb-1 border-b border-indigo-100/60 dark:border-white/5">
                  <span className="font-mono text-[10.5px] font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
                    <span>🧭</span> Meta Ads Launch Control Panel
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-[9px] font-mono font-bold uppercase tracking-wider">
                    Fast 3-Min Setup
                  </span>
                </div>

                {/* 4 Cards Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <div className="p-2.5 rounded-lg bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/5 shadow-xs">
                    <div className="text-[15px] font-extrabold text-slate-900 dark:text-white">$42<span className="text-[11px] font-normal text-slate-400">/day</span></div>
                    <div className="text-[8px] font-mono text-slate-400 uppercase mt-0.5">Recommended Budget</div>
                    <div className="text-[9.5px] text-slate-600 dark:text-slate-300 mt-0.5">Sweet Spot · 1 Ad Set</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/5 shadow-xs">
                    <div className="text-[15px] font-extrabold text-indigo-600 dark:text-indigo-400">Add to Cart</div>
                    <div className="text-[8px] font-mono text-slate-400 uppercase mt-0.5">Optimization Event</div>
                    <div className="text-[9.5px] text-slate-600 dark:text-slate-300 mt-0.5">Builds buyer data fast</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/5 shadow-xs">
                    <div className="text-[14px] font-extrabold text-slate-900 dark:text-white truncate">Gateway Set</div>
                    <div className="text-[8px] font-mono text-slate-400 uppercase mt-0.5">Featured Product</div>
                    <div className="text-[9.5px] text-slate-600 dark:text-slate-300 mt-0.5">64% First-Time Buyers</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/5 shadow-xs">
                    <div className="text-[14px] font-extrabold text-indigo-600 dark:text-indigo-400 truncate">Manual Sales</div>
                    <div className="text-[8px] font-mono text-slate-400 uppercase mt-0.5">Campaign Type</div>
                    <div className="text-[9.5px] text-slate-600 dark:text-slate-300 mt-0.5">Targeted Setup</div>
                  </div>
                </div>

                {/* Settings Table */}
                <div className="rounded-lg border border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#161722] overflow-hidden text-[11px]">
                  <div className="bg-slate-50 dark:bg-white/[0.03] px-3 py-1.5 border-b border-slate-100 dark:border-white/5 font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold">
                    Settings to Copy into Meta Ads Manager
                  </div>
                  <div className="divide-y divide-slate-100 dark:divide-white/5 p-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 p-2 gap-1 sm:gap-4">
                      <div>
                        <span className="text-[9px] font-mono text-slate-400 uppercase block">Campaign Objective</span>
                        <span className="font-semibold text-slate-800 dark:text-slate-200">Sales · Manual Advantage+</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-mono text-slate-400 uppercase block">Conversion Goal</span>
                        <span className="font-semibold text-slate-800 dark:text-slate-200">Add to Cart · Website</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 p-2 gap-1 sm:gap-4">
                      <div>
                        <span className="text-[9px] font-mono text-slate-400 uppercase block">Target Audience</span>
                        <span className="font-semibold text-slate-800 dark:text-slate-200">Women · Ages 22–40</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-mono text-slate-400 uppercase block">Target Metros</span>
                        <span className="font-semibold text-slate-800 dark:text-slate-200">Top Buying Metros (from orders)</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 p-2 gap-1 sm:gap-4">
                      <div>
                        <span className="text-[9px] font-mono text-slate-400 uppercase block">Test Duration</span>
                        <span className="font-semibold text-slate-800 dark:text-slate-200">7 Days · 1 Ad Set</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-mono text-slate-400 uppercase block">Best Launch Time</span>
                        <span className="font-semibold text-slate-800 dark:text-slate-200">Midnight before peak day</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 font-medium">
                  <span>📄</span> Branded PDF Export Included
                </span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Generated in 60 seconds</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </ChamberSection>
  );
}
