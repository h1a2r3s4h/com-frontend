"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFilterStore } from "@/store/filter-store";
import { exportLeadsCSV } from "@/lib/export-csv";
import { useLeadStore } from "@/store/lead-store";
import { NewLeadDialog } from "../leads/new-lead-dialog";





export function Topbar() {
  const { search, setSearch } = useFilterStore();
  const { leads } = useLeadStore();

  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
      <div>
        <p className="text-xs font-bold uppercase text-teal-700">
          Agent Command Center
        </p>

        <h1 className="mt-1 text-2xl sm:text-3xl md:text-5xl font-bold">
          PropInsta Lead Operations
        </h1>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-end w-full md:w-auto">
        <div className="w-full md:w-80">
          <label className="mb-1 block text-xs font-semibold text-slate-500">
            Search
          </label>

          <Input
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search leads"
          />
        </div>

        <div className="flex gap-2 w-full sm:w-auto">
          <Button
            variant="outline"
            className="flex-1 sm:flex-initial"
            onClick={() => exportLeadsCSV(leads)}
          >
            Export CSV
          </Button>

          <div className="flex-1 sm:flex-initial">
            <NewLeadDialog />
          </div>
        </div>
      </div>
    </div>
  );
}