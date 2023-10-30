'use client';

import Script from 'next/script';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';

import '@/styles/globals.css';
import '@/styles/animations.css';

import LayoutClient from '@/app/(public)/layout-client';

import i18n from './i18n';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <I18nextProvider i18n={i18n}>
      <html lang='en'>
        <head>
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon/favicon.ico'
          />

          {/* Cookie banner */}
          <Script
            id='cookieyes'
            type='text/javascript'
            src='https://cdn-cookieyes.com/client_data/343cca4a060bf9189f75d72e/script.js'
          ></Script>

          {/* Umami Analytics */}
          <Script
            async
            src='https://analytics.eu.umami.is/script.js'
            data-website-id='ab53ae74-58ea-44ff-b5fa-451b4f52c364'
          ></Script>
        </head>
        <body>
          <LayoutClient>{children}</LayoutClient>
        </body>
      </html>
    </I18nextProvider>
  );
}
