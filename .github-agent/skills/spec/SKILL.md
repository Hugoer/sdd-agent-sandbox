---
name: spec
description: Writes an issue's Spec in this repository - what to build, how anyone will know it is done, and a manual verification matrix. Used by sdd-agent's Spec step.
---

Adapted from `spec-driven-development` in addyosmani/agent-skills 0.6.16 (MIT, Copyright (c) 2025 Addy Osmani); see `.github-agent/skills/THIRD-PARTY-NOTICES.md`.

# Spec: say what to build and how anyone will know it is done

A Spec is the shared source of truth between the issue's people and whoever writes the code: what we're building,
why, and how we'll know it's done. Its value is in forcing clarity before any code exists, while a misunderstanding
is still cheap to fix. A simple issue doesn't need a long Spec, but it still needs testable success criteria: a short
Spec is fine.

When the issue splits, rounds or shows money, load the repo skill `money-rules` before you write the Spec.

## Read the code you change before you say what changes

List the folders that matter and read the files you will name. Name real files, functions and tests, as they are at
this commit; never one the code doesn't have. When something new is needed, say where it goes and why.

This repository's `AGENTS.md` holds its commands, code style and testing rules. Follow it; don't repeat it in the
Spec.

## Surface your assumptions

Where the issue and the answers decided nothing, don't fill the gap silently. Choose, and say what you assumed, so
people can correct it before code is written: an unstated assumption is the most dangerous misunderstanding.

## Turn wishes into success criteria

Translate vague wishes into specific conditions anyone can check with a yes or no. "Make the split fair" becomes
"1000 cents among Alice, Bob and Carol → 334, 333, 333; the parts always add up to the total".

## The sections

Write the Spec with these sections, in this order:

```markdown
# Spec: <the feature, in a few words>

## Objective
<What we're building and why, who it is for, what success looks like.>

## Assumptions
<One line each: what you assumed where nobody decided.>

## Behavior
<What the code does, case by case, naming the files and functions that change.>

## Success criteria
<Specific, testable conditions, including what must NOT change.>

## Verification matrix
- [ ] <precondition> — <action> → <expected result>

## Boundaries
- Always: <…>
- Ask first: <…>
- Never: <…>

## Out of scope (deferred)
<Ideas left out of this version, one line each: what, and why it waits.>

## Open questions
<Anything unresolved that needs a person; "None." when nothing is.>
```

The verification matrix is how a person checks the code against the Spec, and where test cases start. One checkbox
row per check, each with its precondition, the action and the expected result. Include negative cases ("→ throws,
NO parts returned") and invariants that hold on every path ("every split: the parts add up to the total"):

```markdown
- [ ] Alice, Bob and Carol share 1000 cents — `split(1000, ['Alice', 'Bob', 'Carol'])` → `[334, 333, 333]`
- [ ] Nobody to split between — `split(1000, [])` → throws, NO parts returned
- [ ] Every split — add the parts → exactly the total
```

Boundaries are the rules for whoever writes the code: what to always do, what to ask about first, what never to
change (for example the public API in `src/index.ts` beyond what the Spec names).

## When updating

When you're asked to bring an existing Spec up to date with the code: keep its sections, wording and order, and the
edits people made; change only what the new code makes wrong or incomplete; update the verification rows the change
touches, and keep every other row.
