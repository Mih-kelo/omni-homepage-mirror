import { BriefTerminal } from "./BriefTerminal";
import { Logo } from "./Logo";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden border-b border-border">
      <div aria-hidden className="bg-grid absolute inset-0 opacity-100" />
      <div aria-hidden className="hero-glow" />

      <nav className="relative z-10 mx-auto flex max-w-[1280px] items-center justify-between px-6 py-6 lg:px-12">
        <Logo size={30} />
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
          v1.0 · private beta
        </span>
      </nav>

      <div className="relative z-10 mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-16 px-6 pb-24 pt-12 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:px-12 lg:pt-20">
        <div className="rise-in">
          <span
            className="inline-block rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em]"
            style={{
              background: "rgba(109,40,217,0.12)",
              borderColor: "rgba(109,40,217,0.35)",
              color: "var(--primary-light)",
            }}
          >
            Shopify store intelligence · Free 60s AI Audit
          </span>

          <h1
            className="mt-8 font-serif font-black text-white"
            style={{
              fontSize: "clamp(42px, 7.2vw, 84px)",
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
            }}
          >
            Pre-Spend Intelligence for Shopify
            <br />
            <span className="text-[var(--primary-mid)]">Merchants.</span>
          </h1>

          <p className="mt-7 max-w-[500px] text-[18px] leading-[1.55] text-white/[0.60]">
            Pre-spend intelligence means knowing what converts before you spend $1 on Meta. Omni Target
            turns your real Shopify sales data into an agency-grade Meta Ads brief in 3 minutes — complete with
            your winning gateway product, 3 custom video hooks, and a calibrated testing budget.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a href="https://app.omnitarget.co/login" className="cta-premium group">
              <span className="cta-premium-inner">
                <span className="cta-premium-label">Open Omni Target</span>
                <span aria-hidden className="cta-premium-arrow">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M1 7h11M7.5 2.5L12 7l-4.5 4.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </span>
            </a>
            <a
              href="https://apps.shopify.com/omni-target"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-3 text-[14px] font-medium text-white/80 transition-colors hover:border-white/30 hover:text-white"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#95BF47]">
                <path d="M15.337 2.06c-.027-.14-.144-.242-.286-.248-.144-.008-.258.077-.311.206l-2.025 4.887a1.002 1.002 0 01-.424.475l-4.593 2.652c-.122.07-.183.21-.148.345.034.135.15.228.289.228h1.272l1.674 8.797c.026.136.144.236.282.236h3.407c.138 0 .256-.1.282-.236l1.674-8.797h1.365c.139 0 .255-.093.289-.228.035-.135-.026-.275-.148-.345l-4.593-2.652a1.002 1.002 0 01-.424-.475l-2.026-4.887zM4.148 10.378l2.008 10.551a1.5 1.5 0 001.472 1.221h8.744a1.5 1.5 0 001.472-1.221l2.008-10.551H4.148z"/>
              </svg>
              <span>Install on Shopify</span>
            </a>
            <a href="#how" className="text-[14px] text-white/60 transition-colors hover:text-white">
              See how it works →
            </a>
          </div>
          <p className="mt-4 font-mono text-[11px] tracking-wide text-white/40">
            Includes 1 free ad brief & 60s AI store audit · No credit card required
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <BriefTerminal />
        </div>
      </div>
    </section>
  );
}
