"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { LAUNCH_CONFIG } from "@/lib/launch";

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isLaunched: boolean;
}

function calculateTimeRemaining(targetDate: string): TimeRemaining {
  const now = new Date().getTime();
  const target = new Date(targetDate).getTime();
  const difference = target - now;

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isLaunched: true,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000),
    isLaunched: false,
  };
}

function formatTimezoneTime(timezone: string): string {
  try {
    const launchDate = new Date(LAUNCH_CONFIG.LAUNCH_DATE_UTC);
    return launchDate.toLocaleTimeString("en-US", {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  } catch {
    return "TBA";
  }
}

const ease = [0.22, 1, 0.36, 1] as const;

function CountdownDigit({ value, label }: { value: number; label: string }) {
  const reduce = useReducedMotion();
  const displayValue = String(value).padStart(2, "0");

  return (
    <motion.div
      initial={reduce ? false : { scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease }}
      className="relative flex flex-1 flex-col items-center min-w-0"
    >
      {/* Digit container */}
      <div className="glass group relative w-full overflow-hidden rounded-2xl border-neon/20 px-3 py-5 shadow-[0_0_30px_-8px_rgb(57_255_20/0.4)] transition-all duration-300 hover:border-neon/40 hover:shadow-[0_0_50px_-6px_rgb(57_255_20/0.6)] sm:rounded-3xl sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-14">
        {/* Glow effect */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgb(57_255_20/0.15),transparent_70%)] opacity-80 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Number */}
        <motion.div
          key={value}
          initial={reduce ? false : { y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease }}
          className="relative font-display text-3xl font-extrabold leading-none tracking-tight text-neon xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          style={{
            textShadow:
              "0 0 20px rgb(57 255 20 / 0.8), 0 0 40px rgb(57 255 20 / 0.5), 0 0 60px rgb(57 255 20 / 0.3)",
          }}
        >
          {displayValue}
        </motion.div>

        {/* Animated border glow */}
        <div
          aria-hidden="true"
          className="glow-pulse pointer-events-none absolute inset-0 rounded-2xl border-2 border-neon/30 sm:rounded-3xl"
        />
      </div>

      {/* Label */}
      <motion.p
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-2 font-display text-[0.6rem] font-semibold tracking-[0.25em] text-white/60 uppercase xs:text-[0.65rem] sm:mt-3 sm:text-xs md:text-sm lg:mt-4"
      >
        {label}
      </motion.p>
    </motion.div>
  );
}

interface TimezoneCardProps {
  city: string;
  country: string;
  flag: string;
  timezone: string;
  abbreviation: string;
}

