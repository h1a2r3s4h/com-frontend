"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "Overview",
    href: "/overview",
  },
  {
    label: "Pipeline",
    href: "/pipeline",
  },
  {
    label: "Call Desk",
    href: "/calls",
  },
  {
    label: "Tasks",
    href: "/tasks",
  },
  {
    label: "Reports",
    href: "/reports",
  },
];

export function Sidebar() {
  const pathname = usePathname();

<Link
  href="/pipeline"
  className={
    pathname === "/pipeline"
      ? "bg-slate-800 text-white"
      : ""
  }
>
  Pipeline
</Link>

  return (
    <aside className="flex h-screen flex-col bg-slate-950 p-4 text-white">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-teal-700 text-sm font-semibold">
          PI
        </div>

        <div>
          <p className="text-sm font-semibold">PropInsta CRM</p>
          <p className="text-xs text-slate-400">
            Real estate sales desk
          </p>
        </div>
      </div>

      <nav className="mt-8 space-y-2">
        {navItems.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={
                active
                  ? "block rounded-md bg-slate-800 px-4 py-3 text-sm font-medium"
                  : "block rounded-md px-4 py-3 text-sm text-slate-300 hover:bg-slate-800"
              }
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto rounded-md border border-slate-800 p-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-500" />

          <div>
            <p className="text-sm font-medium">
              Ravi Kumar
            </p>

            <p className="text-xs text-slate-400">
              Calling available
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}