"use client"

import { Images, Play } from "lucide-react"
import { albums } from "@/lib/data"
import type { SelectedItem } from "@/lib/types"
import { PlaceholderMedia } from "@/components/placeholder-media"
import { ViewHeader } from "@/components/view-header"

export function PicturesView({
  onSelect,
}: {
  onSelect: (item: SelectedItem) => void
}) {
  return (
    <div className="animate-fade-in">
      <ViewHeader
        eyebrow="Photo Albums"
        title="Pictures of Us"
        description="Six little albums from the camera roll. Open one and wander through the memories."
      />

      <div className="mb-6 flex items-center gap-2 text-xs text-muted-foreground">
        <Images className="h-4 w-4 text-blush" />
        <span>{albums.length} albums</span>
        <span className="text-border">•</span>
        <span>{albums.reduce((total, album) => total + album.photos.length, 0)} memories</span>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {albums.map((album) => (
          <button
            key={album.id}
            type="button"
            onClick={() => onSelect({ ...album, kind: "album" })}
            className="group relative flex flex-col gap-3 rounded-xl border border-border bg-card p-3 text-left transition-all duration-300 hover:-translate-y-1 hover:border-blush/30 hover:bg-card-hover hover:shadow-[0_18px_40px_-24px_rgba(232,93,117,.65)]"
          >
            <div className="relative overflow-hidden rounded-lg">
              <PlaceholderMedia
                label={album.image}
                className="aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-[1.03]"
                rounded="rounded-lg"
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/45 to-transparent" />

              <span className="absolute bottom-2 right-2 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-blush text-[#120e13] opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <Play className="h-4 w-4 fill-current" />
              </span>
            </div>

            <span className="min-w-0 px-0.5 pb-1">
              <span className="block truncate font-display font-semibold">
                {album.title}
              </span>
              <span className="mt-0.5 block truncate text-xs text-muted-foreground">
                {album.photos.length} photos
              </span>
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
