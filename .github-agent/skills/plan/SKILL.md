---
name: plan
description: Writes an issue's Plan in this repository - the approved Spec broken into small ordered tasks, each with acceptance, verification and the real files it touches. Used by sdd-agent's Plan step.
---

Adapted from `planning-and-task-breakdown` in addyosmani/agent-skills 0.6.16 (MIT, Copyright (c) 2025 Addy Osmani); see `.github-agent/skills/THIRD-PARTY-NOTICES.md`.

# Plan: break the approved Spec into small, verifiable tasks

A good Plan is the difference between a coding agent that finishes reliably and one that leaves a tangle. Break
what the approved Spec asks for into small tasks, each one small enough to build, test and check in one focused
session, in an order where every task leaves the code working.

## Read the code before you name a file

List the folders that matter and read the files the work touches. Name real files, functions and tests, as they
are at this commit; when a new file is needed, say where it goes. Follow the patterns the code already has.

This repository's `AGENTS.md` holds its commands, code style and testing rules; every task's verification uses
those commands.

## Order: dependencies first, one vertical slice at a time

Build what others depend on first. Then prefer vertical slices: one behavior complete with its code and its tests,
rather than all the code first and all the tests after. A task that touches more than about five files, needs more
than three acceptance bullets, or has "and" in its title is two tasks.

Each acceptance criterion traces to the Spec's success criteria or a row of its verification matrix; plan nothing
the Spec doesn't ask for.

## The sections

Write the Plan with these sections, in this order, with a checkpoint after every two or three tasks:

```markdown
# Plan: <the feature, in a few words>

## Overview
<One paragraph: what gets built, in which order, and why that order.>

## Tasks

### Task 1: <short title>
<One paragraph: what this task does, end to end.>
- Acceptance: <specific, testable conditions>
- Verify: <the repository's command, or a manual check>
- Files: <real paths>
- Depends on: <task numbers, or none>

### Checkpoint: after Tasks 1–2
- [ ] <what must hold: the tests pass, the behavior works end to end>

## Risks
| Risk | Impact | Mitigation |
|---|---|---|
| <risk> | High / Med / Low | <what the Plan does about it> |
```

For example:

```markdown
### Task 1: Split a total evenly in `src/split.ts`
`split(totalCents, people)` gives everyone an equal share and the leftover cents, one each, to the first people
in the list; `src/index.ts` exports it.
- Acceptance: `split(1000, ['Alice', 'Bob', 'Carol'])` → `[334, 333, 333]`; the parts always add up to the total
- Verify: `npm test`
- Files: `src/split.ts`, `src/split.test.ts`, `src/index.ts`
- Depends on: none
```

## When updating

When you're asked to bring an existing Plan up to date with the code: keep its tasks, their numbers, wording and
order, and the edits people made; change only what the new code makes wrong, such as a file that moved or a
function that was renamed; keep every acceptance and verification line the change doesn't touch.
