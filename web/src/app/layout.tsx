import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Open_Sans, Roboto_Slab } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';

import './globals.css';
import { Providers } from './providers';

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
});

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-slab',
  weight: ['100', '400', '700'],
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display',
});

export const metadata: Metadata = {
  title: 'My Portfolio - Vignesh Acharya',
  description: 'Portfolio website - Vignesh Acharya',
  applicationName: 'My Portfolio',
  authors: [
    { url: 'https://github.com/Vignesh7050/', name: 'Vignesh Acharya' },
  ],
  keywords: [
    'Portfolio',
    'ReactJs',
    'NextJs',
    'SEO',
    'SSR',
    'SSG',
    'Vignesh Acharya',
    'server components',
    'client components',
  ],
  publisher: 'Vercel',
  robots: 'index, follow',
  appleWebApp: {
    capable: true,
    title: 'My Portfolio - Vignesh Acharya',
    statusBarStyle: 'default',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <GoogleTagManager gtmId={process.env.GTM_ID || ''} />
      <body
        className={`${robotoSlab.className} ${playfairDisplay.variable} ${openSans.variable}`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
