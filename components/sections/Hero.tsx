import { Phone, MapPin } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
  <section className="relative flex flex-1 items-center overflow-hidden bg-primary pt-10 pb-8 text-white">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Glow blobs */}
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-cta/20 blur-3xl" />

      <div className="container relative mx-auto py-20">
        <div className="mx-auto max-w-6xl text-center">
          {/* Badge */}
          <span className="mb-6 inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Engineering • Training • Innovation
          </span>

          {/* Headline — smaller, one row, unique colours per word */}
          <h1 className="mb-6 whitespace-nowrap font-black leading-tight tracking-tight text-[clamp(1.25rem,4.2vw,4.5rem)]">
            <span className="text-white">BUILD.</span>{" "}
            <span className="bg-gradient-to-r from-accent via-cyan-300 to-accent bg-clip-text text-transparent">
              INNOVATE.
            </span>{" "}
            <span className="bg-gradient-to-r from-cta via-orange-400 to-cta bg-clip-text text-transparent">
              TRANSFORM.
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="mx-auto mb-10 max-w-2xl text-base text-gray-300 md:text-lg">
            Engineering project development, skill training, and electronics
            product development — for students, startups, and industry.
          </p>

          {/* CTAs */}
          <div className="mb-10 flex flex-col justify-center gap-4 sm:flex-row">
  <Button href="/projects" variant="accent">
    View Projects →
  </Button>
  <Button
    href="/industry"
    variant="secondary"
    className="border-white text-white hover:bg-white hover:text-primary"
  >
    Request a Project Quote →
  </Button>
</div>

          {/* Contact info block */}
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-3 border-t border-white/10 pt-6 text-sm text-gray-300 sm:flex-row sm:gap-8">
            <a
              href="tel:+917639329479"
              className="flex items-center gap-2 transition hover:text-accent"
            >
              <Phone size={16} className="text-accent" />
              <span>+91 76393 29479</span>
            </a>
            <div className="hidden h-4 w-px bg-white/20 sm:block" />
            <div className="flex max-w-md items-center gap-2 text-center sm:text-left">
              <MapPin size={16} className="flex-shrink-0 text-accent" />
              <span className="leading-snug">
                109/1, First Floor, SIHS Colony Rd, near A.R.S Mahal, Civil
                Aerodrome Post, Coimbatore, Tamil Nadu 641005
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}