My sites have used a fork of <a href="https://github.com/walinejs/waline" target="_blank">Waline</a> for comments for
years. Two things forced a change: LeanCloud, its original default datastore, shuts down at the end of 2026, so the data
had to move regardless – and the inherited codebase had problems cheaper to replace than to repair: a ThinkJS 4
*alpha* with an ambient global and a service locator that made unit testing effectively impossible, nine storage
backends behind a hand-rolled query dialect, and an i18n system where adding one string meant editing twelve files at
the same index. **Postilla** is the ground-up rewrite. Waline's feature set informed it; none of its code is carried
forward.

It's a **TypeScript** monorepo: a **Fastify** API on **PostgreSQL** (via Drizzle), a **Vue 3** moderation dashboard, and
an embeddable Vue widget built to a single script. The API is the only thing that talks to the database and serves both
frontends itself – one process, no separate deploy for either. Request and response schemas are declared once with
`zod` and become the types, the typed client and the OpenAPI spec.

The architecture is hexagonal, and the boundaries are enforced by lint rules rather than convention: only the transport
layer may import Fastify, only the config module may read `process.env`, and the domain layer is pure TypeScript with no
IO, no framework and no persistence – which is what makes it testable without a database or an HTTP server. The
decisions along the way are written up as ADRs: one database instead of nine, dropping social login, a notification
outbox without a queue library, revocable sessions instead of a forever-JWT, and argon2id with transparent rehashing of
legacy bcrypt passwords, plus TOTP and recovery codes for moderators.

The migration came first on purpose. It was the deadline-bound piece, and building the LeanCloud export → transform →
load → verify tool before any feature work forced the schema to be real before anything depended on it. The API,
dashboard and widget are all done; staging and cutover from the legacy deployment are what's left.
