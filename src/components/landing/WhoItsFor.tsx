const tags = [
  "Shopify-native",
  "DTC founders & operators",
  "Performance marketers",
  "Product & drop launches",
  "Bootstrap to scaling",
];

export function WhoItsFor() {
  return (
    <section className="bg-[var(--paper)] text-[#08080f]">
      <div className="mx-auto max-w-[980px] px-6 py-28 text-center lg:py-36">
        <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-black/40">
          Who it's for
        </div>
        <h2
          className="font-serif font-black"
          style={{
            fontSize: "clamp(32px, 4vw, 52px)",
            lineHeight: 1.05,
            letterSpacing: "-0.015em",
          }}
        >
          Built for modern Shopify brands
          <br />
          and <span className="text-[var(--primary)]">growth teams.</span>
        </h2>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-3">
          {tags.map((t, i) => (
            <span key={t} className="flex items-center gap-3">
              <span className="rounded-full border border-black/15 bg-white/40 px-4 py-2 font-mono text-[12px] uppercase tracking-wider text-black/75">
                {t}
              </span>
              {i < tags.length - 1 && <span className="text-black/25">·</span>}
            </span>
          ))}
        </div>

        <p className="mx-auto mt-14 max-w-[620px] text-[15px] leading-[1.6] text-black/60">
          For founders and media buyers who are tired of guessing what will convert on Meta.
          Whether you launch ads in-house or collaborate with an agency partner, Omni Target turns
          raw store data into an agency-grade ad blueprint before you commit budget.
        </p>
      </div>
    </section>
  );
}
