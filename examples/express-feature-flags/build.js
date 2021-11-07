require('dotenv').config();
const esbuild = require('esbuild');

// Convert env vars from string to boolean
function toBoolean(str) {
  if (str === 'false' || str === 'False') return false;
  if (str === 'true' || str === 'True') return true;
  return str;
}

// Grab all the feature flags and set `process.env.{envName}`
const getFeatureFlags = () => {
  return Object.keys(process.env)
    .reduce((acc, curr) => {
      if (curr.match(/FEATURE/)) {
        acc[`process.env.${curr}`] = toBoolean(process.env[curr]);
      }
      return acc;
    }, {});
}

if (process.env.NODE_ENV !== 'production') {
  console.log('feature flags: ', JSON.stringify(getFeatureFlags(), null, 4));
}

esbuild.build({
  entryPoints: ['./src/index.ts'],
  external: ['express', 'dotenv'],
  platform: 'node',
  bundle: true,
  define: {
    ...getFeatureFlags()
  },
  outfile: './dist/index.js',
  tsconfig: './tsconfig.json',
});
