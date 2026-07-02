# yoon-huh-website

Portfolio site for Yoon Huh's piano studio. Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Development

```bash
npm install
npm run dev
```

## Updating placeholder content

The site currently ships with placeholder text and stand-in photos. Everything that needs replacing is marked `PLACEHOLDER` in the code.

### Text (bio, testimonials, contact info, availability, lesson formats)

Just edit the strings directly — no structural changes needed.

| What | File |
|---|---|
| Bio paragraphs | `components/About.tsx` |
| Studio status ("welcoming new students...") | `components/Hero.tsx` |
| Address & hours | `components/Contact.tsx` |
| Email | `components/Contact.tsx` |
| Testimonial quotes/names | `components/Testimonials.tsx` (array of `{ quote, name, role }` objects) |
| Lesson durations/ages | `components/LessonInfo.tsx` |
| Gallery captions (`alt` text) | `components/Gallery.tsx` |

### Images (portrait + 8 gallery photos)

Images are self-hosted in `public/images/`. To swap a photo, overwrite the file with the real photo — keep the same filename and no code changes are needed:

- `public/images/portrait.jpg` — About section photo (roughly 4:5 portrait works best, ~800×1000px)
- `public/images/gallery-*.jpg` — 8 gallery photos, named for their placeholder subject (`gallery-recital-hall.jpg`, `gallery-studio-piano.jpg`, etc.)

Exact pixel dimensions don't need to match — `next/image` resizes automatically. After replacing a gallery photo, update its matching `alt` text in `components/Gallery.tsx` to describe the real photo.

To add, remove, or rename gallery photos (not just swap them), edit the `PHOTOS` array in `components/Gallery.tsx`.
