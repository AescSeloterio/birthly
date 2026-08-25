"use client"

import { ArrowDown, Heart, Sparkles } from "lucide-react"
import { timeline } from "@/lib/data"
import type { SelectedItem } from "@/lib/types"
import { ViewHeader } from "@/components/view-header"

export function TimelineView({
  onSelect,
}: {
  onSelect: (item: SelectedItem) => void
}) {
  return (
    <div className="animate-fade-in">
      <ViewHeader
        eyebrow="Our Story"
        title="The Story So Far"
        description="Not every important moment fits neatly into a date. These are the chapters I would keep if I could only keep a few."
      />

      <section className="relative mb-8 overflow-hidden rounded-3xl border border-blush/15 bg-gradient-to-br from-card-hover/80 via-card to-card p-6 sm:p-8">
        <div
          aria-hidden
          className="absolute -right-20 -top-24 h-56 w-56 rounded-full bg-rose/10 blur-3xl"
        />
        <div className="relative flex items-end justify-between gap-5">
          <div>
            <div className="flex items-center gap-2 text-blush">
              <Sparkles className="h-4 w-4" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
                Our little archive
              </span>
            </div>
            <h2 className="mt-3 font-display text-2xl font-extrabold sm:text-3xl">
              A few chapters. One story.
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
              From the beginning to right now — and hopefully a ridiculous number of
              chapters still waiting to happen.
            </p>
          </div>
          <div className="hidden shrink-0 text-right sm:block">
            <p className="font-display text-4xl font-extrabold text-blush">{timeline.length}</p>
            <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground">
              chapters
            </p>
          </div>
        </div>
      </section>

      <div className="relative">
        {/* Timeline rail */}
        <div
          aria-hidden
          className="absolute left-[15px] top-4 bottom-4 w-px bg-gradient-to-b from-blush/40 via-blush/15 to-transparent sm:left-1/2 sm:-translate-x-1/2"
        />

        <div className="space-y-7 sm:space-y-10">
          {timeline.map((event, i) => {
            const right = i % 2 === 1

            return (
              <article key={event.id} className="relative sm:grid sm:grid-cols-2 sm:gap-10">
                {/* Timeline dot */}
                <div className="absolute left-[7px] top-7 z-10 flex h-4 w-4 items-center justify-center rounded-full border border-blush/50 bg-background shadow-[0_0_0_5px_rgba(255,179,198,.05)] sm:left-1/2 sm:-translate-x-1/2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blush" />
                </div>

                <div className={right ? "sm:col-start-2" : "sm:col-start-1"}>
                  <button
                    type="button"
                    onClick={() =>
                      onSelect({
                        ...event,
                        subtitle: event.date,
                        meta: "Our Story",
                        kind: "photo",
                      })
                    }
                    className="group ml-9 block w-[calc(100%-2.25rem)] overflow-hidden rounded-2xl border border-border bg-card text-left shadow-[0_18px_50px_-35px_rgba(0,0,0,.9)] transition-all duration-300 hover:-translate-y-1 hover:border-blush/30 hover:bg-card-hover hover:shadow-[0_22px_55px_-30px_rgba(232,93,117,.28)] sm:ml-0 sm:w-full"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />
                      <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between gap-3">
                        <span className="rounded-full border border-white/15 bg-black/35 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.22em] text-white/90 backdrop-blur-md">
                          Chapter {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-xs font-medium text-white/80">
                          {event.date}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6">
                      <h2 className="font-display text-xl font-bold leading-tight sm:text-2xl">
                        {event.title}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {event.text}
                      </p>

                      <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-blush transition-transform group-hover:translate-x-1">
                        Open this memory
                        <ArrowDown className="h-3.5 w-3.5 -rotate-90" />
                      </span>
                    </div>
                  </button>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <Heart className="h-3.5 w-3.5 fill-blush text-blush" />
          <span>Still writing this one.</span>
          <Heart className="h-3.5 w-3.5 fill-blush text-blush" />
        </div>
      </div>
    </div>
  )
}
