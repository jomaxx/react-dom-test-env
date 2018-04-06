// yarn add --dev rollup-plugin-babel rollup

const path = require("path");
const babel = require("rollup-plugin-babel");

const cwd = process.cwd();
const pkg = require(path.resolve(cwd, "package.json"));

process.env.BABEL_ENV = "rollup";

module.exports = {
  input: require.resolve(path.resolve(cwd, "src")),

  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {})
  ],

  output: [
    {
      file: path.resolve(cwd, pkg.main),
      format: "cjs"
    },

    pkg.module && {
      file: path.resolve(cwd, pkg.module),
      format: "es"
    }
  ].filter(Boolean),

  plugins: [babel()]
};
