const esbuild = require('esbuild');

async function main() {
  esbuild.build({
    entryPoints: ['./src/index.ts'],
    bundle: true,
    outfile: './dist/index.js',
    tsconfig: './tsconfig.json',
  });
}

main();
