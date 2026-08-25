import { cn } from "@/lib/utils"

export function PlaceholderMedia({
  label,
  className,
  rounded = "rounded-md",
}: {
  label: string
  className?: string
  rounded?: string
}) {
  // If label looks like an actual image path, display the image.
  const isImage =
    label.startsWith("/") &&
    /\.(jpg|jpeg|png|webp|gif|avif)$/i.test(label)

  if (isImage) {
    return (
      <div
        className={cn(
          "relative overflow-hidden",
          rounded,
          className,
        )}
      >
        <img
          src={label}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
    )
  }

  // Otherwise, keep showing the placeholder.
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