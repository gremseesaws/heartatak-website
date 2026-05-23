'use client';

import { motion } from 'framer-motion';
import { submission_categories } from '@/data/content';
import { useState } from 'react';

export default function SubmitPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    description: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', category: '', description: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-container text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-4">
            Submit Your
            <span className="text-red-600"> Work</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Got something amazing? We want to see it. Submit your photography, music, writing, art, or creative projects.
          </p>
        </motion.div>
      </section>

      {/* Submission Form */}
      <section className="section-container max-w-2xl">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="space-y-8 bg-gray-900/50 p-8 md:p-12 rounded-lg border border-gray-800"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider mb-3">
              Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-black border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-colors"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider mb-3">
              Email or Instagram *
            </label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-black border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-colors"
              placeholder="your.email@example.com or @instagram"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider mb-3">
              Category *
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full bg-black border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
            >
              <option value="">Select a category</option>
              {submission_categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider mb-3">
              Tell us about your work *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={5}
              className="w-full bg-black border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-colors resize-none"
              placeholder="Describe your work, your inspiration, and why HEARTATAK should feature it..."
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full btn text-center"
          >
            {submitted ? '✓ Submitted! Thanks!' : 'Submit Your Work'}
          </motion.button>

          {submitted && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-500 text-center font-bold uppercase tracking-wider"
            >
              We got your submission! We will review it and be in touch.
            </motion.p>
          )}
        </motion.form>
      </section>

      {/* Info Section */}
      <section className="section-container bg-gray-900/30 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-black uppercase tracking-tight mb-6">
            What We Are Looking For
          </h2>
          <ul className="space-y-4 text-gray-300">
            <li className="flex gap-4">
              <span className="text-red-600 font-black">•</span>
              <span><strong>Authentic.</strong> Real work from real people. No corporate vibes.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-red-600 font-black">•</span>
              <span><strong>Creative.</strong> Boundary-pushing, experimental, bold.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-red-600 font-black">•</span>
              <span><strong>Youth-driven.</strong> Created by and for young creatives.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-red-600 font-black">•</span>
              <span><strong>High quality.</strong> Whether it is photography, music, or writing—bring your best.</span>
            </li>
          </ul>
        </motion.div>
      </section>
    </main>
  );
}
