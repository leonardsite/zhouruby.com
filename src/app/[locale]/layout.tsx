import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../globals.css';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return {
    title: locale === 'zh'
      ? "Ruby's Music Rainforest | 音乐雨林工作室"
      : "Ruby's Music Rainforest Studio",
    description: locale === 'zh'
      ? '在音乐的雨林里，发现属于你的美妙歌喉。科学发声 · 音乐与自然 · 音乐与语言'
      : 'Discover your beautiful voice in the music rainforest. Scientific vocals · Music & Nature · Music & Language',
    icons: { icon: '/images/logo.png' },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
