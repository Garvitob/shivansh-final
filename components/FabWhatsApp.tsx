import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { BUSINESS } from "@/lib/site";

export function FabWhatsApp() {
  return (
    <a
      className="fab-wa"
      href={BUSINESS.whatsappHref}
      target="_blank"
      rel="noopener"
      aria-label="Message Shivansh Properties on WhatsApp"
    >
      <WhatsAppIcon size={26} />
    </a>
  );
}
