import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, Calendar, Users, Shield } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSuite?: string;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  initialSuite = 'The Ralph Lauren Master Suite'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    suite: initialSuite,
    checkIn: '',
    checkOut: '',
    guests: '2 Adults',
    specialRequests: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-[#0e0d0c] border border-stone-700/70 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-stone-800 text-stone-400 hover:text-white hover:bg-stone-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-4 border border-amber-500/30">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif text-white">Direct Reservation Request Received</h3>
            <p className="mt-3 text-stone-300 text-sm leading-relaxed max-w-sm mx-auto">
              Thank you, {formData.name || 'honored guest'}. Our head concierge will contact you within 2 hours with confirmed availability and direct booking privileges for <span className="text-amber-400 font-medium">{formData.suite}</span>.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-6 px-6 py-2.5 rounded-full bg-amber-600 text-stone-950 font-semibold text-xs tracking-wider uppercase hover:bg-amber-500 transition-all"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-amber-500 text-xs font-semibold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Direct Concierge Desk</span>
            </div>
            <h3 className="text-2xl font-serif text-white">Reserve Your Residence in Bruges</h3>
            <p className="text-stone-400 text-xs mt-1 mb-6">
              Guaranteed best direct rate · Chilled champagne on arrival · No third-party fees.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-300 mb-1.5">
                  Guest Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Lord & Lady Hamilton"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-stone-950/80 border border-stone-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-300 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="guest@residence.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-stone-950/80 border border-stone-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-300 mb-1.5">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="+32 ... or +1 ..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-stone-950/80 border border-stone-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-300 mb-1.5">
                  Preferred Suite / Room
                </label>
                <select
                  value={formData.suite}
                  onChange={(e) => setFormData({ ...formData, suite: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-stone-950/80 border border-stone-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                >
                  <option value="The Ralph Lauren Master Suite">The Ralph Lauren Master Suite (From €520)</option>
                  <option value="The Private Garden Suite">The Private Garden Suite with Terrace (From €440)</option>
                  <option value="Junior Canal-Side Suite">Junior Canal-Side Suite (From €380)</option>
                  <option value="Charming Deluxe Carriage Room">Charming Deluxe Carriage Room (From €290)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-300 mb-1.5 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-amber-500" />
                    <span>Check-In</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.checkIn}
                    onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-stone-950/80 border border-stone-800 text-white text-xs focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-300 mb-1.5 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-amber-500" />
                    <span>Check-Out</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.checkOut}
                    onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-stone-950/80 border border-stone-800 text-white text-xs focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-300 mb-1.5 flex items-center gap-1">
                    <Users className="w-3 h-3 text-amber-500" />
                    <span>Guests</span>
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-stone-950/80 border border-stone-800 text-white text-xs focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="1 Adult">1 Adult</option>
                    <option value="2 Adults">2 Adults</option>
                    <option value="2 Adults + 1 Child">2 Adults + 1 Child</option>
                    <option value="Suite Buyout (Whole Floor)">Suite Buyout</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-bold text-xs uppercase tracking-widest shadow-xl transition-all"
                >
                  Request Direct Reservation
                </button>
              </div>

              <div className="flex items-center justify-center gap-1 text-[11px] text-stone-400 pt-1">
                <Shield className="w-3 h-3 text-amber-500" />
                <span>No cancellation fees up to 48 hours prior to arrival</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
