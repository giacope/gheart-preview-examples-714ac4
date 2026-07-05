import { describe, expect, it } from 'vitest';
import { currency } from '../lib/format';

describe('currency', () => {
  it('handles zero', () => expect(currency(0)).toBe('$0.00'));
  it('rounds to cents', () => expect(currency(199)).toBe('$1.99'));
  it('formats large amounts', () => expect(currency(1234567)).toBe('$12345.67'));
});
