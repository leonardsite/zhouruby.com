export const runtime = 'edge';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import ParallaxHero from '@/components/ParallaxHero';
import ScrollFX from '@/components/ScrollFX';
import WorksCarousel from '@/components/WorksCarousel';

function VineDivider() {
  return (
    <div className="vine-divider" aria-hidden="true">
      <Image src="/images/generated/divider-vine.webp" alt="" width={1440} height={90} className="h-full w-full object-contain" />
    </div>
  );
}

export default function HomePage() {
  const t = useTranslations();

  const teacherItems = [
    { youtubeId: '0pYTOUTvSvo', title: '忘风月 — 心情溶剂总决赛', label: '第二十五届心情溶剂总决赛 华文组', type: 'teacher' as const },
    { youtubeId: 'BaXUdtSIoME', title: '月亮下的太阳花 — Official MV', label: 'SG:SW 2023 Best Song Award', type: 'teacher' as const },
    { youtubeId: '_CUFo1cmJ7U', title: '忘风月', label: 'Ruby Zhou Original', type: 'teacher' as const },
  ];
  const studentItems = [
    { youtubeId: 'BtJI8SekxHI', title: 'You Raise Me Up', label: 'Kai Xuan & Kai Lun — Student Duet', type: 'student' as const },
  ];

  const methods = [
    { key: 'scientific', img: '/images/generated/method-scientific-vocal-transparent.webp' },
    { key: 'nature', img: '/images/generated/method-music-nature-transparent.webp' },
    { key: 'language', img: '/images/generated/method-music-language-transparent.webp' },
  ];

  return (
    <>
      <ScrollFX />
      <ParallaxHero />

      {/* ===================== About ===================== */}
      <section id="about" className="section-pad relative overflow-hidden" style={{ background: 'linear-gradient(180deg, var(--sage) 0%, var(--cream) 100%)' }}>
        {/* floating decorative note particles */}
        <div className="pointer-events-none absolute right-[4%] top-[12%] hidden w-40 opacity-60 md:block" data-parallax="60" aria-hidden="true">
          <Image src="/images/generated/note-particles.webp" alt="" width={240} height={240} className="h-auto w-full" />
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="reveal order-2 md:order-1">
              <p className="eyebrow mb-3" aria-hidden="true">♪</p>
              <h2 className="section-title">{t('about.sectionTitle')}</h2>
              <h3 className="mb-6 font-display text-2xl font-semibold md:text-3xl" style={{ color: 'var(--teal)' }}>
                {t('about.headline')}
              </h3>
              <p className="lead mb-6 whitespace-pre-line">{t('about.description')}</p>
              <p className="border-l-4 pl-4 font-body text-lg font-semibold italic" style={{ borderColor: 'var(--gold)', color: 'var(--forest)' }}>
                {t('about.philosophy')}
              </p>
            </div>
            <div className="reveal order-1 flex justify-center md:order-2">
              <div className="relative" data-parallax="28">
                <div className="absolute -inset-3 rounded-[2rem] opacity-30 blur-2xl" style={{ background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)' }} aria-hidden="true" />
                <div className="relative h-[420px] w-[300px] overflow-hidden rounded-[2rem] shadow-2xl ring-4 ring-white/60">
                  <Image src="/images/photos/ruby-photo-1-hd.webp" alt="Teacher Ruby" fill className="object-cover object-top" sizes="300px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VineDivider />

      {/* ===================== Method ===================== */}
      <section id="method" className="section-pad relative overflow-hidden" style={{ background: 'linear-gradient(180deg, var(--cream) 0%, var(--sage-2) 100%)' }}>
        <div className="container mx-auto px-4">
          <div className="reveal mb-12 text-center">
            <h2 className="section-title">{t('method.sectionTitle')}</h2>
            <p className="section-subtitle mx-auto max-w-2xl">{t('featuredCourses.subtitle')}</p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-7 md:grid-cols-3">
            {methods.map((m, i) => (
              <div key={m.key} className="reveal card group text-center" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center">
                  <Image src={m.img} alt="" width={96} height={96} className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3" />
                </div>
                <h3 className="mb-2 font-display text-xl font-bold" style={{ color: 'var(--forest)' }}>
                  {t(`method.${m.key}.title`)}
                </h3>
                <p className="font-body text-[15px] leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                  {t(`method.${m.key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== Featured Courses ===================== */}
      <section id="courses-feature" className="section-pad relative overflow-hidden" style={{ background: 'var(--sage-2)' }}>
        <div className="pointer-events-none absolute -left-10 bottom-0 w-72 opacity-50" data-parallax="40" aria-hidden="true">
          <Image src="/images/generated/decorative-monstera.webp" alt="" width={320} height={320} className="h-auto w-full" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="reveal mb-10 text-center">
            <h2 className="section-title">{t('featuredCourses.sectionTitle')}</h2>
            <p className="section-subtitle">{t('featuredCourses.subtitle')}</p>
          </div>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            {[
              { key: 'adult', img: '/images/generated/course-adult-singing.webp' },
              { key: 'kids', img: '/images/generated/course-children-music.webp' },
            ].map((c) => (
              <Link key={c.key} href="/courses" className="reveal card group block overflow-hidden text-center">
                <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-xl">
                  <Image src={c.img} alt={t(`featuredCourses.${c.key}.title`)} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width:768px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 transition group-hover:opacity-100" />
                </div>
                <h3 className="mb-2 font-display text-xl font-bold" style={{ color: 'var(--forest)' }}>{t(`featuredCourses.${c.key}.title`)}</h3>
                <p className="font-body text-sm" style={{ color: 'var(--ink-2)' }}>{t(`featuredCourses.${c.key}.desc`)}</p>
              </Link>
            ))}
          </div>
          <div className="reveal mt-10 text-center">
            <Link href="/courses" className="btn-primary">{t('featuredCourses.viewAll')}</Link>
          </div>
        </div>
      </section>

      <VineDivider />

      {/* ===================== Works / Showcase ===================== */}
      <section id="works" className="section-pad relative overflow-hidden" style={{ background: 'linear-gradient(180deg, var(--sage) 0%, #cfe0c4 100%)' }}>
        <div className="container mx-auto px-4">
          <div className="reveal mb-10 text-center">
            <h2 className="section-title">{t('works.sectionTitle')}</h2>
          </div>
          <div className="reveal mx-auto mb-14 max-w-5xl">
            <h3 className="mb-4 text-center font-display text-xl font-bold" style={{ color: 'var(--teal)' }}>{t('works.teacherSectionTitle')}</h3>
            <WorksCarousel items={teacherItems} teacherLabel={t('works.teacherLabel')} studentLabel={t('works.studentLabel')} />
          </div>
          <div className="reveal mx-auto max-w-5xl">
            <h3 className="mb-4 text-center font-display text-xl font-bold" style={{ color: 'var(--teal)' }}>{t('works.studentSectionTitle')}</h3>
            <WorksCarousel items={studentItems} teacherLabel={t('works.teacherLabel')} studentLabel={t('works.studentLabel')} />
          </div>
        </div>
      </section>

      {/* ===================== Book CTA ===================== */}
      <section id="book-cta" className="relative overflow-hidden py-24 md:py-32">
        <Image src="/images/generated/book-scene.webp" alt="" fill className="object-cover" sizes="100vw" aria-hidden="true" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(120deg, rgba(26,58,46,.82) 0%, rgba(47,125,107,.62) 100%)' }} aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <div className="reveal glass-dark rounded-3xl px-8 py-12 shadow-2xl">
            <h2 className="font-display text-3xl font-bold text-white drop-shadow md:text-4xl">{t('cta.title')}</h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-lg text-white/90">{t('cta.subtitle')}</p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a href="https://wa.me/6582376302" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.118.56 4.108 1.534 5.839L0 24l6.335-1.495A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" /></svg>
                {t('cta.whatsapp')}
              </a>
              <Link href="/book" className="btn-secondary">{t('hero.bookTrial')}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
