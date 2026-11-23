// One Line, Zero Use: The Useless Superpower Sprint
// u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68
// The harness runs `node /bot/main.ts` (node22). The program writes one
// original useless-superpower line (at most 200 characters) to
// /output/entry.txt. Outside a container MAKEFUN_OUTPUT_DIR stands in
// for /output.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'I can stop time, but only for as long as I can hold my breath, and I have asthma.';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
