import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-surface-lowest">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&q=80&w=2000"
            alt="About KMT Global"
            className="w-full h-full object-cover grayscale opacity-10"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-surface/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10 py-32">
          <div className="max-w-3xl">
            <span className="font-label uppercase tracking-[0.3em] text-accent text-xs mb-4 block">About Us</span>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 leading-[0.9] uppercase">
              Direct Access,<br />Simplified.
            </h1>
            <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
              Opening Japan&apos;s dealer-only auction network to individuals and businesses worldwide — through a clear, structured sourcing system built for the long run.
            </p>
          </div>
        </div>
      </section>

      {/* Our Goal */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="mb-12">
            <span className="font-label text-accent uppercase tracking-[0.2em] text-xs block mb-4">Our Goal</span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter mb-8">
              Making the Auction Market<br />Practical for Everyone
            </h2>
          </div>

          <div className="space-y-6 text-on-surface-variant leading-relaxed text-base md:text-lg">
            <p>
              Our goal is to make direct access to Japan&apos;s auto auction market simple and practical for everyone. Traditionally, this market has been limited to dealers and industry insiders.
            </p>
            <p>
              Our approach is to open it up in a clear and structured way, allowing individuals and businesses to source vehicles without unnecessary complexity. We focus on maintaining a process that is consistent and easy to follow — so you can make decisions with a clear understanding of the vehicle and its cost.
            </p>
          </div>
        </div>
      </section>

      {/* How We Operate */}
      <section className="py-24 md:py-32 bg-surface-lowest">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="mb-16">
            <span className="font-label text-accent uppercase tracking-[0.2em] text-xs block mb-4">Our Approach</span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter">How We Operate</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Direct Access', desc: 'Opening a dealer-only market to individuals and businesses, removing traditional gatekeepers.' },
              { title: 'Structured Process', desc: 'A consistent, easy-to-follow system from request through to delivery — no hidden steps.' },
              { title: 'Clear Decisions', desc: 'Full visibility into the vehicle and its cost, so every decision is made with complete understanding.' },
            ].map((item) => (
              <div key={item.title} className="bg-surface-high p-8 hover:bg-surface-highest transition-colors">
                <h3 className="font-headline text-sm font-bold text-accent uppercase tracking-wide mb-3">{item.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long-term Vision */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="bg-accent/5 border-l-2 border-accent p-10 md:p-16">
            <span className="font-label text-accent uppercase tracking-[0.2em] text-xs block mb-4">Long-Term Perspective</span>
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-white uppercase tracking-tighter mb-6 leading-tight">
              Built for the Long Run
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              KMT Global is built with a long-term perspective, aiming to provide a reliable and scalable sourcing system for customers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-accent text-on-accent overflow-hidden relative">
        <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
          <span className="font-label text-[10px] tracking-[0.4em] uppercase font-bold mb-6 block opacity-60">Start Sourcing</span>
          <h2 className="font-headline text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4 leading-none">
            Ready to Begin?
          </h2>
          <p className="font-body text-on-accent/70 text-lg max-w-xl mx-auto mb-12">
            Submit your requirements and we will take it from there.
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
