"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Training", href: "/training" },
  { label: "Careers", href: "/careers" },
  { label: "Colleges", href: "/colleges" },
  { label: "Industry", href: "/industry" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-ink/5 bg-cream/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link href="/" className="group flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Yadhronics"
            width={220}
            height={64}
            priority
            className="transition-transform duration-300 group-hover:scale-105"
            style={{ width: "auto", height: "64px" }}
          />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="relative text-[0.7rem] font-medium uppercase tracking-[0.18em] text-ink/70 transition hover:text-accent"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link href="/contact" className="btn-primary !py-3 !px-6 !text-[0.65rem]">
            Contact
          </Link>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink/5 bg-cream lg:hidden">
          <ul className="container mx-auto flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium uppercase tracking-wider text-ink hover:bg-sand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="px-4 pt-2">
              <Link href="/contact" className="btn-primary w-full">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}