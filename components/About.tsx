import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative bg-bg px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        <Reveal>
          <div className="relative mx-auto w-full max-w-md">
            {/* Decorative accent frame offset behind the portrait */}
            <div
              aria-hidden="true"
              className="absolute -bottom-5 -right-5 h-full w-full rounded-sm border border-secondary/60"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl shadow-text/20">
              {/* PLACEHOLDER: swap for a real studio portrait of Yoon Huh */}
              <Image
                src="https://picsum.photos/seed/yoonhuh-portrait/800/1000"
                alt="Portrait of Yoon Huh seated at a piano, placeholder photo"
                fill
                sizes="(min-width: 768px) 28rem, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            About the Teacher
          </span>
          <h2 className="underline-flourish mt-4 font-display text-4xl text-text sm:text-5xl">
            A lifetime at the keys
          </h2>

          {/*
            PLACEHOLDER BIO — replace with Yoon Huh's real training,
            performance history, teaching philosophy, and years of
            experience before launch.
          */}
          <div className="mt-8 space-y-5 font-sans text-lg leading-relaxed text-text-muted">
            <p>
              [PLACEHOLDER: Yoon Huh began studying piano at age five and went on to
              train at a leading conservatory, earning a degree in piano
              performance before pursuing advanced studies in pedagogy.]
            </p>
            <p>
              [PLACEHOLDER: Over the past 15+ years, Yoon has taught students
              ranging from curious beginners to pre-college competitors,
              guiding many through recitals, competitions, and conservatory
              auditions.]
            </p>
            <p>
              [PLACEHOLDER: Yoon believes every student carries their own
              musical voice — the role of a teacher is to build the technical
              foundation strong enough to let that voice speak freely.]
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-text/10 pt-8">
            {[
              { value: "15+", label: "Years teaching" },
              { value: "200+", label: "Students guided" },
              { value: "30+", label: "Recitals staged" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-3xl text-primary">{stat.value}</dd>
                <dd className="mt-1 font-sans text-sm text-text-muted">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
