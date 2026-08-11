import Link from "next/link";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { auth } from "@/auth";
import { logoutAction } from "@/lib/actions/auth";
import { AdminTabs } from "@/components/admin/AdminTabs";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session?.user) redirect("/admin/login");

  return (
    <div className="admin-shell">
      <div className="admin-bar">
        <div className="wrap admin-bar-inner">
          <AdminTabs />
          <div className="admin-tabs" style={{ alignItems: "center" }}>
            <Link href="/" target="_blank" rel="noopener">
              View site
            </Link>
            <form action={logoutAction}>
              <button className="btn-mini" type="submit">
                Sign out
              </button>
            </form>
          </div>
        </div>
      </div>
      <section style={{ paddingTop: 44, paddingBottom: 80 }}>{children}</section>
    </div>
  );
}
