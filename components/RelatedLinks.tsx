import Link from "next/link";
import type { RelatedLink } from "@/lib/sectors";

export function RelatedLinks({
  links,
  heading = "Where to go next",
}: {
  links: RelatedLink[];
  heading?: string;
}) {
  if (!links.length) return null;

  return (
    <div className="related">
      <div className="wrap">
        <p className="eyebrow">{heading}</p>
        <div className="related-rows">
          {links.map((l) => (
            <Link className="related-row" key={l.href + l.label} href={l.href}>
              <span className="t">
                {l.label}
                {l.note ? <span className="n">{l.note}</span> : null}
              </span>
              <span className="g-arrow">→</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
