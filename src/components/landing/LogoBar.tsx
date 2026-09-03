import type { CSSProperties } from "react";
import { ShopifyIcon } from "./ShopifyIcon";

export function LogoBar({ style, className = "" }: { style?: CSSProperties; className?: string }) {
  return (
    <div className={`w-full py-6 md:py-8 ${className}`} style={style}>
      <p className="text-center font-mono text-[11px] uppercase tracking-[0.22em] text-black/40 dark:text-white/40 mb-5">
        Built natively for the Shopify &amp; Meta Ads ecosystem
      </p>
      <div className="flex items-center justify-center gap-10 md:gap-16 opacity-60 transition-opacity hover:opacity-90">
        {/* Shopify */}
        <div className="flex items-center gap-2.5 text-black dark:text-white">
          <ShopifyIcon size={24} style={{ color: "#95BF47" }} />
          <span className="font-serif text-[18px] font-bold tracking-tight">Shopify</span>
        </div>

        {/* Meta Ads */}
        <div className="flex items-center gap-2.5 text-black dark:text-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
          </svg>
          <span className="font-sans text-[16px] font-semibold tracking-tight">Meta Ads</span>
        </div>
      </div>
    </div>
  );
}
