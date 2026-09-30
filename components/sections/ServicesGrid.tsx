import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

export default function ServicesGrid() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="container mx-auto">
        <div className="animate-on-scroll">
          <SectionHeading
            eyebrow="— What We Do —"
            title="Engineering Solutions Across Domains"
            subtitle="From embedded systems to web applications, we deliver end-to-end product development for students, startups, and industry."
          />
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              slug={service.slug}
              title={service.title}
              description={service.shortDesc}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}