"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#philosophy", label: "Philosophy" },
  { href: "#lessons", label: "Lessons" },
  { href: "#testimonials", label: "Stories" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 64);
  });

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled
          ? "bg-bg/90 shadow-[0_1px_0_0_rgb(var(--color-text)/0.08)] backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10"
      >
        <a
          href="#top"
          className="font-display text-lg italic tracking-wide text-text transition-colors hover:text-primary"
        >
          Yoon Huh
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative py-2 text-sm font-medium tracking-wide text-text-muted transition-colors hover:text-text"
              >
                {link.label}
                {/* Piano-key hover motif: a small key that "presses" down on hover */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-full h-[3px] w-full origin-left scale-x-0 bg-gradient-to-r from-primary to-secondary transition-transform duration-300 ease-out group-hover:scale-x-100"
                />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full border border-text/20 bg-primary px-5 py-2.5 text-sm font-semibold text-bg shadow-sm transition-all hover:-translate-y-0.5 hover:brightness-90 hover:shadow-md md:inline-block"
        >
          Book a Lesson
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-full text-text md:hidden"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={clsx(
                "h-[2px] w-6 bg-current transition-transform duration-300",
                menuOpen && "translate-y-[7px] rotate-45"
              )}
            />
            <span
              className={clsx(
                "h-[2px] w-6 bg-current transition-opacity duration-300",
                menuOpen && "opacity-0"
              )}
            />
            <span
              className={clsx(
                "h-[2px] w-6 bg-current transition-transform duration-300",
                menuOpen && "-translate-y-[7px] -rotate-45"
              )}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-bg md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 pb-6">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="block py-3 text-base font-medium text-text-muted hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="block rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-bg"
                >
                  Book a Lesson
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
