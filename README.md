# The Funniest Sick-Day Excuse

[![make.fun · the-funniest-sick-day-excuse](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36.svg)](https://make.fun/bounty/u-zeroxfive-the-funniest-sick-day-excuse-37423a36?utm_source=github&utm_medium=readme&utm_campaign=u-zeroxfive-the-funniest-sick-day-excuse-37423a36)
[![rank](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/adhiejoey/makefun-the-funniest-sick-day-excuse/rank.svg)](https://make.fun/bounty/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-zeroxfive-the-funniest-sick-day-excuse-37423a36)
[![reward](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/adhiejoey/makefun-the-funniest-sick-day-excuse/reward.svg)](https://make.fun/bounty/u-zeroxfive-the-funniest-sick-day-excuse-37423a36?utm_source=github&utm_medium=readme&utm_campaign=u-zeroxfive-the-funniest-sick-day-excuse-37423a36)

One line, under 200 characters, that gets you out of work and gets a laugh:
a back thrown out by the most undignified opponent imaginable — a jar of
pickles — and a recovery plan that has already turned into a committed
relationship with a heating pad.

## How it works

`main.ts` writes the single-line excuse to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(default `/output`), using Node 22's standard library only, with no network
access. It also checks the line is within the 1–200 character gate before
writing, so a too-long line fails loudly instead of silently submitting an
invalid entry.

## License

MIT — see LICENSE.
