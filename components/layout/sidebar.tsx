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

export function Sidebar({
  isOpen,
  onClose,
}: {
  isOpen?: boolean;
  onClose?: () => void;
}) {
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
    <aside
      className={`fixed inset-y-0 left-0 z-50 flex h-screen w-[260px] flex-col bg-slate-950 p-4 text-white transition-transform duration-300 lg:static lg:h-screen lg:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
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

        {/* Close Button on Mobile */}
        <button
          onClick={onClose}
          className="rounded-md p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition lg:hidden"
          aria-label="Close sidebar"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <nav className="mt-8 space-y-2">
        {navItems.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
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