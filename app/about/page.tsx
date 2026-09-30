import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { Target, Eye, Heart } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Yadhronics is an engineering and technology company specialising in embedded systems, IoT, control panels, and PCB design.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-warm py-32">
  <div className="container mx-auto max-w-3xl text-center">
    <p className="eyebrow mb-3 text-accent">
      — About Yadhronics —
    </p>
    <h1 className="mb-6 font-heading text-4xl font-semibold text-ink md:text-5xl">
      Engineering the Future, Together
    </h1>
    <div className="divider mx-auto" />
    <p className="text-lg font-light text-muted">
      Yadhronics is an engineering and technology company specialising in
      embedded systems, IoT, control panels, and PCB design — with a strong
      focus on industry-academia collaboration.
    </p>
  </div>
</section>

      <section className="section">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Our Story"
            title="From a Small Lab to 300+ Partner Colleges"
          />
          <p className="mt-8 text-lg text-gray-700">
            Yadhronics was founded with a simple mission: bridge the gap
            between industry-grade engineering and hands-on student learning.
            What started as a small lab building custom embedded systems has
            grown into a full-service product development and training company.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            Today, we work with startups, manufacturers, and educational
            institutions across India, delivering end-to-end engineering
            solutions while training the next generation of engineers.
          </p>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container mx-auto">
          <SectionHeading
            eyebrow="What Drives Us"
            title="Vision, Mission, Values"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="card">
              <Eye className="mb-4 text-accent" size={32} />
              <h3 className="mb-2 text-xl font-bold text-primary">Vision</h3>
              <p className="text-gray-600">
                To be India's most trusted engineering partner for product
                development and industry-aligned skill training.
              </p>
            </div>
            <div className="card">
              <Target className="mb-4 text-accent" size={32} />
              <h3 className="mb-2 text-xl font-bold text-primary">Mission</h3>
              <p className="text-gray-600">
                Deliver production-grade engineering solutions while empowering
                students with hands-on, industry-relevant skills.
              </p>
            </div>
            <div className="card">
              <Heart className="mb-4 text-accent" size={32} />
              <h3 className="mb-2 text-xl font-bold text-primary">Values</h3>
              <p className="text-gray-600">
                Integrity, craftsmanship, mentorship, and an obsession with
                real-world outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Work With Us</h2>
          <p className="mb-8 text-lg text-gray-300">
            Whether you're a student, college, or company — let's build
            something together.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="accent">
              Get in Touch
            </Button>
            <Button
              href="/services"
              variant="secondary"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}