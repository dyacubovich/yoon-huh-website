import Reveal from "./Reveal";

/**
 * PLACEHOLDER LESSON FORMATS — durations and age bands below are
 * illustrative. Replace with Yoon Huh's actual studio policies.
 * Pricing is intentionally omitted — discussed individually with each family.
 */
const PLANS = [
  {
    name: "Foundations",
    ages: "Ages 5–8",
    length: "30 minutes",
    format: "In-studio or online",
    description:
      "A gentle, playful introduction to the keyboard for first-time learners.",
    featured: false,
  },
  {
    name: "Development",
    ages: "Ages 9–14",
    length: "45 minutes",
    format: "In-studio or online",
    description:
      "Steady technical growth alongside repertoire suited to each student's pace.",
    featured: true,
  },
  {
    name: "Advanced & Adult",
    ages: "Teens & adults",
    length: "60 minutes",
    format: "In-studio or online",
    description:
      "In-depth work for competition prep, conservatory auditions, or serious hobbyists.",
    featured: false,
  },
];

export default function LessonInfo() {
  return (
    <section id="lessons" className="relative bg-bg px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Lesson Info
          </span>
          <h2 className="mt-4 font-display text-4xl text-text sm:text-5xl">
            Formats for every stage
          </h2>
          <p className="mt-5 font-sans text-lg leading-relaxed text-text-muted">
            Lessons are offered in-studio or online, with plans shaped around
            age and experience. Pricing is discussed individually with each
            family.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.1}>
              <div
                className={`flex h-full flex-col rounded-lg p-9 ${
                  plan.featured
                    ? "border-2 border-primary bg-surface shadow-xl shadow-primary/10"
                    : "border border-text/10 bg-surface"
                }`}
              >
                {plan.featured && (
                  <span className="mb-4 w-fit rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-bg">
                    Most Requested
                  </span>
                )}
                <h3 className="font-display text-2xl text-text">{plan.name}</h3>
                <p className="mt-2 font-sans text-sm text-text-muted">{plan.ages}</p>

                <ul className="mt-6 space-y-3 border-t border-text/10 pt-6 font-sans text-sm text-text-muted">
                  <li className="flex items-center gap-2">
                    <span aria-hidden="true" className="h-1 w-1 rounded-full bg-secondary" />
                    {plan.length} sessions
                  </li>
                  <li className="flex items-center gap-2">
                    <span aria-hidden="true" className="h-1 w-1 rounded-full bg-secondary" />
                    {plan.format}
                  </li>
                </ul>

                <p className="mt-6 flex-1 font-sans text-[15px] leading-relaxed text-text-muted">
                  {plan.description}
                </p>

                <a
                  href="#contact"
                  className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 ${
                    plan.featured
                      ? "bg-primary text-bg hover:brightness-90"
                      : "border border-text/20 text-text hover:border-primary hover:text-primary"
                  }`}
                >
                  Inquire for Pricing
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
