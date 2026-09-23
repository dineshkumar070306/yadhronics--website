import Link from "next/link";
import { Cpu, Wifi, Settings, CircuitBoard, Code, Globe } from "lucide-react";

const iconMap: Record<string, any> = {
  Cpu,
  Wifi,
  Settings,
  CircuitBoard,
  Code,
  Globe,
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
    <Link href={`/services/${slug}`} className="card group">
      <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3 text-accent transition group-hover:bg-accent group-hover:text-white">
        <Icon size={28} />
      </div>
      <h3 className="mb-2 text-xl font-bold text-primary">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <span className="mt-4 inline-block font-semibold text-cta group-hover:underline">
        Learn more →
      </span>
    </Link>
  );
}