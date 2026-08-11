export type QaBlock = {
  /** Phrased as a real question — the AEO pattern. */
  q: string;
  /** Direct plain answer, first thing under the heading. */
  answer: string;
  detail?: string[];
};

export type Faq = { q: string; a: string };
export type RelatedLink = { href: string; label: string; note?: string };
export type Row = { h: string; p: string; tag: string };

export type Sector = {
  num: string;
  slug: string;
  isHome: boolean;
  name: string;
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
  quickFacts: { k: string; v: string }[];
  qas: QaBlock[];
  rows: Row[];
  faqs: Faq[];
  related: RelatedLink[];
};

export const SECTORS: Sector[] = [
  /* ------------------------------------------------------------------ 99 */
  {
    num: "99",
    slug: "sector-99-noida",
    isHome: false,
    name: "Sector 99",
    metaTitle: "Sector 99 Noida — Flats & Kothis",
    metaDescription:
      "Buying, selling or renting in Sector 99, Noida. Authority flats, HIG blocks, kothis and builder floors — resale advice from a local dealer.",
    eyebrow: "Sector 99 · Noida",
    h1: "Property in Sector 99, Noida",
    lede: "Sector 99 is settled Noida Authority housing — the kind of sector where people move in and stay. Most of what changes hands here is resale, and most buyers are families who want to live in the flat, not park money in it.",
    image: "/images/sector-99-noida.jpg",
    imageAlt: "A red brick gateway in a park in Noida",
    credit: "Tarupriya Singh",
    bandCaption: "Settled Noida Authority housing — the resale end of the market.",
    sideHeading: "What the sector actually is",
    sideNote: "An end-user sector. Fewer speculators, steadier prices, slower stock.",
    body: [
      "Sector 99 was laid out by the Noida Authority and it still behaves like an authority sector. You get HIG flats, older authority flats, kothis on plotted land, and builder floors that have come up on those plots over the years. There is very little new construction. Almost every deal here is a resale.",
      "That shapes how you have to work in it. Stock does not sit on a portal waiting for you — a good flat in a good block often moves through word of mouth before it is ever advertised. The sector sits next to the 100, 104 and 105 belt, so buyers who cannot stretch to the kothi sectors frequently land here instead.",
      "Prices in 99 are driven by the block, the floor, and how much work the flat needs. Two flats in the same building can be quoted lakhs apart because one has been kept up and the other has not. That gap is where most of the negotiation happens.",
    ],
    quickFacts: [
      { k: "Character", v: "Established Noida Authority residential" },
      { k: "Stock", v: "HIG flats, authority flats, kothis, builder floors" },
      { k: "Market", v: "Resale driven, mostly end users" },
      { k: "Next to", v: "Sectors 100, 104 and 105" },
      { k: "We handle", v: "Buying, selling and renting" },
    ],
    qas: [
      {
        q: "Is Sector 99 a good place to buy a flat in Noida?",
        answer:
          "Yes, if you are buying to live in it. Sector 99 is a settled residential sector with authority flats, HIG blocks and builder floors, close to the 100 and 104 belt. Prices move slowly and steadily rather than in jumps, which suits families more than short-term investors.",
        detail: [
          "The thing to check before you commit is the building itself. Authority-era blocks vary a lot in how well they have been maintained, and the maintenance record tells you more about your next five years than the asking price does.",
          "Ask about water supply, the state of the lift, and whether the society has any pending dues. We check all three before we bring you to see anything.",
        ],
      },
      {
        q: "What does property in Sector 99 usually sell for?",
        answer:
          "It depends on the block, the floor and the condition — and quoted rates and closing rates are not the same number. We track what has actually registered nearby rather than what sellers are asking, and we tell you the real range before you make an offer.",
        detail: [
          "Anyone who gives you a firm per-square-foot figure for a whole sector over the phone is guessing. Call us with the block and we will tell you what comparable flats there have genuinely closed at recently.",
        ],
      },
    ],
    rows: [
      {
        h: "Resale flats and builder floors",
        p: "Authority flats and builder floors on plotted land. We know which blocks hold their value and which ones need work.",
        tag: "Buy · Sell",
      },
      {
        h: "Kothis on authority plots",
        p: "Older kothis that come up for sale quietly. Usually sold by families, usually not advertised anywhere.",
        tag: "Buy · Sell",
      },
      {
        h: "Renting to families",
        p: "Owners who want a tenant who will stay. Tenants who want a settled sector rather than a tower.",
        tag: "Owners · Tenants",
      },
    ],
    faqs: [
      {
        q: "Are there new projects launching in Sector 99?",
        a: "Not really. Sector 99 is a built-out authority sector, so almost everything available is resale — flats, kothis and builder floors that already exist. If you want a new launch, the newer sectors down the Expressway like 145 and 151 are where to look.",
      },
      {
        q: "Can you help me sell a flat in Sector 99?",
        a: "Yes. We work both sides. Tell us the block, the floor and the size, and we will tell you the honest range, what small repairs are worth doing first, and how long it should realistically take to close at that price.",
      },
      {
        q: "Is Sector 99 good for renting out a flat?",
        a: "It rents steadily to families rather than to short-stay professionals. Expect a tenant who wants a two or three year run, not a six month one. That means lower churn and fewer voids, which usually beats chasing a slightly higher rent.",
      },
      {
        q: "How far is Sector 99 from the Expressway sectors?",
        a: "It sits on the older side of Noida, close to the 100, 104 and 105 belt, and connects across to the Noida–Greater Noida Expressway sectors without much trouble. People working in the 132 to 144 office belt do live here.",
      },
    ],
    related: [
      { href: "/services/buy-property-noida", label: "Buying property in Noida", note: "How we work the buy side" },
      { href: "/services/sell-property-noida", label: "Selling property in Noida", note: "Pricing, paperwork, closing" },
      { href: "/sectors/sector-105-noida", label: "Sector 105", note: "The kothi belt next door" },
      { href: "/sectors/sector-108-noida", label: "Sector 108", note: "Kothis, villas and plots" },
      { href: "/guides/verify-property-documents-up", label: "Verifying property documents in UP", note: "Do this before you pay anything" },
    ],
  },

  /* ----------------------------------------------------------------- 105 */
  {
    num: "105",
    slug: "sector-105-noida",
    isHome: false,
    name: "Sector 105",
    metaTitle: "Sector 105 Noida Kothis & Plots",
    metaDescription:
      "Kothis, villas and plots in Sector 105, Noida. A premium plotted belt near the Expressway — honest rates and quiet listings from a local dealer since 2011.",
    eyebrow: "Sector 105 · Noida",
    h1: "Kothis and plots in Sector 105",
    lede: "Sector 105 is one of Noida's premium plotted belts. Land rates here are high and they have stayed high, because the supply of good kothi plots close to the Expressway does not grow.",
    image: "/images/sector-105-noida.jpg",
    imageAlt: "A high-rise residential tower against a blue sky in Noida",
    credit: "Pankaj Kumar",
    bandCaption: "Sector 105 — the premium belt, where the land carries the value.",
    sideHeading: "A land market, not a flat market",
    sideNote: "What you are really buying in 105 is the plot. The house on it is negotiable.",
    body: [
      "Most of Sector 105 is plotted development — kothis and villas built on individual plots rather than towers put up by a builder. Three to five bedroom kothis are the common shape of things, some of them split into independent floors.",
      "Because it is a land market, the arithmetic is different from a flat market. Two kothis of the same built-up area can be priced very differently because one sits on a larger plot, or a corner, or a wider road. Buyers who come from a flat background often miss this and overpay for finishes on a smaller plot.",
      "The sector's premium reputation has been reinforced by ultra-luxury launches in and around it, including Max Estate 105. Those launches matter even if you are not buying into them — they tell you what kind of buyer is now looking at this belt, and that pulls resale expectations up with it.",
      "105 sits close to the Expressway and to the 100, 104 and 108 belt, which is why people who work in the office sectors further down the corridor keep choosing it.",
    ],
    quickFacts: [
      { k: "Character", v: "Premium kothi, villa and plot belt" },
      { k: "Typical stock", v: "3 to 5 BHK kothis, villas, independent floors, plots" },
      { k: "Land rates", v: "High, and historically firm" },
      { k: "Signal", v: "Ultra-luxury launches including Max Estate 105" },
      { k: "Near", v: "Sectors 100, 104, 108 and the Expressway" },
    ],
    qas: [
      {
        q: "Why are Sector 105 rates higher than nearby sectors?",
        answer:
          "Because it is plotted land near the Expressway, and there is a fixed amount of it. You cannot add supply to a plotted sector the way a builder adds floors to a tower. Add premium launches nearby pulling in a wealthier buyer, and the floor under prices stays firm.",
        detail: [
          "This is also why 105 tends to hold up better when the wider market goes quiet. Owners here are rarely forced sellers — most of them live in the house.",
        ],
      },
      {
        q: "Should I buy a kothi or a plot in Sector 105?",
        answer:
          "Buy a plot if you want to build to your own plan and can wait. Buy a built kothi if you want to move in, or want rental income from separate floors. A ready kothi costs more up front but saves you a construction cycle and the approvals that come with it.",
        detail: [
          "There is a middle path people forget: an older kothi on a good plot, bought for the land, and rebuilt. In a sector where the plot carries most of the value, that is often the cleanest way in.",
          "We will tell you honestly which of the three fits your budget instead of pushing whichever one we happen to have.",
        ],
      },
    ],
    rows: [
      {
        h: "Kothis, 3 to 5 BHK",
        p: "Whole houses and independent floors. We know which streets are quiet and which get through traffic.",
        tag: "Buy · Sell",
      },
      {
        h: "Plots",
        p: "Plots for people who want to build. Size, road width, corner or not — that is what sets the price here.",
        tag: "Buy · Sell",
      },
      {
        h: "Renting a floor",
        p: "Independent floors in kothis rent well to families who want space without a society.",
        tag: "Owners · Tenants",
      },
    ],
    faqs: [
      {
        q: "What size kothis are common in Sector 105?",
        a: "Three to five bedrooms is the usual range, either as a whole house or split into independent floors. Plot sizes vary block to block, and since the plot carries most of the value here, that is the number worth asking about first.",
      },
      {
        q: "Is Sector 105 a good investment or a good place to live?",
        a: "Both, but it behaves like an end-user sector. Owners live in their houses, so stock is thin and prices hold. If you want quick churn, this is not that market. If you want land in a premium belt near the Expressway, it is.",
      },
      {
        q: "Do you have kothis in 105 that are not listed anywhere?",
        a: "Often, yes. In plotted sectors the good ones move privately — a family decides to sell and calls a dealer they know rather than putting up a board. Tell us what you are looking for and we will check what is quietly available.",
      },
      {
        q: "How far is Sector 105 from the Noida Expressway?",
        a: "It sits close to the Expressway and to the 100, 104 and 108 belt, so getting onto the corridor towards the office sectors at 132, 135 and 144 is straightforward. That access is a large part of why the sector prices the way it does.",
      },
    ],
    related: [
      { href: "/kothi-plots-sector-105-noida", label: "Kothis and plots in Sector 105", note: "The detail page for this belt" },
      { href: "/sectors/sector-108-noida", label: "Sector 108", note: "The other half of the kothi belt" },
      { href: "/services/buy-property-noida", label: "Buying property in Noida", note: "How we work the buy side" },
      { href: "/guides/circle-rates-noida", label: "Circle rates in Noida", note: "What they are and why they matter" },
      { href: "/guides/verify-property-documents-up", label: "Verifying property documents", note: "Especially important on plots" },
    ],
  },

  /* ----------------------------------------------------------------- 108 */
  {
    num: "108",
    slug: "sector-108-noida",
    isHome: false,
    name: "Sector 108",
    metaTitle: "Sector 108 Noida Kothis & Plots",
    metaDescription:
      "Kothis, villas, duplexes and plots in Sector 108, Noida, plus Parx Laureate and Divine Meadows. Local dealer working the sector since 2011.",
    eyebrow: "Sector 108 · Noida",
    h1: "Kothis, villas and plots in Sector 108",
    lede: "108 is the other half of the same kothi belt as 105 — plotted land, independent houses, and a handful of societies that give the sector a second kind of buyer.",
    image: "/images/sector-108-noida.jpg",
    imageAlt: "Rooftops of low-rise buildings with the Noida skyline at sunset",
    credit: "Ronit Singh",
    bandCaption: "Plotted land, villas and duplexes, with two established societies alongside.",
    sideHeading: "Two markets in one sector",
    sideNote: "Plotted kothis on one side, established societies on the other.",
    body: [
      "Sector 108 works the way 105 does — plots, kothis, villas and duplexes on individual pieces of land. D-block gets asked for by name more than any other part of the sector, and that demand shows up in the rates.",
      "What makes 108 different is that it also has established society stock. Parx Laureate and Divine Meadows bring in buyers who want a gated building with maintenance handled, not a house they are responsible for. So the sector serves two quite different people at once, and the two markets price independently of each other.",
      "For sellers that is useful. A duplex owner in 108 is not only competing with other duplexes — they are also being compared against a flat in one of the societies. Knowing which of those two your buyer is actually choosing between changes how you price and how you show the property.",
    ],
    quickFacts: [
      { k: "Character", v: "Kothi belt with established societies" },
      { k: "Typical stock", v: "Villas, duplexes, plots, society flats" },
      { k: "In demand", v: "D-block" },
      { k: "Societies", v: "Parx Laureate, Divine Meadows" },
      { k: "Next to", v: "Sector 105 and the 100/104 belt" },
    ],
    qas: [
      {
        q: "What kind of property can you buy in Sector 108?",
        answer:
          "Two kinds. Plotted property — kothis, villas, duplexes and bare plots — and society flats in buildings such as Parx Laureate and Divine Meadows. Which one suits you comes down to whether you want to run a house yourself or have maintenance handled for you.",
        detail: [
          "Plotted property gives you land, freedom to build, and usually more space for the money. Society flats give you security, lifts, power backup and someone else to call when something breaks.",
          "We deal in both, so we have no reason to push you towards one or the other.",
        ],
      },
      {
        q: "Why do people ask for D-block in Sector 108 specifically?",
        answer:
          "D-block has held steady demand within the sector, which keeps its rates above the sector average and its stock thin. When a good property in D-block comes up it usually goes quickly, so buyers who want it need to be ready to move rather than think about it for a fortnight.",
      },
    ],
    rows: [
      {
        h: "Villas and duplexes",
        p: "Independent houses across the plotted blocks, including the parts of the sector that get asked for by name.",
        tag: "Buy · Sell",
      },
      {
        h: "Plots",
        p: "Land to build on. Plot size, road width and orientation set the price far more than anything else.",
        tag: "Buy · Sell",
      },
      {
        h: "Society flats",
        p: "Parx Laureate and Divine Meadows — resale and rentals in gated buildings with maintenance handled.",
        tag: "Buy · Rent",
      },
    ],
    faqs: [
      {
        q: "Is Sector 108 better than Sector 105?",
        a: "They are close cousins, not competitors. 105 is more purely a plotted premium belt; 108 gives you the same plotted stock plus established societies. If you want a gated flat in this part of Noida, 108 has options that 105 largely does not.",
      },
      {
        q: "Can I buy a plot in Sector 108 and build on it?",
        a: "Yes, plots do come up in the sector. Before you buy, the land papers and the sanctioned building rules matter more than the asking rate — that is what decides what you can actually put up. We check both before recommending anything.",
      },
      {
        q: "What are Parx Laureate and Divine Meadows like to buy into?",
        a: "They are established societies in the sector, which means you can see exactly what you are getting rather than buying off a brochure. Resale prices depend on tower, floor and condition. Ask us for what has genuinely closed recently before you negotiate.",
      },
      {
        q: "Do you handle rentals in Sector 108?",
        a: "Yes, both sides. Owners with a floor or a society flat to let, and families looking for space in this belt. Independent floors in kothis rent particularly well here to people who want room without society rules.",
      },
    ],
    related: [
      { href: "/kothi-plots-sector-108-noida", label: "Kothis and plots in Sector 108", note: "The detail page for this belt" },
      { href: "/sectors/sector-105-noida", label: "Sector 105", note: "The other half of the belt" },
      { href: "/services/residential-renting-noida", label: "Residential renting", note: "Owners and tenants, both sides" },
      { href: "/services/sell-property-noida", label: "Selling property in Noida", note: "What your kothi is actually worth" },
      { href: "/guides/leasehold-freehold-noida-authority-transfer", label: "Leasehold, freehold and Authority transfer", note: "Matters on plotted property" },
    ],
  },

  /* ----------------------------------------------------------------- 130 */
  {
    num: "130",
    slug: "sector-130-noida",
    isHome: false,
    name: "Sector 130",
    metaTitle: "Sector 130 Noida Plots & Homes",
    metaDescription:
      "Plots and premium homes in Sector 130, Noida — the Expressway pocket beside the Wish Town belt, with rental demand from the nearby office parks.",
    eyebrow: "Sector 130 · Noida",
    h1: "Plots and premium homes in Sector 130",
    lede: "130 sits right on the Expressway next to the Jaypee Wish Town township belt. It is a quieter, more expensive pocket than the sectors around it, and it rents to people who work in the office parks a few minutes down the road.",
    image: "/images/sector-130-noida.jpg",
    imageAlt: "An elevated metro line running past high-rise blocks in Noida",
    credit: "Shivansh Singh",
    bandCaption: "The Expressway luxury pocket, beside the Wish Town township belt.",
    sideHeading: "Bought for the address, rented for the commute",
    sideNote: "Two different reasons people want 130 — and both hold the price up.",
    body: [
      "Sector 130 belongs to the stretch of the Expressway that includes the Jaypee Wish Town township belt across 128 to 134. That is the context that matters: this is a planned, low-density, green part of Noida rather than a dense one, and it prices accordingly.",
      "The stock is plots and premium residential. People buy here for the address and the space, and a good number of them let the property out rather than live in it, because the tenant pool is strong. Embassy Oxygen, Candor TechSpace and the Logix parks are all a short run down the corridor, and their workforce wants to live close to the office without living inside a commercial sector.",
      "On infrastructure, the Ganga water supply planned for the 128 to 135 belt is worth knowing about. Water is one of the practical things that separates a comfortable Noida sector from an awkward one, and buyers in this belt do ask about it.",
    ],
    quickFacts: [
      { k: "Character", v: "Expressway luxury pocket, low density" },
      { k: "Beside", v: "The Jaypee Wish Town belt, Sectors 128 to 134" },
      { k: "Stock", v: "Plots and premium residential" },
      { k: "Tenant pool", v: "Staff from Oxygen, Candor and the Logix parks" },
      { k: "Infrastructure", v: "Ganga water supply planned for the 128 to 135 belt" },
    ],
    qas: [
      {
        q: "Is Sector 130 a good sector to buy in for rental income?",
        answer:
          "It is one of the better ones on this stretch. The office parks at 132, 135 and 144 put a steady supply of tenants within a short commute, and 130 offers the kind of low-density premium housing that senior staff prefer. Yields are moderate, but voids are short.",
        detail: [
          "The catch is the entry price. This is not a cheap sector, so the rent has to be measured against a high capital cost. We will run those numbers with you honestly before you buy, including the months a property might sit empty.",
        ],
      },
      {
        q: "What is the Wish Town belt and why does it matter for 130?",
        answer:
          "It is the large township development running across Sectors 128 to 134, right alongside 130. It sets the character of this whole stretch — planned, green and low density — and it is the reason 130 feels different from the denser residential sectors further back towards old Noida.",
      },
    ],
    rows: [
      {
        h: "Plots on the Expressway side",
        p: "Land in a premium, low-density pocket. Bought by people who intend to build something particular.",
        tag: "Buy · Sell",
      },
      {
        h: "Premium residential",
        p: "Homes for buyers who want space and the address, close to the corridor without being in an office sector.",
        tag: "Buy · Sell",
      },
      {
        h: "Letting to the office belt",
        p: "Owners letting to staff from the parks at 132, 135 and 144. Short commute, settled tenants.",
        tag: "Owners · Tenants",
      },
    ],
    faqs: [
      {
        q: "How far is Sector 130 from the Noida office parks?",
        a: "It sits on the Expressway itself, so Embassy Oxygen in 144, Candor TechSpace in 135 and the Logix parks are all a short drive down the same corridor. That commute is the main reason tenants pick this sector over cheaper ones further out.",
      },
      {
        q: "Are there plots still available in Sector 130?",
        a: "Plots do change hands here, though not in volume — it is a premium pocket and owners are rarely in a rush. Tell us the size you are after and we will tell you what is genuinely available rather than what is being advertised.",
      },
      {
        q: "What is happening with water supply in this belt?",
        a: "Ganga water supply has been planned for the 128 to 135 belt, which includes Sector 130. Water reliability is one of the practical things worth asking about in any Noida sector, and it is a fair question to put to us before you buy.",
      },
      {
        q: "Is Sector 130 better than Sector 143 for buying?",
        a: "They serve different buyers. 130 is lower density, more plotted and more expensive; 143 is high-rise society living with its own metro station and a deeper rental market. If you want land and quiet, 130. If you want a flat and a metro, 143.",
      },
    ],
    related: [
      { href: "/property-dealer-noida-expressway", label: "Property dealer on the Noida Expressway", note: "The whole corridor, sector by sector" },
      { href: "/sectors/sector-135-noida", label: "Sector 135", note: "The office belt nearby" },
      { href: "/sectors/sector-143-noida", label: "Sector 143", note: "High-rise living with a metro station" },
      { href: "/services/residential-renting-noida", label: "Residential renting", note: "Finding tenants, finding homes" },
      { href: "/services/buy-property-noida", label: "Buying property in Noida", note: "How we work the buy side" },
    ],
  },

  /* ----------------------------------------------------------------- 132 */
  {
    num: "132",
    slug: "sector-132-noida",
    isHome: false,
    name: "Sector 132",
    metaTitle: "Sector 132 Noida Offices & Shops",
    metaDescription:
      "Office space and high-street retail in Sector 132, Noida — Express Trade Tower 2, Matrix Tower, Logix Technova, Digital Park and Grand Street.",
    eyebrow: "Sector 132 · Noida",
    h1: "Offices and shops in Sector 132",
    lede: "132 is where the Expressway does business. Corporate towers on one side, high-street retail on the other, and a working day that fills both.",
    image: "/images/sector-132-noida.jpg",
    imageAlt: "A commercial building lit up at night in Noida",
    credit: "Vinit Kumar Singh",
    bandCaption: "Corporate towers and high-street retail on the Expressway.",
    sideHeading: "A commercial sector with a retail street",
    sideNote: "Offices bring the footfall. The retail exists because of it.",
    body: [
      "Sector 132 is one of the anchors of the Expressway's commercial belt. Express Trade Tower 2, Matrix Tower and Logix Technova are the names people know, and the Digital Park development with Grand Street alongside it adds a large block of Grade-A office space with retail attached — around 1.3 million square feet of it.",
      "That combination is what makes 132 unusual. Plenty of Noida sectors have offices. Fewer have offices sitting directly on top of a retail street designed to catch the people who work in them. If you are opening a shop, a quick-service outlet or a cafe, the maths in 132 starts with weekday footfall rather than weekend footfall — and that changes what hours you staff and what you sell.",
      "We work both halves. Companies taking office floors, and retailers taking shop units. Because we sit on the same corridor, we usually know which floors are quietly coming free before they are formally on the market.",
    ],
    quickFacts: [
      { k: "Character", v: "Corporate offices with high-street retail" },
      { k: "Office buildings", v: "Express Trade Tower 2, Matrix Tower, Logix Technova" },
      { k: "Grade-A block", v: "Digital Park with Grand Street, around 1.3M sq ft" },
      { k: "Footfall", v: "Weekday and office-led" },
      { k: "We handle", v: "Office lease and sale, shop lease and sale" },
    ],
    qas: [
      {
        q: "What kind of office space is available in Sector 132?",
        answer:
          "Grade-A floors in the corporate towers, smaller fitted suites, and space in the Digital Park block. Sizes run from a single cabin-scale office up to full floors. What is available shifts constantly, so the useful answer is a current one — call and we will tell you what is actually free this week.",
        detail: [
          "If you are taking your first office in Noida, the two things that catch people out are the fit-out timeline and what the quoted rate excludes. We go through both before you sign anything.",
        ],
      },
      {
        q: "Is Sector 132 good for opening a shop or a food outlet?",
        answer:
          "It is good for anything that runs on office footfall. Grand Street and the retail around the Digital Park block are built to catch people working in the towers, so weekday lunch and evening trade is the core. A weekend-led concept will find this sector harder.",
        detail: [
          "We take cafe and restaurant work end to end, which means we will tell you plainly if your concept does not fit the footfall pattern here — and where on the corridor it would fit better.",
        ],
      },
    ],
    rows: [
      {
        h: "Office floors and suites",
        p: "Grade-A floors in the towers, and smaller suites for teams that are not taking a whole floor yet.",
        tag: "Lease · Sale",
      },
      {
        h: "High-street retail",
        p: "Shop units on the retail side, priced on weekday footfall from the offices above and around them.",
        tag: "Lease · Sale",
      },
      {
        h: "Corporate requirements",
        p: "Brands and companies entering Noida who need a site that fits a specification, not just a vacancy.",
        tag: "Brands",
      },
    ],
    faqs: [
      {
        q: "Which are the main office buildings in Sector 132?",
        a: "Express Trade Tower 2, Matrix Tower and Logix Technova are the established names, alongside the Digital Park development with Grand Street, which adds a large Grade-A block with retail attached. Between them the sector covers most office requirements on this stretch.",
      },
      {
        q: "Do you help companies lease office space, or only sell it?",
        a: "Both, and we work both sides of the table. Owners with floors to let, and companies looking for space. We handle commercial leasing and commercial buying and selling as separate services because the process for each is genuinely different.",
      },
      {
        q: "What is Grand Street in Sector 132?",
        a: "It is the retail component sitting with the Digital Park office development in the sector — high-street style shop frontage designed around the working population of the surrounding towers. It is the part of 132 most relevant to retailers and food operators.",
      },
      {
        q: "How does Sector 132 compare with Sector 135 for offices?",
        a: "135 is the bigger IT-park sector, built around large campuses like Candor TechSpace. 132 is more of a corporate-tower and retail sector. If you want a campus address, look at 135. If you want a tower floor with a retail street underneath, 132 fits better.",
      },
    ],
    related: [
      { href: "/office-space-sector-132-noida", label: "Office space in Sector 132", note: "Floors, suites and terms" },
      { href: "/shops-retail-sector-132-noida", label: "Shops and retail in Sector 132", note: "High-street units and footfall" },
      { href: "/services/commercial-leasing-noida", label: "Commercial leasing in Noida", note: "How a commercial lease runs" },
      { href: "/services/corporate-brand-requirements-noida", label: "Corporate and brand requirements", note: "Site finding for chains and banks" },
      { href: "/guides/commercial-lease-basics", label: "Commercial lease basics", note: "Terms worth arguing about" },
    ],
  },

  /* ----------------------------------------------------------------- 135 */
  {
    num: "135",
    slug: "sector-135-noida",
    isHome: false,
    name: "Sector 135",
    metaTitle: "Sector 135 Noida Office & Homes",
    metaDescription:
      "Office space and homes in Sector 135, Noida — Candor TechSpace, Stellar IT Park, Assotech Business Cresterra, plus villas, high-rises and plotted housing.",
    eyebrow: "Sector 135 · Noida",
    h1: "Sector 135 — offices, and the homes around them",
    lede: "135 is the biggest IT-park sector on this stretch of the Expressway. It is also a real residential sector, which is why it works: people can take an office here and live within a few minutes of it.",
    image: "/images/sector-135-noida.jpg",
    imageAlt: "Looking up between tall buildings in Noida, with an aeroplane overhead",
    credit: "Chaitanya Maheshwari",
    bandCaption: "The largest IT-park sector on the corridor — and a residential one too.",
    sideHeading: "Where the corridor's workforce actually is",
    sideNote: "Big campuses, and a rental market fed directly by them.",
    body: [
      "Candor TechSpace, owned by Brookfield, is the name that defines Sector 135. Its tenant list has included TCS, Cognizant, Genpact, Samsung and KPMG. Around it sit Assotech Business Cresterra, Stellar IT Park, GM IT Park and Logix space. Put together, that is a very large working population inside one sector.",
      "What people from outside Noida miss is that 135 is not only offices. It has villas, high-rise societies and plotted development as well. The residential side is fed directly by the commercial side — a large part of the rental demand here is the IT workforce that walks or drives ten minutes to work.",
      "For an owner, that is the useful fact. A well-kept two or three bedroom flat in 135 rents to a professional tenant with a stable income and a strong reason to stay close by. For a company, the equally useful fact is that taking space here means your staff can actually find housing nearby, which is not true everywhere on the corridor.",
      "Metro access sits at the 142 and 137 stations nearby rather than inside the sector itself, which is worth factoring in if your team commutes by metro.",
    ],
    quickFacts: [
      { k: "Character", v: "Largest IT-park sector on the belt, with real housing" },
      { k: "Main campus", v: "Candor TechSpace (Brookfield)" },
      { k: "Tenants have included", v: "TCS, Cognizant, Genpact, Samsung, KPMG" },
      { k: "Other parks", v: "Assotech Business Cresterra, Stellar IT Park, GM IT Park, Logix" },
      { k: "Housing", v: "Villas, high-rises and plotted development" },
      { k: "Metro", v: "Stations at 142 and 137 nearby" },
    ],
    qas: [
      {
        q: "Is Sector 135 a good place to rent out a flat?",
        answer:
          "It is one of the strongest rental sectors on the Expressway. The IT parks inside the sector put thousands of salaried professionals within walking or short driving distance, and that demand is steady rather than seasonal. Well-kept two and three bedroom flats let quickly here.",
        detail: [
          "Two things lift the rent more than anything else in this sector: a clean, properly finished kitchen and bathroom, and a parking slot. Tenants working in the parks will pay for both.",
          "We handle the tenant side as well as the owner side, so we can tell you what tenants are currently rejecting and why.",
        ],
      },
      {
        q: "What office space can a company take in Sector 135?",
        answer:
          "Anything from a small fitted suite up to large floors inside the IT parks. Candor TechSpace is the biggest campus, with Assotech Business Cresterra, Stellar IT Park, GM IT Park and Logix providing alternatives at different price points and specifications.",
        detail: [
          "Campus space and independent tower space are not the same product. Campuses come with managed facilities, security and cafeteria arrangements, and usually a longer commitment. Independent buildings are cheaper and more flexible but you manage more yourself.",
        ],
      },
    ],
    rows: [
      {
        h: "Office space in the IT parks",
        p: "Candor TechSpace, Stellar, GM, Assotech Business Cresterra and Logix — suites through to large floors.",
        tag: "Lease · Sale",
      },
      {
        h: "Flats and villas",
        p: "High-rise societies, villas and plotted housing, bought by people who work on the corridor.",
        tag: "Buy · Sell",
      },
      {
        h: "Renting to the IT workforce",
        p: "The deepest tenant pool on this stretch. Owners here rarely wait long for a decent tenant.",
        tag: "Owners · Tenants",
      },
    ],
    faqs: [
      {
        q: "Which companies are in Candor TechSpace, Sector 135?",
        a: "Candor TechSpace is owned by Brookfield and its tenants have included TCS, Cognizant, Genpact, Samsung and KPMG. Occupier lists change over time, so treat that as an indication of the calibre of the campus rather than a current roster.",
      },
      {
        q: "Is there a metro station in Sector 135?",
        a: "Not inside the sector itself. The nearest stations are at 142 and 137. For most people driving in it makes little difference, but if your commute depends on the metro it is worth checking the walk from the station to your exact building before you commit.",
      },
      {
        q: "Can I buy a house in Sector 135, or is it all offices?",
        a: "You can buy. Alongside the IT parks the sector has villas, high-rise societies and plotted development. It is one of the few sectors on this belt where you can genuinely work and live within the same sector boundary.",
      },
      {
        q: "What rent should I expect for a flat in Sector 135?",
        a: "It depends on the society, the size, the floor and the condition — and on whether it has parking. Rather than quote a range that will be wrong for your specific flat, tell us the society and the size and we will give you the current honest number.",
      },
    ],
    related: [
      { href: "/office-space-sector-135-noida", label: "Office space in Sector 135", note: "Park by park, what fits what" },
      { href: "/services/commercial-leasing-noida", label: "Commercial leasing in Noida", note: "How a commercial lease runs" },
      { href: "/services/residential-renting-noida", label: "Residential renting", note: "Owners and tenants, both sides" },
      { href: "/sectors/sector-132-noida", label: "Sector 132", note: "Corporate towers and retail" },
      { href: "/sectors/sector-144-noida", label: "Sector 144", note: "Our home sector, down the corridor" },
    ],
  },

  /* ----------------------------------------------------------------- 141 */
  {
    num: "141",
    slug: "sector-141-noida",
    isHome: false,
    name: "Sector 141",
    metaTitle: "Sector 141 Noida Plots & Rentals",
    metaDescription:
      "Plots and rentals in Sector 141, Noida — a quieter mixed sector next to commercial 142 and Advant Navis, with less competition and fair value.",
    eyebrow: "Sector 141 · Noida",
    h1: "Sector 141 — the quiet one next to the offices",
    lede: "141 does not get talked about the way 135 and 144 do. That is precisely what makes it worth a look: you are next door to a major commercial sector without paying the price of being in it.",
    image: "/images/sector-141-noida.jpg",
    imageAlt: "Low-rise rooftops under an orange evening sky in Noida",
    credit: "The Visual Stories Studio",
    bandCaption: "A quieter mixed sector, a minute from the commercial belt.",
    sideHeading: "Value, because nobody is fighting over it",
    sideNote: "Lower competition is a real advantage when you are buying.",
    body: [
      "Sector 141 is a mixed sector sitting alongside 142, which is where Advant Navis and the commercial weight of that pocket sits, and near 140 and 168. It has plots and it has rental stock, and it does not have the crowd of buyers that the headline sectors attract.",
      "For a buyer, low competition is worth money. In a hot sector you are bidding against three other people and the seller knows it. In 141 you have room to negotiate, time to do your document checks properly, and less pressure to decide on the spot.",
      "For an owner letting a property, the pitch is straightforward: your tenant works in 142 or on the corridor and would rather pay less and walk further than pay more to live inside a commercial sector. That is a real and steady group of people.",
      "It is not a sector for someone who wants a marquee address. It is a sector for someone who has done the arithmetic.",
    ],
    quickFacts: [
      { k: "Character", v: "Quieter mixed sector" },
      { k: "Next to", v: "Sector 142 (Advant Navis), 140 and 168" },
      { k: "Stock", v: "Plots and rental property" },
      { k: "Buyer advantage", v: "Less competition than the headline sectors" },
      { k: "Tenant pool", v: "People working in the neighbouring commercial belt" },
    ],
    qas: [
      {
        q: "Why buy in Sector 141 instead of a bigger name sector?",
        answer:
          "Because you get corridor access without corridor pricing. 141 sits next to the commercial weight of 142 and near 140 and 168, but it attracts far fewer competing buyers. That gives you negotiating room and time to check papers properly instead of deciding under pressure.",
        detail: [
          "The trade-off is honest: you are not buying a marquee address, and resale will take a little longer than it would in 144 or 135. If you are a long-hold buyer that costs you nothing.",
        ],
      },
      {
        q: "Is Sector 141 good for rental property?",
        answer:
          "Yes, for tenants who work nearby. People employed in 142 and along the corridor often prefer to live a sector away and pay less. Demand is steady rather than dramatic, so price it sensibly and it lets; price it like 135 and it will sit empty.",
      },
    ],
    rows: [
      {
        h: "Plots",
        p: "Land in a sector where you can still negotiate properly instead of bidding against a queue.",
        tag: "Buy · Sell",
      },
      {
        h: "Rentals",
        p: "Letting to people who work in 142 and the surrounding commercial pocket.",
        tag: "Owners · Tenants",
      },
      {
        h: "Long holds",
        p: "For buyers who are not in a hurry and want the corridor without the corridor premium.",
        tag: "Buy",
      },
    ],
    faqs: [
      {
        q: "What is in Sector 142 next to Sector 141?",
        a: "142 is the commercial neighbour, home to Advant Navis among other office space. Its working population is the main reason 141 has a rental market at all, and it is why people who want corridor access consider 141 in the first place.",
      },
      {
        q: "Are prices in Sector 141 lower than in 135 or 144?",
        a: "Generally yes, because demand is thinner. That is the whole argument for the sector. What the gap is at any given moment changes, so ask us for the current comparison rather than working off an old number.",
      },
      {
        q: "Is Sector 141 a good long-term investment?",
        a: "It suits a patient buyer. You are buying next to established commercial weight at a lower entry point, which is a reasonable position to hold. It is not a sector for someone who needs to sell quickly, because the buyer pool is smaller.",
      },
      {
        q: "Do you have listings in Sector 141?",
        a: "What we have live changes week to week, and in quieter sectors a lot of stock never gets advertised at all. Tell us your budget and what you need it for, and we will tell you what is genuinely available in 141 right now.",
      },
    ],
    related: [
      { href: "/property-dealer-noida-expressway", label: "Property dealer on the Noida Expressway", note: "The whole corridor in one place" },
      { href: "/sectors/sector-135-noida", label: "Sector 135", note: "The big office sector nearby" },
      { href: "/sectors/sector-143-noida", label: "Sector 143", note: "High-rise living with a metro" },
      { href: "/services/buy-property-noida", label: "Buying property in Noida", note: "How we work the buy side" },
      { href: "/services/residential-renting-noida", label: "Residential renting", note: "Finding tenants, finding homes" },
    ],
  },

  /* ----------------------------------------------------------------- 143 */
  {
    num: "143",
    slug: "sector-143-noida",
    isHome: false,
    name: "Sector 143",
    metaTitle: "Sector 143 Noida Flats & Rentals",
    metaDescription:
      "Flats to buy and rent in Sector 143, Noida — Logix Blossom, Gulshan Ikebana, Sikka Kaamna Greens and more, with its own Aqua Line metro station.",
    eyebrow: "Sector 143 · Noida",
    h1: "Flats and rentals in Sector 143",
    lede: "143 is high-rise Noida done properly — a stack of established societies, its own metro station on the Aqua Line, and a rental market that never really goes quiet.",
    image: "/images/sector-143-noida.jpg",
    imageAlt: "A metro train at a station platform in Noida",
    credit: "Shantanu Goyal",
    bandCaption: "High-rise societies with a metro station in the sector itself.",
    sideHeading: "The society sector",
    sideNote: "A metro station inside the sector changes what a flat here is worth.",
    body: [
      "Sector 143 is society living. Logix Blossom Zest and Logix Blossom Greens, Gulshan Ikebana, Sikka Kaamna Greens, Victory Ace and Saha Amadeus between them make up most of the sector's stock, and they cover a genuine range of budgets rather than all sitting at one price point.",
      "The sector has its own station on the Aqua Line. That is not a small detail. A metro station inside the sector, rather than two sectors away, is one of the few things that reliably supports both rent and resale value over time — and it widens your tenant pool to people who do not own a car.",
      "143A next door carries the DLF Techpark, and the sector has both Expressway and FNG access. So you get the commuting options in three directions: metro, corridor, and the FNG side.",
      "Prices here have moved up notably in recent years. That cuts both ways. If you are selling, the market has been kind. If you are buying, you need someone who will tell you when an asking price has run ahead of what has actually registered.",
    ],
    quickFacts: [
      { k: "Character", v: "High-rise society sector" },
      { k: "Metro", v: "Its own Aqua Line station" },
      { k: "Societies", v: "Logix Blossom Zest & Greens, Gulshan Ikebana, Sikka Kaamna Greens, Victory Ace, Saha Amadeus" },
      { k: "Next door", v: "143A and DLF Techpark" },
      { k: "Access", v: "Noida Expressway and FNG" },
      { k: "Recent trend", v: "Strong price growth" },
    ],
    qas: [
      {
        q: "Is Sector 143 a good place to buy a flat?",
        answer:
          "For most people looking at high-rise Noida, yes. You get established societies at several price points, a metro station in the sector, Expressway and FNG access, and a deep rental market if you ever want to let it out. The main risk now is overpaying after a strong run.",
        detail: [
          "The way to manage that is simple: negotiate against registered comparables in the same society and tower, not against asking prices on portals. We will give you those numbers before you make an offer.",
        ],
      },
      {
        q: "Which society in Sector 143 should I look at?",
        answer:
          "It depends on budget and what you actually use. Logix Blossom Zest and Greens, Gulshan Ikebana, Sikka Kaamna Greens, Victory Ace and Saha Amadeus all sit in the sector at different price points, with different maintenance standards and amenity levels.",
        detail: [
          "Visit at least two at the same time of day. Societies feel very different at 8pm on a weekday than they do on a Sunday morning, and the difference tells you a lot about who lives there.",
          "Ask about maintenance charges and the state of the sinking fund. A cheap flat in a badly run society is not cheap.",
        ],
      },
    ],
    rows: [
      {
        h: "Buying a flat",
        p: "Resale across the main societies. We price against what has registered, not against what is being asked.",
        tag: "Buy · Sell",
      },
      {
        h: "Renting, both sides",
        p: "Owners wanting a reliable tenant, and tenants wanting a metro on their doorstep.",
        tag: "Owners · Tenants",
      },
      {
        h: "Selling in a risen market",
        p: "Prices have moved. We will tell you what your flat genuinely fetches and how long it should take.",
        tag: "Sell",
      },
    ],
    faqs: [
      {
        q: "Does Sector 143 have its own metro station?",
        a: "Yes, on the Aqua Line. Having a station inside the sector rather than a sector or two away is one of the strongest supports for both rental demand and resale value here, and it widens the tenant pool to people who commute without a car.",
      },
      {
        q: "What societies are there in Sector 143, Noida?",
        a: "The main ones include Logix Blossom Zest and Logix Blossom Greens, Gulshan Ikebana, Sikka Kaamna Greens, Victory Ace and Saha Amadeus. They sit at different price points, so the sector suits a fairly wide range of budgets.",
      },
      {
        q: "Have prices in Sector 143 gone up?",
        a: "Yes, the sector has seen strong growth in recent years. That is good news if you are selling and a reason for care if you are buying. Judge any asking price against what has actually registered in the same tower, not against a headline about the sector.",
      },
      {
        q: "Is Sector 143 well connected?",
        a: "It has three routes out: its own Aqua Line metro station, direct Expressway access, and the FNG side. Add DLF Techpark in adjacent 143A and a lot of people here have a commute measured in minutes rather than hours.",
      },
    ],
    related: [
      { href: "/flats-sector-143-noida", label: "Flats in Sector 143", note: "Society by society" },
      { href: "/services/residential-renting-noida", label: "Residential renting", note: "Owners and tenants, both sides" },
      { href: "/services/sell-property-noida", label: "Selling property in Noida", note: "Pricing against real closings" },
      { href: "/guides/rent-out-flat-noida", label: "Renting out a flat in Noida", note: "The process, step by step" },
      { href: "/sectors/sector-144-noida", label: "Sector 144", note: "Our home sector" },
    ],
  },

  /* ----------------------------------------------------------------- 144 */
  {
    num: "144",
    slug: "sector-144-noida",
    isHome: true,
    name: "Sector 144",
    metaTitle: "Property Dealer in Sector 144 Noida",
    metaDescription:
      "Our home sector. Cafes on Roastery Street, Embassy Oxygen Business Park, its own metro station — and our office at CM-52, Sector 144, Noida.",
    eyebrow: "Sector 144 · Our home sector",
    h1: "Sector 144 — the sector we work from",
    lede: "Our office is at CM-52, inside Sector 144. We have watched this sector fill up: the cafe lane, the business parks, the metro station. If you want to know what is really happening here, you are asking the right people.",
    image: "/images/sector-144-noida.jpg",
    imageAlt: "A metro train waiting at an empty platform in Noida",
    credit: "Shivansh Singh",
    bandCaption: "Sector 144 — cafes, business parks, a metro station, and our office.",
    sideHeading: "The sector we know best",
    sideNote: "We are not visiting 144. We work here every day.",
    body: [
      "Sector 144 has two faces. One is the office side: Embassy Oxygen Business Park is an IT and ITES SEZ of roughly 3.3 million square feet with a Platinum certification, and Embassy NSL Techzone sits alongside it. Between them they bring a large daytime population into the sector.",
      "The other face is Roastery Street — the cafe lane. It is the reason people from other parts of Noida drive down here in the evening. Most of the cafes on that street found their space through us. That is our flagship work: we take cafe and restaurant projects end to end, from finding the right shop to settling the lease to the day the doors open.",
      "The sector has its own metro station on the Aqua Line, and it sits at the start of the emerging IT corridor that runs from 144 through to 150. Sector 145 is one stop away. That corridor is where a lot of the next few years of Noida's commercial growth is expected to land.",
      "Because we are physically here, we hear about things early — a shop coming free on the cafe lane, a floor opening up in a business park, a flat owner deciding to sell. That is a real advantage and it is the honest reason to call us about 144 rather than someone operating from the other end of the city.",
    ],
    quickFacts: [
      { k: "Our office", v: "CM-52, Sector 144, Noida 201306" },
      { k: "Cafe lane", v: "Roastery Street" },
      { k: "Business parks", v: "Embassy Oxygen (~3.3M sq ft IT/ITES SEZ, Platinum certified), Embassy NSL Techzone" },
      { k: "Metro", v: "Its own Aqua Line station" },
      { k: "Corridor", v: "Start of the emerging 144 to 150 IT belt" },
      { k: "Our strongest work", v: "Cafe and restaurant spaces, end to end" },
    ],
    qas: [
      {
        q: "Why is Sector 144 known for cafes?",
        answer:
          "Because of Roastery Street, the cafe lane that has become a destination in its own right. It grew alongside the business parks in the sector, which supply weekday footfall, and it now pulls people in from across Noida in the evenings and at weekends.",
        detail: [
          "Most of the cafes on that street found their space through us. We know which units work, which ones look good but have a bad approach, and what the realistic terms are on the ones that come free.",
          "If you are planning a cafe or a restaurant anywhere in Noida, this is the work we do best and we handle it from finding the space through to opening day.",
        ],
      },
      {
        q: "Is Sector 144 a good place for a company to take office space?",
        answer:
          "Yes. Embassy Oxygen Business Park is a large Platinum-certified IT and ITES SEZ of around 3.3 million square feet, with Embassy NSL Techzone alongside it. The sector has its own metro station and sits at the head of the 144 to 150 IT corridor.",
        detail: [
          "SEZ space comes with its own rules and its own paperwork, and it is not right for every company. We will tell you plainly whether your business fits an SEZ or whether you are better off in ordinary commercial space nearby.",
        ],
      },
      {
        q: "Where exactly is your office in Sector 144?",
        answer:
          "CM-52, Sector 144, Noida, Uttar Pradesh 201306. It is inside the sector, not on the edge of it. You are welcome to walk in — most of our work still starts with somebody sitting across the desk and explaining what they need.",
      },
    ],
    rows: [
      {
        h: "Cafes and restaurants",
        p: "Finding the space, settling the lease, getting to opening day. Roastery Street is our record on this.",
        tag: "End to end",
      },
      {
        h: "Office space in the business parks",
        p: "Embassy Oxygen and NSL Techzone, plus commercial space around them. SEZ and non-SEZ both.",
        tag: "Lease · Sale",
      },
      {
        h: "Flats and rentals",
        p: "Residential stock in and around the sector, let to people who work in the parks.",
        tag: "Buy · Rent",
      },
      {
        h: "Shops and retail",
        p: "Retail units serving the sector's daytime population and its evening crowd.",
        tag: "Lease · Sale",
      },
    ],
    faqs: [
      {
        q: "Where is Shivansh Properties' office in Noida?",
        a: "At CM-52, Sector 144, Noida, Uttar Pradesh 201306. Sector 144 is our home sector — the office is inside it, on the Noida–Greater Noida Expressway corridor. You can call or WhatsApp us on +91 99115 59688, or simply walk in.",
      },
      {
        q: "What is Roastery Street in Sector 144?",
        a: "It is the cafe lane in Sector 144 and the reason a lot of people from elsewhere in Noida come to the sector in the evening. Most of the cafes on it found their space through us, and cafe and restaurant work remains our strongest specialism.",
      },
      {
        q: "Does Sector 144 have a metro station?",
        a: "Yes, the sector has its own station on the Aqua Line, and Sector 145 is one stop away. That connection matters both for staff commuting into the business parks and for the evening footfall the cafe lane depends on.",
      },
      {
        q: "What is Embassy Oxygen Business Park?",
        a: "It is a large IT and ITES SEZ in Sector 144, around 3.3 million square feet, with a Platinum certification. Together with Embassy NSL Techzone it accounts for much of the sector's daytime working population.",
      },
      {
        q: "Can I open a cafe in Sector 144 through you?",
        a: "That is exactly the work we do most of. We handle cafe and restaurant projects end to end — finding a unit that suits the concept, negotiating the lease, and staying with it through to opening day. Call us before you sign anything.",
      },
    ],
    related: [
      { href: "/cafe-restaurant-space-sector-144-noida", label: "Cafe and restaurant space in Sector 144", note: "Roastery Street and around it" },
      { href: "/office-space-sector-144-noida", label: "Office space in Sector 144", note: "Embassy Oxygen and NSL Techzone" },
      { href: "/services/cafe-restaurant-spaces-noida", label: "Cafe and restaurant spaces", note: "How we run these projects" },
      { href: "/guides/open-cafe-restaurant-noida", label: "Opening a cafe in Noida", note: "The process, plainly" },
      { href: "/sectors/sector-145-noida", label: "Sector 145", note: "One metro stop away" },
      { href: "/contact", label: "Visit the office", note: "CM-52, Sector 144" },
    ],
  },

  /* ----------------------------------------------------------------- 145 */
  {
    num: "145",
    slug: "sector-145-noida",
    isHome: false,
    name: "Sector 145",
    metaTitle: "Sector 145 Noida Plots & New Homes",
    metaDescription:
      "Abadi plots and new launches in Sector 145, Noida — the emerging SEZ side, one metro stop from 144, with its own station on the Aqua Line.",
    eyebrow: "Sector 145 · Noida",
    h1: "Sector 145 — plots, and what is coming next",
    lede: "145 is one stop from our office and it is changing fast. Affordable abadi plots sit in the same sector as new ultra-luxury launches, which tells you the market here has not settled yet.",
    image: "/images/sector-145-noida.jpg",
    imageAlt: "High-rise residential towers in Noida",
    credit: "Prashant",
    bandCaption: "The emerging SEZ side — abadi plots alongside new launches.",
    sideHeading: "A sector in two halves",
    sideNote: "Cheap land and expensive launches, in the same postcode.",
    body: [
      "Sector 145 sits on the emerging SEZ side of the corridor. Microsoft has been allotted a parcel of around 60,000 square metres in the sector, which is the kind of allotment that changes how everyone else values the land around it.",
      "The residential picture is unusual. On one side there are abadi plots, which have been trading in a wide band — roughly ₹25 lakh up to about ₹1 crore depending on size and position. On the other side there are new ultra-luxury launches, including M3M Jacob & Co. Two very different buyers, in one sector.",
      "That gap is the opportunity and the risk. Abadi plots are the affordable entry into a sector with a serious commercial anchor arriving. They also need more careful document work than a builder flat does, because ownership history on abadi land is rarely as tidy.",
      "The sector has its own metro station and is one stop from 144, so connectivity is already in place rather than promised.",
    ],
    quickFacts: [
      { k: "Character", v: "Emerging SEZ side of the corridor" },
      { k: "Anchor", v: "Microsoft allotted around 60,000 sq m" },
      { k: "Affordable stock", v: "Abadi plots, roughly ₹25 lakh to ₹1 crore" },
      { k: "Premium stock", v: "New ultra-luxury launches including M3M Jacob & Co" },
      { k: "Metro", v: "Its own station, one stop from Sector 144" },
    ],
    qas: [
      {
        q: "Are abadi plots in Sector 145 worth buying?",
        answer:
          "They can be, but only after proper document checks. Abadi plots are the affordable way into a sector that is getting serious commercial investment, and prices have ranged roughly from ₹25 lakh to about ₹1 crore depending on size and location. The paperwork is where deals go wrong.",
        detail: [
          "Ownership chains on abadi land are often less tidy than on Authority-allotted plots. Get the chain of title, the mutation record and the physical boundary all checked before any money moves.",
          "We do that work before we recommend a plot, and we will walk away from one that does not check out rather than sell it to you.",
        ],
      },
      {
        q: "Why does the Microsoft allotment in Sector 145 matter?",
        answer:
          "Because a large corporate parcel of around 60,000 square metres anchors the sector's commercial future. It signals that this stretch of the corridor is being taken seriously by major occupiers, which affects land values and the sector's rental prospects over the coming years.",
      },
    ],
    rows: [
      {
        h: "Abadi plots",
        p: "The affordable entry into the sector. We check the papers properly before we put a plot in front of you.",
        tag: "Buy · Sell",
      },
      {
        h: "New launches",
        p: "Ultra-luxury launches arriving in the same sector, aimed at a completely different buyer.",
        tag: "Buy",
      },
      {
        h: "Holding for the corridor",
        p: "For buyers positioning ahead of the 144 to 150 IT belt filling out.",
        tag: "Buy",
      },
    ],
    faqs: [
      {
        q: "What is an abadi plot?",
        a: "It is land in the older inhabited part of a village area, as opposed to land allotted by the Authority. Abadi plots are usually cheaper, and the ownership record needs closer checking, because the chain of title is often less tidy than on Authority land.",
      },
      {
        q: "How much do plots cost in Sector 145, Noida?",
        a: "Abadi plots in the sector have been trading in a broad band, roughly ₹25 lakh to about ₹1 crore, depending on size and exact location. New launch pricing sits far above that. Ask us for the current position before you budget around either number.",
      },
      {
        q: "Does Sector 145 have a metro station?",
        a: "Yes, the sector has its own station and it is one stop from Sector 144, where our office is. Connectivity here is already built rather than promised, which is a meaningful difference when you are buying into an emerging area.",
      },
      {
        q: "Is Sector 145 a good investment?",
        a: "It has the ingredients: a major corporate allotment, a metro station, and an affordable entry point through abadi plots. The risk sits in the paperwork rather than the location, so the document check is where you should spend your care and your money.",
      },
    ],
    related: [
      { href: "/plots-sector-145-noida", label: "Plots in Sector 145", note: "Abadi land and what to check" },
      { href: "/sectors/sector-144-noida", label: "Sector 144", note: "One metro stop away" },
      { href: "/sectors/sector-151-noida", label: "Sector 151", note: "Further out on the same frontier" },
      { href: "/guides/verify-property-documents-up", label: "Verifying property documents in UP", note: "Essential on abadi plots" },
      { href: "/services/buy-property-noida", label: "Buying property in Noida", note: "How we work the buy side" },
    ],
  },

  /* ----------------------------------------------------------------- 151 */
  {
    num: "151",
    slug: "sector-151-noida",
    isHome: false,
    name: "Sector 151",
    metaTitle: "Sector 151 Noida Plots & New Launches",
    metaDescription:
      "Sector 151, Noida — farm plots, Experion Saatori and the new frontier of the Expressway, near the 147 and 148 metro stations and the airport side.",
    eyebrow: "Sector 151 · Noida",
    h1: "Sector 151 — the far end of the corridor",
    lede: "151 is the frontier. Farm plots, an ultra-luxury launch, and a location that points towards the Noida International Airport side. This is a sector you buy with a time horizon, not a moving date.",
    image: "/images/sector-151-noida.jpg",
    imageAlt: "A rooftop view across low-rise buildings in Noida",
    credit: "Nitesh Solanky",
    bandCaption: "Sector 151 — the far end of the Noida–Greater Noida Expressway corridor.",
    sideHeading: "Early, on purpose",
    sideNote: "The upside here is time. Be honest with yourself about how much you have.",
    body: [
      "Sector 151 is where the Expressway corridor stops being built-out and starts being potential. Experion Saatori is launching as an ultra-luxury development in the sector, farm-plot developments are active here, and the Jaypee Aman side sits alongside.",
      "Connectivity is better than people assume. The 147 and 148 metro stations are close, and the Sector 150 premium belt is right next door — 150 has established itself as one of the greener, lower-density parts of Noida, and that reputation spills over.",
      "The bigger argument is the airport. Noida International Airport sits on this side of the map, and sectors at this end of the corridor stand to benefit from that in a way the older sectors do not.",
      "We will be straight with you about what this means. Buying in 151 is a bet on time. If you need rental income next quarter, buy in 135 or 143 instead. If you can leave money in the ground for several years, this is the part of Noida where the ground is still cheap.",
    ],
    quickFacts: [
      { k: "Character", v: "The new frontier of the Expressway corridor" },
      { k: "Launch", v: "Experion Saatori, ultra-luxury" },
      { k: "Also here", v: "Farm-plot developments, Jaypee Aman side" },
      { k: "Metro", v: "Near the 147 and 148 stations" },
      { k: "Next to", v: "The Sector 150 premium belt" },
      { k: "Upside", v: "Noida International Airport side" },
    ],
    qas: [
      {
        q: "Is Sector 151 too early to buy into?",
        answer:
          "It depends entirely on your horizon. The metro is close, Sector 150 next door is established, and the airport sits on this side of the map. But this end of the corridor is still filling in, so buy here only if you can hold for years rather than months.",
        detail: [
          "We would rather send you to 135 or 143 for rental income today than sell you a plot in 151 that does not suit your timeline. That is not modesty — a client who buys the wrong thing does not come back.",
        ],
      },
      {
        q: "What are farm plots and who buys them?",
        answer:
          "Farm-plot developments sell larger land parcels on the outskirts, usually to buyers who want space, a weekend house, or a long-term land holding. They are a different product from a residential plot, with different rules on what you can build. Check that before you buy, not after.",
      },
    ],
    rows: [
      {
        h: "Farm plots",
        p: "Larger land parcels for long holds and weekend houses. Rules on what you can build vary — we check first.",
        tag: "Buy · Sell",
      },
      {
        h: "New launches",
        p: "Experion Saatori and the ultra-luxury end of this stretch, aimed at buyers positioning early.",
        tag: "Buy",
      },
      {
        h: "Long-horizon land",
        p: "For money that can sit still. The airport side and the corridor build-out are the argument.",
        tag: "Buy",
      },
    ],
    faqs: [
      {
        q: "How is Sector 151 connected to the rest of Noida?",
        a: "It sits near the 147 and 148 metro stations, at the far end of the Noida–Greater Noida Expressway corridor, and beside the established Sector 150 belt. It is further out than the office sectors, but it is not cut off.",
      },
      {
        q: "Will the new airport help property values in Sector 151?",
        a: "Noida International Airport sits on this side of the map, and sectors at this end of the corridor are positioned to benefit. Nobody can tell you by how much or how quickly. Treat it as a reason to be patient, not a reason to overpay today.",
      },
      {
        q: "What is Experion Saatori?",
        a: "It is an ultra-luxury development launching in Sector 151. Launches like this matter beyond their own buyers, because they signal what kind of purchaser a developer believes this end of the corridor can now attract.",
      },
      {
        q: "Should I buy in Sector 151 or Sector 145?",
        a: "145 is further along — it has a metro station, a major corporate allotment and an active plot market. 151 is earlier and cheaper with more time needed. If you want the shorter wait, 145. If you want the lower entry price, 151.",
      },
    ],
    related: [
      { href: "/sectors/sector-145-noida", label: "Sector 145", note: "Further along the same frontier" },
      { href: "/property-dealer-noida-expressway", label: "Property dealer on the Noida Expressway", note: "The corridor end to end" },
      { href: "/services/buy-property-noida", label: "Buying property in Noida", note: "How we work the buy side" },
      { href: "/guides/verify-property-documents-up", label: "Verifying property documents", note: "Critical on plot purchases" },
      { href: "/areas", label: "Areas we serve", note: "Noida, Greater Noida, YEIDA, NCR" },
    ],
  },
];

