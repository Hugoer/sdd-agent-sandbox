---
name: money-rules
description: How this project stores, splits and rounds money amounts. Use when an issue adds, splits, rounds or shows amounts.
---

# Money rules

These rules hold for every amount in split-the-bill: in the code, the tests, the specs and their examples.

## Storing amounts

- An amount is an integer number of minor units (cents): `1050` is €10.50. Never a float, never a string.
- Every calculation stays in integer cents. Only a display function turns cents into text, at the very end.

## Splitting a total

- A split divides the total into whole cents. The leftover cents (the remainder of the division) go one each to the
  first people in the split's order: 1000 cents between 3 people is 334, 333 and 333.
- The parts always add up to the total exactly. Every split test checks that sum.
- The split's order is the order the caller gives the people in; the function never sorts them.

## Percentages (tip, tax)

- A percentage of an amount is computed in integer cents and rounded half up to the cent: 10 % of 1,005 cents is
  100.5 cents, so 101.
- Compute it without floats: with the percentage in basis points (10 % is 1,000), the result is
  `Math.floor((cents * basisPoints + 5000) / 10000)`.

Worked examples of splits and percentages, with the arithmetic step by step: `references/rounding.md`.
