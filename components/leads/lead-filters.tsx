"use client";

import { useFilterStore } from "@/store/filter-store";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";



export function LeadFilters() {
    const {
  stage,
  priority,
  setStage,
  setPriority,
} = useFilterStore();

  return (
    <div className="mb-4 flex items-end gap-4 rounded-lg border bg-white p-4">
      <div className="w-44">
        <label className="mb-2 block text-xs font-semibold text-slate-500">
          Stage
        </label>

        <Select
  value={stage}
  onValueChange={setStage}
>
          <SelectTrigger>
            <SelectValue placeholder="All stages" />
          </SelectTrigger>

          <SelectContent>
  <SelectItem value="All">
    All Stages
  </SelectItem>

  <SelectItem value="New">
    New
  </SelectItem>

  <SelectItem value="Contacted">
    Contacted
  </SelectItem>

  <SelectItem value="Visit Planned">
    Visit Planned
  </SelectItem>

  <SelectItem value="Negotiation">
    Negotiation
  </SelectItem>

  <SelectItem value="Won">
    Won
  </SelectItem>

  <SelectItem value="Lost">
    Lost
  </SelectItem>
</SelectContent>
        </Select>
      </div>

      <div className="w-44">
        <label className="mb-2 block text-xs font-semibold text-slate-500">
          Source
        </label>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="All sources" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">All sources</SelectItem>
            <SelectItem value="website">Website</SelectItem>
            <SelectItem value="call">Call</SelectItem>
            <SelectItem value="partner">Partner</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="w-44">
        <label className="mb-2 block text-xs font-semibold text-slate-500">
          Priority
        </label>

        <Select
  value={priority}
  onValueChange={setPriority}
>
          <SelectTrigger>
            <SelectValue placeholder="All priorities" />
          </SelectTrigger>

          <SelectContent>
  <SelectItem value="All">
    All Priorities
  </SelectItem>

  <SelectItem value="Hot">
    Hot
  </SelectItem>

  <SelectItem value="Warm">
    Warm
  </SelectItem>

  <SelectItem value="Cold">
    Cold
  </SelectItem>
</SelectContent>
        </Select>
      </div>

      <Button
  variant="outline"
  onClick={() => {
    setStage("All");
    setPriority("All");
  }}
>
  Reset Demo
</Button>
    </div>
  );
}