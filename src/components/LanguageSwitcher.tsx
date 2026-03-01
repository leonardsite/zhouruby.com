'use client';

import { useState, useRef, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname, locales, localeNames, type Locale } from '@/i18n/routing';

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function switchLocale(nextLocale: Locale) {
    setOpen(false);
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-lg border border-brand-green/40 bg-white/80 px-3 py-1.5 text-sm font-body font-semibold text-brand-black transition hover:border-brand-green hover:bg-brand-green/10"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <svg
          className="h-4 w-4 text-brand-green-dark"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <circle cx={12} cy={12} r={10} />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" />
        </svg>
        <span>{localeNames[locale]}</span>
        <svg
          className={`h-3 w-3 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-1 min-w-[10rem] overflow-hidden rounded-lg border border-brand-green/20 bg-white py-1 shadow-lg"
        >
          {locales.map((loc) => (
            <li key={loc}>
              <button
                role="option"
                aria-selected={loc === locale}
                onClick={() => switchLocale(loc)}
                className={`flex w-full items-center px-4 py-2 text-sm font-body transition hover:bg-brand-green/10 ${
                  loc === locale
                    ? 'bg-brand-green/15 font-semibold text-brand-green-dark'
                    : 'text-brand-black'
                }`}
              >
                {localeNames[loc]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
