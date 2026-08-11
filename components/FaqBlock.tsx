import { FaqJsonLd } from "@/components/JsonLd";
import type { Faq } from "@/lib/sectors";

/**
 * Questions render as real headings with the answer directly underneath —
 * the shape answer engines quote from.
 */
export function FaqBlock({
  faqs,
  heading = "Questions we get asked",
  eyebrow = "Straight answers",
}: {
  faqs: Faq[];
  heading?: string;
  eyebrow?: string;
}) {
  if (!faqs.length) return null;

  return (
    <section style={{ borderTop: "1px solid var(--line)" }}>
      <div className="wrap ed-grid">
        <div className="ed-side">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{heading}</h2>
          <p>If yours is not here, ring us. We would rather answer it than have you guess.</p>
        </div>
        <div className="qa-rows">
          {faqs.map((f) => (
            <div className="qa-row" key={f.q}>
              <h3>{f.q}</h3>
              <p className="qa-answer">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
      <FaqJsonLd faqs={faqs} />
    </section>
  );
}
