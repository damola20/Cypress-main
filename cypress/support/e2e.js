// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

import "cypress-mailslurp"

// Alternatively you can use CommonJS syntax:
// require('./commands')


// This will hide all requests (xhr and fetch logs) in the command log
const app = window.top;
if (!app.document.head.querySelector("[data-hide-command-log-request]")) {
 const style = app.document.createElement("style");
 style.innerHTML =".command-name-request, .command-name-xhr { display: none }";
 style.setAttribute("data-hide-command-log-request", "");
 app.document.head.appendChild(style); 
}

// ignore error from bootsrap 
Cypress.on('uncaught:exception', (err, runnable) => {
    // Returning false here prevents Cypress from failing the test
    if (err.message.includes('bootstrap is not defined')) {
        return false;
    }
  
});

// Plugin for tabs 
require('cypress-plugin-tab')


// plugin for xpath 
require('cypress-xpath')

//mochawesome reporting
import 'cypress-mochawesome-reporter/register'
