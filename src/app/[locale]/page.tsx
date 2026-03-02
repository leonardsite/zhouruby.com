export const runtime = 'edge';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import HeroCarousel from '@/components/HeroCarousel';
import WorksCarousel from '@/components/WorksCarousel';

export default function HomePage() {
  const t = useTranslations();

  /* ===== Carousel slides ===== */
  const carouselSlides = [
    {
      title: t('carousel.courses.title'),
      desc: t('carousel.courses.desc'),
      cta: t('carousel.courses.cta'),
      href: '/courses',
      gradient: 'linear-gradient(135deg, #24506b 0%, #4682B4 40%, #7CB94F 100%)',
      icon: '🎤',
    },
    {
      title: t('carousel.works.title'),
      desc: t('carousel.works.desc'),
      cta: t('carousel.works.cta'),
      href: '#works',
      gradient: 'linear-gradient(135deg, #e8607a 0%, #FF7F9F 40%, #FFD700 100%)',
      icon: '🎵',
    },
    {
      title: t('carousel.students.title'),
      desc: t('carousel.students.desc'),
      cta: t('carousel.students.cta'),
      href: '/courses#results',
      gradient: 'linear-gradient(135deg, #7CB94F 0%, #A5D97F 40%, #ADD8E6 100%)',
      icon: '🌟',
    },
  ];

  /* ===== Teacher works ===== */
  const teacherItems = [
    {
      youtubeId: '0pYTOUTvSvo',
      title: '忘风月 — 心情溶剂总决赛',
      label: '第二十五届心情溶剂总决赛 华文组',
      type: 'teacher' as const,
    },
    {
      youtubeId: 'BaXUdtSIoME',
      title: '原创作品MV拍摄花絮 - 月亮下的太阳花',
      label: 'SG:SW 2023 Best Song Award — Official MV',
      type: 'teacher' as const,
    },
    {
      youtubeId: '_CUFo1cmJ7U',
      title: '忘风月',
      label: 'Ruby Zhou Original',
      type: 'teacher' as const,
    },
  ];

  /* ===== Student works ===== */
  const studentItems = [
    {
      youtubeId: 'BtJI8SekxHI',
      title: 'You Raise Me Up',
      label: 'Kai Xuan & Kai Lun — Student Duet',
      type: 'student' as const,
    },
  ];

  return (
    <>
      {/* ========== Hero Carousel ========== */}
      <HeroCarousel slides={carouselSlides} />

      {/* ========== About Section ========== */}
      <section id="about" className="bg-[#c8d4b8] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="order-2 md:order-1">
              <h2 className="section-title">{t('about.sectionTitle')}</h2>
              <h3 className="text-2xl md:text-3xl font-display font-semibold text-brand-green-dark mb-6">
                {t('about.headline')}
              </h3>
              <p className="text-[#2d3b2d] font-body text-lg leading-relaxed mb-6 whitespace-pre-line">
                {t('about.description')}
              </p>
              <p className="text-brand-blue-dark font-body font-semibold text-lg italic border-l-4 border-brand-green pl-4">
                {t('about.philosophy')}
              </p>
            </div>

            {/* Teacher photo */}
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-[300px] h-[420px] rounded-2xl overflow-hidden shadow-xl ring-4 ring-white/50">
                <Image
                  src="/images/photos/ruby-photo-1-hd.webp"
                  alt="Ruby Zhou - Music Teacher"
                  fill
                  className="object-cover object-top"
                  sizes="300px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Works & Achievements (Teacher + Student separated) ========== */}
      <section id="works" className="bg-[#c8d4b8] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-title">{t('works.sectionTitle')}</h2>
          </div>

          {/* Teacher works */}
          <div className="max-w-5xl mx-auto mb-12">
            <h3 className="text-xl font-display font-bold text-brand-blue-dark mb-4 text-center">
              {t('works.teacherSectionTitle')}
            </h3>
            <WorksCarousel
              items={teacherItems}
              teacherLabel={t('works.teacherLabel')}
              studentLabel={t('works.studentLabel')}
            />
          </div>

          {/* Student works */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl font-display font-bold text-brand-blue-dark mb-4 text-center">
              {t('works.studentSectionTitle')}
            </h3>
            <WorksCarousel
              items={studentItems}
              teacherLabel={t('works.teacherLabel')}
              studentLabel={t('works.studentLabel')}
            />
          </div>
        </div>
      </section>

      {/* ========== Featured Courses Section ========== */}
      <section id="method" className="bg-[#c8d4b8] py-16 md:py-24 relative overflow-hidden">
        {/* Animated leaves background */}
        <div className="absolute inset-0 pointer-events-none opacity-15" aria-hidden="true">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/images/animated/leaves-sway.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <h2 className="section-title">{t('featuredCourses.sectionTitle')}</h2>
            <p className="section-subtitle">{t('featuredCourses.subtitle')}</p>
          </div>

          {/* Course cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link href="/courses" className="card text-center group overflow-hidden block">
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-4">
                <Image
                  src="/images/generated/course-adult-singing.webp"
                  alt={t('featuredCourses.adult.title')}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-xl font-display font-bold text-brand-blue-dark mb-2">
                {t('featuredCourses.adult.title')}
              </h3>
              <p className="text-[#2d3b2d] font-body text-sm">
                {t('featuredCourses.adult.desc')}
              </p>
            </Link>

            <Link href="/courses" className="card text-center group overflow-hidden block">
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-4">
                <Image
                  src="/images/generated/course-children-music.webp"
                  alt={t('featuredCourses.kids.title')}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-xl font-display font-bold text-brand-blue-dark mb-2">
                {t('featuredCourses.kids.title')}
              </h3>
              <p className="text-[#2d3b2d] font-body text-sm">
                {t('featuredCourses.kids.desc')}
              </p>
            </Link>
          </div>

          <div className="text-center mt-10">
            <Link href="/courses" className="btn-primary">
              {t('featuredCourses.viewAll')}
            </Link>
          </div>
        </div>
      </section>

      {/* ========== CTA Section ========== */}
      <section className="wave-bg relative py-20 md:py-28 overflow-hidden">
        {/* Animated logo background */}
        <div className="absolute inset-0 pointer-events-none opacity-10" aria-hidden="true">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/images/animated/logo-float.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Decorative floating elements */}
        <div className="absolute top-6 right-12 w-16 h-16 opacity-20 animate-float" aria-hidden="true">
          <Image src="/images/generated/decorative-monstera.webp" alt="" fill className="object-contain" />
        </div>
        <div className="absolute bottom-8 left-10 w-14 h-14 opacity-20 animate-float-delayed" aria-hidden="true">
          <Image src="/images/generated/method-music-nature-transparent.webp" alt="" fill className="object-contain" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 drop-shadow-md">
            {t('cta.title')}
          </h2>
          <p className="text-lg text-white/90 font-body mb-10">
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
