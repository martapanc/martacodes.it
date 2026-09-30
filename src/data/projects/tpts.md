The landing page for **Taylor Pancaldi Technology Services**, the Andorran company I run: two engineering practices –
product development, and infrastructure design and operation – under one roof. It's a fully static **Astro** site
translated from a Claude Design concept, in Catalan first and English second.

The interesting part is how small the i18n is. No component imports a language: each route is a two-line file that hands
a `copy` object to the one layout, and both languages implement the same `Copy` interface, so a key that's missing or
renamed in one of them is a **type error** rather than a silently untranslated page. Each language owns its anchor
slugs, `<html lang>`, `og:locale` and `hreflang` alternates, and adding a third language is one file to translate and
one line to register it.
