/**
 * Every fact the site is allowed to state about the business lives here.
 * Nothing about Shivansh Properties should be written anywhere else.
 */

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://shivanshproperties.com").replace(
  /\/$/,
  ""
);

export const BUSINESS = {
  name: "Shivansh Properties",
  legalName: "Shivansh Properties",
  tagline: "Building Trust. Creating Futures.",
  founded: "2011",
  runBy: "Mukul Kaushik",
  phoneDisplay: "+91 99115 59688",
  phoneShort: "99115 59688",
  phoneE164: "+919911559688",
  telHref: "tel:+919911559688",
  whatsappHref: "https://wa.me/919911559688",
  street: "CM-52, Sector 144",
  locality: "Noida",
  region: "Uttar Pradesh",
  postalCode: "201306",
  country: "IN",
  countryName: "India",
  addressOneLine: "CM-52, Sector 144, Noida, Uttar Pradesh 201306, India",
  /** Rendered verbatim in the footer of every page — NAP consistency. */
  nap: "Shivansh Properties · CM-52, Sector 144, Noida, Uttar Pradesh 201306, India · +91 99115 59688",
  geo: { lat: 28.4959, lng: 77.437 },
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Shivansh+Properties+CM-52+Sector+144+Noida",
} as const;

/** The eleven focus sectors, in the order they appear on the sector wall. */
export const FOCUS_SECTORS = [
  "99",
  "105",
  "108",
  "130",
  "132",
  "135",
  "141",
  "143",
  "144",
  "145",
  "151",
] as const;

export const AREAS_SERVED = [
  "Noida",
  "Greater Noida",
  "YEIDA",
  "Delhi NCR",
] as const;

export const MAIN_NAV = [
  { href: "/services", label: "Services" },
  { href: "/sectors", label: "Sectors" },
  { href: "/property-dealer-noida-expressway", label: "Expressway" },
  { href: "/listings", label: "Listings" },
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
] as const;

export const MOBILE_NAV = [
  ...MAIN_NAV,
  { href: "/areas", label: "Areas" },
  { href: "/contact", label: "Contact" },
] as const;

export const FOOTER_SERVICES = [
  { href: "/services/buy-property-noida", label: "Buying property" },
  { href: "/services/sell-property-noida", label: "Selling property" },
  { href: "/services/residential-renting-noida", label: "Residential renting" },
  { href: "/services/commercial-leasing-noida", label: "Commercial leasing" },
  { href: "/services/cafe-restaurant-spaces-noida", label: "Cafes & restaurants" },
  { href: "/services/pg-spaces-noida", label: "PG buildings" },
] as const;

export const FOOTER_SECTORS = [
  { href: "/sectors/sector-144-noida", label: "Sector 144 — home" },
  { href: "/sectors/sector-135-noida", label: "Sector 135" },
  { href: "/sectors/sector-105-noida", label: "Sector 105" },
  { href: "/sectors/sector-143-noida", label: "Sector 143" },
  { href: "/sectors/sector-151-noida", label: "Sector 151" },
  { href: "/sectors", label: "All eleven sectors" },
] as const;

export const FOOTER_MORE = [
  { href: "/property-dealer-noida-expressway", label: "Property dealer on the Expressway" },
  { href: "/areas", label: "Areas we serve" },
  { href: "/guides", label: "Property guides" },
  { href: "/listings", label: "Current listings" },
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact" },
] as const;

/** Options shared by the public enquiry form and the admin listing form. */
export const WANT_OPTIONS = [
  { value: "BUY", label: "Buy" },
  { value: "SELL", label: "Sell" },
  { value: "RENT", label: "Rent" },
  { value: "LEASE", label: "Lease" },
  { value: "OTHER", label: "Something else" },
] as const;

export const PROPERTY_TYPE_OPTIONS = [
  { value: "FLAT", label: "Flat" },
  { value: "KOTHI", label: "Kothi" },
  { value: "PLOT_LAND", label: "Plot / land" },
  { value: "OFFICE", label: "Office" },
  { value: "SHOP", label: "Shop" },
  { value: "CAFE_RESTAURANT", label: "Cafe / restaurant" },
  { value: "INDUSTRIAL", label: "Industrial" },
  { value: "PG", label: "PG building" },
  { value: "OTHER", label: "Other" },
] as const;

export const PURPOSE_OPTIONS = [
  { value: "SALE", label: "For sale" },
  { value: "RENT", label: "For rent" },
  { value: "LEASE", label: "For lease" },
] as const;

export function propertyTypeLabel(value: string): string {
  return PROPERTY_TYPE_OPTIONS.find((o) => o.value === value)?.label ?? "Property";
}

export function purposeLabel(value: string): string {
  return PURPOSE_OPTIONS.find((o) => o.value === value)?.label ?? "";
}
