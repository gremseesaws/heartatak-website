'use client';

import { motion } from 'framer-motion';
import { Music, Radio, ExternalLink } from 'lucide-react';
import { artists } from '@/data/content';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function MusicPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-container text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex justify-center mb-4">
            <Radio className="w-12 h-12 text-red-600" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-4">
            HEARTATAK
            <span className="text-red-600"> Collective</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Underground music. Independent artists. Experimental sounds. This is where creativity lives.
          </p>
        </motion.div>
      </section>

      {/* Artists Grid */}
      <section className="section-container">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {artists.map((artist, idx) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-lg overflow-hidden bg-gray-900 hover:bg-gray-800 transition-all"
            >
              {/* Artist Image */}
              <div className="relative overflow-hidden h-64 md:h-72">
                <motion.img
                  src={artist.image}
                  alt={artist.name}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Artist Info */}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <Music size={16} className="text-red-600" />
                  <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                    {artist.specialty}
                  </span>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-3">
                  {artist.name}
                </h3>
                <p className="text-sm text-gray-300 mb-6 line-clamp-3">
                  {artist.bio}
                </p>

                {/* Latest Release */}
                <div className="mb-6 pb-6 border-b border-gray-700">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                    Latest Release
                  </p>
                  <p className="font-bold">{artist.latestRelease}</p>
                </div>

                {/* Streaming Links */}
                <div className="flex gap-3">
                  {Object.entries(artist.streaming).map(([platform, url]) => (
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

      {/* Submit Music CTA */}
      <section className="section-container bg-gray-900/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center rounded-lg overflow-hidden bg-gradient-to-r from-gray-800 to-gray-900 p-12 md:p-16"
        >
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">
            Are you an artist?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Submit your music to HEARTATAK Collective. We\'re always looking for fresh sounds and innovative artists.
          </p>
          <button className="btn">
            Submit Your Music
          </button>
        </motion.div>
      </section>
    </main>
  );
}
