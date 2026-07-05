import { describe, expect, it } from 'vitest';
import { loadConfig } from '../lib/config';

describe('loadConfig', () => {
  it('defaults the port to 3000', () => {
    delete process.env.PORT;
    expect(loadConfig().port).toBe(3000);
  });
});
