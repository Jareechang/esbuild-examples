# Remote import (esbuild) 

Example of remote import (and directly from source with typescript).

This is an slightly tweaked version of the example in the [esbuild docs](https://esbuild.github.io/plugins/#http-plugin) with transforming typescript code after import.

This allows you to specify an import from a **trusted** CDN.

```js
import uniq from 'https://unpkg.com/lodash.uniq@4.5.0/index.js'

console.log(uniq([1, 2, 2, 2]));
```

**Note:** Please be mindful of security when making remote imports like this. Use this at your own discretion. Extra measures are required to make this work in production.

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

## References

For more options, and information please visit the [documentation](https://esbuild.github.io/api/#build-api).
