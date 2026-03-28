import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-surface-lowest">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=2000"
            alt="Japan Sourcing"
            className="w-full h-full object-cover grayscale opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="font-label uppercase tracking-[0.3em] text-secondary text-xs mb-4 block">Precision Automotive Sourcing</span>
            <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-8 leading-[0.9] uppercase">
              Japan<br />Sourcing
            </h1>
            <p className="font-body text-xl text-on-surface-variant max-w-xl leading-relaxed mb-10">
              Access over 120 auction houses across Japan through our direct bidding network. Engineering transparency into every transaction.
            </p>
            <div className="flex gap-4">
              <Link
                to="/global-export"
                className="bg-primary text-on-primary px-10 py-4 font-label font-bold uppercase tracking-widest text-sm hover:bg-secondary transition-all active:scale-95"
              >
                Request a Vehicle
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-surface-lowest py-24 border-y border-white/5">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="flex flex-col">
              <span className="font-headline text-5xl font-bold text-white mb-2">120+</span>
              <span className="font-label uppercase tracking-widest text-secondary text-xs">Auction Houses</span>
              <div className="h-px w-12 bg-primary mt-6"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-headline text-5xl font-bold text-white mb-2">DIRECT</span>
              <span className="font-label uppercase tracking-widest text-secondary text-xs">Auction Access</span>
              <div className="h-px w-12 bg-primary mt-6"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-headline text-5xl font-bold text-white mb-2">END-TO-END</span>
              <span className="font-label uppercase tracking-widest text-secondary text-xs">Purchase & Delivery</span>
              <div className="h-px w-12 bg-primary mt-6"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Blueprint — 9 Steps */}
      <section className="py-32 bg-surface">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tighter">The Sourcing Blueprint</h2>
              <p className="font-body text-on-surface-variant text-lg">A rigorous 9-step methodology designed to ensure mechanical integrity and financial transparency.</p>
            </div>
            <div className="text-right">
              <span className="font-label text-5xl md:text-6xl font-black text-surface-highest select-none">01—09</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-y-24">
            {/* Step 1 */}
            <div className="md:col-span-4 md:pr-12">
              <span className="font-headline text-7xl md:text-8xl font-black text-white/5 block mb-2 select-none">01</span>
              <h3 className="font-headline text-2xl font-bold text-white mb-4 uppercase">Vehicle Request</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">Initiate your search by specifying make, model, year, and condition requirements. Our system logs your precision parameters.</p>
            </div>
            <div className="md:col-span-8 bg-surface-low h-64 md:h-80 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
                alt="Vehicle Request"
                className="w-full h-full object-cover grayscale opacity-40 mix-blend-luminosity"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 right-6 font-label text-[10px] tracking-[0.3em] uppercase bg-primary text-on-primary px-3 py-1">INTERFACE VIEW</div>
            </div>

            {/* Step 2 & 3 */}
            <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
              <div className="bg-surface-high p-8 md:p-12 flex flex-col justify-between min-h-[300px]">
                <div>
                  <span className="font-headline text-4xl font-black text-white/10 block mb-4">02</span>
                  <h3 className="font-headline text-2xl font-bold text-white mb-4 uppercase">Auction Sourcing</h3>
                  <p className="font-body text-on-surface-variant leading-relaxed">Our specialists scan 120+ daily auction feeds to match your specific request with available units.</p>
                </div>
                <div className="mt-8 border-l-2 border-primary pl-6">
                  <span className="block font-label text-[10px] text-secondary mb-2">LIVE DATA FEED</span>
                  <div className="space-y-2">
                    <div className="h-1 bg-surface-highest w-full"></div>
                    <div className="h-1 bg-surface-highest w-3/4"></div>
                    <div className="h-1 bg-primary w-1/2"></div>
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-12 border border-white/5 flex flex-col justify-between min-h-[300px]">
                <div>
                  <span className="font-headline text-4xl font-black text-white/10 block mb-4">03</span>
                  <h3 className="font-headline text-2xl font-bold text-white mb-4 uppercase">Vehicle Selection</h3>
                  <p className="font-body text-on-surface-variant leading-relaxed">We present a curated shortlist of vehicles that meet our strict internal quality benchmarks for your review.</p>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-2">
                  <div className="aspect-square bg-surface-highest"></div>
                  <div className="aspect-square bg-surface-highest"></div>
                  <div className="aspect-square bg-white"></div>
                </div>
              </div>
            </div>

            {/* Step 4 & 5 */}
            <div className="md:col-span-7 bg-surface-container p-8 md:p-12">
              <span className="font-headline text-4xl font-black text-white/10 block mb-4">04</span>
              <h3 className="font-headline text-2xl font-bold text-white mb-6 uppercase">Inspection & Verification</h3>
              <p className="font-body text-on-surface-variant leading-relaxed mb-8">Rigorous decoding of the Japanese auction sheet. We verify mechanical grade, exterior condition, and interior cleanliness to ensure zero surprises.</p>
              <div className="bg-surface-lowest p-6 border border-white/10">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-label text-[10px] text-secondary">SPECIMEN: AUCTION SHEET #8821</span>
                  <span className="font-label text-[10px] bg-primary text-on-primary px-2 py-0.5">VERIFIED</span>
                </div>
                <div className="h-32 bg-surface-high"></div>
              </div>
            </div>
            <div className="md:col-span-5 flex items-center justify-center p-8 md:p-12">
              <div>
                <span className="font-headline text-4xl font-black text-white/10 block mb-4">05</span>
                <h3 className="font-headline text-2xl font-bold text-white mb-4 uppercase">Price Confirmation</h3>
                <p className="font-body text-on-surface-variant leading-relaxed">Calculation of the total landed cost including auction fees, taxes, and shipping logistics.</p>
              </div>
            </div>

            {/* Steps 6, 7, 8 */}
            <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              <div className="bg-surface-low p-8 border-t-4 border-white">
                <span className="font-headline text-xl font-bold text-white block mb-2">06</span>
                <h4 className="font-label uppercase tracking-widest text-xs text-secondary mb-4">Deposit Confirmation</h4>
                <p className="text-sm font-body text-on-surface-variant">Security deposit required to authorize live bidding protocols.</p>
              </div>
              <div className="bg-primary p-8 text-on-primary">
                <span className="font-headline text-xl font-bold block mb-2">07</span>
                <h4 className="font-label uppercase tracking-widest text-xs text-on-primary/70 mb-4">Auction Bidding</h4>
                <p className="text-sm font-body">Live participation in the auction house. Our team executes bids with millisecond precision.</p>
              </div>
              <div className="bg-surface-low p-8 border-t-4 border-white">
                <span className="font-headline text-xl font-bold text-white block mb-2">08</span>
                <h4 className="font-label uppercase tracking-widest text-xs text-secondary mb-4">Final Payment</h4>
                <p className="text-sm font-body text-on-surface-variant">Settlement of the balance upon successful auction acquisition.</p>
              </div>
            </div>

            {/* Step 9 */}
            <div className="md:col-span-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-surface-highest p-8 md:p-12">
              <div className="md:w-1/2">
                <span className="font-headline text-5xl md:text-6xl font-black text-white/10 block mb-4">09</span>
                <h3 className="font-headline text-2xl md:text-3xl font-bold text-white mb-6 uppercase tracking-tight">Delivery & Handover</h3>
                <p className="font-body text-on-surface-variant leading-relaxed text-lg">Final logistics execution. We handle shipping documentation, local compliance, and delivery to your doorstep.</p>
              </div>
              <div className="md:w-1/2 h-48 md:h-64 w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&q=80&w=800"
                  alt="Delivery"
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section — Inverted */}
      <section className="py-32 bg-primary text-on-primary overflow-hidden relative">
        <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
          <span className="font-label text-[10px] tracking-[0.4em] uppercase font-bold mb-6 block">Ready to acquire?</span>
          <h2 className="font-headline text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase mb-8 leading-none">
            Engineer Your<br />Acquisition
          </h2>
          <p className="font-body text-on-primary/80 text-xl max-w-2xl mx-auto mb-12">
            Start the process today and gain direct access to the world's most transparent automotive inventory.
          </p>
          <Link
            to="/global-export"
            className="inline-block bg-surface text-white px-12 py-6 font-label uppercase tracking-widest text-sm hover:bg-surface-highest transition-all duration-300 active:scale-95"
          >
            Request a Vehicle
          </Link>
        </div>
        {/* Decorative watermark */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none overflow-hidden flex flex-wrap gap-4 items-center justify-center">
          <span className="text-[12rem] font-black font-headline leading-none">KMT</span>
        </div>
      </section>
    </div>
  );
}
