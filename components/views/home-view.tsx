"use client"

import { BadgeCheck, Play, Heart, Sparkles } from "lucide-react"
import { albums, birthdayLetter, greetings, tracklist } from "@/lib/data"
import type { SelectedItem } from "@/lib/types"
import { PlaceholderMedia } from "@/components/placeholder-media"

export function HomeView({ onSelect }: { onSelect: (item: SelectedItem) => void }) {
  const quickPicks = [
    ...albums.slice(0, 2).map((a) => ({ ...a, kind: "album" as const })),
    { ...greetings[0], kind: "video" as const },
    { ...tracklist[0], kind: "track" as const },
  ]

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <header className="relative overflow-hidden rounded-xl">
        <PlaceholderMedia
          label={birthdayLetter.cover}
          rounded="rounded-xl"
          className="h-56 w-full sm:h-72"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
        <div className="absolute bottom-0 left-0 flex flex-col gap-3 p-5 sm:p-7">
          <span className="flex items-center gap-1.5 text-sm font-medium text-blush">
            <BadgeCheck className="h-5 w-5 fill-blush text-[#120e13]" />
            {birthdayLetter.tag}
          </span>
          <h1 className="font-display text-3xl font-extrabold leading-none text-balance sm:text-5xl">
            {birthdayLetter.title}
          </h1>
          <span className="text-sm text-muted-foreground">{birthdayLetter.listeners}</span>
        </div>
      </header>

      {/* Letter */}
      <section className="mt-8 max-w-2xl">
        <h2 className="mb-3 font-display text-xl font-bold">Note para nimo</h2>
        <div className="space-y-4 leading-relaxed text-foreground/90">
          {birthdayLetter.paragraphs.map((p, i) => (
            <p key={i} className="text-pretty">
              {p}
            </p>
          ))}
          <p className="font-display text-lg font-semibold text-blush">
            {birthdayLetter.signature}
          </p>
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-blush/15 bg-gradient-to-br from-card-hover/80 to-card p-5 sm:p-7">
        <div className="flex items-center gap-2 text-blush">
          <Sparkles className="h-4 w-4" />
          <span className="font-mono text-[10px] uppercase tracking-[0.25em]">Things I love</span>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            "The way you make ordinary days feel special.",
            "Your laugh especially the completely unplanned one.",
            "How being around you feels like home.",
            "The tiny things you do that you probably don't even notice.",
            "Your unique style and good taste in music.",
            "The way you love me making me feel like I deserve it.",
          ].map((reason) => (
            <div key={reason} className="rounded-xl border border-border bg-background/30 p-4 text-sm leading-relaxed text-foreground/90">
              <Heart className="mb-3 h-4 w-4 fill-blush text-blush" />
              {reason}
            </div>
          ))}
        </div>
      </section>

      {/* Quick picks */}
      <section className="mt-10">
        <h2 className="mb-4 font-display text-xl font-bold">Made for you</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {quickPicks.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelect(item as SelectedItem)}
              className="group flex items-center gap-3 overflow-hidden rounded-md bg-card-hover/60 pr-4 text-left transition-colors hover:bg-card-hover"
            >
              <PlaceholderMedia label={item.image} className="h-16 w-16 shrink-0" rounded="rounded-none" />
              <span className="min-w-0 flex-1">
                <span className="block truncate font-medium">{item.title}</span>
                <span className="block truncate text-xs text-muted-foreground">
                  {item.subtitle || item.meta}
                </span>
              </span>
              <span className="flex h-10 w-10 shrink-0 translate-y-1 items-center justify-center rounded-full bg-blush text-[#120e13] opacity-0 shadow-lg transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <Play className="h-5 w-5 fill-current" />
              </span>
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}
