import type { CSSProperties } from "react";

export function HeroBriefPreview({ style, className = "" }: { style?: CSSProperties; className?: string }) {
  return (
    <div
      className={`w-full max-w-[540px] rounded-2xl border border-white/15 bg-[#0d0d16]/90 p-5 md:p-6 shadow-2xl backdrop-blur-xl text-left ${className}`}
      style={{
        boxShadow: "0 24px 60px -12px rgba(99, 102, 241, 0.18), 0 0 1px 1px rgba(255, 255, 255, 0.1)",
        ...style,
      }}
    >
      {/* Card Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2.5">
          <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
          <span className="font-mono text-[12px] font-medium tracking-wide text-white/90">
            Generated Meta Brief · 60s Audit
          </span>
        </div>
        <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-emerald-400">
          Ad Readiness: 94/100
        </span>
      </div>

      {/* Gateway Product Spotlight */}
      <div className="mt-4 rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-3.5">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10.5px] uppercase tracking-wider text-indigo-400">
            Top Gateway Product
          </span>
          <span className="font-mono text-[10.5px] font-medium text-emerald-400">
            68% First-Time Buyers
          </span>
        </div>
        <div className="mt-1 flex items-baseline justify-between">
          <span className="font-serif text-[17px] font-bold text-white">
            Heavyweight Essential Tee
          </span>
          <span className="font-mono text-[12px] text-white/50">$44 AOV · 2.4x ROAS</span>
        </div>
      </div>

      {/* 3 AI Video Hooks */}
      <div className="mt-4 space-y-2">
        <div className="font-mono text-[10.5px] uppercase tracking-wider text-white/40">
          Tailored Creative Hooks
        </div>
        <div className="space-y-1.5 font-sans text-[12.5px] text-white/80">
          <div className="flex items-start gap-2 rounded-lg bg-white/[0.03] p-2 border border-white/5">
            <span className="font-mono text-[10px] font-bold text-indigo-400 mt-0.5">01</span>
            <span>&ldquo;The one piece that quietly outsells everything else in our store.&rdquo;</span>
          </div>
          <div className="flex items-start gap-2 rounded-lg bg-white/[0.03] p-2 border border-white/5">
            <span className="font-mono text-[10px] font-bold text-indigo-400 mt-0.5">02</span>
            <span>&ldquo;Why 1,400+ first-time buyers picked this on their very first visit.&rdquo;</span>
          </div>
          <div className="flex items-start gap-2 rounded-lg bg-white/[0.03] p-2 border border-white/5">
            <span className="font-mono text-[10px] font-bold text-indigo-400 mt-0.5">03</span>
            <span>&ldquo;Stop scrolling if you&rsquo;re tired of tees that lose their collar after 2 washes.&rdquo;</span>
          </div>
        </div>
      </div>

      {/* Campaign Setup Blueprint */}
      <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/10 pt-3.5 text-center">
        <div className="rounded-lg bg-white/[0.02] p-2 border border-white/5">
          <div className="font-mono text-[10px] uppercase text-white/40">Campaign</div>
          <div className="mt-0.5 text-[11px] font-semibold text-white/90">Manual Sales</div>
        </div>
        <div className="rounded-lg bg-white/[0.02] p-2 border border-white/5">
          <div className="font-mono text-[10px] uppercase text-white/40">Event</div>
          <div className="mt-0.5 text-[11px] font-semibold text-emerald-400">Add to Cart · 7d</div>
        </div>
        <div className="rounded-lg bg-white/[0.02] p-2 border border-white/5">
          <div className="font-mono text-[10px] uppercase text-white/40">Test Budget</div>
          <div className="mt-0.5 text-[11px] font-semibold text-indigo-300">$42 / day</div>
        </div>
      </div>
    </div>
  );
}
