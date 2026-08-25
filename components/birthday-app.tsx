"use client"

import { Gift, Home, Image as ImageIcon, ListMusic, Mail, Sparkles, Video, X, Clock3 } from "lucide-react"
import { useEffect, useState } from "react"
import { HER_NAME, reasons, type ViewId } from "@/lib/data"
import type { SelectedItem } from "@/lib/types"
import { cn } from "@/lib/utils"
import { BottomBar } from "@/components/bottom-bar"
import { useHeartConfetti } from "@/components/heart-confetti"
import { InspectorContent } from "@/components/inspector-content"
import { IntroScreen } from "@/components/intro-screen"
import { LibrarySidebar } from "@/components/library-sidebar"
import { ShuffleModal } from "@/components/shuffle-modal"
import { GreetingsView } from "@/components/views/greetings-view"
import { HomeView } from "@/components/views/home-view"
import { LettersView } from "@/components/views/letters-view"
import { PicturesView } from "@/components/views/pictures-view"
import { TracklistView } from "@/components/views/tracklist-view"
import { TimelineView } from "@/components/views/timeline-view"

const MOBILE_NAV: { id: ViewId; label: string; icon: typeof Home }[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "pictures", label: "Pictures", icon: ImageIcon },
  { id: "greetings", label: "Greetings", icon: Video },
  { id: "tracklist", label: "Tracklist", icon: ListMusic },
  { id: "letters", label: "Letters", icon: Mail },
  { id: "timeline", label: "Story", icon: Clock3 },
]

