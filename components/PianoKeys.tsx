"use client";

import { motion, type MotionValue } from "framer-motion";

interface PianoKeysProps {
  /** Optional scroll-driven vertical offset, wired in from the parent hero. */
  y?: MotionValue<number>;
}

/**
 * Decorative row of piano keys used as a background motif in the hero.
 * Purely ornamental (aria-hidden) — the black keys lift into view with a
 * staggered entrance to echo a hand settling onto the keyboard, then drift
 * gently as the page scrolls for a subtle parallax depth effect.
 */
export default function PianoKeys({ y }: PianoKeysProps) {
  const whiteKeyCount = 18;
  const blackKeyPattern = [1, 1, 0, 1, 1, 1, 0]; // 1 = has black key to its right

  return (
    <motion.div
      style={{ y }}
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-32 select-none overflow-hidden opacity-[0.2] sm:h-44 md:h-56 lg:h-64"
    >
      <div className="flex h-full w-full">
        {Array.from({ length: whiteKeyCount }).map((_, i) => {
          const hasBlack = blackKeyPattern[i % blackKeyPattern.length] === 1;
          return (
            <div key={i} className="relative flex-1 border-l border-text/40 last:border-r">
              {hasBlack && (
                <motion.div
                  initial={{ y: -12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.4 + i * 0.035,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className="absolute right-0 top-0 h-[62%] w-1/2 translate-x-1/2 bg-text/70"
                />
              )}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
