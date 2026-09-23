import { notFound } from "next/navigation";
import Image from "next/image";
import { projects, getProject } from "@/data/projects";
import { CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.shortDesc };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-32 text-white">
        <div className="container mx-auto">
          <span className="mb-3 inline-block rounded-full bg-cta px-3 py-1 text-xs font-semibold">
            {project.category}
          </span>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            {project.title}
          </h1>
          <p className="max-w-2xl text-lg text-gray-300">
            {project.shortDesc}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="section">
        <div className="container mx-auto max-w-4xl">
          <div className="relative mb-10 aspect-video overflow-hidden rounded-xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="mb-3 text-2xl font-bold text-primary">
                Problem Statement
              </h2>
              <p className="text-gray-700">{project.problem}</p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-bold text-primary">
                Our Solution
              </h2>
              <p className="text-gray-700">{project.solution}</p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-bold text-primary">
                Key Features
              </h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle2
                      className="mt-0.5 flex-shrink-0 text-accent"
                      size={18}
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-bold text-primary">
                Technical Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="card">
                <h3 className="mb-2 font-bold text-primary">Deployment</h3>
                <p className="text-gray-700">{project.deployment}</p>
              </div>
              <div className="card">
                <h3 className="mb-2 font-bold text-primary">
                  Student Involvement
                </h3>
                <p className="text-gray-700">{project.studentInvolvement}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}