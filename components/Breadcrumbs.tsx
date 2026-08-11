import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import type { Crumb } from "@/lib/seo";

/** Visible breadcrumbs plus the matching BreadcrumbList structured data. */
export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  const full: Crumb[] = [{ name: "Home", href: "/" }, ...crumbs];
  const last = full.length - 1;

  return (
    <>
      <nav className="crumbs" aria-label="Breadcrumb">
        {full.map((c, i) => (
          <span key={c.href + c.name} style={{ display: "inline-flex", gap: 8 }}>
            {i > 0 ? <span className="sep">/</span> : null}
            {i === last ? (
              <span aria-current="page">{c.name}</span>
            ) : (
              <Link href={c.href}>{c.name}</Link>
            )}
          </span>
        ))}
      </nav>
      <BreadcrumbJsonLd crumbs={full} />
    </>
  );
}
