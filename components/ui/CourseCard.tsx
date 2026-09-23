import Link from "next/link";
import { Clock, GraduationCap, Award } from "lucide-react";

interface Props {
  slug: string;
  title: string;
  subtitle: string;
  duration: string;
  level: string;
  certification: string;
}

export default function CourseCard({
  slug,
  title,
  subtitle,
  duration,
  level,
  certification,
}: Props) {
  return (
    <Link href={`/training/${slug}`} className="card group flex flex-col">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
          <Clock size={14} /> {duration}
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-cta/10 px-3 py-1 text-xs font-semibold text-cta">
          <GraduationCap size={14} /> {level}
        </span>
      </div>
      <h3 className="mb-2 text-xl font-bold text-primary group-hover:text-cta">
        {title}
      </h3>
      <p className="mb-4 flex-grow text-gray-600">{subtitle}</p>
      <div className="flex items-center gap-2 border-t pt-4 text-sm text-gray-500">
        <Award size={16} className="text-accent" />
        <span>{certification}</span>
      </div>
    </Link>
  );
}