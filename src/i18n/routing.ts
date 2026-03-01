import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const locales = ['zh', 'en', 'ta', 'ms', 'ja'] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  zh: '中文',
  en: 'English',
  ta: 'தமிழ்',
  ms: 'Bahasa Melayu',
  ja: '日本語',
};

export const routing = defineRouting({
  locales,
  defaultLocale: 'zh',
  localePrefix: 'always',
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
