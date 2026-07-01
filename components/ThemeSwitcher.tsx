"use client";

import { useEffect, useState } from "react";

interface Theme {
  id: string;
  name: string;
  /** Literal hex values for the preview swatch only — intentionally not
   * themed, since this is what lets a visitor compare options before
   * switching. */
  swatch: [string, string, string];
}

const THEMES: Theme[] = [
  { id: "terracotta", name: "Terracotta", swatch: ["#FAF6F0", "#8B4B3B", "#C9A66B"] },
  { id: "espresso-rose", name: "Espresso Rose", swatch: ["#F3EAE4", "#3D2B26", "#B8695F"] },
  { id: "sepia-sage", name: "Sepia Sage", swatch: ["#F6F1E7", "#6B7A5E", "#C7955B"] },
  { id: "blush-copper", name: "Blush Copper", swatch: ["#FBF0EB", "#A85D3B", "#D98C6E"] },
  { id: "charcoal-amber", name: "Charcoal Amber", swatch: ["#1C1815", "#E8A854", "#8A7A6A"] },
  { id: "mahogany-parchment", name: "Mahogany Parchment", swatch: ["#F1E7D8", "#5C2E23", "#B08B4F"] },
  { id: "clay-ink", name: "Clay Ink", swatch: ["#EDE6DD", "#BC7150", "#8C8477"] },
  { id: "honey-plum", name: "Honey Plum", swatch: ["#FAF3E3", "#D9A441", "#5C3A52"] },
];

export const THEME_STORAGE_KEY = "yh-theme";
const DEFAULT_THEME_ID = THEMES[0].id;

/**
 * Floating theme picker used to preview color-palette options on the live
 * site. Reads/writes the `data-theme` attribute on <html>, which every
 * color utility resolves through via CSS variables (see globals.css) — so
 * switching is instant with no page reload or rebuild.
 */
export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(DEFAULT_THEME_ID);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme") || DEFAULT_THEME_ID;
    setActive(current);
    setMounted(true);
  }, []);

  function selectTheme(id: string) {
    document.documentElement.setAttribute("data-theme", id);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, id);
    } catch {
      // Storage can be unavailable (private browsing, etc.) — theme still
      // applies for the current page view.
    }
    setActive(id);
  }

  // Avoid rendering theme-dependent state until mounted, so the server
  // render and first client render match (no hydration warning).
  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[70] flex flex-col items-end gap-3">
      {open && (
        <div
          role="menu"
          aria-label="Choose a color theme"
          className="w-64 rounded-2xl border border-text/10 bg-surface p-4 shadow-2xl shadow-text/20"
        >
          <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
            Theme Preview
          </p>
          <ul className="max-h-80 space-y-1 overflow-y-auto">
            {THEMES.map((theme) => (
              <li key={theme.id}>
                <button
                  type="button"
                  role="menuitemradio"
                  aria-checked={active === theme.id}
                  onClick={() => selectTheme(theme.id)}
                  className={`flex w-full items-center gap-3 rounded-lg px-2.5 py-2 text-left transition-colors ${
                    active === theme.id ? "bg-text/[0.06]" : "hover:bg-text/[0.04]"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className="flex shrink-0 overflow-hidden rounded-full border border-text/15"
                  >
                    <span className="h-6 w-2" style={{ backgroundColor: theme.swatch[0] }} />
                    <span className="h-6 w-2" style={{ backgroundColor: theme.swatch[1] }} />
                    <span className="h-6 w-2" style={{ backgroundColor: theme.swatch[2] }} />
                  </span>
                  <span className="flex-1 font-sans text-sm text-text">{theme.name}</span>
                  {active === theme.id && (
                    <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close theme picker" : "Open theme picker"}
        className="flex h-14 w-14 items-center justify-center rounded-full border border-text/10 bg-surface text-text shadow-xl shadow-text/15 transition-transform hover:-translate-y-0.5"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M12 3.5a8.5 8.5 0 0 0 0 17 4.25 4.25 0 0 1 0-8.5 4.25 4.25 0 0 0 0-8.5Z"
            fill="currentColor"
            className="text-primary"
          />
        </svg>
      </button>
    </div>
  );
}
