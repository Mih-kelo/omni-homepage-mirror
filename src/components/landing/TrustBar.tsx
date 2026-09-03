import type { CSSProperties } from "react";

interface TrustItem {
  icon: JSX.Element;
  label: string;
  sub: string;
}

const trustItems: TrustItem[] = [
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--lx-accent, #6366f1)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    label: "100% Read-Only OAuth",
    sub: "Never modifies store or customer data",
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#eab308"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    label: "60-Second AI Audit",
    sub: "Instant Ad Readiness Score 0–100",
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#10b981"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    label: "1 Free Brief on Install",
    sub: "Find your top-converting product free",
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#a855f7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <line x1="2" x2="22" y1="10" y2="10" />
      </svg>
    ),
    label: "No Subscription Traps",
    sub: "One-time packs · Zero recurring charges",
  },
];

export function TrustBar({ style, className = "" }: { style?: CSSProperties; className?: string }) {
  return (
    <div
      className={`grid grid-cols-2 gap-3 pt-6 sm:grid-cols-4 sm:gap-4 ${className}`}
      style={style}
    >
      {trustItems.map((item, i) => (
        <div
          key={i}
          className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-left backdrop-blur-sm"
          style={{
            borderColor: "var(--lx-hairline, rgba(255,255,255,0.1))",
            background: "var(--lx-paper, rgba(255,255,255,0.03))",
          }}
        >
          <div className="mt-0.5 shrink-0">{item.icon}</div>
          <div>
            <div
              className="text-[12px] font-semibold leading-tight text-white/90"
              style={{ color: "var(--lx-ink, rgba(255,255,255,0.9))" }}
            >
              {item.label}
            </div>
            <div
              className="mt-0.5 text-[11px] leading-tight text-white/50"
              style={{ color: "var(--lx-ink-faint, rgba(255,255,255,0.5))" }}
            >
              {item.sub}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
