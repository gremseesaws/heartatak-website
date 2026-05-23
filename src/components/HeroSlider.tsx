'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&h=700&fit=crop",
    title: "Underground Culture",
  },
  {
    url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=700&fit=crop",
    title: "Creative Rebellion",
  },
  {
    url: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1200&h=700&fit=crop",
    title: "Youth Culture",
  },
  {
    url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=700&fit=crop",
    title: "Creative Minds",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % heroImages.length);
    setAutoPlay(false);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    setAutoPlay(false);
  };

  return (
    <div className="relative w-full h-screen mt-16 overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={heroImages[current].url}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Hero"
        />
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-4">
            <span className="text-red-600">HEART</span>
            <span className="text-white">ATAK</span>
          </h1>
          <p className="text-lg md:text-2xl font-bold uppercase tracking-widest text-gray-200">
            Youth. Culture. Creativity.
          </p>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-8 left-8 right-8 z-20 flex justify-between items-end">
        <div className="flex gap-4">
          <button
            onClick={prev}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all backdrop-blur-sm"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all backdrop-blur-sm"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex gap-2">
          {heroImages.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => {
                setCurrent(idx);
                setAutoPlay(false);
              }}
              className={`h-2 rounded-full transition-all ${
                idx === current ? "w-8 bg-red-600" : "w-2 bg-white/40"
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
