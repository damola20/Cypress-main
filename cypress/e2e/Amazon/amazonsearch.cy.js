describe('search functionality', () =>{
    it('Should display search results for a valid product', () => {
        cy.visit('https://www.amazon.com');
        cy.get('#twotabsearchtextbox').type('laptop');
        cy.get('#nav-search-submit-button').click();
        cy.get('.s-main-slot').should('exist');
      });
})