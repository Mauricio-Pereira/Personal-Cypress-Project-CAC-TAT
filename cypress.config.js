const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '81jhhx',
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
        this.viewportHeight=1280
        this.viewportWidth=768
    },
  },
});
