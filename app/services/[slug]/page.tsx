import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import { services, getService } from "@/data/services";
import { CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return { title: service.title, description: service.shortDesc };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-warm py-32">
  <div className="container mx-auto">
    <p className="eyebrow mb-3 text-accent">— Service —</p>
    <h1 className="mb-4 font-heading text-4xl font-semibold text-ink md:text-5xl">
      {service.title}
    </h1>
    <div className="divider" />
    <p className="max-w-2xl text-lg font-light text-muted">
      {service.shortDesc}
    </p>
  </div>
</section>

      {/* Body */}
      <section className="section">
        <div className="container mx-auto grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="mb-4 text-2xl font-bold text-primary">Overview</h2>
            <p className="mb-10 text-gray-700">{service.overview}</p>

            <h2 className="mb-4 text-2xl font-bold text-primary">
              Capabilities
            </h2>
            <ul className="mb-10 grid gap-3 sm:grid-cols-2">
              {service.capabilities.map((c) => (
                <li key={c} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle2
                    className="mt-0.5 flex-shrink-0 text-accent"
                    size={18}
                  />
                  {c}
                </li>
              ))}
            </ul>

            <h2 className="mb-4 text-2xl font-bold text-primary">
              Our Process
            </h2>
            <ol className="mb-10 space-y-4">
              {service.process.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-cta text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="pt-1 text-gray-700">{step}</span>
                </li>
              ))}
            </ol>

            <h2 className="mb-4 text-2xl font-bold text-primary">
              Deliverables
            </h2>
            <ul className="mb-10 list-inside list-disc space-y-2 text-gray-700">
              {service.deliverables.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>

            <h2 className="mb-4 text-2xl font-bold text-primary">
              Frequently Asked Questions
            </h2>
            <Accordion items={service.faq} />
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="card">
                <h3 className="mb-3 font-bold text-primary">
                  Technologies We Use
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-light px-3 py-1 text-xs font-medium text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="card bg-primary text-white">
                <h3 className="mb-2 font-bold">Ready to start?</h3>
                <p className="mb-4 text-sm text-gray-300">
                  Discuss your project with our team. No obligation.
                </p>
                <Button
                  href="/industry"
                  variant="accent"
                  className="w-full"
                >
                  Discuss Your Project
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}