import './globals.css';
import {ReactNode} from 'react';
import {Cairo, Handjet, Space_Grotesk, Inter} from 'next/font/google';

const cairo = Cairo({
  subsets: ['arabic'],
  variable: '--font-arabic',
  weight: ['400', '500', '600', '700']
});

const handjet = Handjet({
  subsets: ['arabic', 'latin'],
  variable: '--font-arabic-heading',
  weight: ['400', '500', '600', '700']
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700']
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600']
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
     <html lang="en">
      <body
        className={`${cairo.variable} ${handjet.variable} ${spaceGrotesk.variable} ${inter.variable} bg-slate-950 text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}