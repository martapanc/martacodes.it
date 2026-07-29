A fork of <a href="https://github.com/Galdrial" target="_blank">Simone Camerano</a>'s _Italy Job Hunter_, an AI job-hunting automation tool for the Italian tech market. The original design is a three-stage pipeline: **Tavily** searches the web for listings, a fast, cheap **Groq** model does a boolean triage pass, and **DeepSeek-V3** analyses the survivors against your CV and writes a match report, which lands in **Telegram** as a formatted push notification. There's a second mode that scouts companies and drafts cold-outreach pitches instead.

I picked it up because the shape was right but the results weren't usable for the search I was actually running. My
additions are mostly about signal quality:

- A **career-scan mode** that skips the AI stages entirely and visits a curated list of company career pages directly
  with headless **Playwright**, reporting only postings it hasn't seen before. The list is partitioned by day of week, so a daily cron covers everything exactly once a week without hammering anyone.
- A **curated career-site list**, region- and remote-policy filtered, plus a company-seeding pass that pulls from public directories and rotates the hunt queries so successive runs don't return the same results.
- **Geo-restriction triage**: rejecting and flagging roles advertised as remote that are in practice restricted outside Europe – the single biggest source of false positives.
- Filtering out stale results, forum hosts, aggregator listing pages, and domains that hide postings behind a login wall.

The lesson that generalises: the expensive model was never the bottleneck. Nearly all of the improvement came from
being stricter about what reached it.
