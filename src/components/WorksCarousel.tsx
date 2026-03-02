'use client';

import { useRef } from 'react';

interface WorkItem {
  youtubeId: string;
  title: string;
  label: string;
  type: 'teacher' | 'student';
}

interface WorksCarouselProps {
  items: WorkItem[];
  teacherLabel: string;
  studentLabel: string;
}

export default function WorksCarousel({ items, teacherLabel, studentLabel }: WorksCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({
      left: dir === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative">
      {/* Scroll arrows */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 shadow-lg text-brand-blue-dark hover:bg-white transition-all flex items-center justify-center -ml-3"
        aria-label="Scroll left"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 shadow-lg text-brand-blue-dark hover:bg-white transition-all flex items-center justify-center -mr-3"
        aria-label="Scroll right"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4 px-2 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[320px] snap-center"
          >
            <div className="rounded-xl overflow-hidden shadow-lg bg-[#e4ebd6]">
              {/* Video embed */}
              <div className="relative w-full aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${item.youtubeId}`}
                  title={item.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                />
              </div>
              {/* Info */}
              <div className="p-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                    item.type === 'teacher'
                      ? 'bg-brand-pink/20 text-brand-pink'
                      : 'bg-brand-green/20 text-brand-green-dark'
                  }`}>
                    {item.type === 'teacher' ? teacherLabel : studentLabel}
                  </span>
                </div>
                <h4 className="text-sm font-display font-semibold text-brand-blue-dark truncate">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-500 truncate">{item.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
