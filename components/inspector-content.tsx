"use client"

import { Heart, Play } from "lucide-react"
import { useState } from "react"
import type { SelectedItem } from "@/lib/types"
import { cn } from "@/lib/utils"
import { PlaceholderMedia } from "@/components/placeholder-media"

export function InspectorContent({
  item,
  onReact,
  compact = false,
}: {
  item: SelectedItem
  onReact: () => void
  compact?: boolean
}) {
  const [liked, setLiked] = useState(false)
  const isLetter = item.kind === "letter"
  const isVideo = item.kind === "video"

  const handleLike = () => {
    setLiked((v) => !v)
    if (!liked) onReact()
  }

  return (
    <div className={cn("flex flex-col gap-5", compact && "pb-2")}>
      {/* Media / envelope */}
      {isLetter ? (
        <div className="animate-unfold rounded-lg border border-blush/20 bg-gradient-to-br from-muted to-card p-5">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-blush">
            {item.title}
          </p>
          <div className="space-y-3 leading-relaxed text-foreground/90">
            {item.text.split("\n\n").map((para, i) => (
              <p key={i} className="text-pretty text-sm">
                {para}
              </p>
            ))}
          </div>
        </div>
      ) : (
        <>
          {/* Polaroid frame */}
          <div className="mx-auto w-full max-w-[260px] rotate-[-1.5deg] rounded-sm bg-[#f8f3ee] p-3 pb-10 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.6)]">
            <div className="relative">
              <PlaceholderMedia
                label={item.image}
                className="aspect-square w-full"
                rounded="rounded-none"
              />
              {isVideo && (
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#120e13]/70 text-white">
                    <Play className="h-5 w-5 fill-current" />
                  </span>
                </span>
              )}
            </div>
            <p className="mt-3 text-center font-mono text-xs text-[#5b5157]">
              {item.subtitle || item.meta}
            </p>
          </div>

          {isVideo && (
            item.video?.endsWith(".mp4") && !item.video.includes("placeholder") ? (
              <video className="w-full rounded-xl bg-black" controls playsInline poster={item.image}>
                <source src={item.video} type="video/mp4" />
                Your browser does not support video playback.
              </video>
            ) : (
              <div className="rounded-lg bg-black/40 px-4 py-3 text-center text-xs text-muted-foreground">
                Add the real video as <span className="font-mono text-blush">{item.video}</span> inside <span className="font-mono">/public</span> to enable playback.
              </div>
            )
          )}
        </>
      )}

      {/* Title + story */}
      <div>
        {item.meta && !isLetter && (
          <p className="font-mono text-[11px] uppercase tracking-wider text-blush">
            {item.meta}
          </p>
        )}
        <h3 className="mt-1 font-display text-xl font-bold text-balance">{item.title}</h3>
        {!isLetter && (
          <p className="mt-3 text-pretty text-sm leading-relaxed text-foreground/90">
            {item.text}
          </p>
        )}
      </div>

      {/* Heart reaction */}
      <button
        type="button"
        onClick={handleLike}
        aria-pressed={liked}
        className={cn(
          "group flex items-center justify-center gap-2 rounded-full border px-5 py-3 font-medium transition-all",
          liked
            ? "border-rose bg-rose text-white"
            : "border-blush/40 text-blush hover:border-blush hover:bg-blush/10",
        )}
      >
        <Heart
          className={cn("h-5 w-5 transition-transform group-active:scale-125", liked && "fill-current")}
        />
        {liked ? "Loved it" : "Send some love"}
      </button>
    </div>
  )
}
