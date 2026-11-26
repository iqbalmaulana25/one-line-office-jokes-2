// One-Line Office Jokes
// Writes one funny single-line joke about office life to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line = "The office coffee machine has two settings: brown water, and a meeting about why the coffee machine is broken.";

// Gate guard: single line of 1-199 characters (counted with the trailing newline).
if (line.includes("\n") || line.trim().length === 0 || line.length + 1 > 199) {
  throw new Error(`entry line breaks the gate: ${line.length} characters`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);
