import { expect, it } from 'vitest';
import { LIBRARY_NAME } from './index.js';

// Spec 14 check: a comment line.
it('exports the library name', () => {
  expect(LIBRARY_NAME).toBe('split-the-bill');
});
