import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EnquirySection } from "@/components/EnquirySection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { FaqBlock } from "@/components/FaqBlock";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { pageMeta } from "@/lib/seo";
import { BUSINESS } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Contact Shivansh Properties",
  description:
    "Call or WhatsApp +91 99115 59688, or come to the office at CM-52, Sector 144, Noida 201306. Property dealer on the Noida Expressway since 2011.",
  path: "/contact",
});

const FAQS = [
  {
    q: "What are the best ways to reach you?",
    a: "Call or WhatsApp +91 99115 59688. Both reach the same team. If you would rather write, leave your number in the form on this page and we will ring you back — most questions are quicker to settle in two minutes on a call.",
  },
  {
    q: "Can I come to the office without an appointment?",
    a: "Yes. The office is at CM-52, Sector 144, Noida, and people walk in. If you want to be sure someone is free to sit with you properly, ring first and we will tell you a good time.",
  },
  {
    q: "Do you speak Hindi and English?",
    a: "Both, whichever you prefer. Most conversations here happen in a mix of the two anyway, and nothing about a property deal should be harder to understand because of the language it is explained in.",
  },
  {
    q: "How quickly will you get back to me?",
    a: "If you leave a number through the form, we call back. If it is urgent, ring instead of writing — a phone call gets you an answer in minutes, and property questions are usually easier to sort out by talking.",
  },
];

export default function ContactPage() {
  return (
    <>
      <div className="page-hero">
        <div className="wrap">
          <Breadcrumbs crumbs={[{ name: "Contact", href: "/contact" }]} />
          <p className="eyebrow" style={{ marginTop: 26 }}>
            Contact
          </p>
          <h1>
            One office. <em>One number.</em>
          </h1>
          <div className="lede">
            <p>
              Ring us, message us on WhatsApp, or come to the office in Sector 144. Whichever you
              pick, you get the same people — we are not a call centre with a property department.
            </p>
          </div>
          <div className="page-hero-actions">
            <a className="btn-solid" href={BUSINESS.telHref}>
              Call {BUSINESS.phoneShort}
            </a>
            <a className="btn-outline" href={BUSINESS.whatsappHref} target="_blank" rel="noopener">
              <WhatsAppIcon size={16} />
              WhatsApp us
            </a>
            <a
              className="btn-outline"
              href={BUSINESS.mapsHref}
              target="_blank"
              rel="noopener"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>

      <section>
        <div className="wrap ed-grid">
          <div className="ed-side">
            <p className="eyebrow">Where we are</p>
            <h2>CM-52, Sector 144</h2>
            <p>Inside the sector, on the Noida–Greater Noida Expressway corridor.</p>
          </div>

          <div className="ed-body">
            <dl className="facts-table">
              <div>
                <dt>Address</dt>
                <dd>
                  <address style={{ fontStyle: "normal", lineHeight: 1.7 }}>
                    Shivansh Properties
                    <br />
                    CM-52, Sector 144
                    <br />
                    Noida, Uttar Pradesh 201306
                    <br />
                    India
                  </address>
                </dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href={BUSINESS.telHref} className="link-plain">
                    {BUSINESS.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt>WhatsApp</dt>
                <dd>
                  <a
                    href={BUSINESS.whatsappHref}
                    target="_blank"
                    rel="noopener"
                    className="link-plain foot-wa"
                  >
                    <WhatsAppIcon size={15} />
                    {BUSINESS.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt>Map</dt>
                <dd>
                  <a
                    href={BUSINESS.mapsHref}
                    target="_blank"
                    rel="noopener"
                    className="link-plain"
                  >
                    Shivansh Properties on Google Maps
                  </a>
                </dd>
              </div>
              <div>
                <dt>Since</dt>
                <dd>2011, family run</dd>
              </div>
            </dl>

            <p style={{ marginTop: 30 }}>
              Sector 144 has its own metro station on the Aqua Line, and the office sits inside the
              sector rather than on its edge. If you are driving down the Expressway, it is a short
              turn off the corridor.
            </p>
            <p>
              Walk-ins are fine. If you want someone free to sit with you for half an hour and go
              through numbers properly, ring first and we will tell you a good time.
            </p>
          </div>
        </div>
      </section>

      <EnquirySection
        sourcePage="/contact"
        eyebrow="Or write to us"
        heading="Leave your number."
        blurb="Two lines about what you need is enough. We will ring you back — most property questions are faster to settle in a conversation than in an email chain."
      />

      <FaqBlock faqs={FAQS} heading="Getting hold of us" eyebrow="Practical" />

      <RelatedLinks
        links={[
          { href: "/about", label: "About Shivansh Properties", note: "Family run since 2011" },
          { href: "/sectors/sector-144-noida", label: "Sector 144", note: "The sector we work from" },
          { href: "/services", label: "Everything we handle", note: "Nine kinds of work" },
          { href: "/listings", label: "Current listings", note: "What is live today" },
          { href: "/areas", label: "Areas we serve", note: "Noida, Greater Noida, YEIDA, NCR" },
        ]}
      />
    </>
  );
}
