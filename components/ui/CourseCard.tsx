import Link from "next/link";
import { Clock, GraduationCap, ArrowUpRight } from "lucide-react";

interface Props {
  slug: string;
  title: string;
  subtitle: string;
  duration: string;
  level: string;
  certification: string;
}

export default function CourseCard({
  slug, title, subtitle, duration, level, certification,
}: Props) {
  return (
    <Link
      href={`/training/${slug}`}
      className="group relative block overflow-hidden border-t border-ink/10 pt-6 transition-all duration-500 hover:border-accent"
    >
      <span className="absolute left-0 top-0 h-px w-0 bg-accent transition-all duration-700 group-hover:w-full" />

      <div className="mb-3 flex items-center gap-3 text-[0.65rem] font-medium uppercase tracking-widest text-muted">
        <span className="flex items-center gap-1"><Clock size={12} className="text-accent" /> {duration}</span>
        <span className="text-ink/20">·</span>
        <span className="flex items-center gap-1"><GraduationCap size={12} className="text-accent" /> {level}</span>
      </div>

      <h3 className="mb-2 flex items-start justify-between gap-2 font-heading text-xl font-semibold text-ink transition-colors duration-300 group-hover:text-accent">
        {title}
        <ArrowUpRight size={18} className="mt-1 flex-shrink-0 text-ink/20 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
      </h3>

      <p className="mb-4 text-sm font-light leading-relaxed text-muted">
        {subtitle}
      </p>

      <p className="text-[0.7rem] uppercase tracking-widest text-accent">
        {certification}
      </p>
    </Link>
  );
}