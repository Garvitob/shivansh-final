import type { QaBlock, Faq, RelatedLink, Row } from "@/lib/sectors";

export type Combo = {
  /** Top-level route segment. */
  slug: string;
  /** Focus sector number, when the page is about one. Drives the listings strip. */
  sectorNum?: string;
  /** Property type filter for the conditional listings strip. */
  listingType?: string;
  crumbName: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  lede: string;
  image: string;
  imageAlt: string;
  credit: string;
  bandCaption: string;
  sideHeading: string;
  sideNote: string;
  body: string[];
  rowsHeading: string;
  rows: Row[];
  qas: QaBlock[];
  faqs: Faq[];
  related: RelatedLink[];
  formSector: string;
  formPropertyType: string;
  formWant: string;
};

export const COMBOS: Combo[] = [
  /* ----------------------------------------------- cafe space, sector 144 */
  {
    slug: "cafe-restaurant-space-sector-144-noida",
    sectorNum: "144",
    listingType: "CAFE_RESTAURANT",
    crumbName: "Cafe space in Sector 144",
    metaTitle: "Cafe Space in Sector 144 Noida",
    metaDescription:
      "Cafe and restaurant space in Sector 144, Noida — Roastery Street and around it. Most of the lane found their unit through us. End to end, to opening day.",
    eyebrow: "Sector 144 · Cafes & restaurants",
    h1: "Cafe and restaurant space in Sector 144",
    lede: "Roastery Street is the reason people drive to Sector 144 in the evening. Most of the cafes on it found their space through us, and our office is on the same sector.",
    image: "/images/sector-144-noida.jpg",
    imageAlt: "Modern buildings and a wide road in Noida",
    credit: "Shivansh Singh",
    bandCaption: "Sector 144 — the cafe lane, the business parks, and our office.",
    sideHeading: "The lane, and why it works",
    sideNote: "Weekday footfall from the parks, evening footfall from all of Noida.",
    body: [
      "Sector 144 has an unusual combination for a food operator. During the working day the Embassy business parks put a large population inside the sector — Embassy Oxygen alone is a roughly 3.3 million square foot IT and ITES SEZ, with NSL Techzone alongside it. In the evening, Roastery Street pulls people in from other parts of Noida who are coming specifically to eat and drink.",
      "That means a unit here can trade twice in a day, on two different customer bases, which very few locations in Noida manage. It also means the two halves want different things: the weekday crowd wants speed and a decent lunch, the evening crowd wants somewhere to sit for two hours.",
      "Not every unit on or near the lane is equal. Frontage and visibility from the approach matter enormously in a destination lane where people are choosing between neighbours in ten seconds. So does where customers can actually stop. And practically, you need a workable route for kitchen exhaust, enough power for your equipment, and water and drainage that suit a commercial kitchen. A beautiful unit that cannot vent a kitchen is not a cafe.",
      "Because we work from CM-52 in this sector, we usually hear about a unit coming free before it is formally on the market. On a lane where good units rarely sit vacant, that head start is the practical reason to talk to us early rather than when you are ready.",
      "We stay with a cafe project through to opening day. The gap between signing a lease and serving a first customer is where new operators lose the most time and money, and we have walked that stretch enough times to see the problems coming.",
    ],
    rowsHeading: "What we check before you sign",
    rows: [
      { h: "Frontage and approach", p: "In a destination lane people choose in ten seconds. Visibility is not a nice-to-have.", tag: "Position" },
      { h: "Kitchen exhaust route", p: "Where the extraction actually goes. This kills more cafe deals than rent does.", tag: "Physical" },
      { h: "Power, water, drainage", p: "Commercial kitchen loads, not domestic ones. Confirmed before you commit.", tag: "Physical" },
      { h: "Permission to serve food", p: "Whether the building and the permitted use genuinely allow it.", tag: "Compliance" },
      { h: "Rent-free fit-out time", p: "The most negotiable term in food service, and the one worth the most to you.", tag: "Terms" },
    ],
    qas: [
      {
        q: "How do I get a cafe space on Roastery Street?",
        answer:
          "Units on the lane rarely sit vacant, so the practical route is to be known to someone working the sector before a unit comes free rather than after. Tell us your concept, your area requirement and your budget, and we will call you when something suitable comes up.",
        detail: [
          "It also helps to be flexible on exactly where. A strong unit a little off the main lane, with good approach and parking, often outperforms a cramped one in the middle of it.",
        ],
      },
      {
        q: "What does a cafe space in Sector 144 cost?",
        answer:
          "Rent depends on the unit, the frontage, the floor and the exact position relative to the lane, and it moves. What matters more for your budget is the total: rent plus maintenance, plus the fit-out you pay for while not yet trading. We will lay out all three.",
      },
    ],
    faqs: [
      {
        q: "What is Roastery Street?",
        a: "It is the cafe lane in Sector 144, Noida, and a destination in its own right — people come from other sectors specifically to eat and drink there. Most of the cafes on it found their space through us, which is the work we are best known for.",
      },
      {
        q: "Can you help with the whole cafe setup, not just the space?",
        a: "On the property side, yes, end to end — finding the unit, checking it physically works for a kitchen, negotiating the lease and fit-out window, and staying with the project through to opening day. We are not contractors, but we know the sequence.",
      },
      {
        q: "Is Sector 144 better than other Noida sectors for a cafe?",
        a: "For a destination format with evening trade, it is the strongest lane on this corridor. For a purely office-led lunch format, Sector 132 with its retail street under the towers can work just as well and often costs less.",
      },
      {
        q: "How much space do I need for a cafe?",
        a: "It depends entirely on the format — a coffee-led counter operation needs a fraction of what a full-menu restaurant with a proper kitchen needs. Tell us the concept and the covers you want, and we will translate that into a realistic area.",
      },
    ],
    related: [
      { href: "/services/cafe-restaurant-spaces-noida", label: "Cafe and restaurant spaces", note: "How we run these projects" },
      { href: "/guides/open-cafe-restaurant-noida", label: "Opening a cafe in Noida", note: "The process, plainly" },
      { href: "/sectors/sector-144-noida", label: "Sector 144", note: "The whole sector" },
      { href: "/office-space-sector-144-noida", label: "Office space in Sector 144", note: "The parks that supply the footfall" },
      { href: "/guides/commercial-lease-basics", label: "Commercial lease basics", note: "Terms worth arguing about" },
    ],
    formSector: "Sector 144",
    formPropertyType: "Cafe / restaurant",
    formWant: "LEASE",
  },

  /* --------------------------------------------- office space, sector 135 */
  {
    slug: "office-space-sector-135-noida",
    sectorNum: "135",
    listingType: "OFFICE",
    crumbName: "Office space in Sector 135",
    metaTitle: "Office Space in Sector 135 Noida",
    metaDescription:
      "Office space in Sector 135, Noida — Candor TechSpace, Stellar IT Park, Assotech Business Cresterra, GM IT Park and Logix. Suites through to full floors.",
    eyebrow: "Sector 135 · Offices",
    h1: "Office space in Sector 135",
    lede: "The largest concentration of IT-park space on this stretch of the Expressway, and a sector where your staff can actually find housing nearby.",
    image: "/images/sector-135-noida.jpg",
    imageAlt: "Glass-fronted office buildings in Noida",
    credit: "Chaitanya Maheshwari",
    bandCaption: "Sector 135 — the IT-park belt of the Noida Expressway.",
    sideHeading: "Campus or independent building",
    sideNote: "Two different products at two different prices. Pick deliberately.",
    body: [
      "Sector 135 is defined by Candor TechSpace, the Brookfield-owned campus whose tenants have included TCS, Cognizant, Genpact, Samsung and KPMG. Around it sit Assotech Business Cresterra, Stellar IT Park, GM IT Park and Logix space. Between them the sector covers most office requirements from a small fitted suite up to large floors.",
      "The first decision is campus or independent building, and they are genuinely different products. A campus gives you managed facilities, security, cafeteria arrangements and a certain address, usually with a longer commitment and a higher all-in cost. An independent building is cheaper and more flexible, but more of the day-to-day falls on you.",
      "The second thing to get right is the total cost rather than the headline rate. Maintenance is frequently quoted separately, and the difference between the rent you were told and the amount that leaves your account each month can be substantial. Ask for the all-in figure per square foot and compare buildings on that.",
      "What makes 135 practical rather than merely large is the housing. This is a real residential sector as well as an office one — villas, high-rise societies and plotted development — so staff can live within a short commute. That is not true of every commercial sector on the corridor, and it shows up in how easily you can recruit and retain.",
      "Metro is at the 142 and 137 stations rather than in the sector itself, so if a meaningful share of your team commutes by metro, check the walk from station to building before you commit to a specific address.",
      "We work both sides here — landlords with floors and companies needing them — so when we tell you a term is achievable, it is because we negotiate against it regularly.",
    ],
    rowsHeading: "What we cover in 135",
    rows: [
      { h: "Campus space", p: "Candor TechSpace and the larger parks. Managed, secure, longer commitment.", tag: "Lease" },
      { h: "Independent buildings", p: "Stellar, GM, Assotech Business Cresterra, Logix. Cheaper, more flexible, more on you.", tag: "Lease" },
      { h: "Fitted suites", p: "For teams not ready for a floor. A half-empty floor is an expensive statement.", tag: "Lease" },
      { h: "The all-in number", p: "Rent plus maintenance plus what the quote excludes. Compare buildings on that.", tag: "Terms" },
      { h: "For landlords", p: "Filling floors with tenants who stay. A void costs more than a fair rent.", tag: "Landlords" },
    ],
    qas: [
      {
        q: "How much does office space cost in Sector 135, Noida?",
        answer:
          "Rates vary by building, floor, whether the space is fitted, and how much of it you take. The number worth comparing is the all-in cost per square foot including maintenance, because quoted rents often exclude it. Call us with your headcount and we will give current figures.",
        detail: [
          "Terms move real money too. Escalation, lock-in and the rent-free fit-out window can matter more over a five year lease than a small difference in headline rate.",
        ],
      },
      {
        q: "Which is the best office building in Sector 135?",
        answer:
          "There is no single best — it depends on what you need. Candor TechSpace is the flagship campus with managed facilities. Stellar, GM, Assotech Business Cresterra and Logix offer different specifications at different price points. Headcount and budget narrow it fast.",
      },
    ],
    faqs: [
      {
        q: "Which companies are in Sector 135?",
        a: "Candor TechSpace has hosted tenants including TCS, Cognizant, Genpact, Samsung and KPMG. Occupier lists change, so treat that as an indication of the calibre of the sector's office stock rather than a current roster.",
      },
      {
        q: "Is there a metro station in Sector 135?",
        a: "Not within the sector. The nearest stations are at 142 and 137. If a good part of your team commutes by metro, check the actual walk from the station to the specific building before you sign for it.",
      },
      {
        q: "Can I take a small office in Sector 135?",
        a: "Yes. Alongside the large floors there are fitted suites and smaller units across the sector's buildings. Taking a floor you cannot fill is an expensive way to look established, so tell us the real headcount.",
      },
      {
        q: "Can staff find housing near Sector 135?",
        a: "Yes, and it is one of the sector's genuine advantages. 135 has villas, high-rise societies and plotted housing within the same sector boundary, plus rental stock in neighbouring sectors along the corridor.",
      },
    ],
    related: [
      { href: "/services/commercial-leasing-noida", label: "Commercial leasing in Noida", note: "How the lease process runs" },
      { href: "/sectors/sector-135-noida", label: "Sector 135", note: "The whole sector" },
      { href: "/office-space-sector-132-noida", label: "Office space in Sector 132", note: "Corporate towers instead" },
      { href: "/office-space-sector-144-noida", label: "Office space in Sector 144", note: "Embassy parks and SEZ" },
      { href: "/guides/commercial-lease-basics", label: "Commercial lease basics", note: "Terms worth arguing about" },
    ],
    formSector: "Sector 135",
    formPropertyType: "Office",
    formWant: "LEASE",
  },

  /* --------------------------------------------- office space, sector 144 */
  {
    slug: "office-space-sector-144-noida",
    sectorNum: "144",
    listingType: "OFFICE",
    crumbName: "Office space in Sector 144",
    metaTitle: "Office Space in Sector 144 Noida",
    metaDescription:
      "Office space in Sector 144, Noida — Embassy Oxygen Business Park and Embassy NSL Techzone, with a metro station in the sector and our office at CM-52.",
    eyebrow: "Sector 144 · Offices",
    h1: "Office space in Sector 144",
    lede: "Embassy Oxygen and NSL Techzone, a metro station inside the sector, and the head of the 144 to 150 IT corridor. Our own office is here too.",
    image: "/images/sector-144-noida.jpg",
    imageAlt: "Modern buildings and a wide road in Noida",
    credit: "Shivansh Singh",
    bandCaption: "Sector 144 — business parks, a metro station, and the cafe lane.",
    sideHeading: "SEZ, and whether it suits you",
    sideNote: "A large part of 144's office stock sits inside an SEZ. That is not right for everyone.",
    body: [
      "Sector 144's office market is anchored by Embassy Oxygen Business Park — an IT and ITES SEZ of roughly 3.3 million square feet carrying a Platinum certification — with Embassy NSL Techzone alongside it. That is a serious quantity of Grade-A space in one sector.",
      "The first question for any company looking here is whether an SEZ unit fits the business at all. SEZ space comes with its own regime and its own compliance, and it is genuinely excellent for operations that fit it and a poor idea for those that do not. We will give you a straight answer on that before we take you round anything, because it is not a decision to reverse later.",
      "Beyond the SEZ question, 144 has practical advantages that matter day to day. There is a metro station inside the sector on the Aqua Line, which widens the pool of staff who can reach you without a car. Sector 145 is one stop away, and the sector sits at the head of the emerging IT corridor running through to 150.",
      "Then there is the thing nobody puts in a brochure: your people have to eat. Roastery Street is in this sector. For a company weighing two otherwise similar buildings, a cafe lane within walking distance is worth more to staff than most of the amenities in the specification.",
      "We are at CM-52 in this sector. That means we hear about floors coming free here early, and it means we can walk you round the same day rather than schedule you for next week.",
    ],
    rowsHeading: "What we handle in 144",
    rows: [
      { h: "Embassy Oxygen and NSL Techzone", p: "Grade-A park space, SEZ and otherwise, from suites to large floors.", tag: "Lease" },
      { h: "The SEZ question", p: "A straight answer on whether your operation actually fits an SEZ, before you look.", tag: "First" },
      { h: "Commercial space around the parks", p: "Non-SEZ options in and near the sector for businesses that do not fit one.", tag: "Lease" },
      { h: "Retail and food units", p: "The other half of this sector. Same corridor, very different maths.", tag: "Lease" },
    ],
    qas: [
      {
        q: "What is Embassy Oxygen Business Park?",
        answer:
          "It is a large IT and ITES SEZ in Sector 144, Noida, of around 3.3 million square feet, with a Platinum certification. Together with Embassy NSL Techzone it accounts for most of the sector's Grade-A office stock and much of its daytime working population.",
      },
      {
        q: "Should my company take SEZ space in Sector 144?",
        answer:
          "Only if your business model fits the SEZ regime, which carries its own compliance requirements. It suits export-oriented and qualifying IT operations well and is an unnecessary burden for businesses that do not qualify. Get that answer before you start viewing space.",
        detail: [
          "If an SEZ is not right, there is non-SEZ commercial space in and around the sector, and the office belt at 132 and 135 is a short run down the corridor.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does Sector 144 have a metro station?",
        a: "Yes, the sector has its own station on the Aqua Line, with Sector 145 one stop away. For an employer that widens the pool of staff who can commute without a car, which is a practical recruiting advantage.",
      },
      {
        q: "Is there anywhere for staff to eat near Sector 144 offices?",
        a: "Roastery Street, the sector's cafe lane, is in Sector 144 itself. It is a genuine destination in the evening and a working lunch option during the day, and it is one of the sector's underrated advantages for employers.",
      },
      {
        q: "How big are the office floors available in Sector 144?",
        a: "They range from smaller fitted suites up to large floor plates inside the Embassy parks. What is actually free changes constantly, so the useful answer is a current one — call us and we will tell you what is available now.",
      },
      {
        q: "Where is your office in Sector 144?",
        a: "CM-52, Sector 144, Noida, Uttar Pradesh 201306, inside the sector itself. Being here is why we usually know about a floor coming free before it is formally marketed, and why we can show you space the same day.",
      },
    ],
    related: [
      { href: "/sectors/sector-144-noida", label: "Sector 144", note: "The whole sector" },
      { href: "/services/commercial-leasing-noida", label: "Commercial leasing in Noida", note: "How the lease process runs" },
      { href: "/cafe-restaurant-space-sector-144-noida", label: "Cafe space in Sector 144", note: "The other half of the sector" },
      { href: "/office-space-sector-135-noida", label: "Office space in Sector 135", note: "The IT campus belt" },
      { href: "/services/corporate-brand-requirements-noida", label: "Corporate requirements", note: "If you are working to a spec" },
    ],
    formSector: "Sector 144",
    formPropertyType: "Office",
    formWant: "LEASE",
  },

  /* --------------------------------------------- office space, sector 132 */
  {
    slug: "office-space-sector-132-noida",
    sectorNum: "132",
    listingType: "OFFICE",
    crumbName: "Office space in Sector 132",
    metaTitle: "Office Space in Sector 132 Noida",
    metaDescription:
      "Office space in Sector 132, Noida — Express Trade Tower 2, Matrix Tower, Logix Technova and the Digital Park block with Grand Street retail underneath.",
    eyebrow: "Sector 132 · Offices",
    h1: "Office space in Sector 132",
    lede: "Corporate towers with a retail street underneath them. If you want a tower floor rather than a campus, this is the sector.",
    image: "/images/sector-132-noida.jpg",
    imageAlt: "Commercial office buildings in Noida",
    credit: "Vinit Kumar Singh",
    bandCaption: "Sector 132 — corporate towers and high-street retail on the Expressway.",
    sideHeading: "Tower floors, not campuses",
    sideNote: "A different product from 135, with retail on your doorstep.",
    body: [
      "Sector 132's office stock is tower-shaped rather than campus-shaped. Express Trade Tower 2, Matrix Tower and Logix Technova are the established names, and the Digital Park development adds a large Grade-A block — around 1.3 million square feet including the Grand Street retail alongside it.",
      "That combination is the sector's real selling point for an employer. Retail and food sitting directly under and beside the offices means your team can get lunch, run an errand and get a coffee without leaving the sector. Over a working year that convenience is worth more than most of the amenities listed in a building specification.",
      "For companies choosing between 132 and 135, the honest framing is this: 135 is where you go for a large IT campus address and managed facilities; 132 is where you go for a corporate tower floor with a high street underneath. Neither is better. They suit different organisations.",
      "The usual cautions apply on terms. Confirm what the quoted rate excludes, because maintenance is often separate and changes the real monthly figure. Then look hard at escalation, lock-in and the rent-free fit-out window, which between them move far more money over a lease than a small difference in headline rent does.",
      "We work both the office side and the retail side of this sector, which means we see it from both directions — including which floors are quietly coming free before they are formally marketed.",
    ],
    rowsHeading: "What we cover in 132",
    rows: [
      { h: "Tower floors", p: "Express Trade Tower 2, Matrix Tower, Logix Technova and the Digital Park block.", tag: "Lease" },
      { h: "Smaller suites", p: "For teams that do not need a full floor yet, in the same buildings.", tag: "Lease" },
      { h: "Retail underneath", p: "Grand Street and the retail around it. Useful to staff, and a business in its own right.", tag: "Lease · Sale" },
      { h: "Terms, properly read", p: "What the rate excludes, escalation, lock-in, fit-out window.", tag: "Terms" },
    ],
    qas: [
      {
        q: "What is Digital Park in Sector 132?",
        answer:
          "It is a large Grade-A office development in Sector 132, Noida, of around 1.3 million square feet, with the Grand Street retail component alongside it. It is the biggest single block of modern office space in the sector and it brings retail directly to the office population.",
      },
      {
        q: "Should I take office space in Sector 132 or Sector 135?",
        answer:
          "Take 132 if you want a corporate tower floor with retail and food underneath. Take 135 if you want a large managed IT campus with facilities included. Both sit on the Expressway within a short run of each other, so the choice is about format rather than location.",
      },
    ],
    faqs: [
      {
        q: "Which are the main office buildings in Sector 132?",
        a: "Express Trade Tower 2, Matrix Tower and Logix Technova, plus the Digital Park development with Grand Street. Between them the sector covers most requirements from a smaller suite up to substantial floor plates.",
      },
      {
        q: "Is Sector 132 good for a smaller company?",
        a: "It can be. Alongside the large floor plates there are smaller suites in the same towers, and having retail and food underneath means a small team is not stranded in a purely corporate block at lunchtime.",
      },
      {
        q: "Does the quoted rent include maintenance?",
        a: "Frequently not, and this is where budgets go wrong. Always ask for the all-in figure per square foot including maintenance, and compare buildings on that number rather than on the headline rate you were first quoted.",
      },
      {
        q: "Do you handle retail space in Sector 132 as well?",
        a: "Yes. The shops and high-street retail in this sector are a separate market with their own economics, driven by weekday office footfall. We have a dedicated page for that side of the sector.",
      },
    ],
    related: [
      { href: "/shops-retail-sector-132-noida", label: "Shops and retail in Sector 132", note: "The high-street side" },
      { href: "/sectors/sector-132-noida", label: "Sector 132", note: "The whole sector" },
      { href: "/services/commercial-leasing-noida", label: "Commercial leasing in Noida", note: "How the lease process runs" },
      { href: "/office-space-sector-135-noida", label: "Office space in Sector 135", note: "Campus space instead" },
      { href: "/guides/commercial-lease-basics", label: "Commercial lease basics", note: "Terms worth arguing about" },
    ],
    formSector: "Sector 132",
    formPropertyType: "Office",
    formWant: "LEASE",
  },

  /* ------------------------------------------------ kothis/plots, sec 105 */
  {
    slug: "kothi-plots-sector-105-noida",
    sectorNum: "105",
    listingType: "KOTHI",
    crumbName: "Kothis and plots in Sector 105",
    metaTitle: "Kothis & Plots in Sector 105 Noida",
    metaDescription:
      "Kothis, villas and plots for sale in Sector 105, Noida. A premium plotted belt where the land carries the value — honest rates and quiet listings.",
    eyebrow: "Sector 105 · Kothis & plots",
    h1: "Kothis and plots in Sector 105",
    lede: "In a plotted sector you are buying land with a house on it, not a house with land under it. Getting that the right way round is most of the negotiation.",
    image: "/images/sector-105-noida.jpg",
    imageAlt: "Independent houses on a residential street in Noida",
    credit: "Pankaj Kumar",
    bandCaption: "Sector 105 — plotted land, independent houses, very little new supply.",
    sideHeading: "How to price a kothi",
    sideNote: "Plot size, road width, corner or not. Then the house.",
    body: [
      "Buyers who come to Sector 105 from a flat background often price a kothi the way they would price an apartment — by built-up area and finishes. In a plotted sector that is the wrong order. The plot carries most of the value, and the house sitting on it is a depreciating structure that can be replaced.",
      "So the questions that actually move the number are plot size, the width of the road it faces, whether it is a corner, and which way it faces. Two kothis with identical built-up area can differ substantially in price on those factors alone. Finishes matter far less than most sellers believe.",
      "This is a genuinely premium belt. Land rates in 105 are high and have stayed high, helped by the sector's proximity to the Expressway and the 100, 104 and 108 belt, and reinforced by ultra-luxury launches in and around it such as Max Estate 105. Those launches matter to resale sellers too, because they change the type of buyer looking at this belt.",
      "Typical stock is three to five bedroom kothis, some whole, some divided into independent floors that can be let separately. Bare plots come up as well, and there is a third route people forget: an older kothi on a good plot, bought for the land and rebuilt.",
      "Because owners here mostly live in their houses, stock is thin and much of it moves privately. A family decides to sell and calls a dealer they already know rather than putting up a board. That is the honest reason to be in touch with us before you are ready rather than after.",
    ],
    rowsHeading: "What we do in this belt",
    rows: [
      { h: "Whole kothis", p: "Three to five bedrooms. Priced on the plot first, the house second.", tag: "Buy · Sell" },
      { h: "Independent floors", p: "Floors in a kothi, bought to live in or let. A different buyer from a whole-house buyer.", tag: "Buy · Rent" },
      { h: "Bare plots", p: "For people who want to build to their own plan. Road width and orientation set the price.", tag: "Buy · Sell" },
      { h: "Rebuild candidates", p: "An old house on a good plot. Often the cleanest way into a premium belt.", tag: "Buy" },
    ],
    qas: [
      {
        q: "What should I check before buying a kothi in Sector 105?",
        answer:
          "The plot first — size, road width, corner or not, and the boundary on the ground against the boundary on the paper. Then the title chain, the mutation record and any dues. The condition of the house matters least, because it can be repaired or replaced.",
        detail: [
          "On plotted property the physical boundary check is not a formality. Encroachments and mismatches between paper and ground are the single most common problem we find in this belt.",
        ],
      },
      {
        q: "Are Sector 105 kothis a good investment?",
        answer:
          "Land in a premium plotted belt near the Expressway has held its value well, and the supply of it cannot grow. The trade-off is liquidity: owners mostly live here, stock is thin, and selling takes longer than a society flat would. Buy it to hold.",
      },
    ],
    faqs: [
      {
        q: "How big are kothis in Sector 105?",
        a: "Three to five bedrooms is the common range, either as a whole house or split into independent floors. Plot sizes vary block to block, and since the plot carries most of the value, that is the first number to ask about.",
      },
      {
        q: "Can I buy a plot and build my own house in Sector 105?",
        a: "Yes, plots do come up. Before you commit, check the land papers and the applicable building rules, because those decide what you can actually put up. We check both before recommending a plot to anyone.",
      },
      {
        q: "Why are so few Sector 105 properties advertised?",
        a: "Because in plotted sectors owners live in their houses and sell rarely. When they do, most call a dealer they know rather than advertise. That is why a lot of the good stock in this belt never appears on a portal at all.",
      },
      {
        q: "Is Sector 105 or Sector 108 better for a kothi?",
        a: "105 is more purely a premium plotted belt. 108 has the same kind of plotted stock plus established societies like Parx Laureate and Divine Meadows. If you want only land and houses, 105. If you want the option of a gated flat nearby, 108.",
      },
    ],
    related: [
      { href: "/sectors/sector-105-noida", label: "Sector 105", note: "The whole sector" },
      { href: "/kothi-plots-sector-108-noida", label: "Kothis and plots in Sector 108", note: "The other half of the belt" },
      { href: "/services/buy-property-noida", label: "Buying property in Noida", note: "How we work the buy side" },
      { href: "/guides/verify-property-documents-up", label: "Verifying property documents", note: "Critical on plotted property" },
      { href: "/guides/circle-rates-noida", label: "Circle rates in Noida", note: "The floor under your deal" },
    ],
    formSector: "Sector 105",
    formPropertyType: "Kothi",
    formWant: "BUY",
  },

  /* ------------------------------------------------ kothis/plots, sec 108 */
  {
    slug: "kothi-plots-sector-108-noida",
    sectorNum: "108",
    listingType: "KOTHI",
    crumbName: "Kothis and plots in Sector 108",
    metaTitle: "Kothis & Plots in Sector 108 Noida",
    metaDescription:
      "Kothis, villas, duplexes and plots in Sector 108, Noida, plus society flats in Parx Laureate and Divine Meadows. Two markets in one sector.",
    eyebrow: "Sector 108 · Kothis & plots",
    h1: "Kothis, villas and plots in Sector 108",
    lede: "Sector 108 runs two property markets at once — plotted houses on one side, established societies on the other. Knowing which one your buyer is choosing between changes how you price.",
    image: "/images/sector-108-noida.jpg",
    imageAlt: "Low-rise residential housing in Noida",
    credit: "Ronit Singh",
    bandCaption: "Sector 108 — plotted houses alongside two established societies.",
    sideHeading: "Two buyers, one sector",
    sideNote: "A duplex here competes with a society flat, not only with other duplexes.",
    body: [
      "The plotted side of Sector 108 works like its neighbour 105 — kothis, villas, duplexes and bare plots, priced primarily on the land. D-block is the part of the sector asked for by name most often, and that demand shows up both in the rates and in how quickly good stock there disappears.",
      "The difference is that 108 also has established society stock. Parx Laureate and Divine Meadows bring in a buyer who wants a gated building with maintenance handled rather than a house to run. So the sector serves two quite different people, and the two markets price independently.",
      "For a seller that matters more than it sounds. If you are selling a duplex here, your buyer is often weighing it against a three bedroom flat in one of the societies, not only against the duplex two streets over. The pitch — space and independence versus security and services — has to be made deliberately.",
      "For a buyer, having both options inside one sector is genuinely useful. You can compare the two ways of living in the same location, on the same day, and decide which you actually want rather than which you assumed you wanted.",
      "The document work on the plotted side is where care is needed. Title chain, mutation, dues, and the boundary on the ground checked against the boundary on the paper. We do that before recommending anything, and we have walked away from plots that did not check out.",
    ],
    rowsHeading: "What we handle in 108",
    rows: [
      { h: "Villas and duplexes", p: "Across the plotted blocks, including the parts of the sector asked for by name.", tag: "Buy · Sell" },
      { h: "Plots", p: "Land to build on. Size, road width and orientation set the price more than anything else.", tag: "Buy · Sell" },
      { h: "Society flats", p: "Parx Laureate and Divine Meadows — resale and rentals, maintenance handled.", tag: "Buy · Rent" },
      { h: "Letting a floor", p: "Independent floors let well here to families who want room without society rules.", tag: "Owners · Tenants" },
    ],
    qas: [
      {
        q: "Should I buy a plotted house or a society flat in Sector 108?",
        answer:
          "A plotted house gives you land, space and freedom to build, and you manage everything yourself. A society flat in Parx Laureate or Divine Meadows gives you security, lifts, power backup and maintenance handled. Sector 108 is unusual in offering both in one place.",
        detail: [
          "See one of each on the same day. The comparison is much clearer in person than on paper, and it is the fastest way to find out which you actually want.",
        ],
      },
      {
        q: "Why is D-block in Sector 108 in demand?",
        answer:
          "It has held steadier demand than the sector average, which keeps rates there firmer and stock thinner. Practically that means when something good comes up in D-block you need to be ready to move rather than think about it for a fortnight.",
      },
    ],
    faqs: [
      {
        q: "What kind of property is available in Sector 108?",
        a: "Kothis, villas, duplexes and bare plots on the plotted side, plus society flats in Parx Laureate and Divine Meadows. That mix is what makes the sector suit two quite different kinds of buyer at the same time.",
      },
      {
        q: "Can I build on a plot in Sector 108?",
        a: "Yes, plots do come up. What you can build is set by the land papers and the applicable rules rather than by the plot's physical size, so check that position before buying rather than after.",
      },
      {
        q: "Do you handle rentals in Sector 108?",
        a: "Yes, both sides. Independent floors in kothis let well to families who want space without society rules, and the societies have their own rental market. We act for owners and for tenants.",
      },
      {
        q: "How does Sector 108 compare with Sector 105?",
        a: "They are close cousins. 105 is more purely a premium plotted belt with higher land rates. 108 has the same plotted stock plus established societies, which gives it a second market and a wider range of buyers.",
      },
    ],
    related: [
      { href: "/sectors/sector-108-noida", label: "Sector 108", note: "The whole sector" },
      { href: "/kothi-plots-sector-105-noida", label: "Kothis and plots in Sector 105", note: "The other half of the belt" },
      { href: "/services/buy-property-noida", label: "Buying property in Noida", note: "How we work the buy side" },
      { href: "/services/residential-renting-noida", label: "Residential renting", note: "Letting a floor or a flat" },
      { href: "/guides/leasehold-freehold-noida-authority-transfer", label: "Leasehold, freehold and Authority transfer", note: "Matters on plotted property" },
    ],
    formSector: "Sector 108",
    formPropertyType: "Kothi",
    formWant: "BUY",
  },

  /* -------------------------------------------------------- flats, sec 143 */
  {
    slug: "flats-sector-143-noida",
    sectorNum: "143",
    listingType: "FLAT",
    crumbName: "Flats in Sector 143",
    metaTitle: "Flats in Sector 143 Noida",
    metaDescription:
      "Flats to buy and rent in Sector 143, Noida — Logix Blossom Zest and Greens, Gulshan Ikebana, Sikka Kaamna Greens, Victory Ace and Saha Amadeus.",
    eyebrow: "Sector 143 · Flats",
    h1: "Flats in Sector 143",
    lede: "A stack of established societies at genuinely different price points, with a metro station inside the sector. This is the deepest flat market on our stretch of the corridor.",
    image: "/images/sector-143-noida.jpg",
    imageAlt: "Residential high-rise towers in Noida",
    credit: "Shantanu Goyal",
    bandCaption: "Sector 143 — societies with a metro station in the sector itself.",
    sideHeading: "Which society, and why",
    sideNote: "Same sector, very different buildings. Visit two at the same hour.",
    body: [
      "Sector 143's flat stock sits mostly across a handful of societies: Logix Blossom Zest and Logix Blossom Greens, Gulshan Ikebana, Sikka Kaamna Greens, Victory Ace and Saha Amadeus. They cover a real spread of budgets, which is why the sector suits so many different buyers.",
      "The sector's structural advantage is its own Aqua Line metro station. A station inside the sector, rather than one or two sectors away, is one of the few features that reliably supports both rent and resale over time. It also widens your tenant pool to people who commute without a car, which is a larger group than owners tend to assume.",
      "Add DLF Techpark in adjacent 143A and both Expressway and FNG access, and residents have three genuinely different ways out of the sector. For a rental owner that translates directly into shorter void periods.",
      "Choosing between societies is where most buyers need help. Visit at least two at the same time of day — a society feels completely different at eight on a weekday evening than on a Sunday morning, and that difference tells you who actually lives there. Then ask about maintenance charges and the state of the sinking fund. A cheap flat in a badly run society is not cheap.",
      "Prices here have risen notably in recent years. If you are selling, that has been good news. If you are buying, judge any asking price against what has actually registered in the same tower rather than against a headline about the sector, because asking prices in a risen market run ahead of reality more than usual.",
    ],
    rowsHeading: "What we do in 143",
    rows: [
      { h: "Buying a flat", p: "Across the main societies, priced against registered comparables in the same tower.", tag: "Buy" },
      { h: "Selling in a risen market", p: "An honest number and a realistic timeline, rather than an ambitious ask that goes stale.", tag: "Sell" },
      { h: "Renting out", p: "A deep tenant pool fed by the metro, the Expressway and DLF Techpark in 143A.", tag: "Owners" },
      { h: "Finding a home", p: "For tenants who want a metro on the doorstep and a society that is actually well run.", tag: "Tenants" },
    ],
    qas: [
      {
        q: "Which society in Sector 143 should I buy in?",
        answer:
          "It depends on budget and how much you use amenities. Logix Blossom Zest and Greens, Gulshan Ikebana, Sikka Kaamna Greens, Victory Ace and Saha Amadeus sit at different price points with different maintenance standards. Visit two at the same hour before deciding.",
        detail: [
          "Ask about maintenance charges and the sinking fund in each. A well-run society with slightly higher maintenance usually costs less over five years than a cheap one that defers everything.",
        ],
      },
      {
        q: "Is it too late to buy in Sector 143?",
        answer:
          "Prices have risen strongly, so the easy gains are behind. What remains is a sector with a metro station, three routes out and a deep rental market — solid fundamentals rather than a bargain. Buy on the fundamentals and negotiate against registered prices, not asking ones.",
      },
    ],
    faqs: [
      {
        q: "What flats are available in Sector 143, Noida?",
        a: "Mostly resale across the main societies — Logix Blossom Zest and Greens, Gulshan Ikebana, Sikka Kaamna Greens, Victory Ace and Saha Amadeus. Sizes and price points vary widely, so tell us your budget and we will narrow it to the right buildings.",
      },
      {
        q: "Does Sector 143 have a metro station?",
        a: "Yes, its own station on the Aqua Line. That is a meaningful support for both rental demand and resale value, and it is one of the main reasons the sector's flat market is deeper than its neighbours'.",
      },
      {
        q: "Is Sector 143 good for rental income?",
        a: "It is one of the better sectors on this corridor for it. The metro station, Expressway and FNG access, and DLF Techpark in adjacent 143A between them keep the tenant pool deep, which means shorter gaps between tenants.",
      },
      {
        q: "How do I know I am not overpaying in Sector 143?",
        a: "Compare against what has registered in the same society and ideally the same tower, not against asking prices. In a market that has risen quickly, asking prices tend to run further ahead of closing prices than usual. Ask us for the real numbers.",
      },
    ],
    related: [
      { href: "/sectors/sector-143-noida", label: "Sector 143", note: "The whole sector" },
      { href: "/services/buy-property-noida", label: "Buying property in Noida", note: "How we work the buy side" },
      { href: "/services/residential-renting-noida", label: "Residential renting", note: "Owners and tenants" },
      { href: "/guides/rent-out-flat-noida", label: "Renting out a flat in Noida", note: "The process, step by step" },
      { href: "/sectors/sector-135-noida", label: "Sector 135", note: "Where many of the tenants work" },
    ],
    formSector: "Sector 143",
    formPropertyType: "Flat",
    formWant: "BUY",
  },

  /* --------------------------------------------------------- plots, sec 145 */
  {
    slug: "plots-sector-145-noida",
    sectorNum: "145",
    listingType: "PLOT_LAND",
    crumbName: "Plots in Sector 145",
    metaTitle: "Plots in Sector 145 Noida",
    metaDescription:
      "Abadi plots and land in Sector 145, Noida — the emerging SEZ side with a Microsoft allotment, its own metro station and one stop to Sector 144.",
    eyebrow: "Sector 145 · Plots",
    h1: "Plots in Sector 145",
    lede: "Affordable abadi land in a sector that has just acquired a serious commercial anchor. The opportunity is real and so is the paperwork risk.",
    image: "/images/sector-145-noida.jpg",
    imageAlt: "New construction and open land in Noida",
    credit: "Prashant",
    bandCaption: "Sector 145 — abadi plots alongside new launches, on the emerging SEZ side.",
    sideHeading: "Where the risk actually sits",
    sideNote: "Not in the location. In the ownership chain.",
    body: [
      "Sector 145 gives you something unusual: an affordable entry point into a sector with a major corporate allotment. Microsoft has been allotted a parcel of around 60,000 square metres here, the sector has its own metro station, and it is one stop from Sector 144 where our office is. Those are not promises about the future — they already exist.",
      "The affordable end of the market is abadi plots, which have been trading in a broad band of roughly ₹25 lakh up to about ₹1 crore depending on size and exact position. At the other end of the same sector are new ultra-luxury launches including M3M Jacob & Co. Two completely different buyers in one postcode is a sign that the market here has not settled yet, and unsettled markets are where value tends to sit.",
      "The risk in Sector 145 is not the location. It is the paperwork. Abadi land is in the older inhabited part of a village area rather than allotted by the Authority, and ownership chains on it are frequently less tidy. Title history, mutation records, and whether the boundary on the ground matches the boundary on the document all need proper checking.",
      "We do that work before we put a plot in front of anyone, and we have walked away from plots in this sector rather than pass a problem on to a buyer. If a chain of title cannot be established cleanly, no price makes it a good purchase.",
      "For buyers who want the corridor at a lower entry point and can be patient, this is one of the more sensible places on the Expressway to be looking right now — provided the checking is done properly.",
    ],
    rowsHeading: "How we handle plots here",
    rows: [
      { h: "Title chain first", p: "Before price, before viewing. If the chain does not establish cleanly, nothing else matters.", tag: "First" },
      { h: "Boundary on the ground", p: "Checked against the boundary on the paper. Mismatches here are common and expensive.", tag: "Critical" },
      { h: "Mutation and dues", p: "Records current, nothing outstanding sitting against the land.", tag: "Checks" },
      { h: "Honest pricing", p: "What comparable plots have actually changed hands for, not what is being asked.", tag: "Price" },
    ],
    qas: [
      {
        q: "What is an abadi plot and is it safe to buy?",
        answer:
          "An abadi plot is land in the older inhabited part of a village area rather than land allotted by the Authority. It is usually cheaper, and it is safe to buy only after the title chain, mutation record and physical boundary have been checked properly. The risk is documentary, not locational.",
        detail: [
          "Do not shortcut this because the price looks good. A clean abadi plot is a sound purchase; an unclear one is a problem you inherit permanently.",
        ],
      },
      {
        q: "Why is Sector 145 worth looking at now?",
        answer:
          "Because the infrastructure and the commercial anchor are already in place rather than promised. There is a metro station in the sector, it is one stop from 144, and a roughly 60,000 square metre Microsoft parcel signals that major occupiers take this stretch seriously.",
      },
    ],
    faqs: [
      {
        q: "How much do plots cost in Sector 145, Noida?",
        a: "Abadi plots have been trading in a wide band, roughly ₹25 lakh to about ₹1 crore, depending on size and exact location. New launch pricing sits far above that. Ask us for the current position before budgeting around either figure.",
      },
      {
        q: "Does Sector 145 have metro connectivity?",
        a: "Yes, the sector has its own station and it is one stop from Sector 144. Connectivity here is built rather than planned, which is a meaningful difference when you are buying into an area that is still developing.",
      },
      {
        q: "Can I build a house on an abadi plot?",
        a: "What you can build is governed by the applicable rules for that land, so confirm the position before you buy rather than after. This is one of the questions we settle during the document check, not something to work out later.",
      },
      {
        q: "Is Sector 145 better than Sector 151 for buying plots?",
        a: "145 is further along — it has a metro station, a major corporate allotment and an active plot market, so the wait is shorter. 151 is earlier and cheaper with a longer horizon. It comes down to how long your money can sit still.",
      },
    ],
    related: [
      { href: "/sectors/sector-145-noida", label: "Sector 145", note: "The whole sector" },
      { href: "/guides/verify-property-documents-up", label: "Verifying property documents in UP", note: "Essential on abadi land" },
      { href: "/sectors/sector-151-noida", label: "Sector 151", note: "Further out on the same frontier" },
      { href: "/services/buy-property-noida", label: "Buying property in Noida", note: "How we work the buy side" },
      { href: "/guides/circle-rates-noida", label: "Circle rates in Noida", note: "The floor under your deal" },
    ],
    formSector: "Sector 145",
    formPropertyType: "Plot / land",
    formWant: "BUY",
  },

  /* ------------------------------------------------------- shops, sec 132 */
  {
    slug: "shops-retail-sector-132-noida",
    sectorNum: "132",
    listingType: "SHOP",
    crumbName: "Shops and retail in Sector 132",
    metaTitle: "Shops & Retail in Sector 132 Noida",
    metaDescription:
      "Shop and retail units in Sector 132, Noida, including Grand Street beside the Digital Park offices. Weekday, office-led footfall — priced on that.",
    eyebrow: "Sector 132 · Shops & retail",
    h1: "Shops and retail in Sector 132",
    lede: "Retail here runs on the people working in the towers above and around it. That makes it a strong weekday location and a quiet weekend one — which suits some businesses and ruins others.",
    image: "/images/sector-132-noida.jpg",
    imageAlt: "Commercial office buildings in Noida",
    credit: "Vinit Kumar Singh",
    bandCaption: "Sector 132 — high-street retail sitting under the corporate towers.",
    sideHeading: "Read the footfall before the rent",
    sideNote: "Office-led retail. Monday to Friday is the business; Sunday is not.",
    body: [
      "Sector 132's retail exists because of its offices. Express Trade Tower 2, Matrix Tower, Logix Technova and the Digital Park block put a substantial working population into the sector every weekday, and Grand Street and the surrounding retail are built to catch them.",
      "That shapes everything about a business here. Your peak is weekday lunch and the hour after work. Your Sunday is quiet. For a quick-service format, a coffee counter, a chemist, a salon, a stationery or services business, that is a very good pattern — predictable, repeating, and made of the same faces week after week. For a weekend-destination format, it is the wrong sector and no amount of rent negotiation fixes it.",
      "Within the sector, position matters more than square footage. A unit on the main approach with clear visibility will out-trade a larger unit tucked around a corner, often by a lot. Before signing anything, stand outside the unit at 1pm on a Tuesday and count. That single hour tells you more than any projection.",
      "On terms, watch what the quoted rate excludes — maintenance is usually separate — and pay close attention to the fit-out period. If your format needs meaningful build-out, rent-free fit-out time is worth real money and is usually more negotiable than headline rent.",
      "We handle both the retail and the office side of this sector, and both leasing and sale. That matters because retail values here are driven by the office occupancy above them, and we can see both.",
    ],
    rowsHeading: "What we look at on a retail unit",
    rows: [
      { h: "Footfall pattern", p: "Weekday, office-led. Stand outside at 1pm on a Tuesday before you decide anything.", tag: "First" },
      { h: "Position and visibility", p: "Main approach beats larger-but-tucked-away, usually by a wide margin.", tag: "Position" },
      { h: "What the rate excludes", p: "Maintenance is normally separate. Compare units on the all-in number.", tag: "Terms" },
      { h: "Fit-out window", p: "Rent-free time to build. More negotiable than headline rent, and worth more.", tag: "Terms" },
      { h: "Buying rather than leasing", p: "Retail as an asset here is driven by the office occupancy above it.", tag: "Sale" },
    ],
    qas: [
      {
        q: "What kind of shop works in Sector 132, Noida?",
        answer:
          "Anything that trades on weekday office footfall — quick service food, coffee, chemists, salons, stationery and everyday services. Formats that depend on weekend or family destination traffic struggle here, because the sector empties out when the offices do.",
        detail: [
          "If your concept is weekend-led, we would rather point you at a different location than lease you a unit that will underperform every Saturday for five years.",
        ],
      },
      {
        q: "What is Grand Street in Sector 132?",
        answer:
          "It is the retail component of the Digital Park development in Sector 132 — high-street style frontage placed alongside around 1.3 million square feet of Grade-A offices. It is the part of the sector most directly relevant to retailers and food operators.",
      },
    ],
    faqs: [
      {
        q: "Is Sector 132 good for a restaurant?",
        a: "For a lunch-led or quick-service format aimed at the office population, yes. For a destination dining format that relies on evening and weekend traffic, Sector 144's cafe lane is a better fit. The footfall pattern decides it, not the rent.",
      },
      {
        q: "Can I buy a shop in Sector 132 rather than lease it?",
        a: "Yes, we handle both. If you are buying as an investment, look hard at the tenant, the lease terms and the office occupancy in the surrounding buildings — retail values here rest on the working population above them.",
      },
      {
        q: "How much is retail rent in Sector 132?",
        a: "It varies by position, frontage and size, and quoted rates usually exclude maintenance. Ask for the all-in monthly figure and compare units on that. We will give you current numbers for specific units rather than a sector-wide guess.",
      },
      {
        q: "How do I judge footfall for a unit?",
        a: "Go and stand outside it at 1pm on a weekday and count people, then do the same at 7pm. An hour of counting tells you more about an office-led location than any projection a landlord will show you.",
      },
    ],
    related: [
      { href: "/office-space-sector-132-noida", label: "Office space in Sector 132", note: "The towers above the shops" },
      { href: "/sectors/sector-132-noida", label: "Sector 132", note: "The whole sector" },
      { href: "/services/commercial-leasing-noida", label: "Commercial leasing in Noida", note: "How the lease process runs" },
      { href: "/services/corporate-brand-requirements-noida", label: "Corporate and brand requirements", note: "Rolling out multiple sites" },
      { href: "/services/cafe-restaurant-spaces-noida", label: "Cafe and restaurant spaces", note: "If you are opening food" },
    ],
    formSector: "Sector 132",
    formPropertyType: "Shop",
    formWant: "LEASE",
  },

  /* ------------------------------------------------------------- PG belt */
  {
    slug: "pg-space-noida-expressway",
    listingType: "PG",
    crumbName: "PG space on the Noida Expressway",
    metaTitle: "PG Space on Noida Expressway",
    metaDescription:
      "PG buildings along the Noida Expressway corridor. Owners with a large building, operators looking for one — we work both directions and match them.",
    eyebrow: "The corridor · PG",
    h1: "PG space along the Noida Expressway",
    lede: "The office belt puts thousands of young professionals on this corridor every day, and a good number of them want a bed rather than a flat. That is the whole PG business in one sentence.",
    image: "/images/band-noida-highway-night.jpg",
    imageAlt: "Night traffic on the expressway through Noida with residential blocks behind",
    credit: "Shantanu Goyal",
    bandCaption: "The corridor that fills the beds — offices at one end, housing at the other.",
    sideHeading: "Distance to the office decides everything",
    sideNote: "PG economics are more location-sensitive than almost any other property decision.",
    body: [
      "PG demand on this corridor comes from one place: the working population of the office belt. Candor TechSpace and the IT parks in Sector 135, the corporate towers in 132, the Embassy parks in 144 and DLF Techpark beside 143 between them employ a large number of people who are new to the city, working long hours, and not looking to furnish a flat.",
      "That is why location dominates PG economics more than it does in any other kind of letting. A building within a short walk or a short ride of the parks fills and stays full. The same building a few kilometres further out fills slowly, empties fast in a quiet stretch, and never quite makes its numbers.",
      "For an owner with a large building, a PG arrangement can be a good answer to a difficult asset. A big kothi or a building that is awkward to let floor by floor becomes one tenant, one payment, and steady income. The trade-off is wear — a PG runs far harder than a family home — so the agreement has to be specific about who maintains what and what allowance is made for it.",
      "Not every building suits it. Room sizes, the number of bathrooms, the staircase and the approach all decide how many beds the layout genuinely supports, and beds per floor is the number the whole business runs on. We will tell you plainly if a building will not work rather than let an arrangement fail six months in.",
      "For operators, we work the other direction: finding buildings near the demand, checking the layout against your bed count honestly, and negotiating terms that survive a slow season rather than ones that only work at full occupancy.",
    ],
    rowsHeading: "Both directions",
    rows: [
      { h: "Owners with a building", p: "One tenant instead of six, and an honest answer about whether it suits a PG at all.", tag: "Owners" },
      { h: "Operators looking", p: "Buildings near the demand, with the bed count checked properly rather than assumed.", tag: "Operators" },
      { h: "The layout question", p: "Room sizes, bathrooms, staircase, approach. These decide beds per floor.", tag: "Physical" },
      { h: "Terms that survive a slow month", p: "Maintenance, wear allowance, notice, and what happens to fittings at the end.", tag: "Terms" },
    ],
    qas: [
      {
        q: "Where does PG demand come from on the Noida Expressway?",
        answer:
          "From the office belt. The IT parks in Sector 135, the corporate towers in 132, the Embassy parks in 144 and DLF Techpark beside 143 employ a large young workforce, much of it new to Noida and looking for a bed rather than a flat to furnish.",
      },
      {
        q: "Will my building work as a PG?",
        answer:
          "It depends on room sizes, the number of bathrooms, the staircase and approach, and what the society or neighbours will accept. Large kothis and buildings awkward to let floor by floor often work well. We will tell you honestly if yours does not.",
        detail: [
          "The number that decides the business is beds per floor. A building that gives an operator two fewer beds per floor than assumed changes the economics completely, which is why we count properly before anyone commits.",
        ],
      },
    ],
    faqs: [
      {
        q: "Which sectors are best for a PG on the Expressway?",
        a: "Sectors within easy reach of the office belt fill most reliably — around 135, 143 and the housing near 144. The further from the working population, the harder beds are to keep full through a quiet stretch, and PG economics do not tolerate that well.",
      },
      {
        q: "Do you find operators for owners or buildings for operators?",
        a: "Both. That is the point of working it in both directions — when an owner calls us with a building we often already know which operators are looking, which is much faster than each side searching separately.",
      },
      {
        q: "How is a PG arrangement different from renting to a family?",
        a: "You are letting the whole building to a business rather than a home to a household. Income is steadier and there is one tenant to deal with, but the building takes much harder use, so maintenance and wear have to be spelled out in the agreement.",
      },
      {
        q: "What should be written into a PG agreement?",
        a: "Who maintains what, an agreed allowance for wear, notice periods on both sides, what happens to fittings at the end, and any society restrictions. Vagueness on any of these turns into an expensive argument two years in.",
      },
    ],
    related: [
      { href: "/services/pg-spaces-noida", label: "PG buildings in Noida", note: "The full service" },
      { href: "/sectors/sector-135-noida", label: "Sector 135", note: "Where much of the demand works" },
      { href: "/sectors/sector-143-noida", label: "Sector 143", note: "Societies and rentals" },
      { href: "/services/residential-renting-noida", label: "Residential renting", note: "The ordinary letting route" },
      { href: "/property-dealer-noida-expressway", label: "Property dealer on the Noida Expressway", note: "The whole corridor" },
    ],
    formSector: "Noida Expressway",
    formPropertyType: "PG building",
    formWant: "LEASE",
  },
];

export function getCombo(slug: string): Combo | undefined {
  return COMBOS.find((c) => c.slug === slug);
}
