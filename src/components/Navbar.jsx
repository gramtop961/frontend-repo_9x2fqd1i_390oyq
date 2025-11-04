import React, { useEffect, useState } from 'react';
import { Moon, Sun, Utensils } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    // Initialize theme
    const stored = localStorage.getItem('theme');
    if (stored) {
      setTheme(stored);
      if (stored === 'dark') document.documentElement.classList.add('dark');
      if (stored === 'light') document.documentElement.classList.remove('dark');
      return;
    }
    // System preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    if (next === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  };

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggle}
      className="inline-flex items-center justify-center rounded-full bg-black/5 dark:bg-white/10 p-2 hover:scale-105 active:scale-95 transition-transform"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-amber-400" />
      ) : (
        <Moon className="h-5 w-5 text-slate-800" />
      )}
    </button>
  );
};

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 to-transparent dark:from-black/50" />
      <nav className="relative backdrop-blur-xl bg-white/50 dark:bg-black/30 border-b border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <motion.a
              href="#home"
              className="flex items-center gap-2 font-semibold tracking-tight text-slate-900 dark:text-slate-100"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-rose-500 via-amber-400 to-emerald-400 text-white shadow-lg">
                <Utensils className="h-4 w-4" />
              </span>
              <span className="text-lg">Aurora Bistro</span>
            </motion.a>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="#menu" className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">Menu</a>
              <a href="#reserve" className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">Reservations</a>
              <a href="#contact" className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">Contact</a>
            </div>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <motion.a
                href="#reserve"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-rose-500 via-fuchsia-500 to-amber-400 text-white px-4 py-2 text-sm font-semibold shadow-lg shadow-rose-500/20 hover:shadow-rose-500/40 focus:outline-none focus:ring-2 focus:ring-rose-300"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                Book a Table
              </motion.a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
