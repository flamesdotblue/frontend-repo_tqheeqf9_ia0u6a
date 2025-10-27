import { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#features', label: 'Features' },
    { href: '#collections', label: 'Collections' },
    { href: '#new', label: 'New' },
    { href: '#story', label: 'Story' },
    { href: '#testimonials', label: 'Reviews' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl supports-[backdrop-filter]:bg-black/30 bg-black/40 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="group flex items-center gap-2 font-semibold text-lg">
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-red-600 via-orange-500 to-amber-400 text-white shadow">
              <ShoppingBag size={18} />
            </span>
            <span className="tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-orange-200 to-red-300">FLARE Apparel</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-neutral-200/80 hover:text-white transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r from-amber-400 to-red-500 hover:after:w-full after:transition-all"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#collections"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-red-600 px-4 py-2 text-sm font-medium text-black shadow-[0_0_0_1px_rgba(255,255,255,0.15)] hover:brightness-110 active:brightness-95"
            >
              Shop Now
            </a>
          </div>

          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white"
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
                className="rounded-md px-3 py-2 text-sm text-neutral-200 hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#collections"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-amber-500 to-red-600 px-3 py-2 text-sm font-medium text-black"
            >
              Shop Now
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
