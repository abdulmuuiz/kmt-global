import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FadeIn, StaggerChildren, StaggerItem } from '../components/AnimateIn';

const INQUIRIES = [
  {
    make: 'NISSAN',
    model: 'Skyline',
    year: '1998',
    variant: '25 GT Turbo',
    grade: 'R',
    price: '¥3,700,000',
    from: 'USA',
    image: '/inquiry-skyline.jpeg',
  },
  {
    make: 'SUBARU',
    model: 'Forester',
    year: '2019',
    variant: 'Touring 4WD',
    grade: '3.5',
    price: '¥1,125,000',
    from: 'New Zealand',
    image: '/inquiry-forester.jpeg',
  },
  {
    make: 'TOYOTA',
    model: 'Prius',
    year: '2015',
    variant: "S Touring Selection G's",
    grade: '3.5',
    price: '¥755,000',
    from: 'Australia',
    image: '/inquiry-prius.jpeg',
  },
  {
    make: 'VW',
    model: 'Passat Variant',
    year: '2017',
    variant: 'TSI Elegance Line',
    grade: '4',
    price: '¥1,237,000',
    from: 'UK',
    image: '/inquiry-passat.jpeg',
  },
  {
    make: 'TOYOTA',
    model: 'Hiace',
    year: '2021',
    variant: 'GL',
    grade: '4.5',
    price: '¥3,350,000',
    from: 'Japan',
    image: '/inquiry-hiace.jpeg',
  },
  {
    make: 'TOYOTA',
    model: 'Prius Alpha',
    year: '',
    variant: 'S Touring Selection GR Sports',
    grade: '3.5',
    price: '¥1,351,000',
    from: 'Ireland',
    image: '/inquiry-prius-alpha.jpeg',
  },
];

