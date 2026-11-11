import Image from "next/image";
import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label="GREENO home" className={`group inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative h-9 w-9 shrink-0 rounded-full ring-1 ring-gold/50 shadow-[0_0_18px_-2px_rgb(57_255_20/0.55)] transition-transform duration-500 ease-premium group-hover:rotate-[20deg]">
        <Image src="/brand/greeno-coin-sm.webp" alt="" width={36} height={36} className="rounded-full" loading="eager" fetchPriority="high" />
      </span>
      <span className="font-display text-lg font-bold tracking-[0.08em] text-white">
        GREEN<span className="text-neon">O</span>
      </span>
    </Link>
  );
}
