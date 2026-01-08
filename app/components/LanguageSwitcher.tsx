'use client';

import {usePathname, useRouter} from 'next/navigation';
import {useLocale} from 'next-intl';

const locales = ['en', 'ar', 'de'] as const;

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  function switchLocale(nextLocale: string) {
    if (nextLocale === locale) return;

    const segments = pathname.split('/');
    segments[1] = nextLocale;
    const nextPath = segments.join('/') || '/';
    router.push(nextPath);
  }

  return (
    <div className="flex items-center gap-1 text-xs">
      {locales.map((l) => (
        <button
          key={l}
          onClick={() => switchLocale(l)}
          className={
            'rounded px-2 py-1 transition ' +
            (l === locale
              ? 'bg-emerald-500 text-slate-950 font-semibold'
              : 'text-slate-300 hover:bg-slate-800')
          }
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
