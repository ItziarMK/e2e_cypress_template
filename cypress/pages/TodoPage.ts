import BasePage from "./BasePage";

class TodoPage extends BasePage {
  protected path = "/todos";

  // Selectors
  private selectors = {
    newTodoInput: '[data-test="new-todo"]',
    todoList: '[data-test="todo-list"]',
    todoItem: '[data-test="todo-item"]',
  };

  // Actions
  addTodo(text: string) {
    cy.get(this.selectors.newTodoInput).type(`${text}{enter}`);
  }

  getTodoItems() {
    return cy.get(this.selectors.todoItem);
  }
}

export default new TodoPage();
