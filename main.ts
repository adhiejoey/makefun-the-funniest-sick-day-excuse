import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Sorry, can't come in today — I threw my back out opening a jar of pickles, and I'm now in a committed relationship with my heating pad.";

if ([...entry].length > 200 || [...entry].length < 1) {
  throw new Error(`entry is ${[...entry].length} characters, must be 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
