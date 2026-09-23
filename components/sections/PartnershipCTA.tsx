import Button from "@/components/ui/Button";

export default function PartnershipCTA() {
  return (
    <section className="bg-primary py-16 text-white">
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Partner with Yadhronics for Industry-Academia Collaboration
          </h2>
          <p className="mb-8 text-lg text-gray-300">
            Set up a Centre of Excellence, run workshops, or sponsor
            final-year projects. Join 300+ partner colleges.
          </p>
          <Button href="/colleges" variant="accent">
            Request a Campus Partnership Proposal →
          </Button>
        </div>
      </div>
    </section>
  );
}