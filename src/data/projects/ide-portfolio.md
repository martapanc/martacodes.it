An experiment in what a developer portfolio might look like if it stopped pretending to be a brochure site: <a href="https://martas-ide-portfolio.vercel.app/" target="_blank">a portfolio
rendered as a code editor</a>. There's a file tree down the left with `index.tsx`, `about.md`, `cv.tsx` and a
`projects/` folder, a tab bar, a status bar showing the branch and build state, and a **command palette** on `⌘K` for
jumping between "files".

The conceit is only useful if the content survives it, so each route is a real page – the CV, the work history, the
project write-ups, the contact details – that happens to be presented as an open file, with syntax highlighting used as a layout device rather than decoration. Content lives in a single typed `portfolio.ts` module, so the IDE chrome and the substance stay separable.

Built with **Astro 7** and **React** islands, with light and dark themes. Getting the light theme right took longer than the dark one: a syntax palette designed for a dark editor collapses to unreadable contrast ratios when you invert the background, so the token colours had to be rebuilt rather than flipped.

It's a side experiment rather than a replacement for <a href="https://martacodes.it" target="_blank">martacodes.it</a> – a portfolio that requires you to know what a command palette is has a fairly specific audience.
