describe("Login functionality tests", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
  });

  it("should validate successful login and redirect to inventory page", () => {
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.url().should("include", "/inventory.html");
    cy.get(".title").should("contain.text", "Products");
  });

  it("should show error message for invalid password", () => {
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauc"); // wrong password
    cy.get("#login-button").click();
    cy.get('[data-test="error"]').should(
      "have.text",
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

});
