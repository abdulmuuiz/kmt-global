import { Link } from 'react-router-dom';

const FEATURED_VEHICLES = [
  {
    name: '1999 Mazda RX-7 FD3S',
    price: '¥7,250,000',
    grade: '4.5',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Nissan Silvia S15',
    price: '¥4,100,000',
    grade: '4.0',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Toyota Supra RZ',
    price: '¥12,800,000',
    grade: '4.5',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: '1992 Honda NSX',
    price: '¥14,400,000',
    grade: '5.0',
    image: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-surface-lowest">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=2000"
            alt="Japan Auction"
            className="w-full h-full object-cover grayscale opacity-25"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-surface/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10 py-32">
          <div className="max-w-3xl">
            <span className="font-label uppercase tracking-[0.3em] text-accent text-xs mb-4 block">Direct Access to Japan's Vehicle Auctions</span>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 leading-[0.9] uppercase">
              Buy Vehicles at<br />True Market Prices
            </h1>
            <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed mb-10">
              Access the same auction network as dealers. Secure vehicles directly through Japan's wholesale system — no retail markups, no hidden margins.
            </p>
            <Link
              to="/request"
              className="inline-flex items-center gap-3 bg-accent text-on-accent px-10 py-4 font-headline font-bold uppercase tracking-widest text-sm hover:bg-accent-dim transition-all active:scale-95"
            >
              Request a Vehicle
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-surface-lowest border-y border-white/5 py-8">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: '120+', label: 'Auction\nHouses', accent: true },
              { value: 'Direct', label: 'Auction\nAccess', accent: false },
              { value: 'No', label: 'Hidden\nMarkups', accent: false },
              { value: 'Licensed', label: 'Exporter\nin Japan', accent: false },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-4">
                <span className={`font-headline text-2xl md:text-3xl font-bold ${stat.accent ? 'text-accent' : 'text-white'}`}>{stat.value}</span>
                <span className="font-label uppercase tracking-widest text-secondary text-[10px] leading-tight whitespace-pre-line">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Access the Same Auction Network */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="font-label text-accent uppercase tracking-[0.2em] text-xs block mb-4">The Wholesale Advantage</span>
            <h2 className="font-headline text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter mb-8">
              Access the Same Auction<br />Network as Dealers
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
              In Japan, vehicles are sourced through dealer-only auction networks before reaching dealerships. You access the same system — securing vehicles directly through auction.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works — 4 Steps */}
      <section className="py-24 md:py-32 bg-surface-lowest">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="font-label text-accent uppercase tracking-[0.2em] text-xs block mb-4">The Process</span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter">How It Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                num: '01',
                title: 'Submit Your Requirements',
                desc: 'Tell us what you\'re looking for. Make, model, year, budget, and destination.',
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
              },
              {
                num: '02',
                title: 'We Source from Auctions',
                desc: 'Vehicles are identified through Japan\'s auction network based on your exact specifications.',
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />,
                highlight: true,
              },
              {
                num: '03',
                title: 'You Review & Approve',
                desc: 'Auction sheets, inspection reports, and photos are provided for your review before any action.',
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
              },
              {
                num: '04',
                title: 'We Bid & Secure',
                desc: 'Bidding is conducted strictly within your approved limit. Vehicle secured and shipped to you.',
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />,
              },
            ].map((step) => (
              <div
                key={step.num}
                className={`p-8 md:p-10 ${step.highlight ? 'bg-accent text-on-accent' : 'bg-surface-high group hover:bg-surface-variant transition-colors'}`}
              >
                <div className="flex items-start justify-between mb-8">
                  <span className={`font-headline text-5xl font-black select-none ${step.highlight ? 'text-black/10' : 'text-white/5 group-hover:text-accent/10 transition-colors'}`}>{step.num}</span>
                  <div className={`w-10 h-10 border flex items-center justify-center ${step.highlight ? 'border-black/20' : 'border-accent/30'}`}>
                    <svg className={`w-5 h-5 ${step.highlight ? 'text-on-accent' : 'text-accent'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">{step.icon}</svg>
                  </div>
                </div>
                <h3 className={`font-headline text-lg font-bold mb-3 uppercase ${step.highlight ? '' : 'text-white'}`}>{step.title}</h3>
                <p className={`text-sm leading-relaxed ${step.highlight ? 'opacity-80' : 'text-on-surface-variant'}`}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparent Pricing */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="font-label text-accent uppercase tracking-[0.2em] text-xs block mb-4">Transparent Pricing</span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter mb-6">No Hidden Markups</h2>
            <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
              Vehicles are secured directly through Japan's auction network. The official auction invoice reflects the exact purchase amount.
            </p>
          </div>

          {/* Wholesale Advantage Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <div className="bg-surface-low p-8 md:p-12 space-y-8 opacity-60">
              <div>
                <span className="font-label text-[10px] tracking-[0.2em] uppercase text-outline block mb-2">Typical Retail Exporter</span>
                <div className="h-px w-12 bg-outline-variant"></div>
              </div>
              <div className="space-y-6">
                {[
                  { label: 'Inventory', value: 'Limited dealer stock' },
                  { label: 'Markup', value: '30 — 50% above auction price' },
                  { label: 'Pricing', value: 'Fixed, non-negotiable' },
                  { label: 'History', value: 'Partial or hidden' },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="font-label text-xs uppercase tracking-widest text-outline">{item.label}</span>
                    <span className="text-sm text-on-surface-variant">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-surface-high p-8 md:p-12 space-y-8 border-l-2 border-accent">
              <div>
                <span className="font-label text-[10px] tracking-[0.2em] uppercase text-accent block mb-2">KMT Global — Direct Access</span>
                <div className="h-px w-12 bg-accent"></div>
              </div>
              <div className="space-y-6">
                {[
                  { label: 'Inventory', value: '120+ dealer auction houses' },
                  { label: 'Markup', value: 'Wholesale price + flat fee' },
                  { label: 'Pricing', value: 'Transparent auction invoice' },
                  { label: 'History', value: 'Verified auction grading sheet' },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="font-label text-xs uppercase tracking-widest text-secondary">{item.label}</span>
                    <span className="text-sm text-white font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recently Sourced */}
      <section className="py-24 md:py-32 bg-surface-lowest">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <span className="font-label text-accent uppercase tracking-[0.2em] text-xs block mb-4">The Source</span>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter">Recently Sourced</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FEATURED_VEHICLES.map((vehicle) => (
              <div key={vehicle.name} className="group bg-surface-high overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 bg-accent text-on-accent px-2 py-0.5 font-label text-[10px] font-bold tracking-widest">
                    GRADE {vehicle.grade}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-headline font-bold text-sm uppercase tracking-tight text-white mb-2">{vehicle.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="font-headline text-lg font-bold text-accent">{vehicle.price}</span>
                    <span className="font-label text-[9px] tracking-widest uppercase text-outline">Auction Won</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services — Japan Sourcing & Global Export */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-label text-accent uppercase tracking-[0.2em] text-xs block mb-4">Our Services</span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter">Domestic & Global Vehicle Sourcing</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <div className="bg-surface-low p-10 md:p-14 group hover:bg-surface-high transition-colors relative overflow-hidden">
              <span className="font-headline text-[8rem] font-black text-white/[0.02] absolute -bottom-8 -right-4 leading-none select-none">JP</span>
              <div className="relative z-10">
                <span className="font-label text-[10px] tracking-[0.2em] uppercase text-accent block mb-4">Domestic</span>
                <h3 className="font-headline text-2xl md:text-3xl font-bold text-white uppercase tracking-tight mb-4">Japan Sourcing</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-8">Purchase and delivery within Japan through the auction network. Full registration, preparation, and domestic transport.</p>
                <Link to="/japan-sourcing" className="inline-flex items-center gap-2 font-label text-[10px] tracking-[0.2em] uppercase text-accent hover:text-white transition-colors">
                  Explore Japan Sourcing
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </div>

            <div className="bg-surface-low p-10 md:p-14 group hover:bg-surface-high transition-colors relative overflow-hidden">
              <span className="font-headline text-[8rem] font-black text-white/[0.02] absolute -bottom-8 -right-4 leading-none select-none">GL</span>
              <div className="relative z-10">
                <span className="font-label text-[10px] tracking-[0.2em] uppercase text-accent block mb-4">International</span>
                <h3 className="font-headline text-2xl md:text-3xl font-bold text-white uppercase tracking-tight mb-4">Global Export</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-8">End-to-end export from Japan, including documentation, shipping, and port delivery worldwide.</p>
                <Link to="/global-export" className="inline-flex items-center gap-2 font-label text-[10px] tracking-[0.2em] uppercase text-accent hover:text-white transition-colors">
                  Explore Global Export
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* You Stay in Control */}
      <section className="py-24 md:py-28 bg-surface-lowest">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 mx-auto mb-8 border border-accent/30 flex items-center justify-center">
              <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            </div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter mb-6">You Stay in Control</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
              No bidding or purchase is made without your approval. Every step remains aligned with your approved requirements and budget.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-accent text-on-accent overflow-hidden relative">
        <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
          <span className="font-label text-[10px] tracking-[0.4em] uppercase font-bold mb-6 block opacity-60">Start Today</span>
          <h2 className="font-headline text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase mb-4 leading-none">
            Start Your Vehicle<br />Sourcing
          </h2>
          <p className="font-body text-on-accent/70 text-lg max-w-2xl mx-auto mb-12">
            Submit your requirements to begin sourcing from Japan's auction network.
          </p>
          <Link
            to="/request"
            className="inline-block bg-surface text-white px-12 py-5 font-headline font-bold uppercase tracking-widest text-sm hover:bg-surface-highest transition-all duration-300 active:scale-95"
          >
            Request a Vehicle
          </Link>
        </div>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none select-none overflow-hidden flex items-center justify-center">
          <span className="text-[14rem] font-black font-headline leading-none tracking-tighter">KMT</span>
        </div>
      </section>
    </div>
  );
}
