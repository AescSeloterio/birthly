"use client"

import { Cake, Gift, Shuffle } from "lucide-react"
import type { SelectedItem } from "@/lib/types"
import { PlaceholderMedia } from "@/components/placeholder-media"

export function BottomBar({
  current,
  onShuffle,
  onCandles,
  onGift,
}: {
  current: SelectedItem | null
  onShuffle: () => void
  onCandles: () => void
  onGift: () => void
}) {
  return (
    <footer className="flex items-center gap-3 border-t border-border bg-card px-3 py-3 sm:px-5">
      {/* Now-showing */}
      <div className="flex min-w-0 flex-1 items-center gap-3">
        {current ? (
          <>
            <PlaceholderMedia label={current.image} className="h-12 w-12 shrink-0" rounded="rounded-md" />
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">{current.title}</p>
              <p className="truncate text-xs text-muted-foreground">
                {current.subtitle || current.meta}
              </p>
            </div>
          </>
        ) : (
          <>
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground">
              <Cake className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">Nothing selected yet</p>
              <p className="truncate text-xs text-muted-foreground">
                Pick a memory to see it here
              </p>
            </div>
          </>
        )}
      </div>

      {/* Center: shuffle */}
      <div className="flex shrink-0 items-center">
        <button
          type="button"
          onClick={onShuffle}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-blush text-[#120e13] shadow-lg transition-transform hover:scale-110"
          aria-label="Shuffle a random reason I love you"
          title="Random reason I love you"
        >
          <Shuffle className="h-5 w-5" />
        </button>
      </div>

      {/* Right: actions */}
      <div className="flex shrink-0 items-center gap-2">
        <button
          type="button"
          onClick={onCandles}
          className="hidden items-center gap-2 rounded-full border border-blush/30 px-4 py-2 text-sm font-medium text-blush transition-colors hover:bg-blush/10 sm:flex"
        >
          <Cake className="h-4 w-4" />
          Blow Out Candles
        </button>
        <button
          type="button"
          onClick={onCandles}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-blush/30 text-blush transition-colors hover:bg-blush/10 sm:hidden"
          aria-label="Blow out candles"
        >
          <Cake className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={onGift}
          className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blush to-rose px-4 py-2 text-sm font-semibold text-[#120e13] transition-transform hover:scale-105"
        >
          <Gift className="h-4 w-4" />
          <span className="hidden sm:inline">Claim Birthday Gift</span>
        </button>
      </div>
    </footer>
  )
}
