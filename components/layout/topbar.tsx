"use client"

import { Search, MessageSquare, Bell, ChevronDown } from "lucide-react"
import Image from "next/image"

export function Topbar() {
  return (
    <header className="flex h-[60px] items-center justify-between border-b border-border bg-card px-6">
      {/* Search */}
      <div className="relative w-full max-w-[480px]">
        <input
          type="text"
          placeholder="Search"
          className="h-10 w-full rounded-lg border border-border bg-background pl-4 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
        <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-accent"
          aria-label="Messages"
        >
          <MessageSquare className="h-5 w-5" />
        </button>
        <button
          className="relative flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-accent"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-1 cursor-pointer">
          <Image
            src="/images/avatar-user.jpg"
            alt="User avatar"
            width={32}
            height={32}
            className="rounded-full object-cover"
          />
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>
    </header>
  )
}
