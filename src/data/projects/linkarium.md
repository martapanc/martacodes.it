_Drop your links. Share the list._ Linkarium is a small tool for turning a pile of URLs into a clean, shareable page –
paste them one per line, or paste a block of prose with links buried in it, and you get back a list with titles,
descriptions, favicons and preview images already filled in. No account needed to read one.

It's built with **Next.js 16** on the App Router with **TypeScript** and **Tailwind CSS 4**, backed by **Supabase** for
Postgres storage and full-text search, and deployed on **Vercel**. Link metadata comes from `open-graph-scraper`, and
list pages are server-rendered so that the OG tags are correct when someone shares the URL onward. Lists can be
searched, filtered by domain, sorted, reordered by drag-and-drop, and edited inline; duplicate URLs are flagged on
paste, and any individual link can be re-scraped if its metadata goes stale. The UI is localised in English and Italian
via `next-intl`, and a nightly **cron job** cleans up expired lists.

The fiddliest part turned out to be the least glamorous: extracting URLs from arbitrary pasted text. Links come wrapped
in Markdown citation syntax, trailed by sentence punctuation, or closed by a parenthesis that belongs to the sentence
rather than the URL – all of which produce a technically valid but wrong link. That parser ended up with the densest
test coverage in the project, backed by **Vitest** unit tests and a **Playwright** end-to-end suite.
