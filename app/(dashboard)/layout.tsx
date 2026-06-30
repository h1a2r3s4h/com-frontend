import { Sidebar } from "@/components/layout/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="grid min-h-screen grid-cols-[260px_1fr]">
        <Sidebar />
        <main className="p-7">{children}</main>
      </div>
    </div>
  );
}