describe('Visit Page', () => {
    it('should visit parabank', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.url().should('include', 'parabank')
        cy.get('.caption').should('have.text', 'Experience the difference')
    })
})