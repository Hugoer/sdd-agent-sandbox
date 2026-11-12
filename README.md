# split-the-bill

A small TypeScript library for sharing expenses between friends: split a restaurant bill, add a tip, and settle a
weekend trip with as few transfers as possible.

> **This is a sandbox repo.** Its code is written by [sdd-agent](https://github.com/Hugoer/sdd-agent), a GitHub
> App bot. Humans open issues and approve; the bot asks questions, writes specs and plans, and opens pull
> requests. The library is deliberately small, so the interesting part is watching an issue travel through the
> workflow.

## How it works

```text
issue opened ──► GitHub App webhook ──► sdd-agent (NestJS, on the developer's machine via ngrok)
                                              │
     comments, labels, PRs, check runs ◄──────┘
```

- The **GitHub App** is installed on this repo only. Every issue, comment, label and PR event is sent as a webhook
  to the bot.
- The bot keeps its workflow state in its own database. GitHub shows that state as `status: *` labels and
  comments.
- The bot writes code only on its own `agent/*` branches and opens a PR. A human merges it.

> **Current state:** the bot is a walking skeleton (sdd-agent spec 1). It replies to every new issue with a
> "hello" comment, and nothing else yet. The workflow below arrives with sdd-agent specs 2–10.

## The workflow

You choose a **lane** by adding a `workflow: *` label to an issue. ✋ marks the steps where the bot waits for a
`/approve` comment from someone with write access.

| Lane | Steps | Use it for |
|---|---|---|
| `workflow: full-sdd` | Grill Me → Spec ✋ → Plan ✋ → Coder → Quality Gate | Features with open questions or several parts |
| `workflow: spec-code` | Grill Me → Spec ✋ → Coder → Quality Gate | Features that are clear once a spec is agreed |
| `workflow: code-only` | Go-signal ✋ → Coder → Quality Gate | Small, precisely described fixes |

- **Grill Me:** the bot asks clarifying questions as an issue comment. Answer by commenting on the issue.
- **Spec / Plan:** the bot posts a document. Reply `/approve` to accept it, or comment to ask for changes.
- **Coder:** the bot implements the change on an `agent/*` branch, runs lint and tests, and opens a PR.
- **Quality Gate:** a separate review of the PR, posted as a PR comment and a check run.

### Labels

| Label | Set by | Meaning |
|---|---|---|
| `workflow: full-sdd`, `workflow: spec-code`, `workflow: code-only` | humans | Starts a run in that lane |
| `grill: skip` | humans | Skip Grill Me (read only when a run starts) |
| `status: draft`, `grilling`, `spec-review`, `ready-for-dev`, `executing`, `in-review`, `needs-human` | the bot only | Where the issue is |

- **Restart:** remove the `workflow: *` label and add it again. This cancels the run and starts from scratch. It's
  also the only way out of `status: needs-human`.
- **Never** set `status: *` labels by hand: the bot owns them.

## Project conventions

These conventions apply to every change, including the bot's:

- TypeScript (strict), ES modules, no runtime dependencies.
- Amounts are integers in minor units (cents): `1050` is €10.50. Never floats.
- Pure functions only: no I/O, no global state, no dates or randomness unless passed in.
- Every behavior has a [Vitest](https://vitest.dev) test next to the code (`src/**/*.test.ts`).
- `npm test`, `npm run lint` and `npm run typecheck` must pass before a PR is opened.
- The public API is exported from `src/index.ts`.
- Step skills (how each workflow step should behave in this repo) live in `.github-agent/workflow.json`. It's empty
  for now, so every step uses the bot's built-in prompt.

```sh
nvm use            # Node 24 (.nvmrc)
npm install
npm test           # Vitest
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit (strict)
```

## Starter issues

Copy these into new issues, roughly in this order. They are written the way a real user would: the open questions
are left for Grill Me and the spec on purpose.

<details>
<summary><b>1. Split a bill evenly</b> · <code>workflow: spec-code</code></summary>

> When a group pays a restaurant bill together, I want to split the total evenly between everyone at the table, so
> each person knows exactly what to pay.
>
> Example: €100 between 3 people.

</details>

<details>
<summary><b>2. Reject a split between zero people</b> · <code>workflow: code-only</code></summary>

> Splitting a bill between 0 people (or a negative number of people) should throw a `RangeError` with the message
> `people must be a positive integer`. Non-integer counts like `2.5` should throw the same error. Add a test for
> each case.

</details>

<details>
<summary><b>3. Uneven shares</b> · <code>workflow: spec-code</code></summary>

> Not everyone orders the same thing. I want to split a bill where some people pay more than others. For example,
> two of five friends didn't drink, so they shouldn't pay for the wine.

</details>

<details>
<summary><b>4. Add a tip before splitting</b> · <code>workflow: spec-code</code></summary>

> I want to add a tip to the bill before splitting it, as a percentage (e.g. 10 %) or as a fixed amount.

</details>

<details>
<summary><b>5. Settle a weekend trip with the fewest transfers</b> · <code>workflow: full-sdd</code></summary>

> On a weekend trip, different friends pay for different things: Ana pays the hotel, Ben pays dinner, Carla pays
> fuel. At the end I want to know who should pay whom, with as few bank transfers as possible, so that everyone has
> paid their fair share.

</details>

<details>
<summary><b>6. Format amounts for display</b> · <code>workflow: spec-code</code> + <code>grill: skip</code></summary>

> Add `formatAmount(cents: number, currency: string): string` that formats an amount in minor units for display
> using `Intl.NumberFormat` with the `en-GB` locale, e.g. `formatAmount(1050, 'EUR')` → `€10.50`. Negative amounts
> keep their sign. Unknown currency codes throw a `RangeError`.

</details>

## License

[MIT](LICENSE)

## New line to create the PR