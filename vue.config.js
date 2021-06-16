var GimbalPlugin = require("webpack-gimbal-plugin");

module.export = {
  configureWebpack: () => {
    return {
      plugins: [new GimbalPlugin({ bail: true })],
    };
  },
};
