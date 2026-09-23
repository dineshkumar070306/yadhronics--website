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
      <div className="container mx-auto py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 inline-block rounded-lg bg-white p-2">
              <Image
                src="/images/logo.png"
                alt="Yadhronics"
                width={140}
                height={48}
                className="h-14 w-auto"
              />
            </div>
            <p className="text-sm text-gray-300">{siteConfig.description}</p>

            {/* Social Icons — 5 total */}
            <div className="mt-4 flex flex-wrap gap-3">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/yadhronics-the-edu-kid-7696b6324/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#0A66C2]"
              >
                <FaLinkedinIn size={18} />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/yadhronics"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#E1306C] hover:to-[#F77737]"
              >
                <FaInstagram size={18} />
              </a>

              {/* GitHub */}
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#333]"
              >
                <FaGithub size={18} />
              </a>

              {/* YouTube */}
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#FF0000]"
              >
                <FaYoutube size={18} />
              </a>

              {/* Gmail → opens contact page */}
              <a
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email us"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#EA4335]"
              >
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-bold">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/services/embedded-systems" className="hover:text-accent">
                  Embedded Systems
                </Link>
              </li>
              <li>
                <Link href="/services/iot-solutions" className="hover:text-accent">
                  IoT Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/control-panels" className="hover:text-accent">
                  Control Panels
                </Link>
              </li>
              <li>
                <Link href="/services/pcb-design" className="hover:text-accent">
                  PCB Design
                </Link>
              </li>
              <li>
                <Link href="/services/firmware" className="hover:text-accent">
                  Firmware
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="hover:text-accent">
                  Web Development
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/about" className="hover:text-accent">About Us</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-accent">Projects</Link>
              </li>
              <li>
                <Link href="/training" className="hover:text-accent">Training</Link>
              </li>
              <li>
                <Link href="/colleges" className="hover:text-accent">For Colleges</Link>
              </li>
              <li>
                <Link href="/industry" className="hover:text-accent">For Industry</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-accent" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-accent" />
                <a href={`tel:${siteConfig.contact.phone}`}>
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-accent" />
                <a href="mailto:yadhronics.edukid@gmail.com">
                  yadhronics.edukid@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-gray-400 md:flex-row">
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