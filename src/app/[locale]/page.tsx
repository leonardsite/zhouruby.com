import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import VideoEmbed from '@/components/VideoEmbed';
import Image from 'next/image';

export default function HomePage() {
  const t = useTranslations();

  const showcaseVideos = [
    { title: '学员演唱展示', studentName: '学员A', songName: '流行歌曲', description: '成人学员课后演唱展示' },
    { title: '儿童声乐表演', studentName: '学员B', songName: '校园歌曲', description: '儿童声乐课堂表演' },
    { title: '成人学员成果', studentName: '学员C', songName: '经典金曲', description: '成人学员学习成果' },
    { title: '早教音乐课堂', studentName: '小朋友', songName: '儿歌', description: '早教亲子音乐课精彩瞬间' },
  ];

  return (
    <>
      {/* ========== Hero Section ========== */}
      <section className="wave-bg relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-6 text-5xl opacity-30 animate-pulse select-none" aria-hidden="true">
          🌿
        </div>
        <div className="absolute top-20 right-10 text-4xl opacity-25 animate-pulse select-none" aria-hidden="true">
          🍃
        </div>
        <div className="absolute bottom-16 left-16 text-3xl opacity-20 select-none" aria-hidden="true">
          🌱
        </div>
        <div className="absolute bottom-10 right-20 text-5xl opacity-20 select-none" aria-hidden="true">
          🐸
        </div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-brand-yellow/20" aria-hidden="true" />
        <div className="absolute bottom-1/4 left-1/3 w-12 h-12 rounded-full bg-brand-pink/15" aria-hidden="true" />

        <div className="container mx-auto px-4 py-20 md:py-32 text-center relative z-10">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src="/images/logo.png"
              alt="Ruby's Music Rainforest Logo"
              width={200}
              height={200}
              className="w-36 h-36 md:w-48 md:h-48 object-contain drop-shadow-lg"
              priority
            />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-brand-blue-dark mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-body max-w-2xl mx-auto mb-10">
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
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* ========== About Section ========== */}
      <section id="about" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="order-2 md:order-1">
              <h2 className="section-title">{t('about.sectionTitle')}</h2>
              <h3 className="text-2xl md:text-3xl font-display font-semibold text-brand-green-dark mb-6">
                {t('about.headline')}
              </h3>
              <p className="text-gray-600 font-body text-lg leading-relaxed mb-6">
                {t('about.description')}
              </p>
              <p className="text-brand-blue-dark font-body font-semibold text-lg italic border-l-4 border-brand-green pl-4">
                {t('about.philosophy')}
              </p>
            </div>

            {/* Teacher photo placeholder */}
            <div className="order-1 md:order-2 flex justify-center">
              <div className="w-[300px] h-[400px] rounded-2xl border-4 border-brand-blue bg-gradient-to-br from-brand-blue/10 to-brand-green/10 flex flex-col items-center justify-center shadow-lg">
                <div className="text-6xl mb-4">🎤</div>
                <p className="font-display text-xl text-brand-blue-dark font-semibold">
                  Ruby 老师
                </p>
                <p className="text-sm text-gray-400 mt-2 font-body">Photo placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Teaching Method Section ========== */}
      <section id="method" className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">{t('method.sectionTitle')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Scientific Vocals */}
            <div className="card border-t-4 border-brand-green text-center">
              <div className="text-5xl mb-4">🎤</div>
              <h3 className="text-xl font-display font-bold text-brand-blue-dark mb-3">
                {t('method.scientific.title')}
              </h3>
              <p className="text-gray-600 font-body">
                {t('method.scientific.desc')}
              </p>
            </div>

            {/* Music & Nature */}
            <div className="card border-t-4 border-brand-yellow text-center">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-xl font-display font-bold text-brand-blue-dark mb-3">
                {t('method.nature.title')}
              </h3>
              <p className="text-gray-600 font-body">
                {t('method.nature.desc')}
              </p>
            </div>

            {/* Music & Language */}
            <div className="card border-t-4 border-brand-pink text-center">
              <div className="text-5xl mb-4">🗣️</div>
              <h3 className="text-xl font-display font-bold text-brand-blue-dark mb-3">
                {t('method.language.title')}
              </h3>
              <p className="text-gray-600 font-body">
                {t('method.language.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Featured Courses Section ========== */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">{t('featuredCourses.sectionTitle')}</h2>
            <p className="section-subtitle">{t('featuredCourses.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Adult Courses */}
            <div className="card text-center group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🎵</div>
              <h3 className="text-xl font-display font-bold text-brand-blue-dark mb-3">
                {t('featuredCourses.adult.title')}
              </h3>
              <p className="text-gray-600 font-body mb-6">
                {t('featuredCourses.adult.desc')}
              </p>
              <Link href="/courses" className="btn-secondary text-base">
                {t('featuredCourses.viewAll')}
              </Link>
            </div>

            {/* Kids Courses */}
            <div className="card text-center group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🎶</div>
              <h3 className="text-xl font-display font-bold text-brand-blue-dark mb-3">
                {t('featuredCourses.kids.title')}
              </h3>
              <p className="text-gray-600 font-body mb-6">
                {t('featuredCourses.kids.desc')}
              </p>
              <Link href="/courses" className="btn-secondary text-base">
                {t('featuredCourses.viewAll')}
              </Link>
            </div>

            {/* Early Childhood Courses */}
            <div className="card text-center group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🎼</div>
              <h3 className="text-xl font-display font-bold text-brand-blue-dark mb-3">
                {t('featuredCourses.early.title')}
              </h3>
              <p className="text-gray-600 font-body mb-6">
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
      <section id="showcase" className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">{t('showcase.sectionTitle')}</h2>
            <p className="text-2xl font-display font-semibold text-brand-green-dark mb-2">
              {t('showcase.headline')}
            </p>
            <p className="section-subtitle">{t('showcase.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
            {showcaseVideos.map((video, index) => (
              <VideoEmbed
                key={index}
                title={video.title}
                studentName={video.studentName}
                songName={video.songName}
                description={video.description}
              />
            ))}
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
        <div className="absolute top-6 right-12 text-4xl opacity-20 select-none" aria-hidden="true">
          🌿
        </div>
        <div className="absolute bottom-8 left-10 text-3xl opacity-20 select-none" aria-hidden="true">
          🐸
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
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
