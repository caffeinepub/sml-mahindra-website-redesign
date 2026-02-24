import { MapPin, Phone, ExternalLink } from 'lucide-react';
import type { Dealer } from '../backend';

interface DealerCardProps {
  dealer: Dealer;
}

export default function DealerCard({ dealer }: DealerCardProps) {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(dealer.address)}`;

  return (
    <div className="group bg-charcoal-light border border-steel rounded-sm p-5 hover:border-amber/50 transition-all duration-200 hover:shadow-card">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-display text-lg font-700 text-foreground group-hover:text-amber transition-colors">
            {dealer.name}
          </h3>
          <span className="inline-flex items-center gap-1 text-xs text-amber font-medium mt-0.5">
            <span className="w-1 h-1 rounded-full bg-amber" />
            {dealer.city}, {dealer.state}
          </span>
        </div>
        <div className="w-8 h-8 rounded-sm bg-amber/10 border border-amber/20 flex items-center justify-center flex-shrink-0">
          <MapPin className="w-4 h-4 text-amber" />
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-steel mb-3" />

      {/* Details */}
      <div className="space-y-2 mb-4">
        <div className="flex items-start gap-2 text-sm text-muted-foreground">
          <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-steel-muted" />
          <span>{dealer.address}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Phone className="w-3.5 h-3.5 flex-shrink-0 text-steel-muted" />
          <a href={`tel:${dealer.phone}`} className="hover:text-amber transition-colors">
            {dealer.phone}
          </a>
        </div>
      </div>

      {/* CTA */}
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber hover:text-amber-bright transition-colors"
      >
        Get Directions
        <ExternalLink className="w-3 h-3" />
      </a>
    </div>
  );
}
