import Link from "next/link";
import { SECTORS } from "@/lib/sectors";

/** The signature element — oversized sector numerals, 144 marked as home. */
export function SectorWall() {
  return (
    <div className="sector-wall" aria-label="Focus sectors in Noida">
      {SECTORS.map((s) => (
        <Link
          key={s.num}
          href={`/sectors/${s.slug}`}
          className={s.isHome ? "home" : undefined}
          aria-label={`Sector ${s.num}, Noida`}
        >
          {s.num}
          {s.isHome ? <sup>home</sup> : null}
        </Link>
      ))}
    </div>
  );
}
