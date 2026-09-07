import { ChamberSection } from "../ui/placards/ChamberSection";
import { WallText } from "../ui/placards/WallText";
import { Reveal } from "../ui/placards/Reveal";
import { ThresholdLabels } from "./ThresholdLabels";
import { APP_URL, SHOPIFY_APP_URL, COPY } from "../config/copy";
import { ShopifyIcon } from "../../components/landing/ShopifyIcon";
import { LogoBar } from "../../components/landing/LogoBar";

/** Chamber 0 — the Threshold. Curiosity. The hero copy, staged in the field. */
export function Threshold() {
  return (
    <ChamberSection id="threshold" justify="center">
      <ThresholdLabels />
      <div
        className="lx-bleed"
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          textAlign: "center",
          display: "grid",
          gap: 28,
          justifyItems: "center",
          paddingTop: "clamp(20px, 4vh, 48px)",
        }}
      >
        <Reveal>
          <span className="lx-badge">{COPY.badge}</span>
        </Reveal>

        <WallText
          as="h1"
          className="lx-hero-wall"
          lines={[{ text: COPY.hero.titleA }, { text: COPY.hero.titleB, accent: true }]}
        />


        <Reveal delay={0.25}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
              <a className="lx-cta-major" href={APP_URL}>
                {COPY.hero.ctaPrimary}
                <span aria-hidden="true">→</span>
              </a>
              <a className="lx-cta-ghost" href="#chamber-paradox">
                {COPY.hero.ctaSecondary}
              </a>
            </div>

            <p
              className="lx-mono"
              style={{
                fontSize: 11.5,
                color: "var(--lx-ink-faint)",
                letterSpacing: "0.06em",
                margin: 0,
              }}
            >
              {COPY.hero.ctaNote}
            </p>

            {/* High-Converting Trust Pill & App Store Action */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3.5 text-xs pt-1">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.03] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/10 text-slate-700 dark:text-slate-300 shadow-xs">
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
                Install on App Store
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="w-full pt-6">
            <LogoBar className="py-2" />
          </div>
        </Reveal>
      </div>
    </ChamberSection>
  );
}
