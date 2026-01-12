import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getLocale} from 'next-intl/server';
import {ReactNode} from 'react';
import {Navbar} from '@/components/layout/Navbar';
import {Footer} from '@/components/layout/Footer'

export default async function LocaleLayout({
  children
}: {
  children: ReactNode;
}) {
  const messages = await getMessages();
  const locale = await getLocale();
  const isArabic = locale === 'ar';

  return (
       <NextIntlClientProvider messages={messages} locale={locale} timeZone="Asia/Riyadh">
      <div
        dir={isArabic ? 'rtl' : 'ltr'}
        className={
          'flex min-h-screen flex-col ' +
          (isArabic ? 'font-arabic' : 'font-body')
        }
      >
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
