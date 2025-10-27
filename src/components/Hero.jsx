import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(0,0,0,0.08),transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-700 shadow-sm"
            >
              <Sparkles className="text-yellow-500" size={16} /> New Drop Live Now
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
            >
              Streetwear that speaks your vibe
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 text-neutral-600 text-lg"
            >
              Premium fabrics. Minimal silhouettes. Designed for everyday movement and self-expression.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <a href="#collections" className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-white font-medium shadow hover:shadow-lg transition-shadow">
                Shop Collection <ArrowRight size={18} />
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-6 py-3 font-medium text-neutral-800 hover:bg-neutral-50">
                Explore Features
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/5] w-full rounded-3xl bg-gradient-to-br from-neutral-100 via-neutral-50 to-white p-2 shadow-xl">
              <div className="h-full w-full rounded-2xl bg-[conic-gradient(at_70%_30%,#111_0deg,#222_120deg,#111_240deg,#222_360deg)] relative overflow-hidden">
                <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_60%)]" />
                <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
                  {["Hoodies","Tees","Caps"].map((t, i) => (
                    <div key={t} className="rounded-xl bg-white/90 backdrop-blur p-3 text-center shadow border border-black/5">
                      <div className="text-xs text-neutral-500">{['Signature','Classic','Daily'][i]} </div>
                      <div className="text-sm font-semibold">{t}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
