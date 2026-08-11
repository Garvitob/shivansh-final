import type { QaBlock, Faq, RelatedLink, Row } from "@/lib/sectors";

export type Service = {
  slug: string;
  /** Short label used in navigation and index rows. */
  name: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  lede: string;
  /** schema.org serviceType */
  serviceType: string;
  indexBlurb: string;
  indexTag: string;
  sideHeading: string;
  sideNote: string;
  body: string[];
  qas: QaBlock[];
  rows: Row[];
  rowsHeading: string;
  faqs: Faq[];
  related: RelatedLink[];
};

export const SERVICES: Service[] = [
  /* ------------------------------------------------------------------ buy */
  {
    slug: "buy-property-noida",
    name: "Buying property",
    metaTitle: "Buying Property in Noida",
    metaDescription:
      "Buying a flat, kothi or plot in Noida. We work the buyer's side properly — real prices, checked papers, and a dealer who tells you when to walk away.",
    eyebrow: "Service · Buying",
    h1: "Buying property in Noida",
    lede: "Flats, kothis and plots. This is our main work and has been since 2011. We will tell you what things actually sell for, not what people are asking.",
    serviceType: "Residential property buying agent",
    indexBlurb: "Flats, kothis and plots — our main work. Real prices, checked papers.",
    indexTag: "Buyers",
    sideHeading: "How we work the buy side",
    sideNote: "A good broker saves you more in negotiation than they cost in commission.",
    body: [
      "Most people buying in Noida start on a portal, build a picture from asking prices, and then discover the picture was wrong. Asking prices are opening positions. What matters is what has actually registered nearby in the last few months, and that is a number you cannot get without someone in the market.",
      "We give you that number first. Before you see anything, we will tell you what the realistic range is for the sector, the society or the block you are interested in, and where the current asking prices sit against it. Sometimes that conversation ends with us telling you your budget does not fit the sector you have in mind. That is a useful thing to hear early rather than after three months of viewings.",
      "Then we shortlist. We would rather show you four properties that genuinely fit than twelve that fill a morning. And we will point out the problems — the flat that faces the generator, the plot with an awkward approach, the society with a maintenance dispute running. You will hear those from us before you hear them from a neighbour after you have paid.",
      "On documents, we check before you commit money, not after. Chain of title, mutation, dues, and whether what is being sold is actually what is on the paper. On plots and on abadi land this matters more than anywhere else, and it is where deals quietly go wrong.",
      "We work both sides of the market, which means we are not only showing you the stock of one builder or one owner. It also means that when we say a price is fair, we are saying it as people who negotiate against that number from the other side every week.",
    ],
    rowsHeading: "What buying with us actually involves",
    rows: [
      {
        h: "The honest range first",
        p: "What has registered nearby, not what is being asked. You get this before you see anything.",
        tag: "Step one",
      },
      {
        h: "A short list, not a long one",
        p: "Four properties that fit beats twelve that fill a morning. We tell you the faults too.",
        tag: "Step two",
      },
      {
        h: "Papers checked before money moves",
        p: "Title chain, mutation, dues, and whether the thing being sold matches the document.",
        tag: "Step three",
      },
      {
        h: "The negotiation",
        p: "We negotiate against sellers every week. We know where the give is and where it is not.",
        tag: "Step four",
      },
      {
        h: "Registration and handover",
        p: "Through the sub-registrar and out the other side, with the keys and the paperwork in your hand.",
        tag: "Step five",
      },
    ],
    qas: [
      {
        q: "How do I know I am not overpaying for a property in Noida?",
        answer:
          "Compare against what has registered, not against what is being asked. Asking prices are opening positions and can sit well above the market. Ask your dealer for recent registered comparables in the same block or society, and treat any refusal to give them as a warning.",
        detail: [
          "Two flats in the same tower can close lakhs apart because of floor, facing, condition and how badly the seller needs the money. A single per-square-foot figure for a whole sector is close to meaningless.",
          "We will give you the range and tell you where in that range a specific property should land, and why.",
        ],
      },
      {
        q: "What should I check before paying any money for a property?",
        answer:
          "The chain of title, the mutation record, whether any dues or loans sit against the property, and whether the physical property matches what the papers describe. On plots also check the boundary on the ground against the boundary on the document.",
        detail: [
          "None of this is exotic. It is simply the work that gets skipped when a buyer is in a hurry and a seller is in a bigger one.",
          "Our guide on verifying property documents in UP walks through the same checks in plain steps.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do buyers pay you a fee?",
        a: "Brokerage in Noida is normally a percentage of the deal value and it is agreed before we start, not sprung at the end. Ask us on the first call and we will tell you the number plainly, along with what it covers.",
      },
      {
        q: "Can you help if I am buying from outside Noida or from abroad?",
        a: "Yes, and it is common. We do the viewing, send you honest photographs and video rather than flattering ones, and walk you through the document position on a call. Registration does require your presence or a properly executed power of attorney.",
      },
      {
        q: "Should I buy a flat, a builder floor or a kothi?",
        a: "A flat gives you security and maintenance handled. A builder floor gives more space for the money. A kothi gives you land, which is what actually appreciates in the plotted sectors. Your budget and how much you want to manage decide it.",
      },
      {
        q: "Which Noida sectors should I be looking at?",
        a: "It depends on budget and what the property is for. For rental income, 135 and 143. For land in a premium belt, 105 and 108. For an early entry price, 145 and 151. Tell us the budget and the purpose and we will narrow it properly.",
      },
      {
        q: "How long does buying a property in Noida take?",
        a: "From a serious shortlist to registration is usually a matter of weeks rather than months, provided the papers are clean. Where it stretches is when title or dues turn up something that has to be sorted first — which is exactly why we check early.",
      },
    ],
    related: [
      { href: "/services/sell-property-noida", label: "Selling property in Noida", note: "The other side of the same desk" },
      { href: "/sectors", label: "All eleven focus sectors", note: "Where we work, sector by sector" },
      { href: "/guides/verify-property-documents-up", label: "Verifying property documents in UP", note: "The checks, in order" },
      { href: "/guides/stamp-duty-registration-noida", label: "Stamp duty and registration", note: "How the cost is worked out" },
      { href: "/guides/circle-rates-noida", label: "Circle rates in Noida", note: "The floor under every deal" },
      { href: "/listings", label: "Current listings", note: "What is live today" },
    ],
  },

  /* ----------------------------------------------------------------- sell */
  {
    slug: "sell-property-noida",
    name: "Selling property",
    metaTitle: "Selling Property in Noida",
    metaDescription:
      "Selling a flat, kothi or plot in Noida. Priced against real closings, shown to real buyers, and taken through registration without drama.",
    eyebrow: "Service · Selling",
    h1: "Selling property in Noida",
    lede: "The two things that decide how a sale goes are the price you start at and who gets to see it. We are careful about both.",
    serviceType: "Residential property selling agent",
    indexBlurb: "Priced against real closings, shown to real buyers, closed properly.",
    indexTag: "Sellers",
    sideHeading: "Getting the price right",
    sideNote: "An over-priced property does not sit still. It goes stale, then sells for less.",
    body: [
      "Most sellers lose money in the first month, not the last. They start at an ambitious number, get no serious offers, sit for eight weeks, then start dropping. By then buyers have watched the price fall twice and they wait for a third cut. The property has become a negotiation rather than an opportunity.",
      "We would rather have the uncomfortable conversation at the start. We will tell you what your property realistically fetches, based on what has actually registered nearby, and we will tell you the number you could get if you are willing to wait longer. Those are two different numbers and you should choose between them deliberately.",
      "Presentation is worth real money and costs very little. A deep clean, a working light in every room, a repaired tap, and photographs taken in daylight rather than at nine at night. In a market where buyers compare four flats in an afternoon, the one that looks cared for wins on price as well as speed.",
      "Then there is who sees it. We work both sides, so on the day you list with us we already know buyers looking in your sector at your budget. That is the part a listing portal cannot do — a portal shows your flat to everyone, we show it to the four people who are actually ready.",
      "We also handle the awkward middle: the buyer who wants to renegotiate after the deal is agreed, the dues nobody mentioned, the paperwork that needs chasing. Getting to registration without the deal falling apart is most of the job.",
    ],
    rowsHeading: "What we do when you list with us",
    rows: [
      {
        h: "An honest valuation",
        p: "What it fetches now, and what it fetches if you can wait. You pick, knowing both.",
        tag: "Step one",
      },
      {
        h: "Getting it ready",
        p: "Small repairs, a clean, daylight photographs. Cheap work that comes back as price.",
        tag: "Step two",
      },
      {
        h: "The right buyers first",
        p: "We already know who is looking in your sector at your number. They see it before the portal does.",
        tag: "Step three",
      },
      {
        h: "Holding the deal together",
        p: "Late renegotiations, dues, missing papers. This is where sales are lost and where we earn our fee.",
        tag: "Step four",
      },
      {
        h: "Registration",
        p: "Through the sub-registrar, money received, keys handed over, done.",
        tag: "Step five",
      },
    ],
    qas: [
      {
        q: "What is my property in Noida actually worth?",
        answer:
          "It is worth what comparable properties nearby have recently registered at, adjusted for floor, facing, condition and how much you can afford to wait. Not what a portal estimate says and not what your neighbour claims they were offered. We will give you the real range for free.",
        detail: [
          "Bring us the sector, the society or block, the size and the floor. We will come back with what has closed, not what has been asked.",
        ],
      },
      {
        q: "How long does it take to sell a property in Noida?",
        answer:
          "A correctly priced property in a sector with active demand usually finds a serious buyer within weeks. Over-priced ones can sit for months and then sell below what they would have fetched at the start. Price is the main lever on time, not luck.",
        detail: [
          "Sectors matter too. Society flats in 143 or 135 have a deeper buyer pool than a plot in a quieter sector, so they clear faster.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should I repair things before selling, or sell as is?",
        a: "Do the cheap things: a deep clean, working lights, fixed taps, patched paint where it is obviously damaged. Skip expensive renovations — buyers rarely pay back a new kitchen. The goal is a property that looks cared for, not a rebuilt one.",
      },
      {
        q: "Can I sell without giving anyone exclusivity?",
        a: "You can, and plenty of owners do. Be aware it cuts both ways: when four brokers are quoting the same flat at four different prices, buyers notice and it weakens your position. If you do use several, at least agree one price with all of them.",
      },
      {
        q: "What documents do I need to sell property in Noida?",
        a: "Broadly: your title documents and the chain behind them, the Authority or society paperwork for the property, proof that dues and maintenance are clear, identity documents, and anything relating to a loan against the property. We will tell you exactly which apply to yours.",
      },
      {
        q: "Do you handle the registration process too?",
        a: "Yes. We stay with the deal through to the sub-registrar and the handover. Most of the value a dealer adds after a price is agreed is in keeping the sale from falling apart in that window.",
      },
      {
        q: "What if my buyer tries to renegotiate at the last minute?",
        a: "It happens, usually where the original price was soft or something unexpected turned up in the papers. We deal with it by pricing properly at the start and checking documents early, so there is no fresh excuse to reopen the number.",
      },
    ],
    related: [
      { href: "/services/buy-property-noida", label: "Buying property in Noida", note: "The other side of the same desk" },
      { href: "/guides/selling-property-noida-process", label: "Selling in Noida — the full process", note: "Step by step" },
      { href: "/guides/circle-rates-noida", label: "Circle rates in Noida", note: "Why they set your floor" },
      { href: "/guides/stamp-duty-registration-noida", label: "Stamp duty and registration", note: "What happens at the sub-registrar" },
      { href: "/sectors", label: "All eleven focus sectors", note: "Where your buyers are" },
    ],
  },

  /* ---------------------------------------------------------------- rent */
  {
    slug: "residential-renting-noida",
    name: "Residential renting",
    metaTitle: "Renting a Home in Noida",
    metaDescription:
      "Renting in Noida, both sides. Finding tenants for owners, finding homes for tenants, and getting the agreement and paperwork done properly.",
    eyebrow: "Service · Renting",
    h1: "Residential renting in Noida",
    lede: "Owners on one side, tenants on the other. We work both, which is the only way to know what a fair rent actually is.",
    serviceType: "Residential letting agent",
    indexBlurb: "Finding tenants for owners. Finding homes for tenants. Paperwork done properly.",
    indexTag: "Owners · Tenants",
    sideHeading: "Both sides of the letting",
    sideNote: "We are not paid to get you a bad tenant quickly.",
    body: [
      "Renting looks simple until something goes wrong. Then it turns out the agreement was a template nobody read, the deposit terms were vague, and neither side agreed in writing who pays for what.",
      "For owners, the work is finding a tenant who pays on time and stays. That is worth more than an extra two thousand a month from someone who leaves in seven months and costs you a void, a repaint and another round of viewings. We check who we are bringing you, and we tell you honestly what your flat will fetch — including when the number you have in mind is above the market.",
      "In the sectors around the office belt, especially 135 and 143, the tenant pool is professional and steady. Two things lift rent there more than anything else: a properly finished kitchen and bathroom, and a parking slot. If you are deciding where to spend a little money before letting, spend it on those.",
      "For tenants, the work is being shown places that actually match the brief and being told the truth about them. Water supply, power backup, what the maintenance covers, whether the society has rules that will affect you. We would rather you knew before you moved in.",
      "On paperwork, we do it properly: a rent agreement that says what both sides actually agreed, a clear position on the deposit and how it comes back, and a record of the meter readings and the condition of the place at handover. Almost every rental dispute we have seen would have been avoided by ten minutes of that at the start.",
    ],
    rowsHeading: "What we handle",
    rows: [
      {
        h: "For owners — finding a tenant",
        p: "A realistic rent, tenants we have checked, and fewer voids because they stay longer.",
        tag: "Owners",
      },
      {
        h: "For tenants — finding a home",
        p: "Places that match the brief, with the awkward facts told to you before you sign.",
        tag: "Tenants",
      },
      {
        h: "The agreement",
        p: "A rent agreement that reflects what was actually agreed, not a template with names filled in.",
        tag: "Both",
      },
      {
        h: "Handover, properly recorded",
        p: "Meter readings, condition, inventory. Ten minutes now saves a deposit argument later.",
        tag: "Both",
      },
    ],
    qas: [
      {
        q: "What rent will my flat in Noida get?",
        answer:
          "It depends on the sector, the society, the size, the floor, the condition and whether it has parking. Sectors near the office belt like 135 and 143 command more because the tenant pool is deeper. Tell us the society and size and we will give you the current honest number.",
        detail: [
          "Be careful with the number a neighbour quotes you. People remember the rent they asked for, not always the rent they settled at.",
        ],
      },
      {
        q: "How do I avoid problems with a tenant?",
        answer:
          "Check who they are before they move in, write an agreement that actually states what was agreed, and record the condition and meter readings at handover. Most disputes we see come from vague deposit terms and nobody writing down what the flat looked like on day one.",
      },
    ],
    faqs: [
      {
        q: "How much deposit is normal for a rental in Noida?",
        a: "It varies by property and by owner, and it is negotiable. What matters more than the amount is that the agreement states clearly what can be deducted from it and when it comes back. Vague deposit terms cause most of the arguments.",
      },
      {
        q: "Do you handle rent agreements?",
        a: "Yes. We make sure the agreement reflects what both sides actually discussed rather than a downloaded template, including who pays maintenance, what happens to the deposit, and the notice period on each side.",
      },
      {
        q: "Which Noida sectors are best for renting out a flat?",
        a: "135 and 143 have the deepest tenant pools on our patch, fed by the IT parks and by 143's own metro station. 130 and 141 also let steadily to people working on the corridor who want to pay a little less.",
      },
      {
        q: "I am moving to Noida for work — can you help me find a flat?",
        a: "Yes, that is half of what this service is. Tell us where you will be working, your budget and whether you need it furnished. We will show you places that fit, and tell you the things about each that the listing would not.",
      },
      {
        q: "How quickly can a flat be let in Noida?",
        a: "In the strong rental sectors a well-presented flat at a fair rent usually lets in weeks rather than months. What slows it down is an asking rent set above the market, or a flat that shows badly because nothing has been touched up.",
      },
    ],
    related: [
      { href: "/guides/rent-out-flat-noida", label: "Renting out a flat in Noida", note: "The process, step by step" },
      { href: "/sectors/sector-135-noida", label: "Sector 135", note: "The deepest tenant pool on the belt" },
      { href: "/sectors/sector-143-noida", label: "Sector 143", note: "Societies with a metro station" },
      { href: "/services/pg-spaces-noida", label: "PG buildings", note: "If your building suits a PG operator" },
      { href: "/listings", label: "Current listings", note: "What is live today" },
    ],
  },

  /* ----------------------------------------------------- commercial lease */
  {
    slug: "commercial-leasing-noida",
    name: "Commercial leasing",
    metaTitle: "Commercial Leasing in Noida",
    metaDescription:
      "Office floors, shops and IT park space to lease in Noida. We work both sides — landlords with space and companies who need it, along the Expressway.",
    eyebrow: "Service · Commercial",
    h1: "Commercial leasing in Noida",
    lede: "Office floors, shop units, IT park space. Along the Expressway this is a market with real depth, and the terms matter as much as the rent.",
    serviceType: "Commercial property leasing agent",
    indexBlurb: "Office floors, shops, corporate and IT park space along the Expressway.",
    indexTag: "Both sides",
    sideHeading: "The rent is not the deal",
    sideNote: "Escalation, lock-in, fit-out and what the quoted rate excludes. That is the deal.",
    body: [
      "The Noida Expressway carries one of NCR's larger concentrations of Grade-A office space. Sector 135 has the big IT campuses, 132 has corporate towers with a retail street underneath, and 144 has the Embassy business parks. Between them there is almost always something available — the question is whether it is the right thing on the right terms.",
      "Companies taking their first space in Noida usually focus on the headline rent and get caught by everything around it. The quoted rate frequently excludes maintenance, and the total monthly cost can look quite different once that is added. Then there is the escalation clause, the lock-in period, the security deposit, who pays for the fit-out, and how long the rent-free fit-out window actually is.",
      "We go through all of that before you sign, and we push on the parts that are genuinely negotiable. In a soft patch, a landlord will move further on rent-free months than on headline rent, because the headline number sets a benchmark for the rest of their building. Knowing which lever to pull is most of the value here.",
      "For landlords, our job is the opposite and just as specific: getting the floor filled by a tenant who will still be there in year three, at terms that hold up. An empty floor costs more than a slightly lower rent.",
      "We work SEZ and non-SEZ space. SEZ units come with their own rules and paperwork and they do not suit every business, so we will say plainly when they do not fit yours.",
    ],
    rowsHeading: "What we cover",
    rows: [
      {
        h: "Office floors and suites",
        p: "From a small fitted suite to a full floor, across the Expressway office belt.",
        tag: "Lease",
      },
      {
        h: "Shops and retail units",
        p: "High-street retail and units inside commercial developments, priced on real footfall.",
        tag: "Lease",
      },
      {
        h: "IT park and SEZ space",
        p: "Campus space in the big parks, with a straight view on whether an SEZ suits you.",
        tag: "Lease",
      },
      {
        h: "Terms, not just rent",
        p: "Escalation, lock-in, fit-out period, deposit, what maintenance actually covers.",
        tag: "Both sides",
      },
      {
        h: "For landlords",
        p: "Filling the floor with a tenant who stays. A void costs more than a fair rent.",
        tag: "Landlords",
      },
    ],
    qas: [
      {
        q: "What should I check in a commercial lease in Noida before signing?",
        answer:
          "Check what the quoted rent excludes, especially maintenance, and work out the real monthly cost. Then look at the escalation clause, the lock-in period, the security deposit, who pays for fit-out and how long the rent-free fit-out window runs. Those terms move more money than the headline rate.",
        detail: [
          "Also confirm what happens at renewal and on early exit. A lock-in that suits a landlord perfectly can be very expensive for a growing company that outgrows the floor in year two.",
          "Our commercial lease guide sets these out in plain language.",
        ],
      },
      {
        q: "Which Noida sector is right for my office?",
        answer:
          "Sector 135 if you want a large IT campus address with managed facilities. Sector 132 if you want a corporate tower floor with retail underneath. Sector 144 if you want the Embassy business parks and a metro station in the sector. Budget and headcount narrow it quickly.",
      },
    ],
    faqs: [
      {
        q: "Do you work with landlords or with tenants?",
        a: "Both, and we say which side we are on in any given deal. Working both sides is how we know what terms are genuinely achievable rather than what one party would like to believe.",
      },
      {
        q: "What is a typical lock-in period on commercial space?",
        a: "It is negotiable and depends on the building, the size of the space and how much fit-out the landlord is contributing. The important thing is to match the lock-in to your own plans, because breaking one early is expensive.",
      },
      {
        q: "Can I take a small office rather than a whole floor?",
        a: "Yes. There are fitted suites and smaller units across the Expressway belt, not just full floors. Tell us your headcount and we will point you at buildings that suit that size rather than ones that will feel empty.",
      },
      {
        q: "Do you handle SEZ space in Noida?",
        a: "Yes, including the Embassy parks in Sector 144. SEZ units carry their own compliance requirements and are not right for every business, so we will tell you honestly whether your operation fits one before you go down that road.",
      },
      {
        q: "How long does it take to lease an office in Noida?",
        a: "Finding the right space can be quick if your brief is clear. What takes time is the lease negotiation and then the fit-out. Build the fit-out window into your plan — that is what usually decides when you actually move in.",
      },
    ],
    related: [
      { href: "/services/commercial-buy-sell-noida", label: "Buying and selling commercial space", note: "Ownership rather than lease" },
      { href: "/office-space-sector-135-noida", label: "Office space in Sector 135", note: "The IT campus belt" },
      { href: "/office-space-sector-132-noida", label: "Office space in Sector 132", note: "Corporate towers" },
      { href: "/office-space-sector-144-noida", label: "Office space in Sector 144", note: "Embassy parks and SEZ" },
      { href: "/guides/commercial-lease-basics", label: "Commercial lease basics", note: "The terms worth arguing about" },
    ],
  },

  /* ------------------------------------------------ commercial buy / sell */
  {
    slug: "commercial-buy-sell-noida",
    name: "Commercial buying & selling",
    metaTitle: "Buying & Selling Commercial Space",
    metaDescription:
      "Buying and selling offices, shops and commercial units in Noida. Yield, tenant quality and exit — the three things that decide whether it was a good buy.",
    eyebrow: "Service · Commercial",
    h1: "Buying and selling commercial space",
    lede: "Owning commercial property is a different business from owning a flat. The tenant, the yield and the exit matter more than the address.",
    serviceType: "Commercial real estate sales agent",
    indexBlurb: "Offices, shops and commercial units bought and sold — yield, tenant and exit.",
    indexTag: "Buyers · Sellers",
    sideHeading: "Three questions before you buy",
    sideNote: "Who is the tenant, what is the real yield, and who buys it from you later.",
    body: [
      "People buy commercial property in Noida for income, and the mistake they make is buying the building rather than the income. A shop with a strong tenant on a long lease and a sensible escalation is a different asset from an identical shop standing empty, even though the brochure looks the same.",
      "So we start with three questions. Who is the tenant and how solid are they? What is the actual yield after maintenance, taxes and realistic vacancy — not the number in the sales pitch? And when you want out, who is the buyer, and what will they care about?",
      "That third question catches the most people. Commercial resale in Noida is a thinner market than residential. A well-let unit in an established building sells; an odd unit in a half-empty development can sit for a long time. If you might need liquidity, buy where there is a queue behind you.",
      "On the selling side, the work is presenting the income properly. A commercial unit with clean paperwork, a documented tenant history and clear figures sells faster and higher than the same unit sold on optimism. We put that pack together before we go to the market.",
      "We work across the office belt at 132, 135 and 144, and the retail that sits with it. We also handle plain commercial land and units outside the headline sectors where the numbers make more sense.",
    ],
    rowsHeading: "What we look at",
    rows: [
      {
        h: "The tenant",
        p: "Who is in it, on what lease, with what escalation, and how likely are they to renew.",
        tag: "Buying",
      },
      {
        h: "The real yield",
        p: "After maintenance, taxes and honest vacancy assumptions. Not the pitch number.",
        tag: "Buying",
      },
      {
        h: "The exit",
        p: "Who buys this from you in five years. Thin resale markets are a real cost.",
        tag: "Buying",
      },
      {
        h: "Selling on the numbers",
        p: "Clean paperwork, documented tenant history, clear figures. It sells faster and higher.",
        tag: "Selling",
      },
    ],
    qas: [
      {
        q: "Is commercial property in Noida a better investment than residential?",
        answer:
          "It usually yields more and sells more slowly. Commercial gives stronger rental income, especially with a good tenant on a long lease, but the resale market is thinner than residential. Buy commercial for income you intend to hold, not for a quick exit.",
        detail: [
          "That trade-off is the whole decision. If you might need the money back within a couple of years, residential in a deep sector like 143 is the safer place for it.",
        ],
      },
      {
        q: "What makes one commercial unit worth more than an identical one?",
        answer:
          "The income attached to it. A unit let to a solid tenant on a long lease with a sensible escalation clause is worth considerably more than an identical empty unit. Position within the building matters too — visibility and approach change footfall, and footfall changes rent.",
      },
    ],
    faqs: [
      {
        q: "What yield should I expect from commercial property in Noida?",
        a: "It varies too much by building, tenant and lease terms for a single number to be useful. What we will do is work out the honest yield on a specific unit with you, after maintenance, taxes and a realistic vacancy assumption rather than an optimistic one.",
      },
      {
        q: "Should I buy a pre-leased unit or an empty one?",
        a: "Pre-leased gives you income from day one and a price that reflects it. Empty is cheaper and gives you control over who goes in, but you carry the vacancy risk yourself. Which is right depends on whether you want income now or upside later.",
      },
      {
        q: "Can you help sell a commercial unit that is currently empty?",
        a: "Yes, though it is easier once there is a tenant, because you are then selling income rather than an idea. Sometimes the right move is to let it first and sell afterwards. We will tell you which route we think gets you more.",
      },
      {
        q: "Which sectors are best for commercial buying in Noida?",
        a: "The Expressway belt is where the depth is: 132 for corporate towers and retail, 135 for IT park space, 144 for the Embassy parks. Outside those, opportunities exist but check the resale market before you commit.",
      },
    ],
    related: [
      { href: "/services/commercial-leasing-noida", label: "Commercial leasing in Noida", note: "Leasing rather than owning" },
      { href: "/shops-retail-sector-132-noida", label: "Shops and retail in Sector 132", note: "High-street units" },
      { href: "/sectors/sector-132-noida", label: "Sector 132", note: "Corporate towers and retail" },
      { href: "/services/corporate-brand-requirements-noida", label: "Corporate and brand requirements", note: "If you are the occupier" },
      { href: "/guides/commercial-lease-basics", label: "Commercial lease basics", note: "What your tenant will push on" },
    ],
  },

  /* ----------------------------------------------------------- industrial */
  {
    slug: "industrial-spaces-noida",
    name: "Industrial spaces",
    metaTitle: "Industrial Space in Noida",
    metaDescription:
      "Industrial units to lease or buy across Noida — Phase 2, Sectors 80 and 83, NSEZ and the Ecotech belts in Greater Noida. Approvals checked.",
    eyebrow: "Service · Industrial",
    h1: "Industrial lease and sale in Noida",
    lede: "Sheds, units and industrial plots across Noida's industrial belts. This is a different market from the Expressway sectors and we treat it as one.",
    serviceType: "Industrial property agent",
    indexBlurb: "Lease and sale of industrial units across Noida's industrial belts.",
    indexTag: "Lease · Sale",
    sideHeading: "Where Noida's industry actually sits",
    sideNote: "Not on the Expressway. Phase 2, the 80s belt, NSEZ, and Ecotech in Greater Noida.",
    body: [
      "Noida's industrial property is concentrated in its own belts rather than spread across the city. Phase 2 is the largest, the Sector 80 and 83 pocket has a long-established base, NSEZ serves export-oriented units, and the Ecotech sectors in Greater Noida carry a lot of the newer and larger requirements.",
      "None of those are the Expressway sectors we work residentially, and that is the point. Industrial requirements are driven by things residential buyers never think about: three-phase power and the sanctioned load, floor loading, clear height, truck access and turning radius, effluent and pollution clearances, and whether the permitted use on the allotment actually covers what you intend to do.",
      "We check the permitted use before anything else. A unit that suits your machinery perfectly is worthless if the allotment does not allow your activity, and that is a problem you cannot fix after signing.",
      "For owners, industrial units let to a good operator are steady assets, but the tenant quality question is sharper than in residential — a tenant whose process damages the building or breaches the permitted use creates problems long after they have gone.",
      "We handle both lease and sale, for units, sheds and industrial plots, across the city. If your requirement is large or unusual, tell us the process rather than the square footage. The process is what determines which belt you should even be looking in.",
    ],
    rowsHeading: "What we check on an industrial unit",
    rows: [
      {
        h: "Permitted use",
        p: "Does the allotment actually allow what you intend to do. We check this before anything else.",
        tag: "First",
      },
      {
        h: "Power and load",
        p: "Sanctioned load and three-phase supply. Getting it increased later is slow and not guaranteed.",
        tag: "Critical",
      },
      {
        h: "The building itself",
        p: "Clear height, floor loading, column spacing. The things machinery cares about.",
        tag: "Physical",
      },
      {
        h: "Access",
        p: "Truck access, turning radius, loading. A unit you cannot load properly is not a unit.",
        tag: "Physical",
      },
      {
        h: "Clearances",
        p: "Pollution and effluent requirements, where your process needs them.",
        tag: "Compliance",
      },
    ],
    qas: [
      {
        q: "Where are the industrial areas in Noida?",
        answer:
          "The main belts are Phase 2, the Sector 80 and 83 pocket, and NSEZ for export-oriented units, with the Ecotech sectors in Greater Noida taking a lot of the larger and newer requirements. These sit apart from the Expressway sectors, which are residential and commercial rather than industrial.",
      },
      {
        q: "What should I check before taking an industrial unit?",
        answer:
          "Start with permitted use — whether the allotment allows your specific activity. Then sanctioned power load, clear height and floor loading, truck access, and any pollution or effluent clearances your process needs. Getting any of these wrong is expensive and often cannot be fixed afterwards.",
        detail: [
          "Tell us the process you are running rather than the square footage you think you need. The process decides the belt, the building and the clearances, and the square footage usually follows from it.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you only handle industrial property near your Sector 144 office?",
        a: "No. Industrial work takes us across the whole city and into Greater Noida, because that is where the industrial belts are. Our Expressway focus sectors are residential and commercial; industrial is a citywide service.",
      },
      {
        q: "Can I convert a warehouse into a different kind of unit?",
        a: "It depends entirely on the permitted use on the allotment and the applicable rules, not on what the building physically allows. Check that position before you commit to anything, because a conversion that is not permitted cannot be fixed after the fact.",
      },
      {
        q: "Is it better to lease or buy an industrial unit?",
        a: "Lease if your requirement might change, if you are testing a market, or if capital is better used in the business. Buy if the process is settled, the location is right long term, and you want the asset. Most growing operations lease first.",
      },
      {
        q: "What is NSEZ?",
        a: "The Noida Special Economic Zone, which houses export-oriented units under its own regime. It suits businesses whose model fits SEZ rules and does not suit those whose does not, so the fit question comes before the space question.",
      },
    ],
    related: [
      { href: "/services/commercial-leasing-noida", label: "Commercial leasing in Noida", note: "Offices rather than units" },
      { href: "/services/commercial-buy-sell-noida", label: "Buying and selling commercial space", note: "Commercial as an asset" },
      { href: "/areas", label: "Areas we serve", note: "Noida, Greater Noida, YEIDA, NCR" },
      { href: "/contact", label: "Contact us", note: "Tell us the process, not the size" },
    ],
  },

  /* ------------------------------------------------------------------- pg */
  {
    slug: "pg-spaces-noida",
    name: "PG buildings",
    metaTitle: "PG Buildings in Noida",
    metaDescription:
      "PG buildings in Noida, both directions. Owners with large buildings who want a PG operator, and operators looking for the right building to run.",
    eyebrow: "Service · PG",
    h1: "PG buildings in Noida",
    lede: "Owners with a large building on one side. PG operators looking for one on the other. We sit in the middle and match them.",
    serviceType: "Paying guest accommodation property agent",
    indexBlurb: "Owners with large spaces on one side, PG operators on the other. We sit in the middle.",
    indexTag: "Owners · Operators",
    sideHeading: "A specific kind of matchmaking",
    sideNote: "Not every big building makes a good PG. We will tell you if yours does not.",
    body: [
      "PG is its own market in Noida and it works differently from ordinary renting. An owner is not letting to a family; they are letting a whole building to an operator who will run it as a business. The operator is not looking for a home; they are looking for a building whose layout, location and rules let them fill beds.",
      "For owners, this can be a good answer to a difficult asset. A large kothi or a building that is awkward to let floor by floor can produce steady income as a PG, with one tenant to deal with instead of six. The trade-off is wear — a PG runs harder than a family home, and the agreement needs to say clearly who maintains what.",
      "Not every building suits it. Room sizes, the number of bathrooms, the staircase and the approach all matter, and so does what the neighbours and the society will tolerate. We will tell you plainly if your building will not work as a PG rather than let you find out through a failed arrangement.",
      "For operators, the questions are location against the tenant base, the number of beds the layout genuinely supports, and terms that survive a slow season. Buildings near the office belt and the IT parks fill more reliably than ones further out, and that is worth paying for.",
      "We work this in both directions, which is the useful part. When an owner calls us with a building, we often already know which operators are looking.",
    ],
    rowsHeading: "Both directions",
    rows: [
      {
        h: "Owners with a building",
        p: "One tenant instead of six, steady income, and an honest answer about whether it suits a PG at all.",
        tag: "Owners",
      },
      {
        h: "Operators looking for a building",
        p: "Location against your tenant base, the beds the layout really supports, terms that survive a slow month.",
        tag: "Operators",
      },
      {
        h: "The agreement",
        p: "Who maintains what, what the wear allowance is, and what happens at the end. Write it down.",
        tag: "Both",
      },
    ],
    qas: [
      {
        q: "Is my building suitable for a PG?",
        answer:
          "It depends on room sizes, the number of bathrooms, the staircase and approach, and what the society or the neighbours will accept. Large kothis and buildings that are awkward to let floor by floor often work well. We will tell you honestly if yours does not.",
      },
      {
        q: "Is running a PG in Noida a good business?",
        answer:
          "It works where the tenant base is close — near the IT parks and the office belt, occupancy is steadier and beds fill faster. Further out the economics get thin quickly. Location matters more in PG than in almost any other property decision.",
        detail: [
          "The other thing that decides it is the building's layout. Beds per floor is the number the whole business runs on, and a building that gives you two fewer than you assumed changes the maths completely.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you find PG operators for owners, or buildings for operators?",
        a: "Both, and that is the point of doing it this way. When an owner calls us with a building, we usually already know which operators are looking for one. That is faster for everyone than each side searching separately.",
      },
      {
        q: "How is a PG arrangement different from a normal rental?",
        a: "You are letting a whole building to a business rather than a home to a family. The income is steadier and there is one tenant instead of several, but the building takes harder use, so the agreement has to be specific about maintenance and wear.",
      },
      {
        q: "Which parts of Noida work best for PG?",
        a: "Areas within easy reach of the IT parks and office belt fill most reliably, because that is where the tenant base is. The further you get from the working population, the harder the beds are to keep full through a quiet stretch.",
      },
      {
        q: "What should be in a PG agreement?",
        a: "Clearly: who maintains what, an agreed allowance for wear, the notice period on both sides, what happens to fittings at the end, and any restrictions the society imposes. Vague agreements here cause expensive arguments two years in.",
      },
    ],
    related: [
      { href: "/pg-space-noida-expressway", label: "PG space on the Noida Expressway", note: "Where the demand sits" },
      { href: "/services/residential-renting-noida", label: "Residential renting", note: "The ordinary letting route" },
      { href: "/sectors/sector-135-noida", label: "Sector 135", note: "The IT workforce that fills beds" },
      { href: "/contact", label: "Contact us", note: "Tell us about the building" },
    ],
  },

  /* --------------------------------------------------------------- cafes */
  {
    slug: "cafe-restaurant-spaces-noida",
    name: "Cafe & restaurant spaces",
    metaTitle: "Cafe & Restaurant Space in Noida",
    metaDescription:
      "Cafe and restaurant space in Noida, end to end. Most of the cafes on Roastery Street in Sector 144 found their space through us.",
    eyebrow: "Service · Our strongest work",
    h1: "Cafe and restaurant spaces, end to end",
    lede: "This is the work we are known for. Most of the cafes on Roastery Street, the cafe lane in Sector 144, found their space through us — and we stay with a project from the first viewing to opening day.",
    serviceType: "Restaurant and cafe premises agent",
    indexBlurb: "From finding the space to opening day. Our strongest work — ask about Roastery Street.",
    indexTag: "End to end",
    sideHeading: "Why this one is different",
    sideNote: "A cafe is not a shop with coffee in it. The space either works or it quietly kills you.",
    body: [
      "Roastery Street in Sector 144 did not fill up by accident. Over the years, cafe and restaurant owners came to us to find the right unit, settle the lease and get the doors open, and most of that lane went through this office. That is the single thing we would point at if you asked what we are best at.",
      "The reason cafe work needs specialist attention is that the wrong space does not fail loudly. It just underperforms forever. Frontage and visibility from the road, whether people can actually stop and park, the approach from the footpath, where the kitchen exhaust can vent, the power load for equipment, water and drainage, and whether the building permits food service at all — get any of those wrong and no amount of good coffee fixes it.",
      "Then there is the footfall pattern. An office-led location like Sector 132 gives you strong weekday lunch and evening trade and a quiet Sunday. A destination lane gives you the opposite. Your menu, your hours and your staffing all follow from which of those you are in, so we would rather match the space to the concept than sell you whatever is vacant.",
      "On terms, the fit-out period is the number that matters most in this category. A cafe fit-out takes real time, and paying full rent while you are still building is money straight out of the business. We push hard on rent-free fit-out windows, because that is usually where the give is.",
      "We stay involved after the lease is signed. Not because it is glamorous, but because the gap between signing and opening is where new operators lose time and money, and we have walked that road often enough to see the problems coming.",
    ],
    rowsHeading: "What end to end means here",
    rows: [
      {
        h: "Matching space to concept",
        p: "Office-led lunch trade or destination evenings. These are different businesses and need different units.",
        tag: "First",
      },
      {
        h: "The physical checks",
        p: "Frontage, parking, approach, kitchen exhaust route, power load, water and drainage.",
        tag: "Critical",
      },
      {
        h: "Permission to serve food",
        p: "Whether the building and the use actually allow food service. Confirmed before you commit.",
        tag: "Compliance",
      },
      {
        h: "The fit-out window",
        p: "Rent-free time while you build. This is where we push hardest, because it is where the give is.",
        tag: "Terms",
      },
      {
        h: "Through to opening day",
        p: "We stay with it after signing. The gap between lease and opening is where projects bleed.",
        tag: "After",
      },
    ],
    qas: [
      {
        q: "What should I look for in a cafe space in Noida?",
        answer:
          "Frontage and visibility, somewhere customers can actually stop, a workable route for the kitchen exhaust, enough power for your equipment, and water and drainage that suit a commercial kitchen. Then confirm the building permits food service before you sign anything at all.",
        detail: [
          "After that comes footfall pattern. Office-led locations trade hard on weekday lunch and go quiet at weekends. Destination lanes do the reverse. Match the space to the concept rather than the other way round.",
        ],
      },
      {
        q: "Where should I open a cafe in Noida?",
        answer:
          "Sector 144's cafe lane is the established destination on this corridor, with the business parks supplying weekday footfall and evening traffic coming from across Noida. Sector 132 suits office-led formats. The right answer depends on whether your concept lives on lunch trade or evenings.",
      },
    ],
    faqs: [
      {
        q: "Do you really handle the whole cafe project?",
        a: "We handle everything on the property side, end to end — finding the unit, checking it physically works for a kitchen, negotiating the lease and the fit-out window, and staying with the project through to opening day. We are not builders or licensing agents, but we know the road.",
      },
      {
        q: "How much rent-free fit-out time should I ask for?",
        a: "As much as the landlord will give, because a cafe fit-out takes real time and paying rent on a building site is pure loss. This is usually the most negotiable part of a food-service lease, more so than the headline rent.",
      },
      {
        q: "Can I open a cafe in any commercial unit?",
        a: "No. Food service needs the building and the permitted use to allow it, plus practical things like a route for kitchen exhaust and adequate water and drainage. Confirm all of that before signing — it cannot be retrofitted into a lease afterwards.",
      },
      {
        q: "Is Roastery Street the only place for a cafe in Noida?",
        a: "It is the best-known lane on our corridor, but not the only option. Office-led sectors like 132 support different formats, and new pockets open up as the corridor grows. What matters is matching the location's footfall pattern to your concept.",
      },
      {
        q: "I have never run a food business. Will you still work with me?",
        a: "Yes, and a good part of our cafe work is with first-time operators. Expect us to be blunt about spaces that will not work for you. That bluntness early is worth more than encouragement that costs you a year.",
      },
    ],
    related: [
      { href: "/cafe-restaurant-space-sector-144-noida", label: "Cafe space in Sector 144", note: "Roastery Street and around it" },
      { href: "/guides/open-cafe-restaurant-noida", label: "Opening a cafe in Noida", note: "The process, plainly" },
      { href: "/sectors/sector-144-noida", label: "Sector 144", note: "Our home sector" },
      { href: "/services/commercial-leasing-noida", label: "Commercial leasing in Noida", note: "The wider lease market" },
      { href: "/guides/commercial-lease-basics", label: "Commercial lease basics", note: "Terms worth arguing about" },
    ],
  },

  /* ---------------------------------------------------------- corporate */
  {
    slug: "corporate-brand-requirements-noida",
    name: "Corporate & brand requirements",
    metaTitle: "Corporate & Brand Requirements",
    metaDescription:
      "Site finding in Noida for banks, quick-commerce hubs and chains entering the city. You give us the specification, we bring back sites that meet it.",
    eyebrow: "Service · Corporate",
    h1: "Corporate and brand requirements",
    lede: "Banks opening branches, quick-commerce hubs, chains entering Noida. You have a specification rather than a wish list, and we work to it.",
    serviceType: "Corporate real estate site acquisition",
    indexBlurb: "Banks opening branches, quick-commerce hubs, chains entering Noida — we find the site.",
    indexTag: "Brands",
    sideHeading: "Working to a brief",
    sideNote: "Brands do not browse. They have a spec, and sites either meet it or they do not.",
    body: [
      "A brand looking for a site is not a buyer looking for a property. There is a specification — a catchment, a frontage, a carpet area range, a power requirement, parking, loading access, sometimes a distance rule from an existing outlet. Sites either meet it or they do not, and the useful work is filtering, not showing.",
      "So we work the other way round from a normal search. We take the brief, go out into the sectors, and come back with a shortlist where each site is matched against the spec point by point, including the points where it falls short. A site that misses on one criterion but is otherwise excellent is worth knowing about; a site presented as perfect that fails on loading access wastes everybody's week.",
      "The requirements we see most often on this corridor are branch space for banks and financial services, dark stores and hubs for quick commerce, and retail or food units for chains opening their first Noida outlet. Each has its own hard constraints — a quick-commerce hub lives or dies on loading and delivery access, a bank branch on catchment and visibility, a chain outlet on frontage and neighbours.",
      "Being physically in Sector 144 helps here in a way it does not always help elsewhere. We hear about units coming free on this corridor before they are formally marketed, which for a brand under a rollout deadline is worth more than a longer list.",
      "For rollouts across several sites, we can work the whole corridor rather than one sector at a time, and keep the comparison consistent so your team is comparing like with like.",
    ],
    rowsHeading: "Requirements we handle",
    rows: [
      {
        h: "Bank and financial branches",
        p: "Catchment, visibility, frontage, security requirements and the approvals that go with them.",
        tag: "Branches",
      },
      {
        h: "Quick-commerce hubs and dark stores",
        p: "Loading and delivery access first, then area and power. Access is what kills these sites.",
        tag: "Hubs",
      },
      {
        h: "Chains entering Noida",
        p: "First-outlet decisions where the catchment matters more than the rent.",
        tag: "Retail",
      },
      {
        h: "Multi-site rollouts",
        p: "The whole corridor worked at once, with sites compared on the same terms.",
        tag: "Rollout",
      },
    ],
    qas: [
      {
        q: "How do you handle a corporate site requirement?",
        answer:
          "We take the written specification, search against it across the sectors, and come back with a shortlist where every site is scored against your criteria — including where it falls short. Filtering is the work. Showing you everything available is not useful to a brand on a deadline.",
      },
      {
        q: "Can you handle a rollout across several Noida locations?",
        answer:
          "Yes. Working the whole corridor at once is more efficient than sector-by-sector searching, and it keeps the comparison consistent so your team can judge sites against each other rather than against different sets of information.",
      },
    ],
    faqs: [
      {
        q: "Do you work with brands that have never operated in Noida?",
        a: "Often. A first Noida site is mostly a catchment question, and that is local knowledge rather than national experience. We will tell you which sectors genuinely suit your format and which ones only look right on a map.",
      },
      {
        q: "What do you need from us to start?",
        a: "The written spec: catchment, carpet area range, frontage, power, parking, loading, any distance rules from existing outlets, and the timeline. The tighter the brief, the faster the shortlist, and the fewer sites you have to look at.",
      },
      {
        q: "Can you find space for a quick-commerce dark store?",
        a: "Yes, and for these the first filter is always loading and delivery access rather than area or rent. A unit with good numbers and a bad approach fails in operation, so we screen on access before anything else.",
      },
      {
        q: "Do you handle the lease negotiation as well as the search?",
        a: "Yes. Finding the site and agreeing the terms are the same job. We negotiate rent, escalation, lock-in, fit-out period and the rest, and we work both sides of this market regularly enough to know what is actually achievable.",
      },
    ],
    related: [
      { href: "/services/commercial-leasing-noida", label: "Commercial leasing in Noida", note: "The wider lease market" },
      { href: "/sectors/sector-132-noida", label: "Sector 132", note: "Corporate towers and high street" },
      { href: "/sectors/sector-144-noida", label: "Sector 144", note: "Business parks and the cafe lane" },
      { href: "/property-dealer-noida-expressway", label: "Property dealer on the Noida Expressway", note: "The corridor, end to end" },
      { href: "/contact", label: "Send us the brief", note: "CM-52, Sector 144" },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

/** Which live listings, if any, belong on a given service page. */
export const SERVICE_LISTING_FILTER: Record<string, { propertyType?: string; purpose?: string }> = {
  "buy-property-noida": { purpose: "SALE" },
  "residential-renting-noida": { purpose: "RENT" },
  "commercial-leasing-noida": { purpose: "LEASE" },
  "cafe-restaurant-spaces-noida": { propertyType: "CAFE_RESTAURANT" },
  "industrial-spaces-noida": { propertyType: "INDUSTRIAL" },
  "pg-spaces-noida": { propertyType: "PG" },
};
