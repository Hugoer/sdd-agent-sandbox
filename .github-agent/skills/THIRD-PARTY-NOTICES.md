# Third-party notices

This file sits outside every skill folder, so the bot never sends it to the model.

## `grill/SKILL.md`, adapted from `interview-me`

- Source: `skills/interview-me/SKILL.md` in [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills),
  version 0.6.15.
- License: MIT, below.
- Changed for sdd-agent's Grill Me step, which asks its questions in GitHub issue comments (2026-11-18, sdd-agent
  spec 6):
  - Kept: the one-sentence hypothesis; an honest confidence, tested by "could I predict their reactions to the next
    three questions I would ask?"; a guess with its reasoning on every question; being visibly willing to be wrong,
    and now and then guessing in a direction they will push back on; listening for "want" versus "should want"; always
    learning what is out of scope.
  - Changed: several questions per comment, only ones that don't depend on each other, instead of one at a time
    (GitHub is not a live chat); the stop is the confidence threshold the bot gives; questions in the issue's
    language; a bill-splitting example.
  - Dropped: restating the intent and waiting for an explicit "yes" (the Spec and `/approve` do that), the
    terminal-turn rule, the note about non-interactive use, saving the intent to a file, and the sections on when to
    use the skill, other skills, rationalizations, red flags and verification.
- Added for this repository (2026-11-20, sdd-agent spec 11): an Agent Skills header (`name`, `description`) at the
  top, with the attribution line under it, and one line asking to load this repository's `money-rules` skill when
  an issue splits, rounds or shows money.

## `spec/SKILL.md`, adapted from `spec-driven-development`

- Source: `skills/spec-driven-development/SKILL.md` in
  [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills), version 0.6.16.
- License: MIT, below.
- Changed for sdd-agent's Spec step, which posts the Spec as an issue comment for people to edit and approve
  (2026-11-22, sdd-agent spec 7):
  - Kept: the Spec as the shared source of truth for what to build, why, and how we'll know it's done; surfacing
    assumptions instead of filling gaps silently; reframing vague wishes as specific, testable success criteria;
    the Always / Ask first / Never boundaries; out of scope (deferred), one line each; open questions; "a short
    Spec is fine" for simple work.
  - Changed: the sections are objective, assumptions, behavior, success criteria, a manual verification matrix
    (precondition, action, expected result; negative cases and invariants), boundaries, out of scope and open
    questions; commands, project structure, code style and testing point to this repository's `AGENTS.md` instead
    of being written in each Spec; reading the code before saying what changes; a bill-splitting example; a "When
    updating" section for a Spec brought up to date with new code.
  - Dropped: the gated phases (plan, tasks, implement), the capability map, the clarifying questions (Grill Me asks
    them), "stop your turn", saving, naming or committing the Spec as a file, delta specs and version labels, and
    the sections on when to use the skill, rationalizations, red flags and verification.
- Added for this repository: an Agent Skills header (`name`, `description`) at the top, with the attribution line
  under it, and the line asking to load this repository's `money-rules` skill when an issue splits, rounds or shows
  money.

## `plan/SKILL.md`, adapted from `planning-and-task-breakdown`

- Source: `skills/planning-and-task-breakdown/SKILL.md` in
  [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills), version 0.6.16.
- License: MIT, below.
- Changed for sdd-agent's Plan step, which posts the Plan as an issue comment, written from the approved Spec, for
  people to edit and approve (2026-11-23, sdd-agent spec 7):
  - Kept: small tasks a coding agent can finish in one focused session, each leaving the code working;
    dependency order, foundations first; vertical slices over horizontal layers; each task's description,
    acceptance criteria, verification and the files it touches; the sizing signs that a task is two (more than
    about five files, more than three acceptance bullets, "and" in its title); checkpoints after every two or three
    tasks; a risks table.
  - Changed: the files are real paths, read with the bot's tools before they are named; verification uses this
    repository's commands from its `AGENTS.md`; each acceptance criterion traces to the approved Spec; one Markdown
    document with an overview, the tasks with their checkpoints, and the risks; a bill-splitting example; a "When
    updating" section for a Plan brought up to date with new code.
  - Dropped: plan mode, saving the plan and the task list as files (`tasks/plan.md`, `tasks/todo.md`), external
    trackers, the rule about overwriting an earlier plan, phases, architecture decisions and open questions as
    their own sections, parallel agents, the size table, and the sections on when to use the skill,
    rationalizations, red flags and verification.
- Added for this repository: an Agent Skills header (`name`, `description`) at the top, with the attribution line
  under it.

## MIT License

Copyright (c) 2025 Addy Osmani

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
