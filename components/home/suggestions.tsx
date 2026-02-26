import Image from "next/image"
import { Star } from "lucide-react"

export function Suggestions() {
  return (
    <div className="rounded-xl bg-card p-5 shadow-sm">
      <h4 className="text-base font-bold text-[#6c63ff]">Suggestions</h4>
      <p className="mb-3 text-xs leading-relaxed text-muted-foreground">
        Below courses are suggested based on your skills & curated to help you
        stay updated with the current market trends.
      </p>

      <div className="overflow-hidden rounded-lg">
        <Image
          src="/images/figma-course.jpg"
          alt="Figma Basics course"
          width={300}
          height={140}
          className="h-[120px] w-full object-cover"
        />
      </div>

      <div className="mt-3 flex items-center justify-between">
        <div>
          <h5 className="text-sm font-semibold text-foreground">
            Figma: Basics
          </h5>
          <p className="text-xs text-muted-foreground">Tyler Hooks</p>
        </div>
        <div className="flex items-center gap-1">
          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          <span className="text-xs font-medium text-foreground">4.2</span>
        </div>
      </div>
    </div>
  )
}
