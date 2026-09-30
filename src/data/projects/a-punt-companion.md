Learning Catalan, I use **A punt**, the course from Publicacions de l'Abadia de Montserrat, which comes with hours of
audio and a transcript PDF for every book. Listening to a language course on a music app turns out to be the wrong
shape: a track should play and then *stop*, and the controls you actually need when drilling a sentence are repeat, an
A–B loop and a speed dial – not shuffle. So I built a small player for it, with an interface in Catalan, because that's
the point.

It's a library with one card per book, each with its own colour taken from the cover, pinnable favourites and a way to
resume the last unfinished track. Each book lists its tracks by unit with search and filters by listening status or star
rating, and the player has repeat, A–B loops, opt-in auto-advance, speeds down to 0.6×, offline
downloads and the transcript for that exact track. Progress, "listened" marks and ratings stay on the device.

The whole app is one self-contained `index.html` – no framework, no build step – installed as a **PWA** on my phone,
with lock-screen controls. It's served by **Caddy** from an always-on Mac and reached over **Tailscale**, which is only
there to provide the HTTPS that iOS requires before it will run a service worker; nothing is exposed to the internet.

The interesting part is the preprocessing, in **Python**. The transcript PDFs are set in two or three columns with
mirrored margins, so the splitter measures each page's gutters from the word positions rather than assuming where they
are – a column cut in the wrong place silently swallows whole tracks. It lands 98–99% of each PDF's body text in the
right track file across all 292 tracks. Cover colours are lightened until they pass WCAG AA against the dark
background, and durations come from `ffprobe`. No course material lives in the repo: the code is the player, and you
need to own the books.
