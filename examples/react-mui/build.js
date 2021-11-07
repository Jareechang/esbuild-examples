const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');
const utils = require('./build-utils');
const chalk = require('chalk');
const plugins = require('./plugins');

const rootDir = process.cwd();

const port = process.env.PORT || 8082;

async function main() {
  fs.copyFile(
    path.join(rootDir, './public/index.html'),
    path.join(rootDir, './dist/index.html'),
    (err) => {
      if (err) console.err('failed to copy file ');
    }
  );

  console.log(chalk`{yellow.bold build with automatic tree shaking (minified)} \n`)
  await esbuild.build(utils.getConfig({
    minify: true,
    define: {
      'process.env.NODE_ENV': '"production"'
    },
    plugins: [plugins.optimizePlugin]
  })).then(utils.parseMetafile);

  console.log(`\n`);

  console.log(chalk`{yellow.bold build with tree shaking turned off (minified)} \n`)
  await esbuild.build(utils.getConfig({
    ignoreAnnotations: true,
    minify: true
  }))
    .then(utils.parseMetafile);
}

main();
