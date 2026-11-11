"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import type { CSSProperties, PointerEvent } from "react";

const EDGE_LAYERS = 12;

/**
 * CSS-3D GREENO coin built from the official coin face plus stacked gold edge
 * layers for real thickness. Idles with a slow sway and float, and tilts toward
 * the pointer on devices that have one. No WebGL, no extra downloads.
 */
export function Coin3D({
  className = "",
  priority = false,
  interactive = true,
  thickness = "clamp(10px, 1.8vw, 20px)",
  sizes = "(min-width: 1024px) 480px, 80vw",
}: {
  className?: string;
  priority?: boolean;
  interactive?: boolean;
  thickness?: string;
  sizes?: string;
}) {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [14, -14]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-18, 18]), { stiffness: 120, damping: 18 });

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!interactive || reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const face = (
    <Image
      src="/brand/greeno-coin.webp"
      alt=""
      fill
      sizes={sizes}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      className="rounded-full object-cover select-none"
      draggable={false}
    />
  );

  return (
    <div
      className={`relative aspect-square [perspective:1400px] ${className}`}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      role="img"
      aria-label="The golden GREENO coin featuring the muscular green rabbit"
      style={{ "--coin-t": thickness } as CSSProperties}
    >
      {/* Ground glow */}
      <div
        aria-hidden="true"
        className="glow-pulse absolute -bottom-[8%] left-1/2 h-[16%] w-[70%] -translate-x-1/2 rounded-[50%] bg-neon/40 blur-3xl"
      />
      <div className="coin-float absolute inset-0 [transform-style:preserve-3d]">
        <motion.div className="absolute inset-0 [transform-style:preserve-3d]" style={{ rotateX: rx, rotateY: ry }}>
          <div className="coin-sway absolute inset-0 [transform-style:preserve-3d]">
            {/* Edge: stacked metallic discs */}
            {Array.from({ length: EDGE_LAYERS }, (_, i) => {
              const z = (i / (EDGE_LAYERS - 1) - 0.5) * 0.96;
              return (
                <div
                  key={i}
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full"
                  style={{
                    transform: `translateZ(calc(var(--coin-t) * ${z}))`,
                    background:
                      i % 2
                        ? "linear-gradient(135deg,#8a6420,#e9cd7d 45%,#7a561a 70%,#d8b45a)"
                        : "linear-gradient(135deg,#6e4f16,#d8b45a 45%,#5e4212 70%,#c9a24a)",
                  }}
                />
              );
            })}
            {/* Front face */}
            <div
              className="absolute inset-0 overflow-hidden rounded-full [backface-visibility:hidden]"
              style={{ transform: "translateZ(calc(var(--coin-t) * 0.5))" }}
            >
              {face}
              <div aria-hidden="true" className="absolute inset-0 overflow-hidden rounded-full">
                <div className="coin-sheen absolute -inset-y-1/4 left-0 w-1/4 bg-gradient-to-r from-transparent via-white/35 to-transparent blur-md" />
              </div>
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full shadow-[inset_0_0_40px_rgb(0_0_0/0.35),inset_0_2px_0_rgb(255_240_200/0.5)]"
              />
            </div>
            {/* Back face */}
            <div
              className="absolute inset-0 overflow-hidden rounded-full [backface-visibility:hidden]"
              style={{ transform: "rotateY(180deg) translateZ(calc(var(--coin-t) * 0.5))" }}
            >
              {face}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
