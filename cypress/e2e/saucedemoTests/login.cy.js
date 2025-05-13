describe("Login functionality tests", () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/");
    })

    it("Valid login", () => {
        cy.get("#user-name").type("standard_user");
        cy.get("#password").type("secret_sauce");
        cy.get("#login-button").click();
        cy.url().should("include", "/inventory.html");
        cy.get(".title").should("contain.text", "Products");
    })
})