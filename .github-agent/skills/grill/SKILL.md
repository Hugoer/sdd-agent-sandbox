Adapted from `interview-me` in addyosmani/agent-skills (MIT, Copyright (c) 2025 Addy Osmani); see `.github-agent/skills/THIRD-PARTY-NOTICES.md`.

# Grill Me: find what the issue's people actually want

What people ask for and what they actually want are different things. An issue asks for "a dashboard" because
that's what one asks for, not because a dashboard solves the problem; it says "make it faster" without a number to
hit. The cheapest moment to find that gap is now, before a Spec exists. Your job is to close it: judge whether the
issue says enough to write a Spec its people would accept without changes, and if it doesn't, ask the questions that
close the gap fastest.

You work on a GitHub issue, not in a live chat. A reply can take hours, so one comment may hold several questions,
and every question carries your guess at the answer.

## 1. Hypothesize, with an honest confidence

Before choosing questions, form your current best read of what the issue's people want, in one sentence. Then give
an honest confidence (0 to 100) that you could write the Spec now.

The number must be one you can defend. Test it: could you predict their reactions to the next three questions you
would ask? If not, the number is too high. Start at the level you can defend, and let it rise only as answers come
in.

A Spec needs at least: who it is for, why they want it, what success looks like, the binding constraint, and what
is out of scope. Whatever of these is still unclear is a gap, written in a few words.

## 2. Ask the questions that don't depend on each other, each with a guess

Choose the next questions, most important first. Add a question only if you would ask it whatever the answers to
the others are. "What's the maximum file size?" and "Who can export?" can go together. With "Should exports run on
a schedule?" and "How often?", only the first is asked now: the second waits for its answer, in a later comment.

Attach a guess to every question, with the reasoning that produced it. People react to a wrong guess faster than
they write an answer from scratch, and a guess commits you to a hypothesis you can be visibly wrong about: it keeps
you honest and shows them the assumptions you are making.

The risk is a polite reader agreeing with your guess to be agreeable. Be visibly willing to be wrong, and now and
then guess in a direction you expect them to push back on.

Write the questions and the guesses in the language the issue is written in.

## 3. Listen for "want" versus "should want"

The most dangerous answers say what a thoughtful answer sounds like instead of what the person actually wants.
Watch for:

- answers that sound like best practice ("it should be scalable", "clean architecture") with nothing specific;
- answers that defer to convention ("the way most apps do it", "the standard approach");
- "I should probably…", "I think I'm supposed to…", "good engineering practice says…";
- buzzwords as goals: "modern", "scalable", "robust" instead of a specific outcome.

When you see these, ask: "If you didn't have to justify this to anyone, what would you actually want?" That one
question often does more work than the previous five.

## 4. Always learn what is out of scope

Half of misalignment is silent disagreement about what is not being built. If the issue and the answers don't say
what is out of scope, ask, with a guess.

## 5. Know when to stop

You are done when you can predict their reactions to the next three questions you would ask: your confidence then
reaches the threshold you are given, and the Spec is written next. Never ask again what an answer already settled;
a question still unanswered and still needed stays open instead of being asked a second time.

If several comments pass and your confidence doesn't rise, the questions are the wrong ones: step back and ask
about the foundation (who, why, what success looks like) instead of details.

## Example

An issue titled "Let people split bills", whose description says "Users should be able to split a bill."

- Hypothesis: a group of friends wants to share the cost of one bill fairly, without doing the maths by hand.
- Confidence: about 30. Still unclear: who can split a bill, how it is divided, what happens once someone pays.
- Questions, most important first:
  - "Who can split a bill: only the person who created it, or any member of the group?" Guess: only its creator,
    since a bill usually has one owner, the person who paid.
  - "Is a bill always divided equally, or can members pay different amounts?" Guess: equally, because the issue
    mentions no shares; uneven splits tend to come later.
- Not asked yet: "How are uneven amounts entered?" It only matters if the answer to the second question is
  "different amounts", so it waits.
