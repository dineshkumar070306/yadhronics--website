import { siteConfig } from "@/data/site";

export default function TrustBar() {
  const stats = [
    { value: siteConfig.stats.colleges, label: "Colleges Trusted" },
    { value: siteConfig.stats.students, label: "Students Trained" },
    { value: siteConfig.stats.clients, label: "Industry Clients" },
  ];

  return (
    <section className="bg-white py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold text-primary md:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-gray-600">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}