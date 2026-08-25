"use client"

import { Mail } from "lucide-react"
import { letters } from "@/lib/data"
import type { SelectedItem } from "@/lib/types"
import { ViewHeader } from "@/components/view-header"

export function LettersView({ onSelect }: { onSelect: (item: SelectedItem) => void }) {
  return (
    <div className="animate-fade-in">
      <ViewHeader
        eyebrow="Digital Envelopes"
        title="Open When Letters"
        description="Sealed notes for specific moments. Open the right one when you need it."
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {letters.map((letter) => (
          <button
            key={letter.id}
            type="button"
            onClick={() => onSelect({ ...letter, kind: "letter" })}
            className="group relative flex min-h-52 flex-col justify-between overflow-hidden rounded-xl border border-blush/15 bg-gradient-to-br from-card to-muted p-5 text-left transition-all hover:border-blush/40 hover:from-card-hover"
          >
            <div
              aria-hidden
              className="absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-40"
              style={{ background: "radial-gradient(circle, var(--rose), transparent 70%)" }}
            />
            <span className="mb-8 flex h-11 w-11 items-center justify-center rounded-lg bg-blush/15 text-blush transition-transform group-hover:-rotate-6">
              <Mail className="h-5 w-5" />
            </span>
            <span>
              <span className="block font-display text-lg font-semibold text-balance">
                {letter.title}
              </span>
              <span className="mt-1 block text-sm text-muted-foreground">
                {letter.subtitle}
              </span>
              <span className="mt-3 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-blush/70">
                <span className="h-1.5 w-1.5 rounded-full bg-blush/70" />
                {letter.meta} — tap to open
              </span>
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
