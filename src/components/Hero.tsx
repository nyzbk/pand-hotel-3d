import React, { useEffect, useRef, useState } from 'react';
import { ChevronRight, ChevronDown, Sparkles, Award } from 'lucide-react';

interface HeroProps {
  totalFrames?: number;
  onOpenBooking: (suiteName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  totalFrames = 60,
  onOpenBooking
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(1);

  const [, setCurrentFrame] = useState<number>(1);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [activeChapter, setActiveChapter] = useState<string>('The 18th-Century Carriage Courtyard');
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const total = totalFrames;
    const imgs: HTMLImageElement[] = new Array(total);

    // 1. Immediately fetch Frame 1 (<100ms first paint)
    const firstImg = new Image();
    firstImg.src = `/frames/frame_0001.webp?v=fast-v2`;
    firstImg.onload = () => {
      imgs[0] = firstImg;
      setIsLoaded(true);
      renderFrame(1);

      // 2. Progressive non-blocking preload for frames 2..total in small smooth batches
      let nextIdx = 2;
      const loadNextBatch = () => {
        const batchSize = 6;
        for (let b = 0; b < batchSize && nextIdx <= total; b++, nextIdx++) {
          const idx = nextIdx;
          const img = new Image();
          const frameStr = String(idx).padStart(4, '0');
          img.src = `/frames/frame_${frameStr}.webp?v=fast-v2`;
          img.onload = () => {
            if (currentFrameRef.current === idx) {
              renderFrame(idx);
            }
          };
          imgs[idx - 1] = img;
        }
        if (nextIdx <= total) {
          setTimeout(loadNextBatch, 15);
        }
      };
      loadNextBatch();
    };
    firstImg.onerror = () => {
      setIsLoaded(true);
    };
    imgs[0] = firstImg;
    imagesRef.current = imgs;
    const handleResize = () => {
      renderFrame(currentFrameRef.current);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [totalFrames]);

  const renderFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let img = imagesRef.current[frameIndex - 1];
    if (!img || !img.complete || img.naturalWidth === 0) {
      for (let offset = 1; offset < totalFrames; offset++) {
        const prev = imagesRef.current[frameIndex - 1 - offset];
        if (prev && prev.complete && prev.naturalWidth > 0) {
          img = prev;
          break;
        }
        const next = imagesRef.current[frameIndex - 1 + offset];
        if (next && next.complete && next.naturalWidth > 0) {
          img = next;
          break;
        }
      }
    }
    if (!img || !img.complete) return;

    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);

    const imgRatio = 16 / 9;
    const screenRatio = width / height;

    let drawWidth = width;
    let drawHeight = height;
    let offsetX = 0;
    let offsetY = 0;

    if (screenRatio > imgRatio) {
      drawWidth = width;
      drawHeight = width / imgRatio;
      offsetY = (height - drawHeight) / 2;
    } else {
      drawHeight = height;
      drawWidth = height * imgRatio;
      offsetX = (width - drawWidth) / 2;
    }

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

