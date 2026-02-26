"use client"

import { ChevronDown } from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"

const data = [
  { month: "Jan", sent: 200, interviews: 100, rejected: 50 },
  { month: "Feb", sent: 300, interviews: 200, rejected: 100 },
  { month: "Mar", sent: 250, interviews: 280, rejected: 150 },
  { month: "Apr", sent: 500, interviews: 400, rejected: 200 },
  { month: "May", sent: 600, interviews: 500, rejected: 300 },
  { month: "Jun", sent: 550, interviews: 520, rejected: 250 },
  { month: "Jul", sent: 700, interviews: 600, rejected: 350 },
  { month: "Aug", sent: 650, interviews: 580, rejected: 400 },
  { month: "Sep", sent: 500, interviews: 520, rejected: 300 },
  { month: "Oct", sent: 600, interviews: 480, rejected: 350 },
  { month: "Nov", sent: 550, interviews: 420, rejected: 280 },
  { month: "Dec", sent: 700, interviews: 500, rejected: 320 },
]

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; color: string }>; label?: string }) {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg bg-[#1a1a2e] px-4 py-3 text-white shadow-lg">
        <p className="mb-2 text-xs text-gray-300">{label}</p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-[#6c63ff]" />
            <span className="text-sm font-semibold">{payload[0]?.value}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-[#34d399]" />
            <span className="text-sm font-semibold">{payload[1]?.value}</span>
          </div>
        </div>
        <div className="mt-1 flex items-center gap-4 text-[10px] text-gray-400">
          <span>Application Sent</span>
          <span>Interviews</span>
        </div>
      </div>
    )
  }
  return null
}

export function VacancyChart() {
  return (
    <div className="rounded-xl bg-card p-5 shadow-sm">
      {/* Header */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h4 className="text-base font-semibold text-foreground">
          Vacancy Stats
        </h4>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 text-xs text-foreground">
            Application Sent
            <div className="relative h-5 w-9 rounded-full bg-[#6c63ff]">
              <div className="absolute right-0.5 top-0.5 h-4 w-4 rounded-full bg-white" />
            </div>
          </label>
          <label className="flex items-center gap-2 text-xs text-foreground">
            Interviews
            <div className="relative h-5 w-9 rounded-full bg-[#6c63ff]">
              <div className="absolute right-0.5 top-0.5 h-4 w-4 rounded-full bg-white" />
            </div>
          </label>
          <label className="flex items-center gap-2 text-xs text-foreground">
            Rejected
            <div className="relative h-5 w-9 rounded-full bg-gray-300">
              <div className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white" />
            </div>
          </label>
          <button className="flex items-center gap-1 rounded-lg border border-border px-3 py-1.5 text-xs text-foreground">
            This Year
            <ChevronDown className="h-3 w-3" />
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 11, fill: "#6b7280" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: "#6b7280" }}
              axisLine={false}
              tickLine={false}
              domain={[0, 1000]}
              ticks={[0, 200, 400, 600, 800, 1000]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="sent"
              stroke="#6c63ff"
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 6, fill: "#6c63ff", stroke: "#fff", strokeWidth: 2 }}
            />
            <Line
              type="monotone"
              dataKey="interviews"
              stroke="#34d399"
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 6, fill: "#34d399", stroke: "#fff", strokeWidth: 2 }}
            />
            <Line
              type="monotone"
              dataKey="rejected"
              stroke="#ef4444"
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 6, fill: "#ef4444", stroke: "#fff", strokeWidth: 2 }}
              strokeDasharray="5 5"
              opacity={0.3}
            />
            <Legend
              verticalAlign="bottom"
              iconType="circle"
              iconSize={8}
              formatter={(value: string) => {
                const labels: Record<string, string> = {
                  sent: "Application Sent",
                  interviews: "Interviews",
                  rejected: "Rejected",
                }
                return (
                  <span className="text-xs text-muted-foreground">
                    {labels[value] || value}
                  </span>
                )
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
