'use client';

import {useState, useRef, useEffect} from 'react';
import Image from 'next/image';
import {useTranslations, useLocale} from 'next-intl';
import {usePathname, useRouter} from 'next/navigation';
import {FaGithub} from 'react-icons/fa';
import {RiInstagramFill} from 'react-icons/ri';
import {TfiLinkedin} from 'react-icons/tfi';
import {SiUpwork} from 'react-icons/si';

const locales = [
  {code: 'en', label: 'English', flagSrc: '/flags/en.svg'},
  {code: 'ar', label: 'العربية', flagSrc: '/flags/ar.svg'},
  {code: 'de', label: 'Deutsch', flagSrc: '/flags/de.svg'}
] as const;

export function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const isArabic = locale === 'ar';

  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const langRef = useRef<HTMLDivElement | null>(null);

  // غلق قائمة اللغة عند الضغط خارجها
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!langRef.current) return;
      if (!langRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    }

    if (langOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [langOpen]);

  function switchLocale(nextLocale: string) {
    if (nextLocale === locale) {
      setLangOpen(false);
      return;
    }
    const segments = pathname.split('/');
    segments[1] = nextLocale;
    const nextPath = segments.join('/') || '/';
    router.push(nextPath);
    setLangOpen(false);
  }

  const activeLocale = locales.find((l) => l.code === locale) ?? locales[0];
  const basePath = `/${locale}`;

  const links = [
    {href: basePath, label: t('about')},
    {href: `${basePath}/projects`, label: t('projects')},
    {href: basePath, label: t('skillsServices')},
    {href: basePath, label: t('caseStudies')},
    {href: basePath, label: t('testimonials')},
    {href: `${basePath}/contact`, label: t('contact')}
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        {/* Logo */}
        <a href={basePath} className="flex items-center gap-2">
          <Image
            src={isArabic ? '/ibrahim-logo-ar.svg' : '/ibrahim-logo.svg'}
            alt={isArabic ? 'إبراهيم عمار شعار' : 'Ibrahim Ammar logo'}
            width={100}
            height={100}
            priority
          />
        </a>

        {/* Links - Desktop */}
        <div  className={
          'hidden items-center gap-4 text-xs lg:flex '
        }>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-300 transition-colors duration-200 hover:text-emerald-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Social icons - Desktop */}
          <div className={
            'hidden items-center gap-2 lg:flex ' +
            (isArabic ? 'flex-row-reverse' : '')
          }>
            
            <a
              href="https://www.upwork.com/freelancers/your-upwork"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-700 bg-slate-900 p-1.5 text-slate-300 transition-colors duration-200 hover:border-emerald-500 hover:text-emerald-400"
              aria-label="Upwork"
            >
              <SiUpwork size={16} />
            </a>
            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-700 bg-slate-900 p-1.5 text-slate-300 transition-colors duration-200 hover:border-emerald-500 hover:text-emerald-400"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-700 bg-slate-900 p-1.5 text-slate-300 transition-colors duration-200 hover:border-emerald-500 hover:text-emerald-400"
            >
              <TfiLinkedin size={16} />
            </a>
            
            <a
              href="https://www.instagram.com/your-instagram"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-700 bg-slate-900 p-1.5 text-slate-300 transition-colors duration-200 hover:border-emerald-500 hover:text-emerald-400"
            >
              <RiInstagramFill size={16} />
            </a>
          </div>

          {/* Language dropdown */}
          <div ref={langRef} className="relative">
            <button
              type="button"
              onClick={() => setLangOpen((v) => !v)}
              className={
                'flex items-center gap-1 rounded-md border border-slate-700 bg-slate-900 px-2 py-1 text-xs text-slate-200 transition-colors duration-200 hover:border-emerald-500 '
              }
            >
              <Image
                src={activeLocale.flagSrc}
                alt={activeLocale.label}
                width={20}
                height={12}
              />
              <span className="hidden sm:inline text-[14px]">
                {activeLocale.label}
              </span>
              <span
                className={
                  'text-[20px] text-slate-400 ' +
                  (isArabic ? 'mr-1' : 'ml-1')
                }
              >
                {langOpen ? '▴' : '▾'}
              </span>
            </button>

            {langOpen && (
              <div
                className={
                  'absolute z-30 mt-1 w-36 rounded-md border border-slate-700 bg-slate-900 py-1 text-xs shadow-lg ' +
                  (isArabic ? 'left-0' : 'right-0')
                }
              >
                {locales.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => switchLocale(l.code)}
                    className={
                      'flex w-full text-[14px] items-center gap-2 px-2 py-1 text-left hover:bg-slate-800 ' +
                      (l.code === activeLocale.code
                        ? 'text-emerald-400'
                        : 'text-slate-200')
                    }
                  >
                    <Image
                      src={l.flagSrc}
                      alt={l.label}
                      width={18}
                      height={12}
                    />
                    <span>{l.label}</span>
                  </button>
                ))}
              </div>
            )}

          </div>

          {/* Burger menu - Mobile / Tablet */}
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-700 bg-slate-900 text-slate-200 transition-colors duration-200 hover:border-emerald-500 hover:text-emerald-400 lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            <span className="flex flex-col gap-0.75">
              <span
                className={
                  'block h-0.5 w-5 rounded bg-current transition-transform duration-200 ' +
                  (menuOpen ? 'translate-y-1.25 rotate-45' : '')
                }
              />
              <span
                className={
                  'block h-0.5 w-5 rounded bg-current transition-opacity duration-200 ' +
                  (menuOpen ? 'opacity-0' : '')
                }
              />
              <span
                className={
                  'block h-0.5 w-5 rounded bg-current transition-transform duration-200 ' +
                  (menuOpen ? '-translate-y-1.25 -rotate-45' : '')
                }
              />
            </span>

          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-slate-800 bg-slate-950 lg:hidden">
          <div
            className={
              'mx-auto flex max-w-5xl flex-col gap-2 px-4 py-3 text-sm ' 
            }
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-300 transition-colors duration-200 hover:text-emerald-400"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <div
              className={
                'mt-2 flex items-center gap-3'
              }
            >
              <a
                href="https://github.com/your-github"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 transition-colors duration-200 hover:text-emerald-400"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 transition-colors duration-200 hover:text-emerald-400"
              >
                <TfiLinkedin size={18} />
              </a>
              <a
                href="https://www.upwork.com/freelancers/your-upwork"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 transition-colors duration-200 hover:text-emerald-400"
              >
                <SiUpwork size={20} />
              </a>
              <a
                href="https://www.instagram.com/your-instagram"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 transition-colors duration-200 hover:text-emerald-400"
              >
                <RiInstagramFill size={18} />
              </a>
            </div>
          </div>
        </div>
      )}

    </header>
  );
}
