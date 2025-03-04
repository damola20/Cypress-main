describe("Cypress test kitchen- Automated tests", function(){
    // Verify homepage loads correctly
    it("should load the homepage", function(){
        cy.visit("https://example.cypress.io/")
        cy.title().should("eq", "Cypress.io: Kitchen Sink")
    })

    // verify navigation to the querying commands page
    it("should navigate to the querying commands page", function(){
        cy.visit("https://example.cypress.io/")
        cy.contains("Commands").click()
        cy.contains("Querying").click()
        cy.url().should("include", "/commands/querying")
        
    })

    // verify form submission
    it('should be able to submit a form successful', function() {
        cy.visit("https://example.cypress.io/commands/actions")
        cy.get('.action-email').type('test@example.com');
        cy.get('.action-form [type="submit"]').click();
        cy.get('.well > p').should('contain', 'Your form has been submitted!');
    })

    // Verify checkbox interactions
    it('should be able to submit a form successful', function() {
        cy.visit("https://example.cypress.io/commands/actions")
        cy.get('.action-checkboxes [type="checkbox"]').first().check().should('be.checked')
    })


    // validate dropdown selection
    it('should select a dropdown option', function() {
        cy.visit("https://example.cypress.io/commands/actions")
        cy.get('.action-select').select('apples').should('have.value', 'fr-apples')
    })
})