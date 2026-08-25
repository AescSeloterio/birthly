"use client"

import { Cake } from "lucide-react"
import { HER_NAME } from "@/lib/data"
import { cn } from "@/lib/utils"

export function IntroScreen({
  onContinue,
  leaving,
}: {
  onContinue: () => void
  leaving: boolean
}) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex flex-col items-center justify-center px-6 text-center transition-all duration-700",
        leaving ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100",
      )}
      style={{
        background:
          "radial-gradient(120% 90% at 50% 0%, #2a212d 0%, #1e1720 40%, #120e13 100%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--rose), transparent 70%)" }}
      />

      <div className="animate-rise-in flex flex-col items-center gap-6">
        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-blush/30 bg-card text-blush shadow-lg">
          <Cake className="h-8 w-8" />
        </span>

        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Website para sa imo
        </p>

        <h1 className="font-display text-4xl font-extrabold leading-tight text-balance sm:text-6xl">
          Happy Birthday,{" "}
          <span className="bg-gradient-to-r from-blush to-rose bg-clip-text text-transparent">
            {HER_NAME}
          </span>
        </h1>

        <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
          Gihimoan tika ug website para sa imong 18th birthday.
          Pislita ang continue para mo padayon.
        </p>

        <button
          type="button"
          onClick={onContinue}
          className="group mt-2 rounded-full bg-blush px-10 py-4 font-display text-base font-semibold text-[#120e13] shadow-[0_10px_40px_-8px_var(--rose)] transition-all hover:scale-105 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Continue
          <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </div>
  )
}
