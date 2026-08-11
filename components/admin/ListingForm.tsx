"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import type { Listing } from "@prisma/client";
import { PhotoUploader } from "@/components/admin/PhotoUploader";
import type { ListingFormState } from "@/lib/actions/listings";
import { PROPERTY_TYPE_OPTIONS, PURPOSE_OPTIONS, FOCUS_SECTORS } from "@/lib/site";

type Action = (prev: ListingFormState, formData: FormData) => Promise<ListingFormState>;

function Submit({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <button className="btn-submit" type="submit" disabled={pending}>
      {pending ? "Saving…" : label}
    </button>
  );
}

export function ListingForm({
  action,
  listing,
  submitLabel = "Save listing",
}: {
  action: Action;
  listing?: Listing;
  submitLabel?: string;
}) {
  const [state, formAction] = useActionState<ListingFormState, FormData>(action, {});

  return (
    <div className="form-card">
      <form className="form" action={formAction}>
        {listing ? <input type="hidden" name="id" value={listing.id} /> : null}

        <div className="f-field full">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            required
            defaultValue={listing?.title ?? ""}
            placeholder="3 BHK in Gulshan Ikebana, high floor"
          />
        </div>

        <div className="f-field">
          <label htmlFor="sector">Sector</label>
          <input
            id="sector"
            name="sector"
            type="text"
            required
            list="sector-options"
            defaultValue={listing?.sector ?? ""}
            placeholder="Sector 144"
          />
          <datalist id="sector-options">
            {FOCUS_SECTORS.map((n) => (
              <option key={n} value={`Sector ${n}`} />
            ))}
          </datalist>
        </div>

        <div className="f-field">
          <label htmlFor="propertyType">Property type</label>
          <select
            id="propertyType"
            name="propertyType"
            defaultValue={listing?.propertyType ?? "FLAT"}
          >
            {PROPERTY_TYPE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        <div className="f-field">
          <label htmlFor="purpose">Purpose</label>
          <select id="purpose" name="purpose" defaultValue={listing?.purpose ?? "SALE"}>
            {PURPOSE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        <div className="f-field">
          <label htmlFor="status">Status</label>
          <select id="status" name="status" defaultValue={listing?.status ?? "ACTIVE"}>
            <option value="ACTIVE">Active</option>
            <option value="CLOSED">Closed</option>
          </select>
        </div>

        <div className="f-field">
          <label htmlFor="price">Price (optional)</label>
          <input
            id="price"
            name="price"
            type="text"
            defaultValue={listing?.price ?? ""}
            placeholder="₹1.35 Cr  ·  ₹45,000 per month"
          />
        </div>

        <div className="f-field">
          <label htmlFor="size">Size (optional)</label>
          <input
            id="size"
            name="size"
            type="text"
            defaultValue={listing?.size ?? ""}
            placeholder="1,450 sq ft  ·  200 sq yd"
          />
        </div>

        <div className="f-field full">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows={6}
            required
            defaultValue={listing?.description ?? ""}
            placeholder="Plain sentences. What it is, what floor, what condition, what is nearby."
          />
        </div>

        <PhotoUploader initial={listing?.photos ?? []} />

        {state.error ? (
          <p className="form-error" role="alert">
            {state.error}
          </p>
        ) : null}

        <div className="form-actions">
          <Submit label={submitLabel} />
          <span className="form-note">The slug is generated from the title and sector.</span>
        </div>
      </form>
    </div>
  );
}
