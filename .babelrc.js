const babelConfig = {
  presets: [],
  plugins: []
};

if (process.env.BABEL_ENV === "rollup") {
  babelConfig.presets.push(["env", { modules: false }]);
  babelConfig.plugins.push("external-helpers");
} else {
  babelConfig.presets.push("env");
}

babelConfig.presets.push("react");

module.exports = babelConfig;
