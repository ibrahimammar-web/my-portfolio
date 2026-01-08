import {useTranslations} from 'next-intl';

export default function HomePage() {
  const t = useTranslations('hero');

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">{t('title')}</h1>
      <p className="mt-2 text-slate-300">{t('description')}</p>
    </div>
  );
}
