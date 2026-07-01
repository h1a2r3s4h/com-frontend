"use client";

import { useLeadStore } from "@/store/lead-store";

const stages = [
  "New",
  "Contacted",
  "Visit Planned",
  "Negotiation",
  "Won",
  "Lost",
];

export function StageHealth() {
  const { leads } = useLeadStore();

  const total = leads.length || 1;

  return (
    <div className="rounded-lg border bg-white p-5">
      <div className="mb-6">
        <p className="text-xs font-bold uppercase text-teal-700">
          Reports
        </p>

        <h2 className="font-semibold">
          Stage Health
        </h2>
      </div>

      <div className="space-y-4">
        {stages.map((stage) => {
          const count = leads.filter(
            (lead) => lead.stage === stage
          ).length;

          const percentage =
            (count / total) * 100;

          return (
            <div
              key={stage}
              className="grid grid-cols-[100px_1fr_30px] sm:grid-cols-[140px_1fr_40px] items-center gap-2 sm:gap-3"
            >
              <p className="text-sm font-medium truncate" title={stage}>
                {stage}
              </p>

              <div className="h-3 rounded-full bg-slate-200">
                <div
                  className="h-3 rounded-full bg-teal-700 transition-all"
                  style={{
                    width: `${percentage}%`,
                  }}
                />
              </div>

              <span className="text-sm text-slate-500">
                {count}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}