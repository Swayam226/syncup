import { TrendingUp } from "lucide-react"

const stats = [
  {
    label: "Active Jobs",
    value: "03",
    change: "+5 from yesterday",
    bars: ["#6c63ff", "#34d399", "#f59e0b", "#ef4444"],
  },
  {
    label: "Jobs In Progress",
    value: "03",
    change: "+5 from yesterday",
    bars: ["#6c63ff", "#34d399", "#f59e0b", "#ef4444"],
  },
  {
    label: "Shortlisted",
    value: "03",
    change: "+5 from yesterday",
    bars: ["#6c63ff", "#34d399", "#f59e0b", "#ef4444"],
  },
  {
    label: "On Hold",
    value: "03",
    change: "+5 from yesterday",
    bars: ["#6c63ff", "#34d399", "#f59e0b", "#ef4444"],
  },
]

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl bg-card p-4 shadow-sm"
        >
          <p className="text-xs text-muted-foreground">{stat.label}</p>
          <p className="mt-1 text-2xl font-bold text-foreground">
            {stat.value}
          </p>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
              <TrendingUp className="h-3 w-3 text-emerald-500" />
              {stat.change}
            </div>
            {/* Mini bar chart */}
            <div className="flex items-end gap-[3px]">
              {stat.bars.map((color, i) => (
                <div
                  key={i}
                  className="w-[5px] rounded-sm"
                  style={{
                    backgroundColor: color,
                    height: `${12 + i * 5}px`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
