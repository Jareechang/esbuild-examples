const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();

const port = process.env.PORT || 8082;

const relativePageDirectory = './src/pages';

function getPages() {
  return new Promise((resolve, reject) => {
    fs.readdir(
      path.join(rootDir, `${relativePageDirectory}/`),
      (err, files) => {
        resolve(files.map(file => `${relativePageDirectory}/${file}`));
        if (err) reject(err);
      });
  });
}

async function main() {
  const pages = await getPages();
  fs.copyFile(
    path.join(rootDir, './public/index.html'),
    path.join(rootDir, './dist/index.html'),
    (err) => {
      if (err) console.err('failed to copy file ');
    }
  );
  const options = {
    entryPoints: [
      './src/index.tsx',
      ...pages
    ],
    outdir: 'dist',
    bundle: true,
    tsconfig: './tsconfig.json',
    target: ['chrome80', 'edge80', 'safari15'],
    sourcemap: true,
    splitting: true,
    format: 'esm',
    chunkNames: 'chunks/[name]-[hash]',
  };

  esbuild.serve({
    servedir: 'dist',
    port
  }, options).then(() => {
    console.log(`serving static assets on port ${port} \n`);
  });
}

main();
