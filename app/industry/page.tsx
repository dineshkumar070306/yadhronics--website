import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Link from "next/link";
import {
  Zap,
  Shield,
  DollarSign,
  Clock,
  Layers,
  Users,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Industry & Startups",
  description:
    "Product development services for startups and industry — PCB design, firmware, IoT, and full-stack engineering.",
};

const reasons = [
  {
    icon: Layers,
    title: "Full-Stack Capability",
    desc: "Hardware, firmware, cloud, and app — all under one roof. No vendor coordination overhead.",
  },
  {
    icon: DollarSign,
    title: "Affordable & Transparent",
    desc: "Competitive Indian pricing with clear quotes, milestones, and no hidden costs.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    desc: "Prototype-ready designs in weeks, not months. Agile process with weekly demos.",
  },
  {
    icon: Shield,
    title: "Production-Grade Quality",
    desc: "IEC-compliant designs, DFM/DFA checks, and validated firmware ready for certification.",
  },
  {
    icon: Users,
    title: "Skilled Engineering Team",
    desc: "Senior engineers with 5–10+ years of hands-on product development experience.",
  },
  {
    icon: Clock,
    title: "Post-Delivery Support",
    desc: "3 months of free support on all projects, with ongoing maintenance packages available.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Discovery Call",
    desc: "30-minute call to understand your requirements, timeline, and budget.",
  },
  {
    num: "02",
    title: "Proposal & Quote",
    desc: "Detailed scope, deliverables, milestones, and fixed-price or time-and-materials quote.",
  },
  {
    num: "03",
    title: "Design & Prototype",
    desc: "Architecture, schematics, firmware, and first working prototype with weekly reviews.",
  },
  {
    num: "04",
    title: "Testing & Validation",
    desc: "Full test cycle including functional, environmental, and reliability testing.",
  },
  {
    num: "05",
    title: "Production Handover",
    desc: "Documentation, Gerbers, BOM, firmware source, and manufacturing support.",
  },
  {
    num: "06",
    title: "Post-Launch Support",
    desc: "3 months free support, plus optional AMC for ongoing maintenance.",
  },
];

export default function IndustryPage() {
  return (
    <>
     <section className="bg-warm py-32">
  <div className="container mx-auto max-w-3xl text-center">
    <p className="eyebrow mb-3 text-accent">
      — For Industry & Startups —
    </p>
    <h1 className="mb-6 font-heading text-4xl font-semibold text-ink md:text-5xl">
      Your Engineering Partner From Idea to Production
    </h1>
    <div className="divider mx-auto" />
    <p className="mb-8 text-lg font-light text-muted">
      PCB design, firmware, IoT, control panels, and web apps — all delivered
      by one accountable team.
    </p>
    <Link href="/contact?type=project" className="btn-primary">
      Request a Project Quote →
    </Link>
  </div>
</section>

      <section className="section">
        <div className="container mx-auto">
          <SectionHeading
            eyebrow="Why Yadhronics"
            title="Built for Founders and Engineering Teams"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r) => (
              <div key={r.title} className="card">
                <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3 text-accent">
                  <r.icon size={28} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-primary">
                  {r.title}
                </h3>
                <p className="text-gray-600">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container mx-auto">
          <SectionHeading
            eyebrow="Our Process"
            title="Six Steps From Concept to Production"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.num} className="card">
                <span className="mb-3 inline-block text-3xl font-bold text-accent/30">
                  {step.num}
                </span>
                <h3 className="mb-2 font-bold text-primary">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Have a Project in Mind?
          </h2>
          <p className="mb-8 text-lg text-gray-300">
            Get a detailed quote within 48 hours. No obligation, no spam.
          </p>
          <Button href="/contact?type=project" variant="accent">
            Request a Quote →
          </Button>
        </div>
      </section>
    </>
  );
}