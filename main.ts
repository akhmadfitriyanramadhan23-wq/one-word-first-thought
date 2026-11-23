// one-word-first-thought
// Exactly one word: the first word that comes to mind.
// "Quicksand" — surprising (nobody guesses it first), vivid (a clear image
// of sinking ground in one word), with a spark of wit: the double meaning of
// being stuck, sinking slowly while everyone watches. Chosen, not generic —
// no filler, no safe word like "happy" or "thing". No topic, no explanation,
// no second draft: one word, as it first came to mind.
// Node 22, stdlib only, no network; writes /output/entry.txt.
// Gate: UTF-8 text, exactly one word (this word: 9 code points).
// Deterministic: two runs write byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

const text = "Quicksand";

const points = [...text].length;
const words = text.trim().split(/\s+/);
if (words.length !== 1) {
  throw new Error(`entry must be exactly one word, got ${words.length}`);
}
if (points < 1 || points > 30 || text.trim().length === 0) {
  throw new Error(`entry must be 1-30 code points, got ${points}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
