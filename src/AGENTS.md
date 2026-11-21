# src: the library's code

- One feature per module (`src/split.ts`), with its test next to it (`src/split.test.ts`).
- Every function is pure: its result depends only on its arguments, and it changes none of them.
- Everything a user of the library can call is exported from `src/index.ts`; anything else stays internal.
- UNMERGED-MARKER: this line is only on an unmerged branch.
