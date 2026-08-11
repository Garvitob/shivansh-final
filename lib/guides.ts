import type { QaBlock, Faq, RelatedLink } from "@/lib/sectors";

export type Step = { h: string; p: string[] };

export type Guide = {
  slug: string;
  /** Row title on the guides index and the homepage. */
  rowTitle: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  lede: string;
  indexBlurb: string;
  published: string;
  updated: string;
  sideHeading: string;
  sideNote: string;
  intro: string[];
  stepsHeading: string;
  steps: Step[];
  qas: QaBlock[];
  faqs: Faq[];
  related: RelatedLink[];
};

/**
 * Rates, fees and percentages change. Nothing in these guides states one as a
 * current fact — they explain the process and say where to confirm the number.
 */
const PUBLISHED = "2026-08-11";

export const GUIDES: Guide[] = [
  /* ------------------------------------------------------------ stamp duty */
  {
    slug: "stamp-duty-registration-noida",
    rowTitle: "Stamp duty and registration in Noida — how it works",
    metaTitle: "Stamp Duty & Registration in Noida",
    metaDescription:
      "How stamp duty and registration actually work when you buy property in Noida — what the duty is charged on, what happens at the sub-registrar, and what to budget for.",
    eyebrow: "Guide · Buying",
    h1: "Stamp duty and registration in Noida",
    lede: "Two separate costs, one afternoon at the sub-registrar. Here is how the process runs and what decides the amount — without quoting a rate that will be out of date by the time you read it.",
    indexBlurb:
      "What the duty is charged on, what happens at the sub-registrar, and what to budget for.",
    published: PUBLISHED,
    updated: PUBLISHED,
    sideHeading: "Two costs, not one",
    sideNote: "Stamp duty is a tax on the document. The registration fee is for recording it.",
    intro: [
      "Almost every buyer we deal with underestimates this line in their budget, usually because they have added it to the property price in their head as a rounding error. It is not a rounding error. On a Noida purchase it is a substantial sum that has to be paid in full, in cash terms, at the point of registration — a bank will not usually fund it.",
      "There are two separate charges. Stamp duty is a state tax on the instrument of transfer itself. The registration fee is a separate charge for recording that instrument with the sub-registrar. They are calculated differently and both are payable before the deed is registered.",
      "The rates for both are set by the state and change from time to time, so we are deliberately not printing numbers here. Confirm the current rate before you finalise your budget — your lawyer, the sub-registrar's office, or we can tell you what applies on the day.",
      "What does not change is the basis of the calculation, and that is the part worth understanding properly.",
    ],
    stepsHeading: "How the process actually runs",
    steps: [
      {
        h: "Work out the value the duty is charged on",
        p: [
          "Stamp duty in Uttar Pradesh is charged on the higher of two numbers: the actual consideration in your sale deed, or the value of the property according to the circle rate for that location. Whichever is higher is the one that counts.",
          "This catches people out when the market has softened. If circle rates in a sector sit above what buyers are actually paying, you pay duty on the circle-rate figure even though you paid less. Find out the circle rate for the specific property before you agree a price, not after.",
        ],
      },
      {
        h: "Check what concessions apply to you",
        p: [
          "Uttar Pradesh has at various times offered concessions on stamp duty, including where the buyer is a woman or where the property is being transferred within a family. Whether one applies to you, and what it is worth, depends on the rules in force at the time you register.",
          "Ask specifically. A concession you qualify for and did not claim is money simply left behind, and nobody at the counter will volunteer it.",
        ],
      },
      {
        h: "Get the deed drafted",
        p: [
          "The sale deed sets out the parties, the property, the consideration and the terms. Have it drafted or at minimum reviewed by a property lawyer rather than using a generic format, because errors here are expensive to correct later.",
          "Check the property description against your title documents word for word. A mismatch between the deed and the earlier chain creates problems for the next sale, not this one.",
        ],
      },
      {
        h: "Pay the duty",
        p: [
          "Stamp duty is paid through the prescribed electronic route rather than by physically buying paper. Your lawyer or the registration office will tell you the current mechanism and generate the certificate that gets attached to the deed.",
          "Pay the correct amount. Under-stamping a document does not save money — it creates a defect that surfaces at the worst possible moment, usually when you try to sell.",
        ],
      },
      {
        h: "Attend the sub-registrar's office",
        p: [
          "Both the seller and the buyer attend, with witnesses and original identity documents. Photographs and biometrics are taken, the parties sign, and the sub-registrar registers the instrument.",
          "If a party cannot attend in person, a properly executed power of attorney can be used, but get the form of it confirmed in advance. Turning up with a POA the office will not accept wastes the appointment and everybody's day.",
        ],
      },
      {
        h: "Collect the registered deed, then apply for mutation",
        p: [
          "The registered deed comes back to you after processing. That document is the thing you keep safe permanently.",
          "Registration is not the last step. Apply for mutation so the property records are updated into your name. Skipping it is the single most common loose end we see, and it turns into a problem years later when you sell.",
        ],
      },
    ],
    qas: [
      {
        q: "What is stamp duty charged on in Noida?",
        answer:
          "On the higher of the consideration stated in your sale deed or the circle-rate value of the property. If the circle rate for that location works out above what you actually paid, the duty is calculated on the circle-rate figure regardless.",
        detail: [
          "This is why checking the circle rate for the specific property is part of budgeting, not paperwork. It sets a floor under your cost that has nothing to do with what you negotiated.",
        ],
      },
      {
        q: "Can stamp duty be paid with a home loan?",
        answer:
          "Generally no. Lenders fund the property purchase, and stamp duty and registration charges usually have to come from your own funds at the time of registration. Budget for them as cash you need available on the day, separately from your down payment.",
      },
    ],
    faqs: [
      {
        q: "What is the current stamp duty rate in Noida?",
        a: "Rates are set by the state and revised from time to time, so any figure printed on a website ages badly. Confirm the current rate with your lawyer or the sub-registrar's office before you finalise your budget. We can also tell you what applies on the day.",
      },
      {
        q: "Is registration compulsory?",
        a: "For a sale of immovable property, yes — an unregistered transfer does not give you what you think it gives you. Anyone suggesting you can skip it to save money is offering you a problem, not a saving.",
      },
      {
        q: "What documents do I need at the sub-registrar?",
        a: "Broadly the drafted deed, proof that stamp duty has been paid, identity and address proof for both parties and the witnesses, the property's title documents, and any Authority or society paperwork that applies. Your lawyer will confirm the full list for your specific property.",
      },
      {
        q: "What happens if I under-declare the sale value?",
        a: "You create a defect in your own title and expose yourself to consequences later, while saving less than you think, because duty is charged on the circle-rate value anyway when that is higher. It is a bad trade in every direction.",
      },
      {
        q: "Do I need to do anything after registration?",
        a: "Yes — apply for mutation so the property records show you as the owner. Registration transfers the property; mutation updates the records. Leaving mutation undone is the most common loose end we find when people come to sell years later.",
      },
    ],
    related: [
      { href: "/services/buy-property-noida", label: "Buying property in Noida", note: "The service this guide belongs to" },
      { href: "/guides/circle-rates-noida", label: "Circle rates in Noida", note: "The number the duty is based on" },
      { href: "/guides/verify-property-documents-up", label: "Verifying property documents in UP", note: "Do this before you get here" },
      { href: "/guides/selling-property-noida-process", label: "Selling in Noida — the full process", note: "The other side of the counter" },
    ],
  },

  /* ------------------------------------------------------------ documents */
  {
    slug: "verify-property-documents-up",
    rowTitle: "How to verify property documents in UP before buying",
    metaTitle: "Verify Property Documents in UP",
    metaDescription:
      "The document checks to make before you pay for property in Uttar Pradesh — title chain, mutation, Authority dues, society NOC, and the boundary on the ground.",
    eyebrow: "Guide · Buying",
    h1: "Verifying property documents in UP",
    lede: "Almost every property problem we have seen was visible in the papers before the money moved. This is the checklist, in the order we work through it.",
    indexBlurb: "Title chain, mutation, dues, approvals — the checks to make before money moves.",
    published: PUBLISHED,
    updated: PUBLISHED,
    sideHeading: "Check before you pay",
    sideNote: "A token paid on an unclear title is very hard to get back.",
    intro: [
      "There is a moment in most purchases where a buyer is asked to pay a token to hold the property. It usually comes with some pressure — another buyer is interested, the seller needs to decide today. That is exactly the moment to slow down, because a token paid against an unclear title is difficult to recover and impossible to argue about afterwards.",
      "None of the checks below are exotic. They are the ordinary work, and they get skipped because a buyer is enthusiastic and a seller is in a hurry. Do them in order and most problems surface early, when walking away is still cheap.",
      "For anything other than a straightforward resale flat, use a property lawyer to run the search. It is a small cost against the size of the transaction, and a good one will find things a buyer will not.",
    ],
    stepsHeading: "The checks, in order",
    steps: [
      {
        h: "The title deed and the chain behind it",
        p: [
          "Start with the current title document, then work backwards through the earlier transfers. You are looking for a chain that runs continuously from one owner to the next with nothing unexplained in between.",
          "Gaps matter. So does a transfer that happened through an unusual route — an inheritance without proper documentation, a power of attorney sale, a partition that was never formalised. Any of those need explaining before you go further.",
        ],
      },
      {
        h: "A search at the sub-registrar",
        p: [
          "A search of the registration records shows what has been registered against the property, including any registered mortgage or charge. This is the standard way to find encumbrances you were not told about.",
          "Have this done by a lawyer, and have it cover a meaningful period rather than the last transaction only.",
        ],
      },
      {
        h: "Mutation records",
        p: [
          "Mutation is the updating of the property records into the current owner's name. If the seller's name does not appear in the records, ask why. Sometimes it is simple laziness after a purchase; sometimes it is a sign the transfer was never completed properly.",
          "For agricultural or abadi land, look at the khasra and khatauni records as well. On abadi plots in particular, this is where the real story is.",
        ],
      },
      {
        h: "Authority papers and no-dues",
        p: [
          "Much of Noida sits on land allotted by the Noida Authority, which brings its own paperwork: the allotment letter, the lease deed, any transfer memorandum from earlier transfers, and confirmation that nothing is outstanding to the Authority.",
          "Outstanding Authority dues follow the property, not the person who ran them up. Get written confirmation rather than an assurance.",
        ],
      },
      {
        h: "Society or builder documentation",
        p: [
          "For a flat, you want the society's no-objection certificate, confirmation that maintenance dues are clear, and the share certificate or equivalent where one applies.",
          "Ask what the maintenance charge actually is and whether any special levy is coming. A sinking fund that has been neglected becomes your problem the month after you move in.",
        ],
      },
      {
        h: "Approvals for what is actually built",
        p: [
          "Check the sanctioned building plan and whether the structure matches it. Unauthorised additions are common and they are the buyer's problem once the deed is signed.",
          "Where they apply, look for the completion and occupancy documentation for the building.",
        ],
      },
      {
        h: "Dues, taxes and utilities",
        p: [
          "Property tax receipts, electricity and water accounts, and any pending bills. These are small amounts individually and they are also a useful signal — an owner who has let all of them lapse has usually let other things lapse too.",
        ],
      },
      {
        h: "The seller, and who else has a claim",
        p: [
          "Confirm the seller's identity and that they are entitled to sell. Where the property came through inheritance, establish who the legal heirs are and that all of them are on board.",
          "If someone is signing under a power of attorney, check that the POA is valid, current, and actually covers a sale. A POA that has been revoked or that only covers management is not a sale authority.",
        ],
      },
      {
        h: "Go and stand on the property",
        p: [
          "Walk the boundary and compare it against the boundary in the papers. On plots this single step catches more problems than any other — encroachments, a plot that is smaller on the ground than on paper, an access route that does not exist.",
          "Also confirm who is actually in possession. Paper ownership and physical possession are two different things and both need to be right.",
        ],
      },
    ],
    qas: [
      {
        q: "What is the most important document check when buying property in UP?",
        answer:
          "The chain of title — the unbroken sequence of transfers showing how ownership reached the current seller. Everything else confirms detail; this establishes whether the seller can sell at all. Any gap or unexplained transfer in that chain needs resolving before money moves.",
        detail: [
          "On plots and abadi land, run the boundary check on the ground alongside it. Title and physical reality diverge more often than buyers expect.",
        ],
      },
      {
        q: "Do I need a lawyer to buy property in Noida?",
        answer:
          "For anything beyond a straightforward resale flat with clean papers, yes. A property lawyer runs the registration search, reads the chain properly and drafts the deed. Against the value of the transaction the fee is small, and the things they catch are not.",
      },
    ],
    faqs: [
      {
        q: "What is mutation and why does it matter?",
        a: "Mutation is the updating of property records into the current owner's name after a transfer. If the seller's name is missing from the records, find out why before proceeding — it can be simple neglect, or a sign the earlier transfer was never completed properly.",
      },
      {
        q: "Are abadi plots riskier to buy?",
        a: "The land is not riskier; the paperwork often is. Abadi plots sit in older inhabited village areas rather than Authority-allotted land, and ownership chains are frequently less tidy. They are perfectly sound purchases once the chain and boundary check out properly.",
      },
      {
        q: "Can I rely on the seller's word that dues are clear?",
        a: "No. Get written confirmation, particularly for Authority dues and society maintenance, because outstanding amounts attach to the property rather than to the person who ran them up. You will be the one asked to pay them.",
      },
      {
        q: "What if the seller is selling through a power of attorney?",
        a: "Check that the power of attorney is valid, still in force, and actually authorises a sale rather than only management. Also satisfy yourself about why the owner is not signing personally. This is a legitimate arrangement that is also sometimes misused.",
      },
      {
        q: "How long do these checks take?",
        a: "For a clean resale flat, days rather than weeks. For plots, inherited property or anything with an unusual transfer in the chain, longer — and that time is well spent. Deals that collapse late usually do so because nobody looked early.",
      },
    ],
    related: [
      { href: "/services/buy-property-noida", label: "Buying property in Noida", note: "The service this guide belongs to" },
      { href: "/guides/leasehold-freehold-noida-authority-transfer", label: "Leasehold, freehold and Authority transfer", note: "Why Noida has an extra step" },
      { href: "/guides/stamp-duty-registration-noida", label: "Stamp duty and registration", note: "What happens after the checks" },
      { href: "/plots-sector-145-noida", label: "Plots in Sector 145", note: "Where these checks matter most" },
    ],
  },

  /* -------------------------------------------------------------- selling */
  {
    slug: "selling-property-noida-process",
    rowTitle: "Selling your property in Noida — the full process",
    metaTitle: "Selling Property in Noida: Process",
    metaDescription:
      "The full process of selling a flat, kothi or plot in Noida — pricing, paperwork, finding a real buyer, clearing dues and getting through registration.",
    eyebrow: "Guide · Selling",
    h1: "Selling property in Noida, start to finish",
    lede: "Most sellers lose money in the first month, not the last. Here is the whole sequence, and where the money actually leaks out of it.",
    indexBlurb: "Pricing, paperwork, real buyers, dues, registration — the whole sequence.",
    published: PUBLISHED,
    updated: PUBLISHED,
    sideHeading: "Price first, everything else after",
    sideNote: "An over-priced property does not sit still. It goes stale, then sells for less.",
    intro: [
      "Selling property is mostly a sequencing problem. Do things in the right order and it is straightforward. Do them in the wrong order — market first, sort papers later — and you end up renegotiating with a buyer who has discovered a problem you should have found yourself.",
      "The single biggest determinant of what you get is the price you start at. Start too high and the property goes stale. Buyers watch it sit, then watch it drop, then wait for a third drop. By month three you are negotiating from weakness against people who have seen the whole history.",
      "Below is the order we work in.",
    ],
    stepsHeading: "The sequence",
    steps: [
      {
        h: "Find out what it is actually worth",
        p: [
          "Not the portal estimate, not what your neighbour says they were offered. What comparable properties in the same block, society or belt have recently registered at, adjusted for floor, facing, size and condition.",
          "Ask for two numbers: what it fetches if you want to move quickly, and what it fetches if you can wait. Those are genuinely different, and you should pick between them deliberately rather than drift into the second by accident.",
        ],
      },
      {
        h: "Get your papers together before you market it",
        p: [
          "Title documents and the chain behind them, Authority or society paperwork, proof that dues are clear, tax receipts, and anything relating to a loan against the property.",
          "If there is a mortgage, find out now what the lender needs for release and how long it takes. This is the most common cause of a sale slipping at the end.",
          "If mutation was never done in your name after you bought, sort it now. It will surface later.",
        ],
      },
      {
        h: "Spend a little on presentation",
        p: [
          "Deep clean, working bulbs in every room, taps that do not drip, patched paint where it is obviously damaged. Photographs in daylight, not at nine at night.",
          "Skip the expensive renovation. Buyers rarely pay back a new kitchen. The goal is a property that looks cared for, because that reads as a property where nothing has been neglected.",
        ],
      },
      {
        h: "Show it to buyers who are actually ready",
        p: [
          "There is a difference between a property being visible to everyone and being seen by the four people currently looking in your sector at your price. The second sells it.",
          "Decide deliberately whether to use one dealer or several. Several can work, but if four brokers quote your flat at four different prices, buyers notice and it weakens you. At minimum, agree one price with all of them.",
        ],
      },
      {
        h: "Agreement to sell and token",
        p: [
          "When a buyer commits, an agreement to sell records the price, the timeline and the conditions, and a token is paid. Get this in writing with clear dates, including what happens if either side does not perform.",
          "Be reasonable about the buyer's loan timeline but put an outer date on it. Open-ended agreements let a hesitant buyer hold your property off the market for months.",
        ],
      },
      {
        h: "Clear the dues and collect the NOCs",
        p: [
          "Society maintenance cleared and an NOC obtained, Authority dues settled, utility accounts squared, and any lender release under way.",
          "Do this in parallel with the buyer's loan process rather than after it. Running them in sequence adds weeks for no reason.",
        ],
      },
      {
        h: "Registration and handover",
        p: [
          "Both parties attend the sub-registrar with witnesses and identity documents. The deed is registered, the balance is paid, and you hand over possession and the keys.",
          "Hand over the original documents you are meant to hand over, keep copies of everything, and take meter readings on the day. Then let the buyer get on with their mutation.",
        ],
      },
    ],
    qas: [
      {
        q: "How do I price my property to sell in Noida?",
        answer:
          "Against what comparable properties nearby have actually registered at, not against asking prices. Then decide whether you want the faster number or the higher one — they are different, and choosing deliberately beats starting high and discounting your way down over three months.",
        detail: [
          "Sector matters for timing. A society flat in a deep market like 143 clears faster than a plot in a quieter sector, so the same pricing strategy produces different waiting times.",
        ],
      },
      {
        q: "What delays a property sale in Noida most often?",
        answer:
          "Paperwork that was not ready when marketing started — an unreleased mortgage, unpaid Authority dues, or mutation never done after the seller's own purchase. Buyer loan processing adds time too, but that is predictable. The paperwork surprises are what actually kill deals.",
      },
    ],
    faqs: [
      {
        q: "Should I sell before or after doing repairs?",
        a: "Do the cheap, visible things first — clean, paint where damaged, fix what is broken. Skip major renovation, which rarely pays back. A property that looks maintained signals to a buyer that nothing structural has been neglected either.",
      },
      {
        q: "How long does it take to sell property in Noida?",
        a: "A correctly priced property in an active sector usually finds a serious buyer within weeks, then a few more weeks to registration if the papers are ready. Over-priced properties can take months and often sell for less than they would have at the start.",
      },
      {
        q: "Can I sell a property that still has a home loan on it?",
        a: "Yes, and it is common. The lender's release has to be coordinated with the sale, so find out early exactly what your lender requires and how long they take. Leaving this to the end is the most frequent reason a sale slips.",
      },
      {
        q: "Do I need to be present for registration?",
        a: "You or someone holding a valid power of attorney that authorises the sale. If you are abroad or unable to attend, arrange and confirm the form of the POA well in advance rather than in the final week.",
      },
      {
        q: "What if the buyer tries to reduce the price at the last minute?",
        a: "It usually happens where the price was soft to begin with or something turned up in the papers. Both are avoidable — price against real comparables and get your documents checked before marketing, and there is no fresh excuse to reopen the number.",
      },
    ],
    related: [
      { href: "/services/sell-property-noida", label: "Selling property in Noida", note: "The service this guide belongs to" },
      { href: "/guides/circle-rates-noida", label: "Circle rates in Noida", note: "The floor under your sale" },
      { href: "/guides/stamp-duty-registration-noida", label: "Stamp duty and registration", note: "What happens at the counter" },
      { href: "/guides/leasehold-freehold-noida-authority-transfer", label: "Leasehold, freehold and Authority transfer", note: "The extra step in Noida" },
    ],
  },

  /* --------------------------------------------------------- circle rates */
  {
    slug: "circle-rates-noida",
    rowTitle: "Circle rates in Noida — what they are and why they matter",
    metaTitle: "Circle Rates in Noida Explained",
    metaDescription:
      "What a circle rate is, how it sets the minimum value for stamp duty in Noida, why it varies within a sector, and what to do when it sits above market price.",
    eyebrow: "Guide · Buying & selling",
    h1: "Circle rates in Noida",
    lede: "The circle rate is the government's minimum value for a property. It decides your stamp duty even when it has nothing to do with what you paid.",
    indexBlurb: "The government's minimum value — and why it can cost you more than you expect.",
    published: PUBLISHED,
    updated: PUBLISHED,
    sideHeading: "A floor, not a valuation",
    sideNote: "It is not what the property is worth. It is the least the state will assume it is worth.",
    intro: [
      "A circle rate is the minimum value the government assigns to property in a particular location for the purpose of calculating stamp duty. It is set by the district administration and revised from time to time. It is not a valuation of your specific property and it is not a market price — it is a floor.",
      "The reason it matters to you is arithmetic. Stamp duty is charged on the higher of the actual consideration in your deed or the circle-rate value of the property. So if the circle rate for a location is above what you are paying, you pay duty on the circle-rate figure anyway.",
      "That produces the situation buyers find most annoying: negotiating hard, getting a genuinely good price, and then paying duty as though you had not.",
    ],
    stepsHeading: "What actually affects the number",
    steps: [
      {
        h: "Location, at a finer grain than you expect",
        p: [
          "Circle rates are not set per sector as a single figure. They vary within a sector by locality and often by the width of the road a property faces — a plot on a wide main road can carry a different rate from one on a narrow internal lane in the same block.",
          "So the rate that applies to your property is a specific lookup, not a sector-level guess.",
        ],
      },
      {
        h: "The type of property",
        p: [
          "Land, built house, apartment and commercial space are treated differently. Built-up property typically has a construction component added to the land component, and that construction value varies with the type and age of the structure.",
        ],
      },
      {
        h: "Floor and building factors, for apartments",
        p: [
          "For flats the calculation generally works off the built-up or super area with adjustments applied. Multi-storey buildings with lifts can be treated differently from low-rise ones.",
        ],
      },
      {
        h: "When it was last revised",
        p: [
          "Circle rates are revised periodically, and revisions do not always track the market closely in either direction. After a long gap they can sit well below market, or in a sector where prices have softened they can sit above it.",
          "Always check the current position rather than working from a figure someone quoted you last year.",
        ],
      },
    ],
    qas: [
      {
        q: "What happens if the circle rate is higher than the price I am paying?",
        answer:
          "You pay stamp duty calculated on the circle-rate value rather than on what you actually paid. The lower purchase price still saves you the difference in the price itself, but it does not reduce your duty. Factor this into the budget before agreeing terms.",
        detail: [
          "There can also be income tax implications where a property transfers significantly below the circle-rate value, for the buyer and the seller. If your deal is well below the circle rate, ask your accountant about it rather than discovering it at filing time.",
        ],
      },
      {
        q: "Is the circle rate the same as the market rate?",
        answer:
          "No. The circle rate is a government minimum for duty purposes; the market rate is what buyers are actually paying. They can diverge in either direction, sometimes substantially, depending on how recently rates were revised and what the market has done since.",
      },
    ],
    faqs: [
      {
        q: "Where do I find the circle rate for a specific property in Noida?",
        a: "Circle rates are published by the district administration and are looked up by locality and property type. Your lawyer or the registration office can confirm the exact rate that applies. We can also tell you for a specific address.",
      },
      {
        q: "Do circle rates change often?",
        a: "They are revised from time to time rather than on a fixed schedule, and revisions can be significant when they come after a long gap. Never budget from a figure someone quoted you a year ago — check the current one.",
      },
      {
        q: "Can I register a property below the circle rate?",
        a: "You can state a lower consideration, but stamp duty will still be computed on the circle-rate value, and a large gap can raise tax questions for both parties. It rarely achieves what people hope it will.",
      },
      {
        q: "Why is the circle rate different on two plots in the same sector?",
        a: "Because rates vary within a sector by locality and commonly by road width. A plot facing a wide main road can carry a different rate from one on a narrow internal lane a hundred metres away. It is a property-level lookup, not a sector-level one.",
      },
    ],
    related: [
      { href: "/guides/stamp-duty-registration-noida", label: "Stamp duty and registration", note: "Where the circle rate is used" },
      { href: "/services/buy-property-noida", label: "Buying property in Noida", note: "The service this guide belongs to" },
      { href: "/services/sell-property-noida", label: "Selling property in Noida", note: "Why sellers care about it too" },
      { href: "/sectors", label: "All eleven focus sectors", note: "Rates differ across each" },
    ],
  },

  /* ------------------------------------------------------- leasehold etc. */
  {
    slug: "leasehold-freehold-noida-authority-transfer",
    rowTitle: "Leasehold, freehold and Noida Authority transfer",
    metaTitle: "Leasehold, Freehold & UP Transfer",
    metaDescription:
      "Why much of Noida is leasehold, what that means when you buy or sell, and how Noida Authority transfer permission fits into the timeline of a deal.",
    eyebrow: "Guide · Ownership",
    h1: "Leasehold, freehold and Authority transfer",
    lede: "Noida has an extra step that most Indian property markets do not. Understanding it early is the difference between a smooth deal and one that stalls for weeks.",
    indexBlurb: "Why Noida has an extra step in every deal, and how to plan the timeline around it.",
    published: PUBLISHED,
    updated: PUBLISHED,
    sideHeading: "The extra step",
    sideNote: "On leasehold property, the Authority is a party to your timeline whether you like it or not.",
    intro: [
      "A large amount of property in Noida sits on land allotted by the Noida Authority on a long lease rather than held freehold. That is a normal and perfectly sound way to own property here — but it changes the mechanics of transferring it.",
      "In simple terms: with freehold property, ownership passes between seller and buyer. With leasehold property, the Authority's permission and paperwork form part of the transfer. That is an additional party, an additional set of requirements, and additional time.",
      "None of this is a problem if you plan for it. It becomes a problem when a buyer and seller agree a four-week timeline that never had a chance of working.",
    ],
    stepsHeading: "What the difference means in practice",
    steps: [
      {
        h: "Find out which one you are dealing with",
        p: [
          "The first question on any Noida property is whether it is leasehold or freehold, and the answer is in the documents rather than in what anyone tells you. Look for the allotment letter and the lease deed.",
          "Do this at the start. It determines the entire shape of the transaction.",
        ],
      },
      {
        h: "On leasehold, expect Authority involvement",
        p: [
          "Transfers of leasehold property typically require the Authority's permission and the issue of transfer documentation, along with confirmation that nothing is outstanding on the property.",
          "There are charges associated with this, and both the charges and the procedure are set by the Authority and can change. Confirm the current requirements and costs rather than relying on what applied to a friend's deal two years ago.",
        ],
      },
      {
        h: "Clear the dues first, not last",
        p: [
          "Outstanding amounts to the Authority attach to the property. Any transfer will require them settled, and they are frequently larger than the seller remembers.",
          "Get a written position on dues early. This single step removes the most common cause of a leasehold deal stalling in its final fortnight.",
        ],
      },
      {
        h: "Understand freehold conversion, if it is relevant",
        p: [
          "Converting leasehold property to freehold has been available for certain categories of property in Noida, through an application to the Authority and payment of the applicable charges. Availability, eligibility and cost are set by policy and change over time.",
          "If it matters to your purchase, check the current position with the Authority directly before you assume it can be done.",
        ],
      },
      {
        h: "Build the timeline around it",
        p: [
          "The practical consequence of all this is scheduling. A leasehold transfer has a step in it that neither the buyer nor the seller controls, so agreements should have realistic outer dates rather than optimistic ones.",
          "Where a buyer's loan disbursement is also involved, sequence the two deliberately. Running them in parallel where possible saves weeks.",
        ],
      },
    ],
    qas: [
      {
        q: "Is leasehold property in Noida safe to buy?",
        answer:
          "Yes. Long-lease Authority property is a normal and widely held form of ownership in Noida, and it is bought and sold routinely. What it adds is process rather than risk — the Authority's permission and paperwork form part of the transfer, so the timeline is longer.",
        detail: [
          "The practical difference for a buyer is mostly administrative. Where it does matter is in planning: agree dates that account for the Authority step rather than dates that assume a simple two-party transfer.",
        ],
      },
      {
        q: "Should I convert my leasehold property to freehold?",
        answer:
          "It depends on eligibility, the current charges, and whether you plan to sell. Conversion has been available for certain property categories through the Authority, but the policy and cost change. Get the current position before deciding — it is not a permanent, fixed answer.",
      },
    ],
    faqs: [
      {
        q: "How do I know if a Noida property is leasehold or freehold?",
        a: "The documents tell you. Look for the allotment letter and lease deed from the Authority, which indicate leasehold. This is the first thing to establish on any Noida property because it shapes the whole transaction timeline.",
      },
      {
        q: "What are Authority transfer charges?",
        a: "Charges levied by the Noida Authority in connection with transferring leasehold property. The amounts and the procedure are set by the Authority and revised from time to time, so confirm the current position rather than working from an older figure.",
      },
      {
        q: "Who pays the transfer charges, buyer or seller?",
        a: "It is a matter of negotiation and should be settled in the agreement rather than assumed. Whoever pays, agree it in writing at the start — this is a common source of argument late in a deal when neither side wrote it down.",
      },
      {
        q: "Does leasehold affect a home loan?",
        a: "Lenders do fund leasehold property in Noida routinely, but their documentation requirements differ from freehold. Tell your lender the position early so their process and the Authority process can run alongside each other rather than one after the other.",
      },
    ],
    related: [
      { href: "/guides/verify-property-documents-up", label: "Verifying property documents in UP", note: "Where you find the answer" },
      { href: "/services/buy-property-noida", label: "Buying property in Noida", note: "The service this guide belongs to" },
      { href: "/services/sell-property-noida", label: "Selling property in Noida", note: "Plan the timeline early" },
      { href: "/kothi-plots-sector-108-noida", label: "Kothis and plots in Sector 108", note: "Where this comes up often" },
    ],
  },

  /* ------------------------------------------------------ commercial lease */
  {
    slug: "commercial-lease-basics",
    rowTitle: "Commercial lease basics — the terms worth arguing about",
    metaTitle: "Commercial Lease Basics in Noida",
    metaDescription:
      "The terms that decide what a commercial lease in Noida really costs — maintenance, escalation, lock-in, fit-out period, deposit and the use clause.",
    eyebrow: "Guide · Commercial",
    h1: "Commercial lease basics",
    lede: "The headline rent is the number everyone negotiates and rarely the one that decides what you pay. These are the terms that actually move money.",
    indexBlurb: "Maintenance, escalation, lock-in, fit-out, deposit — where the money really is.",
    published: PUBLISHED,
    updated: PUBLISHED,
    sideHeading: "Negotiate the whole package",
    sideNote: "Landlords defend headline rent because it benchmarks the building. Everything else is softer.",
    intro: [
      "When a company takes its first commercial space in Noida, almost all of the negotiating energy goes into the rent per square foot. That is understandable and it is also where the least give usually is, because a landlord who cuts headline rent for you has set a benchmark for every other tenant in the building.",
      "The terms around the rent are where deals are actually won. Below is what to look at, roughly in order of how much money it moves over a typical lease.",
      "This is a plain-language overview rather than legal advice. Have the lease reviewed by a lawyer before signing — the cost of that is trivial next to a five year commitment.",
    ],
    stepsHeading: "The terms that matter",
    steps: [
      {
        h: "What the quoted rate excludes",
        p: [
          "Maintenance or common area charges are frequently quoted separately from rent, and the gap between the number you were told and the amount leaving your account can be substantial.",
          "Ask for the all-in figure per square foot per month, then compare buildings on that. Also ask what maintenance actually covers — air conditioning hours, power backup, security, and what happens outside standard hours.",
        ],
      },
      {
        h: "Escalation",
        p: [
          "Commercial leases usually build in a periodic increase. The size and frequency of that increase compounds over the term and can matter more than the starting rate.",
          "Model it out over the full term before agreeing. A slightly higher starting rent with a gentler escalation is often cheaper overall than the reverse.",
        ],
      },
      {
        h: "Term, lock-in and notice",
        p: [
          "The term is how long the lease runs. The lock-in is the period during which you cannot walk away without paying anyway. The notice period is how much warning either side must give.",
          "Match the lock-in to your own plans honestly. A lock-in that suits the landlord perfectly is expensive for a company that outgrows the floor in year two.",
        ],
      },
      {
        h: "Security deposit",
        p: [
          "Commercial deposits are typically expressed as a number of months' rent and can be significant working capital. Negotiate both the amount and the terms for its return.",
          "Get the return conditions written specifically — what deductions are permitted, and by when it must be repaid after you vacate.",
        ],
      },
      {
        h: "Fit-out period and rent-free time",
        p: [
          "You cannot trade while you are building. A rent-free fit-out window is often the most negotiable term in the whole lease, and for a fit-out heavy business like a restaurant it is worth a great deal.",
          "Ask for more than you think you need. Fit-outs overrun.",
        ],
      },
      {
        h: "The use clause",
        p: [
          "The lease will specify what the premises may be used for. Make sure it covers what you actually intend to do, including anything you might add later.",
          "This matters enormously for food service, where the permitted use plus the building's own rules determine whether you can operate at all.",
        ],
      },
      {
        h: "Repairs, alterations and what happens at the end",
        p: [
          "Establish who is responsible for what during the term, whether you need consent for alterations, and what condition you must return the premises in.",
          "A requirement to strip out your fit-out and reinstate the space at the end is a real cost that people forget to price when they sign.",
        ],
      },
      {
        h: "Registration",
        p: [
          "Leases beyond a short duration generally need to be registered, and registration carries stamp duty of its own. Confirm the current requirement and cost for your lease length rather than assuming.",
        ],
      },
    ],
    qas: [
      {
        q: "What is the most negotiable term in a commercial lease?",
        answer:
          "Usually the rent-free fit-out period, followed by the deposit and the escalation. Landlords defend headline rent hardest because it sets a benchmark for the rest of the building, so pushing there yields least. Push on the terms around it instead.",
        detail: [
          "For fit-out heavy uses like restaurants and clinics, an extra month of rent-free time can be worth more than a small reduction in the rate.",
        ],
      },
      {
        q: "Does the quoted rent include maintenance?",
        answer:
          "Often not. Maintenance or common area charges are commonly quoted separately, and they can change the real monthly cost materially. Always ask for the all-in figure per square foot and compare competing buildings on that number rather than the headline rate.",
      },
    ],
    faqs: [
      {
        q: "What is a lock-in period?",
        a: "The period during which you are committed to the lease and cannot exit without paying for the remainder of it. Match it to your own plans — a long lock-in is fine for a settled operation and expensive for a business that might outgrow the space.",
      },
      {
        q: "How much security deposit is normal for commercial space?",
        a: "It is usually expressed as a number of months' rent and varies with the building and the size of the space. Both the amount and the return conditions are negotiable, and the return conditions matter as much as the number.",
      },
      {
        q: "Do commercial leases need to be registered?",
        a: "Leases beyond a short duration generally do, and registration attracts stamp duty. Confirm the current requirement for your lease length with your lawyer, since the rules and the cost are not something to assume from an older deal.",
      },
      {
        q: "Can I sublet or assign a commercial lease?",
        a: "Only if the lease permits it, and most require the landlord's consent. If there is any chance you will want to move on, restructure or bring in a group company, negotiate that flexibility at the start rather than asking for it later.",
      },
      {
        q: "What should I check about the use clause?",
        a: "That it covers exactly what you intend to do and anything you might add later. For food service in particular, the permitted use plus the building's own rules decide whether you can operate at all, so confirm before signing anything.",
      },
    ],
    related: [
      { href: "/services/commercial-leasing-noida", label: "Commercial leasing in Noida", note: "The service this guide belongs to" },
      { href: "/office-space-sector-135-noida", label: "Office space in Sector 135", note: "The IT-park belt" },
      { href: "/office-space-sector-132-noida", label: "Office space in Sector 132", note: "Corporate towers" },
      { href: "/guides/open-cafe-restaurant-noida", label: "Opening a cafe in Noida", note: "Where fit-out terms matter most" },
    ],
  },

  /* ------------------------------------------------------------ open cafe */
  {
    slug: "open-cafe-restaurant-noida",
    rowTitle: "Opening a cafe or restaurant in Noida",
    metaTitle: "How to Open a Cafe in Noida",
    metaDescription:
      "Opening a cafe or restaurant in Noida — choosing the location, the physical checks that matter, the approvals to line up, and the lease terms to push on.",
    eyebrow: "Guide · Cafes",
    h1: "Opening a cafe or restaurant in Noida",
    lede: "This is the work we do most of. The mistakes are consistent and almost all of them are made before the first coffee is served.",
    indexBlurb: "Location, the physical checks, the approvals, and the lease terms to push on.",
    published: PUBLISHED,
    updated: PUBLISHED,
    sideHeading: "The space decides the business",
    sideNote: "A bad location does not fail loudly. It underperforms quietly, forever.",
    intro: [
      "Most cafes that struggle in Noida do not struggle because of the coffee. They struggle because the space was wrong, and a wrong space cannot be fixed by working harder. It just produces slightly disappointing numbers, month after month, until the lease runs out.",
      "The good news is that the mistakes are predictable, which means they are avoidable. What follows is the order we work through with an operator, and it starts well before you look at any units.",
      "One general caution: licensing requirements, fees and the authorities responsible for them change. Nothing here quotes an amount or a timeline as fixed — confirm the current position with the issuing authority or your consultant when you apply.",
    ],
    stepsHeading: "The order to do things in",
    steps: [
      {
        h: "Decide the concept, then match the footfall",
        p: [
          "An office-led location trades hard on weekday lunch and the hour after work, and goes quiet at weekends. A destination lane does close to the opposite. These are different businesses with different menus, hours and staffing.",
          "In Noida the clearest example is the contrast between the retail under the office towers in Sector 132 and the cafe lane in Sector 144. Both work. They do not work for the same concept.",
          "Before you sign anything, go and stand outside the unit at the hours you expect to trade and count people. One afternoon of counting beats any projection.",
        ],
      },
      {
        h: "Run the physical checks",
        p: [
          "Where does the kitchen exhaust go? This kills more cafe deals than rent does, and there is no workaround if there is no viable route.",
          "Is there enough power for your equipment, and what is the sanctioned load? Is there adequate water supply and drainage for a commercial kitchen? Is there a place for deliveries, and somewhere customers can actually stop?",
          "Then frontage and visibility. In a lane where people choose between neighbours in a few seconds, being seen is not a luxury.",
        ],
      },
      {
        h: "Confirm you are allowed to serve food there",
        p: [
          "The permitted use of the premises and the building's own rules decide whether food service is possible at all. Confirm this before you commit, because it cannot be retrofitted into a lease afterwards.",
          "Get it in writing where you can. A verbal assurance from an agent is not a permission.",
        ],
      },
      {
        h: "Line up the approvals early",
        p: [
          "A food business will typically need a food safety licence, a trade licence from the local body, and fire clearance where the premises and seating require it. Depending on what you are doing you may also need health-related approvals, a music licence, pollution consent, and — if you intend to serve alcohol — a licence under the state excise rules.",
          "Requirements, fees and processing times change, and they differ by the size and nature of the premises. Confirm the current list with the issuing authorities or a licensing consultant.",
          "Start this in parallel with your fit-out, not after it. Waiting on an approval with a finished, empty restaurant is the most expensive way to learn this lesson.",
        ],
      },
      {
        h: "Negotiate the lease around the fit-out",
        p: [
          "For food service, rent-free fit-out time is usually the single most valuable term you can win, because you are paying rent on a building site until you open.",
          "Ask for more than you think you need. Kitchen fit-outs overrun more often than they finish early.",
          "Also settle who owns what at the end. Stripping out and reinstating a kitchen is a real cost that operators routinely forget to price.",
        ],
      },
      {
        h: "Plan the gap between signing and opening",
        p: [
          "This stretch is where new operators lose the most money — rent running, staff hired, approvals pending, contractors late. Build a realistic sequence and keep the approvals moving alongside the building work.",
          "It is also the part where having someone who has done it before is worth the most, which is why we stay with cafe projects through to opening day rather than handing over the keys and disappearing.",
        ],
      },
    ],
    qas: [
      {
        q: "What licences do I need to open a cafe in Noida?",
        answer:
          "Typically a food safety licence, a trade licence from the local body, and fire clearance where the premises require it, with additional approvals depending on your operation — including a state excise licence if you plan to serve alcohol. Confirm the current list with the issuing authorities.",
        detail: [
          "Requirements vary with the size and nature of the premises, and fees and processing times change. Treat any list, including this one, as a starting point for a conversation with a licensing consultant rather than a final answer.",
          "The practical advice that does not change: start the applications alongside your fit-out, not after it.",
        ],
      },
      {
        q: "Where is the best place to open a cafe in Noida?",
        answer:
          "It depends on whether your concept lives on weekday office trade or on evening and weekend destination traffic. Sector 144's cafe lane is the established destination on this corridor; the retail under the office towers in Sector 132 suits lunch-led formats better.",
      },
    ],
    faqs: [
      {
        q: "How much space do I need for a cafe?",
        a: "It depends entirely on format. A coffee-led counter operation needs a fraction of what a full-menu restaurant with a proper kitchen requires. Work out your covers and your kitchen requirement first, then translate that into an area — not the other way round.",
      },
      {
        q: "What is the most common mistake when choosing a cafe space?",
        a: "Taking a unit with no viable route for kitchen exhaust, or one whose footfall pattern does not match the concept. Both are visible before signing and neither can be fixed afterwards, which is why the physical walk-through matters more than the brochure.",
      },
      {
        q: "How long does a cafe fit-out take?",
        a: "Longer than the plan, almost always. That is why rent-free fit-out time is the term worth fighting for — every week of overrun with rent running is money straight out of the business before you have served anyone.",
      },
      {
        q: "Can I open a cafe in any commercial unit in Noida?",
        a: "No. The permitted use and the building's rules have to allow food service, and you need practical things like an exhaust route, commercial water supply and drainage. Confirm all of it before signing, because it cannot be added to a lease later.",
      },
      {
        q: "Do you help first-time operators?",
        a: "A good part of our cafe work is with people opening their first place. Expect us to be blunt about spaces that will not work for you — that bluntness early is worth far more than encouragement that costs you a year and a lease.",
      },
    ],
    related: [
      { href: "/services/cafe-restaurant-spaces-noida", label: "Cafe and restaurant spaces", note: "The service this guide belongs to" },
      { href: "/cafe-restaurant-space-sector-144-noida", label: "Cafe space in Sector 144", note: "Roastery Street and around it" },
      { href: "/guides/commercial-lease-basics", label: "Commercial lease basics", note: "The terms to push on" },
      { href: "/shops-retail-sector-132-noida", label: "Shops and retail in Sector 132", note: "Office-led alternative" },
    ],
  },

  /* --------------------------------------------------------- rent out flat */
  {
    slug: "rent-out-flat-noida",
    rowTitle: "Renting out a flat in Noida — the process",
    metaTitle: "How to Rent Out a Flat in Noida",
    metaDescription:
      "Renting out a flat in Noida — setting the rent, preparing the place, checking tenants, the agreement, police verification and a handover that avoids arguments.",
    eyebrow: "Guide · Renting",
    h1: "Renting out a flat in Noida",
    lede: "A good tenant who stays three years beats a slightly higher rent from one who leaves in seven months. Almost everything below follows from that.",
    indexBlurb: "Rent, preparation, tenant checks, the agreement, and a handover that avoids arguments.",
    published: PUBLISHED,
    updated: PUBLISHED,
    sideHeading: "Optimise for staying, not for rent",
    sideNote: "A void plus a repaint costs more than the difference you were arguing over.",
    intro: [
      "Owners tend to optimise for the highest monthly figure. It is the wrong target. A tenant paying slightly less who stays three years earns you more than a higher-paying tenant who leaves after seven months and costs you an empty month, a repaint and another round of viewings.",
      "The second thing owners underestimate is how much of a rental dispute is decided at handover. Almost every deposit argument we have seen could have been prevented by fifteen minutes of writing things down on the day the tenant moved in.",
      "Here is the sequence.",
    ],
    stepsHeading: "How to do it properly",
    steps: [
      {
        h: "Set a realistic rent",
        p: [
          "Rent depends on the society, the size, the floor, the condition and whether there is parking. Sectors near the office belt — 135 and 143 especially — command more because the tenant pool is deeper.",
          "Be careful with numbers quoted by neighbours. People remember the rent they asked for more accurately than the rent they settled at.",
        ],
      },
      {
        h: "Spend a little before you show it",
        p: [
          "Two things lift rent more reliably than anything else: a properly finished kitchen and bathroom, and a parking slot. If you are deciding where to spend a small amount, spend it there.",
          "Beyond that, a deep clean, working lights everywhere, no dripping taps. Tenants read a neglected flat as a sign of a landlord who will be slow to fix things.",
        ],
      },
      {
        h: "Check who you are letting to",
        p: [
          "Ask for identity documents and employment details, and verify them rather than glancing at them. A tenant with a stable job near the sector is more likely to stay, which is what you actually want.",
          "This is where using a broker who works both sides helps — we would rather bring you a tenant who lasts than fill the flat this week and deal with it again in six months.",
        ],
      },
      {
        h: "Write an agreement that means something",
        p: [
          "The agreement should state the rent and due date, the deposit amount and exactly what can be deducted from it, who pays maintenance, the notice period on each side, responsibility for repairs, and any restrictions.",
          "Rent agreements in this market are commonly made for eleven months and renewed. Whatever the term, get the deposit terms specific — vagueness there causes most of the arguments.",
        ],
      },
      {
        h: "Do the police verification and the society formalities",
        p: [
          "Tenant police verification is the norm and should be completed rather than skipped. Most societies also require the tenant to be registered with them and will ask for an NOC or intimation from you as the owner.",
          "Requirements vary by society and change, so check what yours needs rather than assuming last time's process still applies.",
        ],
      },
      {
        h: "Record the handover",
        p: [
          "On the day: photograph every room, note the meter readings for electricity and water, and write an inventory of what you are leaving in the flat and its condition.",
          "Both sides sign it. This is the fifteen minutes that prevents the deposit argument two years later, and it protects the tenant as much as the owner.",
        ],
      },
      {
        h: "Handle the tenancy and the exit properly",
        p: [
          "Respond to genuine repair requests. A tenant who feels ignored leaves at the first opportunity and you are back to a void.",
          "At the end, do the same walk-through in reverse against the inventory, settle utilities, and return the deposit within the period the agreement specifies. Landlords who are slow with deposits get a reputation faster than they expect.",
        ],
      },
    ],
    qas: [
      {
        q: "What rent will my flat get in Noida?",
        answer:
          "It depends on the society, size, floor, condition and parking. The sectors around the office belt, particularly 135 and 143, get more because the tenant pool is deeper. Tell us the society and the size and we will give you the current honest number rather than a range.",
      },
      {
        q: "How do I avoid deposit disputes with a tenant?",
        answer:
          "Write the deposit terms specifically in the agreement — what can be deducted and when it is returned — and record the flat's condition and meter readings at handover with photographs and a signed inventory. Almost every dispute we see comes from skipping one of those.",
      },
    ],
    faqs: [
      {
        q: "How long should a rent agreement be?",
        a: "Eleven months and then renewed is the common convention in this market. What matters more than the length is that the terms are specific — rent, deposit and its deductions, maintenance, notice period and repair responsibility all written down clearly.",
      },
      {
        q: "Is police verification of tenants necessary?",
        a: "It is the normal expectation and should be completed rather than skipped. Most societies also require the tenant to be registered with them, so check your society's current requirements as well since they vary and change.",
      },
      {
        q: "Should I furnish the flat before letting it?",
        a: "Not necessarily fully, but a properly finished kitchen and bathroom and a parking slot lift rent more reliably than furniture does. Heavy furnishing narrows your tenant pool and gives you more things that can be damaged.",
      },
      {
        q: "Which Noida sectors rent out fastest?",
        a: "135 and 143 have the deepest tenant pools on our patch, fed by the IT parks and by 143's own metro station. 130 and 141 also let steadily to people who work on the corridor and want to pay a little less.",
      },
      {
        q: "Can you find a tenant for me?",
        a: "Yes, that is half of what our renting service does. We handle owners and tenants both, so we will tell you honestly what your flat should fetch and bring you someone likely to stay rather than someone who fills it this week.",
      },
    ],
    related: [
      { href: "/services/residential-renting-noida", label: "Residential renting in Noida", note: "The service this guide belongs to" },
      { href: "/sectors/sector-143-noida", label: "Sector 143", note: "The deepest rental market on the belt" },
      { href: "/sectors/sector-135-noida", label: "Sector 135", note: "Where many tenants work" },
      { href: "/services/pg-spaces-noida", label: "PG buildings", note: "If your building suits an operator" },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
