'use client';

import { motion } from 'framer-motion';
import IssueCard from '@/components/IssueCard';
import { magazine_issues } from '@/data/content';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function IssuesPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-container text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-4">
            Magazine<br />
            <span className="text-red-600">Issues</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Every issue is a collectible. Each one tells a story. Explore our archive of creative expressions.
          </p>
        </motion.div>
      </section>

      {/* Issues Grid */}
      <section className="section-container">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {magazine_issues.map((issue, idx) => (
            <IssueCard key={issue.id} issue={issue} index={idx} />
          ))}
        </motion.div>
      </section>
    </main>
  );
}
