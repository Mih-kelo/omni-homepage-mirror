/**
 * The complete text content of the experience — carried VERBATIM from the
 * production landing components (Hero, HowItWorks, ColdTrafficParadox,
 * WhatYouGet, WhoItsFor, Pricing, BriefTerminal, Footer). Per direction,
 * the existing app copy is the single source of truth for words; the
 * chambers stage this copy cinematically. No new narrative copy is invented.
 */

export const APP_URL = "https://app.omnitarget.co/login";
export const SHOPIFY_APP_URL = "https://apps.shopify.com/omni-target";

export interface ParadoxCard {
  label: string;
  name: string;
  rows: ReadonlyArray<readonly [string, string]>;
  verdict: string;
}

export interface BriefRow {
  k: string;
  v: string;
  highlight?: boolean;
}

export const COPY = {
  badge: "Pre-Spend Intelligence for Shopify · Free 60s AI Audit",

  hero: {
    titleA: "Know what converts before you",
    titleB: "spend $1 on Meta.",
    body: "Omni Target turns your real Shopify sales data into a launch-ready Meta Ads brief in 3 minutes — pinpointing your winning gateway product, 3 custom video hooks, exact campaign settings, and a calibrated testing budget.",
    ctaPrimary: "Start Free Store Audit",
    ctaSecondary: "See how it works →",
    ctaNote: "Official Shopify Partner · 30s Read-Only Setup · No credit card required",
    shopifyBadge: "Install on Shopify App Store",
  },

  howItWorks: {
    eyebrow: "How it works",
    titleA: "From store to brief",
    titleB: "in three simple steps.",
    steps: [
      {
        n: "01",
        t: "Connect Shopify in 30 seconds",
        d: "Safe 1-click install with read-only access. We never modify your catalog or touch your customer data.",
      },
      {
        n: "02",
        t: "AI Store Audit & Intelligence Engine",
        d: "Runs an instant 60-second store audit with your Ad Readiness Score (0–100), identifies gateway products, calculates first-time buyer ratios, and maps repeat purchase patterns.",
      },
      {
        n: "03",
        t: "Get your launch-ready Meta brief",
        d: "Winning gateway product, audience targeting, 3 scroll-stopping video hooks, exact Meta campaign settings, and dynamic daily testing budget — exported as a branded PDF.",
      },
    ],
  },

  paradox: {
    eyebrow: "The cold traffic paradox",
    titleA: "Your bestseller is not",
    titleB: "your gateway product.",
    bestseller: {
      label: "Organic bestseller",
      name: "Product A",
      rows: [
        ["First-time buyers", "12%"],
        ["Average order value", "$640"],
        ["Cold-traffic ROAS", "0.6x"],
      ] as const,
      verdict: "Retention piece",
    },
    gateway: {
      label: "Gateway product",
      name: "Product B",
      rows: [
        ["First-time buyers", "64%"],
        ["Average order value", "$110"],
        ["Cold-traffic ROAS", "2.4x"],
      ] as const,
      verdict: "Acquisition engine.",
    },
    closing:
      "The product your existing fans buy is rarely the one that earns you a new customer. Omni Target finds the exact gateway item strangers buy on first click.",
  },

  /* the Range chamber's supporting copy — added in the July 2026 polish
     pass so the two figures carry their own context (the one place new
     narrative copy was commissioned; everything else stays verbatim) */
  range: {
    eyebrow: "Proof before spend",
    context:
      "A pilot store's gateway product, sent at cold traffic and measured against the store's own baseline — the read you get before committing budget.",
    roas: {
      label: "Cold-traffic ROAS",
      note: "Every $1 of cold-traffic spend returned $2.40 — from audiences who had never met the brand.",
    },
    firstTime: {
      label: "First-time buyers",
      note: "Nearly two of every three orders came from brand-new customers, not returning ones.",
    },
  },

  whatYouGet: {
    eyebrow: "What you get",
    titleA: "A complete brief.",
    titleB: "Nothing missing.",
    body: "Everything a founder or media buyer needs to launch profitably on day one — derived from your store data, not templates.",
    items: [
      "Gateway product identified from real first-time buyer data",
      "3 scroll-stopping video hooks tailored to your actual buyers",
      "Creative format blueprint ranked by likelihood to convert",
      "Exact Meta campaign settings (objective & optimization event)",
      "Daily testing budget calibrated to your store's volume",
    ],
  },

  brief: {
    window: "brief.omnitarget",
    rows: [
      { k: "store", v: "Pilot Brand (NDA)" },
      { k: "gateway", v: "Product B", highlight: true },
      { k: "format", v: "Manual Sales (AI Guided)" },
      { k: "hook 01", v: '"The one piece that quietly outsells everything."' },
      { k: "optimize", v: "Add to Cart · 7d click" },
      { k: "budget", v: "$42 / day · scale at ROAS 1.8" },
    ] as ReadonlyArray<BriefRow>,
    generated: "generated in 4.2s",
  },

  whoItsFor: {
    eyebrow: "Who it's for",
    titleA: "Built for modern Shopify brands",
    titleB: "and growth teams.",
    tags: [
      "Shopify-native",
      "DTC founders & operators",
      "Performance marketers",
      "Product & drop launches",
      "Bootstrap to scaling",
    ],
    disclaimer:
      "For founders and media buyers who are tired of guessing what will convert on Meta. Whether you launch ads in-house or collaborate with an agency partner, Omni Target turns raw store data into an agency-grade ad blueprint before you commit budget.",
  },

  pricing: {
    eyebrow: "Simple Pricing",
    titleA: "Flexible credit packs.",
    titleB: "No recurring subscriptions.",
    plans: [
      {
        name: "Free Plan",
        price: "Free",
        period: "",
        desc: "",
        features: [
          "1 free ad brief on install",
          "Find your top-converting product",
          "3 ready-to-use ad angles & hooks",
          "Step-by-step Meta setup guide",
        ],
        cta: "Start Free",
        featured: false,
      },
      {
        name: "Starter Pack",
        price: "$9",
        period: "one-time charge",
        desc: "",
        features: [
          "3 ad briefs ($3.00 each)",
          "Test your top 3 products",
          "3 custom video hooks per item",
          "Credits valid for 12 months",
        ],
        cta: "Get Starter",
        featured: false,
      },
      {
        name: "Growth Pack",
        price: "$25",
        period: "one-time charge",
        desc: "",
        features: [
          "10 ad briefs ($2.50 each)",
          "Perfect for new collection drops",
          "Save 17% vs Starter Pack",
          "Everything in Starter Pack",
        ],
        cta: "Get Growth Pack",
        featured: true,
      },
      {
        name: "Scale Pack",
        price: "$59",
        period: "one-time charge",
        desc: "",
        features: [
          "30 ad briefs ($1.97 each)",
          "Cover your entire store catalog",
          "Best value (save 34%)",
          "Everything in Growth Pack",
        ],
        cta: "Get Scale Pack",
        featured: false,
      },
    ],
    recommended: "Recommended",
    note: "One credit is one complete Meta Ads brief. Buy a pack once and spend it at your pace — nothing renews in the background.",
    billing: "All charges are billed in USD.",
  },

  footer: {
    tagline: "Built for Shopify merchants who are serious about Meta.",
    privacy: "Privacy",
    terms: "Terms",
    shopifyApp: "Shopify App Store",
  },
} as const;