export function BirthdayApp() {
  const [showIntro, setShowIntro] = useState(true)
  const [introLeaving, setIntroLeaving] = useState(false)
  const [view, setView] = useState<ViewId>("home")
  const [selected, setSelected] = useState<SelectedItem | null>(null)
  const [sheetOpen, setSheetOpen] = useState(false)
  const [reason, setReason] = useState<string | null>(null)
  const [giftOpen, setGiftOpen] = useState(false)
  const [finaleOpen, setFinaleOpen] = useState(false)

  const { fire, overlay } = useHeartConfetti()

  // Close any open overlay with the Escape key.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return
      setReason(null)
      setGiftOpen(false)
      setFinaleOpen(false)
      setSheetOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const handleContinue = () => {
    setIntroLeaving(true)
    window.setTimeout(() => setShowIntro(false), 650)
  }

  const handleSelect = (item: SelectedItem) => {
    setSelected(item)
    setSheetOpen(true)
  }

  const shuffleReason = () => {
    let next = reasons[Math.floor(Math.random() * reasons.length)]
    if (reason && reasons.length > 1) {
      while (next === reason) next = reasons[Math.floor(Math.random() * reasons.length)]
    }
    setReason(next)
  }

  return (
    <div className="flex h-[100dvh] flex-col bg-background">
      {showIntro && <IntroScreen onContinue={handleContinue} leaving={introLeaving} />}

      {/* Ambient background image + gradient */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.06]">
          <span className="font-mono text-xs text-muted-foreground">
            placeholder_bg_ours.jpg
          </span>
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 100% at 50% -10%, rgba(232,93,117,0.12), transparent 45%), linear-gradient(180deg, #120e13 0%, rgba(18,14,19,0.92) 100%)",
          }}
        />
      </div>

      {/* Main workspace */}
      <div className="relative z-10 flex flex-1 gap-2 overflow-hidden p-2">
        {/* Left sidebar (desktop) */}
        <aside className="hidden w-[280px] shrink-0 md:block lg:w-[320px]">
          <LibrarySidebar active={view} onNavigate={setView} />
        </aside>

        {/* Center feed */}
        <main className="scroll-area flex-1 overflow-y-auto rounded-xl bg-card px-4 py-5 sm:px-7 sm:py-7">
          {/* Mobile top nav */}
          <div className="mb-5 flex items-center justify-between md:hidden">
            <span className="flex items-center gap-2 font-display font-bold">
              <Sparkles className="h-5 w-5 text-blush" />
              For {HER_NAME}
            </span>
          </div>
          <div className="scroll-area -mx-4 mb-5 flex gap-2 overflow-x-auto px-4 pb-1 md:hidden">
            {MOBILE_NAV.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => setView(id)}
                className={cn(
                  "flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  view === id
                    ? "bg-blush text-[#120e13]"
                    : "bg-card-hover text-muted-foreground",
                )}
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            ))}
          </div>

          {view === "home" && <HomeView onSelect={handleSelect} />}
          {view === "pictures" && <PicturesView onSelect={handleSelect} />}
          {view === "greetings" && <GreetingsView onSelect={handleSelect} />}
          {view === "tracklist" && <TracklistView onSelect={handleSelect} />}
          {view === "letters" && <LettersView onSelect={handleSelect} />}
          {view === "timeline" && <TimelineView onSelect={handleSelect} />}
        </main>

        {/* Right inspector (desktop) */}
        <aside className="scroll-area hidden w-[340px] shrink-0 overflow-y-auto rounded-xl bg-card p-5 lg:block">
          <div className="mb-4 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-blush" />
            <h2 className="font-display text-sm font-semibold text-muted-foreground">
              Memory Inspector
            </h2>
          </div>
          {selected ? (
            <InspectorContent item={selected} onReact={fire} />
          ) : (
            <div className="flex h-[60%] flex-col items-center justify-center gap-3 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-muted text-muted-foreground">
                <Sparkles className="h-6 w-6" />
              </span>
              <p className="text-sm text-muted-foreground text-pretty">
                Click any photo, memory, or letter and it&apos;ll open right here.
              </p>
            </div>
          )}
        </aside>
      </div>

      {/* Bottom action bar */}
      <div className="relative z-10">
        <BottomBar
          current={selected}
          onShuffle={shuffleReason}
          onCandles={() => { fire(); setFinaleOpen(true) }}
          onGift={() => setGiftOpen(true)}
        />
      </div>

      {/* Mobile bottom sheet */}
      {sheetOpen && selected && (
        <div className="fixed inset-0 z-[80] lg:hidden">
          <button
            type="button"
            aria-label="Close"
            onClick={() => setSheetOpen(false)}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />
          <div className="animate-sheet-up scroll-area absolute inset-x-0 bottom-0 max-h-[85dvh] overflow-y-auto rounded-t-2xl border-t border-border bg-card p-5 pb-8">
            <div className="mb-4 flex items-center justify-between">
              <span className="mx-auto h-1.5 w-10 rounded-full bg-muted-foreground/30" />
              <button
                type="button"
                onClick={() => setSheetOpen(false)}
                className="absolute right-4 flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:bg-card-hover hover:text-foreground"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <InspectorContent item={selected} onReact={fire} compact />
          </div>
        </div>
      )}

      {/* Shuffle modal */}
      {reason && (
        <ShuffleModal reason={reason} onShuffle={shuffleReason} onClose={() => setReason(null)} />
      )}

      {/* Gift modal */}
      {giftOpen && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Your birthday gift"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setGiftOpen(false)}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />
          <div className="animate-rise-in relative w-full max-w-md overflow-hidden rounded-2xl border border-blush/20 bg-card p-8 text-center shadow-2xl">
            <button
              type="button"
              onClick={() => setGiftOpen(false)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:bg-card-hover hover:text-foreground"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blush to-rose text-[#120e13]">
              <Gift className="h-8 w-8" />
            </span>
            <h3 className="mt-5 font-display text-2xl font-bold text-balance">
              Your gift is a promise
            </h3>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
              One whole day, just the two of us — your plans, your pace, your favorite
              everything. Redeemable anytime, no expiration. Consider this your coupon.
            </p>
            <button
              type="button"
              onClick={() => {
                fire()
                setGiftOpen(false)
              }}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-blush px-6 py-3 font-semibold text-[#120e13] transition-transform hover:scale-105 hover:bg-white"
            >
              <Sparkles className="h-4 w-4" />
              Claim it
            </button>
          </div>
        </div>
      )}

      {finaleOpen && (
        <div className="fixed inset-0 z-[95] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Birthday finale">
          <button type="button" aria-label="Close" onClick={() => setFinaleOpen(false)} className="absolute inset-0 bg-black/80 backdrop-blur-md" />
          <div className="animate-rise-in relative w-full max-w-lg overflow-hidden rounded-3xl border border-blush/20 bg-card p-8 text-center shadow-2xl sm:p-10">
            <div aria-hidden className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-rose/20 blur-3xl" />
            <div className="relative">
              <div className="mx-auto text-6xl" aria-hidden>🎂</div>
              <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.35em] text-blush">One last thing</p>
              <h3 className="mt-3 font-display text-3xl font-extrabold text-balance sm:text-4xl">Make a wish, birthday girl.</h3>
              <p className="mx-auto mt-4 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">I hope this little corner of the internet reminds you that you are loved, remembered, and worth celebrating — today and on all the ordinary days too.</p>
              <p className="mt-6 font-display text-xl font-semibold text-blush">Happy birthday, {HER_NAME} ♡</p>
              <button type="button" onClick={() => { fire(); setFinaleOpen(false) }} className="mt-7 rounded-full bg-blush px-7 py-3 font-semibold text-[#120e13] transition hover:scale-105 hover:bg-white">Keep the wish ✨</button>
            </div>
          </div>
        </div>
      )}

      {/* Heart confetti overlay */}
      {overlay}
    </div>
  )
}
