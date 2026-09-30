Having recently started working as a freelancer with my own company, the need emerged to bill clients via tailored
invoices, for both my use and my collaborators'. A basic Word template was too simple, and a complete accounting product
far too much, so I built my own: what started as a **React template** populated by **JSON** and printed to PDF with
**Puppeteer** has since grown into a small self-hosted stack.

It's split into two services. The **rendering engine** is a **Next.js** app that accepts an invoice payload, normalises
it into a render-ready model and returns a PDF, with Swagger docs and an OpenAPI spec that the clients validate against.
The **client** holds the data – senders, recipients, line items, payment terms and notes, kept as plain **YAML**
collections rather than in a database – and offers two ways in: a **React** GUI for day-to-day use and a **Python** CLI
(built on `click`) for scripting.

Most of the work since has gone into removing repetitive typing. Presets fill in the recurring parts of an invoice, a
week navigator and name templates generate the per-week line items, and expenses can be imported straight from bank
CSVs, with delimiter detection and forgiving date parsing. Each expense can carry its receipt, as a PDF or a phone
photo: attachments are identified by their magic bytes rather than their extension, and images get a page of their own
sized to match the invoice, so the output is always one tidy PDF with the invoice first and every receipt behind it. A
half-finished invoice can be saved as a JSON **snapshot** and loaded back later; import rejects a structurally broken
file but downgrades recoverable problems – a deleted item, an unknown sender – to warnings, so the rest still loads.

Both services ship as **Docker** images on GHCR, and a separate deploy repo is the only place they're described
together: a Docker Compose file with pinned tags and health checks, so a rollback is just putting the previous tag back,
plus an experimental **Terraform** translation of the same setup that I'm using to learn the tool.
