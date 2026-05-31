'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxHero() {
  const t = useTranslations('hero');
  const root = useRef<HTMLDivElement>(null);
  const fx = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduce =
        window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
        window.location.search.includes('still');
      if (reduce) return; // entrance is CSS; ambient/parallax are pure decoration

      // Parallax on scroll (transform only — never hides content)
      gsap.utils.toArray<HTMLElement>('[data-depth]').forEach((el) => {
        const depth = parseFloat(el.dataset.depth || '0');
        gsap.to(el, {
          yPercent: depth * 100,
          ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
        });
      });
      gsap.to('[data-hero="content"]', {
        yPercent: -16,
        opacity: 0.2,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      });

      // Ambient particles (decorative DOM built in JS → no hydration mismatch)
      const host = fx.current;
      if (!host) return;
      const H = () => (root.current?.offsetHeight || 700) + 100;

      // fireflies
      for (let i = 0; i < 34; i++) {
        const s = document.createElement('div');
        s.className = 'spark';
        const size = 3 + Math.random() * 11;
        s.style.width = `${size}px`;
        s.style.height = `${size}px`;
        s.style.left = `${Math.random() * 100}%`;
        s.style.top = `${20 + Math.random() * 75}%`;
        host.appendChild(s);
        gsap.set(s, { opacity: 0 });
        gsap.to(s, {
          opacity: () => 0.45 + Math.random() * 0.55,
          duration: 1 + Math.random() * 2,
          repeat: -1, yoyo: true, delay: Math.random() * 3, ease: 'sine.inOut',
        });
        gsap.to(s, {
          x: () => (Math.random() - 0.5) * 160,
          y: () => -50 - Math.random() * 160,
          duration: 6 + Math.random() * 9,
          repeat: -1, yoyo: true, delay: Math.random() * 4, ease: 'sine.inOut',
        });
      }

      // rising musical notes — continuous life even before scrolling
      const glyphs = ['♪', '♫', '♬', '♩'];
      for (let i = 0; i < 9; i++) {
        const n = document.createElement('div');
        n.className = 'note-rise';
        n.textContent = glyphs[i % glyphs.length];
        n.style.fontSize = `${17 + Math.random() * 24}px`;
        n.style.left = `${5 + Math.random() * 90}%`;
        n.style.bottom = '-44px';
        host.appendChild(n);
        const dur = 9 + Math.random() * 7;
        const delay = i * 1.1 + Math.random() * 2;
        const drift = (Math.random() - 0.5) * 130;
        gsap.set(n, { y: 0, opacity: 0 });
        gsap.to(n, { y: () => -H(), x: drift, rotation: 8, duration: dur, repeat: -1, delay, ease: 'none' });
        gsap.to(n, { keyframes: { opacity: [0, 0.85, 0.85, 0] }, duration: dur, repeat: -1, delay, ease: 'none' });
      }
    },
    { scope: root }
  );

  return (
    <section ref={root} className="hero-stage" aria-label="Ruby's Music Rainforest">
      {/* parallax layers (back → front) */}
      <div className="hero-layer" data-depth="0.12" aria-hidden="true">
        <Image src="/images/generated/layer-bg-canopy.webp" alt="" fill priority className="object-cover" sizes="100vw" />
      </div>
      <div className="hero-layer" data-depth="0.26" aria-hidden="true">
        <Image src="/images/generated/layer-mid-notes.webp" alt="" fill className="object-cover opacity-80" sizes="100vw" />
      </div>
      <div ref={fx} className="hero-layer" aria-hidden="true" />
      <div className="hero-vignette" aria-hidden="true" />
      <div className="hero-scrim" aria-hidden="true" />

      {/* center content — entrance is pure CSS (always completes) */}
      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 text-center" data-hero="content">
        <div className="hero-enter-pop relative mb-6 h-24 w-24 overflow-hidden rounded-full shadow-2xl ring-4 ring-white/60 md:h-28 md:w-28">
          <Image src="/images/logo-transparent.png" alt="Ruby's Music Rainforest" fill className="object-cover" sizes="112px" priority />
        </div>
        <h1 className="hero-enter display-hero text-white drop-shadow-[0_3px_18px_rgba(26,58,46,0.55)]" style={{ animationDelay: '.15s' }}>
          {t('title')}
        </h1>
        <p className="hero-enter mt-5 max-w-2xl font-body text-lg text-white/95 drop-shadow-[0_2px_10px_rgba(26,58,46,0.5)] md:text-2xl" style={{ animationDelay: '.3s' }}>
          {t('subtitle')}
        </p>
        <div className="hero-enter mt-9 flex flex-wrap items-center justify-center gap-4" style={{ animationDelay: '.45s' }}>
          <Link href="/courses" className="btn-primary">{t('exploreCourses')}</Link>
          <Link href="/book" className="btn-secondary">{t('bookTrial')}</Link>
        </div>
      </div>

      {/* foreground leaves (front parallax layer) */}
      <div className="hero-layer z-[5]" data-depth="-0.18" aria-hidden="true">
        <Image src="/images/generated/layer-foreground-leaves.webp" alt="" fill className="object-cover" sizes="100vw" />
      </div>

      {/* scroll cue */}
      <div className="hero-enter absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-white/80" style={{ animationDelay: '.7s' }}>
        <span className="block animate-float text-2xl">⌄</span>
      </div>

      {/* blend into next section */}
      <div className="absolute bottom-0 left-0 right-0 z-[6]" aria-hidden="true">
        <svg viewBox="0 0 1440 70" className="h-auto w-full" preserveAspectRatio="none">
          <path d="M0,38 C320,72 760,4 1120,32 C1280,44 1380,42 1440,38 L1440,70 L0,70 Z" fill="var(--sage)" />
        </svg>
      </div>
    </section>
  );
}
