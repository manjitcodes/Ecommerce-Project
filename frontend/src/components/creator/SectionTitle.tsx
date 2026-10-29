interface SectionTitleProps {
  title: string;
  description?: string;
}

export function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <div className="mb-5">
      <h2 className="text-xl font-bold tracking-tight text-stone-950 dark:text-white">{title}</h2>
      {description && <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">{description}</p>}
    </div>
  );
}
