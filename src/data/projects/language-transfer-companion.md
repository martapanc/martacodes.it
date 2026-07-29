<a href="https://www.languagetransfer.org" target="_blank">Language Transfer</a> is a free, donation-supported set of audio language courses built on a beautiful premise: you're taught to _think_ in the new language, with nothing to read and nothing to memorise. I've been working through them, and kept running into the same two gaps – there's no way to find the track where a particular topic was explained, and no vocabulary list for the moments when you _do_ want to drill the words.

So I built an **unofficial companion site** to fill them in: <a href="https://language-transfer-companion.netlify.app/" target="_blank">Language Transfer Companion</a>. For every course it
provides a **searchable per-track topic list**, grouped into thematic parts with a one-line summary of what each track
teaches, and **downloadable flashcard decks** exported as plain CSV, ready to import into Anki, Quizlet or any other
spaced-repetition app.

It currently covers **Spanish** (90 tracks, 1,034 cards), **German** (50 tracks, 741 cards), **Italian** (45 tracks, 350
cards) and **French** (40 tracks, 355 cards), with Greek, Turkish, Arabic and Swahili marked as coming soon.

The site is built with **Astro** and **Tailwind CSS**, and ships as pure prerendered HTML – no client-side framework at all, which keeps it fast and makes the whole thing hostable as static files. Each course lives in the repo as a
`summaries.md` file plus a small `course.json` manifest, parsed at build time into typed data; adding a new language is a matter of dropping in those two files and their CSV decks, and a new page is generated automatically.

> This is an independent fan project, not affiliated with or endorsed by Language Transfer. The courses themselves are
> free – please go listen to them, and support the people who make them.