    // Subtle dark gradient for high-contrast typography
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, 'rgba(11, 10, 9, 0.50)');
    gradient.addColorStop(0.5, 'rgba(11, 10, 9, 0.20)');
    gradient.addColorStop(1, 'rgba(11, 10, 9, 0.88)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    ctx.restore();
  };

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollableDistance = rect.height - window.innerHeight;
      const currentScroll = -rect.top;

      let progress = currentScroll / scrollableDistance;
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);

      const frameNumber = Math.max(1, Math.min(totalFrames, Math.floor(progress * (totalFrames - 1)) + 1));
      currentFrameRef.current = frameNumber;
      setCurrentFrame(frameNumber);
      renderFrame(frameNumber);

      if (progress < 0.33) {
        setActiveChapter('The 18th-Century Carriage Courtyard');
      } else if (progress < 0.66) {
        setActiveChapter('The Louis XVI Fireplace Salon');
      } else if (progress < 0.88) {
        setActiveChapter('Champagne Breakfast Veranda');
      } else {
        setActiveChapter('Canal-View Heritage Suite');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [totalFrames]);

  const chapters = [
    { label: 'Carriage Courtyard', range: [0, 0.33] },
    { label: 'Louis XVI Salon', range: [0.33, 0.66] },
    { label: 'Champagne Veranda', range: [0.66, 0.88] },
    { label: 'Canal Suite', range: [0.88, 1.0] }
  ];

  return (
    <div id="carriage-tour" ref={containerRef} className="relative h-[450vh] bg-[#0b0a09]">
      {/* Sticky Hero Canvas */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Top Header Overlay Bar */}
        <div className="relative z-10 pt-28 px-4 sm:px-8 max-w-7xl mx-auto w-full flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-900/85 backdrop-blur-md border border-amber-600/30 text-amber-300 text-xs font-medium tracking-widest uppercase mb-4 shadow-xl">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Small Luxury Hotels of the World · Bruges</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light text-white tracking-tight max-w-4xl leading-[1.15] drop-shadow-md">
            An 18th-Century Carriage House Reborn in the Heart of Bruges
          </h1>

          <p className="mt-4 text-stone-200 text-sm sm:text-base max-w-2xl font-light tracking-wide drop-shadow">
            Only 26 individually styled suites steps from the Rozenhoedkaai canal. Warmed by authentic open fireplaces, Ralph Lauren fabrics, and timeless Flemish hospitality.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6">
            <button
              onClick={() => onOpenBooking('The Ralph Lauren Master Suite')}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-stone-950 font-semibold text-xs tracking-wider uppercase shadow-xl hover:from-amber-500 hover:to-amber-400 transition-all flex items-center gap-2"
            >
              <span>Reserve Boutique Suite</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onOpenBooking('Concierge Inquiry')}
              className="px-6 py-3 rounded-full bg-stone-900/80 backdrop-blur-md border border-stone-700 text-white font-medium text-xs tracking-wider uppercase hover:border-amber-500 transition-all flex items-center gap-2"
            >
              <span>Private Concierge Services</span>
            </button>
          </div>
        </div>

        {/* Center Chapter Callout Overlay */}
        <div className="relative z-10 px-4 sm:px-8 max-w-7xl mx-auto w-full my-auto flex flex-col items-start pointer-events-none">
          <div className="bg-stone-950/85 backdrop-blur-md border border-amber-600/25 rounded-2xl p-5 sm:p-6 max-w-md shadow-2xl transition-all duration-500 pointer-events-auto">
            <div className="flex items-center gap-2 text-[10px] tracking-[0.25em] text-amber-400 uppercase font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Carriage Walkthrough</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif text-white mt-1">
              {activeChapter}
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed">
              {scrollProgress < 0.33 &&
                'A private 18th-century cobblestone entrance secluded from the city bustling streets, welcoming discerning international travelers for over four decades.'}
              {scrollProgress >= 0.33 && scrollProgress < 0.66 &&
                'The heart of the residence: surrounded by over 1,000 antiquarian books, crackling hearth flames, and authentic Louis XVI furnishings.'}
              {scrollProgress >= 0.66 && scrollProgress < 0.88 &&
                'Our tranquil glass-roofed garden veranda serving farm eggs cooked to order, artisanal Belgian waffles, and champagne with silver teapots.'}
              {scrollProgress >= 0.88 &&
                'Romantic private suites adorned with Ralph Lauren upholstery, whirlpool baths, and peaceful views over the Pandreitje canal.'}
            </p>
          </div>
        </div>

        {/* Bottom HUD Bar */}
        <div className="relative z-10 pb-8 px-4 sm:px-8 max-w-7xl mx-auto w-full">
          <div className="bg-stone-950/90 backdrop-blur-md border border-stone-800/90 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl">
            {/* Chapters progression */}
            <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
              {chapters.map((ch, idx) => {
                const isActive = scrollProgress >= ch.range[0] && scrollProgress <= ch.range[1];
                return (
                  <div
                    key={idx}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-all whitespace-nowrap ${
                      isActive
                        ? 'bg-amber-500/20 border border-amber-500/40 text-amber-300 font-medium'
                        : 'text-stone-400 hover:text-stone-300'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                    <span>{ch.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Scroll Indicator */}
            <div className="flex items-center gap-3 text-xs text-stone-400 shrink-0">
              <span className="hidden md:inline">Scroll to Wander The Hotel</span>
              <div className="w-6 h-6 rounded-full border border-amber-500/30 flex items-center justify-center text-amber-400 animate-bounce">
                <ChevronDown className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
