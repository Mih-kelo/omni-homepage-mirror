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
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 16, flexWrap: "wrap" }}>
                <ShopifyIcon size={16} style={{ color: "#95BF47" }} />
                <span style={{ fontSize: 12.5, color: "var(--lx-ink-soft)", fontWeight: 500 }}>
                  Official Shopify App · 1 Free Brief on Install
                </span>
                <span style={{ opacity: 0.3 }}>·</span>
                <a
                  href={SHOPIFY_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: 12.5, color: "var(--lx-accent)", textDecoration: "underline" }}
                >
                  Install from App Store ↗
                </a>
              </div>
            </div>
          </Reveal>
        </div>
        {/* right column — live Meta brief preview mockup */}
        <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <HeroBriefPreview />
        </div>
      </div>
      {/* Ecosystem Logo Strip matching user reference image */}
      <LogoBar className="mt-8 md:mt-16" />
    </ChamberSection>
  );
}
