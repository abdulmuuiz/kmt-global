import { Link } from 'react-router-dom';

const STEPS = [
  {
    num: '01',
    title: 'Vehicle Request',
    desc: 'The process begins with your vehicle request, based on your specific requirements.',
    details: ['Make', 'Model', 'Year range', 'Mileage', 'Transmission', 'Color', 'Destination country', 'Grade', 'Budget range'],
    note: 'The more precise your request, the more accurately we can identify suitable vehicles.',
    link: { text: 'Submit your request', to: '/request' },
  },
  {
    num: '02',
    title: 'Auction Search',
    desc: 'With access to 140+ auction houses across Japan, we source vehicles directly from the market based on your requirements.',
    details: ['Real-time sourcing from auctions', 'Additional access through dealer and private networks'],
  },
  {
    num: '03',
    title: 'Vehicle Selection',
    desc: 'We carefully shortlist vehicles that match your exact requirements, ensuring only verified and suitable options are presented for your review.',
    details: ['Selection based on condition, mileage, and price', 'Supported by detailed photos and auction sheets'],
    image: '/vehicle-selection.png',
  },
  {
    num: '04',
    title: 'Auction Sheet Review',
    desc: 'Each vehicle comes with an official inspection report called an auction sheet.',
    details: ['Overall condition grade', 'Verified mileage', 'Exterior damage markings', 'Interior condition notes', 'Inspector remarks'],
    note: 'We review the auction sheet, provide clear translations, and offer professional guidance so you fully understand the vehicle\'s condition.',
    link: { text: 'Learn about auction sheets', to: '/info#auction-sheet' },
    image: '/auction-sheet-review.png',
  },
  {
    num: '05',
    title: 'Price Confirmation & Deposit',
    desc: 'After selecting your vehicle, we provide recent sales data to give you a clear view of current market values. A maximum bid is then agreed based on the vehicle\'s condition, mileage, auction grade, and market trends. This defines the highest price we will bid on your behalf, ensuring a strategic approach while protecting you from overpaying.',
    deposits: [
      { range: 'Under ¥1,000,000', amount: '¥100,000' },
      { range: '¥1,000,000 or more', amount: '10% of market price' },
    ],
    note: 'Your deposit is applied strictly toward your approved vehicle purchase. No action is taken without your confirmation.',
  },
  {
    num: '06',
    title: 'Auction Bidding',
    desc: 'Once your deposit is confirmed, we proceed with auction bidding on your behalf through Japan\'s auction network.',
    details: ['All bids conducted within your pre-approved maximum', 'Successful bid: vehicle secured, process moves forward', 'Unsuccessful bid: sourcing continues in upcoming auctions'],
    note: 'You remain fully informed throughout the bidding process.',
    link: { text: 'How auctions work', to: '/info#how-auctions-work' },
  },
  {
    num: '07',
    title: 'Final Payment',
    desc: 'Once your vehicle is successfully secured, a final invoice is issued.',
    details: ['Auction invoice price — exact amount paid at auction', 'Service fee', 'Domestic transport within Japan'],
    note: 'The official auction invoice is shared for verification. Payment is required within 3 working days after invoice issuance.',
    link: { text: 'View service fees', to: '/info#pricing' },
  },
  {
    num: '08',
    title: 'Export Preparation',
    desc: 'Once payment is confirmed, export preparation begins.',
    details: ['Vehicle deregistration in Japan', 'Export certificate issuance', 'Documentation preparation', 'Inland transport to shipping port'],
    note: 'All documentation is prepared in line with export regulations. Sample export certificate shown below (details partially hidden for privacy).',
    image: '/export-certificate.jpeg',
  },
  {
    num: '09',
    title: 'Shipping & Delivery',
    desc: 'International shipment is arranged to your destination.',
    details: ['RoRo (Roll-on / Roll-off) shipping', 'Container shipping for high-value vehicles', 'Bill of Lading and Export Certificate provided', 'Customs clearance documentation included'],
    note: 'Upon arrival at the destination port, you proceed with local import procedures and vehicle clearance.',
    shippingImages: [
      { src: '/roro.jpeg', alt: 'RoRo vessel loading vehicles at port', label: 'RoRo Shipping' },
      { src: '/container.jpeg', alt: 'Container ship at port with loading cranes', label: 'Container Shipping' },
    ],
    link: { text: 'Learn about shipping methods', to: '/info#shipping' },
  },
];

