"use client";

import { useLeadStore } from "@/store/lead-store";
import { useFilterStore } from "@/store/filter-store";
import { LeadCard } from "./lead-card";
import { StageStrip } from "./stage-strip";

export function LeadList() {
  const {
    search,
    stage,
    priority,
  } = useFilterStore();

  const { leads } = useLeadStore();

  const filteredLeads = leads.filter(
    (lead) => {
      const query =
        search.toLowerCase();

      const matchesSearch =
        lead.name
          .toLowerCase()
          .includes(query) ||
        lead.phone
          .toLowerCase()
          .includes(query) ||
        lead.society
          .toLowerCase()
          .includes(query) ||
        lead.location
          .toLowerCase()
          .includes(query);

      const matchesStage =
        stage === "All" ||
        lead.stage === stage;

      const matchesPriority =
        priority === "All" ||
        lead.priority ===
          priority;

      return (
        matchesSearch &&
        matchesStage &&
        matchesPriority
      );
    }
  );

  return (
    <div className="rounded-lg border bg-white p-4">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-bold uppercase text-teal-700">
            Pipeline
          </p>

          <h2 className="font-semibold">
            Leads
          </h2>
        </div>

        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs">
          {filteredLeads.length} shown
        </span>
      </div>

      <StageStrip />

      <div className="space-y-3">
        {filteredLeads.length >
        0 ? (
          filteredLeads.map(
            (lead) => (
              <LeadCard
                key={lead.id}
                id={lead.id}
                name={lead.name}
                society={
                  lead.society
                }
                requirement={
                  lead.requirement
                }
                location={
                  lead.location
                }
                stage={lead.stage}
                priority={
                  lead.priority
                }
              />
            )
          )
        ) : (
          <div className="rounded-lg border border-dashed p-6 text-center text-sm text-slate-500">
            No leads found
          </div>
        )}
      </div>
    </div>
  );
}