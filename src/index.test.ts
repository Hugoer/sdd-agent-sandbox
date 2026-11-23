import { expect, it } from 'vitest';
import { LIB_NAME } from './index.js';

it('exports the library name', () => {
  expect(LIB_NAME).toBe('split-the-bill');
});
