When I started freelancing through my own company, I needed to bill clients with invoices that actually looked like
mine - for my own use and my collaborators'. A Word template was too crude, a full invoicing product was far too much,
so I built the small thing in between: a **React** template populated from **JSON**, printed to PDF with **Puppeteer**.

That first version worked, and then it kept growing, so I split it into two projects with a proper API between them.

**The rendering engine** is a **Next.js** service that does one job: JSON in, PDF out. A request to `/api/invoice` is
rate-limited, validated against a **Zod** schema, normalised into a render-ready model (snake_case input to camelCase
output, monetary values kept as integer cents and formatted once at the edge), rendered to static HTML by React with
the compiled Tailwind inlined, and finally printed to A4 by headless Chrome. Repayment receipts go through the same
pipeline with their own schema. The Zod schemas are the single source of truth: an **OpenAPI** spec is generated from
them at build time and served through Swagger UI at `/docs`, so the contract can never quietly drift from the code.

**The clients** consume that generated spec. There's a **React + Vite** GUI for the normal case - pick a preset, adjust
the line items, watch a live PDF preview, attach expense receipts which get merged into the final document with
`pdf-lib` - backed by an **Express** server that validates against the same schema before forwarding. And there's a
**Python CLI** for the repetitive case, where a whole month's invoice is one command. Reusable data - senders,
recipients, payment terms, line items, presets - lives in **YAML** files rather than a database, which keeps the whole
thing diffable and portable.

Both services ship as **Docker** images, so the setup runs wherever I need it rather than depending on someone else's
uptime. It's a deliberately over-engineered solution to a boring monthly chore, and I'd do it again.
