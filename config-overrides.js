const rewireMobX = require('react-app-rewire-mobx');
const rewirePreact = require('react-app-rewire-preact');
const {injectBabelPlugin} = require('react-app-rewired');


/* config-overrides.js */
module.exports = function override(config, env) {
  if (env === "production") {
    console.log("⚡ Production build with Preact");
    config = rewirePreact(config, env);
  }

  config = rewireMobX(injectBabelPlugin(config,'emotion/babel'),env);
  return config;
}