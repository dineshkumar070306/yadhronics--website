import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/forms/ContactForm";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Yadhronics for project enquiries, course enrolment, or college partnership.",
};

export default function ContactPage() {
  return (
    <section className="section pt-32">
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Talk"
          subtitle="Whether you're a student, college, or company — we'd love to hear from you."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-1">
            <div className="card">
              <div className="mb-3 flex items-center gap-3">
                <MapPin className="text-accent" size={22} />
                <h3 className="font-bold text-primary">Visit Us</h3>
              </div>
              <p className="text-gray-700">{siteConfig.contact.address}</p>
            </div>

            <div className="card">
              <div className="mb-3 flex items-center gap-3">
                <Phone className="text-accent" size={22} />
                <h3 className="font-bold text-primary">Call Us</h3>
              </div>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="text-gray-700 hover:text-accent"
              >
                {siteConfig.contact.phone}
              </a>
            </div>

            <div className="card">
              <div className="mb-3 flex items-center gap-3">
                <Mail className="text-accent" size={22} />
                <h3 className="font-bold text-primary">Email Us</h3>
              </div>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-gray-700 hover:text-accent"
              >
                {siteConfig.contact.email}
              </a>
            </div>

            <div className="card bg-green-50">
              <div className="mb-3 flex items-center gap-3">
                <MessageCircle className="text-green-600" size={22} />
                <h3 className="font-bold text-primary">WhatsApp</h3>
              </div>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace(
                  /\D/g,
                  ""
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-accent"
              >
                Chat with us on WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="card">
              <h2 className="mb-6 text-2xl font-bold text-primary">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}