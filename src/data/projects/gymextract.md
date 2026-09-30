My gym runs on Technogym equipment, which logs every set, rep and treadmill second to the mywellness.com portal – and
then keeps it there. There's no usable public API (the official one is gated behind a B2B partnership), so
**gymextract** uses the same internal endpoints the web app calls from the browser, and exports every session in a date
range as clean JSON: per-exercise sets, reps and weights, calories, Technogym's per-muscle volume scores, and for cardio
the full per-second speed, heart-rate and elevation series.

It builds on <a href="https://github.com/lcanis/gymexport" target="_blank">an existing exporter</a> whose per-set
data came from scraping HTML, and which came back empty for every strength exercise. Replacing the scrape with the
structured steps already present in the session JSON took the capture from **0 of 75** strength exercises with sets to
**75 of 75**, and a 25-session export from minutes to under nine seconds. The pipeline is documented step by step,
including the vestigial login fields and the bootstrap payload that has to be regex-scraped for the API to answer at
all.

On top of it sits a small **React** + **TypeScript** dashboard, fed by a pre-built JSON bundle rather than any live
API: strength progression per machine (tonnage or max weight, absolute or normalised), muscle balance, visit cadence,
calories and cardio pace. A **launchd** job syncs the latest sessions every day, and grouping is by Technogym's own
canonical equipment taxonomy rather than the display names, which change from one gym to the next.
