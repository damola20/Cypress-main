describe("Login functionality tests", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
  });
    // Test case to validate login functionality
  it("should validate successful login and redirect to inventory page", () => {
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.url().should("include", "/inventory.html");
    cy.get(".title").should("contain.text", "Products");
  });
    // Test case to validate login with invalid credentials
  it("should show error message for invalid password", () => {
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauc"); // wrong password
    cy.get("#login-button").click();
    cy.get('[data-test="error"]').should(
      "have.text",
      "Epic sadface: Username and password do not match any user in this service"
    );
  });
  // Test case to validate login with locked out user
  it("should show error message for locked out user", () => {
    cy.get("#user-name").type("locked_out_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.get('[data-test="error"]').should(
      "have.text",
      "Epic sadface: Sorry, this user has been locked out."
    );
  });

    // Test case to validate login with empty credentials
    it("should show error message for empty credentials", () => {
        cy.get("#login-button").click();
        cy.get('[data-test="error"]').should(
            "have.text",
            "Epic sadface: Username is required"
        );
    })

});
