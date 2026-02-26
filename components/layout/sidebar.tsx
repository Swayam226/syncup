"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  Users,
  CalendarDays,
  UsersRound,
  MessageCircle,
  Bookmark,
  Settings,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { icon: Home, href: "/", label: "Home" },
  { icon: Users, href: "#", label: "People" },
  { icon: CalendarDays, href: "/dashboard", label: "Jobs" },
  { icon: UsersRound, href: "#", label: "Groups" },
  { icon: MessageCircle, href: "#", label: "Messages" },
]

const bottomItems = [
  { icon: Bookmark, href: "#", label: "Saved" },
  { icon: Settings, href: "#", label: "Settings" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="flex w-[60px] flex-col items-center border-r border-border bg-card py-4">
      {/* Logo */}
      <Link href="/" className="mb-8">
        <div className="flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path
              d="M4 8C4 5.79086 5.79086 4 8 4H14L10 14H4V8Z"
              fill="#6C63FF"
            />
            <path
              d="M14 4H20C22.2091 4 24 5.79086 24 8V14H18L14 4Z"
              fill="#6C63FF"
            />
            <path
              d="M4 14H10L14 24H8C5.79086 24 4 22.2091 4 20V14Z"
              fill="#8B83FF"
            />
            <path
              d="M14 24L18 14H24V20C24 22.2091 22.2091 24 20 24H14Z"
              fill="#8B83FF"
            />
          </svg>
        </div>
      </Link>

      {/* Main nav */}
      <nav className="flex flex-1 flex-col items-center gap-2">
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href) && item.href !== "#"
          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-lg transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
              aria-label={item.label}
            >
              <item.icon className="h-5 w-5" />
            </Link>
          )
        })}
      </nav>

      {/* Bottom nav */}
      <div className="flex flex-col items-center gap-2">
        {bottomItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            aria-label={item.label}
          >
            <item.icon className="h-5 w-5" />
          </Link>
        ))}
      </div>
    </aside>
  )
}
