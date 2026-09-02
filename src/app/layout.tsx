import React from 'react';

import '@/app/globals.css';

import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';

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
    <html lang="en" className={`${DMSansFont.className}  h-full antialiased`}>
      <body className="bg-cv-background text-cv-text">
        <div className="max-w-[min(calc(100vw-40px),800px)] mx-auto min-h-[calc(100vh-150px)]">
          <Header />
          <div className="flex justify-between items-center">
            <NavTitle />
            <Nav />
          </div>
          <section>{children}</section>
        </div>
        <Footer />
      </body>
    </html>
  );
}
