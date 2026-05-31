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
  const sparks = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduce =
        window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
        window.location.search.includes('still');

      /* ---- entrance timeline (skipped when reduced/still → content rests visible) ---- */
      if (!reduce) {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        tl.from('[data-hero="logo"]', { opacity: 0, scale: 0.6, y: -10, duration: 0.8 })
          .from('[data-hero="title"]', { opacity: 0, y: 28, duration: 0.9 }, '-=0.4')
          .from('[data-hero="sub"]', { opacity: 0, y: 20, duration: 0.8 }, '-=0.55')
          .from('[data-hero="cta"] > *', { opacity: 0, y: 16, stagger: 0.12, duration: 0.6 }, '-=0.4')
          .from('[data-hero="scroll"]', { opacity: 0, duration: 0.6 }, '-=0.2');
      }

      /* ---- parallax on scroll ---- */
      if (!reduce) {
        gsap.utils.toArray<HTMLElement>('[data-depth]').forEach((el) => {
          const depth = parseFloat(el.dataset.depth || '0');
          gsap.to(el, {
            yPercent: depth * 100,
            ease: 'none',
            scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
          });
        });
        // content drifts up + fades as you scroll past hero
        gsap.to('[data-hero="content"]', {
          yPercent: -18,
          opacity: 0.15,
          ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
        });
      }

      /* ---- fireflies + drifting notes (built in JS to avoid hydration mismatch) ---- */
      if (!reduce && sparks.current) {
        const host = sparks.current;
        const N = 22;
        for (let i = 0; i < N; i++) {
          const s = document.createElement('div');
          s.className = 'spark';
          const size = 3 + Math.random() * 7;
          s.style.width = `${size}px`;
          s.style.height = `${size}px`;
          s.style.left = `${Math.random() * 100}%`;
          s.style.top = `${30 + Math.random() * 65}%`;
          host.appendChild(s);
          gsap.set(s, { opacity: 0 });
          gsap.to(s, {
            opacity: () => 0.4 + Math.random() * 0.6,
            duration: 1.2 + Math.random() * 1.8,
            repeat: -1,
            yoyo: true,
            delay: Math.random() * 3,
            ease: 'sine.inOut',
          });
          gsap.to(s, {
            x: () => (Math.random() - 0.5) * 120,
            y: () => -40 - Math.random() * 120,
            duration: 6 + Math.random() * 8,
            repeat: -1,
            yoyo: true,
            delay: Math.random() * 4,
            ease: 'sine.inOut',
          });
        }
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
      <div ref={sparks} className="hero-layer" aria-hidden="true" />
      <div className="hero-vignette" aria-hidden="true" />
      <div className="hero-scrim" aria-hidden="true" />

      {/* center content */}
      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 text-center" data-hero="content">
        <div data-hero="logo" className="relative mb-6 h-24 w-24 overflow-hidden rounded-full shadow-2xl ring-4 ring-white/60 md:h-28 md:w-28">
          <Image src="/images/logo-transparent.png" alt="Ruby's Music Rainforest" fill className="object-cover" sizes="112px" priority />
        </div>
        <h1 data-hero="title" className="display-hero text-white drop-shadow-[0_3px_18px_rgba(26,58,46,0.55)]">
          {t('title')}
        </h1>
        <p data-hero="sub" className="mt-5 max-w-2xl font-body text-lg text-white/95 drop-shadow-[0_2px_10px_rgba(26,58,46,0.5)] md:text-2xl">
          {t('subtitle')}
        </p>
        <div data-hero="cta" className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link href="/courses" className="btn-primary">{t('exploreCourses')}</Link>
          <Link href="/book" className="btn-secondary">{t('bookTrial')}</Link>
        </div>
      </div>

      {/* foreground leaves (front parallax layer) */}
      <div className="hero-layer z-[5]" data-depth="-0.18" aria-hidden="true">
        <Image src="/images/generated/layer-foreground-leaves.webp" alt="" fill className="object-cover" sizes="100vw" />
      </div>

      {/* scroll cue */}
      <div data-hero="scroll" className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-white/80">
        <span className="block animate-float text-2xl">⌄</span>
      </div>

      {/* bottom blend into next section */}
      <div className="absolute bottom-0 left-0 right-0 z-[6]" aria-hidden="true">
        <svg viewBox="0 0 1440 70" className="h-auto w-full" preserveAspectRatio="none">
          <path d="M0,38 C320,72 760,4 1120,32 C1280,44 1380,42 1440,38 L1440,70 L0,70 Z" fill="var(--sage)" />
        </svg>
      </div>
    </section>
  );
}
