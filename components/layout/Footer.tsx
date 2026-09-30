import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-6 inline-block rounded-lg bg-white p-3">
              <Image
                src="/images/logo.png"
                alt="Yadhronics"
                width={180}
                height={56}
                style={{ width: "auto", height: "56px" }}
              />
            </div>
            <p className="text-sm font-light text-warm/70">
              {siteConfig.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/yadhronics-the-edu-kid-7696b6324/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-warm transition hover:bg-[#0A66C2] hover:scale-110"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="https://www.instagram.com/yadhronics"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-warm transition hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#E1306C] hover:to-[#F77737] hover:scale-110"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-warm transition hover:bg-[#333] hover:scale-110"
              >
                <FaGithub size={18} />
              </a>

              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-warm transition hover:bg-[#FF0000] hover:scale-110"
              >
                <FaYoutube size={18} />
              </a>

              <a
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email us"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-warm transition hover:bg-[#EA4335] hover:scale-110"
              >
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-lg font-semibold text-warm">Services</h4>
            <ul className="space-y-2 text-sm font-light text-warm/70">
              <li><Link href="/services/embedded-systems" className="link-underline hover:text-accent">Embedded Systems</Link></li>
              <li><Link href="/services/iot-solutions" className="link-underline hover:text-accent">IoT Solutions</Link></li>
              <li><Link href="/services/control-panels" className="link-underline hover:text-accent">Control Panels</Link></li>
              <li><Link href="/services/pcb-design" className="link-underline hover:text-accent">PCB Design</Link></li>
              <li><Link href="/services/firmware" className="link-underline hover:text-accent">Firmware</Link></li>
              <li><Link href="/services/web-development" className="link-underline hover:text-accent">Web Development</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-lg font-semibold text-warm">Quick Links</h4>
            <ul className="space-y-2 text-sm font-light text-warm/70">
              <li><Link href="/about" className="link-underline hover:text-accent">About Us</Link></li>
              <li><Link href="/projects" className="link-underline hover:text-accent">Projects</Link></li>
              <li><Link href="/training" className="link-underline hover:text-accent">Training</Link></li>
              <li><Link href="/careers" className="link-underline hover:text-accent">Careers</Link></li>
              <li><Link href="/colleges" className="link-underline hover:text-accent">For Colleges</Link></li>
              <li><Link href="/industry" className="link-underline hover:text-accent">For Industry</Link></li>
              <li><Link href="/contact" className="link-underline hover:text-accent">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-lg font-semibold text-warm">Contact</h4>
            <ul className="space-y-3 text-sm font-light text-warm/70">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-accent" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-accent" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-accent">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-accent" />
                <a href="mailto:yadhronics.edukid@gmail.com" className="hover:text-accent">
                  yadhronics.edukid@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-warm/50 md:flex-row">
          <p>© {new Date().getFullYear()} Yadhronics. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-accent">Privacy</Link>
            <Link href="/terms" className="hover:text-accent">Terms</Link>
            <Link href="/refund" className="hover:text-accent">Refund</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}