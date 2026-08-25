"use client"

import { Heart } from "lucide-react"
import { timeline } from "@/lib/data"
import type { SelectedItem } from "@/lib/types"
import { PlaceholderMedia } from "@/components/placeholder-media"
import { ViewHeader } from "@/components/view-header"

export function TimelineView({ onSelect }: { onSelect: (item: SelectedItem) => void }) {
  return (
    <div className="animate-fade-in">
      <ViewHeader eyebrow="Our Story" title="The Little Timeline" description="A few moments that made our story feel like ours. Replace these placeholders with your real dates, photos, and inside jokes." />
      <div className="relative ml-2 border-l border-blush/20 pl-7 sm:ml-4 sm:pl-10">
        {timeline.map((event, i) => (
          <div key={event.id} className="relative mb-7 last:mb-0">
            <span className="absolute -left-[39px] top-5 flex h-5 w-5 items-center justify-center rounded-full border border-blush/40 bg-card text-blush sm:-left-[49px]">
              <Heart className="h-2.5 w-2.5 fill-current" />
            </span>
            <button type="button" onClick={() => onSelect({ ...event, subtitle: event.date, meta: "Our Story", kind: "photo" })} className="group w-full overflow-hidden rounded-2xl border border-border bg-card-hover/50 text-left transition-all hover:-translate-y-0.5 hover:border-blush/30 hover:bg-card-hover">
              <div className="grid gap-0 sm:grid-cols-[150px_1fr]">
                <PlaceholderMedia label={event.image} className="h-40 w-full sm:h-full" rounded="rounded-none" />
                <div className="p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-blush">{event.date}</p>
                  <h2 className="mt-2 font-display text-xl font-bold">{event.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{event.text}</p>
                  <span className="mt-4 inline-flex text-xs font-semibold text-blush">Open memory →</span>
                </div>
              </div>
            </button>
            {i < timeline.length - 1 && <div className="h-1" />}
          </div>
        ))}
      </div>
    </div>
  )
}