export default function GlobalExport() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-surface-lowest">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=2000"
            alt="Global Export"
            className="w-full h-full object-cover grayscale opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-surface/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10 py-32">
          <div className="max-w-3xl">
            <span className="font-label uppercase tracking-[0.3em] text-accent text-xs mb-4 block">Global Export</span>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 leading-[0.9] uppercase">
              How It Works —<br />From Japan to<br />Your Port
            </h1>
            <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
              We handle the complete vehicle export process from Japan — from sourcing and purchase through to international shipment. Each stage is structured and executed with clarity, transparency, and full control.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-surface-lowest border-y border-white/5 py-8">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: '120+', label: 'Auction Houses' },
              { value: 'Direct', label: 'Auction Access' },
              { value: 'End-to-End', label: 'Export Handling' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <span className="font-headline text-2xl md:text-3xl font-bold text-accent">{item.value}</span>
                <span className="font-label uppercase tracking-widest text-secondary text-[10px]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Intro */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <p className="font-label text-sm tracking-wider text-secondary uppercase">The full process is outlined below.</p>
        </div>
      </section>

      {/* 9-Step Process */}
      <section className="pb-24 bg-surface">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          {STEPS.map((step, i) => (
            <div key={step.num} className="relative pb-16 last:pb-0">
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div className="absolute left-[19px] top-14 bottom-0 w-px bg-gradient-to-b from-accent/30 to-surface-high hidden md:block"></div>
              )}

              <div className="flex gap-8">
                {/* Step number */}
                <div className="hidden md:flex flex-col items-center shrink-0">
                  <div className={`w-10 h-10 flex items-center justify-center font-headline font-bold text-sm ${i === 0 ? 'bg-accent text-on-accent' : 'bg-surface-high text-accent'}`}>
                    {step.num}
                  </div>
                </div>

                {/* Step content */}
                <div className={`flex-1 p-8 md:p-10 ${i % 2 === 0 ? 'bg-surface-low' : 'bg-surface-container'} hover:bg-surface-high transition-colors`}>
                  <span className="md:hidden font-label text-accent text-[10px] tracking-[0.2em] uppercase block mb-2">Step {step.num}</span>
                  <h3 className="font-headline text-xl md:text-2xl font-bold text-white uppercase tracking-tight mb-4">{step.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-6">{step.desc}</p>

                  {step.details && (
                    <ul className="space-y-2 mb-6">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-3 text-sm text-secondary">
                          <span className="text-accent mt-1.5 text-[6px]">&#9632;</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}

                  {step.deposits && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {step.deposits.map((dep) => (
                        <div key={dep.range} className="bg-surface-lowest p-4">
                          <span className="font-label text-[10px] tracking-[0.2em] uppercase text-outline block mb-1">{dep.range}</span>
                          <span className="font-headline text-xl font-bold text-accent">{dep.amount}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {step.image && (
                    <div className="mt-6 bg-surface-lowest p-2 border border-white/5 overflow-hidden">
                      <img src={step.image} alt={step.title} className="w-full h-auto object-contain" />
                    </div>
                  )}

                  {step.shippingImages && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {step.shippingImages.map((img) => (
                        <div key={img.label} className="bg-surface-lowest border border-white/5 overflow-hidden">
                          <img src={img.src} alt={img.alt} className="w-full h-36 object-cover" />
                          <p className="text-[10px] font-label tracking-[0.2em] uppercase text-outline text-center py-2">{img.label}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {step.note && (
                    <p className="text-xs text-outline leading-relaxed italic">{step.note}</p>
                  )}

                  {step.link && (
                    <Link to={step.link.to} className="inline-flex items-center gap-2 mt-4 font-label text-[10px] tracking-[0.2em] uppercase text-accent hover:text-white transition-colors">
                      {step.link.text}
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* End-to-End Support */}
      <section className="py-24 md:py-32 bg-surface-lowest">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="font-label text-accent uppercase tracking-[0.2em] text-xs block mb-4">Our Commitment</span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter mb-8">End-to-End Support</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl mx-auto">
              From initial request through to final delivery, each stage of the process is managed with clarity and control.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />, text: 'Clear communication at every step' },
              { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />, text: 'No action taken without your approval' },
              { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />, text: 'Strict alignment with your requirements' },
              { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />, text: 'Full visibility from sourcing to shipment' },
            ].map((item) => (
              <div key={item.text} className="bg-surface-high p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 border border-accent/30 flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">{item.icon}</svg>
                </div>
                <p className="text-xs text-secondary leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-accent text-on-accent overflow-hidden relative">
        <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-headline text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4 leading-none">
            Submit Your Vehicle<br />Requirements
          </h2>
          <p className="font-body text-on-accent/70 text-lg max-w-xl mx-auto mb-12">
            Submit your vehicle requirements to begin sourcing from Japan.
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
