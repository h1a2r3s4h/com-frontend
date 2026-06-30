import { Topbar } from "@/components/layout/topbar";
import { MetricsGrid } from "@/components/metrics/metrics-grid";
import { RecentCalls } from "@/components/calls/recent-calls";
import { TaskList } from "@/components/tasks/task-list";
import { StageHealth } from "@/components/reports/stage-health";

export default function OverviewPage() {
  return (
    <>
      <Topbar />
      <MetricsGrid />

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <RecentCalls />
        <TaskList />
      </div>

      <div className="mt-6">
        <StageHealth />
      </div>
    </>
  );
}