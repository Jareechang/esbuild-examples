const fs = require('fs');
const path = require('path');
const gzipSize = require('gzip-size');
const chalk = require('chalk');

const rootDir = process.cwd();

function getConfig(options) {
  const config = {
    entryPoints: [
      './src/index.tsx',
    ],
    outfile: 'dist/index.js',
    bundle: true,
    tsconfig: './tsconfig.json',
    target: ['chrome80', 'edge80', 'safari15'],
    metafile: true,
    ...options,
  };
  return config;
}

function parseMetafile(buildResult) {
  const metafile = buildResult.metafile;
  //const inputs = metafile.inputs;
  const toMb = (bytes) => bytes / (10 ** 6);
  const toKb = (bytes) => bytes / (10 ** 3);
  const outBundleSize = metafile.outputs['dist/index.js'].bytes;
  const outBundleSizeGzip = gzipSize.sync(fs.readFileSync(path.join(rootDir, 'dist/index.js')));
  console.log(chalk`{bold total output size:} {green ${toMb(outBundleSize)}} mb, {green ${toKb(outBundleSize)}} kb`);
  console.log(chalk`{bold total output size (gzip):} {green ${toMb(outBundleSizeGzip)}} mb, {green ${toKb(outBundleSizeGzip)}} kb`);
  return buildResult;
}

module.exports = {
  getConfig,
  parseMetafile,
};
