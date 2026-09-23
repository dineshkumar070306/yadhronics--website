import Link from "next/link";
import Image from "next/image";

interface Props {
  slug: string;
  title: string;
  category: string;
  image: string;
  techStack: string[];
}

export default function ProjectCard({
  slug,
  title,
  category,
  image,
  techStack,
}: Props) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="group overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-xl"
    >
      <div className="relative aspect-video overflow-hidden bg-primary">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
          unoptimized
        />
        <span className="absolute left-4 top-4 z-10 rounded-full bg-cta px-3 py-1 text-xs font-semibold text-white">
          {category}
        </span>
      </div>
      <div className="p-5">
        <h3 className="mb-2 text-lg font-bold text-primary group-hover:text-cta">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-light px-2 py-1 text-xs font-medium text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}