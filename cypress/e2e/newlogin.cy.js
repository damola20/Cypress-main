describe("New Login Test", () => {
    it("should log in with valid credentials", () => {
        cy.visit("https://example.com/login"); // Replace with your login URL
    
        // Fill in the username and password fields
        cy.get("#username").type("your_username"); // Replace with your username selector
        cy.get("#password").type("your_password"); // Replace with your password selector
    
        // Click the login button
        cy.get("#login-button").click(); // Replace with your login button selector
    
        // Verify successful login by checking for a specific element on the dashboard
        cy.url().should("include", "/dashboard"); // Replace with the expected URL after login
        cy.get("#welcome-message").should("contain", "Welcome"); // Replace with an element that indicates a successful login
    });
});

describe("New Login Test", () => {
    it("should log in with valid credentials", () => {
        cy.visit("https://example.com/login"); // Replace with your login URL
    
        // Fill in the username and password fields
        cy.get("#username").type("your_username"); // Replace with your username selector
        cy.get("#password").type("your_password"); // Replace with your password selector
    
        // Click the login button
        cy.get("#login-button").click(); // Replace with your login button selector
    
        // Verify successful login by checking for a specific element on the dashboard
        cy.url().should("include", "/dashboard"); // Replace with the expected URL after login
        cy.get("#welcome-message").should("contain", "Welcome"); // Replace with an element that indicates a successful login
    });
})