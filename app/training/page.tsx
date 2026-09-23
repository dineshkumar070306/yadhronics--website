import SectionHeading from "@/components/ui/SectionHeading";
import CourseCard from "@/components/ui/CourseCard";
import { courses } from "@/data/courses";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Training & Courses",
  description:
    "Hands-on courses in web development, cyber security, embedded systems, PCB design, IoT, and data science.",
};

export default function TrainingPage() {
  return (
    <section className="section pt-32">
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="Training"
          title="Hands-On Courses for Real Skills"
          subtitle="Industry-aligned curriculum, 1:1 mentorship, and certification. Choose from 6 career-focused programmes."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
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
      </div>
    </section>
  );
}