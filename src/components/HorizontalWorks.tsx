import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface ChamberItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  atmosphere: string;
  amenities: string[];
}

const CHAMBERS: ChamberItem[] = [
  {
    id: 'ralph-lauren-suite',
    category: 'MASTER SUITE',
    title: 'The Ralph Lauren Master Chamber',
    subtitle: 'Canopied four-poster bed draped in English wool and linen.',
    description: 'Our premier suite, featuring genuine 18th-century armoires, an expansive Italian marble bathroom with whirlpool bath, Molton Brown amenities, and views across the tranquil canal.',
    atmosphere: 'ROMANTIC MASTER SUITE',
    amenities: ['Antique Four-Poster Bed', 'Jacuzzi Whirlpool Bath', 'Molton Brown London'],
  },
  {
    id: 'library-bar',
    category: 'INTIMATE GATHERING',
    title: 'The Candlelit Library & Bar',
    subtitle: 'Leather wingback armchairs beside a crackling open hearth.',
    description: 'An intimate retreat lined with antiquarian travel volumes, original oil paintings, antique porcelain, and an honesty bar offering vintage Port, fine cognacs, and rare single malts.',
    atmosphere: 'HEARTH & SINGLE MALTS',
    amenities: ['Open Wood Fireplace', 'Fine Single Malt Whiskies', 'Antiquarian Leather Books'],
  },
  {
    id: 'breakfast-salon',
    category: 'CHAMPAGNE SALON',
    title: 'The Stained-Glass Breakfast Room',
    subtitle: 'Breakfast prepared on an antique cast-iron AGA stove.',
    description: 'Bask under morning sunlight filtering through century-old stained glass while our staff serves fresh Belgian waffles, farm eggs en cocotte, and vintage Taittinger champagne by candlelight.',
    atmosphere: 'WAITER-SERVED LUXURY',
    amenities: ['Cast-Iron AGA Stove', 'Fresh Warm Pastries', 'Chilled Taittinger Champagne'],
  },
  {
    id: 'canal-courtyard',
    category: 'TRANQUIL COURTYARD',
    title: 'The Cobblestone Patio & Fountain',
    subtitle: 'Secluded Flemish garden tucked away from city crowds.',
    description: 'Shaded by climbing wisteria and blooming white hydrangeas, listen to the gentle bubbling of the stone fountain and the distant clip-clop of horse-drawn carriages on cobblestones.',
    atmosphere: 'PRIVATE OASIS',
    amenities: ['Wisteria Garden Pergola', 'Antique Stone Fountain', 'Afternoon Tea Service'],
  },
  {
    id: 'concierge-desk',
    category: 'VIP BRUGES CONCIERGE',
    title: 'The Private Bruges Concierge',
    subtitle: 'Curated Flemish heritage, boat tours & Michelin tables.',
    description: 'Managed directly by Katelijne Haelters and her team. Enjoy VIP boat boarding from private docks, private carriage pick-up at the front door, and reserved tables at 3-Star Michelin restaurants.',
    atmosphere: 'BESPOKE HOSPITALITY',
    amenities: ['Private Canal Boat Access', 'Michelin Table Access', 'Horse Carriage Pick-Up'],
  },
];

interface HorizontalWorksProps {
  onOpenBooking: (chamber?: string) => void;
}

export const HorizontalWorks: React.FC<HorizontalWorksProps> = ({ onOpenBooking }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-78%']);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#0A0F14] text-[#F5EFE6]">
      {/* Sticky Window */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-[1600px] mx-auto w-full mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-[11px] font-mono tracking-[0.25em] text-[#CCA65B] uppercase mb-2 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#CCA65B]" />
              THE PAND EXPERIENCE / 02
            </div>
            <h2 className="font-['Cinzel_Decorative',serif] text-[32px] md:text-[50px] leading-[0.95] text-[#F5EFE6]">
              Chambers, Salons & Courtyards.
            </h2>
          </div>
          <p className="text-[14px] md:text-[15px] text-[#8A959E] max-w-md font-['Cardo',serif] leading-relaxed">
            Pan across our five historic salons and master suites, each preserved in 18th-century Flemish carriage house elegance.
          </p>
        </div>

        {/* Horizontal Sliding Track */}
        <div className="relative w-full overflow-visible">
          <motion.div style={{ x }} className="flex gap-8 items-stretch will-change-transform">
            {CHAMBERS.map((chamber, index) => (
              <div
                key={chamber.id}
                className="group relative w-[85vw] sm:w-[540px] md:w-[620px] flex-shrink-0 rounded-2xl bg-gradient-to-br from-[#17212B] to-[#0E151C] border border-[#CCA65B]/25 p-8 md:p-10 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:border-[#CCA65B]/60 hover:shadow-[#CCA65B]/10"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#CCA65B]/15 pb-4 mb-6">
                    <span className="text-[11px] font-mono tracking-widest text-[#CCA65B] uppercase">
                      [{String(index + 1).padStart(2, '0')}] // {chamber.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#CCA65B]/15 text-[#CCA65B] text-[11px] font-mono font-medium">
                      {chamber.atmosphere}
                    </span>
                  </div>

                  <h3 className="font-['Cinzel_Decorative',serif] text-[24px] md:text-[30px] leading-tight text-[#F5EFE6] mb-2">
                    {chamber.title}
                  </h3>

                  <p className="text-[14px] text-[#CCA65B] font-medium mb-4 italic">
                    "{chamber.subtitle}"
                  </p>

                  <p className="text-[14px] md:text-[15px] text-[#8A959E] leading-relaxed mb-6 font-['Cardo',serif]">
                    {chamber.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {chamber.amenities.map((amenity, aIdx) => (
                      <span
                        key={aIdx}
                        className="px-2.5 py-1 rounded-md bg-[#10171E] border border-[#CCA65B]/20 text-[11px] font-mono text-[#F5EFE6]/80"
                      >
                        ✓ {amenity}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onOpenBooking(chamber.title)}
                    className="w-full py-3.5 rounded-xl bg-[#CCA65B]/15 border border-[#CCA65B]/40 text-[#CCA65B] hover:bg-[#CCA65B] hover:text-[#10171E] text-[13px] font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 group-hover:border-[#CCA65B]"
                  >
                    <span>Reserve Chamber</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Progress Bar at Bottom of Sticky Frame */}
        <div className="max-w-[1600px] mx-auto w-full mt-8">
          <div className="w-full h-1 bg-[#17212B] rounded-full overflow-hidden">
            <motion.div
              style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
              className="h-full bg-[#CCA65B]"
            />
          </div>
          <div className="flex justify-between items-center text-[10px] font-mono text-[#8A959E] mt-2">
            <span>CHAMBER 01: RALPH LAUREN SUITE</span>
            <span>CHAMBER 05: PRIVATE CONCIERGE</span>
          </div>
        </div>
      </div>
    </section>
  );
};
