"use client"

import { Heart } from "lucide-react"
import { useEffect, useState } from "react"

type Burst = { id: number; pieces: Piece[] }
type Piece = {
  id: number
  left: number
  size: number
  delay: number
  duration: number
  rotate: number
  color: string
}

let counter = 0

function makePieces(): Piece[] {
  const colors = ["var(--blush)", "var(--rose)", "#ffd5e0", "#f8f9fa"]
  return Array.from({ length: 28 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: 14 + Math.random() * 26,
    delay: Math.random() * 0.6,
    duration: 2.4 + Math.random() * 1.8,
    rotate: -40 + Math.random() * 80,
    color: colors[Math.floor(Math.random() * colors.length)],
  }))
}

/**
 * Fullscreen floating-heart confetti. Call `fire()` from the returned handle.
 */
export function useHeartConfetti() {
  const [bursts, setBursts] = useState<Burst[]>([])

  const fire = () => {
    const id = ++counter
    setBursts((b) => [...b, { id, pieces: makePieces() }])
    window.setTimeout(() => {
      setBursts((b) => b.filter((x) => x.id !== id))
    }, 4600)
  }

  const overlay = (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      {bursts.map((burst) =>
        burst.pieces.map((p) => (
          <span
            key={`${burst.id}-${p.id}`}
            className="animate-float-up absolute bottom-0"
            style={{
              left: `${p.left}%`,
              // @ts-expect-error custom props
              "--r": `${p.rotate}deg`,
              "--d": `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          >
            <Heart
              style={{ width: p.size, height: p.size, color: p.color }}
              fill={p.color}
            />
          </span>
        )),
      )}
    </div>
  )

  return { fire, overlay }
}

/** Small standalone heart-burst confetti used on mount (e.g. candles). */
export function ConfettiOnMount({ trigger }: { trigger: number }) {
  const { fire, overlay } = useHeartConfetti()
  useEffect(() => {
    if (trigger > 0) fire()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger])
  return overlay
}
