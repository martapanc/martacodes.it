Learning Catalan, I found myself instinctively colour-coding verbs in my notes to keep the irregulars
straight – Catalan has thousands of verbs, but only a few dozen *patterns* by which they conjugate. So I
built **conju.gat** on a single bet: if you learn the pattern, you've learned the whole family, not one
verb at a time. Right now it covers the present indicative, with more tenses planned.

The visual language is Miró inside a table of paradigms: yellow, red and blue primaries plus black,
flat colour, black line, no curvature. Three primaries aren't enough to tell 51 patterns apart, so
each sign carries **two** pieces of information – colour says which conjugation the mechanism belongs
to, and shape (circle, square, triangle, diamond, cross, star, crescent, filled or hollow) says which
subtype. The huge regular class – 64% of all verbs – gets a hollow black square, deliberately
colourless: hollow means "nothing to remember." Filled black, the opposite extreme, is reserved for
the ten true irregulars. Neither reading is ever reused for anything else, and the sign never appears
without the pattern's full name next to it.

Three modes share the same full-screen, one-cell-at-a-time layout, with the six grammatical persons
always in the same order and position so spatial memory does the work: **Consulta** looks up a verb's
paradigm alongside others that share its mechanism, **Digues-ho** has you conjugate aloud and
self-assess cell by cell, and **Escriu-ho** has you type all six forms, accents included. The practice
deck prioritises whichever verbs you get wrong most; progress lives in `localStorage`, nothing leaves
the device.

The dataset behind it is the part I'm proudest of. **verbecc**'s conjugation templates generate the
raw forms, but every single form is then checked against the **Softcatalà** dictionary rather than
trusted blindly. Twenty-nine verbs – including `ser`, `ésser`, `néixer` and `saber` – turned out to
have a structurally wrong template that silently dropped their forms instead of producing visibly
wrong ones, exactly the kind of bug that's invisible until you go looking for it. For a study app,
teaching the wrong conjugation is the worst possible failure mode, so the validation step isn't
optional: current state is 8,582 verbs, 51 patterns, zero unverified forms.

Built with **Next.js 16** and **TypeScript**, self-hosting its three typefaces via `next/font` so the
typography survives offline too, and shipped as an installable **PWA** with a service worker. The data
pipeline itself is **Python**: fetch, build, palette-assign, export – four stages that turn two GPL-2.0
upstream sources into the compact JSON the app actually ships.
