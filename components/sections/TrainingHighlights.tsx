import SectionHeading from "@/components/ui/SectionHeading";
import CourseCard from "@/components/ui/CourseCard";
import { courses } from "@/data/courses";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function TrainingHighlights() {
  return (
    <section className="bg-warm py-16 md:py-24">
      <div className="container mx-auto">
        <div className="animate-on-scroll">
          <SectionHeading
            eyebrow="— Training —"
            title="Hands-On Courses for Real Skills"
            subtitle="Industry-aligned curriculum with 1:1 mentorship and certification. Choose from 6 career-focused programmes."
          />
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
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

        <div className="mt-16 text-center">
          <Link
            href="/training"
            className="btn-secondary group inline-flex items-center gap-2"
          >
            View All Courses
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}