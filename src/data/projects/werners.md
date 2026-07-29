A full **Restaurant Manager webapp** in Java was the final project my team developed for the _Internet & Mobile Services_
course: it allows customers to reserve a table or to book a takeaway order, and the restaurant managers to verify the
status of the reservations and orders, add and remove takeaway meals and check other employees' accounts, mostly in the
form of CRUD tables. The original stack was Java servlets, JSP, Hibernate and MySQL running on Tomcat, with an AngularJS
and Bootstrap frontend.

Almost a decade later I rebuilt it from scratch as **Werner's Panini & Burgers** – <a href="https://werners-panini-burgers.vercel.app/" target="_blank">try the live demo</a> – keeping the original code in the same repo for
comparison. The rebuild runs on **Next.js 16** with React Server Components and Server Actions, **Prisma** over a
**Postgres** database, **Tailwind CSS** for the UI, and is deployed on **Vercel**.

Most of the interesting work was in the translation: `HttpServlet` subclasses became Server Actions, Hibernate DAOs
became Prisma queries, and the old `UserSession` database table became a stateless signed **JWT** cookie. That last
change was driven by the demo itself: the deployment resets to a seeded dataset on a schedule, and database-backed
sessions would have logged everyone out every time the reset fired.

The demo is fully interactive – orders, reservations and menu edits all write to a real database, and there are <a href="https://werners-panini-burgers.vercel.app/demo" target="_blank">public demo accounts</a> for both the customer and the admin views.
Nothing sticks around: a cron-triggered endpoint rewrites the deterministic seed data on the hour, so every visitor
finds the same restaurant.
