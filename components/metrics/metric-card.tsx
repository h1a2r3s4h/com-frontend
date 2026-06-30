import { ReactNode } from "react";

interface MetricCardProps {
  title: string;
  value: string;
  subtitle: string;
}

export function MetricCard({
  title,
  value,
  subtitle,
}: MetricCardProps) {
  return (
    <div className="rounded-lg border bg-white p-5">
      <p className="text-sm text-slate-500">
        {title}
      </p>

      <h2 className="mt-2 text-4xl font-bold">
        {value}
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        {subtitle}
      </p>
    </div>
  );
}