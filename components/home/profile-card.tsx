import Image from "next/image"
import { Pencil } from "lucide-react"

export function ProfileCard() {
  return (
    <div className="rounded-xl bg-card p-5 shadow-sm">
      {/* Avatar */}
      <div className="flex flex-col items-center">
        <div className="relative mb-3">
          <Image
            src="/images/avatar-minnie.jpg"
            alt="Minnie Armstrong"
            width={80}
            height={80}
            className="rounded-full object-cover"
          />
        </div>
        <h3 className="text-base font-semibold text-[#6c63ff]">
          Minnie Armstrong
        </h3>
        <p className="text-sm text-muted-foreground">UI / UX Designer</p>
      </div>

      {/* Progress */}
      <div className="mt-4">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">75% Completed</span>
          <button className="flex items-center gap-1 text-xs text-[#6c63ff]">
            <Pencil className="h-3 w-3" />
            Update profile
          </button>
        </div>
        <div className="h-1.5 w-full rounded-full bg-border">
          <div
            className="h-1.5 rounded-full bg-[#6c63ff]"
            style={{ width: "75%" }}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <button className="flex-1 rounded-lg border border-border px-3 py-2 text-xs font-medium text-foreground hover:bg-accent">
          View Full Profile
        </button>
        <button className="flex-1 rounded-lg border border-[#6c63ff] px-3 py-2 text-xs font-medium text-[#6c63ff] hover:bg-[#6c63ff]/5">
          Share Profile
        </button>
      </div>
    </div>
  )
}
