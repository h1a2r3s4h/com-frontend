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

export function PipelineBoard() {
  const {
    leads,
  } = useLeadStore();

  return (
    <div className="overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0">
      <div className="flex gap-4 min-w-max md:grid md:grid-cols-6 md:min-w-0">
        {stages.map((stage) => {
          const stageLeads =
            leads.filter(
              (lead) =>
                lead.stage === stage
            );

          return (
            <div
              key={stage}
              className="w-[280px] md:w-auto rounded-lg border bg-white p-3 shrink-0"
            >
              <h3 className="mb-3 font-semibold">
                {stage}
              </h3>

              <div className="space-y-2">
                {stageLeads.map(
                  (lead) => (
                    <div
                      key={lead.id}
                      className="rounded border p-2"
                    >
                      {lead.name}
                    </div>
                  )
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}