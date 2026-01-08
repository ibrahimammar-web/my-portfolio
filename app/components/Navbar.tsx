'use client';

import {useTranslations, useLocale} from 'next-intl';
import {usePathname, useRouter} from 'next/navigation';

const locales = ['en', 'ar', 'de'] as const;

export function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(nextLocale: string) {
    if (nextLocale === locale) return;
    const segments = pathname.split('/');
    segments[1] = nextLocale;
    const nextPath = segments.join('/') || '/';
    router.push(nextPath);
  }

  const basePath = `/${locale}`;

  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <a href={basePath} className="text-sm font-semibold tracking-tight">
          Abdulrahman.dev
        </a>

        <div className="flex items-center gap-4 text-xs">
          <a
            href={basePath}
            className="text-slate-300 hover:text-emerald-400"
          >
            {t('home')}
          </a>
          <a
            href={`${basePath}/projects`}
            className="text-slate-300 hover:text-emerald-400"
          >
            {t('projects')}
          </a>
          <a
            href={`${basePath}/contact`}
            className="text-slate-300 hover:text-emerald-400"
          >
            {t('contact')}
          </a>
        </div>

        <div className="flex items-center gap-4">
          {/* Social links */}
          <div className="hidden items-center gap-3 text-xs text-slate-400 sm:flex">
            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400"
            >
              LinkedIn
            </a>
            <a
              href="https://www.upwork.com/freelancers/your-upwork"
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400"
            >
              Upwork
            </a>
            <a
              href="https://www.instagram.com/your-instagram"
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400"
            >
              Instagram
            </a>
          </div>

          {/* Language switcher */}
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
        </div>
      </nav>
    </header>
  );
}
