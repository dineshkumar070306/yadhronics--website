import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

export default function ServicesGrid() {
  return (
    <section className="bg-light py-12 md:py-16">
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="What We Do"
          title="Engineering Solutions Across Domains"
          subtitle="From embedded systems to web applications, we deliver end-to-end product development services."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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