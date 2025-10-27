import { Star, ShieldCheck, Leaf, Truck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Collections() {
  const features = [
    { icon: <Star className="text-amber-400" />, title: 'Premium Quality', desc: 'Heavyweight blends, durable stitching, buttery-soft feel.' },
    { icon: <ShieldCheck className="text-red-500" />, title: 'Ethically Made', desc: 'Responsible production with fair labor practices.' },
    { icon: <Leaf className="text-emerald-400" />, title: 'Eco Conscious', desc: 'Low-impact dyes and reduced water usage.' },
    { icon: <Truck className="text-orange-400" />, title: 'Fast Shipping', desc: 'Worldwide delivery, free returns, track every step.' },
  ];

  const collection = [
    { name: 'Monochrome Hoodie', tag: 'Bestseller', img: 'https://images.unsplash.com/photo-1520975954732-35dd222996f2?q=80&w=1400&auto=format&fit=crop' },
    { name: 'Essential Tee', tag: 'Classic', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1400&auto=format&fit=crop' },
    { name: 'Everyday Joggers', tag: 'Comfort', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop' },
    { name: 'City Cap', tag: 'New', img: 'https://images.unsplash.com/photo-1534213432758-5a6a1dc7e2cc?q=80&w=1400&auto=format&fit=crop' },
    { name: 'Overshirt', tag: 'Layer', img: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1400&auto=format&fit=crop' },
    { name: 'Crew Socks', tag: 'Daily', img: 'https://images.unsplash.com/photo-1561344640-2453889cde5b?q=80&w=1400&auto=format&fit=crop' },
  ];

  const newArrivals = [
    { name: 'Ripple Hoodie', badge: 'New Drop', img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1400&auto=format&fit=crop' },
    { name: 'Wave Tee', badge: 'Fresh', img: 'https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?q=80&w=1400&auto=format&fit=crop' },
    { name: 'Grid Cap', badge: 'Limited', img: 'https://images.unsplash.com/photo-1548883354-94bb14774305?q=80&w=1400&auto=format&fit=crop' },
  ];

  return (
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Features - glass cards */}
      <section id="features" className="py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Why you'll love us</h2>
          <p className="mt-3 text-neutral-300/80">Every piece is engineered for feel, form, and function.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <motion.div
              key={f.title}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur-md"
            >
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-amber-400/20 to-red-500/20 flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <div className="font-semibold">{f.title}</div>
              <div className="mt-1 text-sm text-neutral-300/80">{f.desc}</div>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bento Collection */}
      <section id="collections" className="py-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Featured Collection</h2>
            <p className="text-neutral-300/80">Core pieces to anchor your wardrobe.</p>
          </div>
          <a href="#new" className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-amber-300 hover:text-white">
            View new arrivals <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 grid-rows-2 gap-6 auto-rows-[220px]">
          {/* Large feature tile */}
          <motion.a
            href="#new"
            whileHover={{ scale: 1.02 }}
            className="relative col-span-2 row-span-2 overflow-hidden rounded-3xl border border-white/10"
          >
            <img src="https://images.unsplash.com/photo-1643780125338-b2eb465e9aa5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGZWF0dXJlfGVufDB8MHx8fDE3NjE1NTg1Njh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Feature" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <div>
                <div className="text-amber-300 text-xs">Limited Series</div>
                <div className="text-xl font-semibold">Nightfall Hoodie</div>
              </div>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur border border-white/20">Shop</span>
            </div>
          </motion.a>

          {/* Grid items */}
          {collection.slice(0,4).map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
            >
              <img src={item.img} alt={item.name} className="h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <span className="absolute left-3 top-3 text-[10px] uppercase tracking-wide rounded-full bg-white/10 px-2 py-1 text-amber-200 border border-white/20 backdrop-blur">{item.tag}</span>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <div className="font-semibold text-sm">{item.name}</div>
                <button className="text-xs text-neutral-200 group-hover:text-white">Add</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section id="new" className="py-16">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">New Arrivals</h2>
            <p className="text-neutral-300/80">Fresh styles, limited quantities.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-amber-300 hover:text-white">
            Need sizing help? <ArrowRight size={16} />
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {newArrivals.map((item) => (
            <motion.div key={item.name} whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
              <div className="relative">
                <img src={item.img} alt={item.name} className="aspect-[4/5] w-full object-cover" />
                <span className="absolute left-3 top-3 text-[10px] uppercase tracking-wide rounded-full bg-white/10 px-2 py-1 text-amber-200 border border-white/20 backdrop-blur">
                  {item.badge}
                </span>
              </div>
              <div className="p-4 flex items-center justify-between">
                <div className="font-semibold">{item.name}</div>
                <button className="text-sm text-neutral-300 hover:text-white">View</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
