import Image from "next/image";
import Reveal from "./Reveal";

/**
 * PLACEHOLDER GALLERY — sourced from picsum.photos as stand-ins.
 * Replace each src with a real recital or studio photo and update alt text.
 */
const PHOTOS = [
  { src: "gallery-recital-hall.jpg", height: 420, alt: "[PLACEHOLDER] Students seated before a recital" },
  { src: "gallery-studio-piano.jpg", height: 300, alt: "[PLACEHOLDER] The studio's grand piano" },
  { src: "gallery-student-hands.jpg", height: 340, alt: "[PLACEHOLDER] A student's hands mid-performance" },
  { src: "gallery-recital-bow.jpg", height: 460, alt: "[PLACEHOLDER] A student bowing after a recital" },
  { src: "gallery-sheet-music.jpg", height: 280, alt: "[PLACEHOLDER] Annotated sheet music on a stand" },
  { src: "gallery-studio-window.jpg", height: 380, alt: "[PLACEHOLDER] Afternoon light in the studio" },
  { src: "gallery-group-photo.jpg", height: 320, alt: "[PLACEHOLDER] Students and families after a recital" },
  { src: "gallery-award-medal.jpg", height: 300, alt: "[PLACEHOLDER] A competition medal on the piano lid" },
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
              key={photo.src}
              className="mb-4 break-inside-avoid overflow-hidden rounded-md"
              style={{ height: photo.height }}
            >
              <div className="relative h-full w-full">
                <Image
                  src={`/images/${photo.src}`}
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
