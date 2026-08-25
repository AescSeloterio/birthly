export function ViewHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <header className="mb-6">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-blush">{eyebrow}</p>
      <h1 className="mt-2 font-display text-3xl font-extrabold text-balance sm:text-4xl">
        {title}
      </h1>
      <p className="mt-2 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </header>
  )
}
