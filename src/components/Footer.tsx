'use client';

import { motion } from 'framer-motion';
import { Instagram, Twitter, Mail } from 'lucide-react';
import Link from 'next/link';

const footerLinks = [
  { section: 'Explore', links: [{ name: 'Issues', href: '/issues' }, { name: 'Blog', href: '/blog' }, { name: 'Gallery', href: '/gallery' }] },
  { section: 'Creator', links: [{ name: 'Music', href: '/music' }, { name: 'Creators', href: '/creators' }, { name: 'Submit', href: '/submit' }] },
  { section: 'Shop', links: [{ name: 'Shop', href: '/shop' }, { name: 'About', href: '/about' }, { name: 'Contact', href: '/contact' }] },
];

const socials = [
  { icon: Instagram, href: 'https://instagram.com' },
  { icon: Twitter, href: 'https://twitter.com' },
  { icon: Mail, href: 'mailto:hello@heartatak.com' },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Brand Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 pb-16 border-b border-gray-800"
        >
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">
            <span className="text-red-600">HEART</span>
            <span className="text-white">ATAK</span>
          </h2>
          <p className="text-gray-300 max-w-xl leading-relaxed">
            A youth-led creative magazine focused on music, photography, fashion, art, and youth culture. We spotlight young creators, powerful visuals, and stories that deserve attention.
          </p>
        </motion.div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {footerLinks.map((section) => (
            <motion.div
              key={section.section}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-black uppercase tracking-wider mb-4 text-red-600">
                {section.section}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors font-light"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Copyright */}
          <p className="text-xs text-gray-500 font-light">
            © 2024 HEARTATAK. Youth. Culture. Creativity.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            {socials.map((social, idx) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: '#ef4444' }}
                  className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
