'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

interface Slide {
  title: string;
  desc: string;
  cta: string;
  href: string;
  gradient: string;
  icon: string;
}

interface HeroCarouselProps {
  slides: Slide[];
}

export default function HeroCarousel({ slides }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: 'min(70vh, 520px)' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            i === current ? 'opacity-100 translate-x-0' : i < current ? 'opacity-0 -translate-x-full' : 'opacity-0 translate-x-full'
          }`}
          style={{ background: slide.gradient }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-6 max-w-3xl mx-auto">
              <div className="text-6xl md:text-8xl mb-6 opacity-80 drop-shadow-lg">{slide.icon}</div>
              <h2
                className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4"
                style={{ textShadow: '0 2px 12px rgba(0,0,0,0.3)' }}
              >
                {slide.title}
              </h2>
              <p
                className="text-lg md:text-xl text-white/90 font-body max-w-xl mx-auto mb-8"
                style={{ textShadow: '0 1px 6px rgba(0,0,0,0.3)' }}
              >
                {slide.desc}
              </p>
              {slide.href.startsWith('/') ? (
                <Link
                  href={slide.href}
                  className="inline-block px-8 py-3 bg-white/95 text-brand-blue-dark font-display font-semibold rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  {slide.cta}
                </Link>
              ) : (
                <a
                  href={slide.href}
                  className="inline-block px-8 py-3 bg-white/95 text-brand-blue-dark font-display font-semibold rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  {slide.cta}
                </a>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 transition-all flex items-center justify-center z-10"
        aria-label="Previous"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 transition-all flex items-center justify-center z-10"
        aria-label="Next"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === current ? 'bg-white w-7' : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 60" className="w-full h-auto" preserveAspectRatio="none">
          <path
            d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,40 1440,35 L1440,60 L0,60 Z"
            fill="#c8d4b8"
          />
        </svg>
      </div>
    </div>
  );
}
