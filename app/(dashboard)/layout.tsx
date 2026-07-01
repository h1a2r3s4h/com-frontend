"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { Menu } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Mobile Top Header */}
      <header className="flex h-16 items-center justify-between border-b bg-slate-950 px-4 py-3 text-white lg:hidden">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-teal-700 text-sm font-semibold">
            PI
          </div>
          <div>
            <p className="text-sm font-semibold">PropInsta CRM</p>
          </div>
        </div>
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="rounded-md p-1.5 text-slate-300 hover:bg-slate-800 hover:text-white transition"
          aria-label="Open sidebar"
        >
          <Menu className="h-6 w-6" />
        </button>
      </header>

      <div className="flex flex-col lg:grid lg:min-h-screen lg:grid-cols-[260px_1fr]">
        {/* Sidebar Backdrop for Mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-slate-900/50 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        <main className="p-4 sm:p-7">{children}</main>
      </div>
    </div>
  );
}