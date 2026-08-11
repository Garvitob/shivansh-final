"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { href: "/admin", label: "Listings" },
  { href: "/admin/enquiries", label: "Enquiries" },
];

export function AdminTabs() {
  const pathname = usePathname();
  return (
    <div className="admin-tabs">
      {TABS.map((t) => {
        const active =
          t.href === "/admin" ? !pathname.startsWith("/admin/enquiries") : pathname.startsWith(t.href);
        return (
          <Link key={t.href} href={t.href} className={active ? "active" : undefined}>
            {t.label}
          </Link>
        );
      })}
    </div>
  );
}
