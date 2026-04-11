import { Link, Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Japan Sourcing', path: '/japan-sourcing' },
    { name: 'Global Export', path: '/global-export' },
    { name: 'Info', path: '/info' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-md border-b border-white/10">
        <div className="flex justify-between items-center w-full px-6 lg:px-8 py-4 max-w-[1920px] mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.jpeg" alt="KMT Global" className="h-10 w-auto object-contain filter invert" />
            <span className="text-xl font-bold tracking-tighter text-white font-headline">KMT GLOBAL</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-label uppercase tracking-[0.1em] text-[0.75rem] font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-white border-b-2 border-accent pb-1'
                    : 'text-secondary hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/request"
              className="hidden sm:block bg-accent text-on-accent px-6 py-2 text-[0.75rem] font-bold uppercase tracking-widest hover:bg-accent-dim transition-all active:scale-95"
            >
              Request a Vehicle
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-white/5 transition-colors"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-surface-low border-t border-white/5">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-4 py-3 font-label uppercase tracking-widest text-xs font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-white bg-surface-high'
                      : 'text-secondary hover:text-white hover:bg-surface-container'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/request"
                className="block mt-4 bg-accent text-on-accent px-4 py-3 text-xs font-bold uppercase tracking-widest text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Request a Vehicle
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-[72px]">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-surface-lowest border-t border-white/5 py-16 px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-[1920px] mx-auto">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.jpeg" alt="KMT Global" className="h-10 w-auto object-contain" />
              <span className="text-lg font-black tracking-tighter text-white font-headline uppercase">KMT GLOBAL</span>
            </div>
            <p className="font-label text-[0.75rem] tracking-widest uppercase text-outline leading-loose">
              Precision automotive sourcing from the heart of Japan. Transparency engineered by design.
            </p>
          </div>

          <div>
            <h4 className="font-headline text-white text-[0.75rem] tracking-[0.2em] uppercase mb-6 font-bold">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/japan-sourcing" className="font-label text-[0.75rem] tracking-widest uppercase text-outline hover:text-accent transition-all">Japan Sourcing</Link></li>
              <li><Link to="/global-export" className="font-label text-[0.75rem] tracking-widest uppercase text-outline hover:text-accent transition-all">Global Export</Link></li>
              <li><Link to="/request" className="font-label text-[0.75rem] tracking-widest uppercase text-outline hover:text-accent transition-all">Request a Vehicle</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline text-white text-[0.75rem] tracking-[0.2em] uppercase mb-6 font-bold">Information</h4>
            <ul className="space-y-4">
              <li><Link to="/info#how-auctions-work" className="font-label text-[0.75rem] tracking-widest uppercase text-outline hover:text-accent transition-all">How Auctions Work</Link></li>
              <li><Link to="/info#pricing" className="font-label text-[0.75rem] tracking-widest uppercase text-outline hover:text-accent transition-all">Service Fees</Link></li>
              <li><Link to="/info#shipping" className="font-label text-[0.75rem] tracking-widest uppercase text-outline hover:text-accent transition-all">Shipping Methods</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline text-white text-[0.75rem] tracking-[0.2em] uppercase mb-6 font-bold">Connect</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="font-label text-[0.75rem] tracking-widest uppercase text-outline hover:text-accent transition-all">About Us</Link></li>
              <li><a href="mailto:info@kmtglobal.jp" className="font-label text-[0.75rem] tracking-widest uppercase text-outline hover:text-accent transition-all">Contact Us</a></li>
              <li><span className="font-label text-[0.75rem] tracking-widest uppercase text-outline">Tokyo HQ</span></li>
            </ul>
          </div>
        </div>

        <div className="max-w-[1920px] mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-label text-[0.65rem] tracking-[0.3em] uppercase text-outline">
            &copy; {new Date().getFullYear()} KMT GLOBAL. PRECISION AUTOMOTIVE SOURCING.
          </span>
          <div className="flex gap-8">
            <span className="font-label text-[0.65rem] tracking-[0.3em] uppercase text-outline">UTC +09:00</span>
            <span className="font-label text-[0.65rem] tracking-[0.3em] uppercase text-outline">JAPANESE STANDARD TIME</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
