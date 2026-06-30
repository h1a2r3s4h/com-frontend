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
    <div className="grid grid-cols-6 gap-4">
      {stages.map((stage) => {
        const stageLeads =
          leads.filter(
            (lead) =>
              lead.stage === stage
          );

        return (
          <div
            key={stage}
            className="rounded-lg border bg-white p-3"
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
  );
}