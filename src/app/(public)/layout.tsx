import { ReactNode } from 'react';

import '@/styles/globals.css';
import '@/styles/animations.css';

import LayoutClient from '@/app/(public)/layout-client';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <title>MartaCodes.it</title>
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/favicon.ico'
        />
      </head>
      <body>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
