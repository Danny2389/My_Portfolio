const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '91oyp2',
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // you can add plugins here if needed
    },
    supportFile: false, // disable support file if not used
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
