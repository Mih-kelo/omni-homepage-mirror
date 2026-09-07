import { ChamberSection } from "../ui/placards/ChamberSection";
import { WallText } from "../ui/placards/WallText";
import { Reveal } from "../ui/placards/Reveal";
import { BrandMark } from "../ui/chrome/BrandMark";
import { APP_URL, COPY } from "../config/copy";

/**
 * Chamber 4 — the Composition Hall. Understanding. The brief assembles
 * piece by visible piece; step 03 + the brief artifact.
 * Full-width editorial split: the message on the left,
 * the authentic brief artifact on the right.
 */
export function Composition() {
  return (
    <ChamberSection id="composition" justify="stretch">
      <div className="lx-bleed lx-split lx-split-top">
        <div style={{ display: "grid", gap: 24, alignContent: "center", height: "100%", maxWidth: 480 }}>
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
          </div>

          <Reveal delay={0.15}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              <span
                style={{
                  font: "500 12.5px/1.4 var(--lx-grotesk)",
                  padding: "7px 14px",
                  borderRadius: 999,
                  border: "1px solid var(--lx-hairline)",
                  background: "color-mix(in srgb, var(--lx-card-hi) 60%, var(--lx-bg))",
                  color: "var(--lx-ink)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <span>📦</span> The 1 Product to Sell
              </span>
              <span
                style={{
                  font: "500 12.5px/1.4 var(--lx-grotesk)",
                  padding: "7px 14px",
                  borderRadius: 999,
                  border: "1px solid var(--lx-hairline)",
                  background: "color-mix(in srgb, var(--lx-card-hi) 60%, var(--lx-bg))",
                  color: "var(--lx-ink)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <span>🎬</span> 3 Video Scripts to Film
              </span>
              <span
                style={{
                  font: "500 12.5px/1.4 var(--lx-grotesk)",
                  padding: "7px 14px",
                  borderRadius: 999,
                  border: "1px solid var(--lx-hairline)",
                  background: "color-mix(in srgb, var(--lx-card-hi) 60%, var(--lx-bg))",
                  color: "var(--lx-ink)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <span>💰</span> Exact Daily Budget
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div>
              <a
                href={APP_URL}
                className="lx-cta-major"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 24px",
                  fontSize: 14,
                }}
              >
                Get Your Free Ad Plan
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </Reveal>
        </div>

        <div style={{ display: "grid", gap: 20, alignContent: "center", height: "100%", width: "100%" }}>
          <Reveal delay={0.2}>
            {/* Authentic Omni Target Brief Document (matching actual PDF output) */}
            <div className="rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#12131d] text-slate-900 dark:text-slate-100 p-5 sm:p-7 shadow-2xl text-left font-sans w-full max-w-xl mx-auto space-y-4">
              {/* Document Header */}
              <div className="flex items-start justify-between pb-3 border-b border-slate-100 dark:border-white/10">
                <div className="flex items-center gap-2.5">
                  <BrandMark size={28} className="rounded-lg shadow-sm" />
                  <span className="font-extrabold text-[17px] tracking-tight text-indigo-600 dark:text-indigo-400">
                    Omni Target
                  </span>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2.5 py-0.5 rounded-full border border-indigo-200 dark:border-indigo-800/60 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-300 font-mono text-[9.5px] font-bold uppercase tracking-wider">
                    Ready-to-Run Brief
                  </span>
                  <div className="text-[10px] font-mono text-slate-400 mt-0.5">3 September 2026</div>
                </div>
              </div>

              {/* Title & Product Classification */}
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400 font-semibold block mb-0.5">
                  Pre-Spend Intelligence · Meta Campaign Plan
                </span>
                <h4 className="text-[22px] sm:text-[25px] font-extrabold text-indigo-600 dark:text-indigo-400 tracking-tight leading-tight">
                  The Everyday Starter Set
                </h4>
                <p className="text-[12px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  Audited from Past Shopify Orders
                </p>
                <div className="flex flex-wrap items-center gap-2 mt-2.5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-indigo-600 text-white text-[11px] font-semibold">
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                    Drive Website Sales
                  </span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-[11px] font-semibold">
                    Target New Customers Only
                  </span>
                </div>
              </div>

              {/* Launch Control Panel Frame */}
              <div className="rounded-xl border border-indigo-100 dark:border-white/10 bg-[#f8faff] dark:bg-white/[0.02] p-3.5 sm:p-4 space-y-3">
                <div className="flex items-center justify-between pb-1 border-b border-indigo-100/60 dark:border-white/5">
                  <span className="font-mono text-[10.5px] font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
                    <span>🧭</span> Meta Ads Copy-Paste Guide
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-[9px] font-mono font-bold uppercase tracking-wider">
                    3-Min Launch
                  </span>
                </div>

                {/* 4 Cards Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <div className="p-2.5 rounded-lg bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/5 shadow-xs">
                    <div className="text-[15px] font-extrabold text-slate-900 dark:text-white">$42<span className="text-[11px] font-normal text-slate-400">/day</span></div>
                    <div className="text-[8px] font-mono text-slate-400 uppercase mt-0.5">Starting Budget</div>
                    <div className="text-[9.5px] text-slate-600 dark:text-slate-300 mt-0.5">Start safe · Scale with sales</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/5 shadow-xs">
                    <div className="text-[15px] font-extrabold text-indigo-600 dark:text-indigo-400">Purchases</div>
                    <div className="text-[8px] font-mono text-slate-400 uppercase mt-0.5">Campaign Goal</div>
                    <div className="text-[9.5px] text-slate-600 dark:text-slate-300 mt-0.5">Optimized for real orders</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/5 shadow-xs">
                    <div className="text-[14px] font-extrabold text-slate-900 dark:text-white truncate">Starter Set</div>
                    <div className="text-[8px] font-mono text-slate-400 uppercase mt-0.5">Product to Sell</div>
                    <div className="text-[9.5px] text-slate-600 dark:text-slate-300 mt-0.5">72% First-Time Buyers</div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/5 shadow-xs">
                    <div className="text-[14px] font-extrabold text-indigo-600 dark:text-indigo-400">New Buyers</div>
                    <div className="text-[8px] font-mono text-slate-400 uppercase mt-0.5">Who Sees Your Ad</div>
                    <div className="text-[9.5px] text-slate-600 dark:text-slate-300 mt-0.5">Excludes past customers</div>
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
                        <span className="font-semibold text-slate-800 dark:text-slate-200">Sales (Website Purchases)</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-mono text-slate-400 uppercase block">Conversion Goal</span>
                        <span className="font-semibold text-slate-800 dark:text-slate-200">Purchases · Online Store</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 p-2 gap-1 sm:gap-4">
                      <div>
                        <span className="text-[9px] font-mono text-slate-400 uppercase block">Target Audience</span>
                        <span className="font-semibold text-slate-800 dark:text-slate-200">Women · Ages 22–40</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-mono text-slate-400 uppercase block">Target Locations</span>
                        <span className="font-semibold text-slate-800 dark:text-slate-200">Top Buying Cities (from store orders)</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 p-2 gap-1 sm:gap-4">
                      <div>
                        <span className="text-[9px] font-mono text-slate-400 uppercase block">Test Duration</span>
                        <span className="font-semibold text-slate-800 dark:text-slate-200">7 Days (First Test Run)</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-mono text-slate-400 uppercase block">Best Launch Time</span>
                        <span className="font-semibold text-slate-800 dark:text-slate-200">Sunday 8:00 PM (Before peak orders)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-2 flex items-center justify-end text-[11px] font-mono text-slate-400">
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                  <span>⚡</span> Generated in 60 seconds
                </span>
              </div>

            </div>
          </Reveal>
        </div>
      </div>
    </ChamberSection>
  );
}
