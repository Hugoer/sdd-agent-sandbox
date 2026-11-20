# Rounding: worked examples

## Splits

`base = Math.floor(total / people)`, `leftover = total - base * people`; the first `leftover` people get
`base + 1`, the others `base`.

| Total (cents) | People | base | leftover | Parts | Sum |
|---|---|---|---|---|---|
| 1000 | 3 | 333 | 1 | 334, 333, 333 | 1000 |
| 1001 | 4 | 250 | 1 | 251, 250, 250, 250 | 1001 |
| 10 | 4 | 2 | 2 | 3, 3, 2, 2 | 10 |
| 5 | 7 | 0 | 5 | 1, 1, 1, 1, 1, 0, 0 | 5 |
| 900 | 3 | 300 | 0 | 300, 300, 300 | 900 |

## Percentages, rounded half up

`Math.floor((cents * basisPoints + 5000) / 10000)`, where 1 % is 100 basis points.

| Amount (cents) | Percentage | Exact value | Result (cents) |
|---|---|---|---|
| 1005 | 10 % (1,000) | 100.5 | 101 |
| 999 | 12.5 % (1,250) | 124.875 | 125 |
| 1234 | 15 % (1,500) | 185.1 | 185 |
| 50 | 7 % (700) | 3.5 | 4 |
| 2000 | 10 % (1,000) | 200 | 200 |
