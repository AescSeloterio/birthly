"use client"

import { ArrowUpRight, Heart, ListMusic, Sparkles } from "lucide-react"
import { tracklist } from "@/lib/data"
import type { SelectedItem } from "@/lib/types"
import { ViewHeader } from "@/components/view-header"
import { PlaceholderMedia } from "@/components/placeholder-media"

export function TracklistView({
  onSelect,
}: {
  onSelect: (item: SelectedItem) => void
}) {
  const cover = "/albums/us/Messenger_creation_50BBF9D9-986A-49E9-9F86-143AA51A5C0B.jpeg"

  return (
    <div className="animate-fade-in">
      <ViewHeader
        eyebrow="Our Soundtrack"
        title="Our Favorite Tracklist"
        description="Not really songs. Just memories that deserve a little replay button."
      />

      {/* Playlist header */}
      <section className="relative mb-7 overflow-hidden rounded-3xl border border-blush/15 bg-gradient-to-br from-card-hover via-card to-card p-5 sm:p-7">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(255,179,198,.16),transparent_35%)]"
        />

        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-end">
          <div className="relative mx-auto w-40 shrink-0 sm:mx-0 sm:w-48">
            <div className="absolute -inset-2 rounded-2xl bg-rose/10 blur-xl" />
            <img
              src={cover}
              alt=""
              className="relative aspect-square w-full rounded-2xl object-cover shadow-2xl ring-1 ring-white/10"
            />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2 text-blush">
              <ListMusic className="h-4 w-4" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
                Memory playlist
              </span>
            </div>
            <h2 className="mt-2 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
              The songs we never actually recorded
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Six little tracks from different versions of us — the sweet ones, the
              stupid ones, and the ones that only make sense if you were there.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <span className="rounded-full bg-muted px-3 py-1.5">
                {tracklist.length} memories
              </span>
              <span className="rounded-full bg-muted px-3 py-1.5">∞ replay value</span>
              <span className="rounded-full bg-muted px-3 py-1.5">made by me</span>
            </div>
          </div>
        </div>
      </section>

      {/* Column header */}
      <div className="grid grid-cols-[28px_1fr_auto] items-center gap-3 border-b border-border px-3 pb-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground sm:grid-cols-[36px_2fr_1fr_auto] sm:gap-4">
        <span className="text-center">#</span>
        <span>Memory</span>
        <span className="hidden sm:block">Chapter</span>
        <span className="text-right">Vibe</span>
      </div>

      <ul className="mt-2 space-y-1.5">
        {tracklist.map((track, i) => (
          <li key={track.id}>
            <button
              type="button"
              onClick={() => onSelect({ ...track, kind: "track" })}
              className="group grid w-full grid-cols-[28px_1fr_auto] items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 text-left transition-all hover:border-blush/10 hover:bg-card-hover sm:grid-cols-[36px_2fr_1fr_auto] sm:gap-4"
            >
              <span className="flex items-center justify-center text-sm text-muted-foreground">
                <span className="group-hover:hidden">{String(i + 1).padStart(2, "0")}</span>
                <Heart className="hidden h-4 w-4 fill-blush text-blush group-hover:block" />
              </span>

              <span className="flex min-w-0 items-center gap-3">
                <PlaceholderMedia
                  label={track.image}
                  className="h-12 w-12 shrink-0"
                  rounded="rounded-md"
                />
                <span className="min-w-0">
                  <span className="flex items-center gap-2">
                    <span className="block truncate font-medium">{track.title}</span>
                    <ArrowUpRight className="hidden h-3.5 w-3.5 shrink-0 text-blush group-hover:block" />
                  </span>
                  <span className="mt-0.5 block truncate text-xs text-muted-foreground">
                    {track.subtitle}
                  </span>
                </span>
              </span>

              <span className="hidden truncate text-sm text-muted-foreground sm:block">
                {track.chapter}
              </span>

              <span className="rounded-full border border-border bg-muted/50 px-2.5 py-1 text-right text-[11px] font-medium text-blush">
                {track.vibe}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center gap-2 rounded-xl border border-blush/10 bg-card-hover/40 px-4 py-3 text-xs text-muted-foreground">
        <Sparkles className="h-4 w-4 shrink-0 text-blush" />
        <span>Click a track to open its memory in the inspector.</span>
      </div>
    </div>
  )
}
