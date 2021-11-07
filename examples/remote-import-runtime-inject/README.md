# Remote import (esbuild) with runtime inject

Example of remote import (and directly from source with typescript).

In addition to remote import, we are also polyfilling `fetch` using esbuild [inject](https://esbuild.github.io/api/#inject).

In essence, this gives us more control over the runtime and provide polyfills as needed.

perhaps you have a function that works fine on browsers but you want to use on node:

```js
interface TodoData {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

export const getData = async() => {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
}
```

We can make this work by injecting `node-fetch` into the global scope (see `global.js`).

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
