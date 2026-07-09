'use client';

import { useState } from 'react';
import { navItems, sitePath } from '@/lib/navigation';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-black/85 backdrop-blur">
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <a className="font-display text-xl tracking-wide" href={sitePath('/')} onClick={() => setIsMenuOpen(false)}>
          BINFACE YOUR PLACE
        </a>

        <div className="hidden gap-3 text-sm font-bold md:flex">
          {navItems.map((n) => (
            <a key={n.href} href={sitePath(n.href)} className="whitespace-nowrap text-silver hover:text-white">
              {n.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded border border-white/15 text-silver hover:border-bin hover:text-white md:hidden"
          aria-label="Toggle navigation menu"
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5" aria-hidden="true">
            <span className="block h-0.5 w-5 rounded bg-current" />
            <span className="block h-0.5 w-5 rounded bg-current" />
            <span className="block h-0.5 w-5 rounded bg-current" />
          </span>
        </button>

        {isMenuOpen && (
          <div
            id="mobile-navigation"
            className="absolute right-4 top-full mt-2 w-56 rounded border border-white/15 bg-black/95 p-2 shadow-glow md:hidden"
          >
            {navItems.map((n) => (
              <a
                key={n.href}
                href={sitePath(n.href)}
                className="block rounded px-3 py-2 text-sm font-bold text-silver hover:bg-white/10 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {n.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
