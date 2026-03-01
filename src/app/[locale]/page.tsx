export const runtime = 'edge';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import VideoEmbed from '@/components/VideoEmbed';
import Image from 'next/image';

export default function HomePage() {
  const t = useTranslations();

  return (
    <>
      {/* ========== Hero Section ========== */}
      <section className="relative overflow-hidden">
        {/* Hero background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/generated/hero-background.webp"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#d6dfc8]/60 via-transparent to-[#c8d4b8]/80" />
        </div>

        {/* Floating decorative watercolor elements */}
        <div className="absolute top-8 left-8 w-20 h-20 md:w-28 md:h-28 opacity-40 animate-float" aria-hidden="true">
          <Image src="/images/generated/method-music-nature.webp" alt="" fill className="object-contain" />
        </div>
        <div className="absolute bottom-20 right-8 w-16 h-16 md:w-24 md:h-24 opacity-30 animate-float-delayed" aria-hidden="true">
          <Image src="/images/generated/method-scientific-vocal.webp" alt="" fill className="object-contain" />
        </div>

        <div className="container mx-auto px-4 py-20 md:py-32 text-center relative z-10">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src="/images/logo-transparent.png"
              alt="Ruby's Music Rainforest Logo"
              width={200}
              height={200}
              className="w-36 h-36 md:w-48 md:h-48 object-contain drop-shadow-lg animate-float-slow"
              priority
            />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-brand-blue-dark mb-6 drop-shadow-sm">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-[#2d3b2d] font-body max-w-2xl mx-auto mb-10">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses" className="btn-primary">
              {t('hero.exploreCourses')}
            </Link>
            <a
              href="https://wa.me/6582376302"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              {t('hero.bookTrial')}
            </a>
          </div>
        </div>

        {/* Wave bottom edge */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" className="w-full h-auto" preserveAspectRatio="none">
            <path
              d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,40 1440,35 L1440,60 L0,60 Z"
              fill="#c8d4b8"
            />
          </svg>
        </div>
      </section>

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
              <p className="text-[#2d3b2d] font-body text-lg leading-relaxed mb-6">
                {t('about.description')}
              </p>
              <p className="text-brand-blue-dark font-body font-semibold text-lg italic border-l-4 border-brand-green pl-4">
                {t('about.philosophy')}
              </p>
            </div>

            {/* Teacher photo */}
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-[300px] h-[400px] rounded-2xl overflow-hidden shadow-xl ring-4 ring-white/50">
                <Image
                  src="/images/photos/ruby-photo-1.jpg"
                  alt="Ruby Zhou - Music Teacher"
                  fill
                  className="object-cover"
                  sizes="300px"
                />
              </div>
            </div>
          </div>

          {/* Achievement highlights */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="card overflow-hidden group">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-3">
                <Image
                  src="/images/photos/award-mv-thumbnail.jpg"
                  alt="月亮下的太阳花 MV"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <p className="font-display text-sm font-semibold text-brand-blue-dark text-center">
                {t('rubyMusic.mvTitle')}
              </p>
            </div>

            <div className="card overflow-hidden group">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-3">
                <Image
                  src="/images/photos/additional-photo.jpg"
                  alt="Best Melody Award"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <p className="font-display text-sm font-semibold text-brand-blue-dark text-center">
                {t('rubyMusic.headline')}
              </p>
            </div>

            <div className="card overflow-hidden group">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-3">
                <Image
                  src="/images/photos/img-3985.jpg"
                  alt="SG:SW 2023"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <p className="font-display text-sm font-semibold text-brand-blue-dark text-center">
                SG:SW 2023
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Ruby's Award-Winning Music Section ========== */}
      <section className="bg-[#d0dcc0] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">{t('rubyMusic.sectionTitle')}</h2>
            <p className="text-2xl font-display font-semibold text-brand-green-dark mb-2">
              {t('rubyMusic.headline')}
            </p>
            <p className="section-subtitle">{t('rubyMusic.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Official MV */}
            <div className="card overflow-hidden">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4">
                <iframe
                  src="https://www.youtube.com/embed/BaXUdtSIoME"
                  title={t('rubyMusic.mvTitle')}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <h3 className="font-display text-lg font-bold text-brand-blue-dark">
                {t('rubyMusic.mvTitle')}
              </h3>
              <p className="font-body text-sm text-[#2d3b2d]">
                {t('rubyMusic.mvDesc')}
              </p>
            </div>

            {/* Audio version */}
            <div className="card overflow-hidden">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4">
                <iframe
                  src="https://www.youtube.com/embed/HeuJ3oVR6RE"
                  title={t('rubyMusic.audioTitle')}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <h3 className="font-display text-lg font-bold text-brand-blue-dark">
                {t('rubyMusic.audioTitle')}
              </h3>
              <p className="font-body text-sm text-[#2d3b2d]">
                {t('rubyMusic.audioDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Teaching Method Section ========== */}
      <section id="method" className="bg-[#c8d4b8] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">{t('method.sectionTitle')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Scientific Vocals */}
            <div className="card border-t-4 border-brand-green text-center group">
              <div className="relative w-24 h-24 mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Image
                  src="/images/generated/method-scientific-vocal.webp"
                  alt={t('method.scientific.title')}
                  fill
                  className="object-contain"
                  sizes="96px"
                />
              </div>
              <h3 className="text-xl font-display font-bold text-brand-blue-dark mb-3">
                {t('method.scientific.title')}
              </h3>
              <p className="text-[#2d3b2d] font-body">
                {t('method.scientific.desc')}
              </p>
            </div>

            {/* Music & Nature */}
            <div className="card border-t-4 border-brand-yellow text-center group">
              <div className="relative w-24 h-24 mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Image
                  src="/images/generated/method-music-nature.webp"
                  alt={t('method.nature.title')}
                  fill
                  className="object-contain"
                  sizes="96px"
                />
              </div>
              <h3 className="text-xl font-display font-bold text-brand-blue-dark mb-3">
                {t('method.nature.title')}
              </h3>
              <p className="text-[#2d3b2d] font-body">
                {t('method.nature.desc')}
              </p>
            </div>

            {/* Music & Language */}
            <div className="card border-t-4 border-brand-pink text-center group">
              <div className="relative w-24 h-24 mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Image
                  src="/images/generated/method-music-language.webp"
                  alt={t('method.language.title')}
                  fill
                  className="object-contain"
                  sizes="96px"
                />
              </div>
              <h3 className="text-xl font-display font-bold text-brand-blue-dark mb-3">
                {t('method.language.title')}
              </h3>
              <p className="text-[#2d3b2d] font-body">
                {t('method.language.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Featured Courses Section ========== */}
      <section className="bg-[#d6dfc8] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">{t('featuredCourses.sectionTitle')}</h2>
            <p className="section-subtitle">{t('featuredCourses.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Adult Courses */}
            <div className="card text-center group overflow-hidden">
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-4">
                <Image
                  src="/images/generated/course-adult-singing.webp"
                  alt={t('featuredCourses.adult.title')}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-display font-bold text-brand-blue-dark mb-3">
                {t('featuredCourses.adult.title')}
              </h3>
              <p className="text-[#2d3b2d] font-body mb-6">
                {t('featuredCourses.adult.desc')}
              </p>
              <Link href="/courses" className="btn-secondary text-base">
                {t('featuredCourses.viewAll')}
              </Link>
            </div>

            {/* Kids Courses */}
            <div className="card text-center group overflow-hidden">
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-4">
                <Image
                  src="/images/generated/course-children-music.webp"
                  alt={t('featuredCourses.kids.title')}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-display font-bold text-brand-blue-dark mb-3">
                {t('featuredCourses.kids.title')}
              </h3>
              <p className="text-[#2d3b2d] font-body mb-6">
                {t('featuredCourses.kids.desc')}
              </p>
              <Link href="/courses" className="btn-secondary text-base">
                {t('featuredCourses.viewAll')}
              </Link>
            </div>

            {/* Early Childhood Courses */}
            <div className="card text-center group overflow-hidden">
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-4">
                <Image
                  src="/images/generated/course-early-childhood.webp"
                  alt={t('featuredCourses.early.title')}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-display font-bold text-brand-blue-dark mb-3">
                {t('featuredCourses.early.title')}
              </h3>
              <p className="text-[#2d3b2d] font-body mb-6">
                {t('featuredCourses.early.desc')}
              </p>
              <Link href="/courses" className="btn-secondary text-base">
                {t('featuredCourses.viewAll')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Student Showcase Section ========== */}
      <section id="showcase" className="bg-[#c8d4b8] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">{t('showcase.sectionTitle')}</h2>
            <p className="text-2xl font-display font-semibold text-brand-green-dark mb-2">
              {t('showcase.headline')}
            </p>
            <p className="section-subtitle">{t('showcase.subtitle')}</p>
          </div>

          <div className="max-w-2xl mx-auto mb-10">
            <VideoEmbed
              youtubeId="BtJI8SekxHI"
              title={t('showcase.videos.v1.title')}
              studentName={t('showcase.videos.v1.student')}
              songName={t('showcase.videos.v1.song')}
              description={t('showcase.videos.v1.desc')}
            />
          </div>

          <div className="text-center">
            <Link href="/courses#results" className="btn-secondary">
              {t('showcase.viewMore')}
            </Link>
          </div>
        </div>
      </section>

      {/* ========== CTA Section ========== */}
      <section className="wave-bg relative py-20 md:py-28">
        {/* Decorative floating elements */}
        <div className="absolute top-6 right-12 w-16 h-16 opacity-20 animate-float" aria-hidden="true">
          <Image src="/images/generated/decorative-monstera.webp" alt="" fill className="object-contain" />
        </div>
        <div className="absolute bottom-8 left-10 w-14 h-14 opacity-20 animate-float-delayed" aria-hidden="true">
          <Image src="/images/generated/method-music-nature.webp" alt="" fill className="object-contain" />
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
