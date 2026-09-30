import Link from "next/link";
import { Mail, Phone, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import { siteConfig } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Yadhronics for project enquiries, course enrolment, or college partnership.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-warm py-32">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-3 text-accent">— Contact —</p>
          <h1 className="mb-6 font-heading text-4xl font-semibold text-ink md:text-5xl">
            Let's Talk
          </h1>
          <div className="divider mx-auto" />
          <p className="text-lg font-light text-muted">
            Whether you're a student, college, or company — we'd love to hear
            from you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-cream py-20">
        <div className="container mx-auto">
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Contact Info — narrower column */}
            <div className="lg:col-span-2">
              <h2 className="mb-8 font-heading text-2xl font-semibold text-ink">
                Reach Us Directly
              </h2>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-4 border-l-2 border-accent pl-5">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-2">
                      <MapPin size={18} className="text-accent" />
                      <h3 className="font-heading text-base font-semibold text-ink">
                        Visit Us
                      </h3>
                    </div>
                    <p className="text-sm font-light leading-relaxed text-muted">
                      {siteConfig.contact.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 border-l-2 border-accent pl-5">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-2">
                      <Phone size={18} className="text-accent" />
                      <h3 className="font-heading text-base font-semibold text-ink">
                        Call Us
                      </h3>
                    </div>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-sm font-light text-muted transition hover:text-accent"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 border-l-2 border-accent pl-5">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-2">
                      <Mail size={18} className="text-accent" />
                      <h3 className="font-heading text-base font-semibold text-ink">
                        Email Us
                      </h3>
                    </div>
                    <a
                      href="mailto:yadhronics.edukid@gmail.com"
                      className="break-all text-sm font-light text-muted transition hover:text-accent"
                    >
                      yadhronics.edukid@gmail.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4 border-l-2 border-accent pl-5">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-2">
                      <MessageCircle size={18} className="text-accent" />
                      <h3 className="font-heading text-base font-semibold text-ink">
                        WhatsApp
                      </h3>
                    </div>
                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-light text-muted transition hover:text-accent"
                    >
                      Chat with us
                      <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Small note */}
              <div className="mt-10 border-t border-ink/10 pt-6">
                <p className="text-xs font-light uppercase tracking-widest text-muted">
                  Response time: within 24 hours
                </p>
              </div>
            </div>

            {/* Form — wider column */}
            <div className="lg:col-span-3">
              <div className="rounded-sm border border-ink/8 bg-white p-8 md:p-10">
                <h2 className="mb-2 font-heading text-2xl font-semibold text-ink">
                  Send Us a Message
                </h2>
                <p className="mb-8 text-sm font-light text-muted">
                  Fill in the form and we'll get back to you shortly.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}