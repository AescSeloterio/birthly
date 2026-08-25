"use client"

import { Shuffle, X } from "lucide-react"
import { reasons } from "@/lib/data"

export function ShuffleModal({
  reason,
  onShuffle,
  onClose,
}: {
  reason: string
  onShuffle: () => void
  onClose: () => void
}) {
  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="A random reason"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />
      <div className="animate-rise-in relative w-full max-w-md overflow-hidden rounded-2xl border border-blush/20 bg-card p-7 text-center shadow-2xl">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--rose), transparent 70%)" }}
        />
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-card-hover hover:text-foreground"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        <p className="font-mono text-xs uppercase tracking-[0.25em] text-blush">
          Reason #{reasons.indexOf(reason) + 1} of {reasons.length}
        </p>
        <p className="mt-4 font-display text-2xl font-bold leading-snug text-balance">
          {reason}
        </p>

        <button
          type="button"
          onClick={onShuffle}
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-blush px-6 py-3 font-semibold text-[#120e13] transition-all hover:scale-105 hover:bg-white"
        >
          <Shuffle className="h-4 w-4" />
          Shuffle another
        </button>
      </div>
    </div>
  )
}
