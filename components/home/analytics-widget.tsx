"use client"

import { Lock } from "lucide-react"

export function AnalyticsWidget() {
  return (
    <div className="rounded-xl bg-card p-5 shadow-sm blur-[1px]">
      <div className="mb-1 flex items-center justify-between">
        <h4 className="text-sm font-semibold text-foreground">Analytics</h4>
      </div>
      <p className="mb-4 text-xs text-muted-foreground">Connections</p>

      {/* Simple SVG chart */}
      <div className="relative h-[120px] w-full">
        <svg
          viewBox="0 0 200 100"
          className="h-full w-full"
          preserveAspectRatio="none"
        >
          {/* Line 1 - Blue */}
          <polyline
            fill="none"
            stroke="#6c63ff"
            strokeWidth="2"
            points="0,70 30,60 60,50 90,65 120,40 150,55 200,30"
          />
          {/* Line 2 - Light blue */}
          <polyline
            fill="none"
            stroke="#93c5fd"
            strokeWidth="2"
            points="0,80 30,75 60,80 90,70 120,75 150,65 200,60"
          />
          {/* Line 3 - Green */}
          <polyline
            fill="none"
            stroke="#34d399"
            strokeWidth="2"
            points="0,60 30,55 60,40 90,55 120,50 150,45 200,50"
          />
        </svg>

        {/* Analytics badge */}
        <div className="absolute bottom-15 left-15 flex items-center gap-1.5 rounded-full bg-[#6c63ff] px-3 py-1.5 text-[10px] font-medium text-white shadow-md">
          <Lock className="h-3 w-3" />
          Analytics
        </div>
      </div>

      {/* Month labels */}
      <div className="mt-2 flex justify-between text-[10px] text-muted-foreground">
        <span>Sept</span>
        <span>Oct</span>
        <span>Nov</span>
      </div>
    </div>
  )
}
