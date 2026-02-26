"use client"

import { Filter } from "lucide-react"
import Image from "next/image"

const applications = [
  {
    title: "Jr. Front-end Developer",
    company: "Microsoft",
    companyIcon: "M",
    companyColor: "#00a4ef",
    appliedOn: "08/08/2023",
    status: "In-progress",
    statusColor: "text-emerald-500",
    statusBg: "bg-emerald-50",
  },
  {
    title: "Senior Back-end Developer",
    company: "Google",
    companyIcon: "G",
    companyColor: "#4285f4",
    appliedOn: "24/07/2023",
    status: "Applied",
    statusColor: "text-[#6c63ff]",
    statusBg: "bg-[#6c63ff]/10",
  },
  {
    title: "UI/UX designer",
    company: "Meta",
    companyIcon: "M",
    companyColor: "#0668e1",
    appliedOn: "01/05/2023",
    status: "Offered",
    statusColor: "text-amber-500",
    statusBg: "bg-amber-50",
  },
]

export function JobApplicationTable() {
  return (
    <div className="rounded-xl bg-card p-5 shadow-sm">
      {/* Header */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h4 className="text-base font-semibold text-foreground">
          Job Application Status
        </h4>
        <div className="flex flex-wrap items-center gap-3">
          <label className="flex items-center gap-2 text-xs text-foreground">
            New
            <div className="relative h-5 w-9 rounded-full bg-[#6c63ff]">
              <div className="absolute right-0.5 top-0.5 h-4 w-4 rounded-full bg-white" />
            </div>
          </label>
          <label className="flex items-center gap-2 text-xs text-foreground">
            In Progress
            <div className="relative h-5 w-9 rounded-full bg-[#6c63ff]">
              <div className="absolute right-0.5 top-0.5 h-4 w-4 rounded-full bg-white" />
            </div>
          </label>
          <label className="flex items-center gap-2 text-xs text-foreground">
            Pending Task
            <div className="relative h-5 w-9 rounded-full bg-gray-300">
              <div className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white" />
            </div>
          </label>
          <button className="flex items-center gap-1.5 text-xs text-muted-foreground">
            Sort By
            <Filter className="h-3 w-3" />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="pb-3 text-left text-xs font-medium text-muted-foreground">
                Job title
              </th>
              <th className="pb-3 text-left text-xs font-medium text-muted-foreground">
                Company
              </th>
              <th className="pb-3 text-left text-xs font-medium text-muted-foreground">
                Applied on
              </th>
              <th className="pb-3 text-left text-xs font-medium text-muted-foreground">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, i) => (
              <tr key={i} className="border-b border-border last:border-0">
                <td className="py-4 text-sm font-medium text-foreground">
                  {app.title}
                </td>
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    <div
                      className="flex h-7 w-7 items-center justify-center rounded"
                      style={{ backgroundColor: app.companyColor }}
                    >
                      <span className="text-xs font-bold text-white">
                        {app.companyIcon}
                      </span>
                    </div>
                    <span className="text-sm text-foreground">
                      {app.company}
                    </span>
                  </div>
                </td>
                <td className="py-4 text-sm text-muted-foreground">
                  {app.appliedOn}
                </td>
                <td className="py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${app.statusColor} ${app.statusBg}`}
                  >
                    {app.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
