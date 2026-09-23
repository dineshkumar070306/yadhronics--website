import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Engineering services across embedded systems, IoT, PCB design, firmware, control panels, and web development.",
};

export default function ServicesPage() {
  return (
    <section className="section pt-32">
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="Services"
          title="Engineering Solutions"
          subtitle="End-to-end product development across six service verticals."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard
              key={s.slug}
              slug={s.slug}
              title={s.title}
              description={s.shortDesc}
              icon={s.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}