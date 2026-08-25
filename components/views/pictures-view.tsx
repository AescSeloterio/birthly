"use client"

import { Play } from "lucide-react"
import { albums } from "@/lib/data"
import type { SelectedItem } from "@/lib/types"
import { PlaceholderMedia } from "@/components/placeholder-media"
import { ViewHeader } from "@/components/view-header"

export function PicturesView({ onSelect }: { onSelect: (item: SelectedItem) => void }) {
  return (
    <div className="animate-fade-in">
      <ViewHeader
        eyebrow="Photo Albums"
        title="Pictures of Us"
        description="Every album is a little chapter. Tap one to open it in the inspector."
      />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {albums.map((album) => (
          <button
            key={album.id}
            type="button"
            onClick={() => onSelect({ ...album, kind: "album" })}
            className="group relative flex flex-col gap-3 rounded-lg bg-card p-3 text-left transition-colors hover:bg-card-hover"
          >
            <div className="relative">
              <PlaceholderMedia label={album.image} className="aspect-square w-full" rounded="rounded-md" />
              <span className="absolute bottom-2 right-2 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-blush text-[#120e13] opacity-0 shadow-xl transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <Play className="h-5 w-5 fill-current" />
              </span>
            </div>
            <span>
              <span className="block truncate font-medium">{album.title}</span>
              <span className="block truncate text-xs text-muted-foreground">
                {album.subtitle}
              </span>
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
