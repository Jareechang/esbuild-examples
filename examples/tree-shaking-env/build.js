const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['./src/index.ts'],
  bundle: true,
  define: {
    'process.env.NODE_ENV': '"production"'
  },
  outfile: './dist/index.js',
  tsconfig: './tsconfig.json',
});
