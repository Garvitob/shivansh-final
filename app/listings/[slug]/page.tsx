import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EnquirySection } from "@/components/EnquirySection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { RealEstateListingJsonLd } from "@/components/JsonLd";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { getListingBySlug, getAllActiveListingSlugs } from "@/lib/listings";
import { pageMeta } from "@/lib/seo";
import { BUSINESS, propertyTypeLabel, purposeLabel } from "@/lib/site";
import { SECTORS } from "@/lib/sectors";

export const revalidate = 300;

export async function generateStaticParams() {
  const rows = await getAllActiveListingSlugs();
  return rows.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const listing = await getListingBySlug(slug);
  if (!listing) return { title: "Listing not found", robots: { index: false, follow: false } };

  const summary = listing.description.replace(/\s+/g, " ").trim().slice(0, 140);
  return pageMeta({
    title: `${listing.title} — ${listing.sector}`.slice(0, 60),
    description: summary || `${propertyTypeLabel(listing.propertyType)} in ${listing.sector}, Noida.`,
    path: `/listings/${listing.slug}`,
  });
}

export default async function ListingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const listing = await getListingBySlug(slug);
  if (!listing || listing.status !== "ACTIVE") notFound();

  const sectorNumber = listing.sector.match(/\d+/)?.[0];
  const sectorPage = SECTORS.find((s) => s.num === sectorNumber);

  const facts = [
    { k: "Sector", v: listing.sector },
    { k: "Type", v: propertyTypeLabel(listing.propertyType) },
    { k: "Purpose", v: purposeLabel(listing.purpose) },
    ...(listing.price ? [{ k: "Price", v: listing.price }] : []),
    ...(listing.size ? [{ k: "Size", v: listing.size }] : []),
  ];

  return (
    <>
      <RealEstateListingJsonLd
        name={listing.title}
        description={listing.description}
        path={`/listings/${listing.slug}`}
        sector={listing.sector}
        photos={listing.photos}
        price={listing.price}
        size={listing.size}
        datePosted={listing.createdAt.toISOString()}
      />

      <div className="page-hero">
        <div className="wrap">
          <Breadcrumbs
            crumbs={[
              { name: "Listings", href: "/listings" },
              { name: listing.title, href: `/listings/${listing.slug}` },
            ]}
          />
          <p className="eyebrow" style={{ marginTop: 26 }}>
            {propertyTypeLabel(listing.propertyType)} · {purposeLabel(listing.purpose)} ·{" "}
            {listing.sector}
          </p>
          <h1>{listing.title}</h1>
          {listing.price ? (
            <div className="lede">
              <strong style={{ fontSize: 22 }}>{listing.price}</strong>
              {listing.size ? <span style={{ marginLeft: 12 }}>{listing.size}</span> : null}
            </div>
          ) : null}
          <div className="page-hero-actions">
            <a className="btn-solid" href={BUSINESS.telHref}>
              Call {BUSINESS.phoneShort}
            </a>
            <a className="btn-outline" href={BUSINESS.whatsappHref} target="_blank" rel="noopener">
              <WhatsAppIcon size={16} />
              WhatsApp about this
            </a>
            <Link className="btn-outline" href="#enquiry">
              Enquire about this property
            </Link>
          </div>
        </div>
      </div>

      <section>
        <div className="wrap ed-grid">
          <div className="ed-side">
            <p className="eyebrow">The details</p>
            <dl className="facts-table" style={{ marginTop: 20 }}>
              {facts.map((f) => (
                <div key={f.k}>
                  <dt>{f.k}</dt>
                  <dd>{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="ed-body">
            {listing.description
              .split(/\n{2,}/)
              .map((para) => para.trim())
              .filter(Boolean)
              .map((para, i) => (
                <p key={i}>{para}</p>
              ))}

            {listing.photos.length ? (
              <div className="gallery" style={{ marginTop: 34 }}>
                {listing.photos.map((url, i) => (
                  <figure key={url}>
                    <Image
                      src={url}
                      alt={`${listing.title}, ${listing.sector}, Noida — photo ${i + 1}`}
                      fill
                      sizes="(max-width: 700px) 100vw, 50vw"
                    />
                  </figure>
                ))}
              </div>
            ) : null}

            <p style={{ marginTop: 30 }}>
              <Link className="link-plain" href="/listings">
                Back to all listings
              </Link>
            </p>
          </div>
        </div>
      </section>

      <EnquirySection
        sourcePage={`/listings/${listing.slug}`}
        listingSlug={listing.slug}
        defaultSectorArea={listing.sector}
        defaultPropertyType={propertyTypeLabel(listing.propertyType)}
        defaultWant={listing.purpose === "SALE" ? "BUY" : listing.purpose === "RENT" ? "RENT" : "LEASE"}
        eyebrow="This property"
        heading="Enquire about this property."
        blurb="Leave your number and we will call you back with the full picture — what it really costs, what the paperwork looks like, and whether it is worth seeing."
        submitLabel="Send enquiry"
      />

      <RelatedLinks
        links={[
          { href: "/listings", label: "All current listings", note: "Everything live today" },
          ...(sectorPage
            ? [
                {
                  href: `/sectors/${sectorPage.slug}`,
                  label: `Property in ${sectorPage.name}`,
                  note: "How this sector works",
                },
              ]
            : []),
          { href: "/services/buy-property-noida", label: "Buying property in Noida", note: "How we work the buy side" },
          { href: "/guides/verify-property-documents-up", label: "Verifying property documents", note: "Before you pay anything" },
          { href: "/contact", label: "Contact us", note: "CM-52, Sector 144" },
        ]}
      />
    </>
  );
}
