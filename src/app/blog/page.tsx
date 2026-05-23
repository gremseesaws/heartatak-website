'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import ArticleCard from '@/components/ArticleCard';
import { blog_articles } from '@/data/content';

const categories = ['All', 'Music', 'Fashion', 'Photography', 'Culture', 'Interviews', 'Creative Spotlights'];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredArticles = activeCategory === 'All'
    ? blog_articles
    : blog_articles.filter(article => article.category === activeCategory);

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-container text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-4">
            Stories &
            <span className="text-red-600"> Insights</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Deep dives into music, fashion, photography, and youth culture.
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
              className={`px-6 py-3 rounded font-bold uppercase tracking-wider transition-all ${
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

      {/* Articles Grid */}
      <section className="section-container">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredArticles.map((article, idx) => (
            <ArticleCard key={article.id} article={article} index={idx} />
          ))}
        </motion.div>
      </section>
    </main>
  );
}
