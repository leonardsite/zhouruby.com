'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');

  const navLinks = [
    { key: 'about', href: '/#about' },
    { key: 'courses', href: '/courses' },
    { key: 'showcase', href: '/courses#results' },
    { key: 'book', href: '/book' },
  ] as const;

  return (
    <footer className="bg-brand-blue-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand + Description */}
          <div>
            <h3 className="font-display text-xl font-bold text-brand-yellow">
              Ruby&apos;s Music Rainforest
            </h3>
            <p className="mt-2 font-body text-sm leading-relaxed text-white/70">
              {t('location')}
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="mb-3 font-display text-sm font-bold uppercase tracking-wider text-brand-green">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2">
              {navLinks.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="font-body text-sm text-white/80 transition hover:text-brand-green"
                  >
                    {tNav(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-3 font-display text-sm font-bold uppercase tracking-wider text-brand-green">
              {t('contact')}
            </h4>
            <ul className="flex flex-col gap-3 font-body text-sm">
              {/* WhatsApp */}
              <li>
                <a
                  href="https://wa.me/6582376302"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/80 transition hover:text-brand-green"
                >
                  <svg className="h-4 w-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                  <span>+65 8237 6302</span>
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href="mailto:hello@zhouruby.com"
                  className="inline-flex items-center gap-2 text-white/80 transition hover:text-brand-green"
                >
                  <svg className="h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <rect x={2} y={4} width={20} height={16} rx={2} />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>hello@zhouruby.com</span>
                </a>
              </li>

              {/* Location */}
              <li className="inline-flex items-center gap-2 text-white/80">
                <svg className="h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
                  <circle cx={12} cy={10} r={3} />
                </svg>
                <span>{t('location')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="font-body text-xs text-white/50">
              {t('rights')}
            </p>
            <div className="flex gap-4">
              <span className="font-body text-xs text-white/40 transition hover:text-white/70 cursor-pointer">
                {t('privacy')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
