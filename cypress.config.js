const { defineConfig } = require("cypress");
const schemaPlugin = require('cypress-ajv-auto-schema');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      schemaPlugin(on, config);
      return config;
    },
    env: {
      // cjsSchemasDir: "cypress/fixtures/api/schemas"
    }
  },
});
