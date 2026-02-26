'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Music } from 'lucide-react';
import { siteConfig } from '@/content/data';
import { cn } from '@/lib/utils';

const LINKS = [
  { href: '/', label: 'Forside' },
  { href: '/#arrangementer', label: 'Arrangementer' },
];

const TOPBAR_MESSAGES = [
  'Gratis koncerter ved Grindsted Vandtårn',
  'Alle arrangementer er gratis',
  'Sommer 2026',
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [topbarIndex, setTopbarIndex] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setTopbarIndex((i) => (i + 1) % TOPBAR_MESSAGES.length), 5000);
    return () => clearInterval(t);
  }, []);

  const brandName = siteConfig?.brandName ?? 'Musik ved Vandtårnet';
  const topbarText = TOPBAR_MESSAGES[topbarIndex];

  return (
    <header
      className={cn(
        'w-full border-b transition-colors duration-200',
        'border-white/20 bg-background/90 backdrop-blur-sm',
        scrolled && 'bg-background border-white/20'
      )}
      role="banner"
    >
      <div className="bg-accent-red text-white">
        <div className="flex w-full items-center justify-center px-4 py-2 sm:px-6">
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={topbarIndex}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.35 }}
              className="text-[11px] font-condensed font-semibold uppercase tracking-wider sm:text-xs text-center"
            >
              {topbarText}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-[15px] font-condensed font-bold tracking-tight text-white uppercase transition-opacity hover:opacity-80"
        >
          <Music className="h-4 w-4 text-accent-yellow" aria-hidden />
          {brandName}
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link
            href="/#arrangementer"
            className="inline-flex items-center gap-2 rounded-lg bg-accent-yellow px-4 py-2 text-sm font-condensed font-semibold text-background uppercase transition-opacity hover:opacity-90"
          >
            Arrangementer
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Luk menu' : 'Åbn menu'}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            className="absolute left-0 right-0 top-full z-40 border-t border-white/20 bg-background md:hidden"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="py-4 px-4 space-y-0.5">
              {LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block py-2.5 text-sm font-medium text-white/80 hover:text-white"
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="mt-4 pt-4 border-t border-white/20">
                <Link
                  href="/#arrangementer"
                  className="flex items-center justify-center gap-2 rounded-lg bg-accent-yellow px-4 py-3 text-sm font-condensed font-semibold text-background uppercase hover:opacity-90"
                  onClick={() => setMenuOpen(false)}
                >
                  Arrangementer
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
