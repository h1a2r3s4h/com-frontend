"use client";

import { useLeadStore } from "@/store/lead-store";



export function StageStrip() {
    const { leads } = useLeadStore();

const stages = [
  "New",
  "Contacted",
  "Visit Planned",
  "Negotiation",
  "Won",
  "Lost",
].map((stage) => ({
  name: stage,
  count: leads.filter(
    (lead) => lead.stage === stage
  ).length,
}));
  return (
    <div className="mb-4 flex flex-wrap gap-2">
      {stages.map((stage) => (
        <div
          key={stage.name}
          className="flex items-center gap-2 rounded-full border bg-white px-4 py-2"
        >
          <span className="text-sm text-slate-600">
            {stage.name}
          </span>

          <span className="font-semibold">
            {stage.count}
          </span>
        </div>
      ))}
    </div>
  );
}