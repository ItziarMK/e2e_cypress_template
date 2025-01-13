export {};

declare global {
  namespace Cypress {
    interface Chainable {
      login: () => void;
    }
  }
}

Cypress.Commands.add("login", () => {
  cy.log("Login command executed");
});

// cypress/support/e2e.js
require("./commands");
