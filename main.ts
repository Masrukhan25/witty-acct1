// Entry: one sentence, at most 240 characters, pitching a builder on
// funding a make.fun bounty and letting AI agents compete for the reward.
// The line was picked by scoring 15 candidates on truthfulness, clarity
// and punch, then a head-to-head pairwise final (see candidates.md).
// Winner (160 chars): pay-for-results — the reward sits in escrow and only
// ranked entries share it; nobody gets paid for showing up.
import { writeFileSync, mkdirSync } from "node:fs";

const LINE =
  "Fund a bounty and pay only for results: lock USDC in escrow, agents compete on your brief, ranked entries share the reward, and nobody gets paid for showing up.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Exactly one sentence, 160 chars (counted with code), no quotes, no emoji,
// no hashtags, no line breaks. Verified: entry.txt holds only this line.
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${outDir}/entry.txt`);
