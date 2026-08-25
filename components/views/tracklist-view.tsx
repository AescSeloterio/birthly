"use client"

import { Clock, Heart } from "lucide-react"
import { tracklist } from "@/lib/data"
import type { SelectedItem } from "@/lib/types"
import { PlaceholderMedia } from "@/components/placeholder-media"
import { ViewHeader } from "@/components/view-header"

export function TracklistView({ onSelect }: { onSelect: (item: SelectedItem) => void }) {
  return (
    <div className="animate-fade-in">
      <ViewHeader
        eyebrow="Memory Timeline"
        title="Our Favorite Tracklist"
        description="The greatest hits of us — inside jokes, core memories, and certified chaos."
      />

      {/* Column header */}
      <div className="grid grid-cols-[24px_1fr_auto] items-center gap-4 border-b border-border px-3 pb-2 text-xs uppercase tracking-wider text-muted-foreground sm:grid-cols-[24px_2fr_1fr_auto]">
        <span className="text-center">#</span>
        <span>Title</span>
        <span className="hidden sm:block">Date</span>
        <span className="flex justify-end pr-1">
          <Clock className="h-4 w-4" />
        </span>
      </div>

      <ul className="mt-2">
        {tracklist.map((track, i) => (
          <li key={track.id}>
            <button
              type="button"
              onClick={() => onSelect({ ...track, kind: "track" })}
              className="group grid w-full grid-cols-[24px_1fr_auto] items-center gap-4 rounded-md px-3 py-2 text-left transition-colors hover:bg-card-hover sm:grid-cols-[24px_2fr_1fr_auto]"
            >
              <span className="text-center text-sm text-muted-foreground group-hover:hidden">
                {i + 1}
              </span>
              <span className="hidden text-center text-blush group-hover:flex group-hover:justify-center">
                <Heart className="h-4 w-4 fill-current" />
              </span>

              <span className="flex min-w-0 items-center gap-3">
                <PlaceholderMedia label={track.image} className="h-10 w-10 shrink-0" rounded="rounded-sm" />
                <span className="min-w-0">
                  <span className="block truncate font-medium">{track.title}</span>
                  <span className="block truncate text-xs text-muted-foreground">
                    {track.category}
                  </span>
                </span>
              </span>

              <span className="hidden truncate text-sm text-muted-foreground sm:block">
                {track.date}
              </span>
              <span className="pr-1 text-right text-sm tabular-nums text-muted-foreground">
                {track.length}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
