import {getTranslations, getLocale} from 'next-intl/server';

export default async function ProjectsPage() {
  const t = await getTranslations('projects');
  const locale = await getLocale();
  const isArabic = locale === 'ar';

  return (
    <div dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="text-2xl font-semibold tracking-tight">
          {t('title')}
        </h1>
        <p className="mt-2 text-sm text-slate-300">
          {t('subtitle')}
        </p>

        <div className="mt-8 grid gap-6">
          <article className="rounded-lg border border-slate-800 bg-slate-900/40 p-5">
            <h2 className="text-lg font-semibold">{t('example.name')}</h2>
            <p className="mt-2 text-sm text-slate-300">
              {t('example.description')}
            </p>
            <p className="mt-3 text-xs text-slate-400">
              {t('example.tech')}
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}
