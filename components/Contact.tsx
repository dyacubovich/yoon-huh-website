"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="relative bg-text px-6 py-28 text-bg sm:px-10 sm:py-36">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:gap-24">
        <Reveal>
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
            Get in Touch
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">Start the conversation</h2>
          <p className="mt-5 max-w-md font-sans text-lg leading-relaxed text-bg/70">
            Tell me a little about your student — age, experience, and goals —
            and I&rsquo;ll follow up within a couple of days.
          </p>

          {/* PLACEHOLDER: replace with the real studio address and hours. */}
          <dl className="mt-12 space-y-6 border-t border-bg/15 pt-8 font-sans text-sm">
            <div>
              <dt className="font-semibold uppercase tracking-wide text-secondary">Studio Location</dt>
              <dd className="mt-1 text-bg/70">
                [PLACEHOLDER: 123 Maple Street, Suite 4, Your City, ST 00000]
              </dd>
            </div>
            <div>
              <dt className="font-semibold uppercase tracking-wide text-secondary">Studio Hours</dt>
              <dd className="mt-1 text-bg/70">
                [PLACEHOLDER: Tues–Fri, 2:00–7:00 PM · Saturdays, 9:00 AM–1:00 PM]
              </dd>
            </div>
            <div>
              <dt className="font-semibold uppercase tracking-wide text-secondary">Email</dt>
              <dd className="mt-1 text-bg/70">
                <a
                  href="mailto:hello@yoonhuhpiano.com"
                  className="underline decoration-secondary/40 underline-offset-4 hover:text-secondary"
                >
                  [PLACEHOLDER: hello@yoonhuhpiano.com]
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div>
              <label htmlFor="name" className="mb-2 block font-sans text-sm font-medium text-bg/80">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="w-full rounded-md border border-bg/20 bg-bg/5 px-4 py-3 font-sans text-bg placeholder:text-bg/40 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block font-sans text-sm font-medium text-bg/80">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full rounded-md border border-bg/20 bg-bg/5 px-4 py-3 font-sans text-bg placeholder:text-bg/40 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                placeholder="you@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block font-sans text-sm font-medium text-bg/80"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full resize-none rounded-md border border-bg/20 bg-bg/5 px-4 py-3 font-sans text-bg placeholder:text-bg/40 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                placeholder="Tell me about your student..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex w-full items-center justify-center rounded-full bg-secondary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-text transition-all hover:-translate-y-0.5 hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            <div role="status" aria-live="polite">
              {status === "success" && (
                <p className="font-sans text-sm text-secondary">
                  Thank you — your message has been sent.
                </p>
              )}
              {status === "error" && (
                <p className="font-sans text-sm text-[#E8A796]">
                  {errorMessage || "Something went wrong. Please try again."}
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
