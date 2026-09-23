import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Solutions",
  description:
    "Real-world engineering projects across automation, IoT, AI, and industrial domains.",
};

export default function ProjectsPage() {
  return (
    <section className="section pt-32">
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="Portfolio"
          title="Projects & Solutions"
          subtitle="Deployed solutions across security, agriculture, industrial, and smart home domains."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard
              key={p.slug}
              slug={p.slug}
              title={p.title}
              category={p.category}
              image={p.image}
              techStack={p.techStack}
            />
          ))}
        </div>
      </div>
    </section>
  );
}