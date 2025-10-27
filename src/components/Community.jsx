import { Star, Heart, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Community() {
  const testimonials = [
    {
      name: 'Jaden M.',
      quote:
        "The hoodie is insanely soft and the fit is perfect. I've washed it countless times and it still looks brand new.",
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop'
    },
    {
      name: 'Ari M.',
      quote:
        'I love the minimal branding and the quality. The tee became my everyday staple the moment I put it on.',
      avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop'
    },
    {
      name: 'Sofia R.',
      quote:
        'Fast shipping and amazing packaging. You can tell a lot of thought went into the product experience.',
      avatar: 'https://images.unsplash.com/photo-1541534401786-2077eed87a72?q=80&w=400&auto=format&fit=crop'
    },
  ];

  return (
    <div className="relative">
      {/* Story */}
      <section id="story" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Our story</h2>
            <p className="mt-4 text-neutral-300/90">
              We started with a simple belief: clothing should empower your everyday — not get in the way. What began as
              late-night sketches turned into small-batch drops, crafted with premium materials and mindful production.
            </p>
            <p className="mt-4 text-neutral-300/90">
              Today, our pieces live in wardrobes around the world. We keep it minimal so you can keep it yours.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-white text-sm border border-white/20 backdrop-blur">
              <Heart size={16} className="text-amber-300" /> Made with care
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden border border-white/10"
          >
            <img
              src="https://images.unsplash.com/photo-1520975922421-1f9b106ea907?q=80&w=1600&auto=format&fit=crop"
              alt="Studio"
              className="w-full h-full object-cover"
            />
            <div className="p-4 bg-gradient-to-r from-white/10 to-transparent backdrop-blur flex items-center justify-between">
              <div className="text-white/90 text-sm">Studio, AW Collection</div>
              <div className="flex items-center gap-1 text-amber-300">
                {[0,1,2,3,4].map((i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative py-16">
        <div className="absolute inset-0 -z-[1] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(124,45,18,0.25)_0%,transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight">What people are saying</h2>
            <p className="mt-2 text-neutral-300/80">Real reviews from real humans.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                whileHover={{ y: -6 }}
                className="rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-md"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                  <div className="text-sm font-semibold">{t.name}</div>
                </div>
                <div className="text-neutral-200/90">“{t.quote}”</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold tracking-tight">Get in touch</h3>
            <p className="mt-2 text-neutral-300/90">Questions about fit, shipping, or returns? We’re here to help.</p>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="flex items-center gap-2 text-neutral-100"><Mail size={18} className="text-amber-300" /> support@flareapparel.com</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="flex items-center gap-2 text-neutral-100"><Phone size={18} className="text-amber-300" /> +1 (555) 123-4567</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="flex items-center gap-2 text-neutral-100"><MapPin size={18} className="text-amber-300" /> Los Angeles, CA</div>
              </div>
            </div>
          </div>

          <form className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input required placeholder="First name" className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-white placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-amber-500/50" />
              <input required placeholder="Last name" className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-white placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-amber-500/50" />
            </div>
            <input type="email" required placeholder="Email address" className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-white placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-amber-500/50" />
            <textarea required rows="4" placeholder="How can we help?" className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-white placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-amber-500/50" />
            <button type="submit" className="inline-flex justify-center rounded-md bg-gradient-to-r from-amber-500 to-red-600 px-4 py-2 text-black font-medium hover:brightness-110">
              Send message
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black/40 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-neutral-300">© {new Date().getFullYear()} FLARE Apparel. All rights reserved.</div>
            <div className="flex items-center gap-6 text-sm">
              <a href="#features" className="text-neutral-300 hover:text-white">Features</a>
              <a href="#collections" className="text-neutral-300 hover:text-white">Collections</a>
              <a href="#contact" className="text-neutral-300 hover:text-white">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
