import { Link } from 'react-router-dom';

export default function DomesticSales() {
  const steps = [
    { num: '01', title: 'Vehicle Request', desc: 'Define your parameters: model, year, trim, and mileage range. Our experts calibrate search criteria for optimal results.' },
    { num: '02', title: 'Auction Sourcing', desc: 'We monitor daily listings across 120+ venues, filtering for quality that meets KMT Global standards.' },
    { num: '03', title: 'Vehicle Selection', desc: 'Clients receive a curated shortlist of high-potential vehicles with initial inspection grades.' },
    { num: '04', title: 'Inspection & Verification', desc: 'Official auction sheets are translated and decoded. We verify mechanics, structural integrity, and documented history.' },
    { num: '05', title: 'Price Confirmation', desc: 'Based on market trends and vehicle condition, we establish a maximum bid ceiling with the client.' },
    { num: '06', title: 'Deposit Confirmation', desc: 'To activate the bidding protocol, a refundable deposit is required. JPY 100,000 for vehicles up to JPY 1M, or 10% for units exceeding that threshold.' },
    { num: '07', title: 'Auction Bidding', desc: 'Our agents execute the bid in real-time. We never exceed the pre-agreed ceiling.' },
    { num: '08', title: 'Final Payment', desc: 'Includes Auction Price, our Service Fee, and Domestic Transport within Japan. Full transparency on every Yen.' },
    { num: '09', title: 'Delivery & Handover', desc: 'Final logistics from the auction yard to your designated location. The keys to your excellence, delivered.' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-surface-lowest">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=2000"
            alt="Japan Sourcing"
            className="w-full h-full object-cover opacity-40 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-primary text-on-primary font-label text-[0.65rem] uppercase tracking-[0.2rem] mb-6">Concierge Sourcing</span>
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] leading-[0.9] font-headline font-bold uppercase tracking-tighter mb-6 text-white">
              Japan<br />Sourcing
            </h1>
            <p className="text-xl md:text-2xl font-light text-on-surface-variant max-w-xl mb-10 leading-relaxed">
              Precision vehicle acquisition through Japan's elite auction network. Bespoke service from bidding to doorstep delivery.
            </p>
            <Link
              to="/global-export"
              className="inline-block bg-primary text-on-primary px-10 py-4 font-label font-bold uppercase tracking-widest text-sm hover:bg-secondary transition-all active:scale-95"
            >
              View Auctions
            </Link>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: '120+ Auction Houses', desc: 'Comprehensive access to Japan\'s premier auction venues, ensuring a selection of thousands of high-grade vehicles daily.' },
              { title: 'Direct Access', desc: 'Experience zero-intermediary sourcing. We provide the portal directly to the auction floor with transparent live data.' },
              { title: 'End-to-End Logistics', desc: 'Our concierge handles the entire journey: from successful bid to deregistration, domestic haulage, and global export.' },
            ].map((item) => (
              <div key={item.title} className="space-y-4">
                <h3 className="text-2xl font-headline font-bold text-white uppercase">{item.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The 9-Step Sourcing Protocol */}
      <section className="py-32 bg-surface-low">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-white uppercase tracking-tighter mb-4">The Sourcing Protocol</h2>
              <p className="text-on-surface-variant font-body">A nine-step architectural process designed for transparency and precision.</p>
            </div>
            <div className="text-5xl md:text-6xl font-headline font-bold text-surface-high opacity-50 select-none">01—09</div>
          </div>

          <div className="space-y-1">
            {steps.map((step) => (
              <div key={step.num} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-12 md:py-16 items-start group border-t border-white/5 first:border-t-0">
                <div className="md:col-span-1 text-3xl md:text-4xl font-headline font-light text-primary group-hover:pl-4 transition-all duration-300">{step.num}</div>
                <div className="md:col-span-4">
                  <h4 className="text-2xl md:text-3xl font-headline font-bold text-white uppercase mb-4">{step.title}</h4>
                </div>
                <div className="md:col-span-7">
                  <p className="text-on-surface-variant text-base md:text-lg leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Deposit Highlight */}
          <div className="bg-surface-highest p-8 md:p-12 mt-12 border-l-4 border-primary">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7">
                <h4 className="text-2xl font-headline font-bold text-white uppercase mb-4">Deposit Protocol</h4>
                <p className="text-on-surface-variant leading-relaxed">To activate the bidding protocol, a refundable deposit is required. This confirms your commitment and authorizes our team to bid on your behalf.</p>
              </div>
              <div className="md:col-span-5 flex justify-center">
                <div className="text-center p-6 bg-surface border border-outline-variant/30">
                  <div className="text-xs font-label uppercase tracking-widest text-outline mb-2">Protocol Requirement</div>
                  <div className="text-3xl font-headline font-bold text-white">100K JPY <span className="text-lg font-light text-outline">/</span> 10%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-surface-lowest">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=2000"
            alt="CTA Background"
            className="w-full h-full object-cover opacity-20 grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold text-white uppercase tracking-tighter mb-8">
            Start Your Vehicle<br />Sourcing
          </h2>
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto mb-12">
            Enter the world of Japan's elite auctions. Precise, professional, and uncompromising quality.
          </p>
          <Link
            to="/global-export"
            className="inline-block bg-primary text-on-primary px-16 py-6 font-label font-bold uppercase tracking-[0.3rem] text-lg hover:bg-secondary transition-all active:scale-95"
          >
            Request a Vehicle
          </Link>
        </div>
      </section>
    </div>
  );
}
