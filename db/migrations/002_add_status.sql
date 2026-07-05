ALTER TABLE orders ADD COLUMN status TEXT NOT NULL DEFAULT 'pending';
CREATE INDEX idx_orders_status ON orders (status);
