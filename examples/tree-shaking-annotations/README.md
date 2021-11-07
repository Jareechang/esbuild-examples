# Tree shaking (Annotations) 

Example running a build manual tree shaking with annotations. 

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

## Few key insights

- By default if a module is imported and not used, it is removed from bundle
- If it is imported but used, then it is kept 
- If it is imported but used and has annotations, then it is removed from bundle 
- If it is imported but used and has annotations but it has a reference to results then it is kept.

### Annotations

- `/* @__PURE__ */`
- `/* #__PURE__ */`

## References

For more options, and information please visit the [documentation](https://esbuild.github.io/api/#build-api).

### Useful links

- [Tree shaking](https://esbuild.github.io/api/#tree-shaking)
- [define](https://esbuild.github.io/api/#define)