function RecentlySourcedCarousel() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="py-24 md:py-32 bg-surface overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 mb-12">
        <FadeIn>
          <span className="font-label text-accent uppercase tracking-[0.2em] text-xs block mb-4">Recent Inquiries</span>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter">Recently Sourced</h2>
        </FadeIn>
      </div>

      <div className="overflow-hidden">
        <div
          className={paused ? 'animate-marquee-paused flex gap-5' : 'animate-marquee flex gap-5'}
          style={{ width: 'max-content' }}
        >
          {[...INQUIRIES, ...INQUIRIES].map((v, i) => (
            <div
              key={i}
              className="group relative w-72 shrink-0 bg-surface-high overflow-hidden cursor-default"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={v.image}
                  alt={`${v.make} ${v.model}`}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                />
              </div>

              {/* Default footer */}
              <div className="p-4 flex items-center justify-between">
                <span className="font-headline font-bold text-xs uppercase tracking-tight text-white">
                  {v.make} {v.model} {v.year}
                </span>
                <span className="font-label text-[9px] tracking-widest uppercase text-outline">{v.from}</span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-surface/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="space-y-3">
                  <div>
                    <span className="font-label text-[9px] tracking-[0.25em] uppercase text-accent block mb-0.5">Make & Model</span>
                    <span className="font-headline font-bold text-base uppercase text-white">{v.make} {v.model} {v.year}</span>
                  </div>
                  <div>
                    <span className="font-label text-[9px] tracking-[0.25em] uppercase text-outline block mb-0.5">Variant</span>
                    <span className="text-sm text-secondary">{v.variant}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div>
                      <span className="font-label text-[9px] tracking-[0.25em] uppercase text-outline block mb-0.5">Grade</span>
                      <span className="font-headline font-bold text-sm text-accent">{v.grade}</span>
                    </div>
                    <div>
                      <span className="font-label text-[9px] tracking-[0.25em] uppercase text-outline block mb-0.5">Price</span>
                      <span className="font-headline font-bold text-sm text-white">{v.price}</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-white/10 flex items-center gap-2">
                    <svg className="w-3 h-3 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <span className="font-label text-[9px] tracking-widest uppercase text-secondary">Inquired from {v.from}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-surface-lowest">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-home.png"
            alt="Japan Auction"
            className="w-full h-full object-cover grayscale opacity-25"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-surface/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10 py-32">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-label uppercase tracking-[0.3em] text-accent text-xs mb-4 block"
            >
              Direct Access to Japan's Vehicle Auctions
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 leading-[0.9] uppercase"
            >
              Buy Vehicles at<br />True Market Prices
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="font-body text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed mb-10"
            >
              Access the same auction network as dealers. Secure vehicles directly through Japan's wholesale system — no retail markups, no hidden margins.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link
                to="/request"
                className="inline-flex items-center gap-3 bg-accent text-on-accent px-10 py-4 font-headline font-bold uppercase tracking-widest text-sm hover:bg-accent-dim transition-all active:scale-95"
              >
                Request a Vehicle
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-surface-lowest border-y border-white/5 py-8">
        <div className="container mx-auto px-6 lg:px-8">
          <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: '120+', label: 'Auction\nHouses', accent: true },
              { value: 'Direct', label: 'Auction\nAccess', accent: false },
              { value: 'No', label: 'Hidden\nMarkups', accent: false },
              { value: 'Licensed', label: 'Exporter\nin Japan', accent: false },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="flex items-center gap-4">
                  <span className={`font-headline text-2xl md:text-3xl font-bold ${stat.accent ? 'text-accent' : 'text-white'}`}>{stat.value}</span>
                  <span className="font-label uppercase tracking-widest text-secondary text-[10px] leading-tight whitespace-pre-line">{stat.label}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Access the Same Auction Network */}
      <FadeIn>
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
      </FadeIn>

      {/* How It Works — 4 Steps */}
      <section className="py-24 md:py-32 bg-surface-lowest">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-20">
              <span className="font-label text-accent uppercase tracking-[0.2em] text-xs block mb-4">The Process</span>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter">How It Works</h2>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
                desc: 'Bidding is conducted strictly within your approved limit. Vehicle secured and delivered to you.',
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />,
              },
            ].map((step) => (
              <StaggerItem key={step.num}>
                <div
                  className={`p-8 md:p-10 h-full ${step.highlight ? 'bg-accent text-on-accent' : 'bg-surface-high group hover:bg-surface-variant transition-colors'}`}
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
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Transparent Pricing */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <span className="font-label text-accent uppercase tracking-[0.2em] text-xs block mb-4">Transparent Pricing</span>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter mb-6">No Hidden Markups</h2>
              <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
                Vehicles are secured directly through Japan's auction network. The official auction invoice reflects the exact purchase amount.
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <StaggerItem>
              <div className="bg-surface-low p-8 md:p-12 space-y-8 opacity-60 h-full">
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
            </StaggerItem>

            <StaggerItem>
              <div className="bg-surface-high p-8 md:p-12 space-y-8 border-l-2 border-accent h-full">
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
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* Services — Japan Sourcing & Global Export */}
      <section className="py-24 md:py-32 bg-surface-lowest">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="font-label text-accent uppercase tracking-[0.2em] text-xs block mb-4">Our Services</span>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter">Domestic & Global Vehicle Sourcing</h2>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <StaggerItem>
              <div className="bg-surface-high p-10 md:p-14 group hover:bg-surface-variant transition-colors relative overflow-hidden h-full">
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
            </StaggerItem>

            <StaggerItem>
              <div className="bg-surface-high p-10 md:p-14 group hover:bg-surface-variant transition-colors relative overflow-hidden h-full">
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
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* Recently Sourced — Carousel */}
      <RecentlySourcedCarousel />

      {/* You Stay in Control */}
      <FadeIn>
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
      </FadeIn>

      {/* CTA */}
      <FadeIn>
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
      </FadeIn>
    </div>
  );
}
