import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-20 overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* subtle gradient veil to blend with brand colors */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_30%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.3)_60%,rgba(0,0,0,0.7)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center py-20">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-amber-200 shadow-sm backdrop-blur"
            >
              <Sparkles className="text-amber-300" size={16} /> New Drop Live Now
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
            >
              Crafted for the night. Born for the spotlight.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 text-neutral-200/80 text-lg"
            >
              Premium streetwear in a dark, modern palette with golden and red accents. Made to move, made to last.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <a href="#collections" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-red-600 px-6 py-3 text-black font-medium shadow hover:shadow-amber-500/20 hover:brightness-110 transition-all">
                Shop Collection <ArrowRight size={18} />
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 font-medium text-white/90 hover:bg-white/15 backdrop-blur">
                Explore Features
              </a>
            </motion.div>
          </div>

          {/* Right: Glass bento stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { k: 'Hoodies', v: 'Signature', c: 'from-amber-400/20 to-red-500/20' },
                { k: 'Tees', v: 'Classic', c: 'from-red-500/20 to-amber-400/20' },
                { k: 'Caps', v: 'Daily', c: 'from-amber-300/20 to-red-400/20' },
                { k: 'Joggers', v: 'Comfort', c: 'from-red-400/20 to-amber-300/20' },
                { k: 'Overshirts', v: 'Layer', c: 'from-amber-400/20 to-red-500/20' },
                { k: 'Socks', v: 'Essential', c: 'from-red-500/20 to-amber-400/20' },
              ].map((c, i) => (
                <motion.div
                  key={c.k}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className={`group relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br ${c.c} p-[1px]`}
                >
                  <div className="rounded-2xl bg-black/50 backdrop-blur-md p-4 h-full">
                    <div className="text-xs text-neutral-300/80">{c.v}</div>
                    <div className="text-sm font-semibold">{c.k}</div>
                    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
