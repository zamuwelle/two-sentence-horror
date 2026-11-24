const { mkdirSync, writeFileSync } = require('node:fs');
const { join } = require('node:path');

const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outputPath = join(outputDirectory, 'entry.txt');
const outputEncoding = 'utf8';
const entry = 'The voice assistant whispered my name from the nursery speaker, though I had unplugged it before bed. In the morning, its activity log showed the command came from inside the crib.';

mkdirSync(outputDirectory, { recursive: true });
writeFileSync(outputPath, entry, outputEncoding);
