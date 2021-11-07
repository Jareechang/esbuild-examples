# Express (with applied tree shaking)

Example of running a simple express server using feature flags by leveraging tree shaking.

Based on the value in `.env`, it will contain a particular api in the final builds.

This offers several advantages:

- Allows for merging to `main` / `master` branch for `wip` work while turning it off on release  
- `main` / `master` always becomes single source of truth (removes the need of `develop` -> `release` -> `master` / `main`)   
  - most update to date code will always be on `main` and `master`  


This code is removed at build time and we are injecting this into the build via `dotenv`.

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

## Usage


**Create .env:**
```sh

// Off
FEATURE_FLAG_PRODUCT=false

// Off
FEATURE_FLAG_PRODUCT=true
```

3. Call api

```sh
curl http://localhost:3001/api/products

// With jq
curl http://localhost:3001/api/products | jq
```

## References

For more options, and information please visit the [documentation](https://esbuild.github.io/api/#build-api).

- [define](https://esbuild.github.io/api/#define)
