import {getTranslations} from 'next-intl/server';

export async function Footer() {
  const t = await getTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-slate-400 sm:flex-row">
        <p className="text-[11px]">
          {t('line2')}
        </p>
        <p>{t('line1', {year})}</p>
        
      </div>
    </footer>
  );
}
