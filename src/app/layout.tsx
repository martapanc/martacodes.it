import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';
import React from 'react';

import '@/styles/globals.css';
import '@/styles/angles.css';

import meta from '@/data/meta.json';

import LayoutClient from '@/app/layout-client';

export const metadata = {
  authors: [
    {
      url: meta.href,
      name: meta.author,
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <LayoutClient>{children}</LayoutClient>

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

        {/* Vercel Speed Insights */}
        <SpeedInsights />
      </body>
    </html>
  );
}
