import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import Button from "@/components/ui/Button";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="Our Work"
          title="Featured Projects"
          subtitle="Real-world solutions deployed across industries and campuses."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 6).map((p) => (
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
        <div className="mt-10 text-center">
          <Button href="/projects" variant="secondary">
            View All Projects →
          </Button>
        </div>
      </div>
    </section>
  );
}