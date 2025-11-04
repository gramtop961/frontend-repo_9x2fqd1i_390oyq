import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const sampleMenu = [
  {
    id: 's1',
    name: 'Citrus Burrata',
    price: 14,
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
    category: 'Starters',
    desc: 'Creamy burrata, charred citrus, basil oil, pistachio dukkah.'
  },
  {
    id: 's2',
    name: 'Smoked Carrot Tartare',
    price: 12,
    img: 'https://images.unsplash.com/photo-1544025163-30f6f4d49b98?q=80&w=1200&auto=format&fit=crop',
    category: 'Starters',
    desc: 'Hand-chopped carrots, capers, dijon, toasted sourdough.'
  },
  {
    id: 'm1',
    name: 'Miso Glazed Salmon',
    price: 28,
    img: 'https://images.unsplash.com/photo-1617195737496-7e0a4c5a5be0?q=80&w=1200&auto=format&fit=crop',
    category: 'Mains',
    desc: 'Sesame rice, baby bok choy, yuzu beurre blanc.'
  },
  {
    id: 'm2',
    name: 'Truffle Mushroom Pasta',
    price: 24,
    img: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?q=80&w=1200&auto=format&fit=crop',
    category: 'Mains',
    desc: 'Tagliatelle, wild mushrooms, black truffle, pecorino.'
  },
  {
    id: 'd1',
    name: 'Chocolate Nemesis',
    price: 10,
    img: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1200&auto=format&fit=crop',
    category: 'Desserts',
    desc: 'Flourless chocolate cake, whipped crème fraîche, sea salt.'
  },
  {
    id: 'dr1',
    name: 'Ruby Spritz',
    price: 11,
    img: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef1?q=80&w=1200&auto=format&fit=crop',
    category: 'Drinks',
    desc: 'Grapefruit, aperitif, prosecco, rosemary.'
  }
];

const categories = ['Starters', 'Mains', 'Desserts', 'Drinks'];

const MenuCard = ({ item }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-black/5 dark:border-white/10 shadow-md hover:shadow-xl"
    >
      <div className="h-44 w-full overflow-hidden">
        <img
          src={item.img}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.name}</h3>
          <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-600 dark:text-emerald-300">${item.price}</span>
        </div>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.desc}</p>
        <div className="mt-3 flex items-center gap-1 text-amber-500">
          <Star className="h-4 w-4 fill-current" />
          <Star className="h-4 w-4 fill-current" />
          <Star className="h-4 w-4 fill-current" />
          <Star className="h-4 w-4" />
          <Star className="h-4 w-4" />
        </div>
      </div>
    </motion.div>
  );
};

const MenuShowcase = () => {
  const [active, setActive] = useState('Mains');

  const filtered = useMemo(
    () => sampleMenu.filter((m) => m.category === active),
    [active]
  );

  return (
    <section id="menu" className="relative py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent dark:via-white/20" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Menu Highlights
          </motion.h2>
          <motion.p
            className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Vibrant flavors, seasonal ingredients, and playful plating that sparks joy.
          </motion.p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                  active === cat
                    ? 'bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-900 dark:border-white'
                    : 'bg-white/70 dark:bg-white/5 text-slate-700 dark:text-slate-200 border-slate-300/60 dark:border-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuShowcase;
