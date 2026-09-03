/**
 * The complete text content of the experience — carried VERBATIM from the
 * production landing components (Hero, HowItWorks, ColdTrafficParadox,
 * WhatYouGet, WhoItsFor, Pricing, BriefTerminal, Footer). Per direction,
 * the existing app copy is the single source of truth for words; the
 * chambers stage this copy cinematically. No new narrative copy is invented.
 */

export const APP_URL = "https://app.omnitarget.co/";

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
  badge: "Shopify store intelligence",

  hero: {
    titleA: "Pre-Spend Intelligence for Shopify",
    titleB: "Merchants.",
    body: "Shopify knows what sells. Meta knows who buys. They don't talk pre-spend. Omni Target bridges that gap — turning real store data into a ready-to-launch Meta Ads brief in three minutes.",
    ctaPrimary: "Open Omni Target",
    ctaSecondary: "See how it works →",
  },

  howItWorks: {
    eyebrow: "How it works",
    titleA: "From store to brief",
    titleB: "in three steps.",
    steps: [
      {
        n: "01",
        t: "Connect Shopify",
        d: "One-click OAuth. Read-only access to orders, products, customers, and collections.",
      },
      {
        n: "02",
        t: "Intelligence engine reads your store",
        d: "Identifies gateway products dynamically, calculates first-time buyer ratios, maps repeat purchase patterns — all relative to your store's own baseline.",
      },
      {
        n: "03",
        t: "Get your complete Meta brief",
        d: "Gateway product, audience profile, creative format prescription, behavior-derived hooks, correct optimization event, and dynamic budget — exported as a branded PDF.",
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
      "The product that converts your existing audience is rarely the one that earns you a new one.",
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
    body: "Everything a media buyer needs on day one — derived from your store, not from a template.",
    items: [
      "Audiences that match your actual buyer profile",
      "Creative angles ranked by likelihood to convert",
      "Gateway product identified from your real store data",
      "Behavior-derived hooks — no reviews needed",
      "Budget split calibrated to your store's order volume",
    ],
  },

  brief: {
    window: "brief.omnitarget",
    rows: [
      { k: "store", v: "Pilot Brand (NDA)" },
      { k: "gateway", v: "Product B", highlight: true },
      { k: "format", v: "UGC carousel, 4 frames" },
      { k: "hook 01", v: '"The one piece that quietly outsells everything."' },
      { k: "optimize", v: "Purchases · 7d click" },
      { k: "budget", v: "$42 / day · scale at ROAS 1.8" },
    ] as ReadonlyArray<BriefRow>,
    generated: "generated in 4.2s",
  },

  whoItsFor: {
    eyebrow: "Who it's for",
    titleA: "Built for a specific kind",
    titleB: "of brand operator.",
    tags: [
      "Fashion & lifestyle",
      "Shopify-native",
      "$5k–$100k/mo revenue",
      "DTC operators",
      "Brand-led teams",
    ],
    disclaimer:
      "Not for you if you sell B2B, run on a non-Shopify stack, or want a tool that pushes a Buy Now button on its own.",
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
  },
} as const;
