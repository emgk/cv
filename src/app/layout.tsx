import React from 'react';
import { Analytics } from '@vercel/analytics/next';
import { DM_Sans } from 'next/font/google';
import type { Metadata } from 'next';

import '@/app/globals.css';

import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import Nav from '@/components/shared/Nav';
import NavTitle from '@/components/shared/NavTitle';

export const metadata: Metadata = {
  title: 'Govind Kumar',
  robots: { index: false, follow: false },
};

const DMSansFont = DM_Sans({
  variable: '--font-dm-sans',
  weight: '400',
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${DMSansFont.className} h-full antialiased`}>
      <body className="bg-cv-background text-cv-text">
        {/* Skip to main content — keyboard & screen-reader shortcut */}
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>
        <div className="max-w-[min(calc(100vw-40px),800px)] mx-auto min-h-[calc(100vh-150px)]">
          <Header />
          <div className="flex justify-between items-center">
            <NavTitle />
            <Nav />
          </div>
          <section id="main-content" tabIndex={-1}>
            {children}
          </section>
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
