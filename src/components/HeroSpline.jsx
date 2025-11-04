import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const HeroSpline = () => {
  return (
    <section id="home" className="relative h-[92vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/80 dark:from-black/70 dark:via-black/10 dark:to-black/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            A vibrant, modern dining experience
          </motion.h1>
          <motion.p
            className="mt-4 text-lg sm:text-xl text-slate-700 dark:text-slate-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Savor seasonal plates, craft cocktails, and warm hospitality — all wrapped in playful color and delightful motion.
          </motion.p>

          <div className="mt-8 flex flex-wrap gap-4">
            <motion.a
              href="#menu"
              className="inline-flex items-center rounded-full bg-slate-900 text-white px-6 py-3 text-sm sm:text-base font-semibold shadow-lg hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore Menu
            </motion.a>
            <motion.a
              href="#reserve"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-rose-500 via-fuchsia-500 to-amber-400 text-white px-6 py-3 text-sm sm:text-base font-semibold shadow-lg shadow-rose-500/20 hover:shadow-rose-500/40 focus:outline-none focus:ring-2 focus:ring-rose-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Book a Table
            </motion.a>
          </div>
        </div>
      </div>

      {/* Decorative gradients */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[-16rem] h-[32rem] bg-[radial-gradient(ellipse_at_bottom,rgba(244,63,94,0.25),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_bottom,rgba(244,114,182,0.25),transparent_60%)]" />
    </section>
  );
};

export default HeroSpline;
