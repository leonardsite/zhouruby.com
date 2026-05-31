'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll enhancements — STRICTLY ADDITIVE.
 * Nothing here ever sets opacity:0 on content. If gsap fails to load or run,
 * the page is completely unaffected (all content stays visible). The only
 * effect is a gentle parallax drift on elements tagged [data-parallax]
 * (decorative imagery), which is transform-only.
 */
export default function ScrollFX() {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const reduce =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      window.location.search.includes('still');
    if (reduce) return;

    gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
      const amt = parseFloat(el.dataset.parallax || '40');
      gsap.fromTo(
        el,
        { y: amt },
        {
          y: -amt,
          ease: 'none',
          scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
        }
      );
    });

    ScrollTrigger.refresh();
  }, { scope });

  return <div ref={scope} aria-hidden="true" className="hidden" />;
}
