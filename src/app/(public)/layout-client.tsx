'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';
import type { PropsWithChildren } from 'react';

import MuiThemeProvider from '@/components/helpers/MuiThemeProvider';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

export default function LayoutClient({ children }: PropsWithChildren) {
  return (
    <NextThemeProvider
      attribute='class'
      defaultTheme='light'
      enableSystem={false}
    >
      <MuiThemeProvider>
        <Header />

        <main id='content'>{children}</main>

        <Footer />
      </MuiThemeProvider>
    </NextThemeProvider>
  );
}
