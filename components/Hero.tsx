"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import PianoKeys from "./PianoKeys";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

// Same credentials shown in About's stats, condensed into a single line.
const CREDENTIALS = ["15+ Years Teaching", "200+ Students Guided", "Conservatory-Trained"];

const NAME = "Yoon Huh";
const letterSpring = { type: "spring" as const, stiffness: 400, damping: 15 };

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const keysY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 80]);
  const blobsY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -40]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-bg px-6 pb-[160px] pt-28 sm:px-10 sm:pb-[208px] md:pb-[256px] lg:px-16 lg:pb-[288px]"
    >
      {/* Soft warm gradient blobs drifting slowly behind the copy, with a subtle scroll parallax */}
      <motion.div style={{ y: blobsY }} aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-24 h-[28rem] w-[28rem] animate-drift rounded-full bg-primary/20 blur-[110px]" />
        <div className="absolute -bottom-40 -right-20 h-[32rem] w-[32rem] animate-drift-slow rounded-full bg-secondary/25 blur-[120px]" />
        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 animate-drift rounded-full bg-primary/10 blur-[100px]" />
      </motion.div>

      {/* Subtle vignette for depth — no illustration, just soft tonal falloff */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgb(var(--color-text)/0.07)_100%)]"
      />

      <PianoKeys y={keysY} />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-1 flex-col justify-between"
      >
        <motion.span
          variants={item}
          className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-primary"
        >
          Private Piano Instruction
        </motion.span>

        <div className="flex flex-col items-start">
          <motion.h1
            variants={item}
            aria-label={NAME}
            className="font-display text-[clamp(3.25rem,11vw,10.5rem)] leading-[0.92] text-text"
          >
            {NAME.split("").map((char, i) => (
              <motion.span
                key={i}
                aria-hidden="true"
                whileHover={{ y: 6 }}
                transition={letterSpring}
                className="inline-block transition-colors duration-200 hover:text-primary"
              >
                {char === " " ? " " : char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl font-display text-xl italic leading-relaxed text-text-muted sm:text-2xl"
          >
            Cultivating musicianship, one note at a time.
          </motion.p>
        </div>

        <motion.div
          variants={item}
          className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 font-sans text-xs uppercase tracking-[0.15em] text-text-muted">
            {CREDENTIALS.map((credential, i) => (
              <span key={credential} className="flex items-center gap-x-3">
                {credential}
                {i < CREDENTIALS.length - 1 && (
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-secondary" />
                )}
              </span>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-bg shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:brightness-90 hover:shadow-xl"
          >
            Book a Lesson
          </a>
        </motion.div>

        {/*
          Floating availability card — balances the empty right side of the
          asymmetric layout with real content instead of decoration. Hidden
          below lg since the stacked mobile/tablet layout is already full.
          Positioned with a plain wrapper div (not a motion element) so its
          -translate-y-1/2 centering transform doesn't fight with Framer's
          own transform management on the motion.a inside it.
        */}
        <div className="absolute right-6 top-1/2 z-10 hidden w-64 -translate-y-1/2 lg:right-16 lg:block">
          <motion.a
            href="#contact"
            variants={item}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="block rounded-2xl border border-text/10 bg-surface/90 p-5 shadow-xl shadow-text/10 backdrop-blur-sm transition-shadow hover:shadow-2xl"
          >
            <span className="flex items-center gap-2">
              <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-secondary" />
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                Studio Status
              </span>
            </span>
            <p className="mt-3 font-display text-lg italic leading-snug text-text">
              {/* PLACEHOLDER: replace with real enrollment status */}
              Currently welcoming new students for Fall 2026.
            </p>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
