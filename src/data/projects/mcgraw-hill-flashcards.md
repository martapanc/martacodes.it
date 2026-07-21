McGraw Hill publish a free [Language Lab](https://mhe-language-lab.s3.amazonaws.com/index.html) of flashcards that
accompany their language textbooks. The material is genuinely good, but the site only lets you flip through cards one at
a time in the browser - there's no export, so none of it can go into a spaced-repetition app where it would actually
stick.

This is a small **Go** program that fixes that. It walks the flashcard site, picks up every card for a chosen book, and
writes **one CSV per chapter** into `output/<Book Name>/<Chapter Name>.csv`, ready to import into
[Anki](https://ankiweb.net) or Brainscape. Rows are `English,<target language>`, properly quoted and escaped, with the
HTML formatting tags stripped out of the card text so the output is clean plain text.

Configuration is a single git-ignored `config.json`: pick a language and a book, or flip a flag to pull every book for a
language - or the entire library. The site tucks Arabic, Chinese, Japanese, Korean, Portuguese and Russian behind an
"Other" menu; the scraper expands it automatically so those work exactly like the top-level languages.

I picked Go partly because a single self-contained binary with no runtime to install is the right shape for a utility
like this, and partly because I wanted an excuse to use it for something real.
