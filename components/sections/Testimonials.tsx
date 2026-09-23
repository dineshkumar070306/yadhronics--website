import SectionHeading from "@/components/ui/SectionHeading";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "The embedded systems course gave me the practical skills I needed for my final-year project and placement. The mentorship was outstanding.",
    name: "Anjali R.",
    role: "ECE Student, 3rd Year",
  },
  {
    quote:
      "Yadhronics partnered with us to set up a Centre of Excellence. Their team delivered exactly what they promised, on time.",
    name: "Prof. Sharma",
    role: "HoD, Electronics Department",
  },
  {
    quote:
      "We needed a custom IoT product prototype in 6 weeks. Yadhronics delivered a working, production-ready design.",
    name: "Rahul K.",
    role: "Startup Founder",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Students & Clients Say"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="card">
              <Quote className="mb-4 text-accent" size={32} />
              <p className="mb-6 italic text-gray-700">{t.quote}</p>
              <div>
                <p className="font-bold text-primary">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}