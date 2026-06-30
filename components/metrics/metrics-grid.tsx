"use client";

import { useLeadStore } from "@/store/lead-store";

export function MetricsGrid() {
  const { leads, tasks, calls } =
    useLeadStore();

  const activeLeads =
    leads.length;

  const hotLeads =
    leads.filter(
      (lead) =>
        lead.priority === "Hot"
    ).length;

  const dueTasks =
    tasks.filter(
      (task) =>
        !task.completed
    ).length;

  const expectedValue =
    leads.length * 2500000;

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <MetricCard
        title="Active Leads"
        value={activeLeads}
        subtitle={`${hotLeads} hot prospects`}
      />

      <MetricCard
        title="Calls Today"
        value={calls.length}
        subtitle={`${calls.length} calls logged`}
      />

      <MetricCard
        title="Follow Ups Due"
        value={dueTasks}
        subtitle="Pending tasks"
      />

      <MetricCard
        title="Expected Value"
        value={`₹${(
          expectedValue /
          10000000
        ).toFixed(1)} Cr`}
        subtitle="Pipeline value"
      />
    </div>
  );
}

function MetricCard({
  title,
  value,
  subtitle,
}: {
  title: string;
  value: string | number;
  subtitle: string;
}) {
  return (
    <div className="rounded-lg border bg-white p-5">
      <p className="text-sm text-slate-500">
        {title}
      </p>

      <h3 className="mt-2 text-3xl font-bold">
        {value}
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        {subtitle}
      </p>
    </div>
  );
}