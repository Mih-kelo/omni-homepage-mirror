import { ChamberSection } from "../ui/placards/ChamberSection";
import { WallText } from "../ui/placards/WallText";
import { Reveal } from "../ui/placards/Reveal";
import { HeroIntelligence } from "../ui/hero/HeroIntelligence";
import { ThresholdLabels } from "./ThresholdLabels";
import { APP_URL, SHOPIFY_APP_URL, COPY } from "../config/copy";
import { ShopifyIcon } from "../../components/landing/ShopifyIcon";
import { TrustBar } from "../../components/landing/TrustBar";

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
                <a className="lx-cta-ghost" href="#chamber-listening">
                  {COPY.hero.ctaSecondary}
                </a>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 14, flexWrap: "wrap" }}>
                <ShopifyIcon size={16} style={{ color: "#95BF47" }} />
                <span className="lx-mono" style={{ fontSize: 11, color: "var(--lx-ink-soft)" }}>
                  {COPY.hero.ctaNote}
                </span>
                <span className="lx-mono" style={{ fontSize: 11, color: "var(--lx-ink-faint)" }}>·</span>
                <a
                  href={SHOPIFY_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lx-mono"
                  style={{ fontSize: 11, color: "var(--lx-accent)", textDecoration: "underline" }}
                >
                  Install via App Store ↗
                </a>
              </div>
              <TrustBar style={{ marginTop: 22 }} />
            </div>
          </Reveal>
        </div>
        {/* right column — the living intelligence lattice */}
        <HeroIntelligence />
      </div>
    </ChamberSection>
  );
}
