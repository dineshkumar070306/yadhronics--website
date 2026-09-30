"use client";
import { useEffect } from "react";

export default function ScrollAnimations() {
  useEffect(() => {
    // ─── 1. Intersection Observer for fade-in animations ───
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    // ─── 2. Parallax on scroll ───
    const parallaxElements =
      document.querySelectorAll<HTMLElement>(".parallax-slow");
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          parallaxElements.forEach((el) => {
            const speed = parseFloat(el.dataset.speed || "0.3");
            el.style.transform = `translateY(${scrollY * speed * 0.05}px)`;
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // ─── 3. Smooth anchor scroll with navbar offset ───
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      // Skip if href points to a different page (e.g. "/#section")
      if (href.startsWith("/")) return;

      const targetEl = document.querySelector(href);
      if (targetEl) {
        e.preventDefault();
        const navbarHeight = 90; // adjust if your navbar is taller/shorter
        const top =
          targetEl.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({ top, behavior: "smooth" });

        // Update URL hash without jumping
        if (history.pushState) {
          history.pushState(null, "", href);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    // ─── 4. Handle initial hash on page load ───
    // If user lands on /page#section, scroll to it after a short delay
    if (window.location.hash) {
      setTimeout(() => {
        const targetEl = document.querySelector(window.location.hash);
        if (targetEl) {
          const navbarHeight = 90;
          const top =
            targetEl.getBoundingClientRect().top +
            window.scrollY -
            navbarHeight;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 200);
    }

    // ─── Cleanup ───
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return null;
}