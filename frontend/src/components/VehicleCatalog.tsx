import { useState } from 'react';
import VehicleCard, { type Vehicle } from './VehicleCard';
import VehicleDetailModal from './VehicleDetailModal';

const VEHICLES: Vehicle[] = [
  {
    id: 'sml-isuzu-s7-staff',
    name: 'SML S7 Staff Bus',
    category: 'Bus',
    tagline: 'Premium staff transportation with superior comfort and safety features for corporate fleets.',
    image: '/assets/generated/vehicle-bus.dim_800x500.png',
    specs: {
      engine: 'Isuzu 4HK1 4-Cylinder',
      power: '150 HP @ 2600 RPM',
      payload: '3,500 kg',
      fuelType: 'Diesel',
      gvw: '8,500 kg',
      wheelbase: '4,300 mm',
    },
  },
  {
    id: 'sml-isuzu-s7-school',
    name: 'SML S7 School Bus',
    category: 'Bus',
    tagline: 'Purpose-built school bus with enhanced safety systems and child-friendly design.',
    image: '/assets/generated/vehicle-bus.dim_800x500.png',
    specs: {
      engine: 'Isuzu 4HK1 4-Cylinder',
      power: '150 HP @ 2600 RPM',
      payload: '3,200 kg',
      fuelType: 'Diesel',
      gvw: '8,200 kg',
      wheelbase: '4,300 mm',
    },
  },
  {
    id: 'sml-isuzu-cargo',
    name: 'SML Cargo Truck',
    category: 'Truck',
    tagline: 'Heavy-duty cargo truck engineered for long-haul logistics and demanding terrains.',
    image: '/assets/generated/vehicle-truck.dim_800x500.png',
    specs: {
      engine: 'Isuzu 6HK1 6-Cylinder',
      power: '240 HP @ 2400 RPM',
      payload: '9,000 kg',
      fuelType: 'Diesel',
      gvw: '16,200 kg',
      wheelbase: '5,200 mm',
    },
  },
  {
    id: 'sml-isuzu-tipper',
    name: 'SML Tipper Truck',
    category: 'Truck',
    tagline: 'Robust tipper truck built for construction and mining applications with high payload capacity.',
    image: '/assets/generated/vehicle-truck.dim_800x500.png',
    specs: {
      engine: 'Isuzu 6HK1 6-Cylinder',
      power: '240 HP @ 2400 RPM',
      payload: '10,000 kg',
      fuelType: 'Diesel',
      gvw: '16,200 kg',
      wheelbase: '4,800 mm',
    },
  },
  {
    id: 'sml-isuzu-lcv-pickup',
    name: 'SML LCV Pickup',
    category: 'LCV',
    tagline: 'Versatile light commercial vehicle ideal for last-mile delivery and urban logistics.',
    image: '/assets/generated/vehicle-lcv.dim_800x500.png',
    specs: {
      engine: 'Isuzu 4JJ1 4-Cylinder',
      power: '130 HP @ 3600 RPM',
      payload: '1,500 kg',
      fuelType: 'Diesel',
      gvw: '3,500 kg',
      wheelbase: '3,095 mm',
    },
  },
  {
    id: 'sml-isuzu-lcv-van',
    name: 'SML LCV Cargo Van',
    category: 'LCV',
    tagline: 'Enclosed cargo van with maximum load space for e-commerce and distribution businesses.',
    image: '/assets/generated/vehicle-lcv.dim_800x500.png',
    specs: {
      engine: 'Isuzu 4JJ1 4-Cylinder',
      power: '130 HP @ 3600 RPM',
      payload: '1,200 kg',
      fuelType: 'Diesel',
      gvw: '3,200 kg',
      wheelbase: '3,095 mm',
    },
  },
];

type FilterCategory = 'All' | 'Bus' | 'Truck' | 'LCV';
const FILTERS: FilterCategory[] = ['All', 'Bus', 'Truck', 'LCV'];

export default function VehicleCatalog() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filtered = activeFilter === 'All'
    ? VEHICLES
    : VEHICLES.filter((v) => v.category === activeFilter);

  const handleViewDetails = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setModalOpen(true);
  };

  return (
    <section id="vehicles" className="section-padding bg-charcoal-deep">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber/10 border border-amber/30 rounded-sm mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber" />
            <span className="text-amber text-xs font-semibold tracking-[0.15em] uppercase">Our Fleet</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-800 text-foreground mb-4 amber-underline">
            VEHICLE LINEUP
          </h2>
          <p className="text-muted-foreground max-w-xl mt-6">
            From school buses to heavy-duty trucks, our comprehensive range of commercial vehicles
            is engineered to meet every business need.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 text-sm font-semibold rounded-sm border transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-amber text-charcoal-deep border-amber'
                  : 'bg-transparent text-muted-foreground border-steel hover:border-amber/50 hover:text-foreground'
              }`}
            >
              {filter}
              {filter !== 'All' && (
                <span className={`ml-2 text-xs ${activeFilter === filter ? 'text-charcoal-deep/70' : 'text-muted-foreground'}`}>
                  ({VEHICLES.filter((v) => v.category === filter).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Vehicle grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      </div>

      <VehicleDetailModal
        vehicle={selectedVehicle}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
