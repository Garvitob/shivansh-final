import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { BUSINESS } from "@/lib/site";
import type { Crumb } from "@/lib/seo";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  lede,
  crumbs,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lede: ReactNode;
  crumbs: Crumb[];
  children?: ReactNode;
}) {
  return (
    <div className="page-hero">
      <div className="wrap">
        <Breadcrumbs crumbs={crumbs} />
        <p className="eyebrow" style={{ marginTop: 26 }}>
          {eyebrow}
        </p>
        <h1>{title}</h1>
        <div className="lede">{lede}</div>
        {children}
        <div className="page-hero-actions">
          <a className="btn-solid" href={BUSINESS.telHref}>
            Call {BUSINESS.phoneShort}
          </a>
          <a
            className="btn-outline"
            href={BUSINESS.whatsappHref}
            target="_blank"
            rel="noopener"
          >
            <WhatsAppIcon size={16} />
            WhatsApp
          </a>
          <Link className="btn-outline" href="#enquiry">
            Tell us what you need
          </Link>
        </div>
      </div>
    </div>
  );
}
