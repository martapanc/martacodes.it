Learning Catalan, I found myself instinctively colour-coding verbs in my notes to keep the irregulars
straight – Catalan has thousands of verbs, but only a few dozen *patterns* by which they conjugate. So I
built **conju.gat** on a single bet: if you learn the pattern, you've learned the whole family, not one
verb at a time. It covers the ten tenses you actually use – present, the two compound pasts, imperfect,
future, conditional, both subjunctives, imperative and participle – in the order a learner needs them
rather than the order a grammar book lists them. The *passat simple* is deliberately left out: it's
literary in central Catalan, and drilling it would teach the wrong register.

A pattern is a whole paradigm, not a tense. `viatjar` writes *viatjo* with a **j** and *viatges* with a
**g** for the same reason it writes *viatgi*: one mechanism, visible everywhere. So a verb carries one
sign, and that sign is true in every tense. The present very nearly determines the rest, but not quite –
clustering on all tenses at once gives **85 patterns** where the present alone gives 43, because some
distinctions only surface in the subjunctive or imperative.

The visual language is Miró inside a table of paradigms: yellow, red and blue primaries plus black,
flat colour, black line, no curvature. Three primaries aren't enough to tell 85 patterns apart, so
each sign carries **two** pieces of information – colour says which conjugation the mechanism belongs
to, and shape (square, circle, triangle, diamond, cross, star, crescent) says which subtype, and the
build asserts that every pattern ends up with a unique sign. The huge regular class – 64% of all verbs –
gets a hollow square in plain ink, deliberately colourless: hollow means "nothing to remember." The
irregulars sit at the opposite extreme, a tone of their own each. Neither reading is ever reused for
anything else, and the sign never appears without the pattern's full name next to it.

Three modes share the same full-screen, one-cell-at-a-time layout, with the six grammatical persons
always in the same order and position so spatial memory does the work – which is why the imperative
keeps an empty `jo` row instead of shifting everything up: **Consulta** looks up a verb's paradigm in
any tense alongside others that share its mechanism, **Digues-ho** has you conjugate aloud and
self-assess cell by cell, and **Escriu-ho** has you type all six forms, accents included. Progress is
tracked per verb *and* tense, since knowing `dir` in the present says nothing about the subjunctive; the
practice deck prioritises whichever you get wrong most, and nothing leaves the device.

The dataset behind it is the part I'm proudest of. **Softcatalà**'s dictionary is the source of truth
and **verbecc**'s conjugation templates are only the tiebreaker – the templates are a guess, and 29 verbs,
including `ser`, `néixer` and `saber`, have one that can't even be applied to their infinitive. Every
cell is then resolved by a short ladder of rules that keeps central Catalan forms and rejects Balearic
and Valencian variants, counting where template and dictionary already *agree* rather than raw frequency.
Current state: 8,583 verbs, 385,891 forms, zero cells needing review. The four verbs that still need a
hand-written override can only pick between forms the dictionary already has – the build refuses to run
otherwise, since an override is the one place a typo could reach a learner.

Built with **Next.js 16** and **TypeScript**, self-hosting its three typefaces via `next/font` so the
typography survives offline too (and all three render the geminated `l·l` correctly, checked by hand),
and shipped as an installable **PWA** with a service worker. The data pipeline itself is **Python**:
fetch, build, palette-assign, export – four stages that turn two GPL-2.0 upstream sources into the
compact JSON the app actually ships.
