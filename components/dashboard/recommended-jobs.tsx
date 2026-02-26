import { Star, MapPin, Briefcase, ArrowRight } from "lucide-react"

const jobs = [
  {
    title: "UI UX Designer",
    company: "SyncUp Technologies",
    rating: 4.5,
    location: "Bangalore",
    type: "Hybrid",
    trusted: true,
    time: "24 min. ago",
  },
  {
    title: "UI UX Designer",
    company: "SyncUp Technologies",
    rating: 4.5,
    location: "Bangalore",
    type: "Hybrid",
    trusted: true,
    time: "24 min. ago",
  },
  {
    title: "UI UX Designer",
    company: "SyncUp Technologies",
    rating: 4.5,
    location: "Bangalore",
    type: "Hybrid",
    trusted: true,
    time: "24 min. ago",
  },
  {
    title: "UI UX Designer",
    company: "SyncUp Technologies",
    rating: 4.5,
    location: "Bangalore",
    type: "Hybrid",
    trusted: true,
    time: "24 min. ago",
  },
]

export function RecommendedJobs() {
  return (
    <div className="rounded-xl bg-card p-5 shadow-sm">
      <h4 className="mb-1 text-base font-semibold text-foreground">
        Recomended Jobs
      </h4>
      <p className="mb-4 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
        TODAY
      </p>

      <div className="flex flex-col gap-4">
        {jobs.map((job, i) => (
          <div key={i} className="rounded-lg border border-border p-3">
            <div className="flex items-start gap-3">
              {/* Company icons */}
              <div className="flex -space-x-1">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#6c63ff]">
                  <span className="text-[10px] font-bold text-white">S</span>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500">
                  <span className="text-[10px] font-bold text-white">T</span>
                </div>
              </div>
              <div className="flex-1">
                <h5 className="text-sm font-semibold text-foreground">
                  {job.title}
                </h5>
                <p className="text-xs text-muted-foreground">{job.company}</p>
              </div>
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-3 text-[10px] text-muted-foreground">
              <span className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                {job.rating} Trusted
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {job.location}
              </span>
              <span className="flex items-center gap-1">
                <Briefcase className="h-3 w-3" />
                {job.type}
              </span>
            </div>
            <div className="mt-2 flex items-center justify-between text-[10px]">
              <span className="text-muted-foreground">
                {job.rating} Trusted
              </span>
              <span className="text-muted-foreground">{job.time}</span>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-4 flex w-full items-center justify-center gap-2 text-sm font-medium text-foreground hover:text-primary">
        View all posts
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  )
}
