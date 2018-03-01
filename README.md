# React App Rewired - Demo
* MobX (decorators)
* Styled Components (with babel-plugin-styled-components) 


### Rewired CRA Config
```javascript
const rewireMobX = require('react-app-rewire-mobx');
const { injectBabelPlugin } = require("react-app-rewired");

/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewireMobX(config,env);
  config = injectBabelPlugin("babel-plugin-styled-components", config);
  return config;
}
```

# Details
Learn how to rewire your app here https://github.com/timarney/react-app-rewired
