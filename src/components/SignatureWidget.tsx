import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export const SignatureWidget: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const [roomCat, setRoomCat] = useState<'charming' | 'ralph-lauren' | 'fireplace-suite'>('ralph-lauren');

  const suites = {
    'charming': {
      title: 'Charming Canal View Room',
      desc: 'Overlooking historic Bruges cobblestone alleyways, dressed in French damask fabrics with private marble bath.'
    },
    'ralph-lauren': {
      title: 'Ralph Lauren Junior Suite',
      desc: 'Adorned in bespoke Ralph Lauren wool plaids, original 18th-century antique armoires, and complimentary vintage port wine.'
    },
    'fireplace-suite': {
      title: 'Lord Byron Fireplace Suite',
      desc: 'Featuring a functioning woodfire fireplace, four-poster canopy bed, and secluded private garden terrace view.'
    }
  };

  return (
    <section id="suite-concierge" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#10171E] text-[#F5EFE6] relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-['Marcellus'] uppercase tracking-[0.2em] text-[#CCA65B] block mb-3 font-semibold">
            Small Luxury Hotels of the World · Bruges
          </span>
          <h2 className="text-3xl sm:text-5xl font-['Cinzel_Decorative'] font-bold text-[#F5EFE6] tracking-tight">
            18th-Century Suite & Experience Concierge
          </h2>
          <p className="mt-4 text-[#8A959E] text-sm sm:text-base max-w-2xl mx-auto font-['Cardo'] italic">
            Steps from the Rozenhoedkaai. An intimate 26-suite sanctuary where candlelit fires burn in private antique libraries.
          </p>
        </div>

        <div className="bg-[#281611]/80 rounded-2xl p-6 sm:p-12 border border-[#CCA65B]/30 shadow-2xl backdrop-blur-md">
          <div className="space-y-8">
            {/* Suite Category Tabs */}
            <div>
              <label className="block text-xs font-['Marcellus'] uppercase tracking-wider text-[#CCA65B] mb-3">
                1. Select Heritage Suite Category
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'charming', name: 'Charming Canal Room' },
                  { id: 'ralph-lauren', name: 'Ralph Lauren Junior Suite' },
                  { id: 'fireplace-suite', name: 'Lord Byron Fireplace Suite' }
                ].map(r => (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setRoomCat(r.id as any)}
                    className={`p-4 rounded-xl text-xs font-['Marcellus'] font-semibold transition-all text-left ${
                      roomCat === r.id
                        ? 'bg-[#CCA65B] text-[#10171E] shadow-lg'
                        : 'bg-[#10171E]/60 text-[#8A959E] border border-white/5 hover:border-[#CCA65B]/40'
                    }`}
                  >
                    {r.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Suite Details Card */}
            <div className="bg-[#10171E] p-6 rounded-xl border border-[#CCA65B]/20 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-[10px] font-['Marcellus'] uppercase tracking-widest text-[#CCA65B] block mb-1">
                  Bruges Authentic Accommodation
                </span>
                <h4 className="text-xl font-['Cinzel_Decorative'] font-bold text-white">{suites[roomCat].title}</h4>
                <p className="text-xs text-[#8A959E] font-['Cardo'] mt-2 max-w-lg leading-relaxed">{suites[roomCat].desc}</p>
              </div>
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#CCA65B] text-[#10171E] font-['Marcellus'] font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-amber-300 transition-all btn-spring text-center flex items-center justify-center gap-2"
              >
                <span>Check Best Direct Rate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
