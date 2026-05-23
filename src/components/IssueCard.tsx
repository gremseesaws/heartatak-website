'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface IssueCardProps {
  issue: {
    id: number;
    number: string;
    title: string;
    description: string;
    image: string;
    publishDate: string;
  };
  index: number;
}

export default function IssueCard({ issue, index }: IssueCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-lg bg-gray-900">
        {/* Magazine Cover Image */}
        <motion.img
          src={issue.image}
          alt={issue.title}
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.4 }}
          className="w-full aspect-[3/4] object-cover"
        />

        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/60 flex flex-col justify-between p-6"
        >
          {/* Issue Badge */}
          <div className="text-left">
            <div className="inline-block bg-red-600 px-4 py-2 rounded text-sm font-bold uppercase tracking-wider">
              Issue #{issue.number}
            </div>
          </div>

          {/* Content */}
          <div className="text-left">
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-2">
              {issue.title}
            </h3>
            <p className="text-sm font-light opacity-90 mb-4">
              {issue.description}
            </p>
            <div className="flex gap-2 flex-col sm:flex-row">
              <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded font-bold uppercase text-sm tracking-wider transition-colors">
                Read Online
              </button>
              <button className="border border-white hover:bg-white hover:text-black px-4 py-2 rounded font-bold uppercase text-sm tracking-wider transition-colors">
                Download PDF
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Info Below Image */}
      <div className="mt-4 space-y-2">
        <h3 className="text-xl font-black uppercase tracking-tight">
          {issue.title}
        </h3>
        <p className="text-sm text-gray-400">
          {new Date(issue.publishDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </div>
    </motion.div>
  );
}
