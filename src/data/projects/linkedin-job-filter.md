Job hunting from Andorra taught me that "Remote" on LinkedIn means almost nothing. A large share of listings tagged
remote quietly require you to already live in a specific country - and you only find that out three paragraphs into the
description, after you've read the other two hundred words.

This **Chrome extension** reads that for me. It watches the LinkedIn job detail panel, auto-analyses each listing you
open, and drops a colour-coded verdict into the corner of the page: ✅ suitable, ⚠️ worth reviewing, ❌ not suitable.
The centrepiece is a **location reality check** that specifically looks for the gap between the "Remote" label and the
actual residency requirement buried in the text. Alongside it, the panel lists red flags and positives and pulls out the
facts you'd otherwise have to hunt for: seniority, tech stack, salary, contract type.

It runs on either **Google Gemini** (free tier, no billing setup) or a **local model through Ollama**, where nothing
about your job search leaves your machine. Built with **Plasmo** and **TypeScript**; your preferences - where you're
based, required keywords, phrases that should raise a warning - live in the popup and are injected into the prompt at
runtime, so the prompt itself carries no personal data.

The design decision I'm happiest with is what I *didn't* give the model. Timezone compatibility is resolved
deterministically in the service worker: named zones are converted to UTC offsets and compared numerically against your
acceptable range. Asking an LLM to do arithmetic on timezone abbreviations is a reliable way to get a confident wrong
answer, and this is the sort of check you want to be boring.
