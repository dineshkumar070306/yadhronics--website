import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PartnershipCTA() {
  return (
    <section className="bg-ink py-20 text-warm">
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow mb-4 inline-block text-gold/80">
            — Partnership —
          </span>
          <h2 className="mb-4 font-heading text-3xl font-semibold text-warm md:text-4xl">
            Partner with Yadhronics for Industry-Academia Collaboration
          </h2>
          <div className="mx-auto mb-8 h-px w-16 bg-gold" />
          <p className="mb-10 text-lg font-light text-warm/70">
            Set up a Centre of Excellence, run workshops, or sponsor
            final-year projects. Join 300+ partner colleges.
          </p>
          <Link
            href="/colleges"
            className="btn-gold group inline-flex items-center gap-2"
          >
            Request a Campus Partnership Proposal
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}