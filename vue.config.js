const Critters = require("critters-webpack-plugin");

module.exports = {
  plugins: [
    new Critters({
      // Outputs: <link rel="preload" onload="this.rel='stylesheet'">
      preload: "swap",

      // Don't inline critical font-face rules, but preload the font URLs:
      preloadFonts: true,
    }),
  ],
};
