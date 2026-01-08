import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({requestLocale}) => {
  const locale = (await requestLocale) ?? 'en';

  const supported = ['en', 'ar', 'de'] as const;
  const finalLocale = supported.includes(locale as any) ? locale : 'en';

  return {
    locale: finalLocale,
    messages: (await import(`../messages/${finalLocale}.json`)).default
  };
});