function TimezoneCard({ city, country, flag, timezone, abbreviation }: TimezoneCardProps) {
  const reduce = useReducedMotion();
  const [time, setTime] = useState<string>("--:--");

  useEffect(() => {
    setTime(formatTimezoneTime(timezone));
  }, [timezone]);

  return (
    <motion.div
      initial={reduce ? false : { y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease }}
      className="glass group relative overflow-hidden rounded-xl p-4 transition-all duration-300 hover:-translate-y-1 hover:border-neon/30 hover:shadow-[0_20px_50px_-12px_rgb(57_255_20/0.3)] sm:rounded-2xl sm:p-5 md:p-6"
    >
      {/* Gradient background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-neon/5 via-transparent to-emerald/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <div className="flex items-center gap-2.5 sm:flex-1 sm:gap-3">
          <span className="text-2xl sm:text-3xl" aria-label={country}>
            {flag}
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="truncate font-display text-base font-semibold text-white sm:text-lg">{city}</h3>
            <p className="mt-0.5 font-mono text-[0.65rem] text-white/40 uppercase sm:text-xs">{abbreviation}</p>
          </div>
        </div>
        <div className="text-left sm:text-right">
          <p className="font-display text-xl font-bold text-neon sm:text-2xl" style={{ textShadow: "0 0 20px rgb(57 255 20 / 0.6)" }}>
            {time}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function Countdown() {
  const reduce = useReducedMotion();
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isLaunched: false,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeRemaining(calculateTimeRemaining(LAUNCH_CONFIG.LAUNCH_DATE_UTC));

    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(LAUNCH_CONFIG.LAUNCH_DATE_UTC));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="relative min-h-[70vh] w-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-neon/20 border-t-neon" />
        </div>
      </div>
    );
  }

  if (timeRemaining.isLaunched) {
    // Post-launch celebration view
    return (
      <div className="relative isolate overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28">
        {/* Celebration effects */}
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 h-[300px] w-[300px] animate-pulse rounded-full bg-neon/20 blur-[120px] sm:h-[400px] sm:w-[400px] sm:blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 h-[350px] w-[350px] animate-pulse rounded-full bg-electric/20 blur-[120px] delay-500 sm:h-[500px] sm:w-[500px] sm:blur-[140px]" />
        </div>

        <div className="container-x text-center">
          <motion.div
            initial={reduce ? false : { scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease }}
          >
            {/* Live badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon/40 bg-neon/10 px-4 py-2.5 backdrop-blur-sm sm:mb-7 sm:gap-3 sm:px-5 sm:py-3 md:mb-8 md:px-6">
              <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-neon sm:h-3 sm:w-3" />
              </span>
              <span className="font-display text-xs font-bold tracking-[0.18em] text-neon uppercase sm:text-sm sm:tracking-[0.2em]">NOW LIVE</span>
            </div>

            {/* Launch message */}
            <h2
              className="font-display font-extrabold leading-none tracking-tight"
              style={{
                fontSize: "clamp(2rem, 10vw, 5rem)",
                background: "linear-gradient(135deg, #ffffff 0%, #c9ffb8 30%, #39ff14 60%, #8cff00 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                textShadow: "0 0 80px rgb(57 255 20 / 0.5)",
              }}
            >
              {LAUNCH_CONFIG.CELEBRATION_MESSAGE}
            </h2>
            <p 
              className="mt-4 font-display font-semibold tracking-wide text-gold-light uppercase sm:mt-5 md:mt-6"
              style={{ fontSize: "clamp(1.25rem, 5vw, 2.5rem)" }}
            >
              {LAUNCH_CONFIG.CELEBRATION_SUBTITLE}
            </p>

            {/* CTA Button */}
            <motion.div
              initial={reduce ? false : { y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-8 sm:mt-10 md:mt-12"
            >
              <a
                href="#community"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-neon to-electric px-7 py-4 font-display text-sm font-bold tracking-[0.14em] text-ink uppercase shadow-[0_0_40px_-6px_rgb(57_255_20/0.9)] transition-all duration-300 hover:shadow-[0_0_60px_-4px_rgb(140_255_0/1)] hover:scale-105 active:scale-100 sm:gap-3 sm:px-8 sm:py-4.5 md:px-10 md:py-5 md:text-base"
              >
                <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/60 opacity-0 blur-md transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 sm:h-5 sm:w-5">
                  <path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm3.7 9.7a1 1 0 0 1-1.4 1.4L10 10.8l-2.3 2.3a1 1 0 0 1-1.4-1.4L8.6 9.4 6.3 7.1a1 1 0 0 1 1.4-1.4L10 8l2.3-2.3a1 1 0 0 1 1.4 1.4l-2.3 2.3 2.3 2.3Z" />
                </svg>
                <span className="relative">Join The Community</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Pre-launch countdown view
  return (
    <div className="relative isolate overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Background effects */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div className="absolute top-1/3 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-neon/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[140px] lg:h-[600px] lg:w-[600px] lg:blur-[160px]" />
        <div className="absolute bottom-0 left-1/4 h-[300px] w-[300px] rounded-full bg-emerald/60 blur-[100px] sm:h-[400px] sm:w-[400px] sm:blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 h-[200px] w-[200px] rounded-full bg-electric/20 blur-[80px] sm:h-[300px] sm:w-[300px] sm:blur-[100px]" />
      </div>

      <div className="container-x">
        {/* Header section */}
        <div className="mb-8 text-center sm:mb-12 md:mb-16 lg:mb-20">
          <motion.div
            initial={reduce ? false : { y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease }}
          >
            {/* Live launch badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neon/30 bg-neon/5 px-3 py-2 backdrop-blur-sm sm:mb-5 sm:gap-3 sm:px-4 sm:py-2.5 md:mb-6 md:px-5">
              <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-neon shadow-[0_0_10px_#39ff14] sm:h-2 sm:w-2" />
              </span>
              <span className="font-mono text-[0.6rem] font-semibold tracking-[0.2em] text-neon uppercase xs:text-[0.65rem] sm:text-xs sm:tracking-[0.25em]">
                Official Token Launch
              </span>
            </div>

            {/* Title - Responsive with clamp */}
            <h1
              className="font-display font-extrabold leading-none tracking-tight"
              style={{
                fontSize: "clamp(2rem, 8vw, 5rem)",
                background: "linear-gradient(120deg, #ffffff 0%, #c9ffb8 35%, #39ff14 70%, #8cff00 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                textShadow: "0 0 60px rgb(57 255 20 / 0.4)",
              }}
            >
              {LAUNCH_CONFIG.TITLE} 🚀
            </h1>

            <p 
              className="mt-3 font-display font-semibold tracking-wide text-gold-light uppercase sm:mt-4"
              style={{ fontSize: "clamp(1rem, 4vw, 2rem)" }}
            >
              {LAUNCH_CONFIG.SUBTITLE}
            </p>

            <p 
              className="mt-2 font-display font-medium tracking-[0.15em] text-white/70 uppercase sm:mt-3 sm:tracking-[0.2em]"
              style={{ fontSize: "clamp(0.7rem, 2.5vw, 1rem)" }}
            >
              {LAUNCH_CONFIG.TAGLINE}
            </p>

            <p className="mx-auto mt-4 max-w-2xl px-4 text-sm leading-relaxed text-white/60 sm:mt-5 sm:px-0 sm:text-base md:mt-6 md:text-lg">
              {LAUNCH_CONFIG.DESCRIPTION}
            </p>
          </motion.div>
        </div>

        {/* Countdown timer - Mobile optimized grid */}
        <div className="mb-12 sm:mb-14 md:mb-16">
          <div className="mx-auto grid max-w-5xl grid-cols-4 gap-2 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            <CountdownDigit value={timeRemaining.days} label="DAYS" />
            <CountdownDigit value={timeRemaining.hours} label="HOURS" />
            <CountdownDigit value={timeRemaining.minutes} label="MINS" />
            <CountdownDigit value={timeRemaining.seconds} label="SECS" />
          </div>
        </div>

        {/* Timezone cards */}
        <div className="mx-auto max-w-4xl">
          <motion.h2
            initial={reduce ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-6 text-center font-display text-sm font-semibold tracking-[0.18em] text-white/70 uppercase sm:mb-7 sm:text-base sm:tracking-[0.2em] md:mb-8 md:text-lg"
          >
            Launch Times Worldwide
          </motion.h2>
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:gap-5">
            {LAUNCH_CONFIG.FEATURED_TIMEZONES.map((tz, i) => (
              <motion.div
                key={tz.timezone}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
              >
                <TimezoneCard {...tz} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
