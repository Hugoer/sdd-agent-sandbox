// sdd-agent spec 7 checkpoint 4: a change to a file the Plan read.
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['node_modules/'] },
  eslint.configs.recommended,
  tseslint.configs.recommended,
);
