import React from 'react';
import { Crown, MapPin, Phone, Mail, Clock, ArrowUpRight, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#070605] border-t border-stone-800/80 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16 border-b border-stone-800/70">
          {/* Col 1 */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Crown className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg tracking-[0.25em] uppercase font-semibold text-white">
                  The Pand Hotel
                </span>
                <span className="text-[9px] tracking-[0.3em] text-amber-500 uppercase -mt-0.5 font-medium">
                  Brugge · Luxury Boutique
                </span>
              </div>
            </div>
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
              An 18th-century carriage mansion offering 26 bespoke suites, an authentic Louis XVI open fireplace salon, and personalized champagne breakfast in the historic heart of Bruges.
            </p>
            <div className="pt-1 flex items-center gap-2 text-xs text-amber-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-amber-500" />
              <span>Small Luxury Hotels of the World</span>
            </div>
          </div>

          {/* Col 2 */}
          <div className="space-y-3">
            <h4 className="text-xs font-serif uppercase tracking-widest text-amber-500 font-semibold">
              The Residence
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <a href="#carriage-tour" className="hover:text-amber-400 transition-colors">
                  18th-Century Carriage Tour
                </a>
              </li>
              <li>
                <a href="#suites" className="hover:text-amber-400 transition-colors">
                  The Ralph Lauren Master Suite
                </a>
              </li>
              <li>
                <a href="#suites" className="hover:text-amber-400 transition-colors">
                  The Private Garden Suite
                </a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-amber-400 transition-colors">
                  Louis XVI Fireplace Salon
                </a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-amber-400 transition-colors">
                  Champagne Breakfast Veranda
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-3">
            <h4 className="text-xs font-serif uppercase tracking-widest text-amber-500 font-semibold">
              Concierge & Dining Hours
            </h4>
            <div className="space-y-2 text-xs text-stone-300">
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-stone-200 font-medium">Champagne Breakfast</p>
                  <p className="text-stone-400">Daily: 7:30 AM – 11:00 AM</p>
                </div>
              </div>
              <div className="flex items-start gap-2 pt-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-stone-200 font-medium">The Library Bar & Lounge</p>
                  <p className="text-stone-400">Resident Access 24 Hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4 */}
          <div className="space-y-3">
            <h4 className="text-xs font-serif uppercase tracking-widest text-amber-500 font-semibold">
              Location & Contact
            </h4>
            <div className="space-y-2.5 text-xs text-stone-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                <span>Pandreitje 16, 8000 Brugge, Belgium</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <a href="tel:+3250340666" className="hover:text-amber-400 transition-colors">
                  +32 50 340666
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <a href="mailto:info@pandhotel.com" className="hover:text-amber-400 transition-colors">
                  info@pandhotel.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} The Pand Hotel Brugge. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#carriage-tour" className="hover:text-stone-200 transition-colors flex items-center gap-1">
              <span>Privacy Policy</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a href="#carriage-tour" className="hover:text-stone-200 transition-colors flex items-center gap-1">
              <span>Terms of Residence</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
