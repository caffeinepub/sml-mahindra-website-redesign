import { Shield, Zap, Users, Award, Globe, Wrench } from 'lucide-react';

const MILESTONES = [
  {
    year: '1975',
    title: 'Foundation',
    description: 'SML was established as a joint venture, beginning its journey in commercial vehicle manufacturing in India.',
  },
  {
    year: '1988',
    title: 'Isuzu Partnership',
    description: 'Strategic collaboration with Isuzu Motors Japan, bringing world-class Japanese engineering to Indian roads.',
  },
  {
    year: '2000',
    title: 'Mahindra Alliance',
    description: 'Mahindra & Mahindra joined as a key stakeholder, strengthening the company\'s market presence and distribution network.',
  },
  {
    year: '2012',
    title: 'Product Expansion',
    description: 'Launched the next-generation S7 series buses and expanded the LCV lineup to serve diverse commercial needs.',
  },
  {
    year: '2018',
    title: 'BS-VI Ready',
    description: 'Pioneered BS-VI compliant commercial vehicles, setting new benchmarks for emission standards in India.',
  },
  {
    year: '2024',
    title: 'Future Forward',
    description: 'Investing in electric and hybrid commercial vehicle technology to lead India\'s green mobility transition.',
  },
];

const VALUES = [
  { icon: <Shield className="w-6 h-6" />, label: 'Safety First', desc: 'Every vehicle built with uncompromising safety standards' },
  { icon: <Zap className="w-6 h-6" />, label: 'Innovation', desc: 'Continuously pushing boundaries in vehicle technology' },
  { icon: <Users className="w-6 h-6" />, label: 'Customer Focus', desc: 'Dedicated to exceeding customer expectations' },
  { icon: <Award className="w-6 h-6" />, label: 'Quality', desc: 'ISO-certified manufacturing with zero-compromise quality' },
  { icon: <Globe className="w-6 h-6" />, label: 'Sustainability', desc: 'Committed to greener, cleaner commercial transport' },
  { icon: <Wrench className="w-6 h-6" />, label: 'Service', desc: 'Pan-India service network for maximum uptime' },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/section-bg-texture.dim_1920x600.png"
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-charcoal-deep/90" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber/10 border border-amber/30 rounded-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-amber" />
              <span className="text-amber text-xs font-semibold tracking-[0.15em] uppercase">Our Story</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-800 text-foreground mb-4">
              FIVE DECADES OF
              <span className="text-amber"> EXCELLENCE</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From a humble beginning to becoming one of India's most trusted commercial vehicle brands,
              our journey is defined by innovation, reliability, and an unwavering commitment to quality.
            </p>
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-10">
              <div className="h-0.5 w-8 bg-amber" />
              <span className="text-xs font-semibold tracking-widest uppercase text-amber">Milestones</span>
              <div className="h-0.5 flex-1 bg-steel" />
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-steel md:-translate-x-px" />

              <div className="space-y-8">
                {MILESTONES.map((milestone, idx) => (
                  <div
                    key={milestone.year}
                    className={`relative flex items-start gap-6 md:gap-0 ${
                      idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Content */}
                    <div className={`flex-1 pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className={`bg-charcoal-light border border-steel rounded-sm p-5 hover:border-amber/40 transition-colors ${idx % 2 === 0 ? 'md:ml-auto' : ''} max-w-sm`}>
                        <span className="font-display text-2xl font-800 text-amber">{milestone.year}</span>
                        <h3 className="font-display text-lg font-700 text-foreground mt-1 mb-2">{milestone.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="absolute left-4 md:left-1/2 top-5 w-3 h-3 rounded-full bg-amber border-2 border-charcoal-deep md:-translate-x-1.5 -translate-x-1.5 z-10" />

                    {/* Empty side for desktop alternating layout */}
                    <div className="hidden md:block flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="h-0.5 w-8 bg-amber" />
              <span className="text-xs font-semibold tracking-widest uppercase text-amber">Core Values</span>
              <div className="h-0.5 flex-1 bg-steel" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {VALUES.map((value) => (
                <div
                  key={value.label}
                  className="group bg-charcoal-light border border-steel rounded-sm p-5 text-center hover:border-amber/50 hover:bg-amber/5 transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-sm bg-amber/10 border border-amber/20 flex items-center justify-center mx-auto mb-3 text-amber group-hover:bg-amber group-hover:text-charcoal-deep transition-all duration-200">
                    {value.icon}
                  </div>
                  <h4 className="font-display text-sm font-700 text-foreground mb-1.5 group-hover:text-amber transition-colors">
                    {value.label}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
