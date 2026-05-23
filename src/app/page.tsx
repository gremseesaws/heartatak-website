'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import HeroSlider from '@/components/HeroSlider';
import ArticleCard from '@/components/ArticleCard';
import IssueCard from '@/components/IssueCard';
import GalleryGrid from '@/components/GalleryGrid';
import Link from 'next/link';
import { magazine_issues, blog_articles, gallery_images, artists } from '@/data/content';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const latestIssue = magazine_issues[0];
  const featuredArticles = blog_articles.slice(0, 3);
  const featuredGallery = gallery_images.slice(0, 6);
  const featuredArtist = artists[0];

  return (
    <>
      {/* Hero Section */}
      <HeroSlider />

      {/* Featured Issue */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Latest Issue</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:col-span-1">
              <IssueCard issue={latestIssue} index={0} />
            </div>
            <div className="md:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">
                  {latestIssue.title}
                </h3>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  {latestIssue.description}
                </p>
                <div className="flex gap-4">
                  <button className="btn">Read Online</button>
                  <button className="btn-outline">Download PDF</button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Featured Articles */}
      <section className="section-container bg-gray-900/30">
        <h2 className="section-title">Featured Stories</h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredArticles.map((article, idx) => (
            <ArticleCard key={article.id} article={article} index={idx} />
          ))}
        </motion.div>
        <div className="mt-12 text-center">
          <Link href="/blog" className="btn">
            Explore All Stories
          </Link>
        </div>
      </section>

      {/* Featured Gallery */}
      <section className="section-container">
        <h2 className="section-title">Featured Photography</h2>
        <GalleryGrid images={featuredGallery} />
        <div className="mt-12 text-center">
          <Link href="/gallery" className="btn">
            View Gallery
          </Link>
        </div>
      </section>

      {/* Featured Artist */}
      <section className="section-container bg-gray-900/30">
        <h2 className="section-title">Featured Artist</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <img
              src={featuredArtist.image}
              alt={featuredArtist.name}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div>
            <div className="inline-block bg-red-600 px-4 py-2 rounded text-sm font-bold uppercase tracking-wider mb-4">
              Artist Spotlight
            </div>
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">
              {featuredArtist.name}
            </h3>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              {featuredArtist.bio}
            </p>
            <div className="mb-6">
              <p className="text-sm font-bold uppercase tracking-wider text-red-600 mb-2">
                Specialty
              </p>
              <p className="text-lg">{featuredArtist.specialty}</p>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-red-600 mb-2">
                Latest Release
              </p>
              <p className="text-lg mb-6">{featuredArtist.latestRelease}</p>
            </div>
            <Link href="/music" className="btn">
              Discover HEARTATAK Collective
            </Link>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-lg overflow-hidden bg-gradient-to-r from-red-600 to-red-800 p-12 md:p-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">
            Want to Contribute?
          </h2>
          <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
            HEARTATAK is always looking for fresh voices, stunning photography, and creative energy. Submit your work and become part of our community.
          </p>
          <Link href="/submit" className="inline-block bg-black hover:bg-gray-900 px-8 py-4 rounded font-bold uppercase tracking-wider transition-colors">
            Submit Your Work
          </Link>
        </motion.div>
      </section>
    </>
  );
}
