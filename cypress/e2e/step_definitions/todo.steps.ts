import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the todo application", () => {
  const baseUrl = Cypress.config("baseUrl");
  cy.visit(baseUrl);
});

Given("I have the following todos:", (dataTable) => {
  const todos = dataTable.raw().map((row) => row[0]);
  todos.forEach((todo) => {
    cy.get('input[placeholder="What needs to be done?"]')
      .type(todo)
      .type("{enter}");
  });
});

When("I enter {string} in the todo input", (text) => {
  cy.get('input[placeholder="What needs to be done?"]').type(text);
});

When("I press Enter", () => {
  cy.get('input[placeholder="What needs to be done?"]').type("{enter}");
});

When("I check the first todo item", () => {
  cy.get('[data-testid="todo-item"]')
    .first()
    .find('input[type="checkbox"]')
    .check();
});

When("I check the second todo item", () => {
  cy.get('[data-testid="todo-item"]')
    .eq(1)
    .find('input[type="checkbox"]')
    .check();
});

When("I double click on the second todo", () => {
  cy.get('[data-testid="todo-item"]').eq(1).dblclick();
});

When("I change its text to {string}", (newText) => {
  cy.get('input[role="textbox"][name="Edit"]')
    .clear()
    .type(newText)
    .type("{enter}");
});

When("I click on {string} filter", (filter) => {
  cy.contains("a", filter).click();
});

Given("I mark the second todo as completed", () => {
  cy.get('[data-testid="todo-item"]')
    .eq(1)
    .find('input[type="checkbox"]')
    .check();
});

Then("I should see {string} in the todo list", (text) => {
  cy.contains('[data-testid="todo-title"]', text).should("be.visible");
});

Then("the input field should be empty", () => {
  cy.get('input[placeholder="What needs to be done?"]').should(
    "have.value",
    ""
  );
});

Then("the todo count should show {string}", (count) => {
  cy.get('[data-testid="todo-count"]').should("have.text", count);
});

Then("the first todo should be marked as completed", () => {
  cy.get('[data-testid="todo-item"]').first().should("have.class", "completed");
});

Then("the second todo should not be marked as completed", () => {
  cy.get('[data-testid="todo-item"]')
    .eq(1)
    .should("not.have.class", "completed");
});

Then("both todos should be marked as completed", () => {
  cy.get('[data-testid="todo-item"]').each((item) => {
    cy.wrap(item).should("have.class", "completed");
  });
});

Then("I should see the following items in the todo list:", (dataTable) => {
  const expectedTodos = dataTable.raw().map((row) => row[0]);
  expectedTodos.forEach((todo) => {
    cy.contains('[data-testid="todo-title"]', todo).should("be.visible");
  });
});

Then("I should see only active todos", () => {
  cy.get('[data-testid="todo-item"]')
    .should("have.length", 2)
    .and("not.have.class", "completed");
});

Then("I should see only completed todos", () => {
  cy.get('[data-testid="todo-item"]')
    .should("have.length", 1)
    .and("have.class", "completed");
});

Then("I should see all todos", () => {
  cy.get('[data-testid="todo-item"]').should("have.length", 3);
});
