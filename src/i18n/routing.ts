import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const locales = ['en', 'zh', 'ja', 'ms', 'ta'] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  zh: '中文',
  ja: '日本語',
  ms: 'Bahasa Melayu',
  ta: 'தமிழ்',
};

export const routing = defineRouting({
  locales,
  defaultLocale: 'zh',
  localePrefix: 'always',
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
