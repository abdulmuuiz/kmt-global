import { Link } from 'react-router-dom';

const STEPS = [
  {
    num: '01',
    title: 'Vehicle Request',
    desc: 'The process begins with your vehicle request, based on your specific requirements.',
    details: ['Model', 'Year range', 'Mileage', 'Transmission', 'Color', 'Budget range'],
    note: 'The more clearly your requirements are defined, the more precise the vehicle options can be.',
    link: { text: 'Submit your request', to: '/request' },
  },
  {
    num: '02',
    title: 'Auction Sourcing',
    desc: 'Vehicles are sourced through Japan\'s dealer-only auction network, where most used vehicles are processed before reaching dealerships.',
    details: ['Verified condition, mileage, and inspection reports', 'Suitable vehicles identified and presented for review'],
  },
  {
    num: '03',
    title: 'Vehicle Selection',
    desc: 'A selection of suitable vehicles is presented based on your requirements. Each option is reviewed against your specified criteria.',
    details: ['Selection based on condition, mileage, and price', 'Detailed photos and official auction inspection reports provided'],
  },
  {
    num: '04',
    title: 'Inspection & Verification',
    desc: 'Each vehicle is accompanied by an official auction inspection report (auction sheet) prepared by certified inspectors.',
    details: ['Exterior and interior condition assessment', 'Recorded damage and repair history', 'Supporting photos for review'],
    note: 'Optional: the vehicle can be inspected directly at the auction site prior to bidding.',
    link: { text: 'Learn about auction sheets', to: '/info#auction-sheet' },
  },
  {
    num: '05',
    title: 'Price Confirmation',
    desc: 'Once you have selected a vehicle, a maximum bid is agreed based on current market conditions and the auction listing.',
    note: 'This bid is determined by considering vehicle condition, mileage, and recent market trends.',
  },
  {
    num: '06',
    title: 'Deposit Confirmation',
    desc: 'To proceed with auction participation, a deposit is required in advance.',
    deposits: [
      { range: 'Under ¥1,000,000', amount: '¥100,000' },
      { range: '¥1,000,000 or more', amount: '10% of market price' },
    ],
    note: 'The deposit is applied toward the purchase of your approved vehicle. All actions are carried out based on your approval.',
  },
  {
    num: '07',
    title: 'Auction Bidding',
    desc: 'Once the deposit is confirmed, bidding is conducted through Japan\'s auction network based on your approved conditions.',
    details: ['All bids placed within your pre-approved maximum', 'Successful bid: vehicle secured, process moves forward', 'Unsuccessful bid: sourcing continues in upcoming auctions'],
    note: 'You are kept informed throughout the bidding process.',
    link: { text: 'How auctions work', to: '/info#how-auctions-work' },
  },
  {
    num: '08',
    title: 'Final Payment',
    desc: 'Once your vehicle is successfully secured, a final invoice is issued.',
    details: ['Auction invoice price — exact amount paid at auction', 'Service fee', 'Domestic transport within Japan'],
    note: 'Payment is required within 3 working days after invoice issuance.',
    link: { text: 'View service fees', to: '/info#pricing' },
    extra: {
      title: 'Vehicle Registration & Preparation (On Request)',
      items: ['Registration procedures (inspection, documentation, fees)', 'Vehicle preparation (maintenance, servicing)', 'Interior and exterior detailing, premium finishing and glass coating'],
    },
  },
  {
    num: '09',
    title: 'Delivery & Handover',
    desc: 'Once all procedures are completed, the vehicle is prepared for delivery.',
    details: ['Delivery arranged based on your location and requirements', 'All necessary documentation provided', 'Guidance through final steps including vehicle collection or registration'],
  },
];

export default function JapanSourcing() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-surface-lowest">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=2000"
            alt="Japan Sourcing"
            className="w-full h-full object-cover grayscale opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-surface/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10 py-32">
          <div className="max-w-3xl">
            <span className="font-label uppercase tracking-[0.3em] text-accent text-xs mb-4 block">Japan Sourcing</span>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 leading-[0.9] uppercase">
              Japan<br />Sourcing
            </h1>
            <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
              Vehicles are sourced through Japan's dealer-only auction network based on your requirements. The process is handled on your behalf, with full visibility and control from selection through to delivery.
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
              { value: 'Handled', label: 'Purchase & Delivery' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <span className="font-headline text-2xl md:text-3xl font-bold text-accent">{item.value}</span>
                <span className="font-label uppercase tracking-widest text-secondary text-[10px]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9-Step Process */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-20">
            <span className="font-label text-accent uppercase tracking-[0.2em] text-xs block mb-4">The Sourcing Process</span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter">From Request to Delivery</h2>
          </div>

          {STEPS.map((step, i) => (
            <div key={step.num} className="relative pb-16 last:pb-0">
              {i < STEPS.length - 1 && (
                <div className="absolute left-[19px] top-14 bottom-0 w-px bg-gradient-to-b from-accent/30 to-surface-high hidden md:block"></div>
              )}

              <div className="flex gap-8">
                <div className="hidden md:flex flex-col items-center shrink-0">
                  <div className={`w-10 h-10 flex items-center justify-center font-headline font-bold text-sm ${i === 0 ? 'bg-accent text-on-accent' : 'bg-surface-high text-accent'}`}>
                    {step.num}
                  </div>
                </div>

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

                  {step.extra && (
                    <div className="bg-surface-lowest p-6 mb-6 border-l-2 border-accent/30">
                      <h4 className="font-headline text-sm font-bold text-white uppercase tracking-wide mb-3">{step.extra.title}</h4>
                      <ul className="space-y-2">
                        {step.extra.items.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm text-secondary">
                            <span className="text-accent mt-1.5 text-[6px]">&#9632;</span>
                            {item}
                          </li>
                        ))}
                      </ul>
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

      {/* CTA */}
      <section className="py-32 bg-accent text-on-accent overflow-hidden relative">
        <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
          <span className="font-label text-[10px] tracking-[0.4em] uppercase font-bold mb-6 block opacity-60">Start Your Vehicle Sourcing</span>
          <h2 className="font-headline text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4 leading-none">
            Have a Specific<br />Vehicle in Mind?
          </h2>
          <p className="font-body text-on-accent/70 text-lg max-w-xl mx-auto mb-12">
            Submit your requirements to begin the sourcing process. Each request is reviewed based on your criteria.
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
