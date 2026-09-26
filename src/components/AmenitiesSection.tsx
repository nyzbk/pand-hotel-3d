import React from 'react';
import { HOTEL_AMENITIES } from '../data/hotel';
import type { HotelAmenity } from '../data/hotel';
import { Coffee, Flame, Wine, Compass } from 'lucide-react';

export const AmenitiesSection: React.FC = () => {
  const icons = [Flame, Coffee, Wine];

  return (
    <section id="amenities" className="py-24 bg-stone-900/40 border-y border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-500 font-serif tracking-widest text-xs uppercase font-medium">
            Art de Vivre
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight mt-3">
            Timeless Elegance & Discreet Luxury
          </h2>
          <p className="mt-4 text-stone-400 text-sm sm:text-base leading-relaxed">
            Step away from the cobblestone bustle of Bruges into an oasis of warmth, crackling fires, rare books, and genuine Flemish refinement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HOTEL_AMENITIES.map((amenity: HotelAmenity, index: number) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={index}
                className="rounded-2xl bg-stone-900/80 border border-stone-800 overflow-hidden flex flex-col justify-between hover:border-amber-600/50 transition-all group"
              >
                <div>
                  <div className="relative aspect-[16/11] overflow-hidden bg-stone-950">
                    <img
                      src={amenity.image}
                      alt={amenity.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-black/20" />
                  </div>

                  <div className="p-6">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="font-serif text-xl text-white font-medium group-hover:text-amber-300 transition-colors">
                      {amenity.title}
                    </h3>
                    <p className="text-xs text-amber-400 font-medium uppercase tracking-wider mt-1">
                      {amenity.subtitle}
                    </p>
                    <p className="text-stone-400 text-xs sm:text-sm mt-3 leading-relaxed">
                      {amenity.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-3 border-t border-stone-800/80 flex items-center gap-2 text-xs text-stone-400">
                    <Compass className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>Exclusive resident access 24 hours</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
