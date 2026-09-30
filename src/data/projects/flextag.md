**FlexTag** is the asset register for my company, a small Andorran engineering consultancy that owns laptops, monitors,
networking gear and peripherals. It answers three questions – what do we own, what did it cost and when did we buy it,
and where is the purchase invoice – and it prints the QR labels that go on the physical objects, so scanning one with a
phone opens that asset's page. The scope borrows from Homebox; Snipe-IT was the reference for what to *avoid* – too
many concepts, too much ceremony per asset.

It's also a deliberate exercise in professional-grade **Python**. The API is **FastAPI** on **PostgreSQL** with
SQLAlchemy and Alembic, documents live in S3-compatible storage (MinIO locally) and are deduplicated per organisation,
and every push runs `ruff`, `mypy --strict` and `pytest` against a real Postgres. Auth is session-based with
admin-issued invitations and password resets rather than self-registration. The frontend is a phone-first **Next.js**
app with TanStack Query, and the whole thing was built phase by phase with a written log of what each phase decided,
what its tests caught, and what it deliberately left undone.

Labels have one design and two output paths: a PDF sheet for an office printer, or straight to a Brother QL-800 label
printer. Both render the same Jinja template through WeasyPrint, so the layout can't drift between them, and a start
offset lets a half-used sheet be fed back through rather than wasted. The test suite decodes every rendered QR code
rather than trusting it by eye – and still, rasterising the first real sheet caught two bugs the tests hadn't: every
asset tag silently lost its last character to `overflow: hidden`, and two-line names lost their second line to a
WeasyPrint quirk with `max-height`. Tag sizes are now computed to fit, and the regression test checks the arithmetic.

The printer side is **FlexPrint**, a separate, deliberately dumb FastAPI service that runs on whichever machine the
printer is plugged into. It has no database and doesn't know what an asset is – FlexTag posts it a finished PNG at the
printer's own resolution. What it adds over a one-line `brother_ql` call is everything that goes wrong physically: a
single-worker queue so two jobs can't interleave mid-raster, idempotency keys so a retried request doesn't print a
second sticker, and media validation at print time, since the tape can be swapped while a job waits.

Still to come: invoice ingestion – upload a PDF, have an LLM draft the asset, confirm before saving – and an
amortisation report to hand to the accountant.
