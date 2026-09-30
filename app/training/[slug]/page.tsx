import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import { courses, getCourse } from "@/data/courses";
import {
  CheckCircle2,
  Clock,
  GraduationCap,
  Award,
  User,
} from "lucide-react";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};
  return { title: course.title, description: course.subtitle };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-warm py-32">
  <div className="container mx-auto max-w-4xl">
    <div className="mb-4 flex flex-wrap gap-2">
      <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
        {course.duration}
      </span>
      <span className="inline-flex items-center gap-1 rounded-full bg-peach/20 px-3 py-1 text-sm font-medium text-ink">
        {course.level}
      </span>
      <span className="inline-flex items-center gap-1 rounded-full bg-sand px-3 py-1 text-sm font-medium text-ink">
        {course.mode}
      </span>
    </div>
    <h1 className="mb-4 font-heading text-4xl font-semibold text-ink md:text-5xl">
      {course.title}
    </h1>
    <div className="divider" />
    <p className="text-lg font-light text-muted">{course.subtitle}</p>
  </div>
</section>

      {/* Body */}
      <section className="section">
        <div className="container mx-auto grid gap-12 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-primary">
                What You Will Learn
              </h2>
              <ul className="space-y-3">
                {course.modules.map((m, i) => (
                  <li key={m} className="flex gap-3 text-gray-700">
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                      {i + 1}
                    </span>
                    <span className="pt-0.5">{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-primary">
                Tools & Technologies Covered
              </h2>
              <div className="flex flex-wrap gap-2">
                {course.tools.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-light px-4 py-1.5 text-sm font-medium text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-primary">
                Hands-On Projects
              </h2>
              <ul className="space-y-3">
                {course.projects.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle2
                      className="mt-0.5 flex-shrink-0 text-accent"
                      size={18}
                    />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card bg-light">
              <div className="flex items-start gap-3">
                <User className="mt-1 flex-shrink-0 text-cta" size={24} />
                <div>
                  <h3 className="mb-1 font-bold text-primary">
                    Instructor Profile
                  </h3>
                  <p className="text-gray-700">{course.instructor}</p>
                </div>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="card border-2 border-accent/30">
                <div className="mb-4">
                  <p className="text-sm text-gray-500">Course Fee</p>
                  <p className="text-3xl font-bold text-primary">
                    {course.price}
                  </p>
                </div>
                <div className="mb-6 space-y-2 text-sm">
                  <p className="flex items-center gap-2 text-gray-600">
                    <Clock size={14} className="text-accent" />
                    {course.duration}
                  </p>
                  <p className="flex items-center gap-2 text-gray-600">
                    <GraduationCap size={14} className="text-accent" />
                    {course.level} Level
                  </p>
                  <p className="flex items-center gap-2 text-gray-600">
                    <Award size={14} className="text-accent" />
                    {course.certification}
                  </p>
                </div>
                <Button
                  href={`/contact?course=${course.slug}`}
                  variant="primary"
                  className="w-full"
                >
                  Enrol Now
                </Button>
              </div>

              <div className="card bg-primary text-white">
                <h3 className="mb-2 font-bold">Have Questions?</h3>
                <p className="mb-4 text-sm text-gray-300">
                  Talk to our counsellor before enrolling.
                </p>
                <Button href="/contact" variant="accent" className="w-full">
                  Contact Us
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}