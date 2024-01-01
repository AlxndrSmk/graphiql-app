import { defineConfig } from 'cypress';
import PluginEvents = Cypress.PluginEvents;
import PluginConfigOptions = Cypress.PluginConfigOptions;

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on: PluginEvents, config: PluginConfigOptions) {
      require('@cypress/code-coverage/task')(on, config);
      config.env = {
        ...process.env,
        ...config.env,
      };
    },
  },
});
