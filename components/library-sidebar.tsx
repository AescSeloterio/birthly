"use client"

import { Home, Image as ImageIcon, ListMusic, Mail, Video, Clock3, type LucideIcon } from "lucide-react"
import type { ViewId } from "@/lib/data"
import { cn } from "@/lib/utils"

const NAV: { id: ViewId; label: string; sub: string; icon: LucideIcon }[] = [
  { id: "home", label: "Home", sub: "Your birthday feed", icon: Home },
  { id: "pictures", label: "Pictures of Us", sub: "Photo albums", icon: ImageIcon },
  { id: "greetings", label: "Greetings", sub: "Video messages", icon: Video },
  { id: "tracklist", label: "Tracklist", sub: "Memories", icon: ListMusic },
  { id: "letters", label: "Open When Letters", sub: "For the right moment", icon: Mail },
  { id: "timeline", label: "Our Story", sub: "The little timeline", icon: Clock3 },
]

export function LibrarySidebar({
  active,
  onNavigate,
}: {
  active: ViewId
  onNavigate: (id: ViewId) => void
}) {
  return (
    <nav
      aria-label="Our Little Library"
      className="scroll-area flex h-full flex-col gap-2 overflow-y-auto rounded-xl bg-card p-3"
    >
      <div className="flex items-center gap-2 px-2 py-2">
        <ListMusic className="h-5 w-5 text-muted-foreground" />
        <span className="font-display text-sm font-semibold text-muted-foreground">
          Our Little Library
        </span>
      </div>

      <ul className="flex flex-col gap-1">
        {NAV.map(({ id, label, sub, icon: Icon }) => {
          const isActive = active === id
          return (
            <li key={id}>
              <button
                type="button"
                onClick={() => onNavigate(id)}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors",
                  isActive ? "bg-card-hover" : "hover:bg-card-hover",
                )}
              >
                <span
                  className={cn(
                    "flex h-11 w-11 shrink-0 items-center justify-center rounded-md transition-colors",
                    isActive
                      ? "bg-gradient-to-br from-blush to-rose text-[#120e13]"
                      : "bg-muted text-muted-foreground group-hover:text-foreground",
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span
                    className={cn(
                      "block truncate font-medium",
                      isActive ? "text-foreground" : "text-foreground/90",
                    )}
                  >
                    {label}
                  </span>
                  <span className="block truncate text-xs text-muted-foreground">
                    {sub}
                  </span>
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
