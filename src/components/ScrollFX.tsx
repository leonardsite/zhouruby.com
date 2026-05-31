'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

/** Mounted once on the page: drives scroll-reveal + subtle in-section parallax. */
export default function ScrollFX() {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const reduce =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      window.location.search.includes('still');

    if (reduce) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-in'));
      return;
    }

    // Reveal-on-scroll (CSS handles the transition; we just toggle the class)
    ScrollTrigger.batch('.reveal', {
      start: 'top 85%',
      onEnter: (els) =>
        els.forEach((el, i) =>
          gsap.delayedCall(reduce ? 0 : i * 0.08, () => el.classList.add('is-in'))
        ),
    });

    // Safety: never trap content hidden — reveal everything after a short grace period
    gsap.delayedCall(2.2, () =>
      document.querySelectorAll('.reveal:not(.is-in)').forEach((el) => el.classList.add('is-in'))
    );

    if (!reduce) {
      // Gentle parallax for tagged decorative/media elements
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
    }

    ScrollTrigger.refresh();
  }, { scope });

  return <div ref={scope} aria-hidden="true" className="hidden" />;
}
