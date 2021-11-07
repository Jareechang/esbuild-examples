# Express 

Example of running a simple express server 

## Getting started

1. Cloning the repo

2. Installation

```sh
// npm
npm install && npm run dev

// yarn 
yarn install && yarn dev

// pnpm 
pnpm install && pnpm dev
```

3. Call api

```sh
curl http://localhost:3001/api/users

// With jq
curl http://localhost:3001/api/users | jq
```

## References

For more options, and information please visit the [documentation](https://esbuild.github.io/api/#build-api).

If you like to install package, consider using a package to ignore `node_modules` in your build - [esbuild-node-externals](https://www.npmjs.com/package/esbuild-node-externals).
