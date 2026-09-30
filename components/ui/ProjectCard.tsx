import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface Props {
  slug: string;
  title: string;
  category: string;
  image: string;
  techStack: string[];
}

export default function ProjectCard({
  slug, title, category, image, techStack,
}: Props) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="group block overflow-hidden rounded-sm bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-ink/10"
    >
      <div className="relative aspect-video overflow-hidden bg-sand">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
          unoptimized
        />

        {/* Category badge */}
        <span className="absolute left-4 top-4 z-10 rounded-full bg-accent px-3 py-1 text-[0.65rem] font-medium uppercase tracking-widest text-white backdrop-blur">
          {category}
        </span>

        {/* Hover overlay with view icon */}
        <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-all duration-500 group-hover:bg-ink/40">
          <div className="flex h-14 w-14 scale-0 items-center justify-center rounded-full bg-white opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
            <ArrowUpRight size={22} className="text-accent" />
          </div>
        </div>
      </div>

      <div className="p-5">
        <h3 className="mb-2 font-heading text-lg font-semibold text-ink transition-colors duration-300 group-hover:text-accent">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-sand px-3 py-1 text-[0.65rem] font-medium uppercase tracking-wider text-ink/60"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}