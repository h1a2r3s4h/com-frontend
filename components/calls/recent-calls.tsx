"use client";

import { useLeadStore } from "@/store/lead-store";

export function RecentCalls() {
  const { calls } = useLeadStore();

  return (
    <div className="rounded-lg border bg-white p-4">
      <h2 className="mb-4 font-semibold">
        Recent Calls
      </h2>

      <div className="space-y-3">
        {calls.map((call) => (
          <div
            key={call.id}
            className="rounded-lg border p-3"
          >
            {call.result}
          </div>
        ))}
      </div>
    </div>
  );
}