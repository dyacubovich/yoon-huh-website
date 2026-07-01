import Reveal from "./Reveal";

/** PLACEHOLDER TESTIMONIALS — replace with real parent/student quotes and names. */
const FEATURED = {
  quote:
    "Yoon has a gift for meeting kids exactly where they are. My daughter went from dreading practice to asking for extra time at the piano.",
  name: "[PLACEHOLDER: Parent Name]",
  detail: "Parent of a 9-year-old student",
};

const TESTIMONIALS = [
  {
    quote:
      "I came back to piano as an adult after a 20-year break. Yoon never made me feel behind — just ready to keep going.",
    name: "[PLACEHOLDER: Student Name]",
    detail: "Adult student, 2 years",
  },
  {
    quote:
      "The recital prep alone was worth it. My son walked on stage more confident than I'd ever seen him.",
    name: "[PLACEHOLDER: Parent Name]",
    detail: "Parent of a 12-year-old student",
  },
  {
    quote:
      "Every lesson balances discipline with genuine warmth. It's rare to find both in one teacher.",
    name: "[PLACEHOLDER: Parent Name]",
    detail: "Parent of two students",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-bg-alt px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Stories
          </span>
          <h2 className="mt-4 font-display text-4xl text-text sm:text-5xl">
            From students and families
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-16">
          <figure className="rounded-lg border border-secondary/40 bg-surface px-8 py-12 text-center sm:px-16">
            <span aria-hidden="true" className="font-display text-6xl leading-none text-secondary">
              &ldquo;
            </span>
            <blockquote>
              <p className="mx-auto max-w-2xl font-display text-2xl italic leading-relaxed text-text sm:text-3xl">
                {FEATURED.quote}
              </p>
            </blockquote>
            <figcaption className="mt-6 font-sans text-sm text-text-muted">
              <span className="font-semibold text-text">{FEATURED.name}</span>
              {" — "}
              {FEATURED.detail}
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name + i} delay={i * 0.1}>
              <figure className="flex h-full flex-col rounded-lg border border-text/10 bg-surface p-8">
                <span aria-hidden="true" className="font-display text-4xl leading-none text-secondary">
                  &ldquo;
                </span>
                <blockquote className="flex-1">
                  <p className="mt-2 font-sans text-[15px] leading-relaxed text-text-muted">
                    {t.quote}
                  </p>
                </blockquote>
                <figcaption className="mt-6 border-t border-text/10 pt-4 font-sans text-sm text-text-muted">
                  <span className="font-semibold text-text">{t.name}</span>
                  <br />
                  {t.detail}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
