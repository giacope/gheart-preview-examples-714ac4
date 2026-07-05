const cache = new Map<number, string>();
export function currency(cents: number): string {
  const hit = cache.get(cents);
  if (hit) return hit;
  const out = `$${(cents / 100).toFixed(2)}`;
  cache.set(cents, out);
  return out;
}
