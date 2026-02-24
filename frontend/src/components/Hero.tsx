import { ArrowDown, MapPin, Truck } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-bg.dim_1920x1080.png"
          alt="SML Mahindra Commercial Vehicle"
          className="w-full h-full object-cover object-center"
        />
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-deep/95 via-charcoal-deep/70 to-charcoal-deep/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/80 via-transparent to-charcoal-deep/20" />
      </div>

      {/* Geometric accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full pt-20">
        <div className="max-w-3xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber/10 border border-amber/30 rounded-sm mb-6 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-amber" />
            <span className="text-amber text-xs font-semibold tracking-[0.15em] uppercase">
              India's Trusted Commercial Vehicle Brand
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-900 leading-none tracking-tight text-foreground mb-6 animate-fade-in-up">
            BUILT TO
            <br />
            <span className="text-amber">MOVE</span>
            <br />
            INDIA
            <span className="text-amber">.</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-10 max-w-xl animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            Engineered for performance, built for endurance. SML Mahindra delivers
            commercial vehicles that power businesses across the nation.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
            <button
              onClick={() => scrollTo('#vehicles')}
              className="group flex items-center justify-center gap-2.5 px-8 py-4 bg-amber text-charcoal-deep font-bold text-sm tracking-wide uppercase rounded-sm hover:bg-amber-bright transition-all duration-200 shadow-amber hover:shadow-[0_0_40px_oklch(0.72_0.18_55_/_0.5)]"
            >
              <Truck className="w-4 h-4" />
              Explore Vehicles
            </button>
            <button
              onClick={() => scrollTo('#dealers')}
              className="group flex items-center justify-center gap-2.5 px-8 py-4 bg-transparent border border-foreground/30 text-foreground font-semibold text-sm tracking-wide uppercase rounded-sm hover:border-amber hover:text-amber transition-all duration-200"
            >
              <MapPin className="w-4 h-4" />
              Find a Dealer
            </button>
          </div>

          {/* Stats bar */}
          <div className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-foreground/10 animate-fade-in-up" style={{ animationDelay: '0.35s' }}>
            {[
              { value: '50+', label: 'Years of Legacy' },
              { value: '200+', label: 'Dealer Network' },
              { value: '1M+', label: 'Vehicles on Road' },
              { value: '15+', label: 'Vehicle Models' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-display text-3xl font-800 text-amber leading-none">{stat.value}</span>
                <span className="text-xs text-muted-foreground mt-1 tracking-wide">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('#vehicles')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-amber transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </button>
    </section>
  );
}
