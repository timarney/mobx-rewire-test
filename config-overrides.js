const rewireMobX = require('react-app-rewire-mobx');
const rewirePreact = require('react-app-rewire-preact');

/* config-overrides.js */
module.exports = function override(config, env) {
  if (env === "production") {
    console.log("⚡ Production build with Preact");
    config = rewirePreact(config, env);
  }

  config = rewireMobX(config, env);
  return config;
}