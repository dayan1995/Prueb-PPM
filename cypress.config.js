const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    pageLoadTimeout: 50000,
    defaultCommandTimeout: 120000,

    setupNodeEvents(on, config) {
      // aquí van plugins si los usas
      return config;
    },
  },
});
