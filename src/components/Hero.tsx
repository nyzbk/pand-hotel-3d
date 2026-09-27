import React, { useEffect, useRef, useState, useTransition } from 'react';
import { useScroll, useSpring, useTransform, motion } from 'framer-motion';
import { ArrowUpRight, Compass, ShieldCheck, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

const TOTAL_FRAMES = 240;

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(1);
  const [, startTransition] = useTransition();

  const [, setIsLoaded] = useState(false);
  
  // Jack Roberts spring physics: stiffness: 100, damping: 30
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.0001,
  });

  // Staged narrative typography opacities across 240 frames
  const stage1Opacity = useTransform(smoothProgress, [0, 0.18, 0.26], [1, 1, 0]);
  const stage1Y = useTransform(smoothProgress, [0, 0.22], [0, -35]);

  const stage2Opacity = useTransform(smoothProgress, [0.26, 0.34, 0.46, 0.54], [0, 1, 1, 0]);
  const stage2Y = useTransform(smoothProgress, [0.26, 0.34, 0.46, 0.54], [35, 0, 0, -35]);

  const stage3Opacity = useTransform(smoothProgress, [0.54, 0.62, 0.74, 0.82], [0, 1, 1, 0]);
  const stage3Y = useTransform(smoothProgress, [0.54, 0.62, 0.74, 0.82], [35, 0, 0, -35]);

  const stage4Opacity = useTransform(smoothProgress, [0.82, 0.90, 1], [0, 1, 1]);
  const stage4Y = useTransform(smoothProgress, [0.82, 0.90], [35, 0]);

  // Frame 1 immediate load + progressive background batching
  useEffect(() => {
    const imgs: HTMLImageElement[] = new Array(TOTAL_FRAMES);

    const firstImg = new Image();
    firstImg.src = `/frames/frame_0001.webp?v=240`;
    firstImg.onload = () => {
      imgs[0] = firstImg;
      setIsLoaded(true);
            renderFrame(1);

      let nextIndex = 2;
      const loadBatch = () => {
        const batchSize = 10;
        for (let i = 0; i < batchSize && nextIndex <= TOTAL_FRAMES; i++, nextIndex++) {
          const idx = nextIndex;
          const img = new Image();
          const frameNum = String(idx).padStart(4, '0');
          img.src = `/frames/frame_${frameNum}.webp?v=240`;
          img.onload = () => {
            imgs[idx - 1] = img;
                        if (currentFrameRef.current === idx) {
              renderFrame(idx);
            }
          };
          imgs[idx - 1] = img;
        }
        if (nextIndex <= TOTAL_FRAMES) {
          setTimeout(loadBatch, 15);
        }
      };
      loadBatch();
    };
    imgs[0] = firstImg;
    imagesRef.current = imgs;
  }, []);

  // Canvas COVER rendering algorithm
  const renderFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let img = imagesRef.current[frameIndex - 1];
    if (!img || !img.complete || img.naturalWidth === 0) {
      for (let i = frameIndex - 1; i >= 0; i--) {
        if (imagesRef.current[i] && imagesRef.current[i].complete && imagesRef.current[i].naturalWidth > 0) {
          img = imagesRef.current[i];
          break;
        }
      }
    }
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = window.devicePixelRatio || 1;
    const cw = canvas.clientWidth;
    const ch = canvas.clientHeight;

    if (canvas.width !== cw * dpr || canvas.height !== ch * dpr) {
      canvas.width = cw * dpr;
      canvas.height = ch * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, cw, ch);

    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = cw / ch;

    let drawW: number;
    let drawH: number;
    let offsetX: number;
    let offsetY: number;

    if (canvasRatio > imgRatio) {
      drawW = cw;
      drawH = cw / imgRatio;
      offsetX = 0;
      offsetY = (ch - drawH) / 2;
    } else {
      drawW = ch * imgRatio;
      drawH = ch;
      offsetX = (cw - drawW) / 2;
      offsetY = 0;
    }

    ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
    ctx.restore();
  };

  // Sync canvas with spring physics
  useEffect(() => {
    const unsubscribe = smoothProgress.on('change', (v) => {
      const targetFrame = Math.min(
        TOTAL_FRAMES,
        Math.max(1, Math.floor(v * (TOTAL_FRAMES - 1)) + 1)
      );
      if (targetFrame !== currentFrameRef.current) {
        currentFrameRef.current = targetFrame;
        startTransition(() => {
          renderFrame(targetFrame);
        });
      }
    });

    return () => unsubscribe();
  }, [smoothProgress]);

  // Window resize handler
  useEffect(() => {
    const handleResize = () => {
      renderFrame(currentFrameRef.current);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-[#10171E] text-[#F5EFE6]">
      {/* Sticky 100vh Fullscreen Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
        {/* Background Neural Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        />

        {/* Cinematic Candlelight Mahogany & Canal Twilight Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#10171E]/95 via-[#10171E]/40 to-[#10171E]/80 pointer-events-none z-10" />

        {/* 12-Column Architectural Hairline Grid Overlay */}
        <div className="absolute inset-0 pointer-events-none z-15 opacity-[0.08] grid grid-cols-6 md:grid-cols-12 max-w-[1600px] mx-auto px-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-[#CCA65B] h-full" />
          ))}
        </div>

        {/* Top Telemetry Header */}
        <div className="relative z-20 pt-24 px-6 md:px-12 flex justify-between items-start max-w-[1600px] mx-auto w-full">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#CCA65B]/15 border border-[#CCA65B]/30 text-[#CCA65B] text-[11px] font-mono tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CCA65B] animate-ping" />
              SMALL LUXURY HOTELS OF THE WORLD
            </span>
            <span className="hidden md:inline text-[11px] font-mono text-[#8A959E]">
              PANDREITJE 16 • BRUGES, BELGIUM
            </span>
          </div>

          <div className="text-right font-mono text-[11px] text-[#8A959E]">
            <div className="text-[#CCA65B] font-semibold">SMALL LUXURY HOTELS OF THE WORLD</div>
            <div>18TH-CENTURY CANAL RESIDENCE</div>
          </div>
        </div>

        {/* Center Dynamic Staged Narrative */}
        <div className="relative z-20 px-6 md:px-12 max-w-[1600px] mx-auto w-full my-auto pointer-events-none">
          {/* Stage 1: 18th-Century Bruges Carriage House */}
          <motion.div
            style={{ opacity: stage1Opacity, y: stage1Y }}
            className="max-w-4xl"
          >
            <div className="text-[12px] font-mono tracking-[0.25em] text-[#CCA65B] uppercase mb-4 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#CCA65B]" />
              ESTABLISHED 1780 • MEDIEVAL CANAL PRECINCT
            </div>
            <h1 className="font-['Cinzel_Decorative',serif] text-[40px] md:text-[76px] leading-[0.92] tracking-tight text-[#F5EFE6]">
              A romantic sanctuary in medieval Bruges.
            </h1>
            <p className="mt-6 text-[16px] md:text-[20px] text-[#8A959E] max-w-2xl font-light leading-relaxed font-['Cardo',serif]">
              An 18th-century carriage mansion tucked beside the tranquil Rozenhoedkaai canal. Decorated in the timeless country manor aesthetic of Ralph Lauren with genuine Louis XVI period antiques.
            </p>
          </motion.div>

          {/* Stage 2: Ralph Lauren Fabrics & Louis XVI Antiques */}
          <motion.div
            style={{ opacity: stage2Opacity, y: stage2Y }}
            className="max-w-3xl"
          >
            <div className="text-[12px] font-mono tracking-[0.25em] text-[#CCA65B] uppercase mb-4 flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-[#CCA65B]" />
              26 INTIMATE BESPOKE CHAMBERS
            </div>
            <h2 className="font-['Cinzel_Decorative',serif] text-[36px] md:text-[68px] leading-[0.92] text-[#F5EFE6]">
              Every room a collector's salon.
            </h2>
            <p className="mt-6 text-[16px] md:text-[19px] text-[#8A959E] font-light leading-relaxed font-['Cardo',serif]">
              Canopied four-poster beds draped in English chintz and Ralph Lauren wools, marble en-suite bathrooms, heated towel rails, and whispering grandfather clocks.
            </p>
          </motion.div>

          {/* Stage 3: Champagne Breakfast by Candlelight */}
          <motion.div
            style={{ opacity: stage3Opacity, y: stage3Y }}
            className="max-w-3xl"
          >
            <div className="text-[12px] font-mono tracking-[0.25em] text-[#CCA65B] uppercase mb-4 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#CCA65B]" />
              LEGENDARY FLEMISH HOSPITALITY
            </div>
            <h2 className="font-['Cinzel_Decorative',serif] text-[36px] md:text-[68px] leading-[0.92] text-[#F5EFE6]">
              Champagne under leaded stained glass.
            </h2>
            <p className="mt-6 text-[16px] md:text-[19px] text-[#8A959E] font-light leading-relaxed font-['Cardo',serif]">
              Full waiter-served breakfast prepared on an antique cast-iron AGA stove: freshly baked croissants, warm Belgian waffles, farm eggs cooked to order, and chilled vintage champagne.
            </p>
          </motion.div>

          {/* Stage 4: Reserve Your Canal-Side Sanctuary */}
          <motion.div
            style={{ opacity: stage4Opacity, y: stage4Y }}
            className="max-w-3xl pointer-events-auto"
          >
            <div className="text-[12px] font-mono tracking-[0.25em] text-[#CCA65B] uppercase mb-4">
              HISTORIC BRUGES SOJOURN
            </div>
            <h2 className="font-['Cinzel_Decorative',serif] text-[36px] md:text-[68px] leading-[0.92] text-[#F5EFE6]">
              Your keys await at The Pand.
            </h2>
            <p className="mt-6 text-[16px] md:text-[19px] text-[#8A959E] font-light leading-relaxed font-['Cardo',serif]">
              Step out into cobblestone lanes, private horse-drawn carriage tours, and historic Flemish art museums.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#CCA65B] text-[#10171E] font-bold text-[14px] uppercase tracking-wider transition-all duration-300 hover:bg-[#d8b56f] shadow-lg shadow-[#CCA65B]/25 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Reserve Chamber or Suite</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
              <a
                href="tel:+3250340666"
                className="px-6 py-4 rounded-xl border border-[#CCA65B]/30 text-[#F5EFE6] font-mono text-[13px] hover:bg-[#CCA65B]/10 transition-colors"
              >
                +32 50 34 06 66
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Status Ribbon */}
        <div className="relative z-20 pb-8 px-6 md:px-12 max-w-[1600px] mx-auto w-full flex justify-between items-end border-t border-[#CCA65B]/15 pt-4 text-[12px] font-mono text-[#8A959E]">
          <div className="flex items-center gap-6">
            <span className="text-[#CCA65B]">SMALL LUXURY HOTELS (SLH)</span>
            <span className="hidden md:inline">PANDREITJE 16 • BRUGES HISTORIC CITY CENTRE</span>
          </div>
          <div className="flex items-center gap-2">
            <span>SCROLL TO ENTER HOTEL</span>
            <span className="animate-bounce">↓</span>
          </div>
        </div>
      </div>
    </div>
  );
};
