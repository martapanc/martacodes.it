McGraw-Hill publishes free companion flashcards for its language-learning books through a web-based Language Lab. They
work fine in the browser and nowhere else – there's no export, so you can't fold them into the spaced-repetition app
you're already using.

This is a small **Go** program that downloads them and writes one CSV per chapter, in `output/<Book Name>/<Chapter>.csv`,
ready to import into <a href="https://ankiweb.net" target="_blank">Anki</a>,
<a href="https://www.brainscape.com" target="_blank">Brainscape</a> or anything else that reads two-column CSV. Each row
is a single card in `English,<target language>` order, with proper CSV quoting, HTML formatting tags stripped from the
card text, and chapter numbers zero-padded so the files sort correctly.

Configuration is a small JSON file: pick a language and a book, or set a flag to pull every book for a language, or
every book on the site. The flashcard site lists English, French, German, Italian and Spanish at the top level and
hides the rest – Arabic, Chinese, Japanese, Korean, Portuguese, Russian – behind an "Other" menu, which the scraper
expands automatically so those work exactly like the top-level ones.

Written in Go with no dependencies beyond the standard library, so it builds and runs anywhere without a toolchain
setup.
