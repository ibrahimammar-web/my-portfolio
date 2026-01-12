// app/[lang]/page.tsx
import {getLocale} from 'next-intl/server';
import {Hero} from '@/components/home/Hero';

export default async function HomePage() {
  const locale = await getLocale();
  const isArabic = locale === 'ar';

  return (
    <div dir={isArabic ? 'rtl' : 'ltr'}>
      <Hero />
    </div>
  );
}
