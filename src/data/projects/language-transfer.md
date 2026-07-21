[Language Transfer](https://www.languagetransfer.org) is a free, donation-supported set of audio language courses
built on the idea that you already know more of a new language than you think. I've worked through the Spanish course and will soon start the French one, and I kept running into the same two frustrations: there's no way to see at a glance
what a given track teaches, and there's no vocabulary list to review between listens.

So I built the companion I wanted. The site is a fully static **Astro** build - no client-side framework, every page
prerendered to plain HTML - with a small parser that turns a `summaries.md` file and a `course.json` manifest into
typed, structured content. Each course gets a page with **per-track topic summaries** grouped into thematic parts, so
you can find, preview, or revisit a lesson without scrubbing through the audio.

The second half of the project is the **flashcard decks**: vocabulary extracted from the freely-available course
transcripts and exported as plain headerless CSVs, ready to import straight into Anki, Quizlet, or any spaced-repetition
app. A prebuild step bundles them into per-course zips. The decks live in their own repository so they can be used
independently of the site.

Adding a new language means dropping in two content files and one line in the registry - the page generates itself.
Spanish, French and Italian are live; German, Greek, Turkish, Arabic and Swahili render as "coming soon" cards so
contributors know what's missing.

This is an independent fan project, not affiliated with or endorsed by Language Transfer. Their courses are free -
please go listen.
