import {getTranslations, getLocale} from 'next-intl/server';

export default async function ContactPage() {
  const t = await getTranslations('contact');
  const locale = await getLocale();
  const isArabic = locale === 'ar';

  return (
    <div dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="mx-auto max-w-md px-4 py-10">
        <h1 className="text-2xl font-semibold tracking-tight">
          {t('title')}
        </h1>
        <p className="mt-2 text-sm text-slate-300">
          {t('subtitle')}
        </p>

        <form className="mt-8 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-200">
              {t('form.name')}
            </label>
            <input
              className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none focus:border-emerald-500"
              type="text"
              name="name"
              placeholder={t('form.namePlaceholder')}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-200">
              {t('form.email')}
            </label>
            <input
              className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none focus:border-emerald-500"
              type="email"
              name="email"
              placeholder={t('form.emailPlaceholder')}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-200">
              {t('form.message')}
            </label>
            <textarea
              className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none focus:border-emerald-500"
              name="message"
              rows={5}
              placeholder={t('form.messagePlaceholder')}
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400"
          >
            {t('form.submit')}
          </button>
        </form>
      </div>
    </div>
  );
}
