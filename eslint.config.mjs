import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['node_modules/'] },
  eslint.configs.recommended,
  tseslint.configs.recommended,
);
// sdd-agent spec 13 matrix: a change to a file #94's Spec read (undone after the matrix)
