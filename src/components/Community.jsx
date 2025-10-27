import { Star, Heart, Mail, Phone, MapPin } from 'lucide-react';

export default function Community() {
  const testimonials = [
    {
      name: 'Jaden M.',
      quote:
        "The hoodie is insanely soft and the fit is perfect. I've washed it countless times and it still looks brand new.",
    },
    {
      name: 'Ari M.',
      quote:
        'I love the minimal branding and the quality. The tee became my everyday staple the moment I put it on.',
    },
    {
      name: 'Sofia R.',
      quote:
        'Fast shipping and amazing packaging. You can tell a lot of thought went into the product experience.',
    },
  ];

  return (
    <div className="bg-neutral-50 border-t border-black/5">
      <section id="story" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Our story</h2>
            <p className="mt-4 text-neutral-700">
              We started with a simple belief: clothing should empower your everyday — not get in the way. What began as
              late-night sketches turned into small-batch drops, crafted with premium materials and mindful production.
            </p>
            <p className="mt-4 text-neutral-700">
              Today, our pieces live in wardrobes around the world. We keep it minimal so you can keep it yours.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-5 py-2 text-white text-sm">
              <Heart size={16} /> Made with care
            </div>
          </div>
          <div className="rounded-3xl bg-white p-2 shadow-xl border border-black/5">
            <div className="aspect-[16/10] w-full rounded-2xl bg-[radial-gradient(80%_80%_at_30%_30%,#111_0%,#333_50%,#111_100%)] relative overflow-hidden">
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(60%_60%_at_60%_40%,white_0%,transparent_60%)]" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="text-white/90 text-sm">Studio, AW Collection</div>
                <div className="flex items-center gap-1 text-yellow-400">
                  {[0,1,2,3,4].map((i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight">What people are saying</h2>
          <p className="mt-2 text-neutral-600">Real reviews from real humans.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl bg-white p-6 border border-black/5 shadow-sm">
              <div className="text-neutral-700">“{t.quote}”</div>
              <div className="mt-4 text-sm font-semibold">{t.name}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold tracking-tight">Get in touch</h3>
            <p className="mt-2 text-neutral-700">Questions about fit, shipping, or returns? We’re here to help.</p>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              <div className="rounded-xl border border-black/5 bg-white p-4">
                <div className="flex items-center gap-2 text-neutral-800"><Mail size={18} /> support@flareapparel.com</div>
              </div>
              <div className="rounded-xl border border-black/5 bg-white p-4">
                <div className="flex items-center gap-2 text-neutral-800"><Phone size={18} /> +1 (555) 123-4567</div>
              </div>
              <div className="rounded-xl border border-black/5 bg-white p-4">
                <div className="flex items-center gap-2 text-neutral-800"><MapPin size={18} /> Los Angeles, CA</div>
              </div>
            </div>
          </div>

          <form className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input required placeholder="First name" className="w-full rounded-md border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-black" />
              <input required placeholder="Last name" className="w-full rounded-md border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-black" />
            </div>
            <input type="email" required placeholder="Email address" className="w-full rounded-md border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-black" />
            <textarea required rows="4" placeholder="How can we help?" className="w-full rounded-md border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-black" />
            <button type="submit" className="inline-flex justify-center rounded-md bg-black px-4 py-2 text-white font-medium">Send message</button>
          </form>
        </div>
      </section>

      <footer className="border-t border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-neutral-600">© {new Date().getFullYear()} FLARE Apparel. All rights reserved.</div>
            <div className="flex items-center gap-6 text-sm">
              <a href="#features" className="text-neutral-700 hover:text-black">Features</a>
              <a href="#collections" className="text-neutral-700 hover:text-black">Collections</a>
              <a href="#contact" className="text-neutral-700 hover:text-black">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
