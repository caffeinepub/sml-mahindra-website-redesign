import { useState, useMemo } from 'react';
import { Search, MapPin, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import DealerCard from './DealerCard';
import { useGetAllDealers } from '../hooks/useQueries';

export default function DealerLocator() {
  const [searchQuery, setSearchQuery] = useState('');
  const { data: dealers, isLoading, isError } = useGetAllDealers();

  const filteredDealers = useMemo(() => {
    if (!dealers) return [];
    if (!searchQuery.trim()) return dealers;
    const q = searchQuery.trim().toLowerCase();
    return dealers.filter(
      (d) =>
        d.city.toLowerCase().includes(q) ||
        d.state.toLowerCase().includes(q) ||
        d.name.toLowerCase().includes(q) ||
        d.address.toLowerCase().includes(q)
    );
  }, [dealers, searchQuery]);

  return (
    <section id="dealers" className="section-padding bg-charcoal">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber/10 border border-amber/30 rounded-sm mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber" />
            <span className="text-amber text-xs font-semibold tracking-[0.15em] uppercase">Dealer Network</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-800 text-foreground mb-4 amber-underline">
            FIND A DEALER
          </h2>
          <p className="text-muted-foreground max-w-xl mt-6">
            With over 200 authorized dealers across India, expert sales and service support
            is always close to you.
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-lg mb-10">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search by city, state, or dealer name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-11 bg-charcoal-light border-steel text-foreground placeholder:text-muted-foreground focus:border-amber focus:ring-amber/20 rounded-sm h-12"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors text-xs"
            >
              Clear
            </button>
          )}
        </div>

        {/* Results count */}
        {!isLoading && dealers && (
          <div className="flex items-center gap-2 mb-6">
            <span className="text-sm text-muted-foreground">
              {searchQuery
                ? `${filteredDealers.length} dealer${filteredDealers.length !== 1 ? 's' : ''} found for "${searchQuery}"`
                : `Showing all ${dealers.length} dealers`}
            </span>
          </div>
        )}

        {/* Loading state */}
        {isLoading && (
          <div className="flex items-center justify-center py-20">
            <div className="flex flex-col items-center gap-3">
              <Loader2 className="w-8 h-8 text-amber animate-spin" />
              <span className="text-sm text-muted-foreground">Loading dealers...</span>
            </div>
          </div>
        )}

        {/* Error state */}
        {isError && (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <p className="text-destructive font-medium mb-2">Failed to load dealers</p>
              <p className="text-sm text-muted-foreground">Please try again later.</p>
            </div>
          </div>
        )}

        {/* Empty state */}
        {!isLoading && !isError && filteredDealers.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-16 h-16 rounded-full bg-steel/50 flex items-center justify-center mb-4">
              <MapPin className="w-7 h-7 text-muted-foreground" />
            </div>
            <p className="text-foreground font-semibold mb-1">No dealers found</p>
            <p className="text-sm text-muted-foreground">
              Try searching with a different city or state name.
            </p>
          </div>
        )}

        {/* Dealer grid */}
        {!isLoading && !isError && filteredDealers.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredDealers.map((dealer, idx) => (
              <DealerCard key={`${dealer.name}-${dealer.city}-${idx}`} dealer={dealer} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
