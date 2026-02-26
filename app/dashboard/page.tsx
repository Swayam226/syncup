import { ChevronDown } from "lucide-react"
import { StatsCards } from "@/components/dashboard/stats-cards"
import { VacancyChart } from "@/components/dashboard/vacancy-chart"
import { RecommendedJobs } from "@/components/dashboard/recommended-jobs"
import { JobApplicationTable } from "@/components/dashboard/job-application-table"

export default function DashboardPage() {
  return (
    <div className="mx-auto w-full max-w-[1200px] p-5">
      {/* Header */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-foreground">
            Welcome back, Julie
          </h1>
          <p className="text-sm text-muted-foreground">
            {"Here's what you need to focus on today"}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm text-foreground">
            Last 30 Days
            <ChevronDown className="h-4 w-4" />
          </button>
          <button className="rounded-lg bg-[#6c63ff] px-5 py-2 text-sm font-medium text-white hover:bg-[#5b53ee]">
            Search Job
          </button>
        </div>
      </div>

      {/* Stats */}
      <StatsCards />

      {/* Main content */}
      <div className="mt-5 flex gap-5">
        {/* Left - Charts */}
        <div className="flex min-w-0 flex-1 flex-col gap-5">
          <VacancyChart />
          <JobApplicationTable />
        </div>

        {/* Right - Recommended Jobs */}
        <aside className="hidden w-[280px] shrink-0 xl:block">
          <RecommendedJobs />
        </aside>
      </div>
    </div>
  )
}
