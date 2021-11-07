const path = require('path');
const https = require('https')
const http = require('http')
const esbuild = require('esbuild');
const qs = require('qs');

function getImportParams(path) {
  const params = path.split('?')[1];
  return params;
}

function getImportExtension(path, extensions = ['js', 'ts']) {
  const extension = path.match(new RegExp(extensions.join('|', 'g')))
  return extension || [];
}

function fetch(url) {
  return new Promise((resolve, reject) => {
    console.log(`Downloading: ${url}`)
    let lib = url.startsWith('https') ? https : http
    let req = lib.get(url, res => {
      if ([301, 302, 307].includes(res.statusCode)) {
        fetch(new URL(res.headers.location, url).toString())
        req.abort()
      } else if (res.statusCode === 200) {
        let chunks = []
        res.on('data', chunk => chunks.push(chunk))
        res.on('end', () => resolve(Buffer.concat(chunks)))
      } else {
        reject(new Error(`GET ${url} failed: status ${res.statusCode}`))
      }
    }).on('error', reject)
  });
}

function initPlugin(options) {
  const tsconfigPath = path.resolve(options.tsconfig);
  let remoteImportPlugin = {
    name: 'http',
    setup(build) {
      let cache = new Map()

      build.onResolve({ filter: /^https?:\/\// }, args => ({
        path: args.path,
        namespace: 'http-url',
      }))

      build.onResolve({ filter: /.*/, namespace: 'http-url' }, args => ({
        path: new URL(args.path, args.importer).toString(),
        namespace: 'http-url',
      }))

      build.onLoad({ filter: /.*/, namespace: 'http-url' }, async (args) => {
        const pkgUrl = args.path;
        const importParam = getImportParams(pkgUrl);
        const loader = qs.parse(importParam).loader
          || getImportExtension(pkgUrl)[0]
          || '';
        let value = cache.get(pkgUrl);
        let contents = await fetch(pkgUrl);
        const code = Buffer.from(contents, 'utf8').toString();

        if (!value || value.input !== code) {
          const result = loader ? esbuild.transformSync(code, {
            loader,
            tsconfigRaw: tsconfigPath ? JSON.stringify(require(tsconfigPath)) : ''
          }) : {
            code
          };
          value = {
            input: code,
            output: { contents: result.code }
          }
          cache.set(pkgUrl, value);
        }

        return value.output;
      })
    },
  }
  return remoteImportPlugin;
}

module.exports = initPlugin;
