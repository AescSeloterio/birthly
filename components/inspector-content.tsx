"use client"

import { ChevronLeft, ChevronRight, Heart, Images, Play } from "lucide-react"
import { useEffect, useState } from "react"
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
  const [photoIndex, setPhotoIndex] = useState(0)

  const isLetter = item.kind === "letter"
  const isVideo = item.kind === "video"
  const isAlbum = item.kind === "album"
  const photos = item.photos ?? []
  const activePhoto = photos[photoIndex] ?? item.image

  useEffect(() => {
    setPhotoIndex(0)
    setLiked(false)
  }, [item.id])

  const handleLike = () => {
    setLiked((v) => !v)
    if (!liked) onReact()
  }

  const goPhoto = (direction: number) => {
    if (!photos.length) return
    setPhotoIndex((current) => (current + direction + photos.length) % photos.length)
  }

  return (
    <div className={cn("flex flex-col gap-5", compact && "pb-2")}>
      {/* Album gallery */}
      {isAlbum ? (
        <>
          <div className="overflow-hidden rounded-2xl border border-border bg-black/20">
            <div className="relative aspect-[4/5] sm:aspect-square">
              <img
                src={activePhoto}
                alt={`${item.title} — photo ${photoIndex + 1}`}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent px-4 pb-4 pt-12">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/70">
                      Photo {photoIndex + 1} of {Math.max(photos.length, 1)}
                    </p>
                    <p className="mt-1 text-sm font-medium text-white">{item.title}</p>
                  </div>

                  {photos.length > 1 && (
                    <div className="flex gap-1.5">
                      <button
                        type="button"
                        onClick={() => goPhoto(-1)}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
                        aria-label="Previous photo"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => goPhoto(1)}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
                        aria-label="Next photo"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {photos.length > 0 && (
            <div className="grid grid-cols-4 gap-2">
              {photos.map((photo, i) => (
                <button
                  key={photo}
                  type="button"
                  onClick={() => setPhotoIndex(i)}
                  aria-label={`Open photo ${i + 1}`}
                  className={cn(
                    "relative aspect-square overflow-hidden rounded-lg border transition-all",
                    photoIndex === i
                      ? "border-blush ring-2 ring-blush/20"
                      : "border-border opacity-70 hover:border-blush/30 hover:opacity-100",
                  )}
                >
                  <img src={photo} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}

          <div>
            {item.meta && (
              <p className="font-mono text-[11px] uppercase tracking-wider text-blush">
                {item.meta}
              </p>
            )}
            <div className="mt-1 flex items-center gap-2">
              <h3 className="font-display text-xl font-bold text-balance">{item.title}</h3>
              <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2 py-1 text-[10px] text-muted-foreground">
                <Images className="h-3 w-3" />
                {photos.length} photos
              </span>
            </div>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-foreground/90">
              {item.text}
            </p>
          </div>
        </>
      ) : isLetter ? (
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

          {isVideo &&
            (item.video?.endsWith(".mp4") && !item.video.includes("placeholder") ? (
              <video className="w-full rounded-xl bg-black" controls playsInline poster={item.image}>
                <source src={item.video} type="video/mp4" />
                Your browser does not support video playback.
              </video>
            ) : (
              <div className="rounded-lg bg-black/40 px-4 py-3 text-center text-xs text-muted-foreground">
                Add the real video as{" "}
                <span className="font-mono text-blush">{item.video}</span> inside{" "}
                <span className="font-mono">/public</span> to enable playback.
              </div>
            ))}
        </>
      )}

      {/* Title + story for non-albums/non-letters */}
      {!isAlbum && !isLetter && (
        <div>
          {item.meta && (
            <p className="font-mono text-[11px] uppercase tracking-wider text-blush">
              {item.meta}
            </p>
          )}
          <h3 className="mt-1 font-display text-xl font-bold text-balance">{item.title}</h3>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-foreground/90">
            {item.text}
          </p>
        </div>
      )}

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
          className={cn(
            "h-5 w-5 transition-transform group-active:scale-125",
            liked && "fill-current",
          )}
        />
        {liked ? "Loved it" : "Send some love"}
      </button>
    </div>
  )
}
