// One Word for Your Wi-Fi — entry program.
// Writes the single-word entry to $MAKEFUN_OUTPUT_DIR/entry.txt
// (fallback /output). Deterministic, no network, no external files.
//
// The word: "peekaboo" — home Wi-Fi plays peekaboo. Full bars one
// second, gone the next, back again when you stop looking. It is the
// disappearing act every household recognises, in one word a reader
// gets instantly, and a fitting name for the sponsor's network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "peekaboo";

// Gate self-check: 1-20 characters, one word, no whitespace.
if (WORD.length < 1 || WORD.length > 20 || /\s/.test(WORD)) {
  throw new Error("entry word fails the 1-20 character one-word gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
