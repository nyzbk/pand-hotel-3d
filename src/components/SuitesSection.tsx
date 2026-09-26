import React from 'react';
import { HOTEL_SUITES } from '../data/hotel';
import type { HotelSuite } from '../data/hotel';
import { ArrowRight, CheckCircle2, Maximize, Compass, Sparkles } from 'lucide-react';

interface SuitesSectionProps {
  onOpenBooking: (suiteName?: string) => void;
}

export const SuitesSection: React.FC<SuitesSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="suites" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-amber-500 font-serif tracking-widest text-xs uppercase font-medium">
          Twenty-Six Distinct Sanctuaries
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight mt-3">
          Suites & Carriage Residences
        </h2>
        <p className="mt-4 text-stone-400 text-base sm:text-lg leading-relaxed">
          No two rooms are alike. Each suite is individually adorned with authentic 18th-century antiques, precious artwork, Ralph Lauren fabrics, and marble bathrooms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {HOTEL_SUITES.map((suite: HotelSuite) => (
          <div
            key={suite.id}
            className="group rounded-2xl bg-stone-900/60 border border-stone-800/80 hover:border-amber-700/60 overflow-hidden transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-950">
                <img
                  src={suite.image}
                  alt={suite.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-black/20" />
                <span className="absolute top-4 left-4 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-medium text-amber-400 border border-amber-500/20">
                  {suite.category}
                </span>
                <span className="absolute bottom-4 right-4 bg-stone-950/90 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-serif text-amber-300 border border-stone-800">
                  {suite.rate}
                </span>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-serif text-white group-hover:text-amber-300 transition-colors">
                    {suite.name}
                  </h3>
                </div>

                <div className="flex items-center gap-4 mt-2 text-xs text-stone-400">
                  <span className="flex items-center gap-1">
                    <Maximize className="w-3.5 h-3.5 text-amber-500/80" />
                    <span>{suite.size}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Compass className="w-3.5 h-3.5 text-amber-500/80" />
                    <span>{suite.view}</span>
                  </span>
                </div>

                <p className="mt-4 text-stone-300 text-sm leading-relaxed">
                  {suite.description}
                </p>

                <div className="mt-6 space-y-2 border-t border-stone-800/70 pt-4">
                  {suite.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-stone-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-500/80 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0">
              <button
                onClick={() => onOpenBooking(suite.name)}
                className="w-full py-3.5 px-4 rounded-xl bg-stone-800/80 hover:bg-amber-600 text-stone-200 hover:text-stone-950 font-medium text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 group/btn"
              >
                <span>Reserve Directly With Concierge</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Direct Booking Privilege Banner */}
      <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 border border-amber-600/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-white font-serif text-lg font-medium">
              Direct Reservation Privileges
            </h4>
            <p className="text-stone-400 text-xs sm:text-sm mt-0.5">
              Guests booking directly through our concierge receive guaranteed best rates, a bottle of chilled Champagne upon arrival, and priority room upgrades.
            </p>
          </div>
        </div>
        <button
          onClick={() => onOpenBooking('Direct Privilege Reservation')}
          className="whitespace-nowrap px-6 py-3 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-stone-950 font-semibold text-xs tracking-widest uppercase transition-all shadow-lg"
        >
          Check Direct Rates
        </button>
      </div>
    </section>
  );
};
