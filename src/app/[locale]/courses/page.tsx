export const runtime = 'edge';

import { useTranslations } from 'next-intl';
import VideoEmbed from '@/components/VideoEmbed';
import CoursesTabs from '@/components/CoursesTabs';

export default function CoursesPage() {
  const t = useTranslations();

  const categories = [
    {
      key: 'adult' as const,
      label: t('courses.tabs.adult'),
      icon: '🎵',
      suitable: t('courses.suitable.adult'),
      courses: [
        {
          key: 'adult-private',
          title: t('courses.courseTypes.private.title'),
          desc: t('courses.courseTypes.private.desc'),
          duration: t('courses.courseTypes.private.duration'),
          format: t('courses.courseTypes.private.format'),
          language: t('courses.details.bilingual'),
          icon: '👤',
        },
        {
          key: 'adult-duo',
          title: t('courses.courseTypes.duo.title'),
          desc: t('courses.courseTypes.duo.desc'),
          duration: t('courses.courseTypes.duo.duration'),
          format: t('courses.courseTypes.duo.format'),
          language: t('courses.details.bilingual'),
          icon: '👥',
        },
        {
          key: 'adult-group',
          title: t('courses.courseTypes.group.title'),
          desc: t('courses.courseTypes.group.desc'),
          duration: t('courses.courseTypes.group.duration'),
          format: t('courses.courseTypes.group.format'),
          language: t('courses.details.bilingual'),
          icon: '👨‍👩‍👧‍👦',
        },
      ],
    },
    {
      key: 'kids' as const,
      label: t('courses.tabs.kids'),
      icon: '🎶',
      suitable: t('courses.suitable.kids'),
      courses: [
        {
          key: 'kids-private',
          title: t('courses.courseTypes.kidsPrivate.title'),
          desc: t('courses.courseTypes.kidsPrivate.desc'),
          duration: t('courses.courseTypes.kidsPrivate.duration'),
          format: t('courses.courseTypes.kidsPrivate.format'),
          language: t('courses.details.bilingual'),
          icon: '👤',
        },
        {
          key: 'kids-duo',
          title: t('courses.courseTypes.kidsDuo.title'),
          desc: t('courses.courseTypes.kidsDuo.desc'),
          duration: t('courses.courseTypes.kidsDuo.duration'),
          format: t('courses.courseTypes.kidsDuo.format'),
          language: t('courses.details.bilingual'),
          icon: '👥',
        },
        {
          key: 'kids-group',
          title: t('courses.courseTypes.kidsGroup.title'),
          desc: t('courses.courseTypes.kidsGroup.desc'),
          duration: t('courses.courseTypes.kidsGroup.duration'),
          format: t('courses.courseTypes.kidsGroup.format'),
          language: t('courses.details.bilingual'),
          icon: '👨‍👩‍👧‍👦',
        },
      ],
    },
  ];

  const showcaseVideos = [
    {
      title: t('showcase.videos.v1.title'),
      studentName: t('showcase.videos.v1.student'),
      songName: t('showcase.videos.v1.song'),
      description: t('showcase.videos.v1.desc'),
      youtubeId: 'BtJI8SekxHI',
    },
  ];

  return (
    <>
      {/* ========== Header Section ========== */}
      <section className="wave-bg relative py-16 md:py-24">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-blue-dark mb-4">
            {t('courses.pageTitle')}
          </h1>
          <p className="text-xl text-gray-600 font-body max-w-2xl mx-auto">
            {t('courses.pageSubtitle')}
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" className="w-full h-auto" preserveAspectRatio="none">
            <path
              d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,40 1440,35 L1440,60 L0,60 Z"
              fill="#d0dcc0"
            />
          </svg>
        </div>
      </section>

      {/* ========== Course Tabs + Cards ========== */}
      <section className="bg-[#d0dcc0] py-16 md:py-20">
        <div className="container mx-auto px-4">
          <CoursesTabs
            categories={categories}
            bookLabel={t('courses.bookThis')}
            durationLabel={t('courses.details.duration')}
            formatLabel={t('courses.details.format')}
            languageLabel={t('courses.details.language')}
            suitableLabel={t('courses.details.suitable')}
          />
        </div>
      </section>

      {/* ========== Student Showcase ========== */}
      <section id="results" className="bg-[#c8d4b8] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">{t('showcase.sectionTitle')}</h2>
            <p className="text-2xl font-display font-semibold text-brand-green-dark mb-2">
              {t('showcase.headline')}
            </p>
            <p className="section-subtitle">{t('showcase.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {showcaseVideos.map((video, index) => (
              <VideoEmbed
                key={index}
                youtubeId={video.youtubeId}
                title={video.title}
                studentName={video.studentName}
                songName={video.songName}
                description={video.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA Section ========== */}
      <section className="wave-bg py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-blue-dark mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-lg text-gray-600 font-body mb-10">
            {t('cta.subtitle')}
          </p>
          <a
            href="https://wa.me/6582376302"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.118.56 4.108 1.534 5.839L0 24l6.335-1.495A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82a9.78 9.78 0 01-5.29-1.543l-.379-.227-3.932.928.993-3.842-.249-.396A9.78 9.78 0 012.18 12c0-5.418 4.402-9.82 9.82-9.82S21.82 6.582 21.82 12s-4.402 9.82-9.82 9.82z" />
            </svg>
            {t('cta.whatsapp')}
          </a>
        </div>
      </section>
    </>
  );
}
