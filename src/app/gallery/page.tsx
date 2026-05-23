'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import GalleryGrid from '@/components/GalleryGrid';
import { gallery_images } from '@/data/content';

const categories = ['All', 'Portraits', 'Street', 'Fashion', 'Creative Shoots', 'School Life', 'Behind The Scenes', 'Editorial'];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All'
    ? gallery_images
    : gallery_images.filter(image => image.category === activeCategory);

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-container text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-4">
            Visual
            <span className="text-red-600"> Stories</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            A collection of powerful imagery from our community of photographers and creatives.
          </p>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="section-container">
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              className={`px-6 py-3 rounded font-bold uppercase tracking-wider transition-all text-sm ${
                activeCategory === category
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="section-container">
        <GalleryGrid images={filteredImages} />
      </section>
    </main>
  );
}
