import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ServicesGrid from "@/components/sections/ServicesGrid";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import TrainingHighlights from "@/components/sections/TrainingHighlights";
import Testimonials from "@/components/sections/Testimonials";
import PartnershipCTA from "@/components/sections/PartnershipCTA";

export default function HomePage() {
  return (
    <div className="snap-container">
      {/* Hero + TrustBar together as one full-screen snap section */}
      <section className="snap-section !justify-between">
        <Hero />
        <TrustBar />
      </section>

      {/* Services — full-screen snap */}
      <section className="snap-section">
        <ServicesGrid />
      </section>

      {/* Projects — full-screen snap */}
      <section className="snap-section">
        <FeaturedProjects />
      </section>

      {/* Training — full-screen snap */}
      <section className="snap-section">
        <TrainingHighlights />
      </section>

      {/* Testimonials — full-screen snap */}
      <section className="snap-section">
        <Testimonials />
      </section>

      {/* Partnership CTA — full-screen snap */}
      <section className="snap-section">
        <PartnershipCTA />
      </section>
    </div>
  );
}