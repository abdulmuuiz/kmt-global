import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <header className="relative h-[500px] md:h-[716px] flex items-end px-6 lg:px-8 pb-16 overflow-hidden bg-surface-lowest">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=2000"
            alt="Info Background"
            className="w-full h-full object-cover opacity-40 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl">
          <p className="font-label text-[0.75rem] tracking-[0.3em] uppercase mb-4 opacity-60">Insight & Infrastructure</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold leading-[0.9] tracking-tighter mb-8 uppercase">Precision<br />Sourcing.</h1>
          <p className="text-lg md:text-xl max-w-2xl text-on-surface-variant font-light">An exhaustive overview of the Japanese automotive ecosystem and KMT Global's operational framework.</p>
        </div>
      </header>

      {/* Why Auctions & Market Scale */}
      <section className="px-6 lg:px-8 py-24 bg-surface">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-5">
            <h2 className="text-3xl md:text-4xl font-headline font-bold uppercase tracking-tight mb-8">Why Are Auctions Trusted in Japan?</h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed">
              <p>In Japan, the automotive auction system is the backbone of the domestic and international trade. Unlike private sales, auctions provide a regulated, transparent environment where every vehicle is independently assessed by certified inspectors.</p>
              <p>This institutionalized trust allows buyers from around the globe to transact with confidence, knowing that the "Auction Sheet" provides a forensic level of detail on the vehicle's condition, history, and grade.</p>
            </div>
          </div>
          <div className="md:col-span-7 bg-surface-low p-8 md:p-12 flex flex-col justify-center">
            <p className="font-label text-[0.75rem] tracking-widest uppercase mb-12 opacity-50">Market Metrics</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div>
                <span className="block text-5xl md:text-7xl font-headline font-bold mb-2">7.6M</span>
                <span className="block font-label text-[0.75rem] uppercase tracking-widest text-on-surface-variant">Annual Listings</span>
              </div>
              <div>
                <span className="block text-5xl md:text-7xl font-headline font-bold mb-2">5.3M</span>
                <span className="block font-label text-[0.75rem] uppercase tracking-widest text-on-surface-variant">Successful Transactions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Auction Protocol */}
      <section className="px-6 lg:px-8 py-24 bg-surface-lowest">
        <div className="max-w-[1920px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline font-bold uppercase tracking-tight mb-16 text-center">The Auction Protocol</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/10">
            {[
              { title: 'Vehicle Entry', desc: 'Cars are delivered to one of 100+ auction sites across Japan. Documentation is verified against national police records.' },
              { title: 'Inspection', desc: 'Neutral inspectors perform a 300-point check, grading the exterior, interior, and mechanical state on a scale of 0-S.' },
              { title: 'Data Release', desc: 'The auction sheet and high-resolution photography are uploaded to the digital clearinghouse 24-48 hours before bidding.' },
              { title: 'Bidding', desc: 'Bidding takes place in milliseconds via high-speed digital terminals. Average bid duration per car is only 20-40 seconds.' },
            ].map((step) => (
              <div key={step.title} className="bg-surface p-6 md:p-8 space-y-4">
                <h3 className="font-headline font-bold uppercase pt-4">{step.title}</h3>
                <p className="text-sm text-on-surface-variant">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspection & Auction Sheet */}
      <section className="px-6 lg:px-8 py-24 bg-surface-low">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
          <div className="lg:col-span-4">
            <h2 className="text-2xl md:text-3xl font-headline font-bold uppercase tracking-tight mb-6">Inspection & Auction Sheet</h2>
            <p className="text-on-surface-variant mb-8 leading-relaxed">The Auction Sheet is the most critical document in the process. It is a technical diagram marking every scratch, dent, and mechanical anomaly with standardized codes.</p>
            <div className="space-y-4">
              <div className="bg-surface-high p-4 border-l-2 border-white">
                <p className="font-label text-xs uppercase tracking-widest text-primary mb-1">Grade S/6/5</p>
                <p className="text-xs text-on-surface-variant">Essentially new condition. No visible wear.</p>
              </div>
              <div className="bg-surface-high p-4">
                <p className="font-label text-xs uppercase tracking-widest opacity-60 mb-1">Grade 4.5/4</p>
                <p className="text-xs text-on-surface-variant">Excellent used condition. Minor cosmetic marks only.</p>
              </div>
              <div className="bg-surface-high p-4">
                <p className="font-label text-xs uppercase tracking-widest opacity-60 mb-1">Grade R/RA</p>
                <p className="text-xs text-on-surface-variant">Accident repair history. Handled with extreme caution.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8 bg-surface-high p-6 md:p-12">
            <div className="aspect-video bg-surface-container flex items-center justify-center">
              <span className="font-label text-[10px] tracking-[0.3em] uppercase text-outline">Auction Sheet Specimen</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Fee Structure */}
      <section className="px-6 lg:px-8 py-24 bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline font-bold uppercase tracking-tight mb-16 text-center">Service Fee Structure</h2>
          <div className="space-y-px bg-white/10 border border-white/10">
            <div className="grid grid-cols-2 bg-surface-lowest p-6">
              <div className="font-label uppercase tracking-widest text-xs opacity-50">Sourcing Channel</div>
              <div className="font-label uppercase tracking-widest text-xs opacity-50 text-right">Fixed Service Fee</div>
            </div>
            <div className="grid grid-cols-2 bg-surface p-6 md:p-8 items-center">
              <div className="font-headline font-bold uppercase text-lg md:text-xl">Domestic Japan</div>
              <div className="text-right">
                <span className="text-xl md:text-2xl font-headline">&yen;50,000</span>
                <p className="text-[0.65rem] font-label uppercase tracking-tighter opacity-50">+ In-land transport</p>
              </div>
            </div>
            <div className="grid grid-cols-2 bg-surface p-6 md:p-8 items-center">
              <div className="font-headline font-bold uppercase text-lg md:text-xl">International Export</div>
              <div className="text-right">
                <span className="text-xl md:text-2xl font-headline">&yen;100,000</span>
                <p className="text-[0.65rem] font-label uppercase tracking-tighter opacity-50">+ FOB Charges</p>
              </div>
            </div>
          </div>
          <p className="text-center mt-8 text-[0.7rem] font-label uppercase tracking-widest text-on-surface-variant">Note: All auction house success fees and taxes are billed at pure cost. No hidden margins.</p>
        </div>
      </section>

      {/* Logistics & Compliance */}
      <section className="px-6 lg:px-8 py-24 bg-surface-lowest">
        <div className="max-w-[1920px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline font-bold uppercase tracking-tight mb-16">Logistics & Compliance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div className="space-y-8">
              <div className="aspect-video bg-surface-high overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&q=80&w=800"
                  alt="Domestic Japan"
                  className="w-full h-full object-cover grayscale opacity-60"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-headline font-bold uppercase border-b border-white/10 pb-4">Domestic Japan</h3>
              <p className="text-on-surface-variant leading-relaxed">Full handling of the 'Shako Shomeisho' (Parking Space Certificate), 'Inkan' registration, and 'Shaken' inspections. We deliver directly to your door anywhere in the archipelago.</p>
            </div>
            <div className="space-y-8">
              <div className="aspect-video bg-surface-high overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=800"
                  alt="International Export"
                  className="w-full h-full object-cover grayscale opacity-60"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-headline font-bold uppercase border-b border-white/10 pb-4">International Export</h3>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-label text-xs uppercase tracking-widest mb-2 font-bold">RoRo Shipping</h4>
                  <p className="text-xs text-on-surface-variant">Cost-effective 'Roll-on Roll-off' for standard passenger vehicles.</p>
                </div>
                <div>
                  <h4 className="font-label text-xs uppercase tracking-widest mb-2 font-bold">Container</h4>
                  <p className="text-xs text-on-surface-variant">Maximum protection for high-value exotics and classic collectibles.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The KMT Standard */}
      <section className="px-6 lg:px-8 py-24 bg-surface border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold uppercase tracking-tight mb-12">The KMT Standard</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="font-headline font-bold uppercase">Radical Transparency</h3>
              <p className="text-xs text-on-surface-variant">We provide original auction house invoices. You pay exactly what the hammer price was.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-headline font-bold uppercase">Expert Curation</h3>
              <p className="text-xs text-on-surface-variant">Our inspectors are on the ground at major auctions like USS Tokyo and BCN to provide real-time feedback.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-headline font-bold uppercase">Global Network</h3>
              <p className="text-xs text-on-surface-variant">Optimized shipping routes to North America, Europe, SE Asia, and Australasia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-8 py-32 bg-primary text-on-primary text-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold uppercase tracking-tighter mb-8">Ready to start?</h2>
        <p className="font-label uppercase tracking-widest text-sm mb-12 opacity-70">Begin your precision search with KMT Global today.</p>
        <Link
          to="/global-export"
          className="inline-block bg-surface text-white px-12 py-5 font-headline font-bold uppercase tracking-widest hover:bg-surface-highest transition-all text-lg active:scale-95"
        >
          Request a Vehicle
        </Link>
      </section>
    </div>
  );
}
