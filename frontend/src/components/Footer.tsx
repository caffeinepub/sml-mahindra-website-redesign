import { SiLinkedin, SiX, SiYoutube } from 'react-icons/si';
import { Heart } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Vehicles', href: '#vehicles' },
  { label: 'Dealers', href: '#dealers' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: <SiLinkedin className="w-4 h-4" />, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: <SiX className="w-4 h-4" />, href: 'https://x.com', label: 'X (Twitter)' },
  { icon: <SiYoutube className="w-4 h-4" />, href: 'https://youtube.com', label: 'YouTube' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'sml-mahindra-redesign');

  return (
    <footer className="bg-charcoal-deep border-t border-steel">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-sm overflow-hidden flex-shrink-0">
                <img
                  src="/assets/generated/logo-mark.dim_256x256.png"
                  alt="SML Mahindra Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-base font-800 tracking-wide text-foreground">
                  SML MAHINDRA
                </span>
                <span className="text-[10px] font-medium tracking-[0.2em] text-muted-foreground uppercase">
                  Commercial Vehicles
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-xs">
              Powering India's commercial transport with reliable, innovative, and
              fuel-efficient vehicles since 1975.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-sm bg-steel border border-steel-light flex items-center justify-center text-muted-foreground hover:text-amber hover:border-amber/50 hover:bg-amber/10 transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-700 text-foreground uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm text-muted-foreground hover:text-amber transition-colors text-left w-fit"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-display text-sm font-700 text-foreground uppercase tracking-widest mb-5">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>SML Isuzu Limited</p>
              <p>Ropar, Punjab – 140 001, India</p>
              <p className="hover:text-amber transition-colors cursor-pointer">
                info@smlisuzu.com
              </p>
              <p className="hover:text-amber transition-colors cursor-pointer">
                +91 1800-XXX-XXXX
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-steel">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {year} SML Mahindra. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1.5">
            Built with{' '}
            <Heart className="w-3 h-3 text-amber fill-amber" />{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber hover:text-amber-bright transition-colors font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
