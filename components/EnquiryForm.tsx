"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitEnquiry, type EnquiryState } from "@/lib/actions/enquiry";
import { WANT_OPTIONS, PROPERTY_TYPE_OPTIONS, BUSINESS } from "@/lib/site";

const initial: EnquiryState = { status: "idle" };

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <button className="btn-submit" type="submit" disabled={pending}>
      {pending ? "Sending…" : label}
    </button>
  );
}

export type EnquiryFormProps = {
  /** Route the enquiry came from — stored against the row. */
  sourcePage: string;
  listingSlug?: string;
  defaultSectorArea?: string;
  defaultPropertyType?: string;
  defaultWant?: string;
  submitLabel?: string;
  note?: string;
};

export function EnquiryForm({
  sourcePage,
  listingSlug,
  defaultSectorArea = "",
  defaultPropertyType = "Flat",
  defaultWant = "BUY",
  submitLabel = "Send enquiry",
  note = "Reaches our team directly.",
}: EnquiryFormProps) {
  const [state, formAction] = useActionState(submitEnquiry, initial);

  if (state.status === "success") {
    return (
      <div className="form-card">
        <p className="form-success">
          Got it. We&apos;ll call you back.
          <span>
            In a hurry? Ring{" "}
            <a href={BUSINESS.telHref} style={{ borderBottom: "1px solid var(--brass)" }}>
              {BUSINESS.phoneShort}
            </a>{" "}
            and we&apos;ll pick up.
          </span>
        </p>
      </div>
    );
  }

  return (
    <div className="form-card">
      <form className="form" action={formAction} noValidate>
        <input type="hidden" name="sourcePage" value={sourcePage} />
        {listingSlug ? <input type="hidden" name="listingSlug" value={listingSlug} /> : null}

        <div className="f-hp" aria-hidden="true">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="f-field">
          <label htmlFor="f-name">Your name</label>
          <input id="f-name" name="name" type="text" autoComplete="name" required />
        </div>

        <div className="f-field">
          <label htmlFor="f-phone">Phone</label>
          <input id="f-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" required />
        </div>

        <div className="f-field">
          <label htmlFor="f-want">I want to</label>
          <select id="f-want" name="want" defaultValue={defaultWant}>
            {WANT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        <div className="f-field">
          <label htmlFor="f-type">Property type</label>
          <select id="f-type" name="propertyType" defaultValue={defaultPropertyType}>
            {PROPERTY_TYPE_OPTIONS.map((o) => (
              <option key={o.value} value={o.label}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        <div className="f-field full">
          <label htmlFor="f-sector">Sector or area</label>
          <input
            id="f-sector"
            name="sectorArea"
            type="text"
            defaultValue={defaultSectorArea}
            placeholder="e.g. Sector 135, or anywhere in Noida"
          />
        </div>

        <div className="f-field full">
          <label htmlFor="f-msg">Anything else</label>
          <textarea id="f-msg" name="message" rows={2} />
        </div>

        {state.status === "error" && state.message ? (
          <p className="form-error" role="alert">
            {state.message}
          </p>
        ) : null}

        <div className="form-actions">
          <SubmitButton label={submitLabel} />
          <span className="form-note">{note}</span>
        </div>
      </form>
    </div>
  );
}
