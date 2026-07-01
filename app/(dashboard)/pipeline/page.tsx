import { Topbar } from "@/components/layout/topbar";
import { LeadFilters } from "@/components/leads/lead-filters";
import { LeadList } from "@/components/leads/lead-list";
import { LeadDetail } from "@/components/leads/lead-detail";

export default function PipelinePage() {
  return (
    <>
      <Topbar />

      <div className="mt-6">
        <LeadFilters />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[420px_1fr]">
        <LeadList />
        <LeadDetail />
      </div>
    </>
  );
}