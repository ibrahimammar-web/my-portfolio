'use client';

import {useTranslations, useLocale} from 'next-intl';
import {DownloadIcon} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {NeuralButton} from '@/components/shadcn-studio/ui/neural-button';

export function Hero() {
  const t = useTranslations('home.hero');
  const locale = useLocale();
  const isArabic = locale === 'ar';
        t('label');
        t('subtitle');
        t('ctaPrimary');
        t('ctaSecondary');
        t('availability');
        t('videoLabel');


  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* خلفية بسيطة (gradient + grid) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#22c55e22,transparent_60%),radial-gradient(circle_at_bottom,#06b6d422,transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-size-[80px_80px]" />

      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-4 py-16 text-center md:max-w-6xl">
        {/* Label */}
        <p className="mb-3 inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/5 px-3 py-1 text-xs font-medium text-emerald-300">
          {t('label')}
        </p>

        {/* H1 */}
        <h1
        className={
          'mb-4 text-balance text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-slate-50 ' +
          (isArabic ? 'font-arabic-heading leading-arabic-heading' : 'font-heading')
        }
      >
        {t('title')}
      </h1>

        {/* Subheading */}
        <p className="mb-6 max-w-3xl text-balance text-sm text-slate-300 sm:text-base">
          {t('subtitle')}
        </p>

        {/* CTAs */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-5">
          <Button size="lg" variant="outline" className="bg-transparent border-emerald-500 border-dashed shadow-none text-emerald-300 hover:bg-emerald-500/10 hover:text-emerald-200">
            <DownloadIcon className="size-4" />
            {t('ctaPrimary')}
          </Button>
          <NeuralButton>
            {t('ctaSecondary')}
          </NeuralButton>
        </div>

        {/* Availability line */}
        {/* <p className="mb-8 text-xs text-slate-400">
          {t('availability')}
        </p> */}

        {/* Video card placeholder */}
        <div className="w-full max-w-3xl">
          <p
            className={
              'mb-2 text-xs font-medium uppercase tracking-wide text-slate-400 ' +
              (isArabic ? 'text-right' : 'text-left')
            }
          >
            {t('videoLabel')}
          </p>
          <div className="aspect-video overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 shadow-xl shadow-emerald-500/10">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/VIjFxZgi6AM?si=NmKR0DO0PhDWusK2"
              title="60-second intro"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

        </div>
      </div>
    </section>
  );
}
