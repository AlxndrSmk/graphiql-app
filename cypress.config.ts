import { defineConfig } from 'cypress';
import PluginEvents = Cypress.PluginEvents;
import PluginConfigOptions = Cypress.PluginConfigOptions;

export default defineConfig({
  e2e: {
    setupNodeEvents(on: PluginEvents, config: PluginConfigOptions) {
      // // implement node event listeners here
      require('@cypress/code-coverage/task')(on, config);
      config.env = {
        ...process.env,
        ...config.env,
      };
    },
  },
});
