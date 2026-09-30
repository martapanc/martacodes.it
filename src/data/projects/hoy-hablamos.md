*Hoy Hablamos* is a Spanish-learning podcast with nearly three thousand episodes across its daily, grammar and premium
series, each with a transcript. Podcast apps are built for keeping up with the latest episode, not for studying a
back catalogue, so I built a private app that holds the lot: **2,961 episodes**, about 35 GB of audio, with the
transcript alongside every one.

It's a list you can search and filter by series and by listening status – unheard, in progress, heard – with star
ratings and sorting, and a full-screen player with 15- and 30-second skips, speed presets plus a fine slider, "mark as
listened", offline downloads and the transcript a tap away. Everything is stored on the device.

Like its sibling, the <a href="/projects?id=a-punt-companion">A punt companion</a>, it's a single self-contained
`index.html` with no framework, installed as a **PWA** on my phone and served by **Caddy** from an always-on Mac over
**Tailscale**, so it's reachable anywhere and exposed nowhere. A set of **Python** scripts downloads new episodes in
batches, builds the catalogue from the episode lists and transcript headers, and regenerates the icons.
