import { ChamberSection } from "../ui/placards/ChamberSection";
import { WallText } from "../ui/placards/WallText";
import { Reveal } from "../ui/placards/Reveal";
import { HeroIntelligence } from "../ui/hero/HeroIntelligence";
import { ThresholdLabels } from "./ThresholdLabels";
import { APP_URL, SHOPIFY_APP_URL, COPY } from "../config/copy";

/** Chamber 0 — the Threshold. Curiosity. The hero copy, staged in the field. */
export function Threshold() {
  return (
    <ChamberSection id="threshold" justify="stretch">
      <ThresholdLabels />
      <div className="lx-bleed lx-split lx-split-top" style={{ alignItems: "center" }}>
        <div style={{ display: "grid", gap: 28 }}>
          <Reveal>
            <span className="lx-badge">{COPY.badge}</span>
          </Reveal>
          <WallText
            as="h1"
            lines={[{ text: COPY.hero.titleA }, { text: COPY.hero.titleB, accent: true }]}
          />
          <Reveal delay={0.25}>
            <p className="lx-lede">{COPY.hero.body}</p>
          </Reveal>
          <Reveal delay={0.4}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" }}>
                <a className="lx-cta-major" href={APP_URL}>
                  {COPY.hero.ctaPrimary}
                  <span aria-hidden="true">→</span>
                </a>
                <a
                  className="lx-cta-ghost"
                  href={SHOPIFY_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#95BF47" }}>
                    <path d="M15.337 2.06c-.027-.14-.144-.242-.286-.248-.144-.008-.258.077-.311.206l-2.025 4.887a1.002 1.002 0 01-.424.475l-4.593 2.652c-.122.07-.183.21-.148.345.034.135.15.228.289.228h1.272l1.674 8.797c.026.136.144.236.282.236h3.407c.138 0 .256-.1.282-.236l1.674-8.797h1.365c.139 0 .255-.093.289-.228.035-.135-.026-.275-.148-.345l-4.593-2.652a1.002 1.002 0 01-.424-.475l-2.026-4.887zM4.148 10.378l2.008 10.551a1.5 1.5 0 001.472 1.221h8.744a1.5 1.5 0 001.472-1.221l2.008-10.551H4.148z"/>
                  </svg>
                  {COPY.hero.shopifyBadge}
                </a>
                <a className="lx-cta-ghost" href="#chamber-listening">
                  {COPY.hero.ctaSecondary}
                </a>
              </div>
              <p className="lx-mono" style={{ fontSize: 11, color: "var(--lx-ink-faint)", marginTop: 14 }}>
                {COPY.hero.ctaNote}
              </p>
            </div>
          </Reveal>
        </div>
        {/* right column — the living intelligence lattice */}
        <HeroIntelligence />
      </div>
    </ChamberSection>
  );
}
