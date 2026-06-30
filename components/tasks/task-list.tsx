"use client";

import { Button } from "@/components/ui/button";
import { useLeadStore } from "@/store/lead-store";

export function TaskList() {
  const {
    tasks,
    completeTask,
  } = useLeadStore();

  return (
    <div className="rounded-lg border bg-white p-4">
      <h2 className="mb-4 font-semibold">
        Follow Ups
      </h2>

      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between rounded-lg border p-3"
          >
            <span
              className={
                task.completed
                  ? "line-through text-slate-400"
                  : ""
              }
            >
              {task.title}
            </span>

            {!task.completed && (
              <Button
                size="sm"
                onClick={() =>
                  completeTask(task.id)
                }
              >
                Done
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}