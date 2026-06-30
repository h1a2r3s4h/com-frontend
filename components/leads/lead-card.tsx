"use client";

import { Badge } from "@/components/ui/badge";
import { useLeadStore } from "@/store/lead-store";

interface LeadCardProps {
  id: string;
  name: string;
  society: string;
  requirement: string;
  location: string;
  stage: string;
  priority: "Hot" | "Warm" | "Cold";
}

export function LeadCard({
  id,
  name,
  society,
  requirement,
  location,
  stage,
  priority,
}: LeadCardProps) {
  const { selectedLeadId, setSelectedLead } =
    useLeadStore();

  const active = selectedLeadId === id;

  return (
    <button
      onClick={() => setSelectedLead(id)}
      className={
        active
          ? "w-full rounded-lg border-2 border-teal-600 bg-teal-50 p-3 text-left transition"
          : "w-full rounded-lg border bg-white p-3 text-left transition hover:border-slate-300"
      }
    >
      <div className="flex items-start justify-between">
        <h3 className="font-semibold">
          {name}
        </h3>

        <Badge
          className={
            priority === "Hot"
              ? "bg-red-100 text-red-700 hover:bg-red-100"
              : priority === "Warm"
              ? "bg-amber-100 text-amber-700 hover:bg-amber-100"
              : "bg-blue-100 text-blue-700 hover:bg-blue-100"
          }
        >
          {priority}
        </Badge>
      </div>

      <p className="mt-2 text-sm text-slate-500">
        {society} • {requirement}
      </p>

      <p className="mt-1 text-sm text-slate-500">
        {location} • {stage}
      </p>
    </button>
  );
}