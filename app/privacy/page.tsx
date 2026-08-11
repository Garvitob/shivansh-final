import type { Metadata } from "next";

import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { pageMeta } from "@/lib/seo";
import { BUSINESS } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Privacy",
  description:
    "What Shivansh Properties does with the details you leave on this website, how long we keep them, and how to ask us to delete them.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="What we do with your details"
        lede={
          <p>
            Short version: if you leave your name and number, we use them to call you back about
            property. We do not sell them to anyone.
          </p>
        }
        crumbs={[{ name: "Privacy", href: "/privacy" }]}
      />

      <section>
        <div className="wrap ed-grid">
          <div className="ed-side">
            <p className="eyebrow">In plain words</p>
            <h2>No list selling, no surprises.</h2>
            <p>Ask us to delete your details and we will.</p>
          </div>

          <div className="ed-body">
            <h3>What we collect</h3>
            <p>
              When you fill in an enquiry form on this site we collect the name and phone number you
              type, along with what you told us you are looking for — the type of property, the
              sector or area, and any message you add. We also record which page you sent it from,
              so we know what you were reading when you got in touch.
            </p>
            <p>
              We do not ask for your email address, your identity documents or your financial
              details through this website. If a deal reaches the stage where documents are needed,
              that happens in person or through your lawyer, not through a web form.
            </p>

            <h3>Why we collect it</h3>
            <p>
              To ring you back about the property enquiry you made. That is the only reason. We are
              a property consultancy, not a marketing business.
            </p>

            <h3>Who sees it</h3>
            <p>
              The people who work at Shivansh Properties. Enquiries are stored in our own database
              and, where we have enabled it, forwarded by email to our own address. We do not sell,
              rent or share your details with other brokers, developers or lead-generation
              companies.
            </p>

            <h3>How long we keep it</h3>
            <p>
              Enquiries stay in our records while they are useful — a property search can run for
              months, and people often come back a year later. If you would rather we removed your
              details, ask and we will delete them.
            </p>

            <h3>Analytics</h3>
            <p>
              This site may use Google Analytics to understand which pages people find useful. That
              records general usage information rather than anything that identifies you personally,
              and it is not connected to your enquiry.
            </p>

            <h3>Photographs</h3>
            <p>
              The Noida photographs on this website are from Unsplash and are used under its
              licence. We credit the photographers in the captions. Listing photographs are of the
              properties themselves.
            </p>

            <h3>How to reach us about any of this</h3>
            <p>
              Call or WhatsApp{" "}
              <a href={BUSINESS.telHref} className="link-plain">
                {BUSINESS.phoneDisplay}
              </a>
              , or come to the office at {BUSINESS.addressOneLine}. Tell us what you want removed
              and we will remove it.
            </p>
          </div>
        </div>
      </section>

      <RelatedLinks
        links={[
          { href: "/contact", label: "Contact us", note: "CM-52, Sector 144" },
          { href: "/about", label: "About Shivansh Properties", note: "Family run since 2011" },
          { href: "/services", label: "Everything we handle", note: "Nine services" },
          { href: "/sectors", label: "All eleven focus sectors", note: "Where we work" },
        ]}
      />
    </>
  );
}
