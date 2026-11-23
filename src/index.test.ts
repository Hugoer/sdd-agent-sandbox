import { expect, it } from 'vitest';
import { LIBRARY_NAME } from './index.js';

it('exports the library name', () => {
  expect(LIBRARY_NAME).toBe('split-the-bill');
});
