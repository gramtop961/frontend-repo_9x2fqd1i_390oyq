import React from 'react';
import Navbar from './components/Navbar';
import HeroSpline from './components/HeroSpline';
import MenuShowcase from './components/MenuShowcase';
import ReservationSection from './components/ReservationSection';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-amber-200 selection:text-slate-900 dark:bg-[#0B0B0F] dark:text-slate-100">
      <Navbar />
      <HeroSpline />
      <MenuShowcase />
      <ReservationSection />

      <footer id="contact" className="relative border-t border-black/5 dark:border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <h5 className="text-lg font-semibold">Aurora Bistro</h5>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">123 Colorway Ave, Suite 5 • Open daily 11am – 11pm</p>
            </div>
            <div>
              <h6 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Contact</h6>
              <p className="mt-2 text-sm">reservations@aurorabistro.com</p>
              <p className="text-sm">(555) 000-1234</p>
            </div>
            <div>
              <h6 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Follow</h6>
              <div className="mt-2 flex gap-3 text-sm">
                <a href="#" className="hover:underline">Instagram</a>
                <a href="#" className="hover:underline">TikTok</a>
                <a href="#" className="hover:underline">Facebook</a>
              </div>
            </div>
          </div>
          <motion.p
            className="mt-8 text-xs text-slate-500 dark:text-slate-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} Aurora Bistro. All rights reserved.
          </motion.p>
        </div>
      </footer>
    </div>
  );
}

export default App;
