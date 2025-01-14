# E2E Testing Template with Cypress & Cucumber

## Setup

1. Clone this repository
2. Copy `.env.example` to `.env.local` and update the values
3. Install dependencies: `pnpm install`

## Running Tests

- Open Cypress UI: `pnpm run cy:open`
- Run all tests: `pnpm run cy:run`
- Run tests in specific browser: `pnpm run cy:run:chrome`
- Generate report: `pnpm run report:generate`

## Project Structure

- `cypress/e2e/features`: Cucumber feature files
- `cypress/e2e/step_definitions`: Step definitions
- `cypress/pages`: Page Object Models
- `cypress/fixtures`: Test data
- `cypress/support`: Custom commands and configurations
- `cypress/utils`: Helper functions

## Best Practices

- Use Page Object Model pattern
- Keep step definitions small and reusable
- Use custom commands for repeated actions
- Store selectors in page objects
- Use fixtures for test data
- Use API calls for test setup when possible
