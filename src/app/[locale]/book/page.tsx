export const runtime = 'edge';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

const WA = 'https://wa.me/6582376302';

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.118.56 4.108 1.534 5.839L0 24l6.335-1.495A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82a9.78 9.78 0 01-5.29-1.543l-.379-.227-3.932.928.993-3.842-.249-.396A9.78 9.78 0 012.18 12c0-5.418 4.402-9.82 9.82-9.82S21.82 6.582 21.82 12s-4.402 9.82-9.82 9.82z" />
    </svg>
  );
}

export default function BookPage() {
  const t = useTranslations();
  const trialItems = [t('book.trial1'), t('book.trial2'), t('book.trial3'), t('book.trial4')];

  return (
    <>
      {/* ===== Hero band ===== */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <Image src="/images/generated/book-scene.webp" alt="" fill className="object-cover" sizes="100vw" aria-hidden="true" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(120deg, rgba(18,42,32,.84) 0%, rgba(47,125,107,.66) 100%)' }} aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <h1 className="display-hero text-white drop-shadow-[0_3px_16px_rgba(12,30,22,0.6)]" style={{ fontSize: 'clamp(2.2rem,5vw,3.6rem)' }}>
            {t('book.pageTitle')}
          </h1>
          <p className="mt-4 font-body text-lg text-white/95 md:text-xl">{t('book.pageSubtitle')}</p>
          <div className="mt-8">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <WhatsAppIcon className="h-6 w-6" /> {t('book.whatsappBtn')}
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-[6]" aria-hidden="true">
          <svg viewBox="0 0 1440 70" className="h-auto w-full" preserveAspectRatio="none">
            <path d="M0,38 C320,72 760,4 1120,32 C1280,44 1380,42 1440,38 L1440,70 L0,70 Z" fill="var(--sage)" />
          </svg>
        </div>
      </section>

      {/* ===== Trial includes ===== */}
      <section className="section-pad" style={{ background: 'linear-gradient(180deg, var(--sage) 0%, var(--cream) 100%)' }}>
        <div className="container mx-auto max-w-3xl px-4">
          <div className="mb-10 text-center">
            <p className="eyebrow mx-auto w-fit" aria-hidden="true">♪</p>
            <h2 className="section-title">{t('book.trialTitle')}</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {trialItems.map((item, i) => (
              <div key={i} className="card flex items-start gap-4">
                <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full" style={{ background: 'color-mix(in srgb, var(--teal) 18%, transparent)' }}>
                  <svg className="h-5 w-5" style={{ color: 'var(--teal)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="pt-1 font-body text-lg font-semibold" style={{ color: 'var(--forest)' }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="vine-divider" aria-hidden="true">
        <Image src="/images/generated/divider-vine.webp" alt="" width={1440} height={90} className="h-full w-full object-contain" />
      </div>

      {/* ===== Book via WhatsApp (primary) ===== */}
      <section className="section-pad" style={{ background: 'var(--sage-2)' }}>
        <div className="container mx-auto max-w-2xl px-4 text-center">
          <h2 className="section-title">{t('book.whatsappTitle')}</h2>
          <p className="lead mx-auto mt-2 mb-8 max-w-xl">{t('book.whatsappDesc')}</p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-xl">
            <WhatsAppIcon className="h-7 w-7" /> {t('book.whatsappBtn')}
          </a>
          <p className="mt-6 font-body" style={{ color: 'var(--ink-2)' }}>
            <span className="font-semibold">+65 8237 6302</span>
          </p>
        </div>
      </section>

    </>
  );
}
