import type { CSSProperties } from "react";
import { ShopifyIcon } from "./ShopifyIcon";

export function LogoBar({ style, className = "" }: { style?: CSSProperties; className?: string }) {
  return (
    <div className={`w-full py-8 ${className}`} style={style}>
      <p className="text-center font-mono text-[11px] uppercase tracking-[0.2em] text-black/40 dark:text-white/40 mb-6">
        Built natively for the Shopify & Meta Ads ecosystem
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-50 transition-opacity hover:opacity-80">
        {/* Shopify */}
        <div className="flex items-center gap-2 text-black dark:text-white">
          <ShopifyIcon size={22} style={{ color: "#95BF47" }} />
          <span className="font-serif text-[17px] font-bold tracking-tight">Shopify</span>
        </div>

        {/* Meta Ads */}
        <div className="flex items-center gap-2 text-black dark:text-white">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
          </svg>
          <span className="font-sans text-[15px] font-semibold tracking-tight">Meta Ads</span>
        </div>

        {/* Instagram */}
        <div className="flex items-center gap-2 text-black dark:text-white">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
          <span className="font-sans text-[15px] font-semibold tracking-tight">Instagram</span>
        </div>

        {/* Klaviyo */}
        <div className="flex items-center gap-2 text-black dark:text-white">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.12 11.19a3.81 3.81 0 0 0-3.81-3.81H4.69a3.81 3.81 0 0 0-3.81 3.81v1.62a3.81 3.81 0 0 0 3.81 3.81h14.62a3.81 3.81 0 0 0 3.81-3.81v-1.62z" />
          </svg>
          <span className="font-serif text-[16px] font-bold tracking-tight">Klaviyo</span>
        </div>

        {/* TikTok Ads */}
        <div className="flex items-center gap-2 text-black dark:text-white">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.068-.102a2.895 2.895 0 0 1 2.373-4.532c.381 0 .744.075 1.077.21V9.41a6.335 6.335 0 0 0-1.077-.091A6.34 6.34 0 0 0 3.111 15.66a6.34 6.34 0 0 0 10.82 4.475 6.29 6.29 0 0 0 1.868-4.463V8.87a8.196 8.196 0 0 0 4.79 1.542V6.967a4.83 4.83 0 0 1-1-.281z" />
          </svg>
          <span className="font-sans text-[15px] font-semibold tracking-tight">TikTok Ads</span>
        </div>
      </div>
    </div>
  );
}
