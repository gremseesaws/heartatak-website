'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ArticleCardProps {
  article: {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
    author: string;
    publishDate: string;
  };
  index: number;
}

export default function ArticleCard({ article, index }: ArticleCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-lg bg-gray-900">
        {/* Image */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="relative h-48 md:h-64 overflow-hidden"
        >
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-block bg-red-600 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded">
              {article.category}
            </span>
          </div>
        </motion.div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-3 group-hover:text-red-600 transition-colors">
            {article.title}
          </h3>
          <p className="text-sm md:text-base text-gray-300 mb-4 line-clamp-2">
            {article.description}
          </p>
          <div className="flex items-center justify-between text-xs text-gray-400 uppercase tracking-wider">
            <span>{article.author}</span>
            <span>
              {new Date(article.publishDate).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
              })}
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
