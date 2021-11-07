const remoteImportPlugin = require('@plugins/remote-import');
const esbuild = require('esbuild');

const options = {
  entryPoints: ['src/index.ts'],
  external: ['https*'],
  bundle: true,
  outfile: 'dist/index.js',
  external: ['fetch'],
  platform: 'node',
  inject: ['./global.js'],
  plugins: [
    remoteImportPlugin({
      tsconfig: './tsconfig.json'
    })
  ],
}

esbuild.build(options)
  .then(() => console.log('build finished'))
  .catch(() => process.exit(1))
