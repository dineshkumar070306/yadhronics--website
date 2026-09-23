import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import {
  Building2,
  Users,
  Award,
  Rocket,
  Handshake,
  GraduationCap,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Colleges & Institutions",
  description:
    "Partner with Yadhronics for industry-academia collaboration, Centre of Excellence setup, workshops, and MoU-driven programmes.",
};

const models = [
  {
    icon: GraduationCap,
    title: "Guest Lectures & Workshops",
    desc: "Industry experts deliver hands-on technical sessions on embedded systems, IoT, PCB design, and more.",
  },
  {
    icon: Users,
    title: "Semester-Long Project Mentorship",
    desc: "1:1 guidance for final-year projects with real industry problems and validated outcomes.",
  },
  {
    icon: Building2,
    title: "Centre of Excellence (CoE)",
    desc: "Set up a fully-equipped CoE on your campus with lab setup, curriculum, and ongoing support.",
  },
  {
    icon: Award,
    title: "Joint Research & Publication",
    desc: "Collaborate on applied research with our engineering team and co-publish results.",
  },
  {
    icon: Rocket,
    title: "Internship Pipelines",
    desc: "Structured internship programmes connecting your students with industry work experience.",
  },
  {
    icon: Handshake,
    title: "Final-Year Project Sponsorship",
    desc: "Sponsor projects with real product scope, industry mentoring, and placement opportunities.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Initial Discussion",
    desc: "Talk with the department HoD or placement cell about your institution's goals.",
  },
  {
    num: "02",
    title: "MoU Signing",
    desc: "Formal agreement with clear scope, deliverables, timelines, and outcome metrics.",
  },
  {
    num: "03",
    title: "Needs Assessment",
    desc: "Customised programme design based on student profile and industry requirements.",
  },
  {
    num: "04",
    title: "Execution",
    desc: "Workshops, projects, or CoE setup — delivered by our engineering team on your campus.",
  },
  {
    num: "05",
    title: "Measurement & Certification",
    desc: "Outcome measurement, joint certification, and continuous improvement feedback.",
  },
];

export default function CollegesPage() {
  return (
    <>
      <section className="bg-primary py-32 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
            Industry-Academia Collaboration
          </p>
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Partner with Yadhronics for Real Student Outcomes
          </h1>
          <p className="mb-8 text-lg text-gray-300">
            Join 300+ colleges who trust us for industry-aligned training,
            project mentorship, and Centre of Excellence setup.
          </p>
          <Button href="/contact?type=partnership" variant="accent">
            Request a Campus Partnership Proposal →
          </Button>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto">
          <SectionHeading
            eyebrow="Collaboration Models"
            title="Six Ways We Partner With Colleges"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {models.map((m) => (
              <div key={m.title} className="card">
                <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3 text-accent">
                  <m.icon size={28} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-primary">
                  {m.title}
                </h3>
                <p className="text-gray-600">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container mx-auto">
          <SectionHeading
            eyebrow="Our Process"
            title="From First Call to Certified Outcomes"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step) => (
              <div key={step.num}>
                <span className="mb-4 inline-block text-4xl font-bold text-accent/30">
                  {step.num}
                </span>
                <h3 className="mb-2 font-bold text-primary">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto">
          <SectionHeading
            eyebrow="Evidence"
            title="Outcomes That Speak for Themselves"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "300+", label: "Partner Colleges" },
              { value: "5000+", label: "Students Trained" },
              { value: "150+", label: "Workshops Delivered" },
              { value: "85%", label: "Placement Rate" },
            ].map((s) => (
              <div key={s.label} className="card text-center">
                <p className="text-4xl font-bold text-primary">{s.value}</p>
                <p className="mt-2 text-sm text-gray-600">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Ready to Partner With Us?
          </h2>
          <p className="mb-8 text-lg text-gray-300">
            Get a customised partnership proposal for your institution within
            48 hours.
          </p>
          <Button href="/contact?type=partnership" variant="accent">
            Request Proposal →
          </Button>
        </div>
      </section>
    </>
  );
}