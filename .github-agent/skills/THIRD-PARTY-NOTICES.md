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
