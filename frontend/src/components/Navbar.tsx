import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Vehicles', href: '#vehicles' },
  { label: 'Dealers', href: '#dealers' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-charcoal/95 backdrop-blur-md shadow-[0_2px_24px_rgba(0,0,0,0.5)] border-b border-steel'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('#home')}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-sm overflow-hidden flex-shrink-0">
                <img
                  src="/assets/generated/logo-mark.dim_256x256.png"
                  alt="SML Mahindra Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-lg font-800 tracking-wide text-foreground group-hover:text-amber transition-colors">
                  SML MAHINDRA
                </span>
                <span className="text-[10px] font-medium tracking-[0.2em] text-muted-foreground uppercase">
                  Commercial Vehicles
                </span>
              </div>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-amber transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </button>
              ))}
              <button
                onClick={() => handleNavClick('#contact')}
                className="ml-4 px-5 py-2 bg-amber text-charcoal-deep font-semibold text-sm rounded-sm hover:bg-amber-bright transition-colors duration-200 flex items-center gap-1.5"
              >
                Get in Touch
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </nav>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-foreground hover:text-amber transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-charcoal-deep/80 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-16 left-0 right-0 bg-charcoal border-b border-steel transition-transform duration-300 ${
            mobileOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
        >
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-6 py-3.5 text-left text-base font-medium text-muted-foreground hover:text-amber hover:bg-steel/50 transition-colors border-b border-steel/30 last:border-0"
              >
                {link.label}
              </button>
            ))}
            <div className="px-6 py-4">
              <button
                onClick={() => handleNavClick('#contact')}
                className="w-full px-5 py-3 bg-amber text-charcoal-deep font-semibold text-sm rounded-sm hover:bg-amber-bright transition-colors flex items-center justify-center gap-2"
              >
                Get in Touch
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
