import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import {
  Briefcase,
  MapPin,
  Clock,
  Users,
  GraduationCap,
  Heart,
  Send,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Yadhronics — build the future of embedded systems, IoT, and engineering education with us. Explore open positions.",
};

const benefits = [
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    desc: "Access to all internal training programmes, certifications, and mentorship.",
  },
  {
    icon: Users,
    title: "Collaborative Team",
    desc: "Work with senior engineers on real products — not just slides.",
  },
  {
    icon: Heart,
    title: "Meaningful Work",
    desc: "Ship hardware and firmware that powers 300+ colleges and 100+ clients.",
  },
  {
    icon: Briefcase,
    title: "Growth Path",
    desc: "Clear promotion tracks — from engineer to lead to architect.",
  },
];

const openings = [
  {
    title: "Embedded Systems Engineer",
    type: "Full-time",
    location: "Coimbatore, Tamil Nadu",
    experience: "1–3 years",
    description:
      "Design and develop firmware for ARM Cortex-M and ESP32 platforms. Work on real client products from concept to production.",
    skills: ["C / C++", "FreeRTOS", "STM32", "Communication Protocols"],
  },
  {
    title: "IoT Solutions Engineer",
    type: "Full-time",
    location: "Coimbatore, Tamil Nadu",
    experience: "2–4 years",
    description:
      "Build end-to-end IoT systems — sensor nodes, gateways, MQTT pipelines, and cloud dashboards.",
    skills: ["ESP32", "MQTT", "Node-RED", "AWS IoT"],
  },
  {
    title: "PCB Design Engineer",
    type: "Full-time",
    location: "Coimbatore, Tamil Nadu",
    experience: "1–3 years",
    description:
      "Design 2–8 layer PCBs for industrial and consumer products. Handle schematic, layout, DFM, and fab liaison.",
    skills: ["KiCad / Altium", "Signal Integrity", "DFM", "EMI/EMC"],
  },
  {
    title: "Technical Trainer",
    type: "Full-time / Part-time",
    location: "Coimbatore, Tamil Nadu",
    experience: "2+ years",
    description:
      "Deliver hands-on training programmes at partner colleges and our Coimbatore centre. Develop curriculum and mentor students.",
    skills: ["Embedded / IoT", "Teaching", "Curriculum Design", "Public Speaking"],
  },
  {
    title: "Full-Stack Developer",
    type: "Full-time",
    location: "Coimbatore, Tamil Nadu (Hybrid)",
    experience: "1–4 years",
    description:
      "Build Next.js dashboards, REST APIs, and IoT front-ends for internal products and client projects.",
    skills: ["Next.js", "React", "Node.js", "PostgreSQL / MongoDB"],
  },
  {
    title: "Engineering Intern",
    type: "Internship",
    location: "Coimbatore, Tamil Nadu",
    experience: "Final-year students",
    description:
      "6-month internship for final-year ECE / EEE / CSE students. Work on live client projects with senior mentors.",
    skills: ["Embedded", "PCB", "IoT", "Web"],
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-32 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
            Careers at Yadhronics
          </p>
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Build the Future With Us
          </h1>
          <p className="mb-8 text-lg text-gray-300">
            We're a team of engineers, trainers, and problem-solvers shipping
            real hardware and software for students, startups, and industry.
          </p>
          <Button href="#openings" variant="accent">
            See Open Positions →
          </Button>
        </div>
      </section>

      {/* Why Yadhronics */}
      <section className="section">
        <div className="container mx-auto">
          <SectionHeading
            eyebrow="Why Yadhronics"
            title="Work That Actually Ships"
            subtitle="No corporate theatre. Real products, real students, real impact."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.title} className="card">
                <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3 text-accent">
                  <b.icon size={26} />
                </div>
                <h3 className="mb-2 font-bold text-primary">{b.title}</h3>
                <p className="text-sm text-gray-600">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="section bg-light">
        <div className="container mx-auto">
          <SectionHeading
            eyebrow="Open Positions"
            title="We're Hiring"
            subtitle="All roles are based in Coimbatore. Hybrid options available for software roles."
          />
          <div className="mt-12 space-y-4">
            {openings.map((job) => (
              <div key={job.title} className="card">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-bold text-primary">
                      {job.title}
                    </h3>
                    <div className="mb-3 flex flex-wrap gap-3 text-sm text-gray-600">
                      <span className="inline-flex items-center gap-1">
                        <Briefcase size={14} className="text-accent" />
                        {job.type}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin size={14} className="text-accent" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock size={14} className="text-accent" />
                        {job.experience}
                      </span>
                    </div>
                    <p className="mb-3 text-gray-700">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-light px-3 py-1 text-xs font-medium text-primary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <a
                      href={`mailto:yadhronics.edukid@gmail.com?subject=Application for ${job.title}`}
                      className="btn-primary inline-flex items-center gap-2"
                    >
                      <Send size={16} />
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="section">
        <div className="container mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="How to Apply"
            title="Simple 3-Step Process"
          />
          <div className="mt-12 space-y-6">
            <div className="flex gap-4">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-cta text-lg font-bold text-white">
                1
              </span>
              <div>
                <h3 className="mb-1 font-bold text-primary">
                  Email Your Application
                </h3>
                <p className="text-gray-700">
                  Send your resume + a short note (2–3 paragraphs) to{" "}
                  <a
                    href="mailto:yadhronics.edukid@gmail.com"
                    className="font-semibold text-accent hover:underline"
                  >
                    yadhronics.edukid@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-cta text-lg font-bold text-white">
                2
              </span>
              <div>
                <h3 className="mb-1 font-bold text-primary">
                  Technical Discussion
                </h3>
                <p className="text-gray-700">
                  Shortlisted candidates receive a 45-minute call covering your
                  projects, skills, and how you solve problems.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-cta text-lg font-bold text-white">
                3
              </span>
              <div>
                <h3 className="mb-1 font-bold text-primary">
                  Practical Task + Offer
                </h3>
                <p className="text-gray-700">
                  A small paid task to see how you work. If we're a good fit,
                  we send an offer within 5 working days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Don't See Your Role?
          </h2>
          <p className="mb-8 text-lg text-gray-300">
            We're always looking for great engineers. Send us your profile and
            tell us what you'd like to build.
          </p>
          <Button
            href="mailto:yadhronics.edukid@gmail.com?subject=General Application"
            variant="accent"
          >
            Send Your Resume →
          </Button>
        </div>
      </section>
    </>
  );
}