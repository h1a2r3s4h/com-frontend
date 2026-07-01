import { LeadDetail } from "./lead-detail";
import { LeadList } from "./lead-list";

export function Workspace() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-5">
      <LeadList />
      <LeadDetail />
    </div>
  );
}