import { EnquiryForm, type EnquiryFormProps } from "@/components/EnquiryForm";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { BUSINESS } from "@/lib/site";

type Props = EnquiryFormProps & {
  eyebrow?: string;
  heading?: string;
  blurb?: string;
};

/** The tinted enquiry band. Every page on the site ends with one of these. */
export function EnquirySection({
  eyebrow = "Start here",
  heading = "Tell us what you need.",
  blurb = "Buying, selling, renting or leasing — write two lines and we'll call you back. Or skip the form entirely and just ring.",
  ...formProps
}: Props) {
  return (
    <section className="enquiry" id="enquiry">
      <div className="wrap enq-grid">
        <div className="enq-left">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{heading}</h2>
          <p>{blurb}</p>
          <div className="enq-contact">
            <a href={BUSINESS.telHref}>{BUSINESS.phoneShort} — call</a>
            <a href={BUSINESS.whatsappHref} target="_blank" rel="noopener" className="foot-wa">
              <WhatsAppIcon size={15} />
              {BUSINESS.phoneShort} — WhatsApp
            </a>
          </div>
        </div>
        <EnquiryForm {...formProps} />
      </div>
    </section>
  );
}
