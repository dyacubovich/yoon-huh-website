import Reveal from "./Reveal";

const PILLARS = [
  {
    number: "01",
    title: "Technique",
    description:
      "Precise fingering, posture, and tone production form the physical foundation every piece is built on.",
    icon: (
      <path
        d="M8 30V16a4 4 0 1 1 8 0v6M16 22v-4a4 4 0 1 1 8 0v4M24 22v-2a4 4 0 1 1 8 0v10a10 10 0 0 1-10 10h-2a10 10 0 0 1-9-5.6L6 24"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    number: "02",
    title: "Musicality",
    description:
      "Phrasing, dynamics, and expression are taught alongside notes — so every piece tells a story, not just a sequence.",
    icon: (
      <path
        d="M14 30V10l18-4v20M14 30a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm18-4a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    number: "03",
    title: "Discipline",
    description:
      "Structured, consistent practice habits build the patience and focus that carry far beyond the piano bench.",
    icon: (
      <path
        d="M19 6v4M12 8l2 2M26 8l-2 2M19 34a12 12 0 1 0 0-24 12 12 0 0 0 0 24Zm0-18v6l5 3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    number: "04",
    title: "Joy",
    description:
      "Above all, lessons stay rooted in curiosity and delight — the surest way to keep a student playing for life.",
    icon: (
      <path
        d="M19 8v4M19 26v4M8 19h4M26 19h4M11.5 11.5l2.8 2.8M23.7 23.7l2.8 2.8M26.5 11.5l-2.8 2.8M14.3 23.7l-2.8 2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative bg-bg-alt px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Teaching Philosophy
          </span>
          <h2 className="mt-4 font-display text-4xl text-text sm:text-5xl">
            Four pillars, one goal
          </h2>
          <p className="mt-5 font-sans text-lg leading-relaxed text-text-muted">
            Every lesson plan is different, but each one rests on the same
            principles.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.1}>
              <div className="group h-full rounded-lg border border-text/10 bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/50 hover:shadow-lg hover:shadow-text/5">
                <span className="font-display text-sm italic text-secondary/70">
                  {pillar.number}
                </span>
                <svg
                  viewBox="0 0 38 38"
                  className="mt-4 h-9 w-9 stroke-primary stroke-[1.6] text-primary transition-colors group-hover:stroke-secondary"
                  fill="none"
                  aria-hidden="true"
                >
                  {pillar.icon}
                </svg>
                <h3 className="mt-5 font-display text-2xl text-text">{pillar.title}</h3>
                <p className="mt-3 font-sans text-[15px] leading-relaxed text-text-muted">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
