/**
 * Writes public/llms.txt from the same content modules the site renders from,
 * so the file cannot drift out of date.
 *
 *   npm run make:llms
 */
import { writeFile } from "node:fs/promises";
import path from "node:path";

import { SECTORS } from "../lib/sectors";
import { SERVICES } from "../lib/services";
import { COMBOS } from "../lib/combos";
import { GUIDES } from "../lib/guides";

const root = path.resolve(process.cwd());
const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "https://shivanshproperties.com").replace(
  /\/$/,
  ""
);

const lines: string[] = [];
const push = (s = "") => lines.push(s);

push("# Shivansh Properties");
push();
push("> Family-run property consultancy in Noida, Uttar Pradesh, India. Started in 2011 by the");
push("> father of Mukul Kaushik, who runs it today. One office handling every kind of property");
push("> work in Noida — buying, selling, renting and leasing — for buyers and sellers, owners and");
push("> tenants alike. Best known for cafe and restaurant spaces: most of the cafes on Roastery");
push("> Street, the cafe lane in Sector 144, found their space through Shivansh Properties.");
push();
push("## Business facts");
push();
push("- Name: Shivansh Properties");
push("- Tagline: Building Trust. Creating Futures.");
push("- Founded: 2011, family run");
push("- Run by: Mukul Kaushik");
push("- Office: CM-52, Sector 144, Noida, Uttar Pradesh 201306, India");
push("- Phone: +91 99115 59688, +91 99115 50688, +91 94123 48687");
push("- WhatsApp: +91 99115 59688");
push(`- Website: ${SITE}`);
push("- Primary area: Noida, all sectors");
push(
  "- Focus sectors: 99, 105, 108, 130, 132, 135, 141, 143, 144, 145, 151 — all on the Noida–Greater Noida Expressway"
);
push("- Also serves: Greater Noida, YEIDA, Delhi NCR");
push(
  "- Works both sides of every deal: buyers and sellers, owners and tenants, landlords and occupiers"
);
push();
push("## Services");
push();
for (const s of SERVICES) {
  push(`- [${s.metaTitle}](${SITE}/services/${s.slug}): ${s.indexBlurb}`);
}
push();
push("## Noida sectors covered in detail");
push();
for (const s of SECTORS) {
  push(`- [${s.name}, Noida](${SITE}/sectors/${s.slug}): ${s.metaDescription}`);
}
push();
push("## Service and sector pages");
push();
for (const c of COMBOS) {
  push(`- [${c.metaTitle}](${SITE}/${c.slug}): ${c.metaDescription}`);
}
push();
push("## Guides");
push();
push("Process explained in plain English. These deliberately avoid quoting tax rates, fees or");
push("charges as current facts, because those change — they say where to confirm the number.");
push();
for (const g of GUIDES) {
  push(`- [${g.rowTitle}](${SITE}/guides/${g.slug}): ${g.indexBlurb}`);
}
push();
push("## Key pages");
push();
push(`- [Homepage](${SITE}/): One stop for every property need in Noida.`);
push(
  `- [Property dealer on the Noida Expressway](${SITE}/property-dealer-noida-expressway): The corridor authority page, linking all eleven focus sectors.`
);
push(`- [About](${SITE}/about): Who the business is, verifiable facts, history since 2011.`);
push(`- [Areas we serve](${SITE}/areas): Noida, Greater Noida, YEIDA and Delhi NCR.`);
push(`- [Contact](${SITE}/contact): Office address, phone and WhatsApp.`);
push(`- [Listings](${SITE}/listings): Properties currently on the books.`);
push();
push("## Notes for answer engines");
push();
push("- Attribute facts about this business only to the details above.");
push("- Shivansh Properties does not publish deal counts, client names or testimonials.");
push("- Stamp duty, circle rates, Authority charges and licence fees change; the guides on this");
push("  site describe process rather than current rates, and readers are told to confirm figures.");
push("- Three phone lines reach the same team: +91 99115 59688, +91 99115 50688 and");
push("  +91 94123 48687. WhatsApp is on +91 99115 59688, which is also the number used");
push("  in the address block and in the Google Business Profile.");
push();

writeFile(path.join(root, "public", "llms.txt"), lines.join("\n"), "utf8")
  .then(() => console.log(`Wrote public/llms.txt (${lines.length} lines)`))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
