export const runtime = 'edge';

import { useTranslations } from 'next-intl';

export default function BookPage() {
  const t = useTranslations();

  const trialItems = [
    t('book.trial1'),
    t('book.trial2'),
    t('book.trial3'),
    t('book.trial4'),
  ];

  return (
    <>
      {/* ========== Header Section ========== */}
      <section className="wave-bg relative py-16 md:py-24">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-blue-dark mb-4">
            {t('book.pageTitle')}
          </h1>
          <p className="text-xl text-gray-600 font-body max-w-2xl mx-auto">
            {t('book.pageSubtitle')}
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" className="w-full h-auto" preserveAspectRatio="none">
            <path
              d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,40 1440,35 L1440,60 L0,60 Z"
              fill="#f0f5ec"
            />
          </svg>
        </div>
      </section>

      {/* ========== Trial Lesson Info ========== */}
      <section className="bg-[#f0f5ec] py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="section-title text-center mb-10">
            {t('book.trialTitle')}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {trialItems.map((item, index) => (
              <div
                key={index}
                className="card flex items-start gap-4 border-l-4 border-brand-green"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-green/20 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-brand-green-dark"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-body text-lg text-brand-blue-dark font-semibold pt-1.5">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WhatsApp CTA ========== */}
      <section className="bg-[#eaf2e6] py-16 md:py-20">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="section-title mb-4">
            {t('book.whatsappTitle')}
          </h2>
          <p className="text-gray-600 font-body text-lg mb-8">
            {t('book.whatsappDesc')}
          </p>

          <a
            href="https://wa.me/6582376302"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-2xl"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.118.56 4.108 1.534 5.839L0 24l6.335-1.495A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82a9.78 9.78 0 01-5.29-1.543l-.379-.227-3.932.928.993-3.842-.249-.396A9.78 9.78 0 012.18 12c0-5.418 4.402-9.82 9.82-9.82S21.82 6.582 21.82 12s-4.402 9.82-9.82 9.82z" />
            </svg>
            {t('book.whatsappBtn')}
          </a>

          <p className="mt-6 text-gray-500 font-body">
            <span className="font-semibold">+65 8237 6302</span>
          </p>
        </div>
      </section>

      {/* ========== Google Calendar Embed ========== */}
      <section className="bg-[#f5f7f2] py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="section-title text-center mb-2">
            {t('book.calendarTitle')}
          </h2>
          <p className="text-center text-gray-500 font-body mb-8">
            {t('book.calendarDesc')}
          </p>

          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=rubyzhou25%40gmail.com&ctz=Asia%2FSingapore&mode=WEEK&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0"
              className="w-full border-0"
              style={{ minHeight: '600px' }}
              title={t('book.calendarTitle')}
            />
          </div>
        </div>
      </section>
    </>
  );
}
