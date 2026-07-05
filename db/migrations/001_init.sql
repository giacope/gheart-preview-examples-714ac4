CREATE TABLE orders (
  id         SERIAL PRIMARY KEY,
  name       TEXT NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now()
);
