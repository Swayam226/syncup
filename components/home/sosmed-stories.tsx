import Image from "next/image"
import { MoreHorizontal, UserPlus, MessageCircle } from "lucide-react"

const stories = [
  { name: "Rakesh Sharma", role: "Front-end Developer" },
  { name: "Rakesh Sharma", role: "Front-end Developer" },
  { name: "Rakesh Sharma", role: "Front-end Developer" },
]

export function SosmedStories() {
  return (
    <div className="rounded-xl bg-card p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h4 className="text-sm font-semibold text-foreground">
          Sosmed Stories
        </h4>
        <button aria-label="More options">
          <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {stories.map((person, i) => (
          <div key={i}>
            <div className="flex items-center gap-3">
              <Image
                src="/images/avatar-rakesh.jpg"
                alt={person.name}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-medium text-foreground">
                  {person.name}
                </p>
                <p className="text-xs text-muted-foreground">{person.role}</p>
              </div>
            </div>
            <div className="mt-2 flex gap-2">
              <button className="flex items-center gap-1.5 rounded-full bg-[#6c63ff]/10 px-4 py-1.5 text-xs font-medium text-[#6c63ff]">
                <UserPlus className="h-3.5 w-3.5" />
                Follow
              </button>
              <button className="flex items-center gap-1.5 rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted-foreground">
                <MessageCircle className="h-3.5 w-3.5" />
                Message
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
