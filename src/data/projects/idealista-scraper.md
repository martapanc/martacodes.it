House hunting across two countries means comparing listings that live on a dozen different portals, none of which let
you export anything. This started as a pair of **Python** scrapers that took a list of property URLs from
<a href="https://immobiliare.it" target="_blank">Immobiliare</a> and
<a href="https://www.idealista.it/" target="_blank">Idealista</a> and flattened them into a CSV I could actually sort
and filter.

It grew from there. The current version is a **configurable multi-site scraper**: the site-specific parts – CSS
selectors, URL patterns, pagination rules – live in **SQLite** tables rather than in code, so adding a new estate agent is a matter of inserting rows and re-running, with no Python to write. Field rules support CSS selectors, regexes against the page text, and regexes against the listing URL itself, which between them cover most of what small agency sites do. Listing photos are downloaded into per-site directories, and everything lands in timestamped CSVs.

Alongside the generic engine there are dedicated scrapers for the portals that need special handling, including a
handful of Andorran agencies. Idealista in particular fronts everything with bot protection, which the scraper handles
by driving a stealth browser rather than issuing plain HTTP requests – the practical lesson being that the scraping
itself is easy and staying unblocked is the whole problem.

The repo also picked up its first outside contribution, a pull request extending the Idealista listing-URL expansion
with pagination and safer parsing.
