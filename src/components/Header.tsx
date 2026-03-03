'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import LanguageSwitcher from './LanguageSwitcher';

interface NavItem {
  key: string;
  href: string;
  external?: boolean;
}

const navItems: NavItem[] = [
  { key: 'about', href: '/#about' },
  { key: 'courses', href: '/courses' },
  { key: 'showcase', href: '/courses#results' },
  { key: 'arranger', href: '/arranger/', external: true },
  { key: 'book', href: '/book' },
];

export default function Header() {
  const t = useTranslations('nav');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#c8d4b8]/95 shadow-md backdrop-blur-md'
          : 'bg-[#d6dfc8]/70 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-[50px] w-[50px] flex-shrink-0 overflow-hidden rounded-full shadow-md ring-2 ring-brand-green/30 transition group-hover:ring-brand-green/60">
            <Image
              src="/images/logo-transparent.png"
              alt="Ruby's Music Rainforest"
              fill
              className="object-cover"
              sizes="50px"
              priority
            />
          </div>
          <span className="hidden font-display text-lg font-bold text-brand-green-dark sm:inline-block lg:text-xl">
            Ruby&apos;s Music Rainforest
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.key}
                href={item.href}
                className="rounded-lg px-3 py-2 font-body text-sm font-semibold text-brand-black transition hover:bg-brand-green/10 hover:text-brand-green-dark lg:px-4 lg:text-base"
              >
                {t(item.key)}
              </a>
            ) : (
              <Link
                key={item.key}
                href={item.href}
                className="rounded-lg px-3 py-2 font-body text-sm font-semibold text-brand-black transition hover:bg-brand-green/10 hover:text-brand-green-dark lg:px-4 lg:text-base"
              >
                {t(item.key)}
              </Link>
            )
          )}
        </div>

        {/* Desktop Language Switcher */}
        <div className="hidden md:block">
          <LanguageSwitcher />
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg transition hover:bg-brand-green/10 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <div className="flex w-5 flex-col gap-[5px]">
            <span
              className={`block h-[2px] w-full rounded-full bg-brand-black transition-all duration-300 ${
                mobileOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-[2px] w-full rounded-full bg-brand-black transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-[2px] w-full rounded-full bg-brand-black transition-all duration-300 ${
                mobileOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed right-0 top-0 z-40 h-full w-72 transform bg-[#d6dfc8] shadow-xl transition-transform duration-300 md:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-2 px-6 pt-20">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 font-body text-base font-semibold text-brand-black transition hover:bg-brand-green/10 hover:text-brand-green-dark"
              >
                {t(item.key)}
              </a>
            ) : (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 font-body text-base font-semibold text-brand-black transition hover:bg-brand-green/10 hover:text-brand-green-dark"
              >
                {t(item.key)}
              </Link>
            )
          )}
          <div className="mt-4 border-t border-gray-100 pt-4">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
