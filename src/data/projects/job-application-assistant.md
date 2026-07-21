Every job application form eventually asks the same question in a slightly different costume: *why this company, why
this role, tell us about a time you…*. Answering well takes real thought; answering from scratch for the fortieth time
takes the will to live.

This is a **Chrome side-panel extension** that sits next to the application form - Greenhouse, Ashby, Workday, LinkedIn,
whatever - and drafts answers grounded in my actual background. It reads three local markdown files at startup: my CV,
my project history, and a set of writing-style rules the model has to follow. Paste a question in, get a first draft
out, then iterate in a multi-turn chat: *shorter*, *emphasise the TypeScript experience*, *more formal*. One click
copies the result into the form. Company context - the job description, notes about the role - is pasted per session so
answers stay specific to who's asking.

It runs on **Ollama** locally or the **Gemini API**, built with **Plasmo**, **React** and **Tailwind**. The context
files are gitignored: my CV never goes near version control, and with Ollama it never leaves the laptop either.

Most of the work here wasn't the UI, it was fighting hallucination. An LLM asked to write about your experience will
cheerfully invent a project you never did, and in a job application that's not a quirk, it's a disaster. Lowering the
temperature and hardening the system prompt to refuse anything not grounded in the context files did the bulk of it.
The other lesson: this is a *writing* task, not an extraction task, so model size actually matters - the jump from 14B
to 32B is the difference between prose you can send and prose that reads like a form letter.
