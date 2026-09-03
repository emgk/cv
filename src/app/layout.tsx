import React from 'react';
import { Analytics } from '@vercel/analytics/next';
import { DM_Sans } from 'next/font/google';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';

import '@/app/globals.css';

import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import Nav from '@/components/shared/Nav';
import NavTitle from '@/components/shared/NavTitle';
import ThemeToggle from '@/components/ui/ToggleTheme';

export const metadata: Metadata = {
  title: 'Govind Kumar',
  robots: { index: false, follow: false },
};

const DMSansFont = DM_Sans({
  variable: '--font-dm-sans',
  weight: '400',
  subsets: ['latin'],
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme')?.value;
  const initialTheme = theme === 'dark' ? 'dark' : 'light';

  return (
    <html
      lang="en"
      className={`${DMSansFont.className} h-full antialiased ${initialTheme === 'dark' ? 'dark' : ''}`}
    >
      <body className="bg-cv-background text-cv-text">
        {/* Skip to main content — keyboard & screen-reader shortcut */}
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>
        <div className="max-w-[min(calc(100vw-40px),800px)] mx-auto min-h-[calc(100vh-150px)]">
          <Header />
          <ThemeToggle initialTheme={initialTheme} />
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
