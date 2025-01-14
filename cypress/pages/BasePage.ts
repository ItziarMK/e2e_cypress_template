export default abstract class BasePage {
  protected abstract path: string;

  visit() {
    cy.visit(this.path);
  }

  getElement(selector: string) {
    return cy.get(selector);
  }

  // Common methods that all pages might need
  waitForPageLoad() {
    cy.window()
      .should("have.property", "document")
      .its("readyState")
      .should("eq", "complete");
  }
}
