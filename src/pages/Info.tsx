import { Link } from 'react-router-dom';

export default function Info() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-surface-lowest">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-surface-lowest via-surface/80 to-surface"></div>
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10 py-32">
          <div className="max-w-3xl">
            <span className="font-label uppercase tracking-[0.3em] text-accent text-xs mb-4 block">Information</span>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 leading-[0.9] uppercase">
              Why Are Auctions<br />Trusted in Japan?
            </h1>
            <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
              In Japan, most used vehicles pass through auction networks before reaching dealerships. These auctions are where dealers, wholesalers, and exporters source their vehicles — before they ever appear on the retail market.
            </p>
          </div>
        </div>
      </section>

      {/* Scale of the System */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <span className="font-label text-accent uppercase tracking-[0.2em] text-xs block mb-4">Scale of the System</span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter mb-8">
              Japan's Vehicle Auction Market
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl mx-auto">
              Japan's vehicle auction market operates at a national level, forming one of the largest wholesale automotive systems in the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            <div className="bg-surface-high p-10 text-center">
              <span className="font-headline text-5xl md:text-6xl font-bold text-accent block mb-3">7.6M</span>
              <span className="font-label text-[10px] tracking-[0.2em] uppercase text-secondary">Vehicles Listed Annually</span>
            </div>
            <div className="bg-surface-high p-10 text-center">
              <span className="font-headline text-5xl md:text-6xl font-bold text-white block mb-3">5.3M</span>
              <span className="font-label text-[10px] tracking-[0.2em] uppercase text-secondary">Successfully Transacted</span>
            </div>
          </div>

          <p className="text-center text-xs text-outline">
            Source:{' '}
            <a href="https://www.ussnet.co.jp/ir/finance/highlight/index.html" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white transition-colors underline">
              Official auction reports published by USS auto auction
            </a>
          </p>
        </div>
      </section>

      {/* How the Market Works */}
      <section className="py-24 md:py-32 bg-surface-lowest">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="mb-16">
            <span className="font-label text-accent uppercase tracking-[0.2em] text-xs block mb-4">Market Structure</span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter">How the Market Actually Works</h2>
          </div>

          <div className="space-y-4">
            {[
              'Dealerships rely on auctions as their primary sourcing channel',
              'Market prices are determined through real-time bidding',
              'Vehicles move through a structured and transparent system',
            ].map((item) => (
              <div key={item} className="bg-surface-high p-6 flex items-start gap-4">
                <span className="text-accent mt-1 text-[8px]">&#9632;</span>
                <p className="text-on-surface-variant">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-secondary leading-relaxed">
            Auctions are not separate from dealerships — they are the system that dealerships depend on. Vehicles are first sourced, evaluated, and priced within these auction networks before being selected and offered to customers at retail.
          </p>
        </div>
      </section>

      {/* How Auctions Work */}
      <section id="how-auctions-work" className="py-24 md:py-32 bg-surface scroll-mt-24">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="mb-16">
            <span className="font-label text-accent uppercase tracking-[0.2em] text-xs block mb-4">The Auction Process</span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter">How Auctions Work</h2>
            <p className="mt-6 text-on-surface-variant leading-relaxed max-w-2xl">
              Vehicle auctions in Japan operate on scheduled auction days, where vehicles are inspected, listed, and offered for bidding within a controlled system used by licensed participants.
            </p>
          </div>

          <div className="space-y-8">
            {/* Vehicle Entry */}
            <div className="bg-surface-low p-8 md:p-10">
              <h3 className="font-headline text-xl font-bold text-white uppercase tracking-tight mb-4">Vehicle Entry</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Vehicles enter the auction system from dealerships, companies, lease returns, and private owners. Before listing, each vehicle passes through the auction facility for inspection and evaluation.
              </p>
            </div>

            {/* Inspection & Auction Sheet */}
            <div id="auction-sheet" className="bg-surface-high p-8 md:p-10 border-l-2 border-accent scroll-mt-24">
              <h3 className="font-headline text-xl font-bold text-white uppercase tracking-tight mb-4">Inspection & Auction Sheet</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                Each vehicle is inspected before listing by trained inspectors working under the auction operator. The inspection follows standardized criteria used across auction networks.
              </p>
              <h4 className="font-label text-[10px] tracking-[0.2em] uppercase text-accent mb-4">What is recorded:</h4>
              <ul className="space-y-2 mb-6">
                {[
                  'Exterior and interior condition',
                  'Mileage verification',
                  'Signs of repair, wear, or damage',
                  'Mechanical observations',
                  'Overall condition grading',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-secondary">
                    <span className="text-accent mt-1.5 text-[6px]">&#9632;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                The results are compiled into an official inspection report, commonly known as the <span className="text-accent font-medium">auction sheet</span>. This report includes written remarks and a condition diagram, providing a clear and consistent view of the vehicle's condition.
              </p>
              <div className="mt-8 bg-surface-lowest p-2 border border-white/5 overflow-hidden">
                <img src="/auction-sheet.jpeg" alt="USS Auction Sheet" className="w-full h-auto object-contain" />
              </div>
            </div>

            {/* Listing */}
            <div className="bg-surface-low p-8 md:p-10">
              <h3 className="font-headline text-xl font-bold text-white uppercase tracking-tight mb-4">Listing in the Auction System</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-4">Once inspection is complete, the vehicle is listed. Each listing includes:</p>
              <ul className="space-y-2">
                {['Auction sheet (inspection report)', 'Vehicle photographs', 'Basic specifications'].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-secondary">
                    <span className="text-accent mt-1.5 text-[6px]">&#9632;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Bidding */}
            <div className="bg-surface-low p-8 md:p-10">
              <h3 className="font-headline text-xl font-bold text-white uppercase tracking-tight mb-4">Bidding</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                On the scheduled auction day, vehicles are presented through a live bidding system. Licensed participants place bids in real time as the price increases. Each vehicle is sold to the highest bidder once bidding concludes. If the reserve price is not met, the vehicle may remain unsold and be offered again in a future auction.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://www.ussnet.co.jp/auction/flow/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-label text-[10px] tracking-[0.2em] uppercase text-accent hover:text-white transition-colors"
            >
              View official USS auction process
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Pricing & Service Fees */}
      <section id="pricing" className="py-24 md:py-32 bg-surface-lowest scroll-mt-24">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="mb-16">
            <span className="font-label text-accent uppercase tracking-[0.2em] text-xs block mb-4">Pricing & Service Fees</span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter mb-6">What This Service Covers</h2>
            <p className="text-on-surface-variant leading-relaxed max-w-2xl">
              Our service provides structured access to Japan's vehicle auction network, along with full support throughout the sourcing and purchase process.
            </p>
          </div>

          <ul className="space-y-2 mb-16">
            {[
              'Access to auction inventory across major auction groups',
              'Vehicle sourcing based on your requirements',
              'Review and interpretation of inspection reports (auction sheets)',
              'Bidding execution within your approved budget',
              'Purchase coordination and process handling',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-secondary">
                <span className="text-accent mt-1.5 text-[6px]">&#9632;</span>
                {item}
              </li>
            ))}
          </ul>

          {/* Fee Tables — White inverted panels for readability */}
          <div className="space-y-8">
            {/* Domestic */}
            <div className="bg-white/[0.03] p-8 md:p-10">
              <h3 className="font-headline text-lg font-bold text-white uppercase tracking-tight mb-6">Domestic Vehicle Sourcing (Japan)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-surface-high p-6">
                  <span className="font-label text-[10px] tracking-[0.2em] uppercase text-outline block mb-1">Under ¥1,000,000</span>
                  <span className="font-headline text-3xl font-bold text-accent">¥50,000</span>
                </div>
                <div className="bg-surface-high p-6">
                  <span className="font-label text-[10px] tracking-[0.2em] uppercase text-outline block mb-1">¥1,000,000 and above</span>
                  <span className="font-headline text-3xl font-bold text-accent">¥100,000</span>
                </div>
              </div>
            </div>

            {/* International */}
            <div className="bg-white/[0.03] p-8 md:p-10 border-l-2 border-accent">
              <h3 className="font-headline text-lg font-bold text-white uppercase tracking-tight mb-6">International Vehicle Sourcing (Export)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-surface-high p-6">
                  <span className="font-label text-[10px] tracking-[0.2em] uppercase text-outline block mb-1">Under ¥1,000,000</span>
                  <span className="font-headline text-3xl font-bold text-accent">¥25,000</span>
                </div>
                <div className="bg-surface-high p-6">
                  <span className="font-label text-[10px] tracking-[0.2em] uppercase text-outline block mb-1">¥1,000,000 and above</span>
                  <span className="font-headline text-3xl font-bold text-accent">¥50,000</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-2">
            {[
              'The service fee is fixed based on the structure above',
              'It is separate from the vehicle price, auction fees, and any additional services',
              'Vehicle pricing reflects actual auction results, with no hidden markups',
            ].map((item) => (
              <p key={item} className="text-xs text-outline leading-relaxed flex items-start gap-2">
                <span className="text-accent mt-0.5 text-[5px]">&#9632;</span>
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation & Delivery */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="mb-16">
            <span className="font-label text-accent uppercase tracking-[0.2em] text-xs block mb-4">After Purchase</span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter">Documentation & Delivery</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Domestic */}
            <div className="bg-surface-low p-8 md:p-10">
              <h3 className="font-headline text-lg font-bold text-white uppercase tracking-tight mb-6">For Vehicles Within Japan</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-6">Vehicles purchased for domestic use are prepared for handover based on your requirements:</p>
              <ul className="space-y-2">
                {[
                  'Registration procedures, inspection, documentation',
                  'Vehicle preparation, maintenance, servicing',
                  'Interior and exterior detailing, glass coating',
                  'Domestic transport from the auction location',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-secondary">
                    <span className="text-accent mt-1.5 text-[6px]">&#9632;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Export */}
            <div className="bg-surface-low p-8 md:p-10">
              <h3 className="font-headline text-lg font-bold text-white uppercase tracking-tight mb-6">For International Export</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-6">Vehicles purchased for export are prepared through a structured export process:</p>
              <div className="mb-6 bg-surface-lowest p-2 border border-white/5 overflow-hidden">
                <img src="/export-certificate.jpeg" alt="Export Certificate Sample" className="w-full h-auto object-contain" />
                <p className="text-[10px] font-label tracking-widest uppercase text-outline text-center mt-2 pb-1">Sample Export Certificate (details partially hidden for privacy)</p>
              </div>
              <ul className="space-y-2">
                {[
                  'Export documentation and deregistration',
                  'Official export certificate issuance',
                  'Preparation for shipping',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-secondary">
                    <span className="text-accent mt-1.5 text-[6px]">&#9632;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Auction Invoice — Transparency */}
      <section className="py-24 md:py-32 bg-surface-lowest">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="mb-12">
            <span className="font-label text-accent uppercase tracking-[0.2em] text-xs block mb-4">Full Transparency</span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter mb-6">Official Auction Invoice</h2>
            <p className="text-on-surface-variant leading-relaxed max-w-2xl">
              Unlike most exporters, we share the official auction invoice with every purchase — the exact document issued by the auction house, showing the precise amount paid. No adjustments, no markups hidden in the numbers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="bg-surface-lowest p-2 border border-white/5 overflow-hidden">
              <img src="/auction-invoice.jpeg" alt="Official Auction Invoice Sample" className="w-full h-auto object-contain" />
              <p className="text-[10px] font-label tracking-widest uppercase text-outline text-center mt-2 pb-1">Sample Auction Invoice (details partially hidden for privacy)</p>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Issued by the auction house', desc: 'The invoice comes directly from the auction operator — not generated by us.' },
                { title: 'Exact purchase amount', desc: 'The figure shown is what was paid at auction. No adjustments are made before sharing.' },
                { title: 'Shared with every purchase', desc: 'The invoice is provided as standard, not on request. It is part of the process.' },
                { title: 'Basis for your final invoice', desc: 'Your invoice from us is built on top of this document — fully traceable.' },
              ].map((item) => (
                <div key={item.title} className="bg-surface-high p-5 border-l-2 border-accent">
                  <h4 className="font-headline text-sm font-bold text-white uppercase tracking-tight mb-1">{item.title}</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Methods */}
      <section id="shipping" className="py-24 md:py-32 bg-surface-lowest scroll-mt-24">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="mb-16">
            <span className="font-label text-accent uppercase tracking-[0.2em] text-xs block mb-4">Logistics</span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter">Global Shipping Methods</h2>
            <p className="mt-6 text-on-surface-variant leading-relaxed max-w-2xl">
              Vehicles are shipped from Japan using two primary methods. The appropriate method is selected based on the vehicle, destination, and your preference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-surface-high p-8 md:p-10">
              <h3 className="font-headline text-xl font-bold text-accent uppercase tracking-tight mb-4">RoRo</h3>
              <span className="font-label text-[10px] tracking-[0.2em] uppercase text-outline block mb-6">Roll-on / Roll-off</span>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                Vehicles are driven directly onto the vessel and secured inside the ship for transport. The most commonly used and cost-effective method.
              </p>
              <p className="text-xs text-outline">Suitable for standard, running vehicles.</p>
              <div className="mt-6 bg-surface-lowest p-1 border border-white/5 overflow-hidden">
                <img src="/roro.jpeg" alt="RoRo vessel loading vehicles at port" className="w-full h-48 object-cover" />
              </div>
            </div>

            <div className="bg-surface-high p-8 md:p-10">
              <h3 className="font-headline text-xl font-bold text-accent uppercase tracking-tight mb-4">Container</h3>
              <span className="font-label text-[10px] tracking-[0.2em] uppercase text-outline block mb-6">Enclosed Container Shipping</span>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                The vehicle is loaded into a container and secured for transport. Provides a higher level of protection.
              </p>
              <p className="text-xs text-outline">Used for high-value or non-running vehicles, or when shipping spare parts together.</p>
              <div className="mt-6 bg-surface-lowest p-1 border border-white/5 overflow-hidden">
                <img src="/container.jpeg" alt="Container ship at port with loading cranes" className="w-full h-48 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
          <span className="font-label text-accent uppercase tracking-[0.2em] text-xs block mb-4">Why KMT Global</span>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter mb-12">Why Choose Us</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Direct Access', desc: 'Direct access to Japan\'s auction network' },
              { title: 'Transparent Pricing', desc: 'Pricing based on actual auction results, verified through official invoices' },
              { title: 'No Hidden Markups', desc: 'No hidden markups or variable commissions' },
              { title: 'Structured Process', desc: 'A structured and transparent process from sourcing to delivery' },
            ].map((item) => (
              <div key={item.title} className="bg-surface-low p-8 text-left hover:bg-surface-high transition-colors">
                <h3 className="font-headline text-sm font-bold text-accent uppercase tracking-wide mb-3">{item.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-accent text-on-accent overflow-hidden relative">
        <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-headline text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4 leading-none">
            Request a Vehicle
          </h2>
          <p className="font-body text-on-accent/70 text-lg max-w-xl mx-auto mb-12">
            Submit your requirements to proceed.
          </p>
          <Link
            to="/request"
            className="inline-block bg-surface text-white px-12 py-5 font-headline font-bold uppercase tracking-widest text-sm hover:bg-surface-highest transition-all duration-300 active:scale-95"
          >
            Request a Vehicle
          </Link>
        </div>
      </section>
    </div>
  );
}
