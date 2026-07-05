# Architecture

- `src/`     — the Vite/React front end
- `server/`  — HTTP routes
- `cli/`     — the acme command-line tool
- `db/`      — SQL migrations
- `lib/`     — shared helpers

We stay a modular monolith until real scaling pressure shows up.
