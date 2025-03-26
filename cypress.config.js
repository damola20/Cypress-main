const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
  
    },
    experimentalStudio: true, // Enable Cypress Studio
    video: false, // disables video recording
    defaultCommandTimeout: 60000, // default global command timeout
    reporter: 'cypress-mochawesome-reporter', // makes an html reports for test
    screenshotOnRunFailure: false, // disables screenshot on run-failure failure
    pageLoadTimeout: 120000, // default page load timeout
    downloadsFolder: 'cypress/downloads', // downloads
  
    
    
  
  },
});




