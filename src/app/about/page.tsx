'use client';

import { motion } from 'framer-motion';

const values = [
  { title: 'Authentic', description: 'Real stories from real people. No corporate speak.' },
  { title: 'Creative', description: 'Pushing boundaries and challenging the status quo.' },
  { title: 'Community', description: 'Supporting young creatives and lifting them up.' },
  { title: 'Bold', description: 'Taking risks and celebrating what makes us unique.' },
];

export default function AboutPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-container text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-4">
            About
            <span className="text-red-600"> HEARTATAK</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            A youth-led creative movement.
          </p>
        </motion.div>
      </section>

      {/* Mission */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
            HEARTATAK is a youth-led creative magazine focused on music, photography, fashion, art, and youth culture. We celebrate the voices, visions, and creativity of young people who are shaping culture today.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            We believe in spotlighting powerful visuals, authentic stories, and the raw creative energy that deserves attention. HEARTATAK isn't just a magazine—it's a movement. A community. A celebration of what happens when young creatives refuse to play by the rules.
          </p>
        </motion.div>
      </section>

      {/* Values */}
      <section className="section-container bg-gray-900/30">
        <h2 className="section-title text-center">Our Values</h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="rounded-lg bg-black p-8 border border-gray-800"
            >
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-red-600">
                {value.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Story */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">
            Our Story
          </h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              HEARTATAK started with a simple idea: young people have important things to say, and the world needs to hear them.
            </p>
            <p>
              Founded by a collective of high school creatives, HEARTATAK began as a passion project—a way to showcase underground music, stunning photography, boundary-pushing fashion, and authentic voices from the youth community.
            </p>
            <p>
              What started in bedrooms and coffee shops has grown into something bigger. We've featured emerging photographers, highlighted independent musicians, and given platform to the creatives who are too real for mainstream media.
            </p>
            <p>
              Today, HEARTATAK is still 100% youth-driven. Every issue, every story, every photograph is a testament to what young people can create when they're given the space and support to do what they love.
            </p>
            <p>
              This isn't corporate media. This is culture being created in real-time by the people who live it.
            </p>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-lg overflow-hidden bg-gradient-to-r from-red-600 to-red-800 p-12 md:p-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">
            Join The Movement
          </h2>
          <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
            Whether you're a photographer, musician, designer, or creative visionary—HEARTATAK is looking for you.
          </p>
          <button className="inline-block bg-black hover:bg-gray-900 px-8 py-4 rounded font-bold uppercase tracking-wider transition-colors">
            Submit Your Work
          </button>
        </motion.div>
      </section>
    </main>
  );
}
