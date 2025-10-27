import { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#features', label: 'Features' },
    { href: '#collections', label: 'Collections' },
    { href: '#new', label: 'New Arrivals' },
    { href: '#story', label: 'Our Story' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold text-xl">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-black to-neutral-600 text-white shadow"> 
              <ShoppingBag size={18} />
            </span>
            <span className="tracking-tight">FLARE Apparel</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-neutral-700 hover:text-black transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#collections"
              className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white shadow hover:shadow-lg transition-shadow"
            >
              Shop Now
            </a>
          </div>

          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 bg-white"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 pt-2 grid gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm hover:bg-neutral-100"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#collections"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-black px-3 py-2 text-sm font-medium text-white"
            >
              Shop Now
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
