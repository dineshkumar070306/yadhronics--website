import Link from "next/link";
import { Cpu, Wifi, Settings, CircuitBoard, Code, Globe, ArrowUpRight } from "lucide-react";

const iconMap: Record<string, any> = {
  Cpu, Wifi, Settings, CircuitBoard, Code, Globe,
};

interface Props {
  slug: string;
  title: string;
  description: string;
  icon: string;
}

export default function ServiceCard({ slug, title, description, icon }: Props) {
  const Icon = iconMap[icon] || Cpu;
  return (
    <Link
      href={`/services/${slug}`}
      className="group relative block overflow-hidden border-t border-ink/10 pt-6 transition-all duration-500 hover:border-accent"
    >
      {/* Sliding gradient line */}
      <span className="absolute left-0 top-0 h-px w-0 bg-accent transition-all duration-700 group-hover:w-full" />

      <div className="mb-4 flex items-start justify-between">
        <Icon
          size={28}
          className="text-accent transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
        />
        <ArrowUpRight
          size={18}
          className="text-ink/20 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
        />
      </div>

      <h3 className="mb-2 font-heading text-xl font-semibold text-ink transition-colors duration-300 group-hover:text-accent">
        {title}
      </h3>

      <p className="text-sm font-light leading-relaxed text-muted transition-colors duration-300 group-hover:text-ink/80">
        {description}
      </p>
    </Link>
  );
}