import React from 'react';
import { Sparkles, Compass, Award, Heart, GlassWater } from 'lucide-react';

export const KineticMarquee: React.FC = () => {
  const items = [
    { text: 'ESTABLISHED 1780 • BRUGES, BELGIUM', icon: Award },
    { text: 'SMALL LUXURY HOTELS OF THE WORLD', icon: Sparkles },
    { text: 'RALPH LAUREN MASTER SUITES', icon: Compass },
    { text: 'CHAMPAGNE BREAKFAST BY CANDLELIGHT', icon: GlassWater },
    { text: 'CANAL-SIDE CARRIAGE MANSION', icon: Heart },
    { text: 'LOUIS XVI PERIOD ANTIQUES', icon: Award },
    { text: 'PANDREITJE 16 • MEDIEVAL HISTORIC CENTRE', icon: Sparkles },
  ];

  return (
    <div className="relative py-8 bg-[#0A0F14] border-y border-[#CCA65B]/25 overflow-hidden">
      <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#0A0F14] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#0A0F14] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee">
        {Array.from({ length: 4 }).map((_, loopIdx) => (
          <div key={loopIdx} className="flex items-center gap-12 pr-12">
            {items.map((item, itemIdx) => {
              const Icon = item.icon;
              return (
                <div key={itemIdx} className="flex items-center gap-4 text-nowrap">
                  <Icon className="w-4 h-4 text-[#CCA65B]" />
                  <span className="font-['Cinzel_Decorative',serif] text-[18px] md:text-[22px] tracking-wider text-[#F5EFE6]">
                    {item.text}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CCA65B]/50 mx-2" />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
