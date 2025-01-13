Feature: Todo List Management
  As a user
  I want to manage my todo list
  So that I can keep track of my tasks

  Background:
    Given I am on the todo application
    
  Scenario: Add new todo items
    When I enter "buy some cheese" in the todo input
    And I press Enter
    Then I should see "buy some cheese" in the todo list
    When I enter "feed the cat" in the todo input
    And I press Enter
    Then I should see the following items in the todo list:
      | buy some cheese |
      | feed the cat    |
    And the todo count should show "2 items left"

  Scenario: Clear input field after adding item
    When I enter "buy some cheese" in the todo input
    And I press Enter
    Then the input field should be empty
    And the todo count should show "1 item left"

  Scenario: Mark items as completed
    Given I have the following todos:
      | buy some cheese |
      | feed the cat    |
    When I check the first todo item
    Then the first todo should be marked as completed
    And the second todo should not be marked as completed
    When I check the second todo item
    Then both todos should be marked as completed

  Scenario: Edit todo item
    Given I have the following todos:
      | buy some cheese            |
      | feed the cat              |
      | book a doctors appointment |
    When I double click on the second todo
    And I change its text to "buy some sausages"
    And I press Enter
    Then I should see the following items in the todo list:
      | buy some cheese            |
      | buy some sausages         |
      | book a doctors appointment |

  Scenario: Filter todos
    Given I have the following todos:
      | buy some cheese            |
      | feed the cat              |
      | book a doctors appointment |
    And I mark the second todo as completed
    When I click on "Active" filter
    Then I should see only active todos
    When I click on "Completed" filter
    Then I should see only completed todos
    When I click on "All" filter
    Then I should see all todos