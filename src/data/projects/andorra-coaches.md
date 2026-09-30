From Andorra, the nearest airports are over three hours away by road, and two coach operators run the route to Barcelona and
Toulouse – each with its own website, its own search, and no way to see both at once. **Andorra Coaches** is one screen
that answers one question: which coaches can I catch on a given date, across both operators? It merges them into a
single chronological list, with the next departure highlighted, and hands off to the operator's own booking page. It
never takes payment, never asks for personal data, and never logs in anywhere.

Neither operator has a public API, so the project started with reconnaissance – driving both sites in a real browser,
replaying the traffic server-side, and writing down exactly what each one does. One is a server-rendered form behind a
session cookie; the other is an Angular app over a white-label ticketing API, which in exchange gives real seat counts
and prices. Each is wrapped in an **adapter** behind a common contract, and the merge logic, stops table and adapters
live in a core package with no runtime dependencies.

It runs as a **Cloudflare Worker** that serves both the API and a **React** PWA built to be read at arm's length in a
bad-signal arrivals hall: large times, generous touch targets, real contrast. Traffic is kept at personal scale – one
search fans out to a handful of requests, results are cached for 60 seconds, and every request carries a descriptive
User-Agent with a contact address. When one operator fails, the page says so in plain language and still shows the
other's departures.

Scrapers break silently, so the test suite runs offline against captured real responses – including empty days and
rejected searches – while a separate set of **live contract tests** hits both operators and fails with the specific
anchor that moved rather than just "0 trips". A local launchd agent runs those every Monday morning and only raises a
notification when something actually broke.
