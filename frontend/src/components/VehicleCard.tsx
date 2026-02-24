import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

export interface Vehicle {
  id: string;
  name: string;
  category: 'Bus' | 'Truck' | 'LCV';
  tagline: string;
  image: string;
  specs: {
    engine: string;
    power: string;
    payload: string;
    fuelType: string;
    gvw: string;
    wheelbase: string;
  };
}

interface VehicleCardProps {
  vehicle: Vehicle;
  onViewDetails: (vehicle: Vehicle) => void;
}

const categoryColors: Record<string, string> = {
  Bus: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  Truck: 'bg-amber/10 text-amber border-amber/30',
  LCV: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
};

export default function VehicleCard({ vehicle, onViewDetails }: VehicleCardProps) {
  return (
    <div className="group relative bg-charcoal-light border border-steel rounded-sm overflow-hidden hover:border-amber/50 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-charcoal-deep">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className={`inline-flex items-center px-2.5 py-1 text-xs font-semibold border rounded-sm ${categoryColors[vehicle.category]}`}>
            {vehicle.category}
          </span>
        </div>
        {/* Amber accent line on hover */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-xl font-700 text-foreground mb-1 group-hover:text-amber transition-colors">
          {vehicle.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{vehicle.tagline}</p>

        {/* Quick specs */}
        <div className="grid grid-cols-2 gap-2 mb-5">
          <div className="bg-steel/50 rounded-sm px-3 py-2">
            <span className="text-[10px] text-muted-foreground uppercase tracking-wide block">Payload</span>
            <span className="text-sm font-semibold text-foreground">{vehicle.specs.payload}</span>
          </div>
          <div className="bg-steel/50 rounded-sm px-3 py-2">
            <span className="text-[10px] text-muted-foreground uppercase tracking-wide block">Fuel</span>
            <span className="text-sm font-semibold text-foreground">{vehicle.specs.fuelType}</span>
          </div>
        </div>

        <button
          onClick={() => onViewDetails(vehicle)}
          className="w-full flex items-center justify-center gap-2 py-2.5 border border-steel text-sm font-semibold text-muted-foreground hover:border-amber hover:text-amber hover:bg-amber/5 transition-all duration-200 rounded-sm group/btn"
        >
          View Details
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
