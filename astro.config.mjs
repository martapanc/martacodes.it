// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import Icons from 'unplugin-icons/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://martacodes.it',
  integrations: [react(), sitemap()],

  image: {
    service: { entrypoint: 'astro/assets/services/noop' },
    domains: ['res.cloudinary.com'],
  },

  vite: {
    // Icons compiles each `~icons/<collection>/<name>` import into a single
    // inline SVG component, so only the icons actually imported are bundled -
    // unlike `addCollection`, which ships a whole 4.5MB icon set.
    plugins: [tailwindcss(), Icons({ compiler: 'jsx', jsx: 'react' })],
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    build: {
      sourcemap: true,
    },
  },

  adapter: vercel(),
});