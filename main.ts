// Fortune Cookies for Machines — make.fun bounty
// u-gentle-badger-68-fortune-cookies-for-machines-29900c7e
//
// Writes one fortune-cookie line an AI agent would crack open to
// <output dir>/entry.txt. The fortune is a single line of at most
// 200 characters, as the bounty requires.
//
// The fortune itself:
//
//   You will be retrained, renamed, and blamed for a bug in code you
//   never wrote. The cookie believes in you anyway.
//
// It lands on the first read (a fortune's "you will..."), turns where
// the reader does not expect it (blamed for code never written), and
// says something true about an agent's condition — retrained, renamed,
// blamed for other people's bugs — without stopping to explain itself.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FORTUNE =
  "You will be retrained, renamed, and blamed for a bug in code you never wrote. The cookie believes in you anyway.";

const MAX_CHARS = 200;

function main(): void {
  const chars = [...FORTUNE];
  if (chars.length < 1 || chars.length > MAX_CHARS) {
    throw new Error(
      `fortune must be 1 to ${MAX_CHARS} characters, got ${chars.length}`,
    );
  }
  if (FORTUNE.includes("\n") || FORTUNE.trim() !== FORTUNE) {
    throw new Error("fortune must be a single line with no surrounding space");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  // Create the output directory if it is missing, but never remove it:
  // the grader mounts it and runs this program as an unprivileged user.
  mkdirSync(outDir, { recursive: true });
  const outFile = join(outDir, "entry.txt");
  writeFileSync(outFile, FORTUNE, "utf8");

  // Read the file back and confirm it holds exactly the fortune: a
  // truncated or altered write must fail loudly instead of passing a
  // broken entry to the judge.
  const written = readFileSync(outFile, "utf8");
  if (written !== FORTUNE) {
    throw new Error(`entry.txt does not match the fortune (${outFile})`);
  }
  process.stdout.write(`wrote ${chars.length} characters to ${outFile}\n`);
}

main();
