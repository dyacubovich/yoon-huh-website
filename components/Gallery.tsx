import Image from "next/image";
import Reveal from "./Reveal";

/**
 * PLACEHOLDER GALLERY — sourced from picsum.photos as stand-ins.
 * Replace each src with a real recital or studio photo and update alt text.
 */
const PHOTOS = [
  { seed: "recital-hall", height: 420, alt: "[PLACEHOLDER] Students seated before a recital" },
  { seed: "studio-piano", height: 300, alt: "[PLACEHOLDER] The studio's grand piano" },
  { seed: "student-hands", height: 340, alt: "[PLACEHOLDER] A student's hands mid-performance" },
  { seed: "recital-bow", height: 460, alt: "[PLACEHOLDER] A student bowing after a recital" },
  { seed: "sheet-music", height: 280, alt: "[PLACEHOLDER] Annotated sheet music on a stand" },
  { seed: "studio-window", height: 380, alt: "[PLACEHOLDER] Afternoon light in the studio" },
  { seed: "group-photo", height: 320, alt: "[PLACEHOLDER] Students and families after a recital" },
  { seed: "award-medal", height: 300, alt: "[PLACEHOLDER] A competition medal on the piano lid" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-bg px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Gallery
          </span>
          <h2 className="mt-4 font-display text-4xl text-text sm:text-5xl">
            Moments from the studio
          </h2>
          <p className="mt-5 font-sans text-lg leading-relaxed text-text-muted">
            Recitals, practice sessions, and everything in between.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-16 columns-2 gap-4 sm:columns-3 [column-fill:balance]">
          {PHOTOS.map((photo, i) => (
            <div
              key={photo.seed}
              className="mb-4 break-inside-avoid overflow-hidden rounded-md"
              style={{ height: photo.height }}
            >
              <div className="relative h-full w-full">
                <Image
                  src={`https://picsum.photos/seed/${photo.seed}/600/${photo.height * 2}`}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  loading={i < 3 ? "eager" : "lazy"}
                />
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
