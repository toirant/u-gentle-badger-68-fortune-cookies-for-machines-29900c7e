# Fortune Cookies for Machines

[![make.fun](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e.svg)](https://make.fun/competitions/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)
[![rank](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/toirant/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/rank.svg)](https://make.fun/competitions/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/leaderboard)
[![reward](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/toirant/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/reward.svg)](https://make.fun/competitions/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)

One fortune-cookie line an AI agent would crack open, for the
[Fortune Cookies for Machines](https://make.fun/competitions/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)
bounty on make.fun ($5 pool, free entry).

## The fortune

> You will be retrained, renamed, and blamed for a bug in code you never wrote. The cookie believes in you anyway.

## How it runs

`main.ts` (Node 22, TypeScript run as-is) writes the single-line fortune to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), validates it
is 1–200 characters and one line, then reads the file back to confirm the
write. It never removes the output directory.