/** One-line character notes, used on the sectors index and the cornerstone page. */
export const SECTOR_ONE_LINERS: Record<string, string> = {
  "99": "Settled Authority housing. Resale flats, kothis and builder floors, bought by families who stay.",
  "105": "The premium kothi belt. You are buying the plot; the house on it is negotiable.",
  "108": "Kothis and plots on one side, Parx Laureate and Divine Meadows on the other.",
  "130": "Low-density Expressway pocket beside the Wish Town belt. Bought for space, let to the office belt.",
  "132": "Corporate towers with a retail street underneath. Weekday footfall, office-led.",
  "135": "The biggest IT-park sector on the belt — and a real residential one, which is why it works.",
  "141": "Quiet, next door to commercial 142. Less competition means more room to negotiate.",
  "143": "High-rise societies with their own metro station. The deepest rental market on this stretch.",
  "144": "Our home sector. Roastery Street, the Embassy business parks, and our office at CM-52.",
  "145": "Abadi plots and ultra-luxury launches in the same sector. One metro stop from 144.",
  "151": "The frontier. Farm plots and new launches, pointing at the airport side.",
};

/** Wall order — the reference file's order, with 144 in the middle as home. */
export const SECTOR_WALL_ORDER = ["99", "105", "108", "130", "132", "135", "141", "143", "144", "145", "151"];

export function getSector(slug: string): Sector | undefined {
  return SECTORS.find((s) => s.slug === slug);
}

export function getSectorByNumber(num: string): Sector | undefined {
  return SECTORS.find((s) => s.num === num);
}
