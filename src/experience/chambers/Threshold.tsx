import { ChamberSection } from "../ui/placards/ChamberSection";
import { WallText } from "../ui/placards/WallText";
import { Reveal } from "../ui/placards/Reveal";
import { ThresholdLabels } from "./ThresholdLabels";
import { APP_URL, SHOPIFY_APP_URL, COPY } from "../config/copy";
import { ShopifyIcon } from "../../components/landing/ShopifyIcon";
import { LogoBar } from "../../components/landing/LogoBar";
import { HeroBriefPreview } from "../../components/landing/HeroBriefPreview";

/** Chamber 0 — the Threshold. Curiosity. The hero copy, staged in the field. */
export function Threshold() {
  return (
    <ChamberSection id="threshold" justify="stretch">
      <ThresholdLabels />
      <div className="lx-bleed lx-split lx-split-top" style={{ alignItems: "center" }}>
        <div style={{ display: "grid", gap: 24 }}>
          <Reveal>
            <span className="lx-badge">{COPY.badge}</span>
          </Reveal>
          <WallText
            as="h1"
            lines={[{ text: COPY.hero.titleA }, { text: COPY.hero.titleB, accent: true }]}
          />
          <Reveal delay={0.25}>
            <p className="lx-lede" style={{ maxWidth: 520 }}>{COPY.hero.body}</p>
          </Reveal>
          <Reveal delay={0.4}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" }}>
                <a className="lx-cta-major" href={APP_URL}>
                  {COPY.hero.ctaPrimary}
                  <span aria-hidden="true">→</span>
                </a>
                <a className="lx-cta-ghost" href="#chamber-listening">
                  {COPY.hero.ctaSecondary}
                </a>
              </div>
              {/* High-Converting Trust Pill & App Store Action */}
              <div className="mt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5 text-xs">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/[0.03] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/10 text-slate-700 dark:text-slate-300 shadow-xs">
                  <ShopifyIcon size={15} style={{ color: "#95BF47" }} className="shrink-0" />
                  <span className="font-semibold text-slate-900 dark:text-white">Official Shopify App</span>
                  <span className="opacity-30">·</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">1 Free Brief on Install</span>
                </div>
                <a
                  href={SHOPIFY_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] text-indigo-600 dark:text-indigo-400 hover:underline font-medium inline-flex items-center gap-1"
                >
                  Install from App Store
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
              {/* Mobile-only ecosystem trust strip directly under CTA stack */}
              <div className="block lg:hidden pt-5">
                <LogoBar className="py-2" />
              </div>
            </div>
          </Reveal>
        </div>
        {/* right column — live Meta brief preview mockup */}
        <div className="mt-8 lg:mt-0 flex flex-col items-center w-full">
          <div className="block lg:hidden mb-3 text-center">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-black/40 dark:text-white/40">
              Deliverable Preview · Ready in 3 Minutes
            </span>
          </div>
          <HeroBriefPreview />
        </div>
      </div>
      {/* Desktop ecosystem logo strip spanning bottom */}
      <div className="hidden lg:block">
        <LogoBar className="mt-14 mb-4" />
      </div>
    </ChamberSection>
  );
}
