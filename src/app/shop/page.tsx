'use client';

import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { shop_products } from '@/data/content';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ShopPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-container text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-4">
            HEARTATAK
            <span className="text-red-600"> Shop</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Collect limited edition magazines, apparel, art prints, and exclusive merchandise.
          </p>
        </motion.div>
      </section>

      {/* Products Grid */}
      <section className="section-container">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {shop_products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-lg overflow-hidden bg-gray-900 hover:bg-gray-800 transition-all"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden h-72">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover"
                />
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <span className="text-xl font-black uppercase tracking-wider">Sold Out</span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                    {product.category}
                  </span>
                  <span className="text-xl font-black">${product.price}</span>
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-3">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-300 mb-6 line-clamp-2">
                  {product.description}
                </p>

                {/* Sizes */}
                {product.sizes && (
                  <div className="mb-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                      Sizes
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {product.sizes.map((size) => (
                        <button
                          key={size}
                          className="px-3 py-1 rounded text-xs font-bold uppercase tracking-wider border border-gray-700 hover:border-red-600 hover:text-red-600 transition-colors"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Add to Cart */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={!product.inStock}
                  className="w-full btn flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ShoppingCart size={18} />
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))}
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
            Limited Edition Items
          </h2>
          <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
            Each product is a piece of HEARTATAK culture. Limited quantities. Premium quality. Exclusive designs.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
