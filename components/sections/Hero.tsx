import { Phone, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex flex-1 items-center overflow-hidden bg-cream pt-10 pb-8">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#152238" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Soft accent blobs — sky blue + peach */}
      <div
        className="parallax-slow absolute -right-40 -top-40 h-96 w-96 rounded-full bg-accent/15 blur-3xl"
        data-speed="0.4"
      />
      <div
        className="parallax-slow absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-peach/20 blur-3xl"
        data-speed="-0.3"
      />

      <div className="container relative mx-auto py-16">
        <div className="mx-auto max-w-4xl text-center">
          <span className="eyebrow mb-6 inline-block">
            — Engineering · Training · Innovation —
          </span>

          <h1 className="mb-6 font-heading text-[clamp(1.75rem,4.5vw,4.5rem)] font-semibold leading-[1.05] tracking-tight text-ink">
            Build. Innovate.{" "}
            <span className="italic text-accent">Transform.</span>
          </h1>

          <div className="divider mx-auto" />

          <p className="mx-auto mb-10 max-w-2xl text-base font-light text-muted md:text-lg">
            Engineering project development, skill training, and electronics
            product development — for students, startups, and industry.
          </p>

          <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/projects" className="btn-primary">
              View Projects <ArrowRight size={16} />
            </Link>
            <Link href="/industry" className="btn-secondary">
              Request a Quote
            </Link>
          </div>

          <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-3 border-t border-ink/10 pt-6 text-sm text-muted sm:flex-row sm:gap-8">
            <a
              href="tel:+917639329479"
              className="flex items-center gap-2 transition hover:text-accent"
            >
              <Phone size={16} className="text-accent" />
              <span>+91 76393 29479</span>
            </a>
            <div className="hidden h-4 w-px bg-ink/15 sm:block" />
            <div className="flex max-w-md items-center gap-2 text-center sm:text-left">
              <MapPin size={16} className="flex-shrink-0 text-peach" />
              <span className="leading-snug">
                109/1, First Floor, SIHS Colony Rd, Coimbatore, Tamil Nadu 641005
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}