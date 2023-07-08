'use client';

import { ThemeProvider } from 'next-themes';
import type { PropsWithChildren } from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

export default function LayoutClient({ children }: PropsWithChildren) {
  return (
    <ThemeProvider attribute='class' defaultTheme='light' enableSystem={false}>
      <Header />

      <main id='content'>{children}</main>

      <Footer />
    </ThemeProvider>
  );
}
