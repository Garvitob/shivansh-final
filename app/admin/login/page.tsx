import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { LoginForm } from "@/components/admin/LoginForm";

export const metadata: Metadata = {
  title: "Sign in",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminLoginPage() {
  const session = await auth();
  if (session?.user) redirect("/admin");

  return (
    <section>
      <div className="wrap" style={{ maxWidth: 520 }}>
        <p className="eyebrow">Shivansh Properties</p>
        <h1 className="h2" style={{ marginBottom: 28 }}>
          Admin sign in
        </h1>
        <LoginForm />
      </div>
    </section>
  );
}
