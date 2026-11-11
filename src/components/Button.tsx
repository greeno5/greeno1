import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-neon text-ink shadow-[0_0_0_1px_rgb(57_255_20/0.6),0_10px_40px_-10px_rgb(57_255_20/0.8)] hover:bg-electric hover:shadow-[0_0_0_1px_rgb(140_255_0/0.8),0_14px_50px_-8px_rgb(140_255_0/0.9)]",
  secondary:
    "text-white border border-white/15 bg-white/[0.03] backdrop-blur-md hover:border-gold/60 hover:text-gold-light hover:bg-gold/[0.06]",
  ghost: "text-white/80 hover:text-neon",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 font-display text-[0.78rem] font-semibold tracking-[0.16em] uppercase transition-all duration-300 ease-premium hover:-translate-y-0.5 active:translate-y-0 ${styles[variant]} ${className}`}
    >
      {variant === "primary" && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/50 opacity-0 blur-md transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100"
        />
      )}
      <span className="relative">{children}</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        className="relative h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  );
}
