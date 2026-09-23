import SectionHeading from "@/components/ui/SectionHeading";
import CourseCard from "@/components/ui/CourseCard";
import Button from "@/components/ui/Button";
import { courses } from "@/data/courses";

export default function TrainingHighlights() {
  return (
    <section className="bg-light py-12 md:py-16">
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="Training"
          title="Hands-On Courses for Students & Professionals"
          subtitle="Industry-aligned curriculum with 1:1 mentorship and certification."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.slice(0, 3).map((c) => (
            <CourseCard
              key={c.slug}
              slug={c.slug}
              title={c.title}
              subtitle={c.subtitle}
              duration={c.duration}
              level={c.level}
              certification={c.certification}
            />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/training">View All Courses →</Button>
        </div>
      </div>
    </section>
  );
}