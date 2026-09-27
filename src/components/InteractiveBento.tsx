import React, { useState } from 'react';
import { Award, Compass, Sparkles, Sliders, CheckCircle2, Heart, GlassWater } from 'lucide-react';

interface InteractiveBentoProps {
  onOpenBooking: (chamber?: string) => void;
}

export const InteractiveBento: React.FC<InteractiveBentoProps> = ({ onOpenBooking }) => {
  const [suiteType, setSuiteType] = useState<'charm' | 'junior' | 'master'>('junior');
  const [welcome, setWelcome] = useState<'champagne' | 'chocolates' | 'roses'>('champagne');
  const [concierge, setConcierge] = useState<'carriage' | 'boat' | 'michelin'>('carriage');

  return (
    <section id="hotel-capabilities" className="relative py-28 md:py-36 bg-[#10171E] text-[#F5EFE6] overflow-hidden border-t border-[#CCA65B]/15">
      {/* Ambient Radial Glow (Meta AI Standard) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#CCA65B]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#541520]/30 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-[11px] font-mono tracking-[0.25em] text-[#CCA65B] uppercase mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#CCA65B]" />
              FLEMISH HERITAGE & AMENITIES / 03
            </div>
            <h2 className="font-['Cinzel_Decorative',serif] text-[36px] md:text-[52px] leading-[0.95] text-[#F5EFE6]">
              Intimate European Luxury.
            </h2>
          </div>
          <p className="text-[14px] md:text-[15px] text-[#8A959E] max-w-md font-['Cardo',serif] leading-relaxed">
            Every chamber is uniquely appointed with historic antiques, hand-woven fabrics, and personalized attention from our family-led staff.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Card 1: Interactive Chamber & Romance Configurator (Col Span 2) */}
          <div className="md:col-span-2 lg:col-span-2 rounded-2xl bg-[#17212B]/80 border border-[#CCA65B]/30 p-8 flex flex-col justify-between backdrop-blur-md relative overflow-hidden shadow-xl">
            <div className="relative z-10">
              <div className="flex items-center justify-between border-b border-[#CCA65B]/20 pb-4 mb-6">
                <span className="text-[11px] font-mono text-[#CCA65B] tracking-widest uppercase flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-[#CCA65B]" />
                  SOJOURN & ROMANCE CONFIGURATOR
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#CCA65B]/20 text-[#CCA65B] text-[10px] font-mono font-bold">
                  BRUGES CONCIERGE
                </span>
              </div>

              <h3 className="font-['Cinzel_Decorative',serif] text-[22px] md:text-[26px] text-[#F5EFE6] mb-2">
                Curate your stay at The Pand.
              </h3>
              <p className="text-[13px] text-[#8A959E] mb-6">
                Select your preferred chamber tier, arrival champagne amenity, and exclusive city concierge privileges.
              </p>

              {/* Suite Selection */}
              <div className="mb-4">
                <span className="text-[11px] font-mono text-[#8A959E] block mb-2 uppercase">1. Chamber Category:</span>
                <div className="grid grid-cols-3 gap-2">
                  {(['charm', 'junior', 'master'] as const).map((s) => (
                    <button
                      key={s}
                      onClick={() => setSuiteType(s)}
                      className={`px-3 py-2 rounded-lg text-[11px] font-mono uppercase transition-all ${
                        suiteType === s
                          ? 'bg-[#CCA65B] text-[#10171E] font-bold shadow-md shadow-[#CCA65B]/20'
                          : 'bg-[#10171E]/80 text-[#F5EFE6] border border-[#CCA65B]/20 hover:border-[#CCA65B]/50'
                      }`}
                    >
                      {s === 'charm' ? 'Charming Double' : s === 'junior' ? 'Ralph Lauren Junior' : 'Master Suite'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Welcome Amenity Selection */}
              <div className="mb-4">
                <span className="text-[11px] font-mono text-[#8A959E] block mb-2 uppercase">2. Arrival Welcome Amenity:</span>
                <div className="grid grid-cols-3 gap-2">
                  {(['champagne', 'chocolates', 'roses'] as const).map((w) => (
                    <button
                      key={w}
                      onClick={() => setWelcome(w)}
                      className={`px-3 py-2 rounded-lg text-[11px] font-mono uppercase transition-all ${
                        welcome === w
                          ? 'bg-[#CCA65B] text-[#10171E] font-bold shadow-md shadow-[#CCA65B]/20'
                          : 'bg-[#10171E]/80 text-[#F5EFE6] border border-[#CCA65B]/20 hover:border-[#CCA65B]/50'
                      }`}
                    >
                      {w === 'champagne' ? 'Taittinger Brut' : w === 'chocolates' ? 'Belgian Pralines' : 'Fresh Roses'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Concierge Selection */}
              <div>
                <span className="text-[11px] font-mono text-[#8A959E] block mb-2 uppercase">3. Concierge Experience:</span>
                <div className="grid grid-cols-3 gap-2">
                  {(['carriage', 'boat', 'michelin'] as const).map((c) => (
                    <button
                      key={c}
                      onClick={() => setConcierge(c)}
                      className={`px-3 py-2 rounded-lg text-[11px] font-mono uppercase transition-all ${
                        concierge === c
                          ? 'bg-[#CCA65B] text-[#10171E] font-bold shadow-md shadow-[#CCA65B]/20'
                          : 'bg-[#10171E]/80 text-[#F5EFE6] border border-[#CCA65B]/20 hover:border-[#CCA65B]/50'
                      }`}
                    >
                      {c === 'carriage' ? 'Horse Carriage' : c === 'boat' ? 'Canal Boat' : 'Michelin Table'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-8 pt-4 border-t border-[#CCA65B]/20 flex items-center justify-between">
              <div className="text-[11px] font-mono text-[#CCA65B]">
                CURATION: {suiteType.toUpperCase()} • {welcome.toUpperCase()}
              </div>
              <button
                onClick={() => onOpenBooking(`Sojourn: ${suiteType.toUpperCase()}`)}
                className="px-4 py-2 rounded-lg bg-[#CCA65B] text-[#10171E] font-mono text-[11px] font-bold uppercase hover:bg-[#d8b56f] transition-colors"
              >
                Inquire For Dates
              </button>
            </div>
          </div>

          {/* Card 2: 26 Intimate Rooms */}
          <div className="rounded-2xl bg-[#17212B]/80 border border-[#CCA65B]/30 p-8 flex flex-col justify-between backdrop-blur-md">
            <div>
              <div className="flex items-center gap-2 text-[#CCA65B] text-[11px] font-mono tracking-widest uppercase mb-4">
                <Heart className="w-4 h-4 text-[#CCA65B]" />
                INTIMATE HAVEN
              </div>
              <div className="font-['Cinzel_Decorative',serif] text-[48px] font-bold text-[#F5EFE6] leading-none mb-2">
                26
              </div>
              <div className="text-[13px] text-[#CCA65B] font-medium mb-3">
                Uniquely Appointed Chambers
              </div>
              <p className="text-[13px] text-[#8A959E] font-['Cardo',serif] leading-relaxed">
                Never crowded. Every guest enjoys personalized recognition, turn-down service, and direct access to Katelijne and our concierge team.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#CCA65B]/15 flex items-center gap-2 text-[11px] font-mono text-[#8A959E]">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              SLH Certified Excellence
            </div>
          </div>

          {/* Card 3: 18th-Century Heritage */}
          <div className="rounded-2xl bg-[#17212B]/80 border border-[#CCA65B]/30 p-8 flex flex-col justify-between backdrop-blur-md">
            <div>
              <div className="flex items-center gap-2 text-[#CCA65B] text-[11px] font-mono tracking-widest uppercase mb-4">
                <Award className="w-4 h-4 text-[#CCA65B]" />
                HISTORIC MONUMENT
              </div>
              <div className="font-['Cinzel_Decorative',serif] text-[48px] font-bold text-[#F5EFE6] leading-none mb-2">
                1780
              </div>
              <div className="text-[13px] text-[#CCA65B] font-medium mb-3">
                Original Carriage House Architecture
              </div>
              <p className="text-[13px] text-[#8A959E] font-['Cardo',serif] leading-relaxed">
                Preserving original wooden beams, stone fireplaces, and leaded stained glass, paired with discreet modern climate control.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#CCA65B]/15 flex items-center gap-2 text-[11px] font-mono text-[#8A959E]">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Protected Bruges Heritage
            </div>
          </div>

          {/* Card 4: Champagne Breakfast On AGA Stove */}
          <div className="md:col-span-2 rounded-2xl bg-[#17212B]/80 border border-[#CCA65B]/30 p-8 flex flex-col justify-between backdrop-blur-md">
            <div>
              <div className="flex items-center gap-2 text-[#CCA65B] text-[11px] font-mono tracking-widest uppercase mb-4">
                <GlassWater className="w-4 h-4 text-[#CCA65B]" />
                CHAMPAGNE BREAKFAST HERITAGE
              </div>
              <div className="font-['Cinzel_Decorative',serif] text-[32px] md:text-[38px] leading-tight mb-2">
                Waiter-Served by Candlelight.
              </div>
              <p className="text-[14px] text-[#8A959E] font-['Cardo',serif] leading-relaxed mb-6">
                Start every morning under stained glass with warm brioche, delicate scrambled eggs prepared on our cast-iron AGA, fresh squeezed juices, and free-flowing Taittinger champagne.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#CCA65B]/15">
              <div>
                <div className="text-[20px] font-mono font-bold text-[#F5EFE6]">Taittinger</div>
                <div className="text-[11px] font-mono text-[#8A959E]">Vintage Champagne</div>
              </div>
              <div>
                <div className="text-[20px] font-mono font-bold text-[#F5EFE6]">Cast-Iron</div>
                <div className="text-[11px] font-mono text-[#8A959E]">Antique AGA Stove</div>
              </div>
              <div>
                <div className="text-[20px] font-mono font-bold text-[#F5EFE6]">Courtyard</div>
                <div className="text-[11px] font-mono text-[#8A959E]">Garden Seating</div>
              </div>
              <div>
                <div className="text-[20px] font-mono font-bold text-[#F5EFE6]">Honesty Bar</div>
                <div className="text-[11px] font-mono text-[#8A959E]">24/7 Fine Spirits</div>
              </div>
            </div>
          </div>

          {/* Card 5: Direct Owner & General Manager Access */}
          <div className="md:col-span-2 rounded-2xl bg-[#17212B]/80 border border-[#CCA65B]/30 p-8 flex flex-col justify-between backdrop-blur-md">
            <div>
              <div className="flex items-center gap-2 text-[#CCA65B] text-[11px] font-mono tracking-widest uppercase mb-4">
                <Compass className="w-4 h-4 text-[#CCA65B]" />
                FAMILY STEWARDSHIP
              </div>
              <div className="font-['Cinzel_Decorative',serif] text-[32px] md:text-[38px] leading-tight mb-2">
                Welcomed by Katelijne Haelters.
              </div>
              <p className="text-[14px] text-[#8A959E] font-['Cardo',serif] leading-relaxed mb-4">
                The Pand is independently run by Mrs. Katelijne Haelters and her dedicated family team, ensuring warmth that multinational chain hotels cannot emulate.
              </p>
            </div>
            <div className="pt-4 border-t border-[#CCA65B]/15 flex items-center justify-between">
              <span className="text-[11px] font-mono text-[#CCA65B]">katelijne@pandhotel.com</span>
              <span className="text-[11px] font-mono text-[#8A959E]">General Manager Direct</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
