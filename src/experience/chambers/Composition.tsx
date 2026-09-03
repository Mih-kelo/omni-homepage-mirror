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
            <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-[#0c0c12] text-white p-5 sm:p-6 shadow-2xl space-y-4 text-left font-sans w-full max-w-lg mx-auto">
              {/* Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-emerald-400 font-semibold">
                      Omni Target Insight Engine
                    </span>
                  </div>
                  <h4 className="text-[16px] font-bold tracking-tight text-white mt-0.5">
                    Launch-Ready Campaign Brief
                  </h4>
                  <p className="text-[11px] text-white/40 font-mono">
                    Goal: Drive Website Sales · Anonymized Store Case
                  </p>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-mono font-semibold uppercase">
                  Launch Ready
                </div>
              </div>

              {/* Section 1: Gateway Product & Insight */}
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9.5px] uppercase tracking-wider text-emerald-400 font-bold">
                    Gateway Product Identified
                  </span>
                  <span className="text-[10.5px] font-mono text-white/50">64% First-Time Buyers</span>
                </div>
                <div className="text-[13.5px] font-bold text-white">The Essential Relaxed Slip Dress</div>
                <p className="text-[11.5px] text-white/60 leading-relaxed">
                  High impulse interest, zero fit anxiety. Converts strangers on cold Meta traffic without heavy discounts.
                </p>
              </div>

              {/* Section 2: Creative Video Hooks */}
              <div className="space-y-1.5">
                <span className="font-mono text-[9.5px] uppercase tracking-wider text-white/40 font-semibold block">
                  3 Tailored Creative Video Hooks
                </span>
                <div className="space-y-1">
                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.05] text-[11.5px] text-white/80 leading-snug">
                    <span className="text-indigo-400 font-mono font-bold mr-1.5">01</span>
                    &ldquo;The one piece that quietly outsells everything else in our store.&rdquo;
                  </div>
                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.05] text-[11.5px] text-white/80 leading-snug">
                    <span className="text-indigo-400 font-mono font-bold mr-1.5">02</span>
                    &ldquo;Why 1,400+ first-time buyers picked this on their very first visit.&rdquo;
                  </div>
                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.05] text-[11.5px] text-white/80 leading-snug">
                    <span className="text-indigo-400 font-mono font-bold mr-1.5">03</span>
                    &ldquo;Stop scrolling if you&rsquo;re tired of pieces that lose their shape after two washes.&rdquo;
                  </div>
                </div>
              </div>

              {/* Section 3: Meta Settings & Test Budget */}
              <div className="grid grid-cols-2 gap-2 pt-0.5">
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                  <span className="text-[9.5px] font-mono text-white/40 uppercase block">Campaign Setup</span>
                  <span className="text-[11.5px] font-semibold text-white/90">Manual Sales (Advantage+)</span>
                  <span className="text-[10px] text-emerald-400 block font-mono">Event: AddToCart (7d)</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                  <span className="text-[9.5px] font-mono text-white/40 uppercase block">Calibrated Test Budget</span>
                  <span className="text-[11.5px] font-semibold text-white/90">$42 / day</span>
                  <span className="text-[10px] text-white/40 block font-mono">Scale at 1.8x ROAS</span>
                </div>
              </div>

              {/* Export action bar */}
              <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-[10.5px] font-mono text-white/50">
                <span className="flex items-center gap-1.5 text-white/70 font-medium">
                  <span>📄</span> Branded PDF Export Included
                </span>
                <span className="text-emerald-400 font-semibold">Generated in 60s</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </ChamberSection>
  );
}
