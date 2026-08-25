"use client"

import { Play } from "lucide-react"
import { greetings } from "@/lib/data"
import type { SelectedItem } from "@/lib/types"
import { PlaceholderMedia } from "@/components/placeholder-media"
import { ViewHeader } from "@/components/view-header"

export function GreetingsView({ onSelect }: { onSelect: (item: SelectedItem) => void }) {
  return (
    <div className="animate-fade-in">
      <ViewHeader
        eyebrow="Video Hub"
        title="Greetings"
        description="A little podcast of people who love you. Press play on each episode."
      />
      <ul className="flex flex-col gap-2">
        {greetings.map((ep) => (
          <li key={ep.id}>
            <button
              type="button"
              onClick={() => onSelect({ ...ep, kind: "video" })}
              className="group flex w-full items-center gap-4 rounded-lg p-3 text-left transition-colors hover:bg-card-hover"
            >
              <div className="relative shrink-0">
                <PlaceholderMedia label={ep.image} className="h-20 w-32 sm:h-24 sm:w-40" rounded="rounded-md" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#120e13]/70 text-white transition-all group-hover:scale-110 group-hover:bg-blush group-hover:text-[#120e13]">
                    <Play className="h-5 w-5 fill-current" />
                  </span>
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-mono text-[11px] uppercase tracking-wider text-blush">
                  {ep.meta}
                </p>
                <p className="truncate font-display text-lg font-semibold">{ep.title}</p>
                <p className="line-clamp-2 text-sm text-muted-foreground">{ep.subtitle}</p>
                <p className="mt-1 text-xs text-muted-foreground">{ep.duration}</p>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
