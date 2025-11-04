import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const ReservationSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section id="reserve" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h3
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Reserve your table
            </motion.h3>
            <motion.p
              className="mt-3 text-slate-600 dark:text-slate-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Plan a delightful evening with friends, family, or someone special. We’ll save you the best seats.
            </motion.p>

            <div className="mt-6 rounded-2xl bg-gradient-to-br from-rose-500/10 via-fuchsia-500/10 to-amber-400/10 p-6 border border-black/5 dark:border-white/10">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500 text-white shadow"> <Calendar className="h-5 w-5" /> </span>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Peak hours fill fast. Book ahead to lock your preferred time.
                </p>
              </div>
            </div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl p-6 border border-black/5 dark:border-white/10 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            aria-label="Reservation form"
          >
            {!submitted ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Full name</label>
                  <input required type="text" className="mt-1 w-full rounded-xl border border-slate-300/60 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-rose-300" placeholder="Alex Morgan" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Date</label>
                  <input required type="date" className="mt-1 w-full rounded-xl border border-slate-300/60 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-rose-300" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Time</label>
                  <input required type="time" className="mt-1 w-full rounded-xl border border-slate-300/60 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-rose-300" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Guests</label>
                  <select required className="mt-1 w-full rounded-xl border border-slate-300/60 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-rose-300">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <option key={i} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Phone</label>
                  <input required type="tel" className="mt-1 w-full rounded-xl border border-slate-300/60 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-rose-300" placeholder="(555) 000-1234" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Email</label>
                  <input required type="email" className="mt-1 w-full rounded-xl border border-slate-300/60 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-rose-300" placeholder="you@example.com" />
                </div>

                <div className="sm:col-span-2 flex items-center justify-between pt-2">
                  <p className="text-xs text-slate-500 dark:text-slate-400">We’ll send a confirmation and reminders.</p>
                  <motion.button
                    type="submit"
                    className="inline-flex items-center rounded-full bg-gradient-to-r from-rose-500 via-fuchsia-500 to-amber-400 text-white px-6 py-3 text-sm font-semibold shadow-lg shadow-rose-500/20 hover:shadow-rose-500/40 focus:outline-none focus:ring-2 focus:ring-rose-300"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    disabled={loading}
                  >
                    {loading ? 'Booking…' : 'Reserve now'}
                  </motion.button>
                </div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Reservation confirmed!</h4>
                <p className="mt-2 text-slate-600 dark:text-slate-300">We’ve sent details to your inbox. We can’t wait to host you.</p>
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
