interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
}: Props) {
  return (
    <div className={center ? "text-center" : ""}>
      {eyebrow && (
        <p className="eyebrow mb-3">{eyebrow}</p>
      )}
      <h2 className="font-heading text-3xl font-semibold text-ink md:text-4xl lg:text-5xl">
        {title}
      </h2>
      <div className={center ? "divider mx-auto" : "divider"} />
      {subtitle && (
        <p
          className={`font-light text-muted ${
            center ? "mx-auto max-w-2xl" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}