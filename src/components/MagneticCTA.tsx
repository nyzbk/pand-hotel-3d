import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Phone, Mail, MapPin, Clock, Award, CheckCircle2 } from 'lucide-react';

interface MagneticCTAProps {
  onOpenBooking: () => void;
}

export const MagneticCTA: React.FC<MagneticCTAProps> = ({ onOpenBooking }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const buttonInnerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const btn = buttonRef.current;
    const inner = buttonInnerRef.current;
    if (!btn || !inner) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      btn.style.transform = `translate3d(${dx * 0.32}px, ${dy * 0.45}px, 0)`;
      inner.style.transform = `translate3d(${dx * 0.15}px, ${dy * 0.20}px, 0)`;
    };

    const onMouseLeave = () => {
      btn.style.transform = 'translate3d(0px, 0px, 0px)';
      inner.style.transform = 'translate3d(0px, 0px, 0px)';
    };

    btn.addEventListener('mousemove', onMouseMove);
    btn.addEventListener('mouseleave', onMouseLeave);
    return () => {
      btn.removeEventListener('mousemove', onMouseMove);
      btn.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <section id="hotel-reserve" className="relative py-28 md:py-40 bg-[#0A0F14] text-[#F5EFE6] overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#CCA65B]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Massive Fluid Headline (Meta AI Standard) */}
        <div className="text-center mb-16">
          <div className="text-[12px] font-mono tracking-[0.3em] uppercase text-[#CCA65B] font-semibold mb-4">
            RESERVATIONS CONCIERGE / 05
          </div>
          <h2 className="font-['Cinzel_Decorative',serif] text-[11vw] md:text-[7.5vw] leading-[0.88] tracking-tight text-[#F5EFE6]">
            SOJOURN IN BRUGES.
          </h2>
          <p className="mt-6 text-[16px] md:text-[20px] text-[#8A959E] max-w-2xl mx-auto font-light leading-relaxed font-['Cardo',serif]">
            Reserve your intimate chamber or Ralph Lauren suite beside the Rozenhoedkaai canal and experience true Flemish aristocratic hospitality.
          </p>

          {/* Dual-Layer Magnetic Button */}
          <div className="mt-12 flex justify-center">
            <button
              ref={buttonRef}
              onClick={onOpenBooking}
              className="relative inline-flex items-center justify-center px-12 py-6 rounded-2xl bg-[#CCA65B] text-[#10171E] text-[16px] md:text-[18px] font-bold tracking-wider uppercase shadow-2xl shadow-[#CCA65B]/25 transition-transform duration-100 ease-out cursor-pointer hover:bg-[#d8b56f]"
            >
              <span ref={buttonInnerRef} className="flex items-center gap-3 transition-transform duration-100 ease-out">
                <span>Reserve Your Chamber</span>
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </button>
          </div>
        </div>

        {/* Deep Contact Intelligence Grid */}
        <div className="mt-20 pt-12 border-t border-[#CCA65B]/20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Executive & Leadership */}
          <div className="p-6 rounded-xl bg-[#10171E] border border-[#CCA65B]/20">
            <div className="flex items-center gap-2 text-[#CCA65B] text-[11px] font-mono tracking-widest uppercase mb-3">
              <Award className="w-4 h-4 text-[#CCA65B]" />
              GENERAL MANAGER & OWNER
            </div>
            <div className="text-[16px] font-semibold text-[#F5EFE6]">Mrs. Katelijne Haelters</div>
            <div className="text-[12px] text-[#8A959E] mb-3">General Manager & Propriétaire</div>
            <div className="text-[11px] font-mono text-[#CCA65B]">Family Owned & Operated</div>
          </div>

          {/* Phone Hotlines */}
          <div className="p-6 rounded-xl bg-[#10171E] border border-[#CCA65B]/20">
            <div className="flex items-center gap-2 text-[#CCA65B] text-[11px] font-mono tracking-widest uppercase mb-3">
              <Phone className="w-4 h-4 text-[#CCA65B]" />
              FRONT DESK & CONCIERGE
            </div>
            <a href="tel:+3250340666" className="block text-[16px] font-semibold text-[#F5EFE6] hover:text-[#CCA65B] transition-colors">
              +32 50 34 06 66
            </a>
            <div className="text-[12px] text-[#8A959E] mt-1">24/7 Hotel Reception Desk</div>
            <div className="text-[11px] font-mono text-[#CCA65B] mt-2">Multilingual Concierge</div>
          </div>

          {/* Electronic Mail */}
          <div className="p-6 rounded-xl bg-[#10171E] border border-[#CCA65B]/20">
            <div className="flex items-center gap-2 text-[#CCA65B] text-[11px] font-mono tracking-widest uppercase mb-3">
              <Mail className="w-4 h-4 text-[#CCA65B]" />
              DIRECT COMMUNICATIONS
            </div>
            <a href="mailto:katelijne@pandhotel.com" className="block text-[13px] font-mono text-[#F5EFE6] hover:text-[#CCA65B] transition-colors">
              katelijne@pandhotel.com
            </a>
            <a href="mailto:info@pandhotel.com" className="block text-[13px] font-mono text-[#CCA65B] mt-1 hover:underline">
              info@pandhotel.com
            </a>
            <div className="text-[11px] text-[#8A959E] mt-2">Direct booking & private concierge</div>
          </div>

          {/* Physical Address */}
          <div className="p-6 rounded-xl bg-[#10171E] border border-[#CCA65B]/20">
            <div className="flex items-center gap-2 text-[#CCA65B] text-[11px] font-mono tracking-widest uppercase mb-3">
              <MapPin className="w-4 h-4 text-[#CCA65B]" />
              HISTORIC BRUGES PRECINCT
            </div>
            <div className="text-[14px] text-[#F5EFE6]">Pandreitje 16</div>
            <div className="text-[13px] text-[#8A959E]">8000 Brugge, Belgium</div>
            <div className="mt-3 flex items-center gap-2 text-[11px] font-mono text-[#CCA65B]">
              <Clock className="w-3.5 h-3.5" />
              <span>Beside Rozenhoedkaai Canal</span>
            </div>
          </div>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 text-[12px] font-mono text-[#8A959E] border-t border-[#CCA65B]/10 pt-8">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              Small Luxury Hotels of the World (SLH)
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              Historic Hotels of Europe Member
            </span>
          </div>
          <div>© {new Date().getFullYear()} The Pand Hotel. All Rights Reserved.</div>
        </div>
      </div>
    </section>
  );
};
