import { RecentCalls } from "../calls/recent-calls";
import { StageHealth } from "../reports/stage-health";
import { TaskList } from "../tasks/task-list";

export function BottomGrid() {
  return (
    <div className="grid gap-5">
      <div className="grid grid-cols-2 gap-5">
        <RecentCalls />
        <TaskList />
      </div>

      <StageHealth />
    </div>
  );
}