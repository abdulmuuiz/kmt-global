import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function GlobalExport() {
  const [formData, setFormData] = useState({
    make: '', model: '', yearRange: '', budget: '', destination: '', requirements: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry. Our sourcing team will contact you shortly.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[870px] flex items-end overflow-hidden bg-surface-lowest">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=2000"
            alt="Global Export"
            className="w-full h-full object-cover opacity-60 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent"></div>
        </div>
        <div className="relative z-10 w-full px-6 lg:px-8 pb-16 md:pb-24 max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold tracking-tighter leading-none mb-6 uppercase">
            Global Export<br />& Logistics
          </h1>
          <p className="max-w-xl text-lg md:text-xl font-light text-secondary mb-10 leading-relaxed">
            Precision vehicle acquisition and international transport for the discerning global collector. From the auction floor to your driveway.
          </p>
          <div className="h-[1px] w-32 bg-primary"></div>
        </div>
      </section>

      {/* The Export Standard */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto border-b border-outline-variant/20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <span className="font-label text-primary uppercase tracking-[0.2em] text-xs block mb-4">Phase 01</span>
            <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tight uppercase">The Export Standard</h2>
          </div>
          <div className="md:col-span-7 space-y-8">
            <p className="text-xl text-on-surface/80 leading-relaxed font-light">
              Our structured export process is built on the principles of Japanese logistical precision. We handle the complex bureaucracy so you can focus on the asset.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: 'Documentation', desc: 'Preparation of all commercial invoices, packing lists, and bill of lading instructions with absolute accuracy.' },
                { title: 'Deregistration', desc: 'Official Japanese deregistration (Yushutsu Masho) processing for immediate export eligibility.' },
                { title: 'Certificates', desc: 'Provision of Official Export Certificates translated and certified for your local customs authority.' },
                { title: 'Inspections', desc: 'Pre-shipment inspections (JAAI, JEVIC, or EAA) as required by destination country regulations.' },
              ].map((item) => (
                <div key={item.title} className="space-y-4">
                  <h3 className="font-headline font-bold text-sm tracking-widest uppercase text-white">{item.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Methods */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tight uppercase">Shipping Methods</h2>
          <span className="font-label text-secondary text-[10px] tracking-widest">MODALITIES / 02</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* RoRo */}
          <div className="bg-surface-low group p-1">
            <div className="relative aspect-video mb-8 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=800"
                alt="RoRo Shipping"
                className="w-full h-full object-cover grayscale brightness-50 group-hover:brightness-75 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 bg-primary text-on-primary px-3 py-1 font-label text-[10px] font-bold tracking-widest">RORO</div>
            </div>
            <div className="px-6 md:px-8 pb-8 md:pb-12">
              <h3 className="text-2xl font-headline font-bold mb-4 uppercase tracking-tighter">Roll-on / Roll-off</h3>
              <p className="text-secondary text-sm leading-relaxed mb-8">
                The most cost-effective method for standard operational vehicles. Cars are driven onto specialized decks and secured for transit.
              </p>
              <ul className="space-y-3">
                {['Optimized for volume', 'Faster turnaround', 'Global port access'].map((item) => (
                  <li key={item} className="flex items-center text-[11px] font-label tracking-widest text-primary uppercase">
                    <span className="w-1.5 h-1.5 bg-primary mr-3"></span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Container */}
          <div className="bg-surface-low group p-1">
            <div className="relative aspect-video mb-8 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&q=80&w=800"
                alt="Container Shipping"
                className="w-full h-full object-cover grayscale brightness-50 group-hover:brightness-75 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 bg-primary text-on-primary px-3 py-1 font-label text-[10px] font-bold tracking-widest">FCL</div>
            </div>
            <div className="px-6 md:px-8 pb-8 md:pb-12">
              <h3 className="text-2xl font-headline font-bold mb-4 uppercase tracking-tighter">Container Shipping</h3>
              <p className="text-secondary text-sm leading-relaxed mb-8">
                High-level protection ideal for high-value collectors' items or non-running vehicles. Sealed within a dedicated steel enclosure.
              </p>
              <ul className="space-y-3">
                {['Maximum isolation', 'Non-running capability', 'Multi-car consolidation'].map((item) => (
                  <li key={item} className="flex items-center text-[11px] font-label tracking-widest text-primary uppercase">
                    <span className="w-1.5 h-1.5 bg-primary mr-3"></span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Fee Structure */}
      <section className="py-24 bg-surface-lowest">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
              <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tight uppercase mb-6">Service Fee Structure</h2>
              <p className="text-secondary font-light leading-relaxed">
                Our pricing is engineered for transparency. No hidden markups, no hidden commissions. A simple flat fee based on vehicle value.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="flex flex-col gap-px bg-outline-variant/20">
                <div className="bg-surface-high p-6 md:p-8 flex justify-between items-center hover:bg-surface-variant transition-colors">
                  <div>
                    <span className="font-label text-[10px] tracking-widest text-secondary block mb-1">VEHICLE VALUE</span>
                    <h4 className="text-lg md:text-xl font-headline font-bold uppercase">Under &yen;1,000,000</h4>
                  </div>
                  <div className="text-right">
                    <span className="font-label text-[10px] tracking-widest text-secondary block mb-1">SERVICE FEE</span>
                    <span className="text-2xl md:text-3xl font-headline font-bold tracking-tighter">&yen;25,000</span>
                  </div>
                </div>
                <div className="bg-surface-high p-6 md:p-8 flex justify-between items-center hover:bg-surface-variant transition-colors">
                  <div>
                    <span className="font-label text-[10px] tracking-widest text-secondary block mb-1">VEHICLE VALUE</span>
                    <h4 className="text-lg md:text-xl font-headline font-bold uppercase">&yen;1,000,000 and above</h4>
                  </div>
                  <div className="text-right">
                    <span className="font-label text-[10px] tracking-widest text-secondary block mb-1">SERVICE FEE</span>
                    <span className="text-2xl md:text-3xl font-headline font-bold tracking-tighter">&yen;50,000</span>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-[10px] font-label text-outline tracking-widest uppercase">
                * Fees exclude ocean freight and port handling charges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Request Form */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            {/* Left: Title */}
            <div className="lg:col-span-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter font-headline uppercase mb-4 leading-none">
                Vehicle<br />Sourcing<br />Request
              </h2>
              <p className="text-on-surface-variant text-sm mt-6">Submit your requirements. Our sourcing team will contact you within 24 hours with auction availability.</p>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="font-label text-[10px] tracking-[0.2em] font-medium uppercase text-secondary">Make / Model</label>
                    <input
                      type="text" name="make" required placeholder="E.G. TOYOTA LAND CRUISER"
                      className="w-full bg-surface-highest border-none text-white font-headline text-sm p-4 tracking-widest placeholder:text-outline-variant focus:ring-0 focus:outline-none"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label text-[10px] tracking-[0.2em] font-medium uppercase text-secondary">Year Range</label>
                    <input
                      type="text" name="yearRange" required placeholder="E.G. 2018 — 2022"
                      className="w-full bg-surface-highest border-none text-white font-headline text-sm p-4 tracking-widest placeholder:text-outline-variant focus:ring-0 focus:outline-none"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="font-label text-[10px] tracking-[0.2em] font-medium uppercase text-secondary">Budget (USD)</label>
                    <input
                      type="text" name="budget" required placeholder="E.G. $45,000 FOB"
                      className="w-full bg-surface-highest border-none text-white font-headline text-sm p-4 tracking-widest placeholder:text-outline-variant focus:ring-0 focus:outline-none"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label text-[10px] tracking-[0.2em] font-medium uppercase text-secondary">Destination Country / Port</label>
                    <input
                      type="text" name="destination" required placeholder="E.G. JEBEL ALI, UAE"
                      className="w-full bg-surface-highest border-none text-white font-headline text-sm p-4 tracking-widest placeholder:text-outline-variant focus:ring-0 focus:outline-none"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-label text-[10px] tracking-[0.2em] font-medium uppercase text-secondary">Specific Requirements</label>
                  <textarea
                    name="requirements" rows={4}
                    placeholder="MAX MILEAGE, MIN AUCTION GRADE, COLOR PREFERENCE, SPECIFIC TRIMS..."
                    className="w-full bg-surface-highest border-none text-white font-headline text-sm p-4 tracking-widest placeholder:text-outline-variant focus:ring-0 focus:outline-none resize-none"
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="flex items-center justify-between pt-8 border-t border-outline-variant/30">
                  <p className="text-[10px] font-label text-outline tracking-widest uppercase">No commitment required at this stage.</p>
                  <button
                    type="submit"
                    className="bg-primary text-on-primary font-headline font-bold px-12 py-5 text-[12px] tracking-[0.3em] uppercase hover:bg-primary-container transition-all active:scale-95"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 overflow-hidden bg-primary text-on-primary">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="font-label text-[10px] tracking-[0.4em] uppercase font-bold mb-6 block">Ready to acquire?</span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold tracking-tighter uppercase mb-12">Start Your Vehicle<br />Sourcing</h2>
          <Link
            to="/"
            className="inline-block bg-on-primary text-primary px-12 py-5 text-sm font-bold uppercase tracking-[0.2em] hover:bg-surface-variant transition-colors active:scale-95"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
