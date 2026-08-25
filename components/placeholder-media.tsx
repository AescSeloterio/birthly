import { cn } from "@/lib/utils"

/**
 * A clearly-labeled placeholder for photos/covers.
 * Swap this out by dropping the named file into /public and using <img src="/filename" />.
 */
export function PlaceholderMedia({
  label,
  className,
  rounded = "rounded-md",
}: {
  label: string
  className?: string
  rounded?: string
}) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        "bg-[linear-gradient(135deg,#2a212d_0%,#1e1720_100%)]",
        rounded,
        className,
      )}
      aria-label={`Placeholder image: ${label}`}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #ffb3c6 0, #ffb3c6 1px, transparent 1px, transparent 12px)",
        }}
      />
      <span className="relative z-10 px-3 text-center font-mono text-[10px] leading-tight tracking-wide text-muted-foreground/80 break-all">
        {label}
      </span>
    </div>
  )
}
