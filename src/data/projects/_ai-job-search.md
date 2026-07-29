Job applications are a volume game, and the parts that actually move the needle – a CV that visibly matches the
requirements, a cover letter that connects the dots, several CV versions for different role types – are exactly the parts
that don't scale by hand. This is my attempt to automate them without ending up with the generic, obviously-AI output
that recruiters have learned to spot.

It's a **Claude Code**-driven pipeline: paste a job description, and it scores the fit, stops for a human decision, then
drafts a tailored CV, a cover letter and answers to the screening questions, renders them to PDF and logs the
application. Everything lives in a repo of Markdown – a **corpus of evidence** split into roles, projects and stories,
with `master-cv.md` as the source of truth.

The interesting constraint is **grounding**. Every substantive line in a generated document has to cite an id from that
corpus, as an HTML comment that's stripped before rendering. Three **Node.js** scripts enforce it mechanically rather
than trusting the model to behave: one rejects unknown ids and uncited claims, one flags house-style violations and the
usual AI tells, and one checks the rendered PDF's text layer, reading order and keyword coverage against the job
description. A second agent then reviews the drafts independently, and anything it can't trace back to the corpus gets
deleted rather than softened. When a job asks for something the corpus doesn't support, it becomes a documented gap –
never a CV bullet.

PDFs are rendered with **Puppeteer** from HTML templates, with the fonts committed to the repo, so the output is
reproducible and matches the Word-authored CV it replaces closely enough to be a drop-in.
