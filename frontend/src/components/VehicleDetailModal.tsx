import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { X, Zap, Weight, Fuel, Ruler, Settings, Gauge } from 'lucide-react';
import type { Vehicle } from './VehicleCard';

interface VehicleDetailModalProps {
  vehicle: Vehicle | null;
  open: boolean;
  onClose: () => void;
}

const specIcons: Record<string, React.ReactNode> = {
  engine: <Settings className="w-4 h-4" />,
  power: <Zap className="w-4 h-4" />,
  payload: <Weight className="w-4 h-4" />,
  fuelType: <Fuel className="w-4 h-4" />,
  gvw: <Gauge className="w-4 h-4" />,
  wheelbase: <Ruler className="w-4 h-4" />,
};

const specLabels: Record<string, string> = {
  engine: 'Engine',
  power: 'Power Output',
  payload: 'Payload Capacity',
  fuelType: 'Fuel Type',
  gvw: 'Gross Vehicle Weight',
  wheelbase: 'Wheelbase',
};

const categoryColors: Record<string, string> = {
  Bus: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
  Truck: 'text-amber bg-amber/10 border-amber/30',
  LCV: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
};

export default function VehicleDetailModal({ vehicle, open, onClose }: VehicleDetailModalProps) {
  if (!vehicle) return null;

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-2xl bg-charcoal border-steel p-0 overflow-hidden rounded-sm">
        {/* Image header */}
        <div className="relative h-56 bg-charcoal-deep overflow-hidden">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <div>
              <span className={`inline-flex items-center px-2.5 py-1 text-xs font-semibold border rounded-sm mb-2 ${categoryColors[vehicle.category]}`}>
                {vehicle.category}
              </span>
              <h2 className="font-display text-3xl font-800 text-foreground">{vehicle.name}</h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 bg-charcoal/70 hover:bg-charcoal text-foreground rounded-sm transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <DialogHeader className="mb-4">
            <DialogDescription className="text-muted-foreground text-sm leading-relaxed">
              {vehicle.tagline}
            </DialogDescription>
          </DialogHeader>

          {/* Amber divider */}
          <div className="flex items-center gap-3 mb-5">
            <div className="h-0.5 w-8 bg-amber" />
            <span className="text-xs font-semibold tracking-widest uppercase text-amber">Specifications</span>
            <div className="h-0.5 flex-1 bg-steel" />
          </div>

          {/* Specs grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {Object.entries(vehicle.specs).map(([key, value]) => (
              <div key={key} className="bg-steel/40 border border-steel rounded-sm p-3 hover:border-amber/30 transition-colors">
                <div className="flex items-center gap-1.5 text-amber mb-1.5">
                  {specIcons[key]}
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                    {specLabels[key]}
                  </span>
                </div>
                <span className="text-sm font-semibold text-foreground">{value}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-6 flex gap-3">
            <button
              onClick={() => {
                onClose();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex-1 py-3 bg-amber text-charcoal-deep font-bold text-sm tracking-wide uppercase rounded-sm hover:bg-amber-bright transition-colors"
            >
              Enquire Now
            </button>
            <button
              onClick={() => {
                onClose();
                document.querySelector('#dealers')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex-1 py-3 border border-steel text-foreground font-semibold text-sm tracking-wide uppercase rounded-sm hover:border-amber hover:text-amber transition-colors"
            >
              Find Dealer
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
