'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { creators } from '@/data/content';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function CreatorsPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-container text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-4">
            Featured
            <span className="text-red-600"> Creators</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Meet the brilliant minds shaping youth culture. Photographers, designers, writers, and visionaries.
          </p>
        </motion.div>
      </section>

      {/* Creators Grid */}
      <section className="section-container">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {creators.map((creator, idx) => (
            <motion.div
              key={creator.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-lg overflow-hidden bg-gray-900 hover:bg-gray-800 transition-all"
            >
              {/* Creator Image */}
              <div className="relative overflow-hidden h-64 md:h-72">
                <motion.img
                  src={creator.image}
                  alt={creator.name}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Creator Info */}
              <div className="p-6 md:p-8">
                <div className="inline-block bg-red-600 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-3">
                  {creator.specialty}
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-3">
                  {creator.name}
                </h3>
                <p className="text-sm text-gray-300 mb-6 line-clamp-3">
                  {creator.bio}
                </p>

                {/* Featured Work */}
                <div className="mb-6 pb-6 border-b border-gray-700">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                    Featured Work
                  </p>
                  <p className="font-bold">{creator.featuredWork}</p>
                </div>

                {/* Social Links */}
                <div className="flex gap-3">
                  {Object.entries(creator.social).map(([platform, url]) => (
                    <motion.a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="text-xs font-bold uppercase tracking-wider px-3 py-2 rounded border border-gray-700 hover:border-red-600 hover:text-red-600 transition-colors flex items-center gap-1"
                    >
                      {platform}
                      <ExternalLink size={12} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
