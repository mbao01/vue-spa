var Critters = require("critters-webpack-plugin");
var PrerenderSpaPlugin = require("prerender-spa-plugin");
var GimbalPlugin = require("webpack-gimbal-plugin");
var path = require("path");

module.exports = {
  chainWebpack: (config) => {
    config.plugins.delete("prefetch");
  },
  configureWebpack: () => {
    if (process.env.NODE_ENV !== "production") return;

    return {
      plugins: [
        new PrerenderSpaPlugin({
          // Absolute path to compiled SPA
          staticDir: path.resolve(__dirname, "dist"),
          // List of routes to prerender
          routes: ["/", "/about", "/store"],
        }),
        new Critters({
          // Outputs: <link rel="preload" onload="this.rel='stylesheet'">
          preload: "swap",

          // Don't inline critical font-face rules, but preload the font URLs:
          preloadFonts: true,
        }),
        new GimbalPlugin({ bail: true }),
      ],
    };
  },
  devServer: {
    inline: true,
    hot: true,
    stats: "minimal",
    contentBase: __dirname,
    overlay: true,
    historyApiFallback: true,
  },
};
