import React, { useState, useEffect } from 'react';
import { Phone, ArrowUpRight, Menu, X, Crown, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (suiteName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0b0a09]/95 backdrop-blur-md py-3.5 border-b border-amber-900/30 shadow-2xl'
          : 'bg-gradient-to-b from-[#0b0a09]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
              <Crown className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-[0.25em] uppercase font-semibold text-white group-hover:text-amber-300 transition-colors">
                The Pand Hotel
              </span>
              <span className="text-[9px] tracking-[0.3em] text-amber-400 uppercase -mt-0.5 font-medium">
                Brugge · Small Luxury Hotels
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-widest text-stone-300 font-medium">
            <a href="#carriage-tour" className="hover:text-amber-400 transition-colors">
              The Carriage Tour
            </a>
            <a href="#suites" className="hover:text-amber-400 transition-colors">
              Suites & Rooms
            </a>
            <a href="#amenities" className="hover:text-amber-400 transition-colors">
              Fireplace Salon
            </a>
            <a href="#location" className="hover:text-amber-400 transition-colors">
              Bruges Heritage
            </a>
            <a href="#suites" className="hover:text-amber-300 transition-colors flex items-center gap-1 text-amber-400">
              <Sparkles className="w-3 h-3" />
              <span>Direct Privileges</span>
            </a>
          </div>

          {/* Direct CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:+3250340666"
              className="flex items-center gap-1.5 text-xs text-stone-300 hover:text-amber-400 font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>+32 50 340666</span>
            </a>

            <button
              onClick={() => onOpenBooking('Luxury Suite Reservation')}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-stone-950 font-semibold text-xs tracking-wider uppercase transition-all shadow-lg shadow-amber-950/40 flex items-center gap-1.5"
            >
              <span>Check Availability</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => onOpenBooking('Luxury Suite Reservation')}
              className="sm:hidden px-3.5 py-1.5 rounded-full bg-amber-600 text-stone-950 font-semibold text-[11px] tracking-wider uppercase"
            >
              Reserve
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-stone-900 border border-stone-800 text-stone-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-950/98 border-b border-stone-800 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 text-sm uppercase tracking-wider text-stone-300 font-medium">
            <a
              href="#carriage-tour"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 transition-colors"
            >
              18th-Century Carriage Tour
            </a>
            <a
              href="#suites"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 transition-colors"
            >
              Suites & Private Residences
            </a>
            <a
              href="#amenities"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 transition-colors"
            >
              Louis XVI Salon & Champagne Breakfast
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 transition-colors"
            >
              Pandreitje Canal Location
            </a>
          </div>

          <div className="pt-4 border-t border-stone-800 flex flex-col gap-3">
            <a
              href="tel:+3250340666"
              className="flex items-center gap-2 text-sm text-stone-300 hover:text-amber-400"
            >
              <Phone className="w-4 h-4 text-amber-500" />
              <span>+32 50 340666</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking('Luxury Suite Reservation');
              }}
              className="w-full py-3 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 text-stone-950 font-bold text-xs tracking-widest uppercase shadow-lg"
            >
              Reserve Directly with Concierge
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
