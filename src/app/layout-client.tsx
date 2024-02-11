'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';
import * as React from 'react';
import { I18nextProvider } from 'react-i18next';

import i18n from '@/lib/i18n';

import meta from '@/data/meta.json';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <I18nextProvider i18n={i18n}>
      <NextThemeProvider
        attribute='class'
        defaultTheme={meta.defaultTheme}
        enableSystem={false}
      >
        <Header />

        <main id='content' className='min-h-main dark:bg-dark bg-white'>
          {children}
        </main>

        <Footer />
      </NextThemeProvider>
    </I18nextProvider>
  );
}
