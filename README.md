# Cypress Cucumber E2E Testing Template

A template for end-to-end testing using Cypress with Cucumber/Gherkin syntax, managed with PNPM.

## 🚀 Features

- Cypress 13.x
- Cucumber/Gherkin for BDD-style tests
- TypeScript support
- PNPM for fast, disk-space efficient package management
- ESLint & Prettier configuration
- Page Object Model pattern
- Environment configuration
- Custom Cypress commands

## 📋 Prerequisites

- Node.js (v16 or higher)
- PNPM (`npm install -g pnpm`)

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/your-repo/cypress-cucumber-template.git
cd cypress-cucumber-template
```

2. Install dependencies:

```bash
pnpm install
```

## 📝 Writing Tests

### Feature File Example

```gherkin
Feature: Todo List Management
  As a user
  I want to manage my todo list
  So that I can keep track of my tasks

  Scenario: Add new todo item
    Given I am on the todo application
    When I enter "buy some cheese" in the todo input
    And I press Enter
    Then I should see "buy some cheese" in the todo list
```

### Step Definition Example

```typescript
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the todo application", () => {
  const baseUrl = Cypress.config("baseUrl");
  cy.visit(baseUrl);
});

When("I enter {string} in the todo input", (text: string) => {
  cy.get('input[placeholder="What needs to be done?"]').type(text);
});
```

## 🔧 Environment Variables

| Variable              | Description     | Example                             |
| --------------------- | --------------- | ----------------------------------- |
| CYPRESS_BASE_URL      | Application URL | https://demo.playwright.dev/todomvc |
| CYPRESS_TEST_USERNAME | Test username   | testuser                            |
| CYPRESS_TEST_PASSWORD | Test password   | testpassword                        |

## 🔍 Best Practices

1. **Feature Files**

   - Write scenarios in business language
   - Use Background for common steps
   - Keep scenarios focused and atomic

2. **Step Definitions**

   - Reuse step definitions when possible
   - Use descriptive step names
   - Implement proper assertions

3. **Page Objects**
   - Encapsulate page elements and actions
   - Use data-testid attributes for selectors
   - Keep methods focused and reusable

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📚 Additional Resources

- [Cypress Documentation](https://docs.cypress.io)
- [Cucumber Documentation](https://cucumber.io/docs/cucumber/)
- [@badeball/cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
