import { AppProps } from 'next/app';

import RootLayout from '@/app/(public)/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
