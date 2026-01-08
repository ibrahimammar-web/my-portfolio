import {getTranslations, getLocale} from 'next-intl/server';

export default async function HomePage() {
  const t = await getTranslations('hero');
  const locale = await getLocale();
  const isArabic = locale === 'ar';

  return (
    <div dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="min-h-screen bg-slate-950 text-slate-100 p-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-emerald-400 mb-2">{t('subtitle')}</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('title')}</h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl">{t('description')}</p>
        </div>
      </div>
    </div>
  );
}