"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/site";
import { TOKEN } from "@/lib/token";
import { Logo } from "./Logo";

/** Buy GREENO button used in the navbar */
function BuyButton({ className = "" }: { className?: string }) {
  const href = TOKEN.BUY_URL ?? "#buy";
  const isExternal = !!TOKEN.BUY_URL;
  const cls = `group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-neon to-electric px-5 py-2.5 font-display text-[0.68rem] font-semibold tracking-[0.14em] text-ink uppercase shadow-[0_0_28px_-6px_rgb(57_255_20/0.8)] transition-all duration-300 hover:shadow-[0_0_40px_-4px_rgb(140_255_0/0.9)] hover:-translate-y-0.5 active:translate-y-0 ${className}`;

  const inner = (
    <>
      <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/50 opacity-0 blur-md transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />
      <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="relative h-3.5 w-3.5">
        <path d="M1 1.75A.75.75 0 0 1 1.75 1h1.628a1.75 1.75 0 0 1 1.734 1.519l.49 3.981H17.5a.75.75 0 0 1 .734.598l.75 4.5a.75.75 0 0 1-.734.902H5.72l.11.886A.25.25 0 0 0 6.078 14h9.422a.75.75 0 0 1 0 1.5H6.078a1.75 1.75 0 0 1-1.742-1.572L2.73 2.5H1.75A.75.75 0 0 1 1 1.75ZM5 17.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm9.5 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
      </svg>
      <span className="relative">Buy GREENO</span>
    </>
  );

  return isExternal ? (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label="Buy GREENO token" className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-neon focus:px-4 focus:py-2 focus:text-ink">
        Skip to content
      </a>
      <div className={`transition-all duration-500 ease-premium ${scrolled ? "border-b border-white/[0.06] bg-ink/75 py-3 backdrop-blur-xl" : "border-b border-transparent py-5"}`}>
        <nav aria-label="Main" className="container-x flex items-center justify-between gap-6">
          <Logo />

          <ul className="hidden items-center gap-1 rounded-full border border-white/[0.07] bg-white/[0.02] p-1 backdrop-blur-md lg:flex">
            {navLinks.map((l) => {
              const active = isActive(l.href);
              return (
                <li key={l.href} className="relative">
                  <Link
                    href={l.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative z-10 block rounded-full px-5 py-2 font-display text-[0.7rem] font-medium tracking-[0.18em] uppercase transition-colors duration-300 ${active ? "text-ink" : "text-white/70 hover:text-white"}`}
                  >
                    {l.label}
                  </Link>
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-neon shadow-[0_0_20px_-2px_rgb(57_255_20/0.7)]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <BuyButton className="hidden sm:inline-flex" />

            <button
              type="button"
              className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Menu</span>
              <span aria-hidden="true" className={`absolute h-[2px] w-5 bg-white transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-1.5"}`} />
              <span aria-hidden="true" className={`absolute h-[2px] w-5 bg-white transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
              <span aria-hidden="true" className={`absolute h-[2px] w-5 bg-white transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-1.5"}`} />
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-0 -z-10 flex flex-col bg-ink/95 px-6 pt-28 pb-10 backdrop-blur-2xl lg:hidden"
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={l.href}
                    aria-current={isActive(l.href) ? "page" : undefined}
                    className={`flex items-center justify-between border-b border-white/[0.06] py-5 font-display text-2xl font-semibold tracking-wide uppercase ${isActive(l.href) ? "text-neon" : "text-white"}`}
                  >
                    {l.label}
                    <span className="font-mono text-xs text-white/40">0{i + 1}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="mt-auto flex flex-col gap-4">
              <BuyButton />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
