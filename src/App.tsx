import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SignatureWidget } from './components/SignatureWidget';
import { SuitesSection } from './components/SuitesSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { BrugesLocationSection } from './components/BrugesLocationSection';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';

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
    <div className="min-h-screen bg-[#10171E] text-[#F5EFE6] font-['Marcellus'] antialiased selection:bg-[#CCA65B] selection:text-[#10171E]">
      <Navbar onOpenBooking={handleOpenBooking} />

      <main>
        <Hero onOpenBooking={handleOpenBooking} />
        
        {/* Bespoke 18th-Century Suite & Experience Concierge Widget */}
        <SignatureWidget onOpenBooking={() => handleOpenBooking()} />

        <SuitesSection onOpenBooking={handleOpenBooking} />
        <AmenitiesSection />
        <BrugesLocationSection />
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
