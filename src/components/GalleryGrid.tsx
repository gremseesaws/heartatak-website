'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';

interface Image {
  id: number;
  title: string;
  category: string;
  image: string;
  photographer: string;
  year: number;
}

interface GalleryGridProps {
  images: Image[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  return (
    <>
      {/* Masonry Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((image, idx) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            viewport={{ once: true }}
            onClick={() => setSelectedImage(image)}
            className="group cursor-pointer break-inside-avoid rounded-lg overflow-hidden bg-gray-900 hover:shadow-2xl transition-all"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <img
                src={image.image}
                alt={image.title}
                className="w-full h-auto object-cover"
              />
            </motion.div>
            {/* Info Overlay */}
            <div className="p-4 bg-black/80 backdrop-blur-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-red-600 mb-2">
                {image.category}
              </p>
              <h3 className="text-sm font-black uppercase tracking-tight mb-1">
                {image.title}
              </h3>
              <p className="text-xs text-gray-400">© {image.photographer}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg"
              />
              {/* Info */}
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-black uppercase tracking-tight mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-300">
                  © {selectedImage.photographer} ({selectedImage.year})
                </p>
              </div>
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={32} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
