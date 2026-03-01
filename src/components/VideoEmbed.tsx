'use client';

import { useState, useCallback } from 'react';

interface VideoEmbedProps {
  youtubeId?: string;
  bilibiliId?: string;
  title: string;
  studentName?: string;
  songName?: string;
  description?: string;
}

type Platform = 'youtube' | 'bilibili';

export default function VideoEmbed({
  youtubeId,
  bilibiliId,
  title,
  studentName,
  songName,
  description,
}: VideoEmbedProps) {
  // Start with YouTube if available, otherwise Bilibili
  const initialPlatform: Platform = youtubeId ? 'youtube' : 'bilibili';
  const [platform, setPlatform] = useState<Platform>(initialPlatform);
  const [ytError, setYtError] = useState(false);

  const handleYouTubeError = useCallback(() => {
    setYtError(true);
    if (bilibiliId) {
      setPlatform('bilibili');
    }
  }, [bilibiliId]);

  const switchToPlatform = (target: Platform) => {
    setPlatform(target);
    if (target === 'youtube') {
      setYtError(false);
    }
  };

  const hasBothPlatforms = !!youtubeId && !!bilibiliId;

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-lg">
      {/* Video Player */}
      <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
        {platform === 'youtube' && youtubeId && !ytError && (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${youtubeId}?rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onError={handleYouTubeError}
          />
        )}

        {platform === 'bilibili' && bilibiliId && (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://player.bilibili.com/player.html?bvid=${bilibiliId}&high_quality=1&danmaku=0`}
            title={title}
            allowFullScreen
            scrolling="no"
            frameBorder={0}
          />
        )}

        {/* Fallback: no video for current platform */}
        {((platform === 'youtube' && (!youtubeId || ytError) && !bilibiliId) ||
          (platform === 'bilibili' && !bilibiliId)) && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="text-center px-4">
              <svg
                className="mx-auto mb-2 h-12 w-12 text-gray-300"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
              <p className="font-body text-sm text-gray-400">{title}</p>
            </div>
          </div>
        )}
      </div>

      {/* Platform Switch Buttons */}
      {hasBothPlatforms && (
        <div className="flex items-center gap-2 border-b border-gray-100 px-4 py-2">
          <span className="font-body text-xs text-gray-400 mr-1">Platform:</span>
          <button
            onClick={() => switchToPlatform('youtube')}
            className={`rounded-md px-3 py-1 font-body text-xs font-semibold transition ${
              platform === 'youtube'
                ? 'bg-red-500 text-white'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            YouTube
          </button>
          <button
            onClick={() => switchToPlatform('bilibili')}
            className={`rounded-md px-3 py-1 font-body text-xs font-semibold transition ${
              platform === 'bilibili'
                ? 'bg-[#00A1D6] text-white'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            Bilibili
          </button>
          {platform === 'youtube' && ytError && (
            <span className="font-body text-xs text-brand-pink">
              YouTube unavailable - try Bilibili
            </span>
          )}
        </div>
      )}

      {/* Video Info */}
      {(studentName || songName || description) && (
        <div className="px-4 py-4">
          <h3 className="font-display text-base font-bold text-brand-black lg:text-lg">
            {title}
          </h3>
          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
            {studentName && (
              <span className="inline-flex items-center gap-1 font-body text-sm text-brand-green-dark">
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0" />
                </svg>
                {studentName}
              </span>
            )}
            {songName && (
              <span className="inline-flex items-center gap-1 font-body text-sm text-brand-pink">
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V4.103A2.25 2.25 0 0 0 17.883 2l-5.58 1.602a2.25 2.25 0 0 0-1.678 2.175v6.776" />
                  <path d="M6.375 18.75a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
                {songName}
              </span>
            )}
          </div>
          {description && (
            <p className="mt-2 font-body text-sm leading-relaxed text-gray-600">
              {description}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
