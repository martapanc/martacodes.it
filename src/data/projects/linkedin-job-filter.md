Searching for remote work on LinkedIn means wading through listings tagged **Remote** that, several paragraphs in, turn out to require that you already live in a specific country. This **Chrome extension** reads each job ad as you open it and tells you before you've spent the time.

It watches the LinkedIn job detail panel, analyses each listing automatically, and injects a colour-coded verdict –
suitable, worth reviewing, or not suitable – along with the red flags, the positives, and the facts worth knowing at a
glance: seniority, tech stack, salary, contract type. The headline check is the **location reality check**: does this
"remote" role actually require local residency?

It runs on either **Google Gemini** through the free Google AI Studio tier, or a **local model via Ollama** with no API key and nothing leaving the machine. Getting local models to work well was most of the effort: Chrome extensions have a non-web origin, so Ollama's CORS policy blocks them unless it's started with `OLLAMA_ORIGINS="*"`, and the task needs reliable structured-JSON instruction-following rather than reasoning depth – `qwen2.5:7b` ended up the sweet spot, while reasoning models like `deepseek-r1` were strictly worse, paying a chain-of-thought latency cost for no gain. Passing `keep_alive` on each call keeps the model resident between analyses and removes a 5–10s cold-load penalty per job.

One deliberately un-clever detail: **timezone checking is not done by the model**. Timezone names are resolved to UTC offsets in code and compared against an acceptable range, because asking an LLM to do arithmetic on `MST` vs `CET` is a reliable way to get a confident wrong answer.

Built with **Plasmo**, **React** and **TypeScript**, with conventional commits and release-please handling versioning.
