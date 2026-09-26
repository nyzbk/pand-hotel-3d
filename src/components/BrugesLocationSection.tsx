import React from 'react';
import { MapPin, Navigation, Clock, ShieldCheck, Heart } from 'lucide-react';

export const BrugesLocationSection: React.FC = () => {
  const highlights = [
    { title: 'Rozenhoedkaai Canal', distance: '350 meters', desc: 'The most photographed and romantic canal perspective in Bruges.' },
    { title: 'The Burg & Town Hall', distance: '400 meters', desc: 'Gothic architectural splendors and sacred Basilica of the Holy Blood.' },
    { title: 'Market Square & Belfry', distance: '500 meters', desc: 'The medieval beating heart of Bruges with panoramic tower climbs.' },
    { title: 'Groeningemuseum', distance: '250 meters', desc: 'World-renowned Flemish Primitives and renaissance art collection.' }
  ];

  return (
    <section id="location" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left column */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5" />
            <span>Pandreitje 16 · Historic City Center</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight">
            Secluded Tranquility in the Historic Heart of Bruges
          </h2>

          <p className="text-stone-300 text-base leading-relaxed">
            Tucked into a peaceful side street along the Pandreitje canal, The Pand Hotel offers rare seclusion just moments away from Bruges most iconic squares and waterways.
          </p>

          <div className="space-y-4 pt-2">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-stone-900/70 border border-stone-800 flex items-start justify-between gap-4"
              >
                <div>
                  <h4 className="font-serif text-white font-medium text-sm">{item.title}</h4>
                  <p className="text-xs text-stone-400 mt-0.5">{item.desc}</p>
                </div>
                <span className="text-xs font-semibold text-amber-400 whitespace-nowrap bg-stone-950 px-2.5 py-1 rounded border border-stone-800">
                  {item.distance}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="https://maps.google.com/?q=The+Pand+Hotel+Pandreitje+16+8000+Brugge+Belgium"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-800 hover:bg-stone-700 text-white font-semibold text-xs tracking-wider uppercase border border-stone-700 hover:border-amber-500 transition-all"
            >
              <Navigation className="w-3.5 h-3.5 text-amber-400" />
              <span>Get Directions</span>
            </a>

            <div className="flex items-center gap-2 text-xs text-stone-400">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              <span>24/7 Multilingual Concierge Desk</span>
            </div>
          </div>
        </div>

        {/* Right column: Accolades & Heritage */}
        <div className="lg:col-span-6 space-y-6">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-stone-900 via-stone-850 to-stone-900 border border-amber-600/30 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-stone-800 pb-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-500 font-semibold">
                  Member of Distinction
                </span>
                <h3 className="text-xl font-serif text-white mt-1">
                  Small Luxury Hotels of the World
                </h3>
              </div>
              <ShieldCheck className="w-10 h-10 text-amber-400 shrink-0" />
            </div>

            <p className="text-stone-300 text-sm leading-relaxed">
              &ldquo;The Pand Hotel is one of the most delightful gems in northern Europe. Authentic character, personalized silver breakfast service, and a discreet atmosphere that makes every traveler feel like an honored houseguest.&rdquo;
            </p>

            <div className="grid grid-cols-2 gap-4 border-t border-stone-800 pt-6">
              <div>
                <p className="text-3xl font-serif font-bold text-amber-400">4.8 / 5.0</p>
                <p className="text-xs text-stone-400 mt-1 uppercase tracking-wider font-medium">Guest Satisfaction</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-amber-400">18th C.</p>
                <p className="text-xs text-stone-400 mt-1 uppercase tracking-wider font-medium">Carriage Heritage</p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-stone-400 italic">
              <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400/30 shrink-0" />
              <span>Praised in CN Traveller, City Sidewalks & Michelin Guide</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
