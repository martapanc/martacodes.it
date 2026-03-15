# MartaCodes.it

![GitHub deployments](https://img.shields.io/github/deployments/martapanc/martacodes.it/Production?label=Vercel%20Deployment)
![GitHub package.json version](https://img.shields.io/github/package-json/v/martapanc/martacodes.it)
![GitHub last commit](https://img.shields.io/github/last-commit/martapanc/martacodes.it)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/3e42a59f8d5d4a3da9430f55cb486c06)](https://app.codacy.com/gh/martapanc/martacodes.it/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)

Source code of my personal website: [martacodes.it](https://martacodes.it/)

## Tech Stack

| Category   | Technology                                                                                                                                                  |
|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Framework  | [Next.js 16](https://nextjs.org/) (App Router) · [React 18](https://react.dev/)                                                                             |
| Language   | [TypeScript 5](https://www.typescriptlang.org/)                                                                                                             |
| Styling    | [Tailwind CSS 3](https://tailwindcss.com/) · [Emotion](https://emotion.sh/) · [Styled Components](https://styled-components.com/) · [MUI](https://mui.com/) |
| Animations | [Framer Motion](https://www.framer-motion.com/) · [Typed.js](https://mattboldt.com/demos/typed-js/)                                                         |
| i18n       | [i18next](https://www.i18next.com/) · [react-i18next](https://react.i18next.com/) (EN / IT)                                                                 |
| Forms      | [Formik](https://formik.org/) · [Yup](https://github.com/jquense/yup) · [reCAPTCHA v3](https://www.google.com/recaptcha/)                                   |
| Email      | [Resend](https://resend.com/) · [Nodemailer](https://nodemailer.com/)                                                                                       |
| Data Viz   | [AMCharts 5](https://www.amcharts.com/) · [Visx](https://airbnb.io/visx/) · [React Simple Maps](https://www.react-simple-maps.io/)                          |
| Images     | [Cloudinary](https://cloudinary.com/) (next-cloudinary)                                                                                                     |
| Testing    | [Jest](https://jestjs.io/) · [React Testing Library](https://testing-library.com/)                                                                          |
| Components | [Storybook](https://storybook.js.org/)                                                                                                                      |
| Deployment | [Vercel](https://vercel.com/)                                                                                                                               |

## Features

- **Dark mode** — system-aware toggle with `next-themes` and Tailwind `class` strategy
- **Internationalisation** — English and Italian locales via i18next
- **Contact form** — Formik + Yup validation, reCAPTCHA v3, email via Resend
- **Markdown content** — project descriptions with syntax highlighting and GFM tables
- **Data visualisations** — world map, skill charts, word cloud
- **SEO** — auto-generated sitemap, Open Graph images, meta tags
- **Analytics** — Vercel Speed Insights, Umami Analytics
- **Storybook** — component documentation on port 6006

## Project Structure

```
src/
├── app/              # Next.js App Router pages & layouts
├── components/
│   ├── atoms/        # Basic UI elements (buttons, links, headings)
│   ├── molecules/    # Composed components (forms, theme toggle)
│   ├── organisms/    # Complex sections (home, about, cv, projects)
│   ├── pages/        # Page-level wrapper components
│   └── layout/       # Header, Footer, navigation
├── data/
│   ├── locales/      # i18n translation files (en / it)
│   └── projects/     # Project descriptions in Markdown
├── hooks/            # Custom React hooks
├── lib/              # Utility functions, i18n config, logger
├── theme/            # Emotion / MUI theme setup
└── types/            # TypeScript type definitions
```

## Routes

| Route              | Description                         |
|--------------------|-------------------------------------|
| `/`                | Home                                |
| `/about`           | About me (includes `/about/travel`) |
| `/projects`        | Projects showcase                   |
| `/cv`              | CV / résumé                         |
| `/uses`            | Tools & setup                       |
| `/contacts`        | Contact form                        |
| `/recruiters-info` | Info for recruiters                 |

## Getting Started

**Prerequisites:** Node 22, Yarn 4.2.2

```bash
# Install dependencies
yarn install

# Start dev server (port 3007)
yarn dev
```

Copy `.env.example` to `.env.local` and fill in the required values:

```env
NEXT_PUBLIC_SHOW_LOGGER="false"
RECAPTCHA_SITE_KEY=
RECAPTCHA_SECRET_KEY=
SENDGRID_API_KEY=
```

## Scripts

```bash
yarn dev             # Start dev server on http://localhost:3007
yarn build           # Production build (also generates sitemap)
yarn start           # Start production server
yarn test            # Run Jest test suite
yarn lint            # ESLint check
yarn lint:fix        # Auto-fix lint issues and format
yarn typecheck       # TypeScript type check (no emit)
yarn format          # Prettier format all files
yarn storybook       # Storybook on http://localhost:6006
yarn build-storybook # Build static Storybook
```

## Code Quality

- **ESLint** — Next.js + TypeScript + Prettier rules, zero-warning policy
- **Prettier** — consistent formatting enforced on every commit
- **Husky + lint-staged** — pre-commit hooks run lint + format on staged files
- **Commitlint** — [Conventional Commits](https://www.conventionalcommits.org/) enforced
- **TypeScript** — strict mode enabled

## CI/CD

| Workflow             | Trigger             | Steps                                                                                        |
|----------------------|---------------------|----------------------------------------------------------------------------------------------|
| `lint.yml`           | Push / PR to master | ESLint · Typecheck · Prettier · Jest                                                         |
| `release-please.yml` | Push to master      | Automated semver releases via [Release Please](https://github.com/googleapis/release-please) |
| `create-branch.yml`  | Issue assigned      | Auto-creates feature branch from issue                                                       |

Deployment is handled automatically by **Vercel** on every push to `master`.

## Acknowledgements

<div align="center">
  <h3>🔋 ts-nextjs-tailwind-starter</h3>
  <p>Next.js + Tailwind CSS + TypeScript starter packed with useful development features.</p>
  <p>Made by <a href="https://theodorusclarence.com">Theodorus Clarence</a></p>
</div>