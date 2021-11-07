const path = require('path');
const fs = require('fs');
const esbuild = require(
'esbuild'
);

const rootDir = process.cwd();

const optimizePlugin = {
  name: 'optimize',
  setup(build) {
    build.onResolve({ filter: /\.tsx/ }, (args) => {
      console.log(args);

      return {
        path: path.join(rootDir, args.path),
        //resolveDir: args.resolveDir,
      }
    })

    //build.onLoad({ filter: /.*/, namespace: 'ts' }, (args) => {
      //console.log('onLoad : ', args);
      //const file = fs.readFileSync(args.path, 'utf8');

      ////console.log(args);
      ////if (file.match(/@mui/)) {
        ////console.log(file);
      ////}
      ////console.log(file);

      ////const result = esbuild.transformSync(file, {
        ////loader: 'tsx'
      ////})
      ////console.log(result);

      //return { contents: file, loader: 'tsx' };
    //});
  },
}

module.exports = {
  optimizePlugin
};
