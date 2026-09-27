import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HorizontalWorks } from './components/HorizontalWorks';
import { InteractiveBento } from './components/InteractiveBento';
import { KineticMarquee } from './components/KineticMarquee';
import { SignatureWidget } from './components/SignatureWidget';
import { MagneticCTA } from './components/MagneticCTA';
import { ReservationModal } from './components/ReservationModal';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSuite, setSelectedSuite] = useState('The Ralph Lauren Master Suite');

  const handleOpenBooking = (suiteName?: string) => {
    if (suiteName) {
      setSelectedSuite(suiteName);
    }
    setModalOpen(true);
  };

  const handleCloseBooking = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#10171E] text-[#F5EFE6] font-['Marcellus',serif] antialiased selection:bg-[#CCA65B] selection:text-[#10171E] overflow-x-clip">
      <Navbar onOpenBooking={handleOpenBooking} />

      <main>
        {/* Section 1: Jack Roberts SOTA 240-Frame Canvas Hero */}
        <Hero onOpenBooking={() => handleOpenBooking()} />
        
        {/* Section 2: Meta AI Pinned Horizontal Scroll Gallery (300vh) */}
        <HorizontalWorks onOpenBooking={handleOpenBooking} />

        {/* Section 3: Interactive Bento Grid with Live Telemetry */}
        <InteractiveBento onOpenBooking={handleOpenBooking} />

        {/* Section 4: Kinetic Marquee Ribbon */}
        <KineticMarquee />

        {/* Bespoke 18th-Century Suite & Experience Concierge Widget */}
        <SignatureWidget onOpenBooking={() => handleOpenBooking()} />

        {/* Section 5: Premium Magnetic CTA with Multi-Contact Intelligence */}
        <MagneticCTA onOpenBooking={() => handleOpenBooking()} />
      </main>

      <Footer />

      <ReservationModal
        isOpen={modalOpen}
        onClose={handleCloseBooking}
        initialSuite={selectedSuite}
      />
    </div>
  );
};

export default App;
