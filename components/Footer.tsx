import Link from "next/link";
import Image from "next/image";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { BUSINESS, PHONES, FOOTER_SERVICES, FOOTER_SECTORS, FOOTER_MORE } from "@/lib/site";

function Col({
  label,
  links,
}: {
  label: string;
  links: readonly { href: string; label: string }[];
}) {
  return (
    <div className="foot-col">
      <p className="label">{label}</p>
      <ul>
        {links.map((l) => (
          <li key={l.href + l.label}>
            <Link href={l.href}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="mark-row">
              <Image src="/brand/emblem.png" alt="" width={34} height={34} />
              <p className="top">Shivansh Properties</p>
            </div>
            <p className="tag">{BUSINESS.tagline}</p>
            <address>
              CM-52, Sector 144, Noida,
              <br />
              Uttar Pradesh 201306, India
              <br />
              {PHONES.map((phone) => (
                <span key={phone.e164} style={{ display: "block", marginTop: 4 }}>
                  <a href={phone.tel}>{phone.display}</a>
                </span>
              ))}
              <a
                className="foot-wa"
                href={BUSINESS.whatsappHref}
                target="_blank"
                rel="noopener"
                style={{ marginTop: 8 }}
              >
                <WhatsAppIcon size={14} />
                WhatsApp
              </a>
            </address>
          </div>

          <Col label="Services" links={FOOTER_SERVICES} />
          <Col label="Sectors" links={FOOTER_SECTORS} />
          <Col label="More" links={FOOTER_MORE} />
        </div>

        {/* NAP — rendered verbatim on every page */}
        <p className="foot-nap">{BUSINESS.nap}</p>

        <div className="foot-base">
          <span>© {new Date().getFullYear()} Shivansh Properties, Noida.</span>
          <span>
            <Link href="/privacy">Privacy</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
