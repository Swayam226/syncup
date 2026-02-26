import Image from "next/image"
import { Send } from "lucide-react"

export function CreatePost() {
  return (
    <div className="rounded-xl bg-card p-5 shadow-sm">
      <h4 className="mb-3 text-sm font-semibold text-foreground">
        Create a Post
      </h4>
      <div className="flex flex-wrap items-center gap-3">
        <Image
          src="/images/avatar-user.jpg"
          alt="Your avatar"
          width={36}
          height={36}
          className="rounded-full object-cover"
        />
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="What's on your mind?"
            className="h-10 w-full rounded-lg border border-border bg-background pl-4 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
            aria-label="Send"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
