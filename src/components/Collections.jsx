import { Star, ShieldCheck, Leaf, Truck, ArrowRight } from 'lucide-react';

export default function Collections() {
  const features = [
    { icon: <Star className="text-yellow-500" />, title: 'Premium Quality', desc: 'Crafted with heavyweight cotton blends for lasting comfort.' },
    { icon: <ShieldCheck className="text-green-600" />, title: 'Ethically Made', desc: 'Responsible production and fair labor practices.' },
    { icon: <Leaf className="text-emerald-600" />, title: 'Eco Conscious', desc: 'Sustainable dyes and reduced water usage.' },
    { icon: <Truck className="text-blue-600" />, title: 'Fast Shipping', desc: 'Worldwide delivery with tracking and free returns.' },
  ];

  const collection = [
    { name: 'Monochrome Hoodie', tag: 'Bestseller' },
    { name: 'Essential Tee', tag: 'Classic' },
    { name: 'Everyday Joggers', tag: 'Comfort' },
    { name: 'City Cap', tag: 'New' },
    { name: 'Overshirt', tag: 'Layer' },
    { name: 'Crew Socks', tag: 'Daily' },
  ];

  const newArrivals = [
    { name: 'Ripple Hoodie', badge: 'New Drop' },
    { name: 'Wave Tee', badge: 'Fresh' },
    { name: 'Grid Cap', badge: 'Limited' },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <section id="features" className="py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Why you'll love us</h2>
          <p className="mt-3 text-neutral-600">Everything you wear should feel as good as it looks.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm hover:shadow transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-neutral-100 flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <div className="font-semibold">{f.title}</div>
              <div className="mt-1 text-sm text-neutral-600">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="collections" className="py-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Featured Collection</h2>
            <p className="text-neutral-600">Core pieces to anchor your wardrobe.</p>
          </div>
          <a href="#new" className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-black">
            View new arrivals <ArrowRight size={16} />
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collection.map((item, i) => (
            <div key={item.name} className="group relative overflow-hidden rounded-2xl border border-black/5 bg-gradient-to-br from-neutral-50 to-white p-4 shadow-sm">
              <div className="aspect-[4/5] rounded-xl bg-[linear-gradient(120deg,#111,40%,#333)] relative">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(60%_60%_at_40%_30%,white_0%,transparent_50%)]" />
                <span className="absolute left-3 top-3 text-[10px] uppercase tracking-wide rounded-full bg-white/90 px-2 py-1 text-neutral-700 border border-black/5">
                  {item.tag}
                </span>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="font-semibold">{item.name}</div>
                <button className="text-sm text-neutral-600 group-hover:text-black">Add</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="new" className="py-16">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">New Arrivals</h2>
            <p className="text-neutral-600">Fresh styles, limited quantities.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-black">
            Need sizing help? <ArrowRight size={16} />
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {newArrivals.map((item) => (
            <div key={item.name} className="overflow-hidden rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
              <div className="aspect-[4/5] rounded-xl bg-[radial-gradient(80%_80%_at_50%_0%,#222_0%,#111_60%,#222_100%)] relative">
                <span className="absolute left-3 top-3 text-[10px] uppercase tracking-wide rounded-full bg-white/90 px-2 py-1 text-neutral-700 border border-black/5">
                  {item.badge}
                </span>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="font-semibold">{item.name}</div>
                <button className="text-sm text-neutral-600 hover:text-black">View</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
