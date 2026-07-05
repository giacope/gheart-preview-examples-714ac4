import { describe, expect, it } from 'vitest';
import { currency } from '../lib/format';

describe('currency', () => {
  it('formats cents as dollars', () => {
    expect(currency(1299)).toBe('$12.99');
  });
});